const cards = [
  {
    round: "Часть 1",
    title: "Угадай мем",
    time: "2 минуты",
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
    time: "2 минуты",
    visual: "🐾⏰",
    caption: "Три часа ночи, а разговор только стал важным",
    text: "Что за мем спрятан в этой ночной драме?",
    answers: ["Наташа, мы все уронили", "Я в своем познании настолько преисполнился", "Нельзя просто так взять и уйти", "Ты заходи, если что"],
    correct: 0,
    note: "Классика ночных переговоров и внезапной философии."
  },
  {
    round: "Часть 1",
    title: "Угадай мем",
    time: "2 минуты",
    visual: "🧍‍♀️☕",
    caption: "Когда невеста сказала, что макияж займет 15 минут",
    text: "Как называется это состояние?",
    answers: ["Ждун", "Ничоси", "Борщ с капусткой", "Повар спрашивает повара"],
    correct: 0,
    note: "Спокойное ожидание, полное любви и легкого принятия судьбы."
  },
  {
    round: "Часть 1",
    title: "Угадай мем",
    time: "2 минуты",
    visual: "😲✨",
    caption: "Когда жених впервые увидел ее в платье",
    text: "Какая реакция спрятана в карточке?",
    answers: ["Ничоси", "Ну давай рассказывай", "Это норма", "Совпадение? Не думаю"],
    correct: 0,
    note: "Именно так выглядит искреннее восхищение."
  },
  {
    round: "Пауза ведущей",
    title: "Мемный батл",
    time: "3 минуты",
    visual: "🎤",
    caption: "Гости вспоминают самый смешной мем про отношения",
    text: "Мини-задание: каждая команда за 30 секунд придумывает мемный заголовок про невесту и жениха.",
    answers: ["Команда невесты готова", "Команда подруг готова", "Просим еще 10 секунд", "У нас уже шедевр"],
    correct: null,
    note: "Ведущая выбирает самый смешной вариант и дает команде бонусный балл."
  },
  {
    round: "Часть 1",
    title: "Угадай мем",
    time: "2 минуты",
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
    time: "2 минуты",
    visual: "🫶📱",
    caption: "Когда он написал первым, а она сделала вид, что спокойна",
    text: "Какой вариант ближе всего?",
    answers: ["А что случилось?", "Ничего необычного", "Это мы удачно зашли", "Шикарно"],
    correct: 3,
    note: "Да, это было шикарно с самого начала."
  },
  {
    round: "Часть 1",
    title: "Угадай мем",
    time: "2 минуты",
    visual: "💅🧠",
    caption: "Когда невеста уже все решила, но делает вид, что советуется",
    text: "Какая мемная фраза подходит?",
    answers: ["Я художник, я так вижу", "Ты кто такой? Давай до свидания", "Нормально делай, нормально будет", "У меня лапки"],
    correct: 0,
    note: "Уверенность невесты — отдельный вид искусства."
  },
  {
    round: "Часть 1",
    title: "Угадай мем",
    time: "2 минуты",
    visual: "🧾😅",
    caption: "Когда бюджет свадьбы сказал: я тоже хочу внимания",
    text: "Какой мем тут звучит?",
    answers: ["Денег нет, но вы держитесь", "Зато красиво", "Это другое", "Все идет по плану"],
    correct: 0,
    note: "Главное, что любовь в смете идет первой строкой."
  },
  {
    round: "Часть 1",
    title: "Угадай мем",
    time: "2 минуты",
    visual: "🍰👀",
    caption: "Когда торт еще не вынесли, но кто-то уже смотрит на кухню",
    text: "Какая фраза подходит?",
    answers: ["А можно всех посмотреть?", "Ну когда уже?", "Я просто спросить", "Это база"],
    correct: 1,
    note: "Торт объединяет людей почти так же сильно, как любовь."
  },
  {
    round: "Часть 1",
    title: "Угадай мем",
    time: "2 минуты",
    visual: "📸💖",
    caption: "Когда сделали 148 фото, но хороших нужно еще",
    text: "Какая мемная правда здесь?",
    answers: ["Еще по одной", "Я не фотогенична", "Удали немедленно", "Все ответы верные"],
    correct: 3,
    note: "Фотосессия без этой фразы не считается фотосессией."
  },
  {
    round: "Пауза ведущей",
    title: "Фото-детектив",
    time: "4 минуты",
    visual: "🔍📷",
    caption: "Гости ищут в телефоне фото, где невеста выглядит самой счастливой",
    text: "Мини-задание: показать фото и одним предложением рассказать, почему оно теплое.",
    answers: ["Фото найдено", "История готова", "Нужно еще полминуты", "Мы плачем, но красиво"],
    correct: null,
    note: "Это мягкая пауза для воспоминаний перед второй частью."
  },
  {
    round: "Часть 2",
    title: "Правда или свадебная легенда",
    time: "2 минуты",
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
    time: "2 минуты",
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
    time: "2 минуты",
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
    time: "2 минуты",
    visual: "🧳",
    caption: "Совместная поездка",
    text: "Первая совместная поездка проверяет пару лучше любого теста.",
    answers: ["Правда", "Легенда", "Проверяет только чемодан", "Проверяет навигатор"],
    correct: 0,
    note: "Если после дороги хочется ехать еще, это серьезно."
  },
  {
    round: "Пауза ведущей",
    title: "Версии подруг",
    time: "4 минуты",
    visual: "💬",
    caption: "Какая деталь их отношений самая узнаваемая?",
    text: "Мини-задание: гости называют по одной привычке пары, по которой сразу понятно: это они.",
    answers: ["Есть версия", "У нас две версии", "Это будет смешно", "Это будет мило"],
    correct: null,
    note: "Пусть невеста выберет самую точную версию."
  },
  {
    round: "Часть 2",
    title: "Правда или свадебная легенда",
    time: "2 минуты",
    visual: "🏠",
    caption: "Бытовая магия",
    text: "Любовь видна не только в букетах, но и в том, кто укрывает пледом.",
    answers: ["Правда", "Легенда", "Это договоренность", "Это суперсила"],
    correct: 0,
    note: "Самые тихие жесты часто самые дорогие."
  },
  {
    round: "Часть 2",
    title: "Угадай про пару",
    time: "2 минуты",
    visual: "🗺️",
    caption: "Если бы можно было выбрать любую точку планеты",
    text: "Куда пара скорее всего отправилась бы в медовый месяц мечты?",
    answers: ["К океану", "В горы", "В город с красивыми улочками", "Туда, где можно быть вдвоем"],
    correct: 3,
    note: "Самый романтичный ответ: место важно, но главное — с кем."
  },
  {
    round: "Часть 2",
    title: "Угадай про пару",
    time: "2 минуты",
    visual: "🛋️",
    caption: "Идеальный вечер без суеты",
    text: "Что больше похоже на их общее любимое развлечение?",
    answers: ["Кино и вкусная еда", "Прогулка", "Игры и разговоры", "Все зависит от настроения"],
    correct: 3,
    note: "Ведущая может спросить невесту, какой вариант ближе."
  },
  {
    round: "Часть 2",
    title: "Угадай про пару",
    time: "2 минуты",
    visual: "🏡",
    caption: "Три главные вещи дома",
    text: "Что чаще всего делает дом по-настоящему общим?",
    answers: ["Плед, кружки и любимый сериал", "Ремонт, списки и шкаф", "Кухня, диван и планы", "То, что выбрали вместе"],
    correct: 3,
    note: "Хороший мостик к разговору о совместном быте и маленьких ритуалах."
  },
  {
    round: "Часть 2",
    title: "Угадай про пару",
    time: "2 минуты",
    visual: "🎓",
    caption: "Школьные легенды Сени",
    text: "Какой предмет мог быть любимым у Сени в школе?",
    answers: ["История", "Математика", "Физкультура", "Пусть невеста угадает"],
    correct: 3,
    note: "Идеальная карточка для проверки: знает ли невеста школьную версию жениха."
  },
  {
    round: "Пауза ведущей",
    title: "Тост на одно слово",
    time: "4 минуты",
    visual: "🥂",
    caption: "Каждая гостья выбирает одно слово для будущей семьи",
    text: "Мини-задание: назвать слово-пожелание и коротко объяснить его.",
    answers: ["Любовь", "Дом", "Смех", "Навсегда"],
    correct: null,
    note: "Эта пауза красиво закрывает квиз перед финалом."
  },
  {
    round: "Часть 2",
    title: "Финальный тост",
    time: "2 минуты",
    visual: "👰💗🤵",
    caption: "История, которая стала свадьбой",
    text: "Главная победа сегодня не в баллах, а в том, что у этой истории будет свадьба.",
    answers: ["Правда", "Абсолютная правда", "Самая правда", "Все ответы верные"],
    correct: 3,
    note: "Финал мягкий: все дороги ведут к любви."
  }
];

const scoredCards = cards.filter((card) => card.correct !== null).length;

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
  questionCard.classList.toggle("pause-card", current.correct === null);

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

  const current = cards[index];
  const buttons = [...answers.querySelectorAll(".answer")];
  const isPause = current.correct === null;
  const isCorrect = isPause || answerIndex === current.correct;

  if (!isPause && isCorrect) {
    score += 1;
    burstConfetti(12);
  }

  buttons.forEach((button, buttonIndex) => {
    button.disabled = true;
    if (isPause && buttonIndex === answerIndex) button.classList.add("is-correct");
    if (!isPause && buttonIndex === current.correct) button.classList.add("is-correct");
    if (!isPause && buttonIndex === answerIndex && !isCorrect) button.classList.add("is-wrong");
  });

  scoreLabel.textContent = score;
  feedback.textContent = current.note;
  nextButton.disabled = false;
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
