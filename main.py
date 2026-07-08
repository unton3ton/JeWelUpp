'''
ollama run gemma4:12b
https://ollama.com/library/gemma4:12b

pip install -r requirements.txt
python main.py

«JeWelUpp» : Want to upgrade from «je wel» 2 «jewel»? Want je wel zijn is niet genoeg.
'''

from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware
import base64
import json
import requests
import uvicorn
import re
from pydantic import BaseModel
from typing import Optional

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.mount("/static", StaticFiles(directory="static"), name="static")

OLLAMA_BASE_URL = "http://localhost:11434"
OLLAMA_URL = f"{OLLAMA_BASE_URL}/api/generate"
MODEL = "gemma4:12b"  # ← Ваша модель

class TextGenerationRequest(BaseModel):
    verb_group: str
    verbs: list[dict]
    custom_prompt: Optional[str] = None

def encode_image(image_bytes: bytes) -> str:
    return base64.b64encode(image_bytes).decode("utf-8")

def check_ollama_available() -> bool:
    try:
        response = requests.get(f"{OLLAMA_BASE_URL}/api/tags", timeout=5)
        return response.status_code == 200
    except:
        return False

def get_available_models() -> list:
    try:
        response = requests.get(f"{OLLAMA_BASE_URL}/api/tags", timeout=5)
        if response.status_code == 200:
            data = response.json()
            return [m["name"] for m in data.get("models", [])]
    except:
        pass
    return []

def check_model_supports_vision(model_name: str) -> bool:
    """Проверяет, поддерживает ли модель vision (по названию)"""
    vision_keywords = [
        "llava", "vision", "gemma3", "gemma4", "minicpm-v", 
        "bakllava", "moondream", "qwen2-vl", "llama3.2-vision"
    ]
    return any(keyword in model_name.lower() for keyword in vision_keywords)

def validate_response(text: str, expected_verbs_count: int) -> dict:
    if not text:
        return {"valid": False, "has_text": False, "has_answers": False, "answers_count": 0}
    
    blanks = re.findall(r'\[___\]', text)
    has_text = len(blanks) >= expected_verbs_count
    
    answers = re.findall(r'\[([^\]]+)\]\s*[-–—]\s*([^\n\[]+)', text)
    has_answers = len(answers) > 0
    
    return {
        "valid": has_text and has_answers,
        "has_text": has_text,
        "has_answers": has_answers,
        "answers_count": len(answers),
        "blanks_count": len(blanks)
    }

def call_ollama(prompt: str, images: list[str] = None) -> str:
    """Вызов Ollama API с поддержкой изображений"""
    payload = {
        "model": MODEL,
        "prompt": prompt,
        "stream": False,
    }
    
    if images:
        payload["images"] = images
        print(f"Отправляем {len(images)} изображений в Ollama (размер: {len(images[0])} символов base64)")
    
    try:
        response = requests.post(OLLAMA_URL, json=payload, timeout=180)
        response.raise_for_status()
        result = response.json()
        return result.get("response", "")
    except requests.exceptions.ConnectionError:
        raise HTTPException(
            status_code=503, 
            detail=f"Ollama не запущена! Запустите: ollama serve"
        )
    except requests.exceptions.HTTPError as e:
        if e.response.status_code == 404:
            models = get_available_models()
            raise HTTPException(
                status_code=404,
                detail=f"Модель '{MODEL}' не найдена. "
                       f"Доступные: {', '.join(models) if models else 'нет'}. "
                       f"Установите: ollama pull {MODEL}"
            )
        raise HTTPException(status_code=500, detail=f"HTTP ошибка: {str(e)}")
    except requests.exceptions.Timeout:
        raise HTTPException(status_code=504, detail="Таймаут ответа от Ollama")
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Ошибка: {str(e)}")

def generate_with_retry(
    prompt: str, 
    expected_verbs_count: int, 
    images: list[str] = None,
    max_retries: int = 2
) -> dict:
    last_response = ""
    
    for attempt in range(max_retries + 1):
        try:
            response = call_ollama(prompt, images=images)
            last_response = response
            
            validation = validate_response(response, expected_verbs_count)
            
            if validation["valid"]:
                return {
                    "text": response,
                    "attempts": attempt + 1,
                    "valid": True,
                    "validation": validation
                }
            
            if attempt < max_retries:
                print(f"Попытка {attempt + 1}: ответ невалиден "
                      f"(текст: {validation['has_text']}, "
                      f"ответы: {validation['has_answers']}). Повтор...")
                prompt = prompt + "\n\n ВАЖНО: Обязательно включи ОБА пункта: и текст с [___], и список ответов!"
        except HTTPException as e:
            return {"text": "", "attempts": attempt + 1, "valid": False, "error": str(e.detail)}
    
    return {
        "text": last_response,
        "attempts": max_retries + 1,
        "valid": False,
        "validation": validate_response(last_response, expected_verbs_count)
    }

@app.get("/", response_class=HTMLResponse)
async def root():
    with open("static/index.html", "r", encoding="utf-8") as f:
        return f.read()

@app.get("/api/health")
async def health_check():
    available = check_ollama_available()
    models = get_available_models() if available else []
    vision_models = [m for m in models if check_model_supports_vision(m)]
    
    return {
        "ollama_available": available,
        "models": models,
        "vision_models": vision_models,
        "current_model": MODEL,
        "current_model_supports_vision": check_model_supports_vision(MODEL),
        "ollama_url": OLLAMA_BASE_URL
    }

@app.post("/api/generate-text")
async def generate_text(request: TextGenerationRequest):
    try:
        verbs_count = len(request.verbs)
        
        verbs_list = "\n".join([f"  - [{v['english']}] — {v['russian']}" for v in request.verbs])
        
        prompt = f"""Ты — учитель английского языка. Создай упражнение с фразовыми глаголами.

Используй РОВНО эти {verbs_count} глаголов (каждый один раз):
{verbs_list}

ОТВЕТ ДОЛЖЕН СОСТОЯТЬ ИЗ ДВУХ ЧАСТЕЙ:

=== ЧАСТЬ 1: ТЕКСТ ===
Напиши связный текст на английском (4-6 предложений). 
Текст должен обладать общим сюжетом., то есть предложения описывают связанные между собой события.
ВАЖНО: Замени КАЖДЫЙ фразовый глагол на [___]
В тексте должно быть РОВНО {verbs_count} пропусков [___]

=== ЧАСТЬ 2: СПИСОК ОТВЕТОВ ===
После текста (через пустую строку) выведи список использованных глаголов в формате:
[глагол] — перевод

ПРИМЕР ПРАВИЛЬНОГО ОТВЕТА:
Yesterday I [___] early and [___] my coat. Then I [___] to work and [___] a meeting.
[wake up] — просыпаться
[put on] — надевать
[go out] — выходить
[carry out] — проводить

НАЧНИ С ТЕКСТА. НЕ ПИШИ ТОЛЬКО СПИСОК!"""

        result = generate_with_retry(prompt, verbs_count, images=None, max_retries=2)
        
        return {
            "text": result["text"],
            "success": result["valid"],
            "attempts": result["attempts"],
            "needs_fallback": not result["valid"],
            "validation": result.get("validation", {}),
            "error": result.get("error")
        }
    except Exception as e:
        return {"error": str(e), "success": False}

@app.post("/api/describe-image")
async def describe_image(file: UploadFile = File(...)):
    try:
        image_bytes = await file.read()
        base64_image = encode_image(image_bytes)
        
        # теперь всегда пытаемся вызвать Ollama
        if not check_model_supports_vision(MODEL):
            print(f"Модель '{MODEL}' может не поддерживать vision, но всё равно пробуем...")
        
        prompt = """Ты — учитель английского. Посмотри на изображение и создай упражнение.

ОТВЕТ ДОЛЖЕН СОСТОЯТЬ ИЗ ДВУХ ЧАСТЕЙ:

=== ЧАСТЬ 1: ПРЕДЛОЖЕНИЕ ===
Опиши изображение несколькими предложениями на английском.
В предложениях поставь пропуски [___] вместо фразовых глаголов.

=== ЧАСТЬ 2: ВАРИАНТЫ ОТВЕТОВ ===
После предложения (через пустую строку) выведи 5 вариантов в формате:
[глагол] — перевод

ПЕРВЫМ должен идти ПРАВИЛЬНЫЙ ответ (тот, что подходит по смыслу к изображению).
Остальные 4 — неправильные, но похожие по форме.

ПРИМЕР:
The woman is [___] the children at the park.
[look after] — присматривать
[look for] — искать
[look at] — смотреть
[look into] — исследовать
[look out] — остерегаться

НАЧНИ С ПРЕДЛОЖЕНИЯ. НЕ ПИШИ ТОЛЬКО СПИСОК!"""

        print(f"Анализ изображения: размер {len(image_bytes)} байт, base64: {len(base64_image)} символов")
        
        # ВСЕГДА передаём изображение в Ollama
        result = generate_with_retry(
            prompt, 
            expected_verbs_count=1, 
            images=[base64_image],
            max_retries=2
        )
        
        return {
            "description": result["text"],
            "success": result["valid"],
            "attempts": result["attempts"],
            "needs_fallback": not result["valid"],
            "validation": result.get("validation", {}),
            "error": result.get("error")
        }
    except HTTPException as e:
        print(f"HTTP ошибка при анализе изображения: {e.detail}")
        return {"error": e.detail, "success": False, "needs_fallback": True, "attempts": 0}
    except Exception as e:
        print(f"Ошибка при анализе изображения: {str(e)}")
        return {"error": str(e), "success": False, "needs_fallback": True, "attempts": 0}

if __name__ == "__main__":
    print("=" * 60)
    print("Запуск сервера...")
    print(f"Ollama URL: {OLLAMA_BASE_URL}")
    print(f"Модель: {MODEL}")
    print(f"Поддержка vision: {check_model_supports_vision(MODEL)}")
    
    if check_ollama_available():
        print("Ollama доступна")
        models = get_available_models()
        if models:
            print(f"Все модели: {', '.join(models)}")
            vision_models = [m for m in models if check_model_supports_vision(m)]
            if vision_models:
                print(f"Модели с vision: {', '.join(vision_models)}")
            else:
                print("НЕТ моделей с поддержкой vision!")
                print("Установите: ollama pull llava:7b")
        
        if MODEL not in models:
            print(f"ВНИМАНИЕ: Модель '{MODEL}' не найдена!")
            print(f"Установите: ollama pull {MODEL}")
    else:
        print("Ollama НЕ доступна!")
        print("Запустите: ollama serve")
    print("=" * 60)
    
    uvicorn.run(app, host="0.0.0.0", port=8000)
    
'''
1. Ежедневная рутина и быт
Эти фразовые глаголы описывают то, что мы делаем каждый день.

Wake up — просыпаться. I usually wake up at 7 a.m.

Get up — вставать с кровати. I wake up early, but I get up at 8.

Put on — надевать одежду, обувь, макияж. Put on your coat; it’s cold.

Take off — снимать одежду; взлетать. Please take off your shoes. / The plane takes off at noon.

Go out — выходить куда-то, проводить время вне дома. Do you want to go out tonight?

Get in / Get out of — садиться в машину / выходить из машины.

Get on / Get off — садиться в транспорт / выходить из него.

2. Общение и социальные взаимодействия
Эти глаголы помогают описывать отношения с людьми.

Get along (with) — ладить с кем-то. I get along well with my colleagues.

Hang out — проводить время вместе, тусоваться. We love hanging out in the park.

Call back — перезвонить. I’m busy now, can I call you back?

Find out — узнавать, выяснять информацию. I need to find out what time the train leaves.

Look for — искать что-то или кого-то. I’m looking for my keys.

Tell off — отругать кого-то. The teacher told him off for being late.

3. Работа, задачи и прогресс
Полезно для офиса, учёбы и повседневных задач.

Give up — сдаваться; бросать привычку. Don’t give up! You’re doing great. / He gave up smoking.

Look into — исследовать, изучать вопрос. The police are looking into the crime.

Set up — организовывать, устанавливать, настраивать. Let’s set up a meeting for Friday.

Turn down — отклонять предложение; убавлять громкость или свет. They turned down my offer. / Turn down the music.

Work out — тренироваться; решаться, получаться. I work out at the gym. / Everything will work out.

Carry out — выполнять, проводить. They carried out the instructions perfectly.

4. Движение и перемены
Go on — продолжать. Please go on reading.

Hold on — подождать, подержать линию. Hold on a second, please.

Break down — ломаться; не сдержать эмоции, разрыдаться. My car broke down in the middle of the road.

Run out of — заканчиваться. We’re running out of milk.

Come across — случайно встретить или обнаружить. I came across an old photo.
'''

"""
1. Daily routine
Wake up — просыпаться.

Get up — вставать с кровати.

Put on — надевать.

Take off — снимать.

Go out — выходить куда-то.

Get in / Get out of — садиться в машину / выходить из машины.

Get on / Get off — садиться в транспорт / выходить из него.

2. People and social life
Get along with — ладить с кем-то.

Hang out — проводить время вместе.

Call back — перезвонить.

Find out — выяснять, узнавать.

Look for — искать.

Tell off — ругать.

3. Work and tasks
Give up — сдаваться, бросать.

Look into — изучать, разбираться.

Set up — организовывать, настраивать.

Turn down — отклонять, убавлять.

Work out — тренироваться; получаться, решаться.

Carry out — выполнять, проводить.

4. Movement and change
Go on — продолжать.

Hold on — подожди.

Break down — ломаться.

Run out of — заканчиваться.

Come across — случайно находить, наткнуться.

Самые важные пары
Wake up — проснуться, get up — встать.

Find out — узнать, look for — искать.

Give up — сдаться, carry out — выполнить.

Run out of — закончиться, come across — наткнуться.

Быстрое повторение
Wake up — просыпаться.

Get up — вставать.

Put on — надевать.

Take off — снимать.

Get along with — ладить.

Look for — искать.

Give up — сдаваться.

Work out — тренироваться / получаться.

Break down — ломаться.

Run out of — заканчиваться.
"""
