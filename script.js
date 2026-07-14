const cards = [
  {
    round: "Часть 1",
    title: "Любовь, традиции и свадебные факты",
    time: "2 минуты",
    kind: "groom",
    visual: "wedding-fee",
    caption: "Свадебный факт",
    text: "Каков размер государственной пошлины за государственную регистрацию заключения брака с выдачей свидетельства?",
    answers: ["Регистрация проводится бесплатно", "350 рублей", "1 000 рублей", "5 000 рублей"],
    correct: 1,
    note: "Верный ответ: 350 рублей. Пошлина уплачивается за регистрацию заключения брака, включая выдачу свидетельства."
  },
  {
    round: "Часть 1",
    title: "Любовь, традиции и свадебные факты",
    time: "2 минуты",
    kind: "groom",
    visual: "wedding-zags",
    caption: "Свадебный факт",
    text: "Супруги согласны расторгнуть брак и не имеют общих несовершеннолетних детей. Каков размер государственной пошлины за регистрацию расторжения брака через органы ЗАГС?",
    answers: ["350 рублей с пары", "1 000 рублей с каждого супруга", "5 000 рублей с каждого супруга", "10 000 рублей с пары"],
    correct: 2,
    note: "Верный ответ: 5 000 рублей с каждого супруга. Вопрос касается регистрации расторжения брака через ЗАГС."
  },
  {
    round: "Часть 1",
    title: "Любовь, традиции и свадебные факты",
    time: "2 минуты",
    kind: "groom",
    visual: "wedding-calendar",
    caption: "Свадебный факт",
    text: "Через какое минимальное время после подачи заявления обычно проводится государственная регистрация заключения брака?",
    answers: ["На следующий день", "Через семь дней", "По истечении месяца", "Через три месяца"],
    correct: 2,
    note: "Верный ответ: по истечении месяца. При особых обстоятельствах срок может быть изменён."
  },
  {
    round: "Часть 1",
    title: "Любовь, традиции и свадебные факты",
    time: "2 минуты",
    kind: "groom",
    visual: "wedding-veil",
    caption: "Свадебная традиция",
    text: "Что означал старинный свадебный обряд «повивание»?",
    answers: ["Подружки заворачивали подарки невесты в один общий платок", "Молодожёнов накрывали одним покрывалом", "Невесте меняли девичью причёску и головной убор на замужние", "Руки жениха и невесты связывали полотенцем"],
    correct: 2,
    note: "Верный ответ: невесте меняли девичью причёску и головной убор на замужние."
  },
  {
    round: "Часть 1",
    title: "Любовь, традиции и свадебные факты",
    time: "2 минуты",
    kind: "groom",
    visual: "wedding-tree",
    caption: "Свадебная традиция",
    text: "Что символизировала украшенная лентами и цветами ёлочка на традиционном девичнике в свадебном обряде села Репнино?",
    answers: ["Благополучие семьи жениха", "Будущих детей молодожёнов", "Невестину красоту", "Долгую совместную жизнь"],
    correct: 2,
    note: "Верный ответ: невестину красоту. Украшенную ёлочку помещали в большой каравай."
  },
  {
    round: "Часть 1",
    title: "Любовь, традиции и свадебные факты",
    time: "2 минуты",
    kind: "groom",
    visual: "wedding-coat",
    caption: "Свадебная традиция",
    text: "Что в одном из старинных свадебных обрядов должна была сделать невеста накануне девичника, чтобы защититься от нечистой силы?",
    answers: ["Трижды обойти дом с зажжённой свечой", "Положить под подушку обручальное кольцо", "Посидеть на вывернутой мехом наружу шубе", "Заплести в волосы красную ленту"],
    correct: 2,
    note: "Верный ответ: посидеть на вывернутой мехом наружу шубе."
  },
  {
    round: "Часть 1",
    title: "Любовь, традиции и свадебные факты",
    time: "2 минуты",
    kind: "groom",
    visual: "wedding-date",
    caption: "Свадебная дата",
    text: "Сколько пар планировали зарегистрировать брак в Иркутской области в красивую дату 26 июня 2026 года?",
    answers: ["Около 170 пар", "Около 350 пар", "Почти 700 пар", "Более 1 200 пар"],
    correct: 2,
    note: "Верный ответ: почти 700 пар. Дата 26.06.2026 стала одной из самых востребованных дат года."
  },
  {
    round: "Часть 1",
    title: "Любовь, традиции и свадебные факты",
    time: "2 минуты",
    kind: "groom",
    visual: "wedding-loaf",
    caption: "Свадебная традиция",
    text: "Зачем в одном из русских свадебных обрядов связывали каравай со стороны жениха и каравай со стороны невесты?",
    answers: ["Чтобы определить, чья семья богаче", "Чтобы символически соединить судьбы молодожёнов", "Чтобы выбрать главную сваху свадьбы", "Чтобы не перепутать караваи во время застолья"],
    correct: 1,
    note: "Верный ответ: чтобы символически соединить судьбы молодожёнов."
  },
  {
    round: "Часть 2",
    title: "Что ответил Сеня?",
    time: "1 минута",
    kind: "groom",
    visual: "groom-color",
    caption: "Ответ Арсения",
    text: "Какой твой любимый цвет?",
    answers: ["Тёмно-синий", "Чёрный", "Зелёный", "Бордовый"],
    correct: 2,
    note: "Ответ Арсения: зелёный."
  },
  {
    round: "Часть 2",
    title: "Что ответил Сеня?",
    time: "1 минута",
    kind: "groom",
    visual: "groom-stars",
    caption: "Ответ Арсения",
    text: "Какой у тебя знак зодиака?",
    answers: ["Телец", "Близнецы", "Рак", "Лев"],
    correct: 1,
    note: "Ответ Арсения: Близнецы."
  },
  {
    round: "Часть 2",
    title: "Что ответил Сеня?",
    time: "1 минута",
    kind: "groom",
    visual: "groom-eyes",
    caption: "Ответ Арсения",
    text: "Какой у тебя цвет глаз?",
    answers: ["Серый", "Голубой", "Карий", "Зелёный"],
    correct: 3,
    note: "Ответ Арсения: зелёный."
  },
  {
    round: "Часть 2",
    title: "Что ответил Сеня?",
    time: "1 минута",
    kind: "groom",
    visual: "groom-actor",
    caption: "Ответ Арсения",
    text: "Кто твой любимый актёр или актриса?",
    answers: ["Мэттью Макконахи", "Кристиан Бэйл", "Вуди Харрельсон", "Джейсон Стэйтем"],
    correct: 2,
    note: "Ответ Арсения: Вуди Харрельсон."
  },
  {
    round: "Часть 2",
    title: "Что ответил Сеня?",
    time: "2 минуты",
    kind: "groom",
    visual: "groom-food",
    caption: "Открытый ответ",
    text: "Какая твоя любимая еда?",
    answers: ["2 балла", "1 балл", "0 баллов"],
    manualScores: [2, 1, 0],
    maxPoints: 2,
    note: "Ответ Арсения: свинина в кисло-сладком соусе. 2 балла — точный ответ; 1 балл — мясо и кисло-сладкий соус без свинины; 0 баллов — другой ответ."
  },
  {
    round: "Часть 2",
    title: "Что ответил Сеня?",
    time: "1 минута",
    kind: "groom",
    visual: "groom-child",
    caption: "Ответ Арсения",
    text: "Кем ты хотел стать, когда был ребёнком?",
    answers: ["Архитектором", "Поваром", "Ветеринаром", "Пилотом"],
    correct: 1,
    note: "Ответ Арсения: поваром."
  },
  {
    round: "Часть 2",
    title: "Что ответил Сеня?",
    time: "2 минуты",
    kind: "groom",
    visual: "groom-tattoo",
    caption: "Открытый ответ",
    text: "Если бы ты решился на татуировку, что бы ты набил?",
    answers: ["2 балла", "1 балл", "0 баллов"],
    manualScores: [2, 1, 0],
    maxPoints: 2,
    note: "Ответ Арсения: какую-нибудь минималистичную абстракцию. 2 балла — минималистичная абстракция; 1 балл — минимализм или абстракция без второй части; 0 баллов — конкретное сюжетное изображение или другой ответ."
  },
  {
    round: "Часть 2",
    title: "Что ответил Сеня?",
    time: "1 минута",
    kind: "groom",
    visual: "groom-shoes",
    caption: "Вопрос-ловушка",
    text: "Какой у тебя размер обуви?",
    answers: ["41", "41,5", "42", "42,5"],
    correct: 1,
    note: "Ответ Арсения: 41,5."
  },
  {
    round: "Часть 2",
    title: "Что ответил Сеня?",
    time: "1 минута",
    kind: "groom",
    visual: "groom-morning",
    caption: "Ответ Арсения",
    text: "Ты жаворонок или сова?",
    answers: ["Жаворонок", "Сова"],
    correct: 0,
    note: "Ответ Арсения: жаворонок."
  },
  {
    round: "Часть 2",
    title: "Что ответил Сеня?",
    time: "1 минута",
    kind: "groom",
    visual: "groom-allergy",
    caption: "Ответ Арсения",
    text: "На что у тебя аллергия?",
    answers: ["На шерсть животных", "На пыльцу", "На цитрусовые", "Аллергии нет"],
    correct: 3,
    note: "Ответ Арсения: аллергии нет."
  },
  {
    round: "Часть 2",
    title: "Что ответил Сеня?",
    time: "1 минута",
    kind: "groom",
    visual: "groom-sweet",
    caption: "Ответ Арсения",
    text: "Какая твоя любимая сладость?",
    answers: ["Овсяные печеньки", "Чизкейк", "Мармелад", "Тёмный шоколад"],
    correct: 0,
    note: "Ответ Арсения: овсяные печеньки."
  },
  {
    round: "Часть 2",
    title: "Что ответил Сеня?",
    time: "1 минута",
    kind: "groom",
    visual: "groom-holiday",
    caption: "Ответ Арсения",
    text: "Какой у тебя любимый праздник?",
    answers: ["День рождения", "Новый год", "Майские праздники", "День защитника Отечества"],
    correct: 1,
    note: "Ответ Арсения: Новый год."
  },
  {
    round: "Часть 2",
    title: "Что ответил Сеня?",
    time: "1 минута",
    kind: "groom",
    visual: "groom-country",
    caption: "Ответ Арсения",
    text: "В какую страну ты бы переехал, если бы была возможность?",
    answers: ["Португалия", "Испания", "Италия", "Греция"],
    correct: 1,
    note: "Ответ Арсения: Испания."
  },
  {
    round: "Часть 2",
    title: "Что ответил Сеня?",
    time: "1 минута",
    kind: "groom",
    visual: "groom-step",
    caption: "Ответ Арсения",
    text: "Кто из вас сделал первый шаг в отношениях?",
    answers: ["Алина", "Арсений"],
    correct: 1,
    note: "Ответ Арсения: я, Арсений."
  },
  {
    round: "Часть 2",
    title: "Что ответил Сеня?",
    time: "1 минута",
    kind: "groom",
    visual: "groom-fate",
    caption: "Прогноз без баллов",
    text: "Ты веришь в судьбу или считаешь, что всё зависит от самого человека?",
    answers: ["Верю в судьбу", "Считаю, что всё зависит от самого человека"],
    correct: null,
    maxPoints: 0,
    note: "Ответ Арсения пока не указан. Вопрос показан как прогноз и не входит в общий подсчёт."
  },
  {
    round: "Часть 2",
    title: "Что ответил Сеня?",
    time: "2 минуты",
    kind: "groom",
    visual: "groom-money",
    caption: "Открытый ответ",
    text: "На что ты бы никогда не потратил деньги, хотя другие делают это постоянно?",
    answers: ["2 балла", "1 балл", "0 баллов"],
    manualScores: [2, 1, 0],
    maxPoints: 2,
    note: "Ответ Арсения: на люксовые оверпрайс-вещи. 2 балла — люксовые вещи с неоправданной переплатой за бренд; 1 балл — дорогие брендовые или люксовые вещи; 0 баллов — другой ответ."
  },
  {
    round: "Часть 2",
    title: "Что ответил Сеня?",
    time: "1 минута",
    kind: "groom",
    visual: "groom-emoji",
    caption: "Визуальный выбор",
    text: "Какой смайлик ты чаще всего используешь в переписке со мной или с близкими?",
    answers: ["😂", "👍", "❤", "😘"],
    correct: 2,
    note: "Ответ Арсения: ❤."
  },
  {
    round: "Часть 2",
    title: "Что ответил Сеня?",
    time: "1 минута",
    kind: "groom",
    visual: "groom-rest",
    caption: "Ответ Арсения",
    text: "Какой вид отдыха ты бы выбрал: пляж, город или горы?",
    answers: ["Пляж", "Город", "Горы"],
    correct: 0,
    note: "Ответ Арсения: пляж."
  }
];

const petSteps = [
  "Котенок проснулся",
  "Кормим котенка",
  "Котенок сыт",
  "Моем лапки",
  "Пенная ванна",
  "Сушим полотенцем",
  "Расчесываем шерстку",
  "Добавляем бантик",
  "Надеваем корону",
  "Выдаем розовый шарик",
  "Котенок готовит тост",
  "Котенок танцует",
  "Добавляем блеск",
  "Котенок в фотозоне",
  "Котенок ловит букет",
  "Котенок стал звездой",
  "Котенок несет кольца",
  "Праздничный образ готов",
  "Котенок сияет",
  "Финальный мяу-тост",
  "Котенок королевы вечера"
];

const scoredCards = cards.reduce((total, card) => {
  if (typeof card.maxPoints === "number") return total + card.maxPoints;
  if (card.manualScores) return total + Math.max(...card.manualScores);
  return total + (card.correct === null ? 0 : 1);
}, 0);

const screens = document.querySelectorAll(".screen");
const startButton = document.querySelector("[data-start]");
const restartButton = document.querySelector("[data-restart]");
const nextButton = document.querySelector("[data-next]");
const hostToggle = document.querySelector("[data-host-toggle]");
const hostPanel = document.querySelector("[data-host-panel]");

const roundLabel = document.querySelector("[data-round-label]");
const questionTitle = document.querySelector("[data-question-title]");
const progress = document.querySelector("[data-progress]");
const progressBar = document.querySelector("[data-progress-bar]");
const scoreLabel = document.querySelector("[data-score]");
const visual = document.querySelector("[data-visual]");
const timing = document.querySelector("[data-timing]");
const questionText = document.querySelector("[data-question-text]");
const answers = document.querySelector("[data-answers]");
const feedback = document.querySelector("[data-feedback]");
const finalScore = document.querySelector("[data-final-score]");
const questionCard = document.querySelector(".question-card");
const petScene = document.querySelector("[data-pet-scene]");
const petStep = document.querySelector("[data-pet-step]");
const petLevel = document.querySelector("[data-pet-level]");

let index = 0;
let score = 0;
let answered = false;

function showScreen(name) {
  screens.forEach((screen) => {
    screen.classList.toggle("is-active", screen.dataset.screen === name);
  });
}

function renderQuestion() {
  const current = cards[index];
  answered = false;

  roundLabel.textContent = current.round;
  questionTitle.textContent = current.title;
  progress.textContent = `${index + 1} / ${cards.length}`;
  progressBar.style.width = `${((index + 1) / cards.length) * 100}%`;
  scoreLabel.textContent = score;
  timing.textContent = current.time;
  questionText.textContent = current.text;
  feedback.textContent = "";
  nextButton.disabled = true;
  questionCard.classList.toggle("pause-card", current.correct === null && !current.manualScores);
  questionCard.classList.toggle("song-card", current.kind === "song");

  visual.innerHTML = renderVisual(current);
  visual.classList.remove("is-flipping");
  window.requestAnimationFrame(() => visual.classList.add("is-flipping"));
  answers.innerHTML = "";

  current.answers.forEach((answer, answerIndex) => {
    const button = document.createElement("button");
    button.className = "answer";
    button.type = "button";
    button.textContent = answer;
    button.style.setProperty("--answer-delay", `${answerIndex * 70}ms`);
    button.addEventListener("click", () => chooseAnswer(answerIndex));
    answers.append(button);
  });

  updatePet();
}

function renderVisual(card) {
  if (card.kind === "song") {
    return `
      <div class="song-poster song-poster--${card.visual}">
        <div class="vinyl"></div>
        <div class="sound-bars"><span></span><span></span><span></span><span></span></div>
        <div class="poster-title">${card.caption}</div>
      </div>
    `;
  }

  if (card.kind === "groom") {
    return `
      <div class="groom-poster groom-poster--${card.visual}">
        <div class="groom-symbol">${groomSymbol(card.visual)}</div>
        <div class="poster-title">${card.caption}</div>
      </div>
    `;
  }

  return `
    <div class="meme-poster meme-poster--${card.visual}">
      <div class="meme-art">
        ${memeArt(card.visual)}
      </div>
      <div class="meme-caption">${card.caption}</div>
    </div>
  `;
}

function groomSymbol(type) {
  const symbols = {
    "wedding-fee": "💍",
    "wedding-zags": "📜",
    "wedding-calendar": "📅",
    "wedding-veil": "👰",
    "wedding-tree": "🌿",
    "wedding-coat": "🧥",
    "wedding-date": "26",
    "wedding-loaf": "🥖",
    "groom-color": "💚",
    "groom-stars": "♊",
    "groom-eyes": "👀",
    "groom-actor": "🎬",
    "groom-food": "🍖",
    "groom-child": "👨‍🍳",
    "groom-tattoo": "〰",
    "groom-shoes": "👟",
    "groom-morning": "🌅",
    "groom-allergy": "✨",
    "groom-sweet": "🍪",
    "groom-holiday": "🎄",
    "groom-country": "🇪🇸",
    "groom-step": "💌",
    "groom-fate": "🔮",
    "groom-money": "💸",
    "groom-emoji": "❤",
    "groom-rest": "🏖️"
  };

  return symbols[type] || "🤵";
}

function memeArt(type) {
  const art = {
    natasha: '<span class="meme-moon"></span><span class="cat cat-a"></span><span class="cat cat-b"></span><span class="sleepy-person"></span>',
    "cats-night": '<span class="meme-moon"></span><span class="cat cat-a"></span><span class="cat cat-b"></span><span class="cat cat-c"></span>',
    zhdun: '<span class="zhdun-body"></span><span class="zhdun-head"></span><span class="zhdun-nose"></span>',
    nichosi: '<span class="wow-face"></span><span class="spark spark-a"></span><span class="spark spark-b"></span>',
    battle: '<span class="mic"></span><span class="speech speech-a"></span><span class="speech speech-b"></span>',
    coincidence: '<span class="detective"></span><span class="magnifier"></span><span class="question-mark">?</span>',
    shikarno: '<span class="phone"></span><span class="heart-pop"></span><span class="cool-face"></span>',
    artist: '<span class="paint-palette"></span><span class="brush"></span><span class="crown-doodle"></span>',
    budget: '<span class="receipt"></span><span class="coin coin-a"></span><span class="coin coin-b"></span>',
    cake: '<span class="cake"></span><span class="eyes"></span>',
    photo: '<span class="camera"></span><span class="flash"></span><span class="heart-pop"></span>',
    "photo-detective": '<span class="photo-frame"></span><span class="magnifier"></span>',
    karaoke: '<span class="mic"></span><span class="note note-a"></span><span class="note note-b"></span>',
    toast: '<span class="glass glass-a"></span><span class="glass glass-b"></span>'
  };

  return art[type] || '<span class="heart-pop"></span>';
}

function chooseAnswer(answerIndex) {
  if (answered) return;
  answered = true;

  const current = cards[index];
  const buttons = [...answers.querySelectorAll(".answer")];
  const isManual = Array.isArray(current.manualScores);
  const isPause = current.correct === null && !isManual;
  const earnedPoints = isManual ? current.manualScores[answerIndex] : 0;
  const isCorrect = isPause || isManual || answerIndex === current.correct;

  if (isManual) {
    score += earnedPoints;
  } else if (!isPause && isCorrect) {
    score += 1;
  }

  if ((isManual && earnedPoints > 0) || (!isPause && isCorrect)) {
    updatePet(true);
    burstConfetti(12);
    questionCard.classList.add("is-correct-pop");
    window.setTimeout(() => questionCard.classList.remove("is-correct-pop"), 700);
  }

  buttons.forEach((button, buttonIndex) => {
    button.disabled = true;
    if (isPause && buttonIndex === answerIndex) button.classList.add("is-correct");
    if (isManual && buttonIndex === answerIndex && earnedPoints > 0) button.classList.add("is-correct");
    if (isManual && buttonIndex === answerIndex && earnedPoints === 0) button.classList.add("is-wrong");
    if (!isManual && !isPause && buttonIndex === current.correct) button.classList.add("is-correct");
    if (!isManual && !isPause && buttonIndex === answerIndex && !isCorrect) button.classList.add("is-wrong");
  });

  scoreLabel.textContent = score;
  feedback.textContent = current.note;
  nextButton.disabled = false;
}

function updatePet(celebrate = false) {
  const level = Math.min(score, scoredCards);
  const visualLevel = Math.min(level, 20);
  petLevel.textContent = `${level} / ${scoredCards}`;
  petStep.textContent = petSteps[visualLevel] || petSteps[petSteps.length - 1];
  petScene.dataset.level = String(visualLevel);
  petScene.classList.toggle("is-celebrating", celebrate);

  if (celebrate) {
    window.setTimeout(() => petScene.classList.remove("is-celebrating"), 650);
  }
}

function burstConfetti(amount) {
  const colors = ["#c97982", "#f0a2aa", "#c49a6c", "#fff0f2", "#9d4454"];

  for (let i = 0; i < amount; i += 1) {
    const piece = document.createElement("span");
    piece.className = "confetti";
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.animationDelay = `${Math.random() * 160}ms`;
    piece.style.transform = `rotate(${Math.random() * 180}deg)`;
    document.body.append(piece);
    window.setTimeout(() => piece.remove(), 1500);
  }
}

function finishQuiz() {
  finalScore.textContent = `${score} / ${scoredCards}`;
  burstConfetti(34);
  showScreen("finale");
}

startButton.addEventListener("click", () => {
  index = 0;
  score = 0;
  renderQuestion();
  showScreen("quiz");
});

nextButton.addEventListener("click", () => {
  if (index + 1 >= cards.length) {
    finishQuiz();
    return;
  }

  index += 1;
  renderQuestion();
});

restartButton.addEventListener("click", () => {
  index = 0;
  score = 0;
  hostPanel.hidden = true;
  renderQuestion();
  showScreen("quiz");
});

hostToggle.addEventListener("click", () => {
  hostPanel.hidden = !hostPanel.hidden;
});
