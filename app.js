/* Логика работы тестовой программы.
   Вопросы хранятся в файле questions.js — чтобы добавить вопрос, этот файл менять не нужно. */
(function () {
  "use strict";

  const root = document.getElementById("app");
  const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const settings = Object.assign(
    {
      title: "Тест",
      subtitle: "",
      testCount: 0,
      openCount: 0,
      shuffleQuestions: true,
      timeLimit: 0,
      showCorrectAnswers: true,
    },
    typeof SETTINGS === "object" && SETTINGS ? SETTINGS : {}
  );

  const state = {
    name: "",
    items: [],
    current: 0,
    startedAt: 0,
    finishedAt: 0,
    timerId: null,
    running: false,
  };

  // ---------- Вспомогательные функции ----------

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
    const n = text.trim() ? text.trim().split(/\s+/).length : 0;
    return `${n} ${plural(n, "слово", "слова", "слов")}`;
  }

  function isAnswered(item) {
    return item.kind === "test" ? item.chosen !== null : item.answer.trim() !== "";
  }

  // ---------- Проверка questions.js ----------

  function findErrors() {
    if (typeof TESTS === "undefined" || typeof OPEN_QUESTIONS === "undefined") {
      const e = window.__questionsError;
      let msg =
        "Не удалось прочитать файл questions.js. В файле есть ошибка записи: возможно, пропущена запятая, скобка или кавычка.";
      if (e && e.line) msg += ` Ошибка примерно в строке ${e.line} (${e.message}).`;
      return [msg];
    }

    const errors = [];
    if (!Array.isArray(TESTS)) {
      errors.push("TESTS должен быть списком вида  [ ... ].");
    } else {
      TESTS.forEach((t, i) => {
        const label = `Тест ${i + 1}` + (t && isText(t.question) ? ` («${short(t.question)}»)` : "");
        if (!t || typeof t !== "object") return errors.push(`${label}: блок записан неправильно.`);
        if (!isText(t.question)) errors.push(`${label}: нет текста «question».`);
        if (!isText(t.correct)) errors.push(`${label}: нет ответа «correct».`);
        if (!Array.isArray(t.wrong) || t.wrong.length === 0 || !t.wrong.every(isText)) {
          errors.push(`${label}: в списке «wrong» должен быть хотя бы один заполненный ответ.`);
        } else if (isText(t.correct) && t.wrong.some((v) => v.trim() === t.correct.trim())) {
          errors.push(`${label}: правильный ответ записан также среди неправильных.`);
        }
      });
    }

    if (!Array.isArray(OPEN_QUESTIONS)) {
      errors.push("OPEN_QUESTIONS должен быть списком вида  [ ... ].");
    } else {
      OPEN_QUESTIONS.forEach((s, i) => {
        if (!s || !isText(s.question)) errors.push(`Открытый вопрос ${i + 1}: нет текста «question».`);
      });
    }

    if (!errors.length && TESTS.length + OPEN_QUESTIONS.length === 0) {
      errors.push("В базе нет ни одного вопроса.");
    }
    return errors;
  }

  // ---------- 1. Стартовая страница ----------

  function renderStart() {
    const errors = findErrors();
    if (errors.length) {
      mount(
        h("section", { class: "card error-card" },
          h("h1", null, "Ошибка в файле вопросов"),
          h("p", null, "Исправьте следующие ошибки в файле questions.js и обновите страницу (F5):"),
          h("ul", null, errors.map((e) => h("li", null, e)))
        )
      );
      return;
    }

    const testCount = countOf(TESTS.length, settings.testCount);
    const openCount = countOf(OPEN_QUESTIONS.length, settings.openCount);
    const minutes = settings.timeLimit;
    const limit = minutes > 0 ? `${minutes} ${plural(minutes, "минута", "минуты", "минут")}` : "не ограничено";

    const input = h("input", {
      id: "fio",
      type: "text",
      placeholder: "Например: Каримова Дилноза Акмаловна",
      autocomplete: "off",
    });
    const hint = h("p", { class: "field-error", hidden: true }, "Пожалуйста, введите фамилию, имя и отчество.");

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
        h("h1", null, settings.title),
        settings.subtitle && h("p", { class: "subtitle" }, settings.subtitle),
        h("ul", { class: "facts" },
          testCount > 0 && h("li", null,
            h("strong", null, testCount), " ",
            plural(testCount, "тестовый вопрос", "тестовых вопроса", "тестовых вопросов"),
            " — выберите один правильный ответ"
          ),
          openCount > 0 && h("li", null,
            h("strong", null, openCount), " ",
            plural(openCount, "открытый вопрос", "открытых вопроса", "открытых вопросов"),
            " — ответ пишете сами"
          ),
          h("li", null, "Время: ", h("strong", null, limit))
        ),
        h("label", { for: "fio", class: "label" }, "Фамилия, имя, отчество"),
        input,
        hint,
        h("button", { class: "btn btn-primary btn-wide", onclick: begin }, "Начать тест")
      )
    );
    input.focus();
  }

  function startTest(name) {
    const tests = pick(TESTS, settings.testCount, settings.shuffleQuestions).map((t) => ({
      kind: "test",
      src: t,
      options: shuffle([
        { text: t.correct, correct: true },
        ...t.wrong.map((text) => ({ text, correct: false })),
      ]),
      chosen: null,
    }));
    const open = pick(OPEN_QUESTIONS, settings.openCount, false).map((s) => ({
      kind: "open",
      src: s,
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

  // ---------- 2. Страница вопроса ----------

  function renderQuestion() {
    const item = state.items[state.current];
    const total = state.items.length;
    const isLast = state.current === total - 1;

    const progressText = h("div", { class: "progress-text" });
    const progressFill = h("span");
    const updateProgress = () => {
      const done = state.items.filter(isAnswered).length;
      progressText.textContent = `Отвечено: ${done} / ${total}`;
      progressFill.style.width = `${(done / total) * 100}%`;
    };

    const navButtons = state.items.map((it, i) =>
      h("button", {
        class: "nav-num" +
          (it.kind === "open" ? " is-open" : "") +
          (isAnswered(it) ? " is-answered" : "") +
          (i === state.current ? " is-current" : ""),
        title: it.kind === "open" ? "Открытый (письменный) вопрос" : "Тестовый вопрос",
        "aria-label": `Вопрос ${i + 1}`,
        onclick: () => go(i),
      }, i + 1)
    );

    let kindLabel = h("span", { class: "badge" }, "Тест");
    if (item.kind === "open") kindLabel = h("span", { class: "badge is-open" }, "Открытый вопрос — письменный ответ");
    else if (item.src.situation) kindLabel = h("span", { class: "badge is-case" }, "Ситуационная задача");

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
      const area = h("textarea", { class: "answer", rows: 10, placeholder: "Напишите ваш ответ здесь..." });
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
        h("div", { class: "timer", id: "timer", title: settings.timeLimit > 0 ? "Оставшееся время" : "Затраченное время" }),
        h("button", { class: "btn", onclick: () => finish(false) }, "Завершить")
      ),
      h("div", { class: "progress" }, progressText, h("div", { class: "bar" }, progressFill)),
      h("nav", { class: "nav-grid", "aria-label": "Вопросы" }, navButtons),
      h("div", { class: "nav-legend" },
        h("span", null, h("i", { class: "lg-answered" }), "есть ответ"),
        h("span", null, h("i"), "нет ответа"),
        OPEN_QUESTIONS.length > 0 && h("span", null, h("i", { class: "lg-open" }), "открытый (письменный) вопрос")
      ),
      h("section", { class: "card" },
        h("div", { class: "q-meta" },
          kindLabel,
          h("span", { class: "q-count" }, `Вопрос ${state.current + 1} / ${total}`)
        ),
        item.src.situation && h("div", { class: "case" },
          h("p", { class: "case-title" }, "Ситуация"),
          h("p", null, item.src.situation)
        ),
        h("h2", { class: "q-text" }, item.src.question),
        body,
        h("div", { class: "pager" },
          h("button", { class: "btn", disabled: state.current === 0, onclick: () => go(state.current - 1) }, "← Назад"),
          isLast
            ? h("button", { class: "btn btn-primary", onclick: () => finish(false) }, "Завершить тест")
            : h("button", { class: "btn btn-primary", onclick: () => go(state.current + 1) }, "Далее →")
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
      const msg = left
        ? `Вы не ответили на ${left} ${plural(left, "вопрос", "вопроса", "вопросов")}. Всё равно завершить тест?`
        : "Завершить тест? После завершения ответы изменить нельзя.";
      if (!confirm(msg)) return;
    }
    state.running = false;
    state.finishedAt = Date.now();
    clearInterval(state.timerId);
    renderResults(timeUp);
  }

  // ---------- 3. Страница результатов ----------

  function summary() {
    const tests = state.items.filter((it) => it.kind === "test");
    const open = state.items.filter((it) => it.kind === "open");
    const correct = tests.filter((it) => it.chosen !== null && it.options[it.chosen].correct).length;
    const percent = tests.length ? Math.round((correct / tests.length) * 100) : 0;
    return { tests, open, correct, percent };
  }

  function renderResults(timeUp) {
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
          h("span", { class: "tag" }, "Ваш ответ:"),
          h("span", { class: "val " + (ok ? "ok" : "bad") }, chosen ? `${chosen.text} ${ok ? "✓" : "✗"}` : "— нет ответа")
        ),
        !ok && h("p", { class: "answer-line" },
          h("span", { class: "tag" }, "Правильный ответ:"),
          h("span", { class: "val right" }, right.text)
        ),
        isText(it.src.explanation) && h("p", { class: "explain" }, it.src.explanation)
      );
    };

    const reviewOpen = (it, i) =>
      h("li", { class: "review-item is-open" },
        it.src.situation && h("div", { class: "case" }, h("p", null, it.src.situation)),
        h("p", { class: "review-q" }, `${i + 1}. ${it.src.question}`),
        h("div", { class: "written" }, it.answer.trim() || "— ответ не написан"),
        h("p", { class: "grade-line" }, "Оценка проверяющего: ____________")
      );

    const restart = () => {
      if (confirm("Текущий результат будет удалён с экрана. Начать новый тест?")) renderStart();
    };

    mount(
      h("section", { class: "card" },
        h("h1", null, settings.title),
        h("p", { class: "subtitle" }, "Результат теста"),
        h("dl", { class: "meta" },
          h("dt", null, "Ф.И.О."), h("dd", null, state.name),
          h("dt", null, "Дата"), h("dd", null, formatDate(new Date(state.finishedAt))),
          h("dt", null, "Затраченное время"), h("dd", null, formatDuration(state.finishedAt - state.startedAt))
        ),
        timeUp && h("p", { class: "notice" }, "Отведённое время истекло — тест завершён автоматически."),
        tests.length > 0 && h("div", { class: "score" },
          h("div", { class: "score-big" }, `${correct} / ${tests.length}`),
          h("div", { class: "score-sub" }, `Правильных ответов на тестовые вопросы: ${percent}%`),
          h("div", { class: "bar" }, h("span", { style: `width:${percent}%` }))
        ),
        open.length > 0 && h("p", { class: "muted" },
          `Письменные ответы на открытые вопросы (${open.length}) оценивает проверяющий.`
        ),
        h("div", { class: "actions no-print" },
          h("button", { class: "btn btn-primary", onclick: () => window.print() }, "Печать / сохранить PDF"),
          h("button", { class: "btn", onclick: downloadText }, "Скачать результат (.txt)"),
          h("button", { class: "btn", onclick: restart }, "Новый тест")
        )
      ),
      showAnswers && tests.length > 0 && h("section", { class: "card" },
        h("h2", null, "Тестовые вопросы"),
        h("ol", { class: "review" }, tests.map(reviewTest))
      ),
      open.length > 0 && h("section", { class: "card" },
        h("h2", null, "Открытые вопросы (письменные ответы)"),
        h("ol", { class: "review" }, open.map(reviewOpen))
      )
    );
  }

  function downloadText() {
    const { tests, open, correct, percent } = summary();
    const lines = [
      settings.title.toUpperCase(),
      "Результат теста",
      "",
      `Ф.И.О.: ${state.name}`,
      `Дата: ${formatDate(new Date(state.finishedAt))}`,
      `Затраченное время: ${formatDuration(state.finishedAt - state.startedAt)}`,
    ];
    if (tests.length) lines.push(`Правильных ответов: ${correct} / ${tests.length} (${percent}%)`);
    lines.push("");

    if (settings.showCorrectAnswers && tests.length) {
      lines.push("ТЕСТОВЫЕ ВОПРОСЫ", "=".repeat(60));
      tests.forEach((it, i) => {
        const chosen = it.chosen === null ? null : it.options[it.chosen];
        const ok = Boolean(chosen && chosen.correct);
        lines.push("");
        if (it.src.situation) lines.push(`Ситуация: ${it.src.situation}`);
        lines.push(`${i + 1}. ${it.src.question}`);
        lines.push(`   Ответ: ${chosen ? chosen.text : "— нет ответа"}  [${ok ? "ВЕРНО" : "НЕВЕРНО"}]`);
        if (!ok) lines.push(`   Правильный ответ: ${it.options.find((o) => o.correct).text}`);
      });
      lines.push("", "");
    }

    if (open.length) {
      lines.push("ОТКРЫТЫЕ ВОПРОСЫ (ПИСЬМЕННЫЕ ОТВЕТЫ)", "=".repeat(60));
      open.forEach((it, i) => {
        lines.push("");
        if (it.src.situation) lines.push(`Ситуация: ${it.src.situation}`);
        lines.push(`${i + 1}. ${it.src.question}`);
        lines.push("Ответ:");
        lines.push(it.answer.trim() || "— ответ не написан");
        lines.push("Оценка проверяющего: ____________");
      });
    }

    const blob = new Blob(["﻿" + lines.join("\r\n")], { type: "text/plain;charset=utf-8" });
    const d = new Date(state.finishedAt);
    const safeName = state.name.replace(/[^\p{L}\p{N}]+/gu, "_").replace(/^_+|_+$/g, "") || "result";
    const link = h("a", {
      href: URL.createObjectURL(blob),
      download: `результат_${safeName}_${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}.txt`,
    });
    document.body.append(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(link.href), 1000);
  }

  // Предупреждение, чтобы страницу случайно не закрыли во время теста
  window.addEventListener("beforeunload", (e) => {
    if (state.running) {
      e.preventDefault();
      e.returnValue = "";
    }
  });

  renderStart();
})();
