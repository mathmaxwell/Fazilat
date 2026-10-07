/* Test dasturining ishlash mantig'i. · Логика работы тестовой программы.
   Savollar questions/ papkasida (har bir til va mavzu uchun alohida fayl), sozlamalar — settings.js faylida.
   Вопросы хранятся в папке questions/ (отдельный файл на каждый язык и тему), настройки — в settings.js.
   Savol qo'shish uchun bu faylni o'zgartirish shart emas. · Чтобы добавить вопрос, этот файл менять не нужно. */
(function () {
  "use strict";

  const root = document.getElementById("app");
  const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const LANGUAGE_ORDER = ["uz", "ru"];

  const settings = Object.assign(
    {
      testCount: 0,
      openCount: 0,
      shuffleQuestions: true,
      timeLimit: 0,
      showCorrectAnswers: true,
    },
    typeof SETTINGS === "object" && SETTINGS ? SETTINGS : {}
  );

  const bank = Array.isArray(window.QUESTION_BANK) ? window.QUESTION_BANK : [];
  const loadErrors = Array.isArray(window.LOAD_ERRORS) ? window.LOAD_ERRORS : [];

  const state = {
    lang: null,
    topic: null,
    name: "",
    items: [],
    current: 0,
    startedAt: 0,
    finishedAt: 0,
    timerId: null,
    running: false,
  };

  // ---------- Yordamchi funksiyalar · Вспомогательные функции ----------

  function h(tag, props, ...children) {
    const node = document.createElement(tag);
    for (const [key, value] of Object.entries(props || {})) {
      if (value == null || value === false) continue;
      if (key === "class") node.className = value;
      else if (key.startsWith("on")) node.addEventListener(key.slice(2), value);
      else node.setAttribute(key, value === true ? "" : value);
    }
    for (const child of children.flat(Infinity)) {
      if (child == null || child === false) continue;
      node.append(child instanceof Node ? child : String(child));
    }
    return node;
  }

  function mount(...nodes) {
    root.replaceChildren(...nodes.filter(Boolean));
    window.scrollTo(0, 0);
  }

  function shuffle(list) {
    const a = list.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  // Bazadan `count` ta savolni tasodifiy tanlaydi (0 — hammasi).
  // Случайно выбирает из базы `count` вопросов (0 — все).
  function pick(list, count, mix) {
    let chosen = list;
    if (count > 0 && count < list.length) {
      const keep = new Set(shuffle(list.map((_, i) => i)).slice(0, count));
      chosen = list.filter((_, i) => keep.has(i));
    }
    return mix ? shuffle(chosen) : chosen.slice();
  }

  const isText = (v) => typeof v === "string" && v.trim() !== "";
  const countOf = (total, wanted) => (wanted > 0 ? Math.min(total, wanted) : total);
  const pad = (n) => String(n).padStart(2, "0");

  // Форма слова после числа: plural(5, "вопрос", "вопроса", "вопросов") → "вопросов".
  function plural(n, one, few, many) {
    const m10 = n % 10;
    const m100 = n % 100;
    if (m10 === 1 && m100 !== 11) return one;
    if (m10 >= 2 && m10 <= 4 && (m100 < 12 || m100 > 14)) return few;
    return many;
  }

  function short(text) {
    const t = String(text || "").trim();
    return t.length > 50 ? t.slice(0, 50) + "…" : t;
  }

  function formatDuration(ms) {
    const total = Math.max(0, Math.floor(ms / 1000));
    const hh = Math.floor(total / 3600);
    const mm = Math.floor((total % 3600) / 60);
    const ss = total % 60;
    return hh ? `${hh}:${pad(mm)}:${pad(ss)}` : `${pad(mm)}:${pad(ss)}`;
  }

  function formatDate(d) {
    return `${pad(d.getDate())}.${pad(d.getMonth() + 1)}.${d.getFullYear()} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
  }

  function wordCount(text) {
    return t().words(text.trim() ? text.trim().split(/\s+/).length : 0);
  }

  function isAnswered(item) {
    return item.kind === "test" ? item.chosen !== null : item.answer.trim() !== "";
  }

  // ---------- Interfeys matnlari · Тексты интерфейса ----------

  const I18N = {
    uz: {
      name: "O'zbekcha",
      appTitle: "Hamshiralar bilimini baholash testi",
      chooseTopic: "Mavzuni tanlang",
      topicSize: (tests, open) => `Bazada ${tests} ta test va ${open} ta yopiq savol`,
      backToLanguage: "← Tilni o'zgartirish",
      backToTopics: "← Boshqa mavzu",
      factTests: (n) => [h("strong", null, n), " ta test savoli — bitta to'g'ri javobni tanlang"],
      factOpen: (n) => [h("strong", null, n), " ta yopiq savol — javobni o'zingiz yozasiz"],
      time: "Vaqt: ",
      minutes: (n) => `${n} daqiqa`,
      unlimited: "cheklanmagan",
      nameLabel: "Familiya, ism, sharif",
      namePlaceholder: "Masalan: Karimova Dilnoza Akmalovna",
      nameMissing: "Iltimos, familiya, ism va sharifingizni kiriting.",
      start: "Testni boshlash",
      answered: (done, total) => `Javob berildi: ${done} / ${total}`,
      openTitle: "Yopiq (yozma) savol",
      testTitle: "Test savoli",
      questionAria: (n) => `${n}-savol`,
      badgeTest: "Test",
      badgeOpen: "Yopiq savol — yozma javob",
      badgeCase: "Vaziyatli masala",
      answerPlaceholder: "Javobingizni shu yerga yozing...",
      words: (n) => `${n} ta so'z`,
      timeLeft: "Qolgan vaqt",
      timeSpent: "Sarflangan vaqt",
      finish: "Yakunlash",
      navAria: "Savollar",
      legendAnswered: "javob berilgan",
      legendEmpty: "javob berilmagan",
      legendOpen: "yopiq (yozma) savol",
      questionOf: (n, total) => `Savol ${n} / ${total}`,
      situation: "Vaziyat",
      prev: "← Oldingi",
      next: "Keyingi →",
      finishTest: "Testni yakunlash",
      confirmUnanswered: (n) => `${n} ta savolga javob berilmagan. Baribir testni yakunlaysizmi?`,
      confirmFinish: "Testni yakunlaysizmi? Yakunlangandan keyin javoblarni o'zgartirib bo'lmaydi.",
      yourAnswer: "Sizning javobingiz:",
      noAnswer: "— javob berilmagan",
      rightAnswer: "To'g'ri javob:",
      notWritten: "— javob yozilmagan",
      grade: "Tekshiruvchi bahosi: ____________",
      confirmRestart: "Joriy natija ekrandan o'chiriladi. Yangi test boshlansinmi?",
      result: "Test natijasi",
      fio: "F.I.Sh.",
      topic: "Mavzu",
      date: "Sana",
      timeUp: "Ajratilgan vaqt tugadi — test avtomatik yakunlandi.",
      score: (percent) => `Test savollari bo'yicha to'g'ri javoblar: ${percent}%`,
      openNote: (n) => `Yopiq savollarga yozilgan javoblar (${n} ta) tekshiruvchi tomonidan baholanadi.`,
      print: "Chop etish / PDF saqlash",
      download: "Natijani yuklab olish (.txt)",
      newTest: "Yangi test",
      testsHeading: "Test savollari",
      openHeading: "Yopiq savollar (yozma javoblar)",
      txtScore: (c, n, p) => `Test natijasi: ${c} / ${n} (${p}%)`,
      txtTests: "TEST SAVOLLARI",
      txtOpen: "YOPIQ SAVOLLAR (YOZMA JAVOBLAR)",
      txtAnswer: "Javob",
      txtRight: "TO'G'RI",
      txtWrong: "NOTO'G'RI",
      filePrefix: "natija",
      err: {
        testLabel: (n) => `${n}-test`,
        openLabel: (n) => `${n}-yopiq savol`,
        badBlock: "blok noto'g'ri yozilgan.",
        noQuestion: "«question» matni yo'q.",
        noCorrect: "«correct» javobi yo'q.",
        noWrong: "«wrong» ro'yxatida kamida bitta to'ldirilgan javob bo'lishi kerak.",
        correctInWrong: "to'g'ri javob noto'g'ri javoblar ichida ham yozilgan.",
        notList: (name) => `«${name}»  [ ... ]  ko'rinishidagi ro'yxat bo'lishi kerak.`,
        noTopic: "«topic» (mavzu nomi) yozilmagan.",
        empty: "faylda birorta ham savol yo'q.",
      },
    },

    ru: {
      name: "Русский",
      appTitle: "Тест для оценки знаний медицинских сестёр",
      chooseTopic: "Выберите тему",
      topicSize: (tests, open) => `Тестов в базе: ${tests} · открытых вопросов: ${open}`,
      backToLanguage: "← Сменить язык",
      backToTopics: "← Другая тема",
      factTests: (n) => [
        h("strong", null, n), " ",
        plural(n, "тестовый вопрос", "тестовых вопроса", "тестовых вопросов"),
        " — выберите один правильный ответ",
      ],
      factOpen: (n) => [
        h("strong", null, n), " ",
        plural(n, "открытый вопрос", "открытых вопроса", "открытых вопросов"),
        " — ответ пишете сами",
      ],
      time: "Время: ",
      minutes: (n) => `${n} ${plural(n, "минута", "минуты", "минут")}`,
      unlimited: "не ограничено",
      nameLabel: "Фамилия, имя, отчество",
      namePlaceholder: "Например: Каримова Дилноза Акмаловна",
      nameMissing: "Пожалуйста, введите фамилию, имя и отчество.",
      start: "Начать тест",
      answered: (done, total) => `Отвечено: ${done} / ${total}`,
      openTitle: "Открытый (письменный) вопрос",
      testTitle: "Тестовый вопрос",
      questionAria: (n) => `Вопрос ${n}`,
      badgeTest: "Тест",
      badgeOpen: "Открытый вопрос — письменный ответ",
      badgeCase: "Ситуационная задача",
      answerPlaceholder: "Напишите ваш ответ здесь...",
      words: (n) => `${n} ${plural(n, "слово", "слова", "слов")}`,
      timeLeft: "Оставшееся время",
      timeSpent: "Затраченное время",
      finish: "Завершить",
      navAria: "Вопросы",
      legendAnswered: "есть ответ",
      legendEmpty: "нет ответа",
      legendOpen: "открытый (письменный) вопрос",
      questionOf: (n, total) => `Вопрос ${n} / ${total}`,
      situation: "Ситуация",
      prev: "← Назад",
      next: "Далее →",
      finishTest: "Завершить тест",
      confirmUnanswered: (n) => `Вы не ответили на ${n} ${plural(n, "вопрос", "вопроса", "вопросов")}. Всё равно завершить тест?`,
      confirmFinish: "Завершить тест? После завершения ответы изменить нельзя.",
      yourAnswer: "Ваш ответ:",
      noAnswer: "— нет ответа",
      rightAnswer: "Правильный ответ:",
      notWritten: "— ответ не написан",
      grade: "Оценка проверяющего: ____________",
      confirmRestart: "Текущий результат будет удалён с экрана. Начать новый тест?",
      result: "Результат теста",
      fio: "Ф.И.О.",
      topic: "Тема",
      date: "Дата",
      timeUp: "Отведённое время истекло — тест завершён автоматически.",
      score: (percent) => `Правильных ответов на тестовые вопросы: ${percent}%`,
      openNote: (n) => `Письменные ответы на открытые вопросы (${n}) оценивает проверяющий.`,
      print: "Печать / сохранить PDF",
      download: "Скачать результат (.txt)",
      newTest: "Новый тест",
      testsHeading: "Тестовые вопросы",
      openHeading: "Открытые вопросы (письменные ответы)",
      txtScore: (c, n, p) => `Правильных ответов: ${c} / ${n} (${p}%)`,
      txtTests: "ТЕСТОВЫЕ ВОПРОСЫ",
      txtOpen: "ОТКРЫТЫЕ ВОПРОСЫ (ПИСЬМЕННЫЕ ОТВЕТЫ)",
      txtAnswer: "Ответ",
      txtRight: "ВЕРНО",
      txtWrong: "НЕВЕРНО",
      filePrefix: "результат",
      err: {
        testLabel: (n) => `Тест ${n}`,
        openLabel: (n) => `Открытый вопрос ${n}`,
        badBlock: "блок записан неправильно.",
        noQuestion: "нет текста «question».",
        noCorrect: "нет ответа «correct».",
        noWrong: "в списке «wrong» должен быть хотя бы один заполненный ответ.",
        correctInWrong: "правильный ответ записан также среди неправильных.",
        notList: (name) => `«${name}» должен быть списком вида  [ ... ].`,
        noTopic: "не указано название темы «topic».",
        empty: "в файле нет ни одного вопроса.",
      },
    },
  };

  const t = () => I18N[state.lang];
  const topicsFor = (lang) => bank.filter((entry) => entry.language === lang);
  const languages = () => LANGUAGE_ORDER.filter((lang) => topicsFor(lang).length > 0);

  // ---------- Savol fayllarini tekshirish · Проверка файлов вопросов ----------

  // Fayl o'qilmagan bo'lsa (yozuv xatosi yoki fayl yo'q). Qator raqamini brauzer faqat sahifa
  // server orqali ochilganda beradi, file:// rejimida bermaydi.
  // Файл не загрузился (ошибка записи или файла нет). Номер строки браузер сообщает только
  // при открытии страницы через сервер, в режиме file:// — нет.
  function notLoadedText(file) {
    const e = loadErrors.find((x) => x.file === file);
    return `${file}: fayl o'qilmadi — faylda yozuv xatosi bor (vergul, qavs yoki qo'shtirnoq tushib qolgan bo'lishi mumkin) yoki fayl topilmadi.` +
      (e ? ` Xato taxminan ${e.line}-qatorda.` : "") +
      ` · Файл не прочитан — в нём ошибка записи (возможно, пропущена запятая, скобка или кавычка) или файл не найден.` +
      (e ? ` Ошибка примерно в строке ${e.line} (${e.message}).` : "");
  }

  function findErrors() {
    const errors = [];
    const scripts = [...document.querySelectorAll("script[src]")].map((s) => s.getAttribute("src"));
    if (typeof SETTINGS === "undefined" && scripts.some((src) => /(^|\/)settings\.js$/.test(src))) {
      errors.push(notLoadedText("settings.js"));
    }
    const loaded = new Set(bank.map((entry) => entry.file));
    for (const src of scripts) {
      const at = src.lastIndexOf("questions/");
      const file = at >= 0 ? src.slice(at) : "";
      if (/^questions\/[^\/]+\.js$/.test(file) && !loaded.has(file)) errors.push(notLoadedText(file));
    }

    for (const entry of bank) {
      const file = entry.file || "questions/?";
      const tr = I18N[entry.language];
      if (!tr) {
        errors.push(`${file}: language: "${entry.language}" — faqat "uz" yoki "ru" · допустимо только "uz" или "ru".`);
        continue;
      }
      const E = tr.err;
      if (!isText(entry.topic)) errors.push(`${file}: ${E.noTopic}`);
      if (entry.openQuestions == null) entry.openQuestions = [];

      if (!Array.isArray(entry.tests)) {
        errors.push(`${file}: ${E.notList("tests")}`);
      } else {
        entry.tests.forEach((q, i) => {
          const label = `${file} — ${E.testLabel(i + 1)}` + (q && isText(q.question) ? ` («${short(q.question)}»)` : "");
          if (!q || typeof q !== "object") return errors.push(`${label}: ${E.badBlock}`);
          if (!isText(q.question)) errors.push(`${label}: ${E.noQuestion}`);
          if (!isText(q.correct)) errors.push(`${label}: ${E.noCorrect}`);
          if (!Array.isArray(q.wrong) || q.wrong.length === 0 || !q.wrong.every(isText)) {
            errors.push(`${label}: ${E.noWrong}`);
          } else if (isText(q.correct) && q.wrong.some((v) => v.trim() === q.correct.trim())) {
            errors.push(`${label}: ${E.correctInWrong}`);
          }
        });
      }

      if (!Array.isArray(entry.openQuestions)) {
        errors.push(`${file}: ${E.notList("openQuestions")}`);
      } else {
        entry.openQuestions.forEach((q, i) => {
          if (!q || !isText(q.question)) errors.push(`${file} — ${E.openLabel(i + 1)}: ${E.noQuestion}`);
        });
      }

      if (Array.isArray(entry.tests) && Array.isArray(entry.openQuestions) && entry.tests.length + entry.openQuestions.length === 0) {
        errors.push(`${file}: ${E.empty}`);
      }
    }

    if (!errors.length && !languages().length) {
      errors.push("Bazada birorta ham savol yo'q. · В базе нет ни одного вопроса.");
    }
    return errors;
  }

  function renderErrors(errors) {
    mount(
      h("section", { class: "card error-card" },
        h("h1", null, "Savollar faylida xatolik · Ошибка в файле вопросов"),
        h("p", null,
          "Quyidagi xatolarni ko'rsatilgan fayllarda tuzating va sahifani yangilang (F5). ",
          h("br"),
          "Исправьте следующие ошибки в указанных файлах и обновите страницу (F5)."
        ),
        h("ul", null, errors.map((e) => h("li", null, e)))
      )
    );
  }

  // ---------- 1. Tilni tanlash · Выбор языка ----------

  function renderLanguage() {
    const errors = findErrors();
    if (errors.length) return renderErrors(errors);

    const langs = languages();
    if (langs.length === 1) return chooseLanguage(langs[0]);

    document.documentElement.lang = "uz";
    document.title = `${I18N.uz.appTitle} · ${I18N.ru.appTitle}`;
    mount(
      h("section", { class: "card start-card" },
        h("div", { class: "emblem", "aria-hidden": "true" }, "✚"),
        h("h1", { class: "lang-title" }, I18N.uz.appTitle),
        h("p", { class: "subtitle" }, I18N.ru.appTitle),
        h("p", { class: "label" }, "Tilni tanlang · Выберите язык"),
        h("div", { class: "choices" },
          langs.map((lang) =>
            h("button", { class: "choice", lang, onclick: () => chooseLanguage(lang) },
              h("span", null, h("span", { class: "choice-title" }, I18N[lang].name)),
              h("span", { class: "choice-arrow", "aria-hidden": "true" }, "→")
            )
          )
        )
      )
    );
  }

  function chooseLanguage(lang) {
    state.lang = lang;
    document.documentElement.lang = lang;
    document.title = t().appTitle;
    renderTopics();
  }

  // ---------- 2. Mavzuni tanlash · Выбор темы ----------

  function renderTopics() {
    const tr = t();
    mount(
      h("section", { class: "card start-card" },
        h("div", { class: "emblem", "aria-hidden": "true" }, "✚"),
        h("h1", null, tr.appTitle),
        h("p", { class: "subtitle" }, tr.chooseTopic),
        h("div", { class: "choices" },
          topicsFor(state.lang).map((topic) =>
            h("button", { class: "choice", onclick: () => chooseTopic(topic) },
              h("span", null,
                h("span", { class: "choice-title" }, topic.topic),
                h("span", { class: "choice-sub" }, tr.topicSize(topic.tests.length, topic.openQuestions.length))
              ),
              h("span", { class: "choice-arrow", "aria-hidden": "true" }, "→")
            )
          )
        ),
        languages().length > 1 && h("button", { class: "back-link", onclick: renderLanguage }, tr.backToLanguage)
      )
    );
  }

  function chooseTopic(topic) {
    state.topic = topic;
    document.title = `${topic.topic} — ${t().appTitle}`;
    renderStart();
  }

  // ---------- 3. Boshlash sahifasi · Стартовая страница ----------

  function renderStart() {
    const tr = t();
    const topic = state.topic;
    const testCount = countOf(topic.tests.length, settings.testCount);
    const openCount = countOf(topic.openQuestions.length, settings.openCount);
    const limit = settings.timeLimit > 0 ? tr.minutes(settings.timeLimit) : tr.unlimited;

    const input = h("input", {
      id: "fio",
      type: "text",
      placeholder: tr.namePlaceholder,
      autocomplete: "off",
    });
    input.value = state.name;
    const hint = h("p", { class: "field-error", hidden: true }, tr.nameMissing);

    const begin = () => {
      const name = input.value.trim();
      if (!name) {
        hint.hidden = false;
        input.focus();
        return;
      }
      startTest(name);
    };
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") begin();
    });

    mount(
      h("section", { class: "card start-card" },
        h("div", { class: "emblem", "aria-hidden": "true" }, "✚"),
        h("h1", null, topic.topic),
        h("p", { class: "subtitle" }, tr.appTitle),
        h("ul", { class: "facts" },
          testCount > 0 && h("li", null, tr.factTests(testCount)),
          openCount > 0 && h("li", null, tr.factOpen(openCount)),
          h("li", null, tr.time, h("strong", null, limit))
        ),
        h("label", { for: "fio", class: "label" }, tr.nameLabel),
        input,
        hint,
        h("button", { class: "btn btn-primary btn-wide", onclick: begin }, tr.start),
        h("button", { class: "back-link", onclick: renderTopics }, tr.backToTopics)
      )
    );
    input.focus();
  }

  function startTest(name) {
    const topic = state.topic;
    const tests = pick(topic.tests, settings.testCount, settings.shuffleQuestions).map((q) => ({
      kind: "test",
      src: q,
      options: shuffle([
        { text: q.correct, correct: true },
        ...q.wrong.map((text) => ({ text, correct: false })),
      ]),
      chosen: null,
    }));
    const open = pick(topic.openQuestions, settings.openCount, false).map((q) => ({
      kind: "open",
      src: q,
      answer: "",
    }));

    Object.assign(state, {
      name,
      items: [...tests, ...open],
      current: 0,
      startedAt: Date.now(),
      finishedAt: 0,
      running: true,
    });
    clearInterval(state.timerId);
    state.timerId = setInterval(tick, 1000);
    renderQuestion();
  }

  // ---------- 4. Savol sahifasi · Страница вопроса ----------

  function renderQuestion() {
    const tr = t();
    const item = state.items[state.current];
    const total = state.items.length;
    const isLast = state.current === total - 1;

    const progressText = h("div", { class: "progress-text" });
    const progressFill = h("span");
    const updateProgress = () => {
      const done = state.items.filter(isAnswered).length;
      progressText.textContent = tr.answered(done, total);
      progressFill.style.width = `${(done / total) * 100}%`;
    };

    const navButtons = state.items.map((it, i) =>
      h("button", {
        class: "nav-num" +
          (it.kind === "open" ? " is-open" : "") +
          (isAnswered(it) ? " is-answered" : "") +
          (i === state.current ? " is-current" : ""),
        title: it.kind === "open" ? tr.openTitle : tr.testTitle,
        "aria-label": tr.questionAria(i + 1),
        onclick: () => go(i),
      }, i + 1)
    );

    let kindLabel = h("span", { class: "badge" }, tr.badgeTest);
    if (item.kind === "open") kindLabel = h("span", { class: "badge is-open" }, tr.badgeOpen);
    else if (item.src.situation) kindLabel = h("span", { class: "badge is-case" }, tr.badgeCase);

    let body;
    if (item.kind === "test") {
      const optionButtons = item.options.map((opt, i) =>
        h("button", {
          class: "option" + (item.chosen === i ? " is-chosen" : ""),
          role: "radio",
          "aria-checked": String(item.chosen === i),
          onclick: () => {
            item.chosen = i;
            optionButtons.forEach((b, j) => {
              b.classList.toggle("is-chosen", j === i);
              b.setAttribute("aria-checked", String(j === i));
            });
            navButtons[state.current].classList.add("is-answered");
            updateProgress();
          },
        },
          h("span", { class: "option-letter" }, LETTERS[i]),
          h("span", { class: "option-text" }, opt.text)
        )
      );
      body = h("div", { class: "options", role: "radiogroup" }, optionButtons);
    } else {
      const area = h("textarea", { class: "answer", rows: 10, placeholder: tr.answerPlaceholder });
      area.value = item.answer;
      const counter = h("div", { class: "counter" }, wordCount(item.answer));
      area.addEventListener("input", () => {
        item.answer = area.value;
        counter.textContent = wordCount(area.value);
        navButtons[state.current].classList.toggle("is-answered", isAnswered(item));
        updateProgress();
      });
      body = h("div", null, area, counter);
    }

    mount(
      h("header", { class: "topbar" },
        h("div", { class: "who" }, state.name),
        h("div", { class: "timer", id: "timer", title: settings.timeLimit > 0 ? tr.timeLeft : tr.timeSpent }),
        h("button", { class: "btn", onclick: () => finish(false) }, tr.finish)
      ),
      h("div", { class: "progress" }, progressText, h("div", { class: "bar" }, progressFill)),
      h("nav", { class: "nav-grid", "aria-label": tr.navAria }, navButtons),
      h("div", { class: "nav-legend" },
        h("span", null, h("i", { class: "lg-answered" }), tr.legendAnswered),
        h("span", null, h("i"), tr.legendEmpty),
        state.items.some((it) => it.kind === "open") && h("span", null, h("i", { class: "lg-open" }), tr.legendOpen)
      ),
      h("section", { class: "card" },
        h("div", { class: "q-meta" },
          kindLabel,
          h("span", { class: "q-count" }, tr.questionOf(state.current + 1, total))
        ),
        item.src.situation && h("div", { class: "case" },
          h("p", { class: "case-title" }, tr.situation),
          h("p", null, item.src.situation)
        ),
        h("h2", { class: "q-text" }, item.src.question),
        body,
        h("div", { class: "pager" },
          h("button", { class: "btn", disabled: state.current === 0, onclick: () => go(state.current - 1) }, tr.prev),
          isLast
            ? h("button", { class: "btn btn-primary", onclick: () => finish(false) }, tr.finishTest)
            : h("button", { class: "btn btn-primary", onclick: () => go(state.current + 1) }, tr.next)
        )
      )
    );
    updateProgress();
    tick();
  }

  function go(index) {
    if (index < 0 || index >= state.items.length) return;
    state.current = index;
    renderQuestion();
  }

  function tick() {
    if (!state.running) return;
    const elapsed = Date.now() - state.startedAt;
    const limit = settings.timeLimit > 0 ? settings.timeLimit * 60000 : 0;
    if (limit && elapsed >= limit) {
      finish(true);
      return;
    }
    const el = document.getElementById("timer");
    if (!el) return;
    if (limit) {
      el.textContent = `⏱ ${formatDuration(limit - elapsed)}`;
      el.classList.toggle("is-low", limit - elapsed < 5 * 60000);
    } else {
      el.textContent = `⏱ ${formatDuration(elapsed)}`;
    }
  }

  function finish(timeUp) {
    if (!state.running) return;
    if (!timeUp) {
      const left = state.items.filter((it) => !isAnswered(it)).length;
      if (!confirm(left ? t().confirmUnanswered(left) : t().confirmFinish)) return;
    }
    state.running = false;
    state.finishedAt = Date.now();
    clearInterval(state.timerId);
    renderResults(timeUp);
  }

  // ---------- 5. Natija sahifasi · Страница результатов ----------

  function summary() {
    const tests = state.items.filter((it) => it.kind === "test");
    const open = state.items.filter((it) => it.kind === "open");
    const correct = tests.filter((it) => it.chosen !== null && it.options[it.chosen].correct).length;
    const percent = tests.length ? Math.round((correct / tests.length) * 100) : 0;
    return { tests, open, correct, percent };
  }

  function renderResults(timeUp) {
    const tr = t();
    const { tests, open, correct, percent } = summary();
    const showAnswers = settings.showCorrectAnswers;

    const reviewTest = (it, i) => {
      const chosen = it.chosen === null ? null : it.options[it.chosen];
      const ok = Boolean(chosen && chosen.correct);
      const right = it.options.find((o) => o.correct);
      return h("li", { class: "review-item " + (ok ? "is-ok" : "is-bad") },
        it.src.situation && h("div", { class: "case" }, h("p", null, it.src.situation)),
        h("p", { class: "review-q" }, `${i + 1}. ${it.src.question}`),
        h("p", { class: "answer-line" },
          h("span", { class: "tag" }, tr.yourAnswer),
          h("span", { class: "val " + (ok ? "ok" : "bad") }, chosen ? `${chosen.text} ${ok ? "✓" : "✗"}` : tr.noAnswer)
        ),
        !ok && h("p", { class: "answer-line" },
          h("span", { class: "tag" }, tr.rightAnswer),
          h("span", { class: "val right" }, right.text)
        ),
        isText(it.src.explanation) && h("p", { class: "explain" }, it.src.explanation)
      );
    };

    const reviewOpen = (it, i) =>
      h("li", { class: "review-item is-open" },
        it.src.situation && h("div", { class: "case" }, h("p", null, it.src.situation)),
        h("p", { class: "review-q" }, `${i + 1}. ${it.src.question}`),
        h("div", { class: "written" }, it.answer.trim() || tr.notWritten),
        h("p", { class: "grade-line" }, tr.grade)
      );

    const restart = () => {
      if (!confirm(tr.confirmRestart)) return;
      state.name = "";
      renderLanguage();
    };

    mount(
      h("section", { class: "card" },
        h("h1", null, state.topic.topic),
        h("p", { class: "subtitle" }, tr.result),
        h("dl", { class: "meta" },
          h("dt", null, tr.fio), h("dd", null, state.name),
          h("dt", null, tr.topic), h("dd", null, state.topic.topic),
          h("dt", null, tr.date), h("dd", null, formatDate(new Date(state.finishedAt))),
          h("dt", null, tr.timeSpent), h("dd", null, formatDuration(state.finishedAt - state.startedAt))
        ),
        timeUp && h("p", { class: "notice" }, tr.timeUp),
        tests.length > 0 && h("div", { class: "score" },
          h("div", { class: "score-big" }, `${correct} / ${tests.length}`),
          h("div", { class: "score-sub" }, tr.score(percent)),
          h("div", { class: "bar" }, h("span", { style: `width:${percent}%` }))
        ),
        open.length > 0 && h("p", { class: "muted" }, tr.openNote(open.length)),
        h("div", { class: "actions no-print" },
          h("button", { class: "btn btn-primary", onclick: () => window.print() }, tr.print),
          h("button", { class: "btn", onclick: downloadText }, tr.download),
          h("button", { class: "btn", onclick: restart }, tr.newTest)
        )
      ),
      showAnswers && tests.length > 0 && h("section", { class: "card" },
        h("h2", null, tr.testsHeading),
        h("ol", { class: "review" }, tests.map(reviewTest))
      ),
      open.length > 0 && h("section", { class: "card" },
        h("h2", null, tr.openHeading),
        h("ol", { class: "review" }, open.map(reviewOpen))
      )
    );
  }

  function downloadText() {
    const tr = t();
    const { tests, open, correct, percent } = summary();
    const lines = [
      state.topic.topic.toUpperCase(),
      tr.result,
      "",
      `${tr.fio}: ${state.name}`,
      `${tr.topic}: ${state.topic.topic}`,
      `${tr.date}: ${formatDate(new Date(state.finishedAt))}`,
      `${tr.timeSpent}: ${formatDuration(state.finishedAt - state.startedAt)}`,
    ];
    if (tests.length) lines.push(tr.txtScore(correct, tests.length, percent));
    lines.push("");

    if (settings.showCorrectAnswers && tests.length) {
      lines.push(tr.txtTests, "=".repeat(60));
      tests.forEach((it, i) => {
        const chosen = it.chosen === null ? null : it.options[it.chosen];
        const ok = Boolean(chosen && chosen.correct);
        lines.push("");
        if (it.src.situation) lines.push(`${tr.situation}: ${it.src.situation}`);
        lines.push(`${i + 1}. ${it.src.question}`);
        lines.push(`   ${tr.txtAnswer}: ${chosen ? chosen.text : tr.noAnswer}  [${ok ? tr.txtRight : tr.txtWrong}]`);
        if (!ok) lines.push(`   ${tr.rightAnswer} ${it.options.find((o) => o.correct).text}`);
      });
      lines.push("", "");
    }

    if (open.length) {
      lines.push(tr.txtOpen, "=".repeat(60));
      open.forEach((it, i) => {
        lines.push("");
        if (it.src.situation) lines.push(`${tr.situation}: ${it.src.situation}`);
        lines.push(`${i + 1}. ${it.src.question}`);
        lines.push(`${tr.txtAnswer}:`);
        lines.push(it.answer.trim() || tr.notWritten);
        lines.push(tr.grade);
      });
    }

    const blob = new Blob(["﻿" + lines.join("\r\n")], { type: "text/plain;charset=utf-8" });
    const d = new Date(state.finishedAt);
    const safeName = state.name.replace(/[^\p{L}\p{N}]+/gu, "_").replace(/^_+|_+$/g, "") || tr.filePrefix;
    const link = h("a", {
      href: URL.createObjectURL(blob),
      download: `${tr.filePrefix}_${safeName}_${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}.txt`,
    });
    document.body.append(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(link.href), 1000);
  }

  // Test davomida sahifa tasodifan yopilib qolmasligi uchun ogohlantirish.
  // Предупреждение, чтобы страницу случайно не закрыли во время теста.
  window.addEventListener("beforeunload", (e) => {
    if (state.running) {
      e.preventDefault();
      e.returnValue = "";
    }
  });

  renderLanguage();
})();
