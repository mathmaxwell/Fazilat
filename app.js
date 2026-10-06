/* Test dasturining ishlash mantig'i.
   Savollar savollar.js faylida saqlanadi — savol qo'shish uchun bu faylni o'zgartirish shart emas. */
(function () {
  "use strict";

  const root = document.getElementById("app");
  const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const settings = Object.assign(
    {
      sarlavha: "Test",
      qismSarlavha: "",
      testlarSoni: 0,
      yopiqSavollarSoni: 0,
      savollarniAralashtirish: true,
      vaqtChegarasi: 0,
      togriJavoblarniKorsatish: true,
    },
    typeof SOZLAMALAR === "object" && SOZLAMALAR ? SOZLAMALAR : {}
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

  // ---------- Yordamchi funksiyalar ----------

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
    return `${n} ta so'z`;
  }

  function isAnswered(item) {
    return item.kind === "test" ? item.chosen !== null : item.answer.trim() !== "";
  }

  // ---------- savollar.js ni tekshirish ----------

  function findErrors() {
    if (typeof TESTLAR === "undefined" || typeof YOPIQ_SAVOLLAR === "undefined") {
      const e = window.__savollarXatosi;
      let msg =
        "savollar.js fayli o'qilmadi. Faylda yozuv xatosi bor: vergul, qavs yoki qo'shtirnoq tushib qolgan bo'lishi mumkin.";
      if (e && e.line) msg += ` Xato taxminan ${e.line}-qatorda (${e.message}).`;
      return [msg];
    }

    const errors = [];
    if (!Array.isArray(TESTLAR)) {
      errors.push("TESTLAR  [ ... ]  ko'rinishidagi ro'yxat bo'lishi kerak.");
    } else {
      TESTLAR.forEach((t, i) => {
        const label = `${i + 1}-test` + (t && isText(t.savol) ? ` («${short(t.savol)}»)` : "");
        if (!t || typeof t !== "object") return errors.push(`${label}: blok noto'g'ri yozilgan.`);
        if (!isText(t.savol)) errors.push(`${label}: «savol» matni yo'q.`);
        if (!isText(t.togri)) errors.push(`${label}: «togri» javob yo'q.`);
        if (!Array.isArray(t.notogri) || t.notogri.length === 0 || !t.notogri.every(isText)) {
          errors.push(`${label}: «notogri» ro'yxatida kamida bitta to'ldirilgan javob bo'lishi kerak.`);
        } else if (isText(t.togri) && t.notogri.some((v) => v.trim() === t.togri.trim())) {
          errors.push(`${label}: to'g'ri javob noto'g'ri javoblar ichida ham yozilgan.`);
        }
      });
    }

    if (!Array.isArray(YOPIQ_SAVOLLAR)) {
      errors.push("YOPIQ_SAVOLLAR  [ ... ]  ko'rinishidagi ro'yxat bo'lishi kerak.");
    } else {
      YOPIQ_SAVOLLAR.forEach((s, i) => {
        if (!s || !isText(s.savol)) errors.push(`${i + 1}-yopiq savol: «savol» matni yo'q.`);
      });
    }

    if (!errors.length && TESTLAR.length + YOPIQ_SAVOLLAR.length === 0) {
      errors.push("Bazada birorta ham savol yo'q.");
    }
    return errors;
  }

  // ---------- 1. Boshlash sahifasi ----------

  function renderStart() {
    const errors = findErrors();
    if (errors.length) {
      mount(
        h("section", { class: "card error-card" },
          h("h1", null, "Savollar faylida xatolik"),
          h("p", null, "Quyidagi xatolarni savollar.js faylida tuzating va sahifani yangilang (F5):"),
          h("ul", null, errors.map((e) => h("li", null, e)))
        )
      );
      return;
    }

    const testCount = countOf(TESTLAR.length, settings.testlarSoni);
    const openCount = countOf(YOPIQ_SAVOLLAR.length, settings.yopiqSavollarSoni);
    const limit = settings.vaqtChegarasi > 0 ? `${settings.vaqtChegarasi} daqiqa` : "cheklanmagan";

    const input = h("input", {
      id: "fio",
      type: "text",
      placeholder: "Masalan: Karimova Dilnoza Akmalovna",
      autocomplete: "off",
    });
    const hint = h("p", { class: "field-error", hidden: true }, "Iltimos, familiya, ism va sharifingizni kiriting.");

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
        h("h1", null, settings.sarlavha),
        settings.qismSarlavha && h("p", { class: "subtitle" }, settings.qismSarlavha),
        h("ul", { class: "facts" },
          testCount > 0 && h("li", null, h("strong", null, testCount), " ta test savoli — bitta to'g'ri javobni tanlang"),
          openCount > 0 && h("li", null, h("strong", null, openCount), " ta yopiq savol — javobni o'zingiz yozasiz"),
          h("li", null, "Vaqt: ", h("strong", null, limit))
        ),
        h("label", { for: "fio", class: "label" }, "Familiya, ism, sharif"),
        input,
        hint,
        h("button", { class: "btn btn-primary btn-wide", onclick: begin }, "Testni boshlash")
      )
    );
    input.focus();
  }

  function startTest(name) {
    const tests = pick(TESTLAR, settings.testlarSoni, settings.savollarniAralashtirish).map((t) => ({
      kind: "test",
      src: t,
      options: shuffle([
        { text: t.togri, correct: true },
        ...t.notogri.map((text) => ({ text, correct: false })),
      ]),
      chosen: null,
    }));
    const open = pick(YOPIQ_SAVOLLAR, settings.yopiqSavollarSoni, false).map((s) => ({
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

  // ---------- 2. Savol sahifasi ----------

  function renderQuestion() {
    const item = state.items[state.current];
    const total = state.items.length;
    const isLast = state.current === total - 1;

    const progressText = h("div", { class: "progress-text" });
    const progressFill = h("span");
    const updateProgress = () => {
      const done = state.items.filter(isAnswered).length;
      progressText.textContent = `Javob berildi: ${done} / ${total}`;
      progressFill.style.width = `${(done / total) * 100}%`;
    };

    const navButtons = state.items.map((it, i) =>
      h("button", {
        class: "nav-num" +
          (it.kind === "open" ? " is-open" : "") +
          (isAnswered(it) ? " is-answered" : "") +
          (i === state.current ? " is-current" : ""),
        title: it.kind === "open" ? "Yopiq (yozma) savol" : "Test savoli",
        "aria-label": `${i + 1}-savol`,
        onclick: () => go(i),
      }, i + 1)
    );

    let kindLabel = h("span", { class: "badge" }, "Test");
    if (item.kind === "open") kindLabel = h("span", { class: "badge is-open" }, "Yopiq savol — yozma javob");
    else if (item.src.vaziyat) kindLabel = h("span", { class: "badge is-case" }, "Vaziyatli masala");

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
      const area = h("textarea", { class: "answer", rows: 10, placeholder: "Javobingizni shu yerga yozing..." });
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
        h("div", { class: "timer", id: "timer", title: settings.vaqtChegarasi > 0 ? "Qolgan vaqt" : "Sarflangan vaqt" }),
        h("button", { class: "btn", onclick: () => finish(false) }, "Yakunlash")
      ),
      h("div", { class: "progress" }, progressText, h("div", { class: "bar" }, progressFill)),
      h("nav", { class: "nav-grid", "aria-label": "Savollar" }, navButtons),
      h("div", { class: "nav-legend" },
        h("span", null, h("i", { class: "lg-answered" }), "javob berilgan"),
        h("span", null, h("i"), "javob berilmagan"),
        YOPIQ_SAVOLLAR.length > 0 && h("span", null, h("i", { class: "lg-open" }), "yopiq (yozma) savol")
      ),
      h("section", { class: "card" },
        h("div", { class: "q-meta" },
          kindLabel,
          h("span", { class: "q-count" }, `Savol ${state.current + 1} / ${total}`)
        ),
        item.src.vaziyat && h("div", { class: "case" },
          h("p", { class: "case-title" }, "Vaziyat"),
          h("p", null, item.src.vaziyat)
        ),
        h("h2", { class: "q-text" }, item.src.savol),
        body,
        h("div", { class: "pager" },
          h("button", { class: "btn", disabled: state.current === 0, onclick: () => go(state.current - 1) }, "← Oldingi"),
          isLast
            ? h("button", { class: "btn btn-primary", onclick: () => finish(false) }, "Testni yakunlash")
            : h("button", { class: "btn btn-primary", onclick: () => go(state.current + 1) }, "Keyingi →")
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
    const limit = settings.vaqtChegarasi > 0 ? settings.vaqtChegarasi * 60000 : 0;
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
        ? `${left} ta savolga javob berilmagan. Baribir testni yakunlaysizmi?`
        : "Testni yakunlaysizmi? Yakunlangandan keyin javoblarni o'zgartirib bo'lmaydi.";
      if (!confirm(msg)) return;
    }
    state.running = false;
    state.finishedAt = Date.now();
    clearInterval(state.timerId);
    renderResults(timeUp);
  }

  // ---------- 3. Natija sahifasi ----------

  function summary() {
    const tests = state.items.filter((it) => it.kind === "test");
    const open = state.items.filter((it) => it.kind === "open");
    const correct = tests.filter((it) => it.chosen !== null && it.options[it.chosen].correct).length;
    const percent = tests.length ? Math.round((correct / tests.length) * 100) : 0;
    return { tests, open, correct, percent };
  }

  function renderResults(timeUp) {
    const { tests, open, correct, percent } = summary();
    const showAnswers = settings.togriJavoblarniKorsatish;

    const reviewTest = (it, i) => {
      const chosen = it.chosen === null ? null : it.options[it.chosen];
      const ok = Boolean(chosen && chosen.correct);
      const right = it.options.find((o) => o.correct);
      return h("li", { class: "review-item " + (ok ? "is-ok" : "is-bad") },
        it.src.vaziyat && h("div", { class: "case" }, h("p", null, it.src.vaziyat)),
        h("p", { class: "review-q" }, `${i + 1}. ${it.src.savol}`),
        h("p", { class: "answer-line" },
          h("span", { class: "tag" }, "Sizning javobingiz:"),
          h("span", { class: "val " + (ok ? "ok" : "bad") }, chosen ? `${chosen.text} ${ok ? "✓" : "✗"}` : "— javob berilmagan")
        ),
        !ok && h("p", { class: "answer-line" },
          h("span", { class: "tag" }, "To'g'ri javob:"),
          h("span", { class: "val right" }, right.text)
        ),
        isText(it.src.izoh) && h("p", { class: "explain" }, it.src.izoh)
      );
    };

    const reviewOpen = (it, i) =>
      h("li", { class: "review-item is-open" },
        it.src.vaziyat && h("div", { class: "case" }, h("p", null, it.src.vaziyat)),
        h("p", { class: "review-q" }, `${i + 1}. ${it.src.savol}`),
        h("div", { class: "written" }, it.answer.trim() || "— javob yozilmagan"),
        h("p", { class: "grade-line" }, "Tekshiruvchi bahosi: ____________")
      );

    const restart = () => {
      if (confirm("Joriy natija ekrandan o'chiriladi. Yangi test boshlansinmi?")) renderStart();
    };

    mount(
      h("section", { class: "card" },
        h("h1", null, settings.sarlavha),
        h("p", { class: "subtitle" }, "Test natijasi"),
        h("dl", { class: "meta" },
          h("dt", null, "F.I.Sh."), h("dd", null, state.name),
          h("dt", null, "Sana"), h("dd", null, formatDate(new Date(state.finishedAt))),
          h("dt", null, "Sarflangan vaqt"), h("dd", null, formatDuration(state.finishedAt - state.startedAt))
        ),
        timeUp && h("p", { class: "notice" }, "Ajratilgan vaqt tugadi — test avtomatik yakunlandi."),
        tests.length > 0 && h("div", { class: "score" },
          h("div", { class: "score-big" }, `${correct} / ${tests.length}`),
          h("div", { class: "score-sub" }, `Test savollari bo'yicha to'g'ri javoblar: ${percent}%`),
          h("div", { class: "bar" }, h("span", { style: `width:${percent}%` }))
        ),
        open.length > 0 && h("p", { class: "muted" },
          `Yopiq savollarga yozilgan javoblar (${open.length} ta) tekshiruvchi tomonidan baholanadi.`
        ),
        h("div", { class: "actions no-print" },
          h("button", { class: "btn btn-primary", onclick: () => window.print() }, "Chop etish / PDF saqlash"),
          h("button", { class: "btn", onclick: downloadText }, "Natijani yuklab olish (.txt)"),
          h("button", { class: "btn", onclick: restart }, "Yangi test")
        )
      ),
      showAnswers && tests.length > 0 && h("section", { class: "card" },
        h("h2", null, "Test savollari"),
        h("ol", { class: "review" }, tests.map(reviewTest))
      ),
      open.length > 0 && h("section", { class: "card" },
        h("h2", null, "Yopiq savollar (yozma javoblar)"),
        h("ol", { class: "review" }, open.map(reviewOpen))
      )
    );
  }

  function downloadText() {
    const { tests, open, correct, percent } = summary();
    const lines = [
      settings.sarlavha.toUpperCase(),
      "Test natijasi",
      "",
      `F.I.Sh.: ${state.name}`,
      `Sana: ${formatDate(new Date(state.finishedAt))}`,
      `Sarflangan vaqt: ${formatDuration(state.finishedAt - state.startedAt)}`,
    ];
    if (tests.length) lines.push(`Test natijasi: ${correct} / ${tests.length} (${percent}%)`);
    lines.push("");

    if (settings.togriJavoblarniKorsatish && tests.length) {
      lines.push("TEST SAVOLLARI", "=".repeat(60));
      tests.forEach((it, i) => {
        const chosen = it.chosen === null ? null : it.options[it.chosen];
        const ok = Boolean(chosen && chosen.correct);
        lines.push("");
        if (it.src.vaziyat) lines.push(`Vaziyat: ${it.src.vaziyat}`);
        lines.push(`${i + 1}. ${it.src.savol}`);
        lines.push(`   Javob: ${chosen ? chosen.text : "— javob berilmagan"}  [${ok ? "TO'G'RI" : "NOTO'G'RI"}]`);
        if (!ok) lines.push(`   To'g'ri javob: ${it.options.find((o) => o.correct).text}`);
      });
      lines.push("", "");
    }

    if (open.length) {
      lines.push("YOPIQ SAVOLLAR (YOZMA JAVOBLAR)", "=".repeat(60));
      open.forEach((it, i) => {
        lines.push("");
        if (it.src.vaziyat) lines.push(`Vaziyat: ${it.src.vaziyat}`);
        lines.push(`${i + 1}. ${it.src.savol}`);
        lines.push("Javob:");
        lines.push(it.answer.trim() || "— javob yozilmagan");
        lines.push("Tekshiruvchi bahosi: ____________");
      });
    }

    const blob = new Blob(["﻿" + lines.join("\r\n")], { type: "text/plain;charset=utf-8" });
    const d = new Date(state.finishedAt);
    const safeName = state.name.replace(/[^\p{L}\p{N}]+/gu, "_").replace(/^_+|_+$/g, "") || "natija";
    const link = h("a", {
      href: URL.createObjectURL(blob),
      download: `natija_${safeName}_${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}.txt`,
    });
    document.body.append(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(link.href), 1000);
  }

  // Test davomida sahifa tasodifan yopilib qolmasligi uchun ogohlantirish
  window.addEventListener("beforeunload", (e) => {
    if (state.running) {
      e.preventDefault();
      e.returnValue = "";
    }
  });

  renderStart();
})();
