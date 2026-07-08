// Словарь фразовых глаголов
const phraseVerbs = {
    "about": [
        {english: "be about to", russian: "намереваться сделать что-л"},
        {english: "bring about", russian: "приводить (к чему-л), вызывать (что-л)"},
        {english: "come about", russian: "получаться, происходить"},
        {english: "get about", russian: "1) двигаться, свободно передвигаться; 2) распространяться (о новостях)"},
        {english: "go about", russian: "1) заниматься (чем-л); 2) продолжать делать (что-л)"},
        {english: "put about", russian: "распространять (слухи)"},
        {english: "run about", russian: "бегать туда-сюда"},
        {english: "see about", russian: "организовывать, обеспечивать, снабжать"},
        {english: "set about", russian: "начать (делать)"},
        {english: "stand about", russian: "стоять без дела"},
        {english: "turn about", russian: "поворачивать(ся) кругом"}
    ],
    "across": [
        {english: "come across", russian: "случайно найти или встретить"},
        {english: "get across", russian: "донести смысл"},
        {english: "put across", russian: "излагать, формулировать, донести информацию"},
        {english: "run across", russian: "случайно встретить (кого-л), натолкнуться"}
    ],
    "after": [
        {english: "be after", russian: "преследовать, идти по следам"},
        {english: "call after", russian: "назвать в честь (кого-л)"},
        {english: "come after", russian: "гнаться, охотиться (за кем-л)"},
        {english: "get after", russian: "преследовать (кого-л), охотиться (за кем-л)"},
        {english: "go after", russian: "1) идти (за кем-л); преследовать; 2) хотеть получить (что-л)"},
        {english: "look after", russian: "1) заботиться, ухаживать; 2) присматривать (за чьми-л вещами)"},
        {english: "make after", russian: "преследовать, гнаться"},
        {english: "run after", russian: "1) бежать (за кем-л); 2) стараться получить (что-л)"},
        {english: "take after", russian: "быть похожим"}
    ],
    "along": [
        {english: "bring along", russian: "приводить с собой"},
        {english: "come along", russian: "1) улучшаться, развиваться; 2) идти (куда-л с кем-л)"},
        {english: "get along", russian: "1) справляться; 2) ладить"},
        {english: "go along", russian: "двигаться, продвигаться"},
        {english: "go along with", russian: "соглашаться; подчиняться"},
        {english: "take along", russian: "брать с собой"}
    ],
    "away": [
        {english: "carry away", russian: "увлекать"},
        {english: "come away", russian: "уходить, покидать"},
        {english: "fall away", russian: "1) исчезать; 2) слабеть"},
        {english: "get away", russian: "сбежать, ускользнуть"},
        {english: "get away with", russian: "избежать наказания"},
        {english: "give away", russian: "1) отдать; 2) разгласить"},
        {english: "go away", russian: "уходить; прекращаться"},
        {english: "put away", russian: "убирать"},
        {english: "run away", russian: "убежать"},
        {english: "take away", russian: "забирать, убирать"},
        {english: "turn away", russian: "отказать; не впускать"}
    ],
    "back": [
        {english: "bring back", russian: "напоминать"},
        {english: "call back", russian: "перезвонить"},
        {english: "come back", russian: "возвращаться"},
        {english: "get back", russian: "возвращать"},
        {english: "give back", russian: "отдавать, возвращать"},
        {english: "go back", russian: "возвращаться"},
        {english: "hold back", russian: "сдерживать"},
        {english: "look back", russian: "оглядываться назад"},
        {english: "take back", russian: "возвращать"},
        {english: "turn back", russian: "поворачивать назад"}
    ],
    "down": [
        {english: "break down", russian: "1) ломаться; 2) разбивать на части"},
        {english: "bring down", russian: "уменьшить, снизить"},
        {english: "come down", russian: "спускаться, падать"},
        {english: "fall down", russian: "падать"},
        {english: "get down", russian: "спускаться"},
        {english: "go down", russian: "1) спускаться; 2) снижаться"},
        {english: "put down", russian: "записывать"},
        {english: "turn down", russian: "уменьшать, приглушать"}
    ],
    "up": [
        {english: "be up to", russian: "1) быть в состоянии; 2) затевать, замышлять"},
        {english: "break up", russian: "распадаться"},
        {english: "bring up", russian: "1) растить, воспитывать; 2) поднимать тему"},
        {english: "call up", russian: "1) вызывать воспоминания; 2) звонить"},
        {english: "come up", russian: "1) упоминаться; 2) возникать"},
        {english: "come up with", russian: "предложить план, идею"},
        {english: "get up", russian: "вставать"},
        {english: "give up", russian: "сдаваться, бросать"},
        {english: "look up", russian: "улучшаться; искать в справочнике"},
        {english: "make up", russian: "1) придумать; 2) мириться"},
        {english: "put up", russian: "1) строить; 2) размещать"},
        {english: "set up", russian: "организовать, настроить"},
        {english: "take up", russian: "занимать (время, пространство)"},
        {english: "turn up", russian: "прибавлять; появляться"}
    ],
    "out": [
        {english: "break out", russian: "внезапно начаться"},
        {english: "bring out", russian: "вызывать чувство; выпустить книгу"},
        {english: "come out", russian: "1) выйти; 2) становиться известным"},
        {english: "carry out", russian: "выполнять, осуществлять"},
        {english: "get out", russian: "выйти, уехать"},
        {english: "go out", russian: "гаснуть; выходить (в свет)"},
        {english: "look out", russian: "быть осторожным"},
        {english: "make out", russian: "различать, разобрать"},
        {english: "put out", russian: "тушить, гасить"},
        {english: "run out of", russian: "испытывать нехватку"},
        {english: "set out", russian: "отправиться в путешествие"},
        {english: "stand out", russian: "выделяться"},
        {english: "take out", russian: "1) доставать; 2) выводить пятно"},
        {english: "turn out", russian: "1) оказаться; 2) выключать"}
    ],
    "on": [
        {english: "bring on", russian: "навлекать"},
        {english: "call on", russian: "навещать; призывать"},
        {english: "carry on", russian: "продолжать"},
        {english: "come on", russian: "делать успехи"},
        {english: "get on", russian: "садиться на транспорт; справляться"},
        {english: "go on", russian: "продолжаться; происходить"},
        {english: "hold on", russian: "держаться; ждать"},
        {english: "put on", russian: "надевать"},
        {english: "take on", russian: "брать ответственность; нанимать"},
        {english: "turn on", russian: "включать"}
    ],
    "off": [
        {english: "break off", russian: "отломить"},
        {english: "call off", russian: "отменять"},
        {english: "come off", russian: "уходить; исходить"},
        {english: "fall off", russian: "отваливаться"},
        {english: "get off", russian: "снимать"},
        {english: "go off", russian: "звенеть; отключаться"},
        {english: "put off", russian: "откладывать"},
        {english: "set off", russian: "отправляться"},
        {english: "take off", russian: "1) взлетать; 2) снимать одежду"},
        {english: "turn off", russian: "выключать; сворачивать"}
    ],
    "in": [
        {english: "break in", russian: "врываться; прерывать"},
        {english: "bring in", russian: "приносить деньги"},
        {english: "call in", russian: "заходить; вызывать"},
        {english: "come in", russian: "входить; прибывать"},
        {english: "get in", russian: "входить; садиться в авто"},
        {english: "give in", russian: "уступать, сдаваться"},
        {english: "go in", russian: "входить"},
        {english: "look in on", russian: "заглянуть"},
        {english: "put in", russian: "вставлять, добавлять"},
        {english: "take in", russian: "понимать; обманывать"},
        {english: "turn in", russian: "сдавать"}
    ],
    "into": [
        {english: "break into", russian: "врываться"},
        {english: "come into", russian: "входить; наследовать"},
        {english: "get into", russian: "входить; увлекаться"},
        {english: "go into", russian: "входить; углубляться"},
        {english: "look into", russian: "исследовать"},
        {english: "run into", russian: "случайно встретить"},
        {english: "turn into", russian: "превращаться"}
    ],
    "over": [
        {english: "come over", russian: "нахлынуть; навещать"},
        {english: "get over", russian: "оправиться, справиться"},
        {english: "look over", russian: "просматривать"},
        {english: "take over", russian: "захватывать контроль"},
        {english: "turn over", russian: "переворачивать"}
    ],
    "through": [
        {english: "come through", russian: "поступить (о звонке)"},
        {english: "get through", russian: "дозвониться; закончить"},
        {english: "go through", russian: "переживать"},
        {english: "look through", russian: "внимательно осмотреть"},
        {english: "see through", russian: "видеть насквозь"}
    ],
    "round": [
        {english: "come round", russian: "заходить; приходить в себя"},
        {english: "get round", russian: "уговаривать"},
        {english: "go round", russian: "ходить; хватать на всех"},
        {english: "look round", russian: "оглядываться"},
        {english: "turn round", russian: "оборачиваться"}
    ],
    "by": [
        {english: "come by", russian: "зайти; случайно приобрести"},
        {english: "get by", russian: "существовать, выживать"},
        {english: "go by", russian: "проходить"},
        {english: "stand by", russian: "поддерживать; быть готовым"}
    ]
};

let currentMode = 'text';
let currentExercise = null;
let stats = { correct: 0, total: 0 };

// SHUFFLE (алгоритм Фишера-Йетса)
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

document.addEventListener('DOMContentLoaded', () => {
    initializeVerbGroups();
    setupEventListeners();
    loadStats();
    checkOllamaHealth();
    initLogoModal();
});

async function checkOllamaHealth() {
    try {
        const response = await fetch('/api/health');
        const data = await response.json();
        
        if (!data.ollama_available) {
            showNotification(
                '❌ Ollama не доступна!',
                'Запустите команду: <code>ollama serve</code>',
                'error'
            );
        } else if (!data.models.includes(data.current_model)) {
            showNotification(
                `⚠️ Модель "${data.current_model}" не найдена`,
                `Доступные модели: ${data.models.join(', ') || 'нет'}.<br>Установите: <code>ollama pull ${data.current_model}</code>`,
                'warning'
            );
        } else {
            console.log('✅ Ollama доступна, модели:', data.models);
        }
    } catch (e) {
        console.error('Ошибка проверки Ollama:', e);
    }
}

function showNotification(title, message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-title">${title}</div>
        <div class="notification-message">${message}</div>
        <button class="notification-close" onclick="this.parentElement.remove()">×</button>
    `;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        if (notification.parentElement) {
            notification.classList.add('hiding');
            setTimeout(() => notification.remove(), 300);
        }
    }, 10000);
}

function initializeVerbGroups() {
    const select = document.getElementById('verbGroupSelect');
    Object.keys(phraseVerbs).forEach(group => {
        const option = document.createElement('option');
        option.value = group;
        option.textContent = group.toUpperCase();
        select.appendChild(option);
    });
}

function setupEventListeners() {
    document.querySelectorAll('.mode-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const mode = btn.dataset.mode;
            currentMode = mode;
            
            document.querySelectorAll('.mode-content').forEach(c => c.classList.remove('active'));
            document.getElementById(mode + 'Mode').classList.add('active');
        });
    });

    document.getElementById('generateTextBtn').addEventListener('click', generateText);
    document.getElementById('checkTextBtn').addEventListener('click', () => checkAllAnswers('text'));
    document.getElementById('analyzeImageBtn').addEventListener('click', analyzeImage);
    document.getElementById('checkImageBtn').addEventListener('click', () => checkAllAnswers('image'));
}

// 🔧 УЛУЧШЕННЫЙ ПАРСЕР
function parseOllamaResponse(text) {
    if (!text || typeof text !== 'string') {
        return { exerciseText: '', correctAnswers: [] };
    }
    
    const answers = [];
    
    // Паттерн 1: [verb] - translation
    const pattern1 = /\[([^\]]+)\]\s*[-–—]\s*([^\n\[]+)/g;
    let match;
    while ((match = pattern1.exec(text)) !== null) {
        const english = match[1].trim();
        const russian = match[2].trim();
        if (english && russian && !answers.some(a => a.english === english)) {
            answers.push({ english, russian });
        }
    }
    
    // Паттерн 2: **verb** - translation
    if (answers.length === 0) {
        const pattern2 = /\*\*([^*]+)\*\*\s*[-–—]\s*([^\n*]+)/g;
        while ((match = pattern2.exec(text)) !== null) {
            const english = match[1].trim();
            const russian = match[2].trim();
            if (english && russian && !answers.some(a => a.english === english)) {
                answers.push({ english, russian });
            }
        }
    }
    
    // Паттерн 3: verb - translation
    if (answers.length === 0) {
        const pattern3 = /^([a-z]+\s+[a-z]+(?:\s+[a-z]+)?)\s*[-–—]\s*([^\n]+)/gim;
        while ((match = pattern3.exec(text)) !== null) {
            const english = match[1].trim();
            const russian = match[2].trim();
            if (english && russian && !answers.some(a => a.english === english)) {
                answers.push({ english, russian });
            }
        }
    }
    
    // Извлекаем текст упражнения
    let exerciseText = text;
    if (answers.length > 0) {
        const firstAnswerRegex = new RegExp(
            `\\[${answers[0].english.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\]|` +
            `\\*\\*${answers[0].english.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\*\\*|` +
            `^${answers[0].english.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s*[-–—]`,
            'im'
        );
        const match = firstAnswerRegex.exec(text);
        if (match) {
            exerciseText = text.substring(0, match.index).trim();
        }
    }
    
    exerciseText = exerciseText
        .replace(/^(TEXT|Текст|Exercise|Упражнение)[:\s]*/i, '')
        .replace(/^(ANSWERS|Ответы|Варианты|Options)[:\s]*/i, '')
        .trim();
    
    return { exerciseText, correctAnswers: answers };
}

// 🔧 ЛОКАЛЬНЫЕ ШАБЛОНЫ
const localTemplates = {
    "about": [
        {
            text: "I need to [___] the arrangements for the party. Can you help me [___] what time everyone is arriving?",
            answers: [
                {english: "see about", russian: "организовывать, обеспечивать"},
                {english: "find out", russian: "выяснять"}
            ]
        },
        {
            text: "She's [___] to leave when suddenly the news [___] that the event was cancelled.",
            answers: [
                {english: "be about to", russian: "намереваться"},
                {english: "come about", russian: "происходить"}
            ]
        }
    ],
    "up": [
        {
            text: "I usually [___] at 7 a.m. and then [___] at 8. After breakfast, I [___] my coat and [___] to work.",
            answers: [
                {english: "wake up", russian: "просыпаться"},
                {english: "get up", russian: "вставать"},
                {english: "put on", russian: "надевать"},
                {english: "go out", russian: "выходить"}
            ]
        },
        {
            text: "Don't [___]! You're doing great. Just [___] and try again. I believe you can [___] this challenge.",
            answers: [
                {english: "give up", russian: "сдаваться"},
                {english: "look up", russian: "улучшаться"},
                {english: "take up", russian: "браться за"}
            ]
        }
    ],
    "out": [
        {
            text: "We're [___] milk. Can you [___] and buy some? Also, don't forget to [___] the lights.",
            answers: [
                {english: "run out of", russian: "испытывать нехватку"},
                {english: "go out", russian: "выходить"},
                {english: "put out", russian: "выключать"}
            ]
        },
        {
            text: "The fire started to [___] but they managed to [___] it quickly. Everyone had to [___] of the building.",
            answers: [
                {english: "break out", russian: "внезапно начаться"},
                {english: "put out", russian: "тушить"},
                {english: "get out", russian: "выйти"}
            ]
        }
    ],
    "off": [
        {
            text: "The plane will [___] at noon. Please [___] your phones.",
            answers: [
                {english: "take off", russian: "взлетать"},
                {english: "turn off", russian: "выключать"}
            ]
        },
        {
            text: "They had to [___] the meeting because the boss was ill. She also [___] her coat and left.",
            answers: [
                {english: "call off", russian: "отменять"},
                {english: "take off", russian: "снимать"}
            ]
        }
    ],
    "on": [
        {
            text: "Please [___] your coat, it's cold. Don't [___] the TV too loud. Let's [___] with the meeting.",
            answers: [
                {english: "put on", russian: "надевать"},
                {english: "turn on", russian: "включать"},
                {english: "carry on", russian: "продолжать"}
            ]
        }
    ],
    "down": [
        {
            text: "My car [___] on the way to work. I had to [___] the volume of the radio and [___] to check the engine.",
            answers: [
                {english: "break down", russian: "ломаться"},
                {english: "turn down", russian: "приглушать"},
                {english: "get down", russian: "спускаться"}
            ]
        }
    ],
    "in": [
        {
            text: "Don't [___]! Just keep trying. I'll [___] on you later to see how you're doing.",
            answers: [
                {english: "give in", russian: "сдаваться"},
                {english: "look in", russian: "заглянуть"}
            ]
        }
    ],
    "back": [
        {
            text: "I need to [___] the book to the library. Can you [___] me later? I want to [___] to that restaurant.",
            answers: [
                {english: "take back", russian: "возвращать"},
                {english: "call back", russian: "перезвонить"},
                {english: "go back", russian: "возвращаться"}
            ]
        }
    ],
    "over": [
        {
            text: "It took me weeks to [___] the flu. The company was [___] by a larger one last year.",
            answers: [
                {english: "get over", russian: "оправиться"},
                {english: "take over", russian: "захватывать контроль"}
            ]
        }
    ],
    "through": [
        {
            text: "I finally [___] to him on the phone. We [___] a lot together last year.",
            answers: [
                {english: "get through", russian: "дозвониться"},
                {english: "go through", russian: "переживать"}
            ]
        }
    ],
    "into": [
        {
            text: "The police are [___] the crime. He [___] a very interesting hobby recently.",
            answers: [
                {english: "look into", russian: "исследовать"},
                {english: "get into", russian: "увлекаться"}
            ]
        }
    ],
    "after": [
        {
            text: "Can you [___] my dog while I'm away? The dog [___] the cat all around the garden.",
            answers: [
                {english: "look after", russian: "присматривать"},
                {english: "run after", russian: "бегать за"}
            ]
        }
    ],
    "away": [
        {
            text: "The thief [___] with my wallet. Please [___] your toys, they're everywhere.",
            answers: [
                {english: "get away", russian: "сбежать"},
                {english: "put away", russian: "убирать"}
            ]
        }
    ],
    "along": [
        {
            text: "I [___] well with my colleagues. She decided to [___] her sister to the party.",
            answers: [
                {english: "get along", russian: "ладить"},
                {english: "bring along", russian: "приводить с собой"}
            ]
        }
    ],
    "across": [
        {
            text: "I [___] an old photo while cleaning. It's hard to [___] your ideas clearly.",
            answers: [
                {english: "come across", russian: "случайно найти"},
                {english: "get across", russian: "донести смысл"}
            ]
        }
    ],
    "round": [
        {
            text: "Why don't you [___] for coffee? She [___] when she heard the news.",
            answers: [
                {english: "come round", russian: "заходить"},
                {english: "turn round", russian: "оборачиваться"}
            ]
        }
    ],
    "by": [
        {
            text: "Time [___] so quickly. I [___] some old books at the market yesterday.",
            answers: [
                {english: "go by", russian: "проходить"},
                {english: "come by", russian: "случайно приобрести"}
            ]
        }
    ]
};

function getLocalTemplate(group, requiredVerbs) {
    const templates = localTemplates[group];
    
    if (!templates || templates.length === 0) {
        return createSimpleTemplate(requiredVerbs);
    }
    
    const suitable = templates.find(t => t.answers.length === requiredVerbs.length);
    if (suitable) {
        return {
            text: suitable.text,
            answers: requiredVerbs.map((v, i) => ({
                english: v.english,
                russian: v.russian
            }))
        };
    }
    
    const template = templates[Math.floor(Math.random() * templates.length)];
    return {
        text: template.text,
        answers: requiredVerbs.slice(0, template.answers.length).map(v => ({
            english: v.english,
            russian: v.russian
        }))
    };
}

function createSimpleTemplate(verbs) {
    const sentences = verbs.map(v => {
        const examples = {
            "take off": "The plane will [___] soon.",
            "put on": "Please [___] your coat.",
            "give up": "Don't [___] trying!",
            "look for": "I'm [___] my keys.",
            "get up": "I [___] early every day."
        };
        return examples[v.english] || `She decided to [___] yesterday.`;
    });
    
    return {
        text: sentences.join(" "),
        answers: verbs.map(v => ({english: v.english, russian: v.russian}))
    };
}

async function generateText() {
    const group = document.getElementById('verbGroupSelect').value;
    if (!group) {
        alert('Пожалуйста, выберите группу фразовых глаголов');
        return;
    }

    const verbs = phraseVerbs[group];
    const btn = document.getElementById('generateTextBtn');
    btn.disabled = true;
    btn.textContent = '⏳ Генерация...';

    try {
        const selectedVerbs = [...verbs].sort(() => Math.random() - 0.5).slice(0, 5);
        
        const verbsList = selectedVerbs.map(v => `[${v.english}] - ${v.russian}`).join('\n');
        
        const prompt = `Создай упражнение с фразовыми глаголами.

Используй РОВНО эти ${selectedVerbs.length} глаголов:
${verbsList}

ОТВЕТ ДОЛЖЕН СОСТОЯТЬ ИЗ ДВУХ ЧАСТЕЙ:

1. СВЯЗНЫЙ ТЕКСТ на английском (4-6 предложений), где каждый фразовый глагол заменён на [___]
2. СПИСОК использованных глаголов в формате: [глагол] — перевод

ПРИМЕР:
I couldn't tell what he was [___] when I saw him acting strangely. I decided to [___] my friend.
[be up to] — заниматься чем-то (замышлять)
[call up] — звонить по телефону

ВАЖНО: Обязательно напиши ОБА пункта — и текст, и список!`;

        const response = await fetch('/api/generate-text', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                verb_group: group,
                verbs: selectedVerbs,
                custom_prompt: prompt
            })
        });

        const data = await response.json();
        
        if (data.success) {
            if (data.attempts > 1) {
                showNotification(
                    '✅ Успешно!',
                    `Получено со ${data.attempts}-й попытки`,
                    'info'
                );
            }
            displayTextExercise(data.text, selectedVerbs, group);
        } else if (data.needs_fallback) {
            console.warn('⚠️ Ollama не выдала корректный ответ, используем локальный шаблон');
            console.warn('Ответ Ollama:', data.text);
            console.warn('Валидация:', data.validation);
            
            showNotification(
                '🔄 Используем локальный шаблон',
                `Ollama не выдала текст (попыток: ${data.attempts}).<br>Генерируем из шаблонов.`,
                'warning'
            );
            
            const fallback = getLocalTemplate(group, selectedVerbs);
            displayTextExerciseFromTemplate(fallback, selectedVerbs, group);
        } else {
            showNotification('Ошибка генерации', data.error || 'Неизвестная ошибка', 'error');
        }
    } catch (error) {
        showNotification('Ошибка подключения', error.message, 'error');
    } finally {
        btn.disabled = false;
        btn.textContent = '🎲 Сгенерировать текст';
    }
}

function displayTextExercise(rawText, fallbackVerbs, group) {
    const exerciseArea = document.getElementById('textExerciseArea');
    const textDisplay = document.getElementById('generatedText');
    const answersList = document.getElementById('answersList');
    const dragOptions = document.getElementById('dragOptions');
    const dropZones = document.getElementById('dropZones');
    const feedback = document.getElementById('textFeedback');
    
    feedback.className = 'feedback';
    feedback.style.display = 'none';
    exerciseArea.style.display = 'block';

    const parsed = parseOllamaResponse(rawText);
    const exerciseText = parsed.exerciseText || rawText;
    let correctAnswers = parsed.correctAnswers;
    
    if (correctAnswers.length === 0) {
        correctAnswers = fallbackVerbs.slice(0, 5);
    }
    
    textDisplay.innerHTML = exerciseText.replace(/\n/g, '<br>');

    const shuffledAnswers = shuffleArray(correctAnswers);
    
    answersList.innerHTML = '<h4 class="answers-title">📚 Список фразовых глаголов:</h4>';
    const ul = document.createElement('ul');
    ul.className = 'answers-ul';
    shuffledAnswers.forEach(verb => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>[${verb.english}]</strong> — <em>${verb.russian}</em>`;
        ul.appendChild(li);
    });
    answersList.appendChild(ul);

    const blanksCount = (exerciseText.match(/\[___\]/g) || []).length;
    const exerciseVerbs = correctAnswers.slice(0, blanksCount || correctAnswers.length);

    dragOptions.innerHTML = '';
    const allVerbsFromGroup = phraseVerbs[group] || [];
    
    const distractors = shuffleArray(
        allVerbsFromGroup.filter(v => !exerciseVerbs.some(ev => ev.english === v.english))
    ).slice(0, 3);
    
    const allOptions = shuffleArray([...exerciseVerbs, ...distractors]);
    
    allOptions.forEach(verb => {
        const dragItem = document.createElement('div');
        dragItem.className = 'drag-item';
        dragItem.textContent = verb.english;
        dragItem.draggable = true;
        dragItem.dataset.verb = verb.english;
        dragItem.dataset.russian = verb.russian;
        
        dragItem.addEventListener('dragstart', handleDragStart);
        dragItem.addEventListener('dragend', handleDragEnd);
        
        dragOptions.appendChild(dragItem);
    });

    dropZones.innerHTML = '';
    for (let i = 0; i < blanksCount; i++) {
        const dropZone = document.createElement('div');
        dropZone.className = 'drop-zone';
        dropZone.dataset.index = i;
        dropZone.textContent = `Пропуск ${i + 1}`;
        
        dropZone.addEventListener('dragover', handleDragOver);
        dropZone.addEventListener('drop', handleDrop);
        dropZone.addEventListener('dragleave', handleDragLeave);
        dropZone.addEventListener('click', handleDropZoneClick);
        
        dropZones.appendChild(dropZone);
    }

    currentExercise = {
        type: 'text',
        correctAnswers: exerciseVerbs,
        userAnswers: new Array(blanksCount).fill(null)
    };
}

function displayTextExerciseFromTemplate(template, fallbackVerbs, group) {
    const exerciseArea = document.getElementById('textExerciseArea');
    const textDisplay = document.getElementById('generatedText');
    const answersList = document.getElementById('answersList');
    const dragOptions = document.getElementById('dragOptions');
    const dropZones = document.getElementById('dropZones');
    const feedback = document.getElementById('textFeedback');
    
    feedback.className = 'feedback';
    feedback.style.display = 'none';
    exerciseArea.style.display = 'block';

    const exerciseText = template.text;
    const correctAnswers = template.answers;
    
    textDisplay.innerHTML = exerciseText.replace(/\n/g, '<br>');

    const shuffledAnswers = shuffleArray(correctAnswers);
    
    answersList.innerHTML = '<h4 class="answers-title">📚 Список фразовых глаголов:</h4>';
    const ul = document.createElement('ul');
    ul.className = 'answers-ul';
    shuffledAnswers.forEach(verb => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>[${verb.english}]</strong> — <em>${verb.russian}</em>`;
        ul.appendChild(li);
    });
    answersList.appendChild(ul);

    const blanksCount = (exerciseText.match(/\[___\]/g) || []).length;
    const exerciseVerbs = correctAnswers.slice(0, blanksCount || correctAnswers.length);

    dragOptions.innerHTML = '';
    const allVerbsFromGroup = phraseVerbs[group] || [];
    
    const distractors = shuffleArray(
        allVerbsFromGroup.filter(v => !exerciseVerbs.some(ev => ev.english === v.english))
    ).slice(0, 3);
    
    const allOptions = shuffleArray([...exerciseVerbs, ...distractors]);
    
    allOptions.forEach(verb => {
        const dragItem = document.createElement('div');
        dragItem.className = 'drag-item';
        dragItem.textContent = verb.english;
        dragItem.draggable = true;
        dragItem.dataset.verb = verb.english;
        dragItem.dataset.russian = verb.russian;
        
        dragItem.addEventListener('dragstart', handleDragStart);
        dragItem.addEventListener('dragend', handleDragEnd);
        
        dragOptions.appendChild(dragItem);
    });

    dropZones.innerHTML = '';
    for (let i = 0; i < blanksCount; i++) {
        const dropZone = document.createElement('div');
        dropZone.className = 'drop-zone';
        dropZone.dataset.index = i;
        dropZone.textContent = `Пропуск ${i + 1}`;
        
        dropZone.addEventListener('dragover', handleDragOver);
        dropZone.addEventListener('drop', handleDrop);
        dropZone.addEventListener('dragleave', handleDragLeave);
        dropZone.addEventListener('click', handleDropZoneClick);
        
        dropZones.appendChild(dropZone);
    }

    currentExercise = {
        type: 'text',
        correctAnswers: exerciseVerbs,
        userAnswers: new Array(blanksCount).fill(null)
    };
}

const localImageTemplates = [
    {
        text: "The woman is [___] the children at the park while their mother is working.",
        correct: {english: "look after", russian: "присматривать"},
        options: [
            {english: "look for", russian: "искать"},
            {english: "look at", russian: "смотреть"},
            {english: "look into", russian: "исследовать"},
            {english: "look out", russian: "остерегаться"}
        ]
    },
    {
        text: "The man is [___] his coat because it's very cold outside.",
        correct: {english: "put on", russian: "надевать"},
        options: [
            {english: "take off", russian: "снимать"},
            {english: "turn on", russian: "включать"},
            {english: "get on", russian: "садиться"},
            {english: "go on", russian: "продолжать"}
        ]
    },
    {
        text: "The plane is about to [___] from the airport runway.",
        correct: {english: "take off", russian: "взлетать"},
        options: [
            {english: "turn off", russian: "выключать"},
            {english: "get off", russian: "выходить"},
            {english: "put off", russian: "откладывать"},
            {english: "call off", russian: "отменять"}
        ]
    },
    {
        text: "The firemen managed to [___] the fire quickly.",
        correct: {english: "put out", russian: "тушить"},
        options: [
            {english: "turn out", russian: "оказаться"},
            {english: "get out", russian: "выйти"},
            {english: "break out", russian: "начаться"},
            {english: "run out", russian: "закончиться"}
        ]
    }
];

async function analyzeImage() {
    const fileInput = document.getElementById('imageInput');
    const file = fileInput.files[0];
    
    if (!file) {
        alert('Пожалуйста, выберите изображение');
        return;
    }

    const btn = document.getElementById('analyzeImageBtn');
    btn.disabled = true;
    btn.textContent = '⏳ Анализ...';

    const formData = new FormData();
    formData.append('file', file);

    try {
        const response = await fetch('/api/describe-image', {
            method: 'POST',
            body: formData
        });

        const data = await response.json();
        
        if (data.success) {
            if (data.attempts > 1) {
                showNotification('✅ Успешно!', `Получено со ${data.attempts}-й попытки`, 'info');
            }
            displayImageExercise(data.description, file);
        } else if (data.needs_fallback) {
            console.warn('⚠️ Ollama не выдала корректный ответ для изображения');
            
            showNotification(
                '🔄 Используем локальный шаблон',
                `Ollama не выдала описание (попыток: ${data.attempts}).`,
                'warning'
            );
            
            const template = localImageTemplates[Math.floor(Math.random() * localImageTemplates.length)];
            displayImageExerciseFromTemplate(template, file);
        } else {
            showNotification('Ошибка анализа', data.error || 'Неизвестная ошибка', 'error');
        }
    } catch (error) {
        showNotification('Ошибка подключения', error.message, 'error');
    } finally {
        btn.disabled = false;
        btn.textContent = '🔍 Анализировать изображение';
    }
}

function displayImageExercise(description, imageFile) {
    const exerciseArea = document.getElementById('imageExerciseArea');
    const imagePreview = document.getElementById('uploadedImage');
    const descriptionDisplay = document.getElementById('imageDescription');
    const answersList = document.getElementById('imageAnswersList');
    const dragOptions = document.getElementById('imageDragOptions');
    const dropZones = document.getElementById('imageDropZones');
    const feedback = document.getElementById('imageFeedback');
    
    feedback.className = 'feedback';
    feedback.style.display = 'none';
    exerciseArea.style.display = 'block';
    
    const reader = new FileReader();
    reader.onload = (e) => {
        imagePreview.src = e.target.result;
    };
    reader.readAsDataURL(imageFile);

    const parsed = parseOllamaResponse(description);
    descriptionDisplay.innerHTML = (parsed.exerciseText || description).replace(/\n/g, '<br>');
    
    const correctAnswers = parsed.correctAnswers.length > 0 
        ? parsed.correctAnswers 
        : [{ english: "look at", russian: "смотреть на" }];
    
    const shuffledAnswers = shuffleArray(correctAnswers);
    
    answersList.innerHTML = '<h4 class="answers-title">📚 Варианты ответов:</h4>';
    const ul = document.createElement('ul');
    ul.className = 'answers-ul';
    shuffledAnswers.forEach(verb => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>[${verb.english}]</strong> — <em>${verb.russian}</em>`;
        ul.appendChild(li);
    });
    answersList.appendChild(ul);

    dragOptions.innerHTML = '';
    const shuffledDragOptions = shuffleArray(correctAnswers);
    
    shuffledDragOptions.forEach(verb => {
        const dragItem = document.createElement('div');
        dragItem.className = 'drag-item';
        dragItem.textContent = verb.english;
        dragItem.draggable = true;
        dragItem.dataset.verb = verb.english;
        dragItem.dataset.russian = verb.russian;
        
        dragItem.addEventListener('dragstart', handleDragStart);
        dragItem.addEventListener('dragend', handleDragEnd);
        
        dragOptions.appendChild(dragItem);
    });

    dropZones.innerHTML = '';
    const dropZone = document.createElement('div');
    dropZone.className = 'drop-zone';
    dropZone.dataset.index = 0;
    dropZone.textContent = 'Перетащите подходящий глагол сюда';
    
    dropZone.addEventListener('dragover', handleDragOver);
    dropZone.addEventListener('drop', handleDrop);
    dropZone.addEventListener('dragleave', handleDragLeave);
    dropZone.addEventListener('click', handleDropZoneClick);
    
    dropZones.appendChild(dropZone);

    currentExercise = {
        type: 'image',
        correctAnswers: [correctAnswers[0]],
        userAnswers: [null]
    };
}

// локальный шаблон изображения (с перемешиванием)
function displayImageExerciseFromTemplate(template, imageFile) {
    const exerciseArea = document.getElementById('imageExerciseArea');
    const imagePreview = document.getElementById('uploadedImage');
    const descriptionDisplay = document.getElementById('imageDescription');
    const answersList = document.getElementById('imageAnswersList');
    const dragOptions = document.getElementById('imageDragOptions');
    const dropZones = document.getElementById('imageDropZones');
    const feedback = document.getElementById('imageFeedback');
    
    feedback.className = 'feedback';
    feedback.style.display = 'none';
    exerciseArea.style.display = 'block';
    
    const reader = new FileReader();
    reader.onload = (e) => {
        imagePreview.src = e.target.result;
    };
    reader.readAsDataURL(imageFile);

    descriptionDisplay.innerHTML = template.text.replace(/\n/g, '<br>');
    
    const correctAnswers = [template.correct, ...template.options];
    
    // СПИСОК ВАРИАНТОВ - ПЕРЕМЕШИВАЕМ
    const shuffledAnswers = shuffleArray(correctAnswers);
    
    answersList.innerHTML = '<h4 class="answers-title">📚 Варианты ответов:</h4>';
    const ul = document.createElement('ul');
    ul.className = 'answers-ul';
    shuffledAnswers.forEach(verb => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>[${verb.english}]</strong> — <em>${verb.russian}</em>`;
        ul.appendChild(li);
    });
    answersList.appendChild(ul);

    // DRAG OPTIONS - ПЕРЕМЕШИВАЕМ ОТДЕЛЬНО
    dragOptions.innerHTML = '';
    const shuffledDragOptions = shuffleArray(correctAnswers);
    
    shuffledDragOptions.forEach(verb => {
        const dragItem = document.createElement('div');
        dragItem.className = 'drag-item';
        dragItem.textContent = verb.english;
        dragItem.draggable = true;
        dragItem.dataset.verb = verb.english;
        dragItem.dataset.russian = verb.russian;
        
        dragItem.addEventListener('dragstart', handleDragStart);
        dragItem.addEventListener('dragend', handleDragEnd);
        
        dragOptions.appendChild(dragItem);
    });

    dropZones.innerHTML = '';
    const dropZone = document.createElement('div');
    dropZone.className = 'drop-zone';
    dropZone.dataset.index = 0;
    dropZone.textContent = 'Перетащите подходящий глагол сюда';
    
    dropZone.addEventListener('dragover', handleDragOver);
    dropZone.addEventListener('drop', handleDrop);
    dropZone.addEventListener('dragleave', handleDragLeave);
    dropZone.addEventListener('click', handleDropZoneClick);
    
    dropZones.appendChild(dropZone);

    currentExercise = {
        type: 'image',
        correctAnswers: [template.correct],
        userAnswers: [null]
    };
}

// Drag and Drop
let draggedElement = null;

function handleDragStart(e) {
    draggedElement = this;
    this.classList.add('dragging');
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', this.dataset.verb);
}

function handleDragEnd(e) {
    this.classList.remove('dragging');
}

function handleDragOver(e) {
    if (e.preventDefault) e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    this.classList.add('drag-over');
    return false;
}

function handleDragLeave(e) {
    this.classList.remove('drag-over');
}

function handleDrop(e) {
    if (e.stopPropagation) e.stopPropagation();
    this.classList.remove('drag-over');
    
    if (draggedElement) {
        const verb = draggedElement.dataset.verb;
        const russian = draggedElement.dataset.russian;
        const index = parseInt(this.dataset.index);
        
        this.textContent = `${verb}`;
        this.classList.add('filled');
        this.dataset.verb = verb;
        this.dataset.russian = russian;
        
        if (currentExercise) {
            currentExercise.userAnswers[index] = { english: verb, russian };
        }
    }
    return false;
}

function handleDropZoneClick(e) {
    if (this.classList.contains('filled')) {
        const index = parseInt(this.dataset.index);
        this.textContent = currentExercise.type === 'image' 
            ? 'Перетащите подходящий глагол сюда' 
            : `Пропуск ${index + 1}`;
        this.classList.remove('filled', 'correct-answer', 'incorrect-answer');
        delete this.dataset.verb;
        delete this.dataset.russian;
        
        if (currentExercise) {
            currentExercise.userAnswers[index] = null;
        }
    }
}

function checkAllAnswers(mode) {
    if (!currentExercise) {
        alert('Сначала создайте упражнение');
        return;
    }

    const feedbackId = mode === 'text' ? 'textFeedback' : 'imageFeedback';
    const feedback = document.getElementById(feedbackId);
    
    const userAnswers = currentExercise.userAnswers;
    const correctAnswers = currentExercise.correctAnswers;
    
    const filledCount = userAnswers.filter(a => a !== null).length;
    if (filledCount === 0) {
        alert('Пожалуйста, заполните хотя бы один пропуск');
        return;
    }
    
    let correctCount = 0;
    let resultsHtml = '<div class="results-list">';
    
    for (let i = 0; i < correctAnswers.length; i++) {
        const userAnswer = userAnswers[i];
        const correctAnswer = correctAnswers[i];
        
        resultsHtml += `<div class="result-item">`;
        resultsHtml += `<strong>Пропуск ${i + 1}:</strong> `;
        
        if (userAnswer === null) {
            resultsHtml += `<span class="result-missed">❌ Пропущено</span>`;
            resultsHtml += `<br>Правильный ответ: <span class="result-correct">[${correctAnswer.english}]</span> — <em>${correctAnswer.russian}</em>`;
        } else {
            const isCorrect = userAnswer.english.toLowerCase().trim() === correctAnswer.english.toLowerCase().trim();
            
            if (isCorrect) {
                correctCount++;
                resultsHtml += `<span class="result-correct">✅ [${userAnswer.english}]</span>`;
                resultsHtml += ` — <em>${correctAnswer.russian}</em>`;
            } else {
                resultsHtml += `<span class="result-incorrect">❌ [${userAnswer.english}]</span>`;
                resultsHtml += `<br>Правильный ответ: <span class="result-correct">[${correctAnswer.english}]</span> — <em>${correctAnswer.russian}</em>`;
            }
        }
        
        resultsHtml += `</div>`;
    }
    
    resultsHtml += '</div>';
    
    const total = correctAnswers.length;
    const percent = Math.round((correctCount / total) * 100);
    
    let summaryHtml = `<div class="results-summary">`;
    summaryHtml += `<h4>🎯 Итого: ${correctCount} из ${total} правильных (${percent}%)</h4>`;
    
    if (correctCount === total) {
        summaryHtml += `<p class="excellent">🎉 Отлично! Все ответы верны!</p>`;
    } else if (correctCount >= total / 2) {
        summaryHtml += `<p class="good">👍 Хороший результат!</p>`;
    } else {
        summaryHtml += `<p class="try-again">💪 Стоит повторить эту тему!</p>`;
    }
    summaryHtml += `</div>`;
    
    feedback.innerHTML = summaryHtml + resultsHtml;
    feedback.className = 'feedback ' + (correctCount === total ? 'correct' : 'incorrect');
    feedback.style.display = 'block';
    
    const dropZonesContainer = document.querySelectorAll('.drop-zone');
    dropZonesContainer.forEach((zone, i) => {
        if (i < correctAnswers.length) {
            const userAnswer = userAnswers[i];
            const correctAnswer = correctAnswers[i];
            
            zone.classList.remove('correct-answer', 'incorrect-answer');
            
            if (userAnswer === null) {
                zone.classList.add('incorrect-answer');
            } else {
                const isCorrect = userAnswer.english.toLowerCase().trim() === correctAnswer.english.toLowerCase().trim();
                zone.classList.add(isCorrect ? 'correct-answer' : 'incorrect-answer');
            }
        }
    });
    
    stats.total += total;
    stats.correct += correctCount;
    updateStats();
    saveStats();
}

function updateStats() {
    document.getElementById('correctCount').textContent = stats.correct;
    document.getElementById('totalCount').textContent = stats.total;
    const rate = stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0;
    document.getElementById('successRate').textContent = rate + '%';
}

function saveStats() {
    localStorage.setItem('phraseVerbStats', JSON.stringify(stats));
}

function loadStats() {
    const saved = localStorage.getItem('phraseVerbStats');
    if (saved) {
        stats = JSON.parse(saved);
        updateStats();
    }
}

function initLogoModal() {
    const logo = document.querySelector('.header-logo');
    const modal = document.getElementById('logoModal');
    const modalImage = document.getElementById('logoModalImage');
    const modalClose = document.getElementById('logoModalClose');
    const modalOverlay = document.querySelector('.logo-modal-overlay');

    if (!logo || !modal) {
        console.error('Не найдены логотип или модальное окно');
        return;
    }

    // Открытие по клику на логотип
    logo.addEventListener('click', () => {
        modalImage.src = logo.src; // подставляем ту же картинку
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    function closeModal() {
        modal.classList.add('closing');
        setTimeout(() => {
            modal.classList.remove('active', 'closing');
            document.body.style.overflow = '';
        }, 300); // длительность анимации закрытия
    }

    modalClose.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', closeModal);
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}
