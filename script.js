const questions = [
  {
    round: "Часть 1",
    title: "Угадай мем",
    visual: "💃😐",
    caption: "Когда подруги сказали: просто посидим спокойно",
    text: "Какой мем лучше всего подходит к этой сцене?",
    answers: ["Наташа, вставай", "Это фиаско, братан", "Ждун", "А что случилось?"],
    correct: 0,
    note: "Да, та самая энергия внезапного подъема и больших планов."
  },
  {
    round: "Часть 1",
    title: "Угадай мем",
    visual: "🐾⏰",
    caption: "Три часа ночи, а разговор только стал важным",
    text: "Что это за мем?",
    answers: ["Наташа, мы все уронили", "Я в своем познании настолько преисполнился", "Нельзя просто так взять и уйти", "Ты заходи, если что"],
    correct: 0,
    note: "Классика ночных переговоров и внезапной философии."
  },
  {
    round: "Часть 1",
    title: "Угадай мем",
    visual: "🧍‍♀️☕",
    caption: "Когда невеста сказала, что макияж займет 15 минут",
    text: "Как называется состояние?",
    answers: ["Ждун", "Борщ с капусткой", "Ничоси", "Повар спрашивает повара"],
    correct: 0,
    note: "Спокойное ожидание, полное любви и легкого принятия судьбы."
  },
  {
    round: "Часть 1",
    title: "Угадай мем",
    visual: "😲✨",
    caption: "Когда жених впервые увидел ее в платье",
    text: "Какая реакция спрятана в карточке?",
    answers: ["Ничоси", "Ну давай рассказывай", "Это норма", "Совпадение? Не думаю"],
    correct: 0,
    note: "Именно так выглядит искреннее восхищение."
  },
  {
    round: "Часть 1",
    title: "Угадай мем",
    visual: "🤔🔎",
    caption: "Когда совпали дата, место и настроение",
    text: "Какой мем просится сам?",
    answers: ["Совпадение? Не думаю", "Азаза", "Нельзя просто так взять", "Бонжур"],
    correct: 0,
    note: "Некоторые совпадения подозрительно похожи на судьбу."
  },
  {
    round: "Часть 1",
    title: "Угадай мем",
    visual: "🫶📱",
    caption: "Когда он написал первым, а она сделала вид, что спокойна",
    text: "Какой вариант ближе всего?",
    answers: ["А что случилось?", "Ничего необычного", "Это мы удачно зашли", "Шикарно"],
    correct: 3,
    note: "Да, это было шикарно с самого начала."
  },
  {
    round: "Часть 2",
    title: "Правда или свадебная легенда",
    visual: "💌",
    caption: "История любви: версия подруг",
    text: "Невеста наверняка помнит первое сообщение жениха лучше, чем пароль от Госуслуг.",
    answers: ["Правда", "Легенда", "Спросим жениха", "Это засекречено"],
    correct: 2,
    note: "Лучший ответ для ведущей: потом сравнить версии пары."
  },
  {
    round: "Часть 2",
    title: "Правда или свадебная легенда",
    visual: "🍽️",
    caption: "Свидание, которое стало историей",
    text: "На первом свидании важнее всего было выглядеть спокойно, даже если внутри салют.",
    answers: ["Правда", "Легенда", "Только у жениха", "Только у невесты"],
    correct: 0,
    note: "Очень похоже на начало красивой истории."
  },
  {
    round: "Часть 2",
    title: "Правда или свадебная легенда",
    visual: "🎧",
    caption: "Плейлист отношений",
    text: "У каждой пары есть песня, которая случайно стала «их песней».",
    answers: ["Правда", "Легенда", "Есть, но никто не признается", "Теперь нужно выбрать"],
    correct: 0,
    note: "После ответа можно включить их песню или предложить гостям угадать."
  },
  {
    round: "Часть 2",
    title: "Правда или свадебная легенда",
    visual: "🧳",
    caption: "Совместная поездка",
    text: "Первая совместная поездка проверяет пару лучше любого теста.",
    answers: ["Правда", "Легенда", "Проверяет только чемодан", "Проверяет навигатор"],
    correct: 0,
    note: "Если после дороги хочется ехать еще, это серьезно."
  },
  {
    round: "Часть 2",
    title: "Правда или свадебная легенда",
    visual: "🏠",
    caption: "Бытовая магия",
    text: "Любовь видна не только в букетах, но и в том, кто укрывает пледом.",
    answers: ["Правда", "Легенда", "Это договоренность", "Это суперсила"],
    correct: 0,
    note: "Самые тихие жесты часто самые дорогие."
  },
  {
    round: "Часть 2",
    title: "Правда или свадебная легенда",
    visual: "👰💗🤵",
    caption: "Финальный тост",
    text: "Главная победа сегодня не в баллах, а в том, что у этой истории будет свадьба.",
    answers: ["Правда", "Абсолютная правда", "Самая правда", "Все ответы верные"],
    correct: 3,
    note: "Финал мягкий: все дороги ведут к любви."
  }
];

const screens = document.querySelectorAll(".screen");
const startButton = document.querySelector("[data-start]");
const restartButton = document.querySelector("[data-restart]");
const nextButton = document.querySelector("[data-next]");
const hostToggle = document.querySelector("[data-host-toggle]");
const hostPanel = document.querySelector("[data-host-panel]");

const roundLabel = document.querySelector("[data-round-label]");
const questionTitle = document.querySelector("[data-question-title]");
const progress = document.querySelector("[data-progress]");
const scoreLabel = document.querySelector("[data-score]");
const visual = document.querySelector("[data-visual]");
const questionText = document.querySelector("[data-question-text]");
const answers = document.querySelector("[data-answers]");
const feedback = document.querySelector("[data-feedback]");
const finalScore = document.querySelector("[data-final-score]");

let index = 0;
let score = 0;
let answered = false;

function showScreen(name) {
  screens.forEach((screen) => {
    screen.classList.toggle("is-active", screen.dataset.screen === name);
  });
}

function renderQuestion() {
  const current = questions[index];
  answered = false;

  roundLabel.textContent = current.round;
  questionTitle.textContent = current.title;
  progress.textContent = `${index + 1} / ${questions.length}`;
  scoreLabel.textContent = score;
  questionText.textContent = current.text;
  feedback.textContent = "";
  nextButton.disabled = true;

  visual.innerHTML = `
    <div class="meme-visual">
      <div class="meme-emoji">${current.visual}</div>
      <div class="meme-caption">${current.caption}</div>
    </div>
  `;

  answers.innerHTML = "";
  current.answers.forEach((answer, answerIndex) => {
    const button = document.createElement("button");
    button.className = "answer";
    button.type = "button";
    button.textContent = answer;
    button.addEventListener("click", () => chooseAnswer(answerIndex));
    answers.append(button);
  });
}

function chooseAnswer(answerIndex) {
  if (answered) return;
  answered = true;

  const current = questions[index];
  const buttons = [...answers.querySelectorAll(".answer")];
  const isCorrect = answerIndex === current.correct;

  if (isCorrect) score += 1;

  buttons.forEach((button, buttonIndex) => {
    button.disabled = true;
    if (buttonIndex === current.correct) button.classList.add("is-correct");
    if (buttonIndex === answerIndex && !isCorrect) button.classList.add("is-wrong");
  });

  scoreLabel.textContent = score;
  feedback.textContent = current.note;
  nextButton.disabled = false;
}

function finishQuiz() {
  finalScore.textContent = `${score} / ${questions.length}`;
  showScreen("finale");
}

startButton.addEventListener("click", () => {
  index = 0;
  score = 0;
  renderQuestion();
  showScreen("quiz");
});

nextButton.addEventListener("click", () => {
  if (index + 1 >= questions.length) {
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
