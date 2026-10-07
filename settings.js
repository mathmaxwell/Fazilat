/* =====================================================================
   TEST SOZLAMALARI · НАСТРОЙКИ ТЕСТА
   Barcha tillar va mavzular uchun umumiy. · Общие для всех языков и тем.
   Faylni saqlagach, sahifani yangilang (F5). · После сохранения обновите страницу (F5).
   ===================================================================== */
const SETTINGS = {
  // Har bir urinishda nechta savol beriladi. Mavzuda ko'proq savol bo'lsa — shuncha savol tasodifiy tanlanadi.
  // 0 yozilsa — tanlangan mavzudagi barcha savollar beriladi.
  // Сколько вопросов даётся в каждой попытке. Если в теме вопросов больше — нужное количество выбирается случайно.
  // 0 — даются все вопросы выбранной темы.
  testCount: 25,
  openCount: 5,

  // true — test savollari tartibi har safar aralashtiriladi; false — fayldagi tartibda.
  // true — порядок тестовых вопросов каждый раз перемешивается; false — в порядке файла.
  shuffleQuestions: true,

  // Vaqt chegarasi (daqiqada). 0 — vaqt cheklanmagan.
  // Ограничение времени (в минутах). 0 — без ограничения.
  timeLimit: 0,

  // true — yakunda to'g'ri javoblar va izohlar ko'rsatiladi; false — faqat umumiy ball (imtihon uchun qulay).
  // true — в конце показываются правильные ответы и пояснения; false — только общий балл (удобно для экзамена).
  showCorrectAnswers: true,
};
