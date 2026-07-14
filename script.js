const cards = [
  {
    round: "Часть 1",
    title: "Угадай мем",
    time: "2 минуты",
    kind: "meme",
    visual: "natasha",
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
    kind: "meme",
    visual: "cats-night",
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
    kind: "meme",
    visual: "zhdun",
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
    kind: "meme",
    visual: "nichosi",
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
    kind: "pause",
    visual: "battle",
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
    kind: "meme",
    visual: "coincidence",
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
    kind: "meme",
    visual: "shikarno",
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
    kind: "meme",
    visual: "artist",
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
    kind: "meme",
    visual: "budget",
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
    kind: "meme",
    visual: "cake",
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
    kind: "meme",
    visual: "photo",
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
    kind: "pause",
    visual: "photo-detective",
    caption: "Гости ищут в телефоне фото, где невеста выглядит самой счастливой",
    text: "Мини-задание: показать фото и одним предложением рассказать, почему оно теплое.",
    answers: ["Фото найдено", "История готова", "Нужно еще полминуты", "Мы плачем, но красиво"],
    correct: null,
    note: "Это мягкая пауза для воспоминаний перед вопросами о женихе."
  },
  {
    round: "Раздел о женихе",
    title: "Насколько ты знаешь Сеню?",
    time: "1 минута",
    kind: "groom",
    visual: "groom-color",
    caption: "Вопрос от жениха",
    text: "Какой твой любимый цвет?",
    answers: ["зелёный", "оливковый", "изумрудный", "серо-зелёный"],
    correct: 0,
    note: "Верный ответ: зелёный."
  },
  {
    round: "Раздел о женихе",
    title: "Насколько ты знаешь Сеню?",
    time: "1 минута",
    kind: "groom",
    visual: "groom-stars",
    caption: "Вопрос от жениха",
    text: "Какой у тебя знак зодиака?",
    answers: ["Близнецы", "Весы", "Водолей", "Рак"],
    correct: 0,
    note: "Верный ответ: Близнецы."
  },
  {
    round: "Раздел о женихе",
    title: "Насколько ты знаешь Сеню?",
    time: "1 минута",
    kind: "groom",
    visual: "groom-eyes",
    caption: "Вопрос от жениха",
    text: "Какой у тебя цвет глаз?",
    answers: ["зелёный", "серо-зелёный", "каре-зелёный", "голубо-зелёный"],
    correct: 0,
    note: "Верный ответ: зелёный."
  },
  {
    round: "Раздел о женихе",
    title: "Насколько ты знаешь Сеню?",
    time: "1 минута",
    kind: "groom",
    visual: "groom-actor",
    caption: "Вопрос от жениха",
    text: "Кто твой любимый актёр или актриса?",
    answers: ["Вуди Харрельсон", "Мэттью Макконахи", "Брюс Уиллис", "Джейсон Стэйтем"],
    correct: 0,
    note: "Верный ответ: Вуди Харрельсон."
  },
  {
    round: "Раздел о женихе",
    title: "Насколько ты знаешь Сеню?",
    time: "1 минута",
    kind: "groom",
    visual: "groom-food",
    caption: "Вопрос от жениха",
    text: "Какая твоя любимая еда?",
    answers: ["свинина в кисло-сладком соусе", "курица в кисло-сладком соусе", "свинина в соусе терияки", "говядина в кисло-сладком соусе"],
    correct: 0,
    note: "Верный ответ: свинина в кисло-сладком соусе."
  },
  {
    round: "Раздел о женихе",
    title: "Насколько ты знаешь Сеню?",
    time: "1 минута",
    kind: "groom",
    visual: "groom-child",
    caption: "Вопрос от жениха",
    text: "Кем ты хотел стать, когда был ребёнком?",
    answers: ["поваром", "ресторатором", "кондитером", "барменом"],
    correct: 0,
    note: "Верный ответ: поваром."
  },
  {
    round: "Раздел о женихе",
    title: "Насколько ты знаешь Сеню?",
    time: "1 минута",
    kind: "groom",
    visual: "groom-tattoo",
    caption: "Вопрос от жениха",
    text: "Если бы ты решился на татуировку, что бы ты набил?",
    answers: ["какую-нибудь минималистичную абстракцию", "тонкую геометрическую линию", "маленький символ без смысла для других", "минималистичную надпись"],
    correct: 0,
    note: "Верный ответ: какую-нибудь минималистичную абстракцию."
  },
  {
    round: "Раздел о женихе",
    title: "Насколько ты знаешь Сеню?",
    time: "1 минута",
    kind: "groom",
    visual: "groom-shoes",
    caption: "Вопрос от жениха",
    text: "Какой у тебя размер обуви?",
    answers: ["41,5", "41", "42", "42,5"],
    correct: 0,
    note: "Верный ответ: 41,5."
  },
  {
    round: "Раздел о женихе",
    title: "Насколько ты знаешь Сеню?",
    time: "1 минута",
    kind: "groom",
    visual: "groom-morning",
    caption: "Вопрос от жениха",
    text: "Ты жаворонок или сова?",
    answers: ["жаворонок", "сова", "зависит от дня", "человек после кофе"],
    correct: 0,
    note: "Верный ответ: жаворонок."
  },
  {
    round: "Раздел о женихе",
    title: "Насколько ты знаешь Сеню?",
    time: "1 минута",
    kind: "groom",
    visual: "groom-allergy",
    caption: "Вопрос от жениха",
    text: "На что у тебя аллергия?",
    answers: ["аллергии нет", "на пыльцу", "на пыль", "на цитрусовые"],
    correct: 0,
    note: "Верный ответ: аллергии нет."
  },
  {
    round: "Раздел о женихе",
    title: "Насколько ты знаешь Сеню?",
    time: "1 минута",
    kind: "groom",
    visual: "groom-sweet",
    caption: "Вопрос от жениха",
    text: "Какая твоя любимая сладость?",
    answers: ["овсяные печеньки", "овсяные печеньки с изюмом", "шоколадное печенье", "имбирные печеньки"],
    correct: 0,
    note: "Верный ответ: овсяные печеньки."
  },
  {
    round: "Раздел о женихе",
    title: "Насколько ты знаешь Сеню?",
    time: "1 минута",
    kind: "groom",
    visual: "groom-holiday",
    caption: "Вопрос от жениха",
    text: "Какой у тебя любимый праздник?",
    answers: ["Новый год", "день рождения", "майские праздники", "Рождество"],
    correct: 0,
    note: "Верный ответ: Новый год."
  },
  {
    round: "Раздел о женихе",
    title: "Насколько ты знаешь Сеню?",
    time: "1 минута",
    kind: "groom",
    visual: "groom-country",
    caption: "Вопрос от жениха",
    text: "В какую страну ты бы переехал, если бы была возможность?",
    answers: ["Испания", "Португалия", "Италия", "Греция"],
    correct: 0,
    note: "Верный ответ: Испания."
  },
  {
    round: "Раздел о женихе",
    title: "Насколько ты знаешь Сеню?",
    time: "1 минута",
    kind: "groom",
    visual: "groom-step",
    caption: "Вопрос от жениха",
    text: "Кто из вас сделал первый шаг в отношениях?",
    answers: ["я (Арсений)", "она", "оба почти одновременно", "всё началось с переписки"],
    correct: 0,
    note: "Верный ответ: я (Арсений)."
  },
  {
    round: "Раздел о женихе",
    title: "Насколько ты знаешь Сеню?",
    time: "1 минута",
    kind: "groom",
    visual: "groom-fate",
    caption: "Вопрос от жениха",
    text: "Ты веришь в судьбу или считаешь, что всё зависит от самого человека?",
    answers: ["ответ не указан", "скорее верю в судьбу", "скорее всё зависит от человека", "думаю, что 50 на 50"],
    correct: 0,
    note: "Верный ответ: ответ не указан."
  },
  {
    round: "Раздел о женихе",
    title: "Насколько ты знаешь Сеню?",
    time: "1 минута",
    kind: "groom",
    visual: "groom-money",
    caption: "Вопрос от жениха",
    text: "На что ты бы никогда не потратил деньги, хотя другие делают это постоянно?",
    answers: ["на люксовые оверпрайс-вещи", "на дорогие лимитированные кроссовки", "на брендовые сумки", "на премиальные часы"],
    correct: 0,
    note: "Верный ответ: на люксовые оверпрайс-вещи."
  },
  {
    round: "Раздел о женихе",
    title: "Насколько ты знаешь Сеню?",
    time: "1 минута",
    kind: "groom",
    visual: "groom-emoji",
    caption: "Вопрос от жениха",
    text: "Какой смайлик ты чаще всего используешь в переписке со мной или с близкими?",
    answers: ["❤", "😘", "😅", "🥰"],
    correct: 0,
    note: "Верный ответ: ❤."
  },
  {
    round: "Раздел о женихе",
    title: "Насколько ты знаешь Сеню?",
    time: "1 минута",
    kind: "groom",
    visual: "groom-rest",
    caption: "Вопрос от жениха",
    text: "Какой вид отдыха ты бы выбрал: пляж, город или горы?",
    answers: ["пляж", "город", "горы", "домик у воды"],
    correct: 0,
    note: "Верный ответ: пляж."
  },
  {
    round: "Часть 3",
    title: "Угадай песню",
    time: "2 минуты",
    kind: "song",
    visual: "wedding",
    caption: "Фрагмент: «Ах, эта свадьба, свадьба, свадьба пела и плясала...»",
    text: "Какая это песня и исполнитель?",
    answers: ["Муслим Магомаев — Свадьба", "Валерий Меладзе — Красиво", "Дима Билан — Держи", "Градусы — Невеста"],
    correct: 0,
    note: "Самая узнаваемая свадебная классика для общего подпевания."
  },
  {
    round: "Часть 3",
    title: "Угадай песню",
    time: "2 минуты",
    kind: "song",
    visual: "ring-song",
    caption: "Фрагмент: «Обручальное кольцо - не простое украшенье...»",
    text: "Кто исполняет эту песню?",
    answers: ["Лейся, песня — Обручальное кольцо", "Иванушки International — Тучи", "А-Студио — Улетаю", "Браво — Любите, девушки"],
    correct: 0,
    note: "Песня прямо создана для свадебного момента."
  },
  {
    round: "Часть 3",
    title: "Угадай песню",
    time: "2 минуты",
    kind: "song",
    visual: "bride-song",
    caption: "Фрагмент: «Ты сегодня невеста, ты сегодня красивая...»",
    text: "Что это за трек?",
    answers: ["Градусы — Невеста", "Руки Вверх! — 18 мне уже", "Artik & Asti — Неделимы", "Звери — До скорой встречи"],
    correct: 0,
    note: "Современная карточка специально для невесты."
  },
  {
    round: "Часть 3",
    title: "Угадай песню",
    time: "2 минуты",
    kind: "song",
    visual: "forever",
    caption: "Фрагмент: «Вместе и навсегда, рядом с тобой...»",
    text: "Выбери правильный вариант.",
    answers: ["Алсу — Вместе и навсегда", "МакSим — Знаешь ли ты", "Serebro — Мама Люба", "IOWA — Улыбайся"],
    correct: 0,
    note: "Очень свадебное настроение: мягко, светло и навсегда."
  },
  {
    round: "Пауза ведущей",
    title: "Музыкальный припев",
    time: "4 минуты",
    kind: "pause",
    visual: "karaoke",
    caption: "Гости выбирают песню, которую точно включили бы паре",
    text: "Мини-задание: каждая команда называет один трек для первого семейного плейлиста.",
    answers: ["Лиричная", "Танцевальная", "Смешная", "Та самая"],
    correct: null,
    note: "Можно включить 15 секунд победившего трека."
  },
  {
    round: "Часть 3",
    title: "Угадай песню",
    time: "2 минуты",
    kind: "song",
    visual: "love-hit",
    caption: "Фрагмент: «Я буду любить тебя просто...»",
    text: "Какая песня звучит по смыслу?",
    answers: ["Дима Билан — Я просто люблю тебя", "Нюша — Выше", "Баста — Выпускной", "Ёлка — Прованс"],
    correct: 0,
    note: "Хороший вариант для романтичной паузы."
  },
  {
    round: "Часть 3",
    title: "Угадай песню",
    time: "2 минуты",
    kind: "song",
    visual: "hands",
    caption: "Фрагмент: «Я поднимаю руки, хочу тебе сдаться...»",
    text: "Кто исполнитель?",
    answers: ["Григорий Лепс — Я поднимаю руки", "Мот — Капкан", "Би-2 — Мой рок-н-ролл", "Uma2rman — Проститься"],
    correct: 0,
    note: "Не строго свадебная, зато отлично работает на танцпол."
  },
  {
    round: "Часть 3",
    title: "Угадай песню",
    time: "2 минуты",
    kind: "song",
    visual: "kiss",
    caption: "Фрагмент: «Он тебя целует, говорит, что любит...»",
    text: "Какая группа это поет?",
    answers: ["Руки Вверх! — Он тебя целует", "Дискотека Авария — Небо", "Hi-Fi — Не дано", "Корни — Ты узнаешь ее"],
    correct: 0,
    note: "Для веселой части вечера и ностальгического смеха."
  },
  {
    round: "Часть 3",
    title: "Угадай песню",
    time: "2 минуты",
    kind: "song",
    visual: "heart",
    caption: "Фрагмент: «Любовь настала, значит, все сбылось...»",
    text: "Выбери правильный ответ.",
    answers: ["Роза Рымбаева — Любовь настала", "Полина Гагарина — Спектакль окончен", "Винтаж — Ева", "Чай вдвоем — День рождения"],
    correct: 0,
    note: "Очень нежная классика для романтичного финала блока."
  },
  {
    round: "Часть 3",
    title: "Угадай песню",
    time: "2 минуты",
    kind: "song",
    visual: "dance",
    caption: "Фрагмент: «Самая, самая, ты самая красивая...»",
    text: "Кто исполнитель?",
    answers: ["Егор Крид — Самая Самая", "Мот — Сопрано", "JONY — Комета", "Ханна — Омар Хайям"],
    correct: 0,
    note: "Для невесты эта карточка звучит особенно правильно."
  },
  {
    round: "Пауза ведущей",
    title: "Тост на одно слово",
    time: "4 минуты",
    kind: "pause",
    visual: "toast",
    caption: "Каждая гостья выбирает одно слово для будущей семьи",
    text: "Мини-задание: назвать слово-пожелание и коротко объяснить его.",
    answers: ["Любовь", "Дом", "Смех", "Навсегда"],
    correct: null,
    note: "Эта пауза красиво закрывает квиз перед финалом."
  },
  {
    round: "Финал",
    title: "Финальный тост",
    time: "2 минуты",
    kind: "song",
    visual: "finale",
    caption: "Финальный припев вечера",
    text: "Главная победа сегодня не в баллах, а в том, что у этой истории будет свадьба.",
    answers: ["Правда", "Абсолютная правда", "Самая правда", "Все ответы верные"],
    correct: 3,
    note: "Финал мягкий: все дороги ведут к любви."
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
  questionCard.classList.toggle("pause-card", current.correct === null);
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
  const isPause = current.correct === null;
  const isCorrect = isPause || answerIndex === current.correct;

  if (!isPause && isCorrect) {
    score += 1;
    updatePet(true);
    burstConfetti(12);
    questionCard.classList.add("is-correct-pop");
    window.setTimeout(() => questionCard.classList.remove("is-correct-pop"), 700);
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
