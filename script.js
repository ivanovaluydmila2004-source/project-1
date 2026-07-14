const cards = [
  {
    type: "intro",
    round: "Часть 1",
    title: "Любовь, традиции и свадебные факты",
    time: "Вводный экран",
    kind: "groom",
    visual: "wedding-loaf",
    caption: "Часть 1",
    text: "Сейчас тебя ждут вопросы о свадьбах, необычных традициях и интересных фактах. Выбери один вариант ответа: А, Б, В или Г. После каждого вопроса появится правильный ответ и короткое объяснение."
  },
  {
    type: "question",
    round: "Часть 1",
    title: "Любовь, традиции и свадебные факты",
    time: "2 минуты",
    kind: "groom",
    visual: "wedding-fee",
    caption: "Свадебный факт",
    text: "Каков размер государственной пошлины за государственную регистрацию заключения брака с выдачей свидетельства?",
    answers: ["А. Регистрация проводится бесплатно", "Б. 350 рублей", "В. 1 000 рублей", "Г. 5 000 рублей"],
    correct: 1,
    reveal: "Правильный ответ: Б. 350 рублей. Пошлина уплачивается за государственную регистрацию заключения брака, включая выдачу свидетельства."
  },
  {
    type: "question",
    round: "Часть 1",
    title: "Любовь, традиции и свадебные факты",
    time: "2 минуты",
    kind: "groom",
    visual: "wedding-zags",
    caption: "Свадебный факт",
    text: "Супруги согласны расторгнуть брак и не имеют общих несовершеннолетних детей. Каков размер государственной пошлины за регистрацию расторжения брака через органы ЗАГС?",
    answers: ["А. 350 рублей с пары", "Б. 1 000 рублей с каждого супруга", "В. 5 000 рублей с каждого супруга", "Г. 10 000 рублей с пары"],
    correct: 2,
    reveal: "Правильный ответ: В. 5 000 рублей с каждого супруга. Вопрос касается регистрации расторжения брака через органы ЗАГС."
  },
  {
    type: "question",
    round: "Часть 1",
    title: "Любовь, традиции и свадебные факты",
    time: "2 минуты",
    kind: "groom",
    visual: "wedding-calendar",
    caption: "Свадебный факт",
    text: "Через какое минимальное время после подачи заявления обычно проводится государственная регистрация заключения брака?",
    answers: ["А. На следующий день", "Б. Через семь дней", "В. По истечении месяца", "Г. Через три месяца"],
    correct: 2,
    reveal: "Правильный ответ: В. По истечении месяца. При наличии особых обстоятельств срок может быть изменён в установленном законом порядке."
  },
  {
    type: "question",
    round: "Часть 1",
    title: "Любовь, традиции и свадебные факты",
    time: "2 минуты",
    kind: "groom",
    visual: "wedding-veil",
    caption: "Свадебная традиция",
    text: "Что означал старинный свадебный обряд «повивание»?",
    answers: ["А. Подружки заворачивали подарки невесты в один общий платок", "Б. Молодожёнов накрывали одним покрывалом", "В. Невесте меняли девичью причёску и головной убор на замужние", "Г. Руки жениха и невесты связывали полотенцем"],
    correct: 2,
    reveal: "Правильный ответ: В. Невесте меняли девичью причёску и головной убор на замужние. Обряд символизировал переход девушки в статус замужней женщины."
  },
  {
    type: "question",
    round: "Часть 1",
    title: "Любовь, традиции и свадебные факты",
    time: "2 минуты",
    kind: "groom",
    visual: "wedding-tree",
    caption: "Свадебная традиция",
    text: "Что символизировала украшенная лентами и цветами ёлочка на традиционном девичнике в свадебном обряде села Репнино?",
    answers: ["А. Благополучие семьи жениха", "Б. Будущих детей молодожёнов", "В. Невестину красоту", "Г. Долгую совместную жизнь"],
    correct: 2,
    reveal: "Правильный ответ: В. Невестину красоту. Украшенную ёлочку помещали в большой каравай как часть девичника."
  },
  {
    type: "question",
    round: "Часть 1",
    title: "Любовь, традиции и свадебные факты",
    time: "2 минуты",
    kind: "groom",
    visual: "wedding-coat",
    caption: "Свадебная традиция",
    text: "Что в одном из старинных свадебных обрядов должна была сделать невеста накануне девичника, чтобы защититься от нечистой силы?",
    answers: ["А. Трижды обойти дом с зажжённой свечой", "Б. Положить под подушку обручальное кольцо", "В. Посидеть на вывернутой мехом наружу шубе", "Г. Заплести в волосы красную ленту"],
    correct: 2,
    reveal: "Правильный ответ: В. Посидеть на вывернутой мехом наружу шубе. Вывернутая шуба использовалась как защитный обрядовый предмет."
  },
  {
    type: "question",
    round: "Часть 1",
    title: "Любовь, традиции и свадебные факты",
    time: "2 минуты",
    kind: "groom",
    visual: "wedding-date",
    caption: "Свадебная дата",
    text: "Сколько пар планировали зарегистрировать брак в Иркутской области в красивую дату 26 июня 2026 года?",
    answers: ["А. Около 170 пар", "Б. Около 350 пар", "В. Почти 700 пар", "Г. Более 1 200 пар"],
    correct: 2,
    reveal: "Правильный ответ: В. Почти 700 пар. Дата 26.06.2026 стала одной из наиболее востребованных дат года."
  },
  {
    type: "question",
    round: "Часть 1",
    title: "Любовь, традиции и свадебные факты",
    time: "2 минуты",
    kind: "groom",
    visual: "wedding-loaf",
    caption: "Свадебная традиция",
    text: "Зачем в одном из русских свадебных обрядов связывали каравай со стороны жениха и каравай со стороны невесты?",
    answers: ["А. Чтобы определить, чья семья богаче", "Б. Чтобы символически соединить судьбы молодожёнов", "В. Чтобы выбрать главную сваху свадьбы", "Г. Чтобы не перепутать караваи во время застолья"],
    correct: 1,
    reveal: "Правильный ответ: Б. Чтобы символически соединить судьбы молодожёнов. Два каравая ставили друг на друга и связывали верёвкой."
  },
  {
    type: "intro",
    round: "Часть 2",
    title: "Что ответил Арсений?",
    time: "Вводный экран",
    kind: "groom",
    visual: "groom-step",
    caption: "Часть 2",
    text: "Сеня заранее ответил на вопросы о себе, своих привычках и предпочтениях. Попробуй угадать его ответы. В некоторых вопросах нужно выбрать вариант, а в некоторых — назвать собственную версию."
  },
  {
    type: "question",
    round: "Часть 2",
    title: "Что ответил Арсений?",
    time: "1 минута",
    kind: "groom",
    visual: "groom-color",
    caption: "Ответ Арсения",
    text: "Какой твой любимый цвет?",
    answers: ["А. Тёмно-синий", "Б. Чёрный", "В. Зелёный", "Г. Бордовый"],
    correct: 2,
    reveal: "Ответ Арсения: зелёный."
  },
  {
    type: "question",
    round: "Часть 2",
    title: "Что ответил Арсений?",
    time: "1 минута",
    kind: "groom",
    visual: "groom-stars",
    caption: "Ответ Арсения",
    text: "Какой у тебя знак зодиака?",
    answers: ["А. Телец", "Б. Близнецы", "В. Рак", "Г. Лев"],
    correct: 1,
    reveal: "Ответ Арсения: Близнецы."
  },
  {
    type: "question",
    round: "Часть 2",
    title: "Что ответил Арсений?",
    time: "1 минута",
    kind: "groom",
    visual: "groom-eyes",
    caption: "Ответ Арсения",
    text: "Какой у тебя цвет глаз?",
    answers: ["А. Серый", "Б. Голубой", "В. Карий", "Г. Зелёный"],
    correct: 3,
    reveal: "Ответ Арсения: зелёный."
  },
  {
    type: "question",
    round: "Часть 2",
    title: "Что ответил Арсений?",
    time: "1 минута",
    kind: "groom",
    visual: "groom-actor",
    caption: "Ответ Арсения",
    text: "Кто твой любимый актёр или актриса?",
    answers: ["А. Мэттью Макконахи", "Б. Кристиан Бэйл", "В. Вуди Харрельсон", "Г. Джейсон Стэйтем"],
    correct: 2,
    reveal: "Ответ Арсения: Вуди Харрельсон."
  },
  {
    type: "question",
    round: "Часть 2",
    title: "Что ответил Арсений?",
    time: "2 минуты",
    kind: "groom",
    visual: "groom-food",
    caption: "Открытый ответ",
    text: "Какая твоя любимая еда?",
    answers: ["2 балла", "1 балл", "0 баллов"],
    manualScores: [2, 1, 0],
    maxPoints: 2,
    reveal: "Ответ Арсения: свинина в кисло-сладком соусе. 2 балла — точный ответ; 1 балл — мясо и кисло-сладкий соус без свинины; 0 баллов — другой ответ."
  },
  {
    type: "question",
    round: "Часть 2",
    title: "Что ответил Арсений?",
    time: "1 минута",
    kind: "groom",
    visual: "groom-child",
    caption: "Ответ Арсения",
    text: "Кем ты хотел стать, когда был ребёнком?",
    answers: ["А. Архитектором", "Б. Поваром", "В. Ветеринаром", "Г. Пилотом"],
    correct: 1,
    reveal: "Ответ Арсения: поваром."
  },
  {
    type: "question",
    round: "Часть 2",
    title: "Что ответил Арсений?",
    time: "2 минуты",
    kind: "groom",
    visual: "groom-tattoo",
    caption: "Открытый ответ",
    text: "Если бы ты решился на татуировку, что бы ты набил?",
    answers: ["2 балла", "1 балл", "0 баллов"],
    manualScores: [2, 1, 0],
    maxPoints: 2,
    reveal: "Ответ Арсения: какую-нибудь минималистичную абстракцию. 2 балла — минималистичная абстракция; 1 балл — минимализм или абстракция без второй части; 0 баллов — конкретное сюжетное изображение или другой ответ."
  },
  {
    type: "question",
    round: "Часть 2",
    title: "Что ответил Арсений?",
    time: "1 минута",
    kind: "groom",
    visual: "groom-shoes",
    caption: "Вопрос-ловушка",
    text: "Какой у тебя размер обуви?",
    answers: ["А. 41", "Б. 41,5", "В. 42", "Г. 42,5"],
    correct: 1,
    reveal: "Ответ Арсения: 41,5."
  },
  {
    type: "question",
    round: "Часть 2",
    title: "Что ответил Арсений?",
    time: "1 минута",
    kind: "groom",
    visual: "groom-morning",
    caption: "Ответ Арсения",
    text: "Ты жаворонок или сова?",
    answers: ["А. Жаворонок", "Б. Сова"],
    correct: 0,
    reveal: "Ответ Арсения: жаворонок."
  },
  {
    type: "question",
    round: "Часть 2",
    title: "Что ответил Арсений?",
    time: "1 минута",
    kind: "groom",
    visual: "groom-allergy",
    caption: "Ответ Арсения",
    text: "На что у тебя аллергия?",
    answers: ["А. На шерсть животных", "Б. На пыльцу", "В. На цитрусовые", "Г. Аллергии нет"],
    correct: 3,
    reveal: "Ответ Арсения: аллергии нет."
  },
  {
    type: "question",
    round: "Часть 2",
    title: "Что ответил Арсений?",
    time: "1 минута",
    kind: "groom",
    visual: "groom-sweet",
    caption: "Ответ Арсения",
    text: "Какая твоя любимая сладость?",
    answers: ["А. Овсяные печеньки", "Б. Чизкейк", "В. Мармелад", "Г. Тёмный шоколад"],
    correct: 0,
    reveal: "Ответ Арсения: овсяные печеньки."
  },
  {
    type: "question",
    round: "Часть 2",
    title: "Что ответил Арсений?",
    time: "1 минута",
    kind: "groom",
    visual: "groom-holiday",
    caption: "Ответ Арсения",
    text: "Какой у тебя любимый праздник?",
    answers: ["А. День рождения", "Б. Новый год", "В. Майские праздники", "Г. День защитника Отечества"],
    correct: 1,
    reveal: "Ответ Арсения: Новый год."
  },
  {
    type: "question",
    round: "Часть 2",
    title: "Что ответил Арсений?",
    time: "1 минута",
    kind: "groom",
    visual: "groom-country",
    caption: "Ответ Арсения",
    text: "В какую страну ты бы переехал, если бы была возможность?",
    answers: ["А. Португалия", "Б. Испания", "В. Италия", "Г. Греция"],
    correct: 1,
    reveal: "Ответ Арсения: Испания."
  },
  {
    type: "question",
    round: "Часть 2",
    title: "Что ответил Арсений?",
    time: "1 минута",
    kind: "groom",
    visual: "groom-step",
    caption: "Ответ Арсения",
    text: "Кто из вас сделал первый шаг в отношениях?",
    answers: ["А. Алина", "Б. Арсений"],
    correct: 1,
    reveal: "Ответ Арсения: я, Арсений."
  },
  {
    type: "question",
    round: "Часть 2",
    title: "Что ответил Арсений?",
    time: "1 минута",
    kind: "groom",
    visual: "groom-fate",
    caption: "Прогноз без баллов",
    text: "Ты веришь в судьбу или считаешь, что всё зависит от самого человека?",
    answers: ["А. Верю в судьбу", "Б. Считаю, что всё зависит от самого человека"],
    correct: null,
    maxPoints: 0,
    reveal: "Ответ Арсения необходимо дополнить. Сейчас этот вопрос показан как прогноз и не входит в общий подсчёт."
  },
  {
    type: "question",
    round: "Часть 2",
    title: "Что ответил Арсений?",
    time: "2 минуты",
    kind: "groom",
    visual: "groom-money",
    caption: "Открытый ответ",
    text: "На что ты бы никогда не потратил деньги, хотя другие делают это постоянно?",
    answers: ["2 балла", "1 балл", "0 баллов"],
    manualScores: [2, 1, 0],
    maxPoints: 2,
    reveal: "Ответ Арсения: на люксовые оверпрайс-вещи. 2 балла — люксовые вещи с неоправданной переплатой за бренд; 1 балл — дорогие брендовые или люксовые вещи; 0 баллов — другой ответ."
  },
  {
    type: "question",
    round: "Часть 2",
    title: "Что ответил Арсений?",
    time: "1 минута",
    kind: "groom",
    visual: "groom-emoji",
    caption: "Визуальный выбор",
    text: "Какой смайлик ты чаще всего используешь в переписке со мной или с близкими?",
    answers: ["А. 😂", "Б. 👍", "В. ❤", "Г. 😘"],
    correct: 2,
    reveal: "Ответ Арсения: ❤."
  },
  {
    type: "question",
    round: "Часть 2",
    title: "Что ответил Арсений?",
    time: "1 минута",
    kind: "groom",
    visual: "groom-rest",
    caption: "Ответ Арсения",
    text: "Какой вид отдыха ты бы выбрал: пляж, город или горы?",
    answers: ["А. Пляж", "Б. Город", "В. Горы"],
    correct: 0,
    reveal: "Ответ Арсения: пляж."
  },
  {
    type: "intro",
    round: "Часть 3",
    title: "Музыкальная загадка",
    time: "Вводный экран",
    kind: "song",
    visual: "music",
    caption: "Часть 3",
    text: "Сейчас будут звучать короткие фрагменты песен. Твоя задача — угадать название композиции, исполнителя или оба ответа."
  },
  {
    type: "info",
    round: "Часть 3",
    title: "Музыкальная загадка",
    time: "Плейлист отдельно",
    kind: "song",
    visual: "playlist",
    caption: "Плейлист будет добавлен отдельно",
    text: "Музыкальные задания появятся здесь после того, как будет готов плейлист. Песни Алины и Арсения не придуманы заранее."
  },
  {
    type: "intro",
    round: "Часть 4",
    title: "Две версии одной истории",
    time: "Вводный экран",
    kind: "groom",
    visual: "story",
    caption: "Часть 4",
    text: "Сейчас мы запишем твои ответы на вопросы о вашей с Сеней истории. Сеня ответит на такие же вопросы отдельно, а ваши ответы соединят в одном видео. Отвечай сразу и своими словами — здесь нет правильных или неправильных ответов."
  },
  {
    type: "interview",
    round: "Часть 4",
    title: "Две версии одной истории",
    time: "Видеоответ",
    kind: "groom",
    visual: "story",
    caption: "Вопрос для Алины и Арсения",
    text: "Что ты подумал или подумала об Алине или Арсении после вашего первого знакомства?"
  },
  {
    type: "interview",
    round: "Часть 4",
    title: "Две версии одной истории",
    time: "Видеоответ",
    kind: "groom",
    visual: "story",
    caption: "Вопрос для Алины и Арсения",
    text: "Что тебе больше всего запомнилось в нём или в ней при первой встрече?"
  },
  {
    type: "interview",
    round: "Часть 4",
    title: "Две версии одной истории",
    time: "Видеоответ",
    kind: "groom",
    visual: "story",
    caption: "Вопрос для Алины и Арсения",
    text: "После какого момента ты понял или поняла, что хочешь продолжить общение?"
  },
  {
    type: "interview",
    round: "Часть 4",
    title: "Две версии одной истории",
    time: "Видеоответ",
    kind: "groom",
    visual: "story",
    caption: "Вопрос для Алины и Арсения",
    text: "Какое ваше свидание или совместный день ты вспоминаешь чаще всего?"
  },
  {
    type: "interview",
    round: "Часть 4",
    title: "Две версии одной истории",
    time: "Видеоответ",
    kind: "groom",
    visual: "story",
    caption: "Вопрос для Алины и Арсения",
    text: "В какой момент ты впервые почувствовал или почувствовала, что вы стали настоящей парой?"
  },
  {
    type: "interview",
    round: "Часть 4",
    title: "Две версии одной истории",
    time: "Видеоответ",
    kind: "groom",
    visual: "story",
    caption: "Вопрос для Алины и Арсения",
    text: "Какие три качества ты больше всего ценишь в Алине или Арсении?"
  },
  {
    type: "interview",
    round: "Часть 4",
    title: "Две версии одной истории",
    time: "Видеоответ",
    kind: "groom",
    visual: "story",
    caption: "Вопрос для Алины и Арсения",
    text: "Какая привычка Алины или Арсения всегда вызывает у тебя улыбку?"
  },
  {
    type: "interview",
    round: "Часть 4",
    title: "Две версии одной истории",
    time: "Видеоответ",
    kind: "groom",
    visual: "story",
    caption: "Вопрос для Алины и Арсения",
    text: "Какая ваша совместная традиция или привычка тебе нравится больше всего?"
  },
  {
    type: "interview",
    round: "Часть 4",
    title: "Две версии одной истории",
    time: "Видеоответ",
    kind: "groom",
    visual: "story",
    caption: "Вопрос для Алины и Арсения",
    text: "Какая привычка или выходка Пумы всегда заставляет вас обоих улыбаться?"
  },
  {
    type: "interview",
    round: "Часть 4",
    title: "Две версии одной истории",
    time: "Видеоответ",
    kind: "groom",
    visual: "story",
    caption: "Вопрос для Алины и Арсения",
    text: "Что из ваших отношений ты обязательно хочешь сохранить после свадьбы на долгие годы?"
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
  return total + (card.type === "question" && card.correct !== null ? 1 : 0);
}, 0);

const screens = document.querySelectorAll(".screen");
const startButton = document.querySelector("[data-start]");
const restartButton = document.querySelector("[data-restart]");
const nextButton = document.querySelector("[data-next]");

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
let awaitingReveal = false;
let selectedReveal = null;

function showScreen(name) {
  screens.forEach((screen) => {
    screen.classList.toggle("is-active", screen.dataset.screen === name);
  });
}

function renderQuestion() {
  const current = cards[index];
  awaitingReveal = false;
  selectedReveal = null;

  roundLabel.textContent = current.round;
  questionTitle.textContent = current.title;
  progress.textContent = `${index + 1} / ${cards.length}`;
  progressBar.style.width = `${((index + 1) / cards.length) * 100}%`;
  scoreLabel.textContent = score;
  timing.textContent = current.time;
  questionText.textContent = current.text;
  feedback.textContent = "";
  nextButton.disabled = current.type === "question";
  nextButton.textContent = index + 1 >= cards.length ? "Финал" : "Дальше";

  questionCard.classList.toggle("pause-card", current.type === "intro" || current.type === "info" || current.type === "interview");
  questionCard.classList.toggle("song-card", current.kind === "song");
  questionCard.classList.remove("reveal-card");

  visual.innerHTML = renderVisual(current);
  visual.classList.remove("is-flipping");
  window.requestAnimationFrame(() => visual.classList.add("is-flipping"));
  answers.innerHTML = "";

  if (current.type === "question") {
    current.answers.forEach((answer, answerIndex) => {
      const button = document.createElement("button");
      button.className = "answer";
      button.type = "button";
      button.textContent = answer;
      button.style.setProperty("--answer-delay", `${answerIndex * 70}ms`);
      button.addEventListener("click", () => chooseAnswer(answerIndex));
      answers.append(button);
    });
  }

  updatePet();
}

function renderReveal() {
  const current = cards[index];
  const earned = selectedReveal?.earnedPoints || 0;

  awaitingReveal = true;
  roundLabel.textContent = current.round;
  questionTitle.textContent = current.title;
  timing.textContent = "Экран ответа";
  questionText.textContent = current.reveal;
  feedback.textContent = selectedReveal?.label ? `Выбрано: ${selectedReveal.label}. Баллы: ${earned}.` : "";
  answers.innerHTML = "";
  nextButton.disabled = false;
  nextButton.textContent = index + 1 >= cards.length ? "Финал" : "Дальше";
  questionCard.classList.add("reveal-card");

  visual.innerHTML = renderVisual({
    ...current,
    caption: current.round === "Часть 1" ? "Правильный ответ" : "Ответ Арсения"
  });
  visual.classList.remove("is-flipping");
  window.requestAnimationFrame(() => visual.classList.add("is-flipping"));
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

  return `
    <div class="groom-poster groom-poster--${card.visual}">
      <div class="groom-symbol">${groomSymbol(card.visual)}</div>
      <div class="poster-title">${card.caption}</div>
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
    "groom-rest": "🏖️",
    music: "🎧",
    playlist: "🎵",
    story: "🎥"
  };

  return symbols[type] || "💗";
}

function chooseAnswer(answerIndex) {
  if (awaitingReveal) return;

  const current = cards[index];
  const isManual = Array.isArray(current.manualScores);
  const earnedPoints = isManual
    ? current.manualScores[answerIndex]
    : current.correct === null
      ? 0
      : answerIndex === current.correct
        ? 1
        : 0;

  score += earnedPoints;
  selectedReveal = {
    earnedPoints,
    label: current.answers[answerIndex]
  };

  if (earnedPoints > 0) {
    updatePet(true);
    burstConfetti(12);
    questionCard.classList.add("is-correct-pop");
    window.setTimeout(() => questionCard.classList.remove("is-correct-pop"), 700);
  }

  scoreLabel.textContent = score;
  renderReveal();
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
  renderQuestion();
  showScreen("quiz");
});
