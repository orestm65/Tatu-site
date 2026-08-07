export const salonImages = {
  hero: "https://images.pexels.com/photos/4125532/pexels-photo-4125532.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  heroSecondary: "https://images.pexels.com/photos/6593455/pexels-photo-6593455.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  studio: "https://images.pexels.com/photos/6593395/pexels-photo-6593395.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  studioWide: "https://images.pexels.com/photos/13145901/pexels-photo-13145901.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  inkTable: "https://images.pexels.com/photos/6593420/pexels-photo-6593420.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  process: "https://images.pexels.com/photos/6024213/pexels-photo-6024213.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  cleanup: "https://images.pexels.com/photos/4125513/pexels-photo-4125513.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
};

export const portfolioImages = [
  { src: "https://images.pexels.com/photos/12802253/pexels-photo-12802253.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", title: "Череп с розой", category: "Дарк" },
  { src: "https://images.pexels.com/photos/10112805/pexels-photo-10112805.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", title: "Геометрия", category: "Графика" },
  { src: "https://images.pexels.com/photos/18804974/pexels-photo-18804974.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", title: "Портрет", category: "Реализм" },
  { src: "https://images.pexels.com/photos/29251828/pexels-photo-29251828.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", title: "Цветочный рукав", category: "Олдскул" },
  { src: "https://images.pexels.com/photos/5708514/pexels-photo-5708514.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", title: "Минимализм", category: "Минимал" },
  { src: "https://images.pexels.com/photos/8184242/pexels-photo-8184242.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", title: "Звёзды", category: "Файн-лайн" },
];

export const masterAvatars = [
  { src: "https://images.pexels.com/photos/33222631/pexels-photo-33222631.jpeg?auto=compress&cs=tinysrgb&h=300&w=300", name: "Артём Волков" },
  { src: "https://images.pexels.com/photos/7909089/pexels-photo-7909089.jpeg?auto=compress&cs=tinysrgb&h=300&w=300", name: "Майя Корнеева" },
  { src: "https://images.pexels.com/photos/33594031/pexels-photo-33594031.jpeg?auto=compress&cs=tinysrgb&h=300&w=300", name: "Дмитрий Сокол" },
  { src: "https://images.pexels.com/photos/38511544/pexels-photo-38511544.jpeg?auto=compress&cs=tinysrgb&h=300&w=300", name: "Лина Прайм" },
];

export const testimonialsAvatars = [
  "https://images.pexels.com/photos/4912590/pexels-photo-4912590.jpeg?auto=compress&cs=tinysrgb&h=200&w=200",
  "https://images.pexels.com/photos/8727669/pexels-photo-8727669.jpeg?auto=compress&cs=tinysrgb&h=200&w=200",
];

export const stats = [
  { value: "8", label: "лет на рынке", suffix: "+" },
  { value: "4200", label: "счастливых клиентов", suffix: "+" },
  { value: "12", label: "мастеров в команде" },
  { value: "4.9", label: "средний рейтинг" },
];

export const services = [
  {
    id: "s1",
    title: "Сеанс татуировки",
    description: "Индивидуальная работа с эскизом. От минимализма до масштабного рукава.",
    price: "от 4 000 ₽",
    duration: "2–6 часов",
    icon: "Brush",
    badge: "Хит",
    features: ["Авторский эскиз", "Консультация included", "Коррекция в подарок"],
  },
  {
    id: "s2",
    title: "Cover-up (перекрытие)",
    description: "Превратим старую или неудачную тату в произведение искусства.",
    price: "от 6 500 ₽",
    duration: "3–8 часов",
    icon: "Layers",
    badge: "Сложно",
    features: ["Анализ старой работы", "Фото-визуализация", "Гарантия результата"],
  },
  {
    id: "s3",
    title: "Лазерное удаление",
    description: "Безопасное осветление татуировки перед новым сеансом или полное удаление.",
    price: "от 1 800 ₽",
    duration: "20–40 мин",
    icon: "Sparkles",
    badge: "Новинка",
    features: ["Без шрамов", "Контроль врача", "Курс со скидкой"],
  },
  {
    id: "s4",
    title: "Пирсинг",
    description: "Профессиональный пирсинг стерильными инструментами и качественной бижутерией.",
    price: "от 1 200 ₽",
    duration: "30 мин",
    icon: "CircleDot",
    badge: null,
    features: ["Стерильность А+", "Имплант-титан", "После уход-набор"],
  },
  {
    id: "s5",
    title: "Консультация и эскиз",
    description: "Обсудим идею, стиль и место. Подготовим эскиз до сеанса.",
    price: "бесплатно",
    duration: "30 мин",
    icon: "Lightbulb",
    badge: "0 ₽",
    features: ["Онлайн или в студии", "Эскиз за 3 дня", "Без обязательств"],
  },
  {
    id: "s6",
    title: "Доработка и коррекция",
    description: "Освежим контуры, добавим детали или расширим существующую работу.",
    price: "от 1 500 ₽",
    duration: "1–3 часа",
    icon: "Wand2",
    badge: null,
    features: ["Фото-сравнение", "Цвет реставрация", "Скидка клиенту"],
  },
];

export const masters = [
  {
    id: "m1",
    name: "Артём Волков",
    role: "Основатель · Реализм, Дарк",
    bio: "12 лет опыта. Призёр международных конвенций. Специализируется на портретах и чёрно-серой графике.",
    styles: ["Реализм", "Дарк", "Ч/Б графика"],
    experience: "12 лет",
    avatar: masterAvatars[0].src,
    works: 840,
  },
  {
    id: "m2",
    name: "Майя Корнеева",
    role: "Файн-лайн, Акварель",
    bio: "Художник с образованием в иллюстрации. Мастер тонких линий, флористики и цветных акварельных работ.",
    styles: ["Файн-лайн", "Акварель", "Флористика"],
    experience: "7 лет",
    avatar: masterAvatars[1].src,
    works: 620,
  },
  {
    id: "m3",
    name: "Дмитрий Сокол",
    role: "Олдскул, Традишнл",
    bio: "Яркий и смелый стиль. 9 лет в олдскуле и нео-традишнл. Чёткие контуры и сочные заливки.",
    styles: ["Олдскул", "Нео-традишнл", "Япония"],
    experience: "9 лет",
    avatar: masterAvatars[2].src,
    works: 970,
  },
  {
    id: "m4",
    name: "Лина Прайм",
    role: "Минимализм, Геометрия",
    bio: "Геометрия, дотворк и лайн-арт. Безупречная симметрия и внимание к деталям.",
    styles: ["Геометрия", "Дотворк", "Минимал"],
    experience: "6 лет",
    avatar: masterAvatars[3].src,
    works: 510,
  },
];

export const styleCategories = [
  { id: "all", label: "Все работы" },
  { id: "Дарк", label: "Дарк" },
  { id: "Графика", label: "Графика" },
  { id: "Реализм", label: "Реализм" },
  { id: "Олдскул", label: "Олдскул" },
  { id: "Минимал", label: "Минимализм" },
  { id: "Файн-лайн", label: "Файн-лайн" },
];

export const testimonials = [
  {
    id: "t1",
    name: "Игорь М.",
    rating: 5,
    text: "Артём сделал рукав за 4 сеанса — результат превзошёл все ожидания. Атмосфера в студии премиальная, стерильно и комфортно.",
    master: "Артём Волков",
    avatar: testimonialsAvatars[0],
  },
  {
    id: "t2",
    name: "Анна К.",
    rating: 5,
    text: "Делала флористику у Майи. Тончайшие линии, аккуратность невероятная. После заживления выглядит как картинка. Спасибо!",
    master: "Майя Корнеева",
    avatar: testimonialsAvatars[1],
  },
  {
    id: "t3",
    name: "Сергей Л.",
    rating: 5,
    text: "Пришёл на cover-up старой тату — закрыли полностью, получилось лучше чем я представлял. Мастерство топ.",
    master: "Артём Волков",
    avatar: testimonialsAvatars[0],
  },
  {
    id: "t4",
    name: "Вика П.",
    rating: 5,
    text: "Минималистичный дотворк у Лины. Всё идеально симметрично. Консультация помогла определиться со стилем.",
    master: "Лина Прайм",
    avatar: testimonialsAvatars[1],
  },
];

export const faqItems = [
  {
    id: "f1",
    question: "Больно ли делать татуировку?",
    answer: "Болевые ощущения индивидуальны и зависят от места, размера и вашего порога чувствительности. В чувствительных зонах (рёбра, локти, шея) дискомфорт выше. Мы делаем перерывы по запросу и используем анестезирующие кремы по показаниям.",
  },
  {
    id: "f2",
    question: "Сколько заживает татуировка?",
    answer: "Поверхностное заживление занимает 7–14 дней, полное — до 4 недель. Мы выдаём подробную инструкцию по уходу и крем. В первые дни важно избегать воды, солнца и трения одежды.",
  },
  {
    id: "f3",
    question: "Можно ли исправить старую татуировку?",
    answer: "Да. Мы делаем cover-up (перекрытие новой работой) или лазерное осветление. На бесплатной консультации мастер оценит старую работу и предложит оптимальный вариант.",
  },
  {
    id: "f4",
    question: "Как подготовиться к сеансу?",
    answer: "Хорошо поспите, плотно поешьте за 1–2 часа, избегайте алкоголя и кофе в день сеанса. Наденьте удобную одежду, дающую доступ к зоне работы. Возьмите паспорт — мы работаем только с 18+.",
  },
  {
    id: "f5",
    question: "Какие гарантии вы даёте?",
    answer: "Мы гарантируем стерильность, качество эскиза и исполнения. Одна коррекция после заживления входит в стоимость. Все материалы одноразовые и сертифицированы.",
  },
  {
    id: "f6",
    question: "Можно ли записаться онлайн?",
    answer: "Да, воспользуйтесь секцией бронирования на этой странице. Выберите мастера, дату и удобный слот времени — мы подтвердим запись в течение часа.",
  },
];

export const processSteps = [
  {
    id: "p1",
    step: "01",
    title: "Заявка и консультация",
    description: "Оставляете заявку или бронируете слот. Мастер связывается с вами, обсуждает идею, стиль и место.",
    icon: "MessageSquare",
  },
  {
    id: "p2",
    step: "02",
    title: "Эскиз и утверждение",
    description: "Художник готовит индивидуальный эскиз. Вы согласовываете детали, вносим правки до полного одобрения.",
    icon: "PenTool",
  },
  {
    id: "p3",
    step: "03",
    title: "Сеанс татуировки",
    description: "В комфортной обстановке, под музыку и с перерывами. Полностью стерильные одноразовые материалы.",
    icon: "Brush",
  },
  {
    id: "p4",
    step: "04",
    title: "Уход и коррекция",
    description: "Выдаём инструкцию по уходу и крем. После заживления — бесплатная коррекция при необходимости.",
    icon: "HeartHandshake",
  },
];

export const pricingPlans = [
  {
    id: "pl1",
    name: "Мини",
    description: "Небольшие работы до 7 см",
    price: "4 000",
    period: "за сеанс",
    icon: "Sparkle",
    features: ["Эскиз включён", "До 7 см", "1 сеанс", "Коррекция в подарок", "Уходовый набор"],
    popular: false,
  },
  {
    id: "pl2",
    name: "Стандарт",
    description: "Средние работы 7–15 см",
    price: "9 500",
    period: "за сеанс",
    icon: "Flame",
    features: ["Индивидуальный эскиз", "7–15 см", "1–2 сеанса", "Коррекция включена", "Премиум-крем", "Консультация бесплатно"],
    popular: true,
  },
  {
    id: "pl3",
    name: "Премиум",
    description: "Крупные работы и рукава",
    price: "18 000",
    period: "за сеанс",
    icon: "Crown",
    features: ["Авторский эскиз", "От 15 см и рукава", "Несколько сеансов", "Все коррекции", "Премиум-уход", "Приоритетная запись", "Фото-сессия работы"],
    popular: false,
  },
];

export const timeSlots = [
  "11:00", "12:00", "13:00", "14:00",
  "15:00", "16:00", "17:00", "18:00",
  "19:00", "20:00",
];

export const bookingMasters = [
  { id: "any", name: "Любой мастер" },
  ...masters.map((m) => ({ id: m.id, name: m.name })),
];

export const contactInfo = {
  address: "г. Москва, ул. Тверская, 12, этаж 3",
  phone: "+7 (495) 123-45-67",
  email: "hello@inkart.studio",
  hours: [
    { day: "Пн–Пт", time: "11:00 – 21:00" },
    { day: "Сб–Вс", time: "12:00 – 20:00" },
  ],
  socials: [
    { name: "Instagram", icon: "Instagram", url: "#" },
    { name: "Telegram", icon: "Send", url: "#" },
    { name: "VK", icon: "MessageCircle", url: "#" },
    { name: "YouTube", icon: "Youtube", url: "#" },
  ],
};

export const galleryItems = [
  ...portfolioImages.map((p, i) => ({ id: `g${i + 1}`, ...p })),
];

export const navLinks = [
  { label: "Главная", href: "#home" },
  { label: "Услуги", href: "#services" },
  { label: "Мастера", href: "#masters" },
  { label: "Портфолио", href: "#portfolio" },
  { label: "Цены", href: "#pricing" },
  { label: "Бронь", href: "#booking" },
  { label: "Контакты", href: "#contacts" },
];
