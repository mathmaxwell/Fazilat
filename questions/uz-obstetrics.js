/* =====================================================================
   SAVOLLAR: AKUSHERLIK VA GINEKOLOGIYA (o'zbek tili)
   =====================================================================

   BU FAYLNI QANDAY TAHRIRLASH KERAK
   ---------------------------------
   1. YANGI TEST QO'SHISH
      tests ro'yxatining kerakli bo'limiga (bo'limlar
      // ===== Mavzu ===== qatorlari bilan belgilangan) quyidagi blokni
      nusxalab qo'ying va matnlarni o'zgartiring:

        {
          question: "Savol matni?",
          correct: "To'g'ri javob",
          wrong: [
            "Noto'g'ri javob 1",
            "Noto'g'ri javob 2",
            "Noto'g'ri javob 3",
          ],
          explanation: "Qisqa tushuntirish (ixtiyoriy, natijada ko'rsatiladi).",
        },

      VAZIYATLI MASALA bo'lsa, «question» qatoridan oldin vaziyat qo'shing:
          situation: "Bemor haqida ma'lumot ...",

   2. TO'G'RI VA NOTO'G'RI JAVOBNI ALMASHTIRISH
      Matnni «correct» qatoridan «wrong» ro'yxatiga ko'chiring (yoki aksincha).
      Har bir testda faqat BITTA «correct» javob bo'ladi.
      Noto'g'ri javoblar soni istalgancha bo'lishi mumkin (kamida 1 ta).

   3. Javob variantlari test vaqtida avtomatik aralashtiriladi —
      to'g'ri javob ekranda har safar har xil o'rinda (A, B, C yoki D) chiqadi.

   4. YANGI YOPIQ (YOZMA) SAVOL QO'SHISH — openQuestions ro'yxatiga:
        {
          situation: "...",      // ixtiyoriy, kerak bo'lmasa bu qatorni o'chiring
          question: "Savol matni",
        },

   5. Bu savollarning ruscha varianti alohida faylda (questions/ru-obstetrics.js) saqlanadi —
      bu yerdagi o'zgarishlar unga ta'sir qilmaydi.
      Bir urinishdagi savollar soni va test vaqti settings.js faylida belgilanadi.

   MUHIM QOIDALAR
   - language qatori "uz" bo'lib qolishi kerak; topic — mavzu tanlash ekranidagi nom.
   - Har bir matn qo'shtirnoq ichida yoziladi:  "matn"
   - Matn ichida apostrof (o', g', ') bemalol ishlatiladi.
   - Matn ichida qo'shtirnoq kerak bo'lsa,  « »  belgilarini ishlating.
   - Har bir blokdan  }  keyin vergul  ,  qo'yishni unutmang.
   - Faylni saqlagach, brauzerda sahifani yangilang (F5).
     Xato bo'lsa, sahifa buni ko'rsatadi.
   ===================================================================== */

addQuestions({
  language: "uz",
  topic: "Akusherlik va ginekologiya",

  tests: [
    // ===== Fiziologik homiladorlik va antenatal kuzatuv =====
    {
      question: "Fiziologik homiladorlikning o'rtacha davomiyligi qancha?",
      correct: "280 kun (40 hafta)",
      wrong: [
        "240 kun (34 hafta)",
        "260 kun (37 hafta)",
        "300 kun (43 hafta)",
      ],
      explanation: "Oxirgi hayzning birinchi kunidan hisoblanganda homiladorlik o'rtacha 280 kun, ya'ni 40 hafta (10 akusherlik oyi) davom etadi.",
    },
    {
      question: "Negele formulasi bo'yicha taxminiy tug'ruq sanasi qanday hisoblanadi?",
      correct: "Oxirgi hayzning birinchi kunidan 3 oy ayirib, 7 kun qo'shiladi",
      wrong: [
        "Oxirgi hayzning birinchi kuniga 3 oy qo'shib, 7 kun ayiriladi",
        "Oxirgi hayzning oxirgi kuniga 9 oy qo'shiladi",
        "Oxirgi hayzning birinchi kunidan 2 oy ayirib, 14 kun qo'shiladi",
      ],
      explanation: "Masalan: oxirgi hayz 10-yanvarda boshlangan bo'lsa: 10-yanvar − 3 oy = 10-oktabr, + 7 kun = 17-oktabr.",
    },
    {
      question: "Homila yurak urishining normal chastotasi qancha?",
      correct: "Daqiqasiga 110–160 marta",
      wrong: [
        "Daqiqasiga 60–80 marta",
        "Daqiqasiga 80–100 marta",
        "Daqiqasiga 180–220 marta",
      ],
      explanation: "Homila yurak urishi daqiqasiga 110 dan kam (bradikardiya) yoki 160 dan ko'p (taxikardiya) bo'lishi homila gipoksiyasi belgisi bo'lishi mumkin.",
    },
    {
      question: "Homiladorlikning 24-haftasida bachadon tubi qayerda joylashadi?",
      correct: "Kindik sathida",
      wrong: [
        "Qov suyagining yuqori chetida",
        "Kindik bilan qov suyagi o'rtasida",
        "Xanjarsimon o'simta sathida",
      ],
      explanation: "12 hafta — qov suyagi ustida; 16 hafta — kindik bilan qov o'rtasida; 24 hafta — kindik sathida; 36 hafta — xanjarsimon o'simta sathida.",
    },
    {
      question: "Leopold–Levitskiy usullarining birinchisi yordamida nima aniqlanadi?",
      correct: "Bachadon tubining balandligi va bachadon tubida joylashgan homila qismi",
      wrong: [
        "Homilaning holati va pozitsiyasi (orqasi qaysi tomonda ekanligi)",
        "Homilaning oldinda yotgan qismi",
        "Oldinda yotgan qismning kichik chanoqqa nisbati",
      ],
      explanation: "1-usul — bachadon tubi va undagi qism; 2-usul — homila holati va pozitsiyasi; 3-usul — oldinda yotgan qism; 4-usul — oldinda yotgan qismning kichik chanoqqa nisbati.",
    },
    {
      question: "Homiladorlikni rejalashtirayotgan ayolga homilada nerv nayi nuqsonlarining oldini olish uchun nima tavsiya etiladi?",
      correct: "Foliy kislotasi — kuniga 400 mkg (homiladorlikdan oldin va 1-trimestrda)",
      wrong: [
        "Katta dozada A vitamini",
        "Profilaktik antibiotiklar kursi",
        "Siydik haydovchi dorilar",
      ],
      explanation: "Foliy kislotasini homiladorlikdan 1–3 oy oldin boshlab, 12 haftagacha qabul qilish tavsiya etiladi. Katta dozadagi A vitamini homilaga zararli (teratogen) ta'sir ko'rsatadi.",
    },
    {
      question: "Tashqi kon'yugataning (conjugata externa) normal kattaligi:",
      correct: "20–21 sm",
      wrong: [
        "25–26 sm",
        "28–29 sm",
        "30–31 sm",
      ],
      explanation: "Tashqi kon'yugata — dumg'aza usti chuqurchasidan qov simfizi yuqori-tashqi chetining o'rtasigacha bo'lgan masofa, normada 20–21 sm. 25–26, 28–29 va 30–31 sm kattaliklar distantia spinarum, distantia cristarum va distantia trochanterica o'lchamlariga mos keladi.",
    },
    {
      question: "Mixaelis rombining yon burchaklari quyidagilarga mos keladi:",
      correct: "Yonbosh suyaklarining orqa-yuqori o'tkir o'simtalari",
      wrong: [
        "Yonbosh suyaklarining oldingi-yuqori o'tkir o'simtalari",
        "Quymich do'mboqlari",
        "Son suyaklarining katta ko'stlari",
      ],
      explanation: "Mixaelis rombi yuqoridan dumg'aza usti chuqurchasi (V bel umurtqasining o'tkir o'simtasi ostida), yon tomonlardan — yonbosh suyaklarining orqa-yuqori o'tkir o'simtalari, pastdan — dumg'aza uchi bilan chegaralangan. Normada uning vertikal o'lchami taxminan 11 sm, ko'ndalang o'lchami — taxminan 10 sm.",
    },
    {
      question: "Homiladorlikning ishonchli belgilariga kiradi:",
      correct: "Homila yurak urishini eshitish",
      wrong: [
        "Siydikda XGCh testining musbat natijasi",
        "Hayzning to'xtashi",
        "Ertalabki ko'ngil aynishi va qusish",
      ],
      explanation: "Ishonchli belgilar homilaning o'zidan kelib chiqadi: uning qismlarini paypaslab aniqlash, yurak urishini eshitish, tekshiruvchi tomonidan homila harakatlarining sezilishi, UTTda homila tuxumi yoki homilaning ko'rinishi. XGCh testining musbat natijasi va amenoreya — ehtimoliy belgilar, ko'ngil aynishi — shubhali belgi.",
    },
    {
      question: "Gorvits–Gegar homiladorlik belgisi — bu:",
      correct: "Bachadonning bo'yincha (istmus) sohasida yumshashi",
      wrong: [
        "Ikki qo'llab tekshirish vaqtida bachadonning zichlashishi",
        "Bir burchagining bo'rtib chiqishi hisobiga bachadonning asimmetriyasi",
        "Bachadon bo'ynining tanasiga nisbatan oson harakatlanishi",
      ],
      explanation: "Gorvits–Gegar belgisida ikki qo'llab tekshirishda ikkala qo'l barmoqlari yumshagan bo'yincha sohasida deyarli tutashadi. Tekshiruv vaqtida bachadonning zichlashishi — Snegiryov belgisi, asimmetriya — Piskachek belgisi, bo'yinning harakatchanligi — Gubarev–Gauss belgisi; ularning barchasi ehtimoliy belgilarga kiradi.",
    },
    {
      question: "Homiladorlik testlarida aniqlanadigan odam xorionik gonadotropini (XGCh) ishlab chiqariladi:",
      correct: "Trofoblast hujayralarida",
      wrong: [
        "Tuxumdon sariq tanasi hujayralarida",
        "Gipofiz oldingi bo'lagi hujayralarida",
        "Endometriy bezlari hujayralarida",
      ],
      explanation: "XGCh implantatsiya paytidan boshlab trofoblast (xorion) tomonidan sintez qilinadi va homiladorlikning boshida progesteron ishlab chiqaradigan sariq tananing faoliyatini qo'llab-quvvatlaydi. Gipofiz tuzilishiga ko'ra unga yaqin bo'lgan lyuteinlovchi gormonni ishlab chiqaradi, ammo XGCh ishlab chiqarmaydi.",
    },
    {
      question: "Homiladorlik muddatini aniqlashning eng aniq usuli:",
      correct: "I trimestrda embrionning dum-tepa o'lchami o'lchanadigan UTT",
      wrong: [
        "Homilaning birinchi qimirlagan sanasi bo'yicha hisoblash",
        "Bachadon tubi balandligini o'lchash",
        "Ikki qo'llab tekshirishda bachadon kattaligini baholash",
      ],
      explanation: "I trimestrda embrionning dum-tepa o'lchami muddatni bir necha kungacha aniqlik bilan belgilash imkonini beradi; oxirgi hayz sanasi bilan sezilarli farq bo'lsa, muddat UTT bo'yicha aniqlashtiriladi. Homilaning birinchi qimirlagan sanasi va bachadon tubi balandligi faqat taxminiy baho beradi.",
    },
    {
      question: "Fiziologik homiladorlikning III trimestriga kelib aylanib yuruvchi qon hajmi:",
      correct: "30–50% ga ortadi",
      wrong: [
        "20–30% ga kamayadi",
        "O'zgarmaydi",
        "2–3 baravar ortadi",
      ],
      explanation: "Aylanib yuruvchi qon hajmi asosan plazma hajmining ortishi hisobiga o'rtacha 30–50% ga oshadi, shuning uchun gemoglobin konsentratsiyasining biroz pasayishi bilan kechadigan fiziologik gemodilyutsiya rivojlanadi. Bu bachadon va yo'ldoshning qon bilan ta'minlanishiga xizmat qiladi va tug'ruqdagi qon yo'qotishning o'rnini qoplaydi.",
    },
    {
      question: "Homiladorlarda ich qotishi va jig'ildon qaynashiga moyillik asosan qaysi gormonning silliq mushaklarga bo'shashtiruvchi ta'siri bilan bog'liq:",
      correct: "Progesteron",
      wrong: [
        "Oksitotsin",
        "Prolaktin",
        "Aldosteron",
      ],
      explanation: "Progesteron ichak silliq mushaklari va qizilo'ngach pastki sfinkterining tonusini pasaytiradi, bu ich qotishi va jig'ildon qaynashiga sabab bo'ladi; homiladorlarda siydik yo'llarining kengayishi ham shu bilan izohlanadi. Oksitotsin esa, aksincha, miometriy qisqarishlarini kuchaytiradi.",
    },
    {
      question: "Homilador ayolni ayollar maslahatxonasida dispanser hisobiga olishning maqbul muddati:",
      correct: "Homiladorlikning 12-haftasigacha",
      wrong: [
        "Homiladorlikning 16–20-haftalarida",
        "Homiladorlikning 22–24-haftalarida",
        "Homiladorlikning 28-haftasidan keyin",
      ],
      explanation: "Erta murojaat (I trimestrda, 12 haftagacha) xavf omillarini o'z vaqtida aniqlash, laboratoriya tekshiruvlari va I trimestr kombinatsiyalangan skriningini o'tkazish imkonini beradi.",
    },
    {
      question: "I trimestr kombinatsiyalangan prenatal skriningi o'tkaziladigan muddat:",
      correct: "11–14 hafta",
      wrong: [
        "6–8 hafta",
        "18–21 hafta",
        "30–34 hafta",
      ],
      explanation: "I trimestr skriningi 11–13 hafta 6 kunlik muddatda (dum-tepa o'lchami 45–84 mm) o'tkaziladi: yoqa bo'shlig'i qalinligini o'lchash bilan UTT hamda qonda PAPP-A va XGChning erkin β-subbirligini aniqlash, homila xromosoma anomaliyalari xavfini hisoblagan holda.",
    },
    {
      question: "Homila chanoq bilan kelganda uning yurak urishi eng yaxshi eshitiladigan joy:",
      correct: "Kindikdan yuqorida, homila orqasi tomonida",
      wrong: [
        "Kindikdan pastda, homila orqasi tomonida",
        "Kindikdan yuqorida, mayda qismlar tomonida",
        "Kindikdan pastda, mayda qismlar tomonida",
      ],
      explanation: "Homila yurak urishi orqasi tomonida, boshiga yaqinroq joyda yaxshi eshitiladi: chanoq bilan kelganda — kindikdan yuqorida, bosh bilan kelganda — kindikdan pastda, ko'ndalang holatda — kindik sathida, boshga yaqinroq.",
    },
    {
      question: "Homila pozitsiyasi — bu:",
      correct: "Homila orqasining bachadonning o'ng yoki chap devoriga nisbati",
      wrong: [
        "Homila o'qining bachadonning bo'ylama o'qiga nisbati",
        "Homila yirik qismining kichik chanoqqa kirish qismiga nisbati",
        "Homila orqasining bachadonning old yoki orqa devoriga nisbati",
      ],
      explanation: "I pozitsiyada homila orqasi bachadonning chap devoriga, II pozitsiyada — o'ng devoriga qaragan bo'ladi. Homila o'qining bachadon o'qiga nisbati — holat, yirik qismning chanoqqa kirish qismiga nisbati — oldinda kelish, orqaning bachadon old yoki orqa devoriga nisbati — pozitsiya ko'rinishi.",
    },
    {
      question: "Boshlang'ich tana vazni indeksi normal (18,5–24,9 kg/m²) bo'lgan ayolda homiladorlik davomida tavsiya etiladigan umumiy vazn ortishi:",
      correct: "11,5–16 kg",
      wrong: [
        "5–7 kg",
        "20–25 kg",
        "3 kg dan ko'p emas",
      ],
      explanation: "Boshlang'ich tana vazni indeksi normal bo'lganda tavsiya etiladigan vazn ortishi — 11,5–16 kg; vazn yetishmovchiligida u ko'proq, ortiqcha vazn va semizlikda — kamroq bo'ladi. Haddan tashqari vazn ortishi gestatsion qandli diabet, yirik homila va tug'ruq asoratlari xavfini, yetarli bo'lmagan vazn ortishi esa homila o'sishining orqada qolishi xavfini oshiradi.",
    },
    {
      question: "Embrion teratogen omillar ta'siriga eng sezgir bo'ladigan davr:",
      correct: "Organogenez davri (urug'lanishdan keyingi 3–8-hafta)",
      wrong: [
        "Implantatsiyagacha bo'lgan davr (urug'lanishdan keyingi 1–2-hafta)",
        "Homiladorlikning 16–20-haftalari",
        "Homiladorlikning oxirgi oyi",
      ],
      explanation: "Organogenez davrida a'zolarning kurtaklari shakllanadi va teratogenlar ta'siri rivojlanish nuqsonlarini keltirib chiqaradi. Implantatsiyagacha «hammasi yoki hech narsa» tamoyili amal qiladi (embrionning nobud bo'lishi yoki to'liq tiklanishi), fetal davrda esa shikastlanishlar asosan funksional buzilishlar va o'sishning orqada qolishi bilan namoyon bo'ladi.",
    },
    {
      question: "Homiladorlikning 32-haftasidagi ayolga quyidagi holatda zudlik bilan shifokorga murojaat qilishni o'rgatish kerak:",
      correct: "Homila qimirlashining sezilarli darajada kamayishi",
      wrong: [
        "Qorin oq chizig'ining pigmentatsiyasi paydo bo'lishi",
        "Qorin terisida cho'zilish chiziqlari paydo bo'lishi",
        "Ko'krak uchlaridan og'iz suti tomchilarining ajralishi",
      ],
      explanation: "Homila qimirlashining kamayishi yoki to'xtashi uning gipoksiyasidan dalolat berishi mumkin va zudlik bilan tekshiruv (KTG, UTT) talab qiladi. Oq chiziq pigmentatsiyasi, striyalar va og'iz suti ajralishi — homiladorlikdagi fiziologik o'zgarishlar.",
    },

    // --- vaziyatli masalalar ---
    {
      situation: "Homilador ayol, 25 yosh, homiladorlik muddati 32 hafta. Chanoq o'lchamlari: 25–28–31–20 sm. Qin orqali tekshiruvda diagonal kon'yugata — 13 sm, Solovyov indeksi — 15 sm.",
      question: "Ushbu homilador ayolda haqiqiy kon'yugata:",
      correct: "11 sm",
      wrong: [
        "13 sm",
        "4 sm",
        "9 sm",
      ],
      explanation: "Haqiqiy kon'yugata diagonal kon'yugatadan 1,5–2 sm ayirib hisoblanadi; suyaklar massiv bo'lganda (Solovyov indeksi 14 sm dan ortiq) 2 sm ayiriladi: 13 − 2 = 11 sm, bu normaga mos keladi. 9 sm ayirish diagonal kon'yugataga emas, tashqi kon'yugataga nisbatan qo'llaniladi.",
    },
    {
      situation: "Ayol, 27 yosh, ayollar maslahatxonasiga hayzning 2 haftaga kechikishi, ertalabki ko'ngil aynishi va ko'krak bezlarining taranglashishi bilan murojaat qildi. Uyda qilingan homiladorlik testi musbat. Og'riq va qonli ajralmalar yo'q.",
      question: "Qaysi tekshiruv bachadon ichi homiladorligini ishonchli tasdiqlash imkonini beradi?",
      correct: "Kichik chanoq a'zolarining ultratovush tekshiruvi (UTT)",
      wrong: [
        "Siydikda XGCh testini takrorlash",
        "Bazal haroratni o'lchash",
        "Bachadon bo'ynini ko'zgularda ko'rish",
      ],
      explanation: "XGCh testining musbat natijasi, bachadon bo'yni sianozi va bachadon kattalashishi — ehtimoliy belgilar, ular bachadon ichi homiladorligini bachadondan tashqari homiladorlikdan farqlash imkonini bermaydi. UTTda bachadon bo'shlig'ida homila tuxumi, keyinroq esa yurak urishi bor embrion ko'rinadi.",
    },
    {
      situation: "Ayol, 30 yosh, ayollar maslahatxonasiga 2-iyunda qabulga keldi. Oxirgi hayzning birinchi kuni — 10-mart, sikl muntazam, 28 kunlik. Homiladorlik testi musbat.",
      question: "Qabul kunidagi akusherlik homiladorlik muddati:",
      correct: "12 hafta",
      wrong: [
        "10 hafta",
        "14 hafta",
        "8 hafta",
      ],
      explanation: "Akusherlik muddati oxirgi hayzning birinchi kunidan hisoblanadi: 10-martdan 2-iyungacha 84 kun, ya'ni 12 hafta o'tgan. 10 hafta — embrional muddat (urug'lanishdan boshlab), u akusherlik muddatidan taxminan 2 hafta kam.",
    },
    {
      situation: "Homilador ayol, 30 yosh, homiladorlik muddati 36 hafta, bachadon tubi balandligini o'lchash vaqtida chalqancha yotibdi. Bir necha daqiqadan so'ng bosh aylanishi, ko'ngil aynishi, holsizlik, «ko'z oldi qorong'ilashishi» paydo bo'ldi. Teri oqargan, nam, puls daqiqasiga 106 marta, AQB 85/50 mm sim. ust. (ko'rikdan oldin — 115/75 mm sim. ust.). Qorin yumshoq, og'riqsiz, jinsiy yo'llardan ajralma yo'q.",
      question: "Akusherkaning birinchi navbatdagi harakati:",
      correct: "Homilador ayolni chap yonboshiga o'girish",
      wrong: [
        "Chalqancha holatda qoldirib, oyoq tomonini ko'tarish",
        "Novshadil spirti bug'ini hidlatish",
        "Ko'rikni davom ettirib, AQBni 15 daqiqadan keyin qayta o'lchash",
      ],
      explanation: "Bu homilador bachadon tomonidan pastki kovak venaning siqilish sindromi: chalqancha holatda yurakka venoz qon qaytishi kamayadi va AQB pasayadi. Chap yonboshga o'girish siqilishni bartaraf etadi, chalqancha holatda oyoq tomonini ko'tarish esa uni bartaraf etmaydi.",
    },
    {
      situation: "Homilador ayol, 28 yosh, homiladorlik muddati 39 hafta. Tashqi akusherlik tekshiruvida: bachadon tubi balandligi — 34 sm, qorin aylanasi — 98 sm. Homila holati bo'ylama, oldinda boshi yotibdi.",
      question: "Jordaniya formulasi bo'yicha hisoblangan homilaning taxminiy vazni qariyb:",
      correct: "3300 g",
      wrong: [
        "2300 g",
        "4300 g",
        "5000 g",
      ],
      explanation: "Jordaniya formulasi bo'yicha homilaning taxminiy vazni bachadon tubi balandligining qorin aylanasiga ko'paytmasiga (santimetrlarda) teng: 34 × 98 ≈ 3330 g. Bu usul taxminiy, aniqroq baholashni UTT-fetometriya beradi.",
    },
    {
      situation: "Homilador ayol, 26 yosh, homiladorlik muddati 37 hafta. Tashqi akusherlik tekshiruvida: bachadon tubida katta, yumshoqroq, noto'g'ri shakldagi qism aniqlanadi; homila orqasi chap tomonda va bachadon old devoriga yaqinroq paypaslanadi, mayda qismlar — o'ng tomonda; kichik chanoqqa kirish qismi ustida — katta, qattiq, dumaloq, ballotirlanuvchi qism.",
      question: "Homilaning holati, pozitsiyasi, pozitsiya ko'rinishi va oldinda kelishini aniqlang.",
      correct: "Bo'ylama holat, I pozitsiya, oldingi ko'rinish, bosh bilan kelish",
      wrong: [
        "Bo'ylama holat, II pozitsiya, oldingi ko'rinish, bosh bilan kelish",
        "Bo'ylama holat, I pozitsiya, orqa ko'rinish, bosh bilan kelish",
        "Bo'ylama holat, I pozitsiya, oldingi ko'rinish, chanoq bilan kelish",
      ],
      explanation: "Homila o'qi bachadon o'qiga to'g'ri keladi — holat bo'ylama; chanoqqa kirish qismi ustida qattiq, ballotirlanuvchi bosh — bosh bilan kelish; orqa chapda — I pozitsiya, oldinga qaragan — oldingi ko'rinish. Bunda bachadon tubida dumbalar paypaslanadi.",
    },
    {
      situation: "Homilador ayol, 24 yosh, homiladorlik muddati 30 hafta, ovqatdan keyin jig'ildon qaynashidan shikoyat qiladi, u yotgan holatda kuchayadi. AQB 110/70 mm sim. ust., epigastriyda og'riq, bosh og'rig'i va shishlar yo'q, tahlillar normada.",
      question: "Akusherka qanday tavsiya berishi kerak?",
      correct: "Tez-tez va oz-ozdan ovqatlanish, ovqatdan keyin yotmaslik",
      wrong: [
        "Kuniga 2–3 marta, lekin katta porsiyalarda ovqatlanish",
        "Past yostiqda gorizontal holatda uxlash",
        "Har ovqatdan keyin ichimlik sodasi eritmasini ichish",
      ],
      explanation: "Jig'ildon qaynashi progesteron ta'sirida qizilo'ngach pastki sfinkterining bo'shashishi va bachadonning oshqozonga bosimi bilan bog'liq. Oz-ozdan tez-tez ovqatlanish, uxlashdan 2–3 soat oldin ovqat yemaslik va karavotning bosh tomonini ko'tarib qo'yish yordam beradi; ichimlik sodasi tavsiya etilmaydi.",
    },
    {
      situation: "Homilador ayol, 22 yosh, homiladorlik muddati 8 hafta, kuniga 10 tacha sigaret chekadi. Akusherkadan chekishni keskin tashlash homilaga zarar yetkazmaydimi va uni asta-sekin, homiladorlik oxirigacha tashlash yaxshiroq emasmi, deb so'raydi.",
      question: "Akusherkaning to'g'ri taktikasi qanday?",
      correct: "Chekishni imkon qadar ertaroq to'liq tashlashni tavsiya etish",
      wrong: [
        "Sigaretlar sonini tug'ruqqacha asta-sekin kamaytirishni tavsiya etish",
        "I trimestr oxirigacha chekishga ruxsat berish, keyin tashlash",
        "Elektron sigaretlarga o'tishni tavsiya etish",
      ],
      explanation: "Chekishni keskin tashlash homilaga zarar yetkazmaydi, uning foydasi esa har qanday muddatda bor. Nikotin va is gazi homila gipoksiyasini keltirib chiqaradi hamda homila o'sishining orqada qolishi, muddatidan oldingi tug'ruq va yo'ldosh ko'chishi xavfini oshiradi; elektron sigaretlar ham nikotin saqlaydi va xavfsiz o'rinbosar hisoblanmaydi.",
    },
    {
      situation: "Homilador ayol, 27 yosh, homiladorlik muddati 32 hafta (I trimestrda UTT bilan tasdiqlangan). Oldingi tashriflarda bachadon tubi balandligi muddatga mos kelgan. Bugun bachadon tubi balandligi — 22 sm, qorin aylanasi — 80 sm. Homila qimirlashini sezadi, homila yurak urishi aniq, ritmik, daqiqasiga 140 marta.",
      question: "Akusherkaning taktikasi:",
      correct: "Homilani UTT qilishni tayinlash uchun bachadon tubi balandligining muddatdan orqada qolayotgani haqida shifokorga xabar berish",
      wrong: [
        "Bachadon tubi balandligi muddatga mos kelishini qayd etib, navbatdagi tashrifni jadval bo'yicha belgilash",
        "Ovqatlanish kaloriyaliligini oshirishni tavsiya etib, 4 haftadan keyin qayta o'lchash",
        "Bachadon tubi balandligining III trimestrda orqada qolishi fiziologik ekanini tushuntirish",
      ],
      explanation: "32 haftada bachadon tubi balandligi normada taxminan 28–32 sm, 22 sm esa taxminan 22–24 haftaga mos keladi. Bunday orqada qolish homila o'sishining orqada qolishi yoki kam suvlilikning mumkin bo'lgan belgisi, shifokor ko'rigi va homilaning ultratovush tekshiruvi zarur.",
    },
    {
      situation: "Homilador ayol, 29 yosh, homiladorlik muddati 20 hafta, homiladorlik asoratsiz kechmoqda. Homiladorlikdan oldin haftasiga 2–3 marta suzish bilan shug'ullangan. Mashg'ulotlarni davom ettirish mumkinmi, deb so'raydi.",
      question: "Akusherka qanday tavsiya beradi?",
      correct: "Mo'tadil jismoniy yuklamalarni, masalan, suzishni davom ettirish",
      wrong: [
        "Tug'ruqqacha jismoniy yuklamalarni butunlay istisno qilish",
        "Homiladorlikning ikkinchi yarmida yotoq rejimiga rioya qilish",
        "Tug'ruq oldidan maksimal intensivlik bilan mashq qilish",
      ],
      explanation: "Asoratsiz homiladorlikda muntazam mo'tadil jismoniy faollik (haftasiga taxminan 150 daqiqa) tavsiya etiladi: u gestatsion qandli diabet va haddan tashqari vazn ortishi xavfini kamaytiradi, umumiy ahvolni yaxshilaydi. Kontakt va jarohat xavfi yuqori sport turlari, akvalang bilan suv ostida suzish istisno qilinadi.",
    },

    // ===== Fiziologik tug'ruq va tug'ruqdan keyingi davr =====
    {
      question: "Tug'ruqning uchinchi (yo'ldosh) davri normada qancha davom etadi?",
      correct: "30 daqiqagacha",
      wrong: [
        "2 soatgacha",
        "6 soatgacha",
        "12 soatgacha",
      ],
      explanation: "Yo'ldosh davri homila tug'ilgandan boshlanib, yo'ldosh tug'ilishi bilan tugaydi.",
    },
    {
      question: "Tug'ruqda fiziologik (yo'l qo'yiladigan) qon yo'qotish hajmi qancha?",
      correct: "Tana vaznining 0,5 foizigacha (taxminan 500 ml gacha)",
      wrong: [
        "Tana vaznining 1,5 foizigacha (taxminan 1000 ml gacha)",
        "Tana vaznining 2 foizigacha (taxminan 1200 ml gacha)",
        "Tana vaznining 3 foizigacha (taxminan 2000 ml gacha)",
      ],
      explanation: "Tabiiy tug'ruqdan keyin 500 ml dan ortiq qon yo'qotish tug'ruqdan keyingi qon ketish deb hisoblanadi.",
    },
    {
      question: "Tug'ruqdan keyingi davr (puerperiy) qancha davom etadi?",
      correct: "6–8 hafta",
      wrong: [
        "2–3 kun",
        "10 kun",
        "6 oy",
      ],
      explanation: "Bu davrda bachadon involyutsiyasi va homiladorlik bilan bog'liq o'zgarishlarning qayta tiklanishi yakunlanadi.",
    },
    {
      question: "Sanab o'tilgan belgilardan qaysi biri tug'ruq darakchilariga kiradi?",
      correct: "Servikal kanaldan shilliq tiqinning ajralib chiqishi",
      wrong: [
        "Har 3–4 daqiqada 40 soniyadan davom etadigan muntazam to'lg'oqlar",
        "Bachadon og'zining 5 sm gacha ochilishi",
        "Oxirgi haftada tana vaznining 1–2 kg ga ortishi",
      ],
      explanation: "Darakchilar tug'ruqdan 1–2 hafta oldin paydo bo'ladi: bachadon tubining pastga tushishi, nafas olishning yengillashishi, shilliq tiqinning ajralib chiqishi, tana vaznining kamayishi, qorin pastida nomuntazam tortuvchi og'riqlar. Muntazam to'lg'oqlar va bachadon og'zining ochilishi — boshlangan tug'ruq belgilari.",
    },
    {
      question: "Bishop shkalasi bo'yicha qaysi ko'rsatkich baholanadi?",
      correct: "Bachadon bo'ynining konsistensiyasi",
      wrong: [
        "To'lg'oqlarning chastotasi va kuchi",
        "Bachadon tubining balandligi",
        "Homila yurak urishining chastotasi",
      ],
      explanation: "Bishop shkalasi bo'yicha bachadon bo'ynining yetilganligi baholanadi: konsistensiyasi, uzunligi (tekislanish darajasi), servikal kanalning o'tkazuvchanligi va bo'yinning chanoqning o'tkazuvchi o'qiga nisbatan joylashuvi (asl shkalada — oldinda yotgan qismning joylashish balandligi ham). Bachadonning qisqarish faoliyati va homila holati boshqa usullar bilan baholanadi.",
    },
    {
      question: "Birinchi marta tug'ayotgan ayollarda bachadon bo'yni qanday ochiladi?",
      correct: "Avval ichki og'iz, keyin tashqi og'iz ochiladi",
      wrong: [
        "Ichki va tashqi og'iz bir vaqtda ochiladi",
        "Ochilish faqat homila oldi suvlari ketgandan keyin boshlanadi",
        "Bo'yin oldindan qisqarmay va tekislanmay ochiladi",
      ],
      explanation: "Birinchi marta tug'ayotganlarda avval ichki og'iz ochiladi va bo'yin tekislanadi, so'ngra tashqi og'iz ochiladi. Qayta tug'ayotganlarda ikkala og'iz bo'yinning tekislanishi bilan bir vaqtda ochiladi, shuning uchun ularda tug'ruqning birinchi davri qisqaroq bo'ladi.",
    },
    {
      question: "Homila boshidagi kichik (orqa) liqildoq qaysi choklarning kesishishidan hosil bo'ladi?",
      correct: "O'qsimon va lambdasimon choklar",
      wrong: [
        "O'qsimon, peshona va toj choklar",
        "Peshona va toj choklar",
        "Toj va lambdasimon choklar",
      ],
      explanation: "Uchburchak shaklidagi kichik liqildoq o'qsimon va lambdasimon choklar tutashgan joyda joylashgan. Rombsimon shakldagi katta liqildoq o'qsimon, peshona va toj choklaridan hosil bo'ladi.",
    },
    {
      question: "Ensa bilan kelishning oldingi ko'rinishida homila boshi kichik chanoq bo'shlig'idan qaysi o'lcham bilan o'tadi va tug'iladi?",
      correct: "Kichik qiyshiq o'lcham — 9,5 sm",
      wrong: [
        "O'rta qiyshiq o'lcham — 10 sm",
        "To'g'ri o'lcham — 12 sm",
        "Katta qiyshiq o'lcham — 13 sm",
      ],
      explanation: "Ensa bilan kelishning oldingi ko'rinishida bosh bukilgan bo'ladi va kichik qiyshiq o'lcham bilan tug'iladi (9,5 sm, aylanasi 32 sm). Orqa ko'rinishda bosh o'rta qiyshiq o'lcham bilan tug'iladi (10 sm, aylanasi 33 sm).",
    },
    {
      question: "Ensa bilan kelishning oldingi ko'rinishida tug'ruq biomexanizmining birinchi momenti nima?",
      correct: "Boshning bukilishi",
      wrong: [
        "Boshning ichki burilishi",
        "Boshning yozilishi",
        "Boshning tashqi burilishi",
      ],
      explanation: "Ensa bilan kelishning oldingi ko'rinishida tug'ruq biomexanizmi momentlari: 1 — boshning bukilishi, 2 — boshning ensasi bilan oldinga ichki burilishi, 3 — boshning yozilishi, 4 — yelkalarning ichki burilishi va boshning tashqi burilishi.",
    },
    {
      question: "Tug'ruq biomexanizmining qaysi momenti ensa bilan kelishning orqa ko'rinishida bo'ladi, lekin oldingi ko'rinishida bo'lmaydi?",
      correct: "Boshning qo'shimcha (maksimal) bukilishi",
      wrong: [
        "Boshning ichki burilishi",
        "Boshning yozilishi",
        "Yelkalarning ichki burilishi va boshning tashqi burilishi",
      ],
      explanation: "Orqa ko'rinishda biomexanizm beshta momentdan iborat: boshning ensasi bilan orqaga ichki burilishidan keyin boshning qo'shimcha (maksimal) bukilishi, so'ngra uning yozilishi sodir bo'ladi. Bosh o'rta qiyshiq o'lcham bilan tug'iladi, shuning uchun tug'ruq uzoqroq davom etadi.",
    },
    {
      question: "Partogramma qaysi paytdan boshlab yuritiladi?",
      correct: "Tug'ruq birinchi davrining faol fazasi boshlanganidan",
      wrong: [
        "Tug'ruq darakchilari paydo bo'lgan paytdan",
        "Bachadon og'zi to'liq ochilgan paytdan",
        "To'lg'oqlardan qat'i nazar, homila oldi suvlari ketgan paytdan",
      ],
      explanation: "Partogramma tug'ruq birinchi davrining faol fazasi boshlanganidan to'ldiriladi. Unda bachadon bo'yni ochilishi va bosh siljishining dinamikasi, to'lg'oqlar, homila yurak urishi va tug'ayotgan ayolning ahvoli grafik tarzda aks ettiriladi.",
    },
    {
      question: "Kardiotokogrammada akseleratsiya deb nimaga aytiladi?",
      correct: "Homila yurak urishi chastotasining 15 marta/daqiqa va undan ko'proqqa tezlashishi, kamida 15 soniya davomida",
      wrong: [
        "Homila yurak urishi chastotasining 15 marta/daqiqa va undan ko'proqqa sekinlashishi, kamida 15 soniya davomida",
        "Homila bazal yurak urishi chastotasining 10 daqiqa va undan uzoq vaqt davomida 160 marta/daqiqadan oshishi",
        "Homila yurak urishi chastotasining bazal ritm atrofida 5–25 marta/daqiqa amplituda bilan tebranishi",
      ],
      explanation: "Akseleratsiyalar — homila yurak urishi chastotasining 15 marta/daqiqa va undan ko'proqqa, 15 soniya va undan uzoq davom etadigan o'tkinchi tezlashishlari; ularning mavjudligi homila holati yaxshi ekanidan dalolat beradi. Yurak urishi chastotasining o'tkinchi sekinlashishi deseleratsiya deb ataladi.",
    },
    {
      question: "Ensa bilan kelishda oraliqni himoya qilish bo'yicha akusherlik qo'llanmasining birinchi momenti nima?",
      correct: "Boshning muddatidan oldin yozilishiga to'sqinlik qilish",
      wrong: [
        "Vulva halqasi to'qimalarini pastga tushirish hisobiga oraliq tarangligini kamaytirish",
        "Boshni kuchanishdan tashqari vaqtda jinsiy yoriqdan chiqarish",
        "Yelka kamarini chiqarish",
      ],
      explanation: "Qo'llanmaning birinchi momenti — boshning muddatidan oldin yozilishiga to'sqinlik qilish, toki u eng kichik (kichik qiyshiq) o'lcham bilan yorib chiqsin. Qolgan momentlar: oraliq tarangligini kamaytirish, kuchanishlarni boshqarish, boshni kuchanishdan tashqari vaqtda chiqarish va yelka kamarini chiqarish.",
    },
    {
      question: "Alfeld yo'ldosh ajralish belgisi nimadan iborat?",
      correct: "Jinsiy yoriq oldida kindik tizimchasiga qo'yilgan ligatura 10–12 sm ga pastga tushadi",
      wrong: [
        "Bachadon tubi kindikdan yuqoriga ko'tariladi va o'ngga og'adi, bachadon yassilanadi",
        "Kaft qirrasi bilan qov ustidan bosilganda kindik tizimchasi qinga tortilmaydi",
        "Tug'ayotgan ayolda kuchanish istagi paydo bo'ladi",
      ],
      explanation: "Ajralgan yo'ldosh bachadonning pastki segmentiga yoki qinga tushadi, shuning uchun jinsiy yoriq oldida kindik tizimchasiga qo'yilgan ligatura (qisqich) 10–12 sm ga pastga tushadi. Qolgan variantlar Shryoder, Kyustner–Chukalov va Mikulich–Radetskiy belgilarini tavsiflaydi.",
    },
    {
      question: "Qorin old devori ikki qo'l bilan bo'ylama burma shaklida ushlanib, tug'ayotgan ayolga kuchanish taklif qilinadigan, ajralgan yo'ldoshni chiqarish usuli qanday ataladi?",
      correct: "Abuladze usuli",
      wrong: [
        "Genter usuli",
        "Krede–Lazarevich usuli",
        "Brandt–Endryus usuli",
      ],
      explanation: "Abuladze usulida siydik pufagi bo'shatilgandan so'ng qorin devori bo'ylama burma shaklida ushlanadi, bu qorin to'g'ri mushaklarining bir-biridan uzoqlashishini bartaraf etadi, so'ngra tug'ayotgan ayol kuchanadi. U samarasiz bo'lganda Genter yoki Krede–Lazarevich usullari qo'llaniladi.",
    },
    {
      question: "Qaysi belgi chaqaloq ko'krakni to'g'ri qamrab olganidan dalolat beradi?",
      correct: "Chaqaloqning pastki labi tashqariga qayrilgan",
      wrong: [
        "Emish vaqtida chaqaloqning yonoqlari ichiga tortiladi",
        "Chaqaloq faqat ko'krak uchini qamrab oladi",
        "Emish vaqtida chaqillagan tovushlar eshitiladi",
      ],
      explanation: "To'g'ri qamrab olganda chaqaloqning og'zi keng ochiq, pastki labi tashqariga qayrilgan, iyagi ko'krakka tegib turadi, chaqaloq ko'krak uchini va areolaning katta qismini qamrab oladi, yonoqlari dumaloq, yutish ovozi eshitiladi. Yonoqlarning ichiga tortilishi, chaqillagan tovushlar va faqat ko'krak uchini qamrab olish — ko'krakka noto'g'ri qo'yish belgilari.",
    },
    {
      question: "Ko'krak sutini qo'lda sog'ishda barmoqlar qanday to'g'ri joylashtiriladi?",
      correct: "Bosh va ko'rsatkich barmoqlar areola chetida bir-biriga qarama-qarshi",
      wrong: [
        "Bosh va ko'rsatkich barmoqlar bevosita ko'krak uchida, uning uchini siqib",
        "Barmoqlar ko'krak bezining asosida, ko'krak qafasi yonida",
        "Barmoqlar teri bo'ylab ko'krak bezi asosidan ko'krak uchi tomon sirpanadi",
      ],
      explanation: "Bosh va ko'rsatkich barmoqlar areola chetida bir-biriga qarama-qarshi joylashtiriladi, ritmik ravishda ko'krak qafasi tomon bosiladi va siqiladi, barmoqlar areola aylanasi bo'ylab asta-sekin siljitiladi. Ko'krak uchini siqish va barmoqlarni teri bo'ylab sirpantirish mumkin emas — bu to'qimalarni shikastlaydi va samarasiz.",
    },
    {
      question: "Tuqqan ayolning tashqi jinsiy a'zolari tualeti qanday to'g'ri o'tkaziladi?",
      correct: "Iliq suv bilan oldindan orqaga, qovdan anus tomon harakatlar bilan yuviladi",
      wrong: [
        "Iliq suv bilan orqadan oldinga, anusdan qov tomon harakatlar bilan yuviladi",
        "Har kuni qin antiseptik eritma bilan chayiladi",
        "Faqat sutkada bir marta, uxlashdan oldin yuviniladi",
      ],
      explanation: "Tashqi jinsiy a'zolar tualeti har bir siydik chiqarish va defekatsiyadan keyin oldindan orqaga yo'nalgan harakatlar bilan o'tkaziladi, toki ichak florasi qinga va oraliqdagi choklarga tushmasin. Tug'ruqdan keyingi davrda qin chayilmaydi.",
    },

    // --- vaziyatli masalalar ---
    {
      situation: "Homiladorlikning 39-haftasi. Ayol qorin pastida davriy og'riqlardan shikoyat qilib keldi. To'lg'oqlar har 3–4 daqiqada, 40–45 soniya davom etadi va kuchayib bormoqda. Qin orqali tekshiruvda bachadon bo'yni 6 sm ga ochilgan, homila pufagi butun.",
      question: "Ayol tug'ruqning qaysi davrida?",
      correct: "Tug'ruqning birinchi davri (ochilish davri), faol fazasi",
      wrong: [
        "Soxta to'lg'oqlar (preliminar davr)",
        "Tug'ruqning ikkinchi davri (kuchanish, homilaning tug'ilish davri)",
        "Tug'ruqning uchinchi davri (yo'ldosh davri)",
      ],
      explanation: "Birinchi davr bachadon bo'yni to'liq (10 sm) ochilguncha davom etadi. Ikkinchi davr — to'liq ochilishdan homila tug'ilguncha, uchinchi davr — yo'ldosh tug'ilguncha.",
    },
    {
      situation: "Homilador ayol, 24 yosh, homiladorlik muddati 39 hafta, tug'ruqxonaning qabul bo'limiga murojaat qildi. 4 soat davomida qorin pastida 15 daqiqadan 30 daqiqagacha oraliq bilan nomuntazam, kam og'riqli, tortuvchi og'riqlarni sezmoqda, o'zini yaxshi his qilmoqda. Homila yurak urishi aniq, ritmik, daqiqasiga 140 marta. Qin orqali tekshiruvda: bachadon bo'yni yumshagan, uzunligi 2 sm, servikal kanal barmoq uchini o'tkazadi, homila pufagi butun.",
      question: "Homilador ayolning holatini qanday baholash kerak?",
      correct: "Fiziologik preliminar davr",
      wrong: [
        "Patologik preliminar davr",
        "Tug'ruq birinchi davrining latent fazasi",
        "Tug'ruq birinchi davrining faol fazasi",
      ],
      explanation: "Davomiyligi 6–8 soatdan oshmaydigan, umumiy ahvol va uyquni buzmaydigan, bachadon bo'yni ochilmaydigan nomuntazam, kam og'riqli to'lg'oqlar fiziologik preliminar davrga xos. Boshlangan tug'ruq uchun bachadon bo'yni ochilishi dinamikasi bilan kechadigan muntazam to'lg'oqlar xos.",
    },
    {
      situation: "Tug'ayotgan ayol, 27 yosh, birinchi, muddatida tug'ruq, ikkinchi davr. Kuchanishlar har 2–3 daqiqada, 50–60 soniyadan. Kuchanish vaqtida jinsiy yoriqdan homila boshi ko'rinadi, kuchanish tugagach esa u jinsiy yoriq ortiga yashirinadi.",
      question: "Tug'ruqning bu momenti qanday ataladi?",
      correct: "Boshning kirib kelishi",
      wrong: [
        "Boshning yorib chiqishi",
        "Boshning tug'ilishi",
        "Boshning kichik chanoqqa kirish qismiga o'rnashishi",
      ],
      explanation: "Boshning kirib kelishi — kuchanish vaqtida boshning jinsiy yoriqdan ko'rinishi va kuchanish tugagach yana orqaga ketishi. Yorib chiqishda bosh kuchanishdan tashqari vaqtda ham orqaga ketmaydi; shu paytdan boshlab oraliqni himoya qilish bo'yicha akusherlik qo'llanmasi ko'rsatiladi.",
    },
    {
      situation: "Qayta tug'ayotgan ayol, 30 yosh, homiladorlik muddati 40 hafta. Bachadon og'zi to'liq ochilgan, homila boshi chanoq tubida, har 2–3 daqiqada kuchanishlar boshlandi. Homila yurak urishi aniq, ritmik, daqiqasiga 138 marta. Homila holati vaqti-vaqti bilan (intermittirlovchi) auskultatsiya usulida nazorat qilinmoqda.",
      question: "Tug'ruqning bu davrida akusherka homila yurak urishini qanchalik tez-tez eshitishi kerak?",
      correct: "Har 5 daqiqada yoki har bir kuchanishdan keyin",
      wrong: [
        "Har 15–30 daqiqada, to'lg'oqdan keyin 1 daqiqa davomida",
        "Kuchanish tugagach, soatiga bir marta",
        "Faqat homila boshi tug'ilishidan oldin",
      ],
      explanation: "Tug'ruqning ikkinchi davrida homila gipoksiyasi xavfi ortadi, shuning uchun yurak urishi har 5 daqiqada (har bir kuchanishdan keyin) eshitiladi. Birinchi davrning faol fazasida vaqti-vaqti bilan auskultatsiyada yurak urishi kamroq — har 15–30 daqiqada eshitiladi.",
    },
    {
      situation: "Tug'ayotgan ayol, 22 yosh. 10 daqiqa oldin tirik, muddatida tug'ilgan chaqaloq tug'ildi. Jinsiy yo'llardan qonli ajralma yo'q. Akusherka bachadon tubi kindikdan yuqoriga ko'tarilib, o'ngga og'ganini, bachadon torayib, yassilashganini qayd etadi.",
      question: "Yo'ldosh ajralishining qaysi belgisi aniqlandi?",
      correct: "Shryoder belgisi",
      wrong: [
        "Alfeld belgisi",
        "Kyustner–Chukalov belgisi",
        "Kleyn belgisi",
      ],
      explanation: "Shryoder belgisi — bachadon tubi shakli va joylashish balandligining o'zgarishi: yo'ldosh ajralgandan so'ng bachadon torayib, yassilashadi, tubi kindikdan yuqoriga ko'tarilib, o'ngga og'adi. Alfeld, Kyustner–Chukalov va Kleyn belgilari kindik tizimchasi tashqi qismining o'zgarishiga qarab baholanadi.",
    },
    {
      situation: "Tuqqan ayol, 29 yosh. Chaqaloq tug'ilgandan 15 daqiqa o'tib yo'ldosh o'z-o'zidan tug'ildi. Yo'ldoshni ko'zdan kechirishda uning ona yuzasida 2×3 sm o'lchamdagi yo'ldosh to'qimasi nuqsoni aniqlandi. Bachadon zich, qon yo'qotish 200 ml, qon ketish yo'q.",
      question: "Akusherkaning taktikasi qanday?",
      correct: "Zudlik bilan shifokorga xabar berish va bachadon bo'shlig'ini qo'l bilan tekshirishga tayyorlash",
      wrong: [
        "Tug'ruq zalida kuzatishni davom ettirish, chunki bachadon zich va qon ketish yo'q",
        "Uterotoniklar yuborib, ayolni tug'ruqdan keyingi bo'limga o'tkazish",
        "Qorinning pastki qismiga sovuq qo'yib, yo'ldoshni 2 soatdan keyin qayta ko'zdan kechirish",
      ],
      explanation: "Yo'ldosh to'qimasi nuqsoni uning bir qismi bachadonda qolib ketganini bildiradi, bu qon ketish va endometrit xavfini tug'diradi. Shuning uchun qon ketish bo'lmasa ham, bachadon bo'shlig'i devorlarini qo'l bilan tekshirish ko'rsatilgan, uni shifokor og'riqsizlantirish ostida bajaradi.",
    },
    {
      situation: "Tuqqan ayol, 26 yosh, fiziologik tug'ruqdan keyin 2,5 soat o'tgan. Shikoyati yo'q. Bachadon zich, tubi kindikdan 2 ko'ndalang barmoq yuqorida va o'ngga og'gan; qov ustida dumaloq yumshoq bo'rtma aniqlanadi. Qonli ajralmalar o'rtacha. Tug'ruqdan keyin siydik chiqarmagan.",
      question: "Akusherka (hamshira)ning birinchi navbatdagi harakati qaysi?",
      correct: "Siydik pufagini bo'shatish (mustaqil ravishda yoki shifokor ko'rsatmasi bilan kateter yordamida)",
      wrong: [
        "Kuzatishni davom ettirish, chunki bachadon tubining yuqori turishi — normaning varianti",
        "Bachadon qisqarishi uchun qoringa qattiq bandaj bog'lamini qo'yish",
        "Suyuqlik ichishni cheklab, 6 soatdan keyin qayta ko'rikdan o'tkazish",
      ],
      explanation: "Bachadon tubining yuqori turishi va o'ngga og'ishi hamda qov ustidagi bo'rtma — to'lgan siydik pufagi belgilari, u bachadon qisqarishiga xalaqit beradi va gipotonik qon ketishga sabab bo'lishi mumkin. Mustaqil siydik chiqarish imkoni bo'lmasa, siydik shifokor ko'rsatmasi bilan kateter yordamida chiqariladi.",
    },
    {
      situation: "Tuqqan ayol, 25 yosh, fiziologik tug'ruqdan keyingi 4-kun. Shikoyati yo'q, tana harorati 36,7°C, puls daqiqasiga 76 marta. Ko'krak bezlari o'rtacha darajada taranglashgan, og'riqsiz, ko'krak uchlarida yoriqlar yo'q. Bachadon tubi kindikdan 3 ko'ndalang barmoq pastda, bachadon zich, og'riqsiz. Lokiyalar seroz-qonli, o'rtacha, hidsiz.",
      question: "Tug'ruqdan keyingi davrning kechishini qanday baholash kerak?",
      correct: "Tug'ruqdan keyingi davrning fiziologik kechishi",
      wrong: [
        "Bachadon subinvolyutsiyasi, shifokorning zudlik bilan ko'rigi talab etiladi",
        "Lokiometra — lokiyalarning bachadon bo'shlig'ida to'planib qolishi",
        "Tug'ruqdan keyingi endometritning boshlang'ich belgilari",
      ],
      explanation: "Birinchi kuni bachadon tubi kindik sathida bo'ladi va har kuni taxminan 1 ko'ndalang barmoqqa pastga tushib, 10-kunga kelib qov orqasiga yashirinadi; lokiyalar dastlabki 2–3 kunda qonli, keyin seroz-qonli, 10-kundan boshlab sarg'ish-oq bo'ladi. Zich, og'riqsiz bachadon, normal harorat va lokiyalarning xususiyati fiziologik kechishga mos keladi.",
    },
    {
      situation: "Tuqqan ayol, 23 yosh, tug'ruqdan keyingi 5-kun, ko'krak suti bilan emizmoqda. O'ng ko'krak bezida kerib turuvchi og'riq va zichlashishdan shikoyat qiladi. Tana harorati 37,2°C, umumiy ahvoli qoniqarli. O'ng bezning tashqi kvadrantida teri giperemiyasi va flyuktuatsiyasiz og'riqli zichlashish paypaslanadi; sut qiyinchilik bilan sog'iladi.",
      question: "Akusherka (hamshira)ning qaysi tavsiyasi to'g'ri?",
      correct: "Chaqaloqni ko'krakka tez-tez qo'yish, emizishni o'ng bezdan boshlash",
      wrong: [
        "Zichlashish yo'qolguncha o'ng ko'krak bilan emizishni to'xtatish",
        "Suyuqlik ichishni sutkasiga 500 ml gacha cheklash va ko'krakni qattiq bintlab bog'lash",
        "Ko'krakka grelka qo'yish va chaqaloqni sun'iy aralashma bilan oziqlantirishga o'tkazish",
      ],
      explanation: "Bu laktostaz; asosiy davolash usuli — ko'krakni tez-tez va samarali bo'shatish: to'g'ri qamrab olgan holda talab bo'yicha emizish, zararlangan bezdan boshlab, zarur bo'lsa — emizishdan keyin sog'ish. Emizishni to'xtatish, suyuqlik ichishni cheklash va qattiq bintlash sut turib qolishini kuchaytiradi.",
    },
    {
      situation: "Birinchi marta tuqqan ayol, 20 yosh, tug'ruqdan keyingi 2-kun. Emizish vaqtida ko'krak uchlarida kuchli og'riqdan shikoyat qiladi. Emizishni kuzatishda: chaqaloq faqat ko'krak uchini qamrab oladi, lablari oldinga cho'zilgan, yonoqlari ichiga tortiladi, chaqillagan tovushlar eshitiladi. Ko'krak uchlari qizargan, yoriqlar yo'q.",
      question: "Hamshira nima qilishi kerak?",
      correct: "Onaga chaqaloqni areolani qamrab oladigan qilib qaytadan ko'krakka qo'yishda yordam berish",
      wrong: [
        "Emizishni xuddi shu holatda davom ettirish — og'riq o'z-o'zidan o'tib ketadi",
        "Og'riq yo'qolguncha chaqaloqni shishachadan oziqlantirishga o'tkazish",
        "Har bir ko'krak bilan emizish davomiyligini 5 daqiqagacha cheklash",
      ],
      explanation: "Ko'krakka noto'g'ri qo'yish belgilari tasvirlangan: chaqaloq og'zining burchagiga jimjiloq kiritib, ehtiyotkorlik bilan ko'krakdan ajratiladi va og'zi keng ochiq bo'lib, ko'krak uchini areolaning katta qismi bilan birga qamrab oladigan qilib qaytadan ko'krakka qo'yiladi. To'g'ri qamrab olish — ko'krak uchlari yorilishi va laktostazning asosiy profilaktikasi.",
    },
    {
      situation: "Tuqqan ayol, 28 yosh, tug'ruqdan keyingi 2-kun, chaqaloq bilan birga yotiladigan palatada. Chaqaloq sog'lom, muddatida tug'ilgan, ko'krak suti bilan oziqlanmoqda. Ona hamshiradan chaqaloqni qanchalik tez-tez emizish kerakligini va emizishda tungi tanaffus qilish kerakmi, deb so'raydi.",
      question: "Hamshiraning qaysi javobi JSST tavsiyalariga mos keladi?",
      correct: "Chaqaloq talab qilganda, kunduzi ham, kechasi ham, tungi tanaffussiz emizish",
      wrong: [
        "Qat'iy har 3 soatda emizish, 6 soatlik tungi tanaffus qilish",
        "Har 4 soatda emizish, kechasi esa emizish o'rniga suv yoki glyukoza berish",
        "Sutkasiga 6 marta, har bir ko'krak bilan 10 daqiqadan emizish",
      ],
      explanation: "JSST va YuNISEF talab bo'yicha, tungi emizishlarni ham o'z ichiga olgan holda, chastotasi va davomiyligini cheklamay emizishni tavsiya etadi; tungi emizishlar prolaktin ishlab chiqarilishini kuchaytiradi va laktatsiyani qo'llab-quvvatlaydi. Sog'lom, muddatida tug'ilgan chaqaloqqa tibbiy ko'rsatmalarsiz suv, glyukoza va sun'iy aralashmalar berilmaydi.",
    },

    // ===== Homiladorlik patologiyasi =====
    {
      question: "Preeklampsiyaning asosiy klinik belgilariga nimalar kiradi?",
      correct: "Arterial gipertenziya, proteinuriya, shishlar",
      wrong: [
        "Arterial gipotenziya, glyukozuriya, isitma",
        "Taxikardiya, anemiya, sariqlik",
        "Ich ketishi, qusish, tana haroratining pasayishi",
      ],
      explanation: "Preeklampsiya homiladorlikning 20-haftasidan keyin arterial bosimning 140/90 mm sim. ust. va undan yuqori bo'lishi hamda proteinuriya bilan namoyon bo'ladi.",
    },
    {
      question: "Eklampsiya tutqanoqlarining oldini olish va davolashda tanlov preparati qaysi?",
      correct: "Magniy sulfat",
      wrong: [
        "Oksitotsin",
        "Furosemid",
        "Metilergometrin",
      ],
      explanation: "Magniy sulfat — JSST tavsiya etgan asosiy preparat. Uning antidoti — 10% li kalsiy glyukonat eritmasi.",
    },
    {
      question: "Gestatsion arterial gipertenziya — bu:",
      correct: "Homiladorlikning 20-haftasidan keyin birinchi marta aniqlangan, sezilarli proteinuriyasiz AQBning ≥140/90 mm sim. ust. gacha ko'tarilishi",
      wrong: [
        "Homiladorlikdan oldin yoki homiladorlikning 20-haftasigacha aniqlangan AQBning ≥140/90 mm sim. ust. gacha ko'tarilishi",
        "Homiladorlikning 20-haftasidan keyin birinchi marta aniqlangan, ≥0,3 g/sutka proteinuriya bilan birga kechadigan AQBning ≥140/90 mm sim. ust. gacha ko'tarilishi",
        "Hushdan ketish bilan kechadigan tutqanoq xuruji bilan birga kuzatiladigan AQBning ≥140/90 mm sim. ust. gacha ko'tarilishi",
      ],
      explanation: "Gestatsion arterial gipertenziya birinchi marta 20 haftadan keyin paydo bo'ladi va sezilarli proteinuriya bilan kechmaydi. Homiladorlikdan oldin yoki 20 haftagacha aniqlangan arterial gipertenziya surunkali deb baholanadi, arterial gipertenziyaning proteinuriya bilan birga kelishi esa preeklampsiya deb baholanadi.",
    },
    {
      question: "HELLP-sindrom — bu quyidagilarning birikmasi:",
      correct: "Gemoliz, jigar fermentlarining oshishi va trombotsitopeniya",
      wrong: [
        "Gipertenziya, generalizatsiyalangan shishlar, proteinuriya va oliguriya",
        "Giperglikemiya, qondagi lipidlar darajasining oshishi va leykotsitoz",
        "Gipovolemiya, leykopeniya va qondagi umumiy oqsil darajasining pasayishi",
      ],
      explanation: "HELLP — Hemolysis (gemoliz), Elevated Liver enzymes (jigar fermentlarining oshishi), Low Platelets (trombotsitopeniya); bu preeklampsiyaning og'ir, hayot uchun xavfli asoratidir.",
    },
    {
      question: "I trimestrda homilador ayolga anemiya tashxisi gemoglobin quyidagi chegaraviy darajadan past bo'lganda qo'yiladi:",
      correct: "110 g/l",
      wrong: [
        "130 g/l",
        "120 g/l",
        "90 g/l",
      ],
      explanation: "JSST mezonlari va Rossiya Federatsiyasi Sog'liqni saqlash vazirligining klinik tavsiyalariga ko'ra homilador ayolda I (va III) trimestrda gemoglobin 110 g/l dan past bo'lganda anemiya tashxisi qo'yiladi; 120 g/l — homilador bo'lmagan ayollar uchun normaning quyi chegarasi.",
    },
    {
      question: "Gestatsion qandli diabetni faol aniqlash uchun 75 g glyukoza bilan peroral glyukozaga tolerantlik testini o'tkazishning eng maqbul muddati:",
      correct: "24–28 hafta",
      wrong: [
        "6–10 hafta",
        "12–14 hafta",
        "36–38 hafta",
      ],
      explanation: "Peroral glyukozaga tolerantlik testi uglevod almashinuvi buzilishlari ilgari aniqlanmagan barcha homilador ayollarga 24–28 haftada o'tkaziladi (32 haftagacha ruxsat etiladi); I trimestrda nahorga venoz plazmadagi glyukoza aniqlanadi.",
    },
    {
      question: "Muddatidan oldingi tug'ruq deb quyidagi muddatdagi tug'ruqqa aytiladi:",
      correct: "22 hafta 0 kun – 36 hafta 6 kun",
      wrong: [
        "12 hafta 0 kun – 21 hafta 6 kun",
        "37 hafta 0 kun – 41 hafta 6 kun",
        "42 hafta 0 kun va undan ortiq",
      ],
      explanation: "Muddatidan oldingi tug'ruq — 22 0/7–36 6/7 haftalik muddatdagi tug'ruq. Homiladorlikning 22 haftagacha uzilishi — homila tushishi, 37–41 6/7 haftadagi tug'ruq — o'z vaqtidagi tug'ruq, 42 hafta va undan keyingi tug'ruq — kechikkan tug'ruq.",
    },
    {
      question: "Muddatidan oldingi tug'ruq xavfi bo'lganda tokoliz uchun qo'llaniladigan preparatlarga quyidagi kiradi:",
      correct: "Nifedipin",
      wrong: [
        "Oksitotsin",
        "Mizoprostol",
        "Metilergometrin",
      ],
      explanation: "Tokoliz uchun kalsiy kanallari blokatori nifedipin, atosiban va geksoprenalin qo'llaniladi; oksitotsin, mizoprostol va metilergometrin esa, aksincha, bachadonning qisqarish faolligini kuchaytiradi.",
    },
    {
      question: "Muddatidan o'tgan homiladorlik deb quyidagi muddatdagi homiladorlik hisoblanadi:",
      correct: "42 hafta va undan ko'p",
      wrong: [
        "38 hafta va undan ko'p",
        "40 hafta va undan ko'p",
        "41 hafta va undan ko'p",
      ],
      explanation: "42 hafta 0 kun va undan ortiq (294 kun va undan ortiq) muddatdagi homiladorlik muddatidan o'tgan hisoblanadi; 37–41 6/7 haftalik homiladorlik muddatiga yetgan homiladorlikdir.",
    },
    {
      question: "Feto-fetal transfuziya sindromi quyidagining o'ziga xos asoratidir:",
      correct: "Monoxorial ko'p homilali homiladorlik",
      wrong: [
        "Dixorial diamniotik egizaklar",
        "Homila chanoq bilan kelgan bir homilali homiladorlik",
        "Rezus-izoimmunizatsiyadagi homiladorlik",
      ],
      explanation: "Feto-fetal transfuziya sindromi faqat umumiy (monoxorial) yo'ldoshda homilalar qon aylanishi o'rtasidagi tomir anastomozlari sababli rivojlanadi; dixorial egizaklarda har bir homilaning o'z yo'ldoshi bo'ladi.",
    },
    {
      question: "Muddatiga yetgan homiladorlikda tirik homila ko'ndalang holatda bo'lganda tug'dirish usuli:",
      correct: "Rejali kesar kesish",
      wrong: [
        "Tabiiy tug'ruq yo'llari orqali tug'ruq",
        "Amniotomiyadan keyin oksitotsin bilan tug'ruqni qo'zg'atish",
        "Akusherlik qisqichlarini qo'yish",
      ],
      explanation: "Muddatiga yetgan homila ko'ndalang holatda bo'lganda tabiiy tug'ruq yo'llari orqali tug'ruq mumkin emas, shuning uchun rejali kesar kesish ko'rsatilgan; o'tkazib yuborilgan ko'ndalang holat bachadon yorilishi xavfini tug'diradi.",
    },
    {
      question: "Homila chanoq bilan kelganda tashqi akusherlik tekshiruvida bachadon tubida quyidagi aniqlanadi:",
      correct: "Qattiq, dumaloq, ballotirovka qiluvchi qism",
      wrong: [
        "Yumshoq, noto'g'ri shakldagi, ballotirovka qilmaydigan qism",
        "Homilaning yirik qismi aniqlanmaydi",
        "Homila orqasining keng yassi yuzasi",
      ],
      explanation: "Homila chanoq bilan kelganda bachadon tubida boshcha joylashadi — qattiq, dumaloq, ballotirovka qiluvchi qism; yumshoq, ballotirovka qilmaydigan dumba esa kichik chanoqqa kirish qismi ustida joylashadi.",
    },
    {
      question: "Homiladorlik davrida OIVning onadan homilaga yuqishining oldini olishning asosiy usuli:",
      correct: "Homilador ayolga antiretrovirus terapiya",
      wrong: [
        "Homilador ayolni OIV-infeksiyaga qarshi emlash",
        "Homilador ayolga odam immunoglobulinini yuborish",
        "Har bir trimestrda antibakterial terapiya",
      ],
      explanation: "Imkon qadar erta boshlangan va virus yuklamasini aniqlanmaydigan darajagacha pasaytiradigan antiretrovirus terapiya — OIV perinatal yuqishining oldini olishning asosiy chorasi; u tug'ruqda va chaqaloqda kimyoprofilaktika bilan to'ldiriladi. OIVga qarshi vaksina mavjud emas.",
    },
    {
      question: "Homilador ayolda simptomsiz bakteriuriya aniqlanganda tutiladigan taktika:",
      correct: "Shifokor ko'rsatmasi bo'yicha antibiotik bilan davolash va siydikni nazorat uchun bakteriologik ekish",
      wrong: [
        "Klinik simptomlar paydo bo'lguncha davolamasdan dinamik kuzatish",
        "Homilaga ta'sirni istisno qilish uchun davolashni tug'ruqdan keyinga qoldirish",
        "Suyuqlik iste'molini sutkasiga 1 l gacha cheklash",
      ],
      explanation: "Homilador ayollardagi simptomsiz bakteriuriya qo'zg'atuvchining sezuvchanligini hisobga olgan holda davolanishi shart, chunki davolanmasa gestatsion pielonefrit va muddatidan oldingi tug'ruq xavfini oshiradi; kursdan keyin siydik nazorat uchun bakteriologik ekiladi.",
    },
    {
      question: "UTT ma'lumotlariga ko'ra kam suvlilik tashxisi qo'yiladigan amniotik suyuqlik indeksi:",
      correct: "5 sm dan kam",
      wrong: [
        "8–15 sm",
        "20–24 sm",
        "25 sm dan ko'p",
      ],
      explanation: "III trimestrda amniotik suyuqlikning normal indeksi taxminan 5–24 sm ni tashkil etadi; 5 sm dan kam qiymat kam suvlilikdan, 24–25 sm dan ko'p qiymat esa ko'p suvlilikdan dalolat beradi.",
    },
    {
      question: "Homilador ayolda gipotireozning o'rinbosar terapiyasi uchun shifokor ko'rsatmasi bo'yicha qo'llaniladigan preparat:",
      correct: "Levotiroksin natriy",
      wrong: [
        "Tiamazol",
        "Propiltiourasil",
        "Radioaktiv yod preparatlari",
      ],
      explanation: "Gipotireozda levotiroksin natriy buyuriladi, homiladorlik davrida unga bo'lgan ehtiyoj odatda ortadi. Tiamazol va propiltiourasil — gipertireozni davolash uchun tireostatiklar, radioaktiv yod esa homiladorlikda qarshi ko'rsatilgan.",
    },
    {
      question: "Homilador ayolga tavsiya etiladigan toksoplazmoz profilaktikasi chorasi:",
      correct: "Faqat yaxshi termik ishlov berilgan go'sht iste'mol qilish",
      wrong: [
        "Homiladorlikning II trimestrida toksoplazmozga qarshi emlanish",
        "Har bir trimestrda antibiotiklarni kurslar bilan qabul qilish",
        "Ratsiondan sabzavot va mevalarni butunlay chiqarib tashlash",
      ],
      explanation: "Toksoplazma bilan zararlanish yetarlicha qovurilmagan go'sht, yuvilmagan sabzavotlarni iste'mol qilganda va mushuk najasi bilan kontaktda sodir bo'ladi; toksoplazmozga qarshi vaksina yo'q, antibiotiklarni profilaktik qabul qilish tavsiya etilmaydi.",
    },

    // --- vaziyatli masalalar ---
    {
      situation: "Qoni Rh-manfiy bo'lgan ayol Rh-musbat chaqaloq tug'di. Homiladorlik davomida ayol qonida rezus-antitanachalar aniqlanmagan.",
      question: "Rezus-sensibilizatsiyaning oldini olish uchun nima qilinadi?",
      correct: "Tug'ruqdan keyin 72 soat ichida onaga anti-D (antirezus) immunoglobulin yuboriladi",
      wrong: [
        "Chaqaloqqa darhol qon quyiladi",
        "Hech qanday chora talab etilmaydi",
        "Onaga 72 soat ichida Rh-musbat qon quyiladi",
      ],
      explanation: "Anti-D immunoglobulin onada rezus-antitanachalar hosil bo'lishining oldini oladi va keyingi homiladorlikda homilaning gemolitik kasalligini profilaktika qiladi.",
    },
    {
      situation: "Og'ir preeklampsiya tashxisi bilan ayolga venadan magniy sulfat yuborilmoqda. Navbatdagi kuzatuvda: nafas soni daqiqasiga 10 marta, tizza reflekslari aniqlanmaydi, so'nggi 4 soatda siydik miqdori 60 ml.",
      question: "Hamshiraning to'g'ri harakati qaysi?",
      correct: "Magniy sulfat yuborishni to'xtatish, shifokorga zudlik bilan xabar berish va 10% li kalsiy glyukonat tayyorlash",
      wrong: [
        "Magniy sulfat yuborish tezligini oshirish",
        "Bemorga qo'shimcha tinchlantiruvchi dori berish",
        "Hech narsani o'zgartirmay, kuzatishni davom ettirish",
      ],
      explanation: "Nafas soni daqiqasiga 16 dan kam, tizza reflekslarining yo'qolishi va diurezning soatiga 30 ml dan kam bo'lishi — magniy sulfat bilan zaharlanish belgilari.",
    },
    {
      situation: "Homilador ayol, 24 yosh, homiladorlik muddati 36 hafta, preeklampsiya bilan kasalxonaga yotqizilgan. Ko'rik vaqtida unda to'satdan yuz mushaklarining fibrillyar tortishishlari, so'ngra hushdan ketish bilan kechadigan tonik va klonik tutqanoqlar paydo bo'ldi.",
      question: "Tutqanoq xuruji vaqtida akusherkaning to'g'ri taktikasi qanday?",
      correct: "Chap yoniga yotqizish, shikastlanish va aspiratsiyadan saqlash, yordamga shifokorni chaqirish",
      wrong: [
        "Yurakni bilvosita massaj qilish va «og'izdan og'izga» usulida o'pkani sun'iy ventilyatsiya qilishni boshlash",
        "Jag'larni metall shpatel bilan kuch bilan ochish va bemorning qo'l-oyoqlarini mahkam ushlab turish",
        "Xuruj tugashini kutmasdan bemorni zudlik bilan operatsiya xonasiga olib borish",
      ],
      explanation: "Eklampsiya xuruji vaqtida bemor chap yoniga yotqiziladi, shikastlanishdan saqlanadi, nafas yo'llarining o'tkazuvchanligi ta'minlanadi va shifokor chaqiriladi; kuch bilan ushlab turish va og'izga narsalar kiritish shikast yetkazadi, qon aylanishi saqlangan holda yurak massaji esa ko'rsatilmagan.",
    },
    {
      situation: "Homilador ayol, 27 yosh, homiladorlik muddati 28 hafta, qon guruhi O(I) Rh-manfiy, eri — Rh-musbat. Homiladorlik birinchi, asoratsiz kechmoqda. Qonda rezus-antitanachalar aniqlanmagan.",
      question: "Shifokor ko'rsatmasi bo'yicha bemorga qanday tadbir ko'rsatilgan?",
      correct: "Antirezus immunoglobulin D yuborish",
      wrong: [
        "Antitanachalarni chiqarib tashlash uchun plazmaferez",
        "Homilaga bachadon ichida qon quyish",
        "Tibbiy ko'rsatmalarga ko'ra homiladorlikni to'xtatish",
      ],
      explanation: "Turmush o'rtog'i Rh-musbat bo'lgan, antitanachalari yo'q Rh-manfiy homilador ayolga izosensibilizatsiyaning oldini olish uchun 28 haftada antirezus immunoglobulin yuboriladi; plazmaferez va bachadon ichida qon quyish faqat homila zararlangan, rivojlanib bo'lgan sensibilizatsiyada qo'llaniladi.",
    },
    {
      situation: "Homilador ayol, 22 yosh, homiladorlik muddati 26 hafta, et uvishishi, o'ng bel sohasida og'riq, tez-tez va og'riqli siydik ajratishdan shikoyat qiladi. Tana harorati 38,7 °C, urib ko'rish simptomi o'ng tomonda musbat. Siydikning umumiy tahlilida — leykotsituriya, bakteriuriya.",
      question: "Zararlangan buyrakdan siydik oqib chiqishini yaxshilash uchun bemorga to'shakda qanday holat tavsiya etiladi?",
      correct: "Chap yonboshda",
      wrong: [
        "O'ng yonboshda",
        "Oyoq tomoni ko'tarilgan holda chalqancha",
        "Beli ostiga valik qo'yilgan holda chalqancha",
      ],
      explanation: "Gestatsion pielonefritda pozitsion terapiya qo'llaniladi: zararlangan buyrakka qarama-qarshi yonboshda yotish (o'ng tomonlama zararlanishda — chap yonboshda) va tizza-tirsak holati; bu bachadonning siydik yo'liga bosimini kamaytiradi.",
    },
    {
      situation: "Homilador ayol, 30 yosh, homiladorlik muddati 32 hafta, mitral stenozdan aziyat chekadi. To'satdan kuchli hansirash, bo'g'ilish, pushti rangli ko'pikli balg'am bilan yo'tal paydo bo'ldi. Teri oqargan, akrosianoz, o'pkada — nam xirillashlar, nafas soni daqiqasiga 32 marta.",
      question: "Shifokor kelguncha bemorga qanday holat berish kerak?",
      correct: "Oyoqlari pastga tushirilgan holda o'tirgan yoki yarim o'tirgan holat",
      wrong: [
        "Oyoq tomoni ko'tarilgan holda chalqancha yotgan holat",
        "Yostiqsiz chalqancha yotgan holat",
        "Chap yonboshda gorizontal yotgan holat",
      ],
      explanation: "Bemorda o'pka shishi: oyoqlari pastga tushirilgan holda o'tirish yurakka venoz qon qaytishini kamaytiradi va nafas olishni yengillashtiradi, gorizontal holat va oyoqlarni ko'tarish esa kichik qon aylanish doirasidagi dimlanishni kuchaytiradi.",
    },
    {
      situation: "Homilador ayol, 25 yosh, homiladorlik muddati 9 hafta, sutkasiga 20 martadan ko'p qusish, ovqat va suvni ushlab tura olmaslik, kuchli holsizlikdan shikoyat qiladi. 2 hafta ichida tana vazni 6 kg ga kamaygan (dastlab 58 kg). Teri quruq, puls daqiqasiga 116 marta, AQB 90/60 mm sim. ust., diurez kamaygan, siydikda aseton ++++.",
      question: "Homiladorlar qusishining og'irlik darajasini aniqlang.",
      correct: "Og'ir (haddan tashqari) qusish",
      wrong: [
        "Yengil qusish",
        "O'rtacha og'irlikdagi qusish",
        "Homilador ayolning fiziologik holati",
      ],
      explanation: "Sutkasiga 20 martadan ko'p qusish, tana vaznining 5% dan ko'prog'ini yo'qotish, taxikardiya, gipotoniya, oliguriya va yaqqol ketonuriya kasalxonaga yotqizish va infuzion terapiyani talab qiladigan og'ir (haddan tashqari) qusishdan dalolat beradi.",
    },
    {
      situation: "Bemor, 29 yosh, homiladorlik muddati 10 hafta, qorin pastida to'lg'oqsimon og'riqlar va laxtali ko'p miqdordagi qonli ajralmalar shikoyati bilan olib kelindi. Ko'zgularda ko'rikda tashqi og'iz ochiq, servikal kanalda homila tuxumi elementlari aniqlanadi.",
      question: "Eng ehtimolli tashxis qaysi?",
      correct: "«Yo'ldagi» abort",
      wrong: [
        "Xavf soluvchi abort",
        "Boshlangan abort",
        "To'liq abort",
      ],
      explanation: "«Yo'ldagi» abort uchun to'lg'oqsimon og'riqlar, ko'p qon ketish, servikal kanalning ochilgani va unda ko'chgan homila tuxumining bo'lishi xos. Xavf soluvchi va boshlangan abortda og'iz yopiq yoki biroz ochilgan bo'ladi, to'liq abortda esa homila tuxumi allaqachon chiqib ketgan va qon ketish kamayadi.",
    },
    {
      situation: "Homilador ayol, 26 yosh, homiladorlik muddati 30 hafta, qorin pastida har 8–10 daqiqada takrorlanadigan muntazam to'lg'oqsimon og'riqlar shikoyati bilan keldi. Homila oldi suvlari sizib chiqmayapti. Qin orqali tekshiruvda bachadon bo'yni qisqargan, tashqi og'iz 1 barmoqni o'tkazadi.",
      question: "Homila respirator distress-sindromining oldini olish uchun shifokor ko'rsatmasi bo'yicha qaysi preparat yuboriladi?",
      correct: "Deksametazon mushak ichiga",
      wrong: [
        "Oksitotsin venaga tomchilab",
        "Furosemid mushak ichiga",
        "Geparin natriy teri ostiga",
      ],
      explanation: "Respirator distress-sindromning antenatal profilaktikasi 24–34 haftalik muddatda muddatidan oldingi tug'ruq xavfi bo'lganda kortikosteroidlar (deksametazon yoki betametazon mushak ichiga) bilan o'tkaziladi; ular homila o'pkasining yetilishini va surfaktant ishlab chiqarilishini tezlashtiradi.",
    },
    {
      situation: "Homilador ayol, 31 yosh, homiladorlik muddati 25 hafta, homiladorlikdan oldingi tana vazni indeksi 31 kg/m². 75 g glyukoza bilan peroral glyukozaga tolerantlik testi o'tkazildi: nahorga venoz plazmadagi glyukoza — 5,4 mmol/l, 1 soatdan keyin — 9,2 mmol/l, 2 soatdan keyin — 7,9 mmol/l.",
      question: "Test natijasini qanday baholash kerak?",
      correct: "Gestatsion qandli diabet",
      wrong: [
        "Glyukozaga normal tolerantlik",
        "Manifest qandli diabet",
        "Homiladorlarning buyrak glyukozuriyasi",
      ],
      explanation: "Gestatsion qandli diabet tashxisi nahorga venoz plazmadagi glyukoza ≥5,1 mmol/l (lekin <7,0), 1 soatdan keyin ≥10,0 yoki 2 soatdan keyin ≥8,5 mmol/l bo'lganda qo'yiladi — bitta ko'rsatkich yetarli. Manifest diabet tashxisi nahorgi glyukoza ≥7,0 mmol/l bo'lganda qo'yiladi.",
    },
    {
      situation: "Qayta homilador ayol, 30 yosh, homiladorlik muddati 19 hafta, shikoyati yo'q. Anamnezida 18 va 20 haftada tez va kuchli og'riqlarsiz kechgan ikkita o'z-o'zidan homila tushishi bor. Transvaginal UTTda bachadon bo'yni uzunligi 18 mm, ichki og'izning voronkasimon kengayishi bor, bachadon tonusi oshmagan.",
      question: "Eng ehtimolli tashxis qaysi?",
      correct: "Istmiko-servikal yetishmovchilik",
      wrong: [
        "Yo'ldoshning oldinda kelishi",
        "Yo'ldosh yetishmovchiligi",
        "Ko'p suvlilik",
      ],
      explanation: "Anamnezda II trimestrda homilaning og'riqsiz yo'qotilishi hamda 24 haftagacha bachadon bo'ynining 25 mm va undan kamgacha qisqarishi va ichki og'izning kengayishi istmiko-servikal yetishmovchilikka xos; uni korreksiya qilish uchun serklyaj yoki akusherlik pessariysi qo'llaniladi.",
    },
    {
      situation: "Homilador ayol, 23 yosh, homiladorlik muddati 28 hafta, holsizlik, tez charchash, bosh aylanishi, bo'r yegisi kelishidan shikoyat qiladi. Teri va shilliq qavatlar oqargan, tirnoqlar mo'rt. Gemoglobin 94 g/l, zardobdagi ferritin pasaygan. Shifokor ichiladigan temir preparatini buyurdi.",
      question: "Hamshira bemorga preparatni qabul qilish bo'yicha qanday tavsiya berishi kerak?",
      correct: "Preparatni choy, qahva yoki sut bilan ichmaslik",
      wrong: [
        "Preparatni antatsidlar bilan bir vaqtda qabul qilish",
        "Yaxshiroq so'rilishi uchun preparatni sut bilan ichish",
        "Kalsiy preparatlari bilan birga qabul qilish",
      ],
      explanation: "Choy va qahvadagi taninlar, sutdagi kalsiy va antatsidlar temirning so'rilishini kamaytiradi, shuning uchun preparat suv bilan ichiladi va ulardan alohida qabul qilinadi; bemor najasning to'q rangga bo'yalishi mumkinligi haqida ham ogohlantiriladi.",
    },

    // ===== Tug'ruq patologiyasi, qon ketishlar va shoshilinch holatlar =====
    {
      question: "Tug'ruqdan keyingi qon ketish sabablarini tavsiflovchi «4T» konsepsiyasi quyidagilarni o'z ichiga oladi:",
      correct: "Tonus, travma, to'qima, trombin",
      wrong: [
        "Tonus, travma, temperatura, tromboz",
        "Tonus, tromboz, to'qima, toksikoz",
        "Travma, to'qima, taxikardiya, trombin",
      ],
      explanation: "Tug'ruqdan keyingi qon ketish sabablari «4T» ga birlashtiriladi: bachadon tonusining buzilishi (eng ko'p uchraydigani), tug'ruq yo'llarining shikastlanishi (travma), yo'ldosh to'qimasining ushlanib qolishi va qon ivishining buzilishlari (trombin).",
    },
    {
      question: "Sodir bo'lgan bachadon yorilishi uchun qaysi belgi xos?",
      correct: "To'lg'oqlarning to'xtashi va qorin devori ostida homila qismlarining paypaslanishi",
      wrong: [
        "Shiddatli to'lg'oqlar va bachadon kontraksion halqasining baland, qiyshiq joylashuvi",
        "Pastki segmentning og'riqliligi va siydik ajratishning qiyinlashishi",
        "Tirishqoq to'lg'oqlar va kateterlashda siydikda qon aralashmasi",
      ],
      explanation: "Sodir bo'lgan yorilishda to'lg'oqlar to'xtaydi, homila qorin bo'shlig'iga chiqadi va qorin devori ostida paypaslanadi, homila yurak urishi yo'qoladi, shok kuchayadi. Baland kontraksion halqa va og'riqli pastki segment — yorilish xavfi belgilari, siydikda qon — boshlangan yorilish belgisi.",
    },
    {
      question: "Vasten belgisi quyidagini tashxislash uchun qo'llaniladi:",
      correct: "Klinik tor chanoq",
      wrong: [
        "Yo'ldoshning ajralishi",
        "Bachadon bo'ynining ochilishi",
        "Yo'ldoshning oldinda kelishi",
      ],
      explanation: "Kaft qov bo'ylab oldinda yotgan boshchaga sirpantiriladi: agar boshchaning old yuzasi simfiz sathidan yuqorida bo'lsa (belgi musbat), boshcha va chanoq o'rtasida nomuvofiqlik bor — klinik tor chanoq. Yo'ldoshning ajralishi Shryoder, Alfeld, Kyustner–Chukalov belgilari bo'yicha aniqlanadi.",
    },
    {
      question: "Tug'ruq faoliyatining birlamchi sustligi uchun quyidagi xos:",
      correct: "Tug'ruqning boshidanoq kuchsiz, qisqa va siyrak to'lg'oqlar",
      wrong: [
        "Ochilish davrining oxirida avval yaxshi bo'lgan to'lg'oqlarning susayishi",
        "Bachadonning turli qismlarida turli kuchdagi og'riqli to'lg'oqlar",
        "Tez-tez bo'ladigan kuchli to'lg'oqlar va bachadon bo'ynining juda tez ochilishi",
      ],
      explanation: "Birlamchi sustlikda tug'ruqning boshidanoq to'lg'oqlar kuchi, davomiyligi va chastotasi bo'yicha yetarli bo'lmaydi, bachadon bo'ynining ochilishi sekinlashadi. Avval normal bo'lgan to'lg'oqlarning susayishi — ikkilamchi sustlik, notekis og'riqli to'lg'oqlar — diskoordinatsiya.",
    },
    {
      question: "Shiddatli tug'ruqning ona uchun eng xarakterli asorati:",
      correct: "Bachadon bo'yni, qin va oraliqning chuqur yirtilishlari",
      wrong: [
        "Uzoq suvsiz davr tufayli xorioamnionit",
        "Boshchaning chanoqda uzoq turib qolishi tufayli siydik-tanosil oqmalari",
        "Bachadon bo'yni oldingi labining qisilishi va shishi",
      ],
      explanation: "Shiddatli tug'ruqda homila tayyorlanmagan tug'ruq yo'llari bo'ylab tez harakatlanadi, bu yumshoq to'qimalarning chuqur yirtilishlari va qon ketishga olib keladi. Xorioamnionit va oqmalar esa, aksincha, cho'zilgan tug'ruqqa xos.",
    },
    {
      question: "DVS-sindromning boshlang'ich fazasi — bu:",
      correct: "Giperkoagulyatsiya",
      wrong: [
        "Gipokoagulyatsiya",
        "Fibrinolizning faollashuvi",
        "Afibrinogenemiya",
      ],
      explanation: "DVS-sindrom giperkoagulyatsiya va mikrotromblar hosil bo'lishi bilan boshlanadi; so'ngra ivish omillarining sarflanishi va fibrinolizning faollashuvi tufayli ivimaydigan qon bilan qon ketishga olib keladigan gipokoagulyatsiya rivojlanadi.",
    },
    {
      question: "Akusherlik qon ketishida to'shak yonida o'tkaziladigan Li–Uayt testi quyidagini taxminiy baholash imkonini beradi:",
      correct: "Qonning ivish vaqti",
      wrong: [
        "Gemoglobin darajasi",
        "Aylanib yuruvchi qon hajmi",
        "Qon guruhi va rezus-omil",
      ],
      explanation: "Venoz qon quruq probirkaga olinadi va laxta hosil bo'lish vaqti qayd etiladi; ivish vaqtining uzayishi yoki bo'sh, tez erib ketadigan laxta koagulopatiyadan dalolat beradi.",
    },
    {
      question: "Tug'ruqdan keyingi qon ketishda traneksam kislotasi quyidagi vaqtda yuborilganda eng samarali bo'ladi:",
      correct: "Qon ketish boshlanganidan keyingi dastlabki 3 soat ichida",
      wrong: [
        "Faqat qon ketish to'xtagandan keyin, qaytalanishning oldini olish uchun",
        "Qon ketish boshlanganidan kamida 6 soat o'tgach",
        "Kamida 2 litr kristalloidlar quyilgandan keyin",
      ],
      explanation: "JSST tavsiyalari va klinik tavsiyalarga ko'ra traneksam kislotasi shifokor ko'rsatmasi bo'yicha venaga imkon qadar erta, qon ketish boshlanganidan keyin 3 soat ichida yuboriladi; kechroq yuborilganda foydasi isbotlanmagan.",
    },
    {
      question: "Tug'ruqdan keyingi massiv qon ketishda qanday venoz yo'l ta'minlanishi kerak?",
      correct: "Katta diametrli ikkita periferik kateter (14–16 G)",
      wrong: [
        "Kichik diametrli bitta periferik kateter (22–24 G)",
        "Har qanday infuziya boshlanishidan oldin o'mrov osti venasini kateterlash",
        "Venoz yo'lsiz preparatlarni mushak ichiga yuborish",
      ],
      explanation: "Tez infuziya va transfuziya uchun 14–16 G li ikkita periferik kateter o'rnatiladi; ingichka kateter orqali infuziya tezligi yetarli bo'lmaydi, markaziy venani kateterlash esa infuzion terapiya boshlanishini kechiktirmasligi kerak.",
    },
    {
      question: "Zamonaviy klinik tavsiyalarga ko'ra kesar kesishda antibiotikoprofilaktika quyidagi vaqtda o'tkaziladi:",
      correct: "Teri kesilishidan 30–60 daqiqa oldin",
      wrong: [
        "Faqat homila chiqarib olingandan va kindik tizimchasi qisilgandan keyin",
        "Operatsiyadan keyin 5–7 kunlik kurs bilan",
        "Faqat operatsiyadan keyin harorat ko'tarilganda",
      ],
      explanation: "Antibiotikni teri kesilishidan 30–60 daqiqa oldin yuborish endometrit va jarohat infeksiyasi chastotasini kindik tizimchasi qisilgandan keyin yuborishga qaraganda samaraliroq kamaytiradi; profilaktika uchun operatsiyadan keyingi uzoq kurslar kerak emas.",
    },
    {
      question: "Teri, oraliq mushaklari va to'g'ri ichakning tashqi sfinkteri shikastlangan, lekin uning shilliq qavati shikastlanmagan oraliq yirtilishi quyidagi darajaga kiradi:",
      correct: "III daraja",
      wrong: [
        "I daraja",
        "II daraja",
        "IV daraja",
      ],
      explanation: "I daraja — teri va qin shilliq qavatining shikastlanishi, II — oraliq mushaklarining ham shikastlanishi, III — anal sfinkterning shikastlanishi, IV — qo'shimcha ravishda to'g'ri ichak shilliq qavatining shikastlanishi. III–IV darajali yirtilishlarni shifokor tikadi.",
    },
    {
      question: "O'rta-lateral epiziotomiyaning perineotomiyaga (o'rta kesmaga) nisbatan afzalligi:",
      correct: "III–IV darajali yirtilishga kamroq o'tadi",
      wrong: [
        "Qon yo'qotish kamroq va jarohatni tikish osonroq",
        "Tezroq bitadi va tug'ruqdan keyin og'riq kamroq bo'ladi",
        "Bitgandan keyin dispareuniya kamroq uchraydi",
      ],
      explanation: "O'rta kesma anal sfinkter va to'g'ri ichakka qarab oson davom etadi, shuning uchun o'rta-lateral epiziotomiya afzal; perineotomiyada esa, aksincha, qon kamroq ketadi, jarohat osonroq tikiladi va tezroq bitadi.",
    },
    {
      question: "Akusherlik qisqichlarini qo'yish uchun majburiy shart:",
      correct: "Bachadon og'zining to'liq ochilishi",
      wrong: [
        "Butun homila pufagi",
        "Bachadon og'zining kamida 6 sm ochilishi",
        "Kichik chanoqqa kirish qismi ustida harakatchan boshcha",
      ],
      explanation: "Qisqichlar va vakuum-ekstraktor bachadon og'zi to'liq ochilganda, homila pufagi bo'lmaganda, boshcha kichik chanoq bo'shlig'ida yoki chiqish qismida bo'lganda, homila tirik bo'lganda va chanoq bilan boshcha o'lchamlari mos kelganda qo'llaniladi; operatsiyadan oldin akusherka siydik pufagini kateter bilan bo'shatadi.",
    },
    {
      question: "Yo'ldoshni ko'zdan kechirishda yo'ldosh qo'shimcha bo'lakchasining bachadonda qolib ketganidan quyidagi dalolat beradi:",
      correct: "Yo'ldosh chetidan pardalar bo'ylab o'tgan uzilgan tomir",
      wrong: [
        "Yo'ldoshning ona yuzasidagi oq infarktlar",
        "Kindik tizimchasining yo'ldosh diskiga chetdan birikishi",
        "Ona yuzasidagi mayda ohak cho'kmalari (petrifikatlar)",
      ],
      explanation: "Yo'ldosh tomirlari normada pardalarga o'tmaydi, shuning uchun pardalardagi uzilgan tomir bachadonda qolgan qo'shimcha bo'lakchani ko'rsatadi — bachadon bo'shlig'ini shifokor tomonidan qo'l bilan tekshirish talab etiladi. Infarktlar va petrifikatlar yo'ldosh nuqsonini bildirmaydi.",
    },
    {
      question: "Diskoordinatsiyalangan tug'ruq faoliyatida qarshi ko'rsatilgan:",
      correct: "To'lg'oqlarni kuchaytirish uchun oksitotsin yuborish",
      wrong: [
        "Epidural analgeziya o'tkazish",
        "Shifokor ko'rsatmasi bo'yicha spazmolitiklar yuborish",
        "Tug'ayotgan ayolning yonboshlab yotishi",
      ],
      explanation: "Diskoordinatsiyada bachadon qismlari qisqarishlarining muvofiqligi buziladi, uterotoniklar esa uni kuchaytirib, homila gipoksiyasi va bachadon yorilishi xavfini oshiradi; davolash — og'riqsizlantirish (afzalroq epidural analgeziya), samarasiz bo'lsa — kesar kesish.",
    },

    // --- vaziyatli masalalar ---
    {
      situation: "Qayta homilador ayol, 30 yosh, homiladorlik muddati 34 hafta. Tunda uyqu vaqtida to'satdan qindan qip-qizil qon kela boshlagan. Og'riq yo'q. Bachadon tonusi normal, palpatsiyada og'riqsiz. Homila yurak urishi daqiqasiga 140 marta.",
      question: "Qaysi patologiya haqida o'ylash kerak?",
      correct: "Yo'ldoshning oldinda kelishi (placenta previa)",
      wrong: [
        "Normal joylashgan yo'ldoshning muddatidan oldin ko'chishi",
        "Bachadon yorilishi",
        "Homila oldi suvlarining muddatidan oldin ketishi",
      ],
      explanation: "Og'riqsiz, qaytalanuvchi, qip-qizil qon ketish — yo'ldosh oldinda kelishining asosiy belgisi. Bunday bemorda operatsiya xonasidan tashqarida qin orqali tekshiruv o'tkazilmaydi.",
    },
    {
      situation: "Homiladorlikning 36-haftasi. Ayolda preeklampsiya aniqlangan. To'satdan qorinda kuchli og'riq paydo bo'lgan, bachadon taranglashgan, palpatsiyada og'riqli. Qindan oz miqdorda to'q rangli qon kelmoqda. Teri qoplamlari oqargan, puls daqiqasiga 110 marta. Homila yurak urishi daqiqasiga 100 marta.",
      question: "Taxminiy tashxisingiz qanday?",
      correct: "Normal joylashgan yo'ldoshning muddatidan oldin ko'chishi",
      wrong: [
        "Yo'ldoshning oldinda kelishi",
        "Soxta to'lg'oqlar (Brekston-Hiks qisqarishlari)",
        "O'tkir sistit",
      ],
      explanation: "Qorinda og'riq, bachadon tarangligi, homila holatining yomonlashuvi va ichki qon ketish belgilari yo'ldosh ko'chishiga xos. Preeklampsiya — asosiy xavf omillaridan biri.",
    },
    {
      situation: "Tug'ruqdan 20 daqiqa o'tgach (yo'ldosh to'liq tug'ilgan) ayolning qinidan ko'p miqdorda qon kela boshladi. Palpatsiyada bachadon yumshoq, chegaralari aniq emas, tubi kindikdan yuqorida.",
      question: "Akusherka (hamshira)ning birinchi navbatdagi harakatlari qaysi?",
      correct: "Yordam chaqirish, bachadonni tashqi massaj qilish, siydik pufagini kateterlash va shifokor ko'rsatmasi bilan uterotonik (oksitotsin) yuborish",
      wrong: [
        "Ayolni yotqizib, 1 soat davomida kuzatishni davom ettirish",
        "Qorinning pastki qismiga issiq grelka qo'yish",
        "Faqat og'riq qoldiruvchi dori yuborish",
      ],
      explanation: "Bachadon atoniyasi — tug'ruqdan keyingi qon ketishning eng ko'p uchraydigan sababi. To'la siydik pufagi bachadon qisqarishiga xalaqit beradi.",
    },
    {
      situation: "Birinchi marta tug'ayotgan ayol tug'ruqning birinchi davrida. Homila pufagi o'z-o'zidan yorildi, yashil rangli homila oldi suvlari ketdi.",
      question: "Bu belgi nimadan dalolat beradi?",
      correct: "Homila ichi gipoksiyasidan (suvlarga mekoniy aralashgan)",
      wrong: [
        "Normal holat, hech qanday chora kerak emas",
        "Ko'p suvlilikdan",
        "Ona organizmida temir moddasi ko'pligidan",
      ],
      explanation: "Yashil rangli suvlar homila kislorod yetishmovchiligi tufayli mekoniy ajratganini ko'rsatadi. Homila yurak urishini doimiy nazorat qilish va shifokorga xabar berish zarur.",
    },
    {
      situation: "Qayta tug'ayotgan ayol, 32 yosh, tug'ruq 14 soatdan beri davom etmoqda, suvlar 6 soat oldin ketgan, homilaning taxminiy vazni 4500 g. To'lg'oqlar shiddatli, keskin og'riqli, ayol bezovta. Bachadon qum soati shaklida, kontraksion halqa kindik sathida qiyshiq joylashgan, pastki segment palpatsiyada keskin og'riqli, siydik ajratish qiyinlashgan. Boshcha kichik chanoqqa kirish qismiga qisilgan, homila yurak urishi daqiqasiga 150 marta.",
      question: "Tug'ayotgan ayolda qanday asorat rivojlangan?",
      correct: "Bachadon yorilishi xavfi",
      wrong: [
        "Sodir bo'lgan bachadon yorilishi",
        "Yo'ldoshning muddatidan oldin ko'chishi",
        "Tug'ruq faoliyatining ikkilamchi sustligi",
      ],
      explanation: "Mexanik to'siq mavjud bo'lganda shiddatli to'lg'oqlar, baland qiyshiq kontraksion halqa, haddan tashqari cho'zilgan og'riqli pastki segment va siydik ajratishning qiyinlashishi — bachadon yorilishi xavfi belgilari. Tug'ruq stimulyatsiyasini to'xtatish (agar o'tkazilayotgan bo'lsa), shifokorni chaqirish va uning ko'rsatmasi bo'yicha tug'ruq faoliyatini to'xtatib, shoshilinch kesar kesishga tayyorlash kerak.",
    },
    {
      situation: "Tug'ayotgan ayol, 35 yosh, 39 hafta, tug'ruq shiddatli. Suvlar ketganidan ko'p o'tmay, kuchli to'lg'oq vaqtida to'satdan et uvishishi, yo'tal, keskin hansirash, qo'rquv hissi, yuz sianozi paydo bo'ldi. AQB 70/40 mm sim. ust., puls daqiqasiga 130 marta, ipsimon. Bir necha daqiqadan so'ng jinsiy yo'llardan suyuq, ivimaydigan qon keta boshladi, in'eksiya joylaridan qon oqmoqda.",
      question: "Qaysi asorat eng ehtimolli?",
      correct: "Homila oldi suvlari emboliyasi",
      wrong: [
        "Eklampsiya",
        "Sodir bo'lgan bachadon yorilishi",
        "Pastki kovak vena siqilishi sindromi",
      ],
      explanation: "Tug'ruqda to'satdan hansirash, sianoz, yo'tal, et uvishishi va kollaps, DVS-sindromning tez rivojlanishi va ivimaydigan qon bilan qon ketish homila oldi suvlari emboliyasi uchun tipik. Shifokor va reanimatsiya brigadasini darhol chaqirish, kislorod berish, qon aylanishi to'xtaganda — yurak-o'pka reanimatsiyasi talab etiladi.",
    },
    {
      situation: "Qayta tug'ayotgan ayol, 28 yosh, 39 hafta, homila bosh bilan kelgan, boshcha kichik chanoqqa kirish qismi ustida harakatchan. Bachadon bo'yni 5 sm ochilganda homila oldi suvlari ketdi, qinda pulsatsiyalanuvchi kindik tizimchasi halqasi aniqlanadi. Homila yurak urishi daqiqasiga 90 marta. Shifokor chaqirilgan, operatsiya xonasi tayyorlanmoqda.",
      question: "Operatsiya boshlanguncha akusherkaning qaysi harakati to'g'ri?",
      correct: "Chanoq ko'tarilgan holat berib, boshchani qo'l bilan kindik tizimchasidan nari surib turish",
      wrong: [
        "Tushib qolgan kindik tizimchasi halqasini ehtiyotkorlik bilan homila boshchasining ortiga qaytarib kiritish",
        "Tug'ayotgan ayolni bosh tomoni ko'tarilgan holda chalqancha yotqizib, shifokorni kutish",
        "Homilaning tabiiy yo'llar orqali tug'ilishini tezlashtirish uchun oksitotsin yuborishni boshlash",
      ],
      explanation: "Kindik tizimchasining siqilishini to'xtatish uchun tug'ayotgan ayolga tizza-tirsak holati yoki Trendelenburg holati beriladi va homila shoshilinch kesar kesish yo'li bilan chiqarib olinguncha qin ichidagi qo'l bilan boshcha yuqoriga surib turiladi. Kindik tizimchasini ichkariga kiritish mumkin emas: unga qilingan manipulyatsiyalar tomirlar spazmini keltirib chiqaradi.",
    },
    {
      situation: "Homilaning taxminiy vazni 4300 g bo'lgan tug'ayotgan ayolda tug'ruqning ikkinchi davrida boshcha tug'ildi, lekin u oraliqqa zich qisilib qoldi («toshbaqa» belgisi), yelkachalar esa odatdagi ehtiyotkor tortishlarda tug'ilmayapti. Yordam (shifokor, neonatolog) chaqirilgan.",
      question: "Akusherkaning qaysi harakati to'g'ri?",
      correct: "Mak-Roberts usulini bajarish — tug'ayotgan ayolning bukilgan sonlarini qorniga yaqinlashtirish",
      wrong: [
        "Yelkachalarni itarib chiqarish uchun bachadon tubiga bosish (Kristeller usuli)",
        "Homila boshchasidan pastga qarab tortishni kuchaytirish va tezlashtirish",
        "Tug'ilgan boshchaga darhol akusherlik qisqichlarini qo'yish",
      ],
      explanation: "Yelkachalar distotsiyasida birinchi navbatda Mak-Roberts usuli (sonlarni qoringa keskin bukish) qo'llaniladi va qov usti bosimi bilan to'ldiriladi — bu oldingi yelkachaning bo'shatilishini osonlashtiradi. Bachadon tubiga bosish va boshchadan kuchli tortish qarshi ko'rsatilgan: ular yelkachaning qisilib qolishini kuchaytiradi va yelka chigalining shikastlanishiga olib keladi.",
    },
    {
      situation: "Tug'ayotgan ayol, 24 yosh, 40 hafta, tug'ruqning birinchi davri, ochilish 7 sm. Infuzomat orqali oksitotsin bilan tug'ruq stimulyatsiyasi o'tkazilmoqda. KTGda 10 daqiqada 6 ta to'lg'oq, homila yurak urishi daqiqasiga 90 martagacha pasaygan va 4 daqiqa davomida tiklanmayapti.",
      question: "Akusherkaning birinchi navbatdagi harakatlari qanday?",
      correct: "Oksitotsin infuziyasini to'xtatish, tug'ayotgan ayolni chap yonboshiga burish, shifokorni chaqirish",
      wrong: [
        "Tug'ruqni tabiiy yo'llar orqali tezroq yakunlash uchun oksitotsin infuziyasi tezligini oshirish",
        "Tug'ayotgan ayolni chalqancha yotqizib, KTG yozuvini yana 30 daqiqa davom ettirish",
        "Homila tug'ilishini tezlashtirish uchun tug'ayotgan ayolga kuchanishni taklif qilish",
      ],
      explanation: "Bachadon giperstimulyatsiyasi (10 daqiqada 5 tadan ortiq to'lg'oq) fonida homila bradikardiyasi — o'tkir gipoksiya belgisi. Oksitotsin darhol to'xtatiladi, aortokaval kompressiyani bartaraf etish uchun tug'ayotgan ayol chap yonboshiga buriladi va tokoliz hamda shoshilinch tug'dirish masalasini hal qiladigan shifokor chaqiriladi.",
    },
    {
      situation: "Qayta tug'ayotgan ayol, 30 yosh, yirik homila bilan shiddatli tug'ruq. Yo'ldosh o'z-o'zidan ajralib chiqdi, ko'zdan kechirilganda butun, pardalar to'liq. Bachadon qattiq, chegaralari yaxshi aniqlanadi. Qindan qip-qizil qon ingichka oqim bilan to'xtovsiz kelmoqda, qon laxtalar hosil qiladi.",
      question: "Qon ketishning eng ehtimolli sababi:",
      correct: "Yumshoq tug'ruq yo'llarining yirtilishi",
      wrong: [
        "Bachadon gipotoniyasi",
        "Yo'ldosh qismlarining ushlanib qolishi",
        "Koagulopatiya (DVS-sindrom)",
      ],
      explanation: "Bachadon qattiq va yaxshi qisqargan, yo'ldosh butun va laxtalar normal hosil bo'layotgan holda qip-qizil qon ketishi travmani — bachadon bo'yni, qin yoki oraliqning yirtilishini ko'rsatadi. Akusherka shifokorga xabar beradi va tug'ruq yo'llarini ko'zgularda ko'rish hamda yirtilishlarni tikishga tayyorlaydi.",
    },
    {
      situation: "Tuqqan ayol, 27 yosh, tug'ruqdan 30 daqiqa o'tgan, qon ketish davom etmoqda. Teri oqargan, sovuq yopishqoq ter, bezovtalik. Puls daqiqasiga 120 marta, AQB 80/50 mm sim. ust., nafas soni daqiqasiga 24 marta.",
      question: "Tuqqan ayolda shok indeksi nechaga teng?",
      correct: "1,5",
      wrong: [
        "0,67",
        "1,0",
        "2,4",
      ],
      explanation: "Shok indeksi — puls chastotasining sistolik AQBga nisbati: 120 : 80 = 1,5 (normada taxminan 0,5–0,7). Indeksning 1 dan yuqori bo'lishi gemorragik shokdan dalolat beradi va zudlik bilan shokka qarshi choralarni talab qiladi.",
    },
    {
      situation: "Tuqqan ayol, 26 yosh, tug'ruqdan keyingi 12-kun, emizmoqda. Et uvishishi, chap ko'krak bezida og'riqdan shikoyat qiladi, harorat 38,9 °C. Bezning yuqori-tashqi kvadrantida 4×5 sm o'lchamli og'riqli zichlashish, uning ustidagi teri giperemiyalangan, flyuktuatsiya yo'q. Sut sog'ib olingandan keyin harorat pasaymadi.",
      question: "Qaysi taktika to'g'ri?",
      correct: "Ko'krakni muntazam bo'shatish, antibiotiklar — shifokor ko'rsatmasi bo'yicha",
      wrong: [
        "Ikkala ko'krak bezidan emizish va sut sog'ishni butunlay to'xtatish",
        "Laktatsiyani bostirish uchun ko'krak bezlarini qattiq bintlab qo'yish",
        "Zichlashgan joyni ochish va drenajlashga zudlik bilan tayyorlash",
      ],
      explanation: "Sut sog'ilgandan keyin ham saqlanib qolgan isitma, giperemiya va flyuktuatsiyasiz og'riqli infiltrat laktatsion mastitni ko'rsatadi. Davolash asosi — ko'krakni samarali bo'shatish (emizish yoki sog'ish orqali) va shifokor ko'rsatmasi bo'yicha antibakterial terapiya; jarrohlik davolash faqat abssessda kerak.",
    },
    {
      situation: "Tuqqan ayol, 34 yosh, kesar kesishdan keyingi 3-kun, semizlik, oyoq venalarining varikoz kasalligi bor. Bir kun oldin chap boldirda kerib turuvchi og'riq va shish sezgan. O'rnidan turmoqchi bo'lganida to'satdan keskin hansirash, ko'krak qafasida og'riq, yo'tal, yuz va bo'yin sianozi paydo bo'ldi. Puls daqiqasiga 124 marta, AQB 90/60 mm sim. ust.",
      question: "Qaysi asorat eng ehtimolli?",
      correct: "O'pka arteriyasi tromboemboliyasi",
      wrong: [
        "Homila oldi suvlari emboliyasi",
        "Shifoxonadan tashqari pnevmoniya",
        "Tug'ruqdan keyingi endometrit",
      ],
      explanation: "Kesar kesishdan keyin xavf omillari bo'lgan tuqqan ayolda boldir chuqur venalari trombozi belgilari hamda faollashtirilganda to'satdan hansirash, ko'krakda og'riq, sianoz va gipotoniya paydo bo'lishi o'pka arteriyasi tromboemboliyasi uchun tipik. Homila oldi suvlari emboliyasi tug'ruqda yoki undan keyin darhol rivojlanadi.",
    },
    {
      situation: "Tug'ruqni qabul qilish vaqtida tug'ayotgan ayolning qoni akusherkaning ko'ziga sachradi — himoya ko'zoynagi taqilmagan edi.",
      question: "Akusherkaning qaysi birinchi harakati sanitariya qoidalariga mos keladi?",
      correct: "Ko'zni ishqalamasdan oqar suv bilan mo'l yuvish",
      wrong: [
        "Ko'zni 70% li spirt bilan namlangan salfetka bilan artish",
        "Ko'zni 3% li vodorod peroksid eritmasi bilan yuvish",
        "Ko'zni quruq steril bog'lam bilan yopib, ishni davom ettirish",
      ],
      explanation: "SanPiN 3.3686-21 ga ko'ra qon ko'zning shilliq qavatiga tushganda u ishqalamasdan suv bilan yuviladi; spirt va vodorod peroksid shilliq qavatni shikastlaydi. Avariya holati ro'yxatga olinadi va OIVning kontaktdan keyingi profilaktikasi masalasi hal qilinadi (iloji bo'lsa dastlabki 2 soat ichida, 72 soatdan kechiktirmay).",
    },

    // ===== Yangi tug'ilgan chaqaloq =====
    {
      question: "Apgar shkalasi bo'yicha yangi tug'ilgan chaqaloq qaysi belgilar asosida baholanadi?",
      correct: "Yurak urishi, nafas, mushak tonusi, reflekslar, teri rangi",
      wrong: [
        "Tana vazni, bo'yi, bosh aylanasi, ko'krak aylanasi, harorat",
        "Arterial bosim, harorat, qondagi qand, gemoglobin, diurez",
        "So'rish, uyqu, yig'lash, siydik ajratish, ich kelishi",
      ],
      explanation: "Har bir belgi 0–2 ball bilan baholanadi. Baholash tug'ilgandan keyin 1- va 5-daqiqada o'tkaziladi; 7–10 ball — qoniqarli holat.",
    },
    {
      question: "Muddatida tug'ilgan chaqaloq yetukligining belgisi:",
      correct: "Katta jinsiy lablar kichik jinsiy lablarni yopib turadi",
      wrong: [
        "Tirnoqlar barmoq uchlariga yetmaydi",
        "Kindik halqasi qovga tomon siljigan",
        "Orqa va qo'l-oyoqlarda ko'p miqdorda lanugo",
      ],
      explanation: "Yetuk, muddatida tug'ilgan bolada katta jinsiy lablar kichik jinsiy lablarni yopib turadi, o'g'il bolalarda moyaklar yorg'oqqa tushgan bo'ladi. Barmoq uchlariga yetmaydigan tirnoqlar, past joylashgan kindik halqasi va ko'p miqdordagi lanugo — chala tug'ilganlik belgilari.",
    },
    {
      question: "Muddatida tug'ilgan chaqaloqda bosh aylanasi va ko'krak aylanasining nisbati:",
      correct: "Bosh aylanasi ko'krak aylanasidan 1–2 sm katta",
      wrong: [
        "Ko'krak aylanasi bosh aylanasidan 1–2 sm katta",
        "Bosh va ko'krak aylanalari doimo teng bo'ladi",
        "Bosh aylanasi ko'krak aylanasidan 6–8 sm katta",
      ],
      explanation: "Muddatida tug'ilgan chaqaloqda bosh aylanasi 34–36 sm, ko'krak aylanasi — 32–34 sm, ya'ni bosh 1–2 sm katta bo'ladi. Bosh aylanasi sezilarli darajada katta bo'lsa, gidrotsefaliyani istisno qilish talab etiladi.",
    },
    {
      question: "Sog'lom chaqaloqda kindik qoldig'ini parvarishlashning zamonaviy («quruq») usuli quyidagini nazarda tutadi:",
      correct: "Qoldiqni antiseptiklar bilan ishlov bermasdan ochiq, quruq va toza saqlash",
      wrong: [
        "Qoldiqqa har kuni 70% li spirt va kaliy permanganatning 5% li eritmasi bilan ishlov berish",
        "Qoldiqqa 3 sutkaga zich bosuvchi doka bog'lam qo'yish",
        "Qoldiq tushib ketguncha unga kuniga 2 marta antibiotikli malham surtish",
      ],
      explanation: "«Quruq» usulda kindik qoldig'i ochiq holda saqlanadi, taglikning cheti kindikdan pastga qayiriladi, ifloslanganda esa qoldiq iliq suv va sovun bilan yuvilib, quritiladi. Statsionarda tug'ilgan sog'lom bolalarda antiseptiklar bilan muntazam ishlov berish talab etilmaydi (JSST tavsiyasi).",
    },
    {
      question: "Yangi tug'ilgan chaqaloqlar oftalmiyasining profilaktikasi uchun qo'llaniladi:",
      correct: "Eritromitsin yoki tetratsiklinli ko'z malhamini bir marta qo'yish",
      wrong: [
        "Har bir ko'zga atropinning 1% li eritmasini ikki marta tomizish",
        "Bir sutka davomida har 3 soatda ko'zlarni qaynatilgan suv bilan yuvish",
        "Har bir ko'zga deksametazonning 0,1% li eritmasini kuniga uch marta tomizish",
      ],
      explanation: "Oftalmiya (eng avvalo gonokokkli oftalmiya) profilaktikasi hayotning dastlabki soatlarida pastki qovoq ortiga eritromitsin yoki tetratsiklinli ko'z malhamini qo'yish orqali bir marta o'tkaziladi. Atropin va glyukokortikoidlar ko'z infeksiyasining profilaktikasi uchun qo'llanilmaydi.",
    },
    {
      question: "Tug'ruq zalida yangi tug'ilgan chaqaloqqa niqob orqali o'pkaning sun'iy ventilyatsiyasi (O'SV) o'tkazilganda nafaslar chastotasi:",
      correct: "Daqiqasiga 40–60 marta",
      wrong: [
        "Daqiqasiga 12–20 marta",
        "Daqiqasiga 20–30 marta",
        "Daqiqasiga 80–100 marta",
      ],
      explanation: "Yangi tug'ilgan chaqaloqqa O'SV daqiqasiga 40–60 nafas chastotasi bilan, ko'krak qafasi ekskursiyasini va yurak qisqarishlari soni (YuQS) dinamikasini nazorat qilgan holda o'tkaziladi. Daqiqasiga 12–20 marta chastota kattalardagi O'SVga mos keladi.",
    },
    {
      question: "Yangi tug'ilgan chaqaloqda reanimatsiya choralari samaradorligining asosiy mezoni:",
      correct: "Yurak qisqarishlari sonining ortishi",
      wrong: [
        "Qo'l va oyoq panjalari akrotsianozining yo'qolishi",
        "Qorachiqlarning torayishi va yorug'likka reaksiyaning paydo bo'lishi",
        "Baland ovozli yig'ining paydo bo'lishi",
      ],
      explanation: "O'pkaning sun'iy ventilyatsiyasi (O'SV) va umuman yangi tug'ilgan chaqaloq reanimatsiyasi samaradorligining asosiy ko'rsatkichi — yurak qisqarishlari sonining (YuQS) ortib borishi; aynan YuQSga qarab keyingi bosqichga o'tish to'g'risida qaror qabul qilinadi. Hayotning dastlabki daqiqalarida akrotsianoz sog'lom bolada ham saqlanishi mumkin.",
    },
    {
      question: "Sog'lom, muddatida tug'ilgan chaqaloqda tana vaznining fiziologik kamayishi normada quyidagidan oshmaydi:",
      correct: "Tug'ilgandagi vaznning 10 foizi",
      wrong: [
        "Tug'ilgandagi vaznning 3 foizi",
        "Tug'ilgandagi vaznning 15 foizi",
        "Tug'ilgandagi vaznning 20 foizi",
      ],
      explanation: "Vaznning maksimal fiziologik kamayishi hayotning 3–4-kunlarida kuzatiladi va 10% dan oshmasligi kerak. 10% dan ortiq kamayish shifokor ko'rigini va oziqlantirish samaradorligini baholashni talab qiladi.",
    },
    {
      question: "Yangi tug'ilgan chaqaloqda sariqlikning patologik xususiyatini ko'rsatuvchi belgi:",
      correct: "Sariqlikning hayotning dastlabki 24 soatida paydo bo'lishi",
      wrong: [
        "Sariqlikning hayotning 3-kunida paydo bo'lishi",
        "Sariqlikning hayotning 7–10-kunlariga kelib yo'qolishi",
        "Siydik va najasning odatiy rangi saqlanishi",
      ],
      explanation: "Fiziologik sariqlik 24 soatdan oldin paydo bo'lmaydi (odatda 2–3-kunlarda paydo bo'ladi) va muddatida tug'ilganlarda 2 hafta ichida yo'qoladi. Sariqlikning birinchi sutkada paydo bo'lishi, tez kuchayishi, cho'zilib ketishi va ahvolning yomonlashuvi — shifokor ko'rigini talab qiluvchi patologik sariqlik belgilari.",
    },
    {
      question: "Yangi tug'ilgan chaqaloqqa fototerapiya o'tkazishda hamshira albatta:",
      correct: "Bolaning ko'zlarini yorug'lik o'tkazmaydigan bog'lam bilan yopadi",
      wrong: [
        "Seansdan oldin bolaning terisiga bolalar moyi surtadi",
        "Terini yorug'likdan himoya qilish uchun bolani yo'rgakka o'raydi",
        "Fototerapiyaning butun davomida oziqlantirishni to'xtatadi",
      ],
      explanation: "Fototerapiya vaqtida bola yechintirilgan holda bo'ladi, ko'zlari yorug'lik o'tkazmaydigan bog'lam bilan himoya qilinadi, oziqlantirish davom ettiriladi, tana harorati, vazn va diurez nazorat qilinadi. Kuyish xavfi tufayli nurlantirishdan oldin teriga moy va kremlar surtilmaydi.",
    },
    {
      question: "Tug'ruqxonada yangi tug'ilgan chaqaloqlarning audiologik skriningi quyidagi usulda o'tkaziladi:",
      correct: "Otoakustik emissiyani qayd etish",
      wrong: [
        "Tonal bo'sag'aviy audiometriya",
        "Pichirlab aytilgan nutqni idrok etishni tekshirish",
        "Rinne va Veber kamerton sinamalari",
      ],
      explanation: "Audiologik skrining og'riqsiz, bola uxlab yoki tinch yotgan holatda, otoakustik emissiyani qayd etuvchi portativ asbob bilan o'tkaziladi. Tonal audiometriya, pichirlab aytilgan nutq va kamerton sinamalari bemorning faol ishtirokini talab qiladi va yangi tug'ilgan chaqaloqlarda qo'llanilmaydi.",
    },
    {
      question: "Irsiy kasalliklarga neonatal skrining uchun qon olishda:",
      correct: "Qonning birinchi tomchisi steril quruq tampon bilan artib olinadi",
      wrong: [
        "Qon tirsak bukilmasidagi venadan probirkaga olinadi",
        "Qon dog'lari test-blankning ikkala tomoniga navbatma-navbat tushiriladi",
        "Qonli test-blank isitish batareyasida quritiladi",
      ],
      explanation: "Qon tovonning yon yuzasidan olinadi, birinchi tomchi olib tashlanadi, so'ng test-blank tomchiga bir tomoni bilan shunday tegiziladiki, dog' qog'ozni bir tekis va butunlay shimdirib o'tsin. Blank xona haroratida, isitish asboblari va to'g'ri quyosh nurlaridan uzoqda, gorizontal holatda quritiladi.",
    },
    {
      question: "Milliy kalendarga ko'ra sog'lom yangi tug'ilgan chaqaloqqa virusli gepatit B ga qarshi birinchi emlash o'tkaziladi:",
      correct: "Hayotning dastlabki 24 soatida",
      wrong: [
        "Hayotning 3–7-kunlarida",
        "1 oylik yoshda",
        "3 oylik yoshda",
      ],
      explanation: "Rossiya Federatsiyasining milliy profilaktik emlashlar kalendariga ko'ra gepatit B ga qarshi vaksinaning birinchi dozasi hayotning dastlabki 24 soatida mushak ichiga, sonning oldingi-yon yuzasiga yuboriladi. 3–7-kunlarda silga qarshi emlash (BSJ) o'tkaziladi.",
    },
    {
      question: "BSJ vaksinasi yangi tug'ilgan chaqaloqqa yuboriladi:",
      correct: "Teri ichiga, chap yelka tashqi yuzasining yuqori va o'rta uchdan bir qismlari chegarasiga",
      wrong: [
        "Mushak ichiga, o'ng son o'rta uchdan bir qismining oldingi-yon yuzasiga",
        "Teri ostiga, o'ng kurak osti sohasiga, teriga spirt bilan ishlov berilgandan keyin",
        "Teri ichiga, chap bilak ichki yuzasining o'rta uchdan bir qismiga",
      ],
      explanation: "BSJ qat'iy ravishda teri ichiga, 0,1 ml hajmda, chap yelka tashqi yuzasining yuqori va o'rta uchdan bir qismlari chegarasiga hayotning 3–7-kunlarida yuboriladi. Bilakka teri ichiga Mantu sinamasi qo'yiladi, songa mushak ichiga esa gepatit B ga qarshi vaksina yuboriladi.",
    },
    {
      question: "Gemorragik kasallikning oldini olish uchun yangi tug'ilgan chaqaloqqa hayotining dastlabki soatlarida shifokor ko'rsatmasi bilan yuboriladi:",
      correct: "K vitamini preparati",
      wrong: [
        "Aminokapron kislotasi",
        "Kalsiy glyukonat",
        "Etamzilat",
      ],
      explanation: "Yangi tug'ilgan chaqaloqning gemorragik kasalligi K vitaminiga bog'liq qon ivish omillarining yetishmovchiligi bilan bog'liq, shuning uchun yangi tug'ilgan chaqaloqlarga hayotning dastlabki soatlarida mushak ichiga K vitamini preparati yuboriladi. Etamzilat, aminokapron kislotasi va kalsiy glyukonat bu omillar yetishmovchiligini bartaraf etmaydi.",
    },
    {
      question: "5 kunlikdan katta bolaga ona suti yetarli tushayotganining belgisi:",
      correct: "Sutkasiga kamida 6 marta och rangli siydik ajratish",
      wrong: [
        "Sutkasiga 2–3 marta quyuq (konsentrlangan) siydik ajratish",
        "Har bir emizishdan so'ng darhol bezovtalanish va yig'lash",
        "Tana vaznining tug'ilgandagi vazndan 10% dan ortiq kamayishi",
      ],
      explanation: "Yetarli oziqlanishdan sutkasiga 6 va undan ko'p marta och rangli siydik ajratish, muntazam sariq ich kelishi, emizishdan keyingi tinch xulq va vazn tiklangandan so'ng tana vaznining ortishi dalolat beradi. Kam siydik ajratish, emizishdan keyingi bezovtalik va vaznning 10% dan ortiq kamayishi — yetarli oziqlanmaslik belgilari.",
    },

    // --- vaziyatli masalalar ---
    {
      situation: "Sog'lom, muddatida tug'ilgan chaqaloq. Tug'ilishi bilan baqirdi, mustaqil nafas olmoqda, mushak tonusi yaxshi.",
      question: "Akusherka (hamshira)ning keyingi to'g'ri harakati qaysi?",
      correct: "Chaqaloqni quritib, onaning qorniga «teri-teriga» yotqizish, ustini issiq yopish va birinchi soat ichida ko'krakka qo'yish",
      wrong: [
        "Chaqaloqni darhol cho'miltirish va tortish",
        "Chaqaloqni onadan ajratib, bolalar bo'limiga olib ketish",
        "Nafas yo'llarini majburiy so'rib tozalash va kislorod berish",
      ],
      explanation: "«Issiq zanjir» va «teri-teriga» kontakt chaqaloqni gipotermiyadan saqlaydi va erta emizishni ta'minlaydi. Sog'lom chaqaloqda nafas yo'llarini muntazam so'rish tavsiya etilmaydi.",
    },
    {
      situation: "Bola 39 haftalik muddatda tug'ildi. Tug'ilishi bilan nurli issiqlik manbai ostiga yotqizildi, quritildi, unga to'g'ri holat berildi, taktil stimulyatsiya o'tkazildi. Mustaqil nafas yo'q, yurak qisqarishlari soni (YuQS) daqiqasiga 80 marta.",
      question: "Birinchi navbatda qanday chorani boshlash kerak?",
      correct: "Yuz niqobi orqali daqiqasiga 40–60 nafas chastotasi bilan o'pkaning sun'iy ventilyatsiyasi",
      wrong: [
        "3:1 nisbatda o'pkaning sun'iy ventilyatsiyasi bilan birga yurakning bilvosita massaji",
        "2 daqiqa davomida takroriy taktil stimulyatsiya",
        "Bolaning yuziga erkin kislorod oqimini berish",
      ],
      explanation: "Boshlang'ich choralardan keyin mustaqil nafasning yo'qligi (yoki gasping tipidagi nafas) va/yoki YuQSning daqiqasiga 100 martadan kam bo'lishi — niqob orqali o'pkaning sun'iy ventilyatsiyasiga (O'SV) ko'rsatma. Yurakning bilvosita massaji faqat samarali O'SV fonida YuQS daqiqasiga 60 martadan kam bo'lganda boshlanadi.",
    },
    {
      situation: "40 haftalik muddatda tug'ilgan chaqaloqqa niqob orqali o'pkaning sun'iy ventilyatsiyasi (O'SV) o'tkazilmoqda. Ko'krak qafasi ekskursiyasi adekvat, biroq 30 soniyalik samarali O'SVdan keyin yurak qisqarishlari soni (YuQS) daqiqasiga 50 marta.",
      question: "Reanimatsiya brigadasining keyingi taktikasi qanday?",
      correct: "3:1 nisbatda O'SV bilan birga yurakning bilvosita massajini boshlash",
      wrong: [
        "O'SVni to'xtatib, faqat ikki barmoq bilan yurakning bilvosita massajini o'tkazish",
        "O'SVni avvalgi parametrlar bilan o'zgarishsiz yana 5 daqiqa davom ettirish",
        "30:2 nisbatda O'SV bilan yurakning bilvosita massajini boshlash",
      ],
      explanation: "Adekvat O'SV fonida YuQSning daqiqasiga 60 martadan kam bo'lishi — yurakning bilvosita massajiga ko'rsatma: kompressiyalar to'sh suyagining pastki uchdan bir qismiga bajariladi va O'SV bilan 3:1 nisbatda birga olib boriladi (daqiqasiga 90 kompressiya va 30 nafas). 30:2 nisbati yangi tug'ilgan chaqaloqlar emas, kattalar reanimatsiyasida qo'llaniladi.",
    },
    {
      situation: "Bola 27 haftalik muddatda 950 g tana vazni bilan tug'ildi. Tug'ilgandan keyin u mustaqil nafas oldi, yurak qisqarishlari soni (YuQS) daqiqasiga 100 martadan ko'p. Akusherka gipotermiyaning oldini olishga tayyorlanmoqda.",
      question: "Tug'ruq zalida bu bolaning issiqlikdan himoyasini qanday to'g'ri ta'minlash kerak?",
      correct: "Quritmasdan polietilen xaltaga solish va boshiga qalpoqcha kiydirish",
      wrong: [
        "Iliq yo'rgak bilan yaxshilab quritish va bir nechta iliq yo'rgakka yo'rgaklash",
        "37 °C li iliq suvda cho'miltirish, so'ng quritib, krovatkaga yotqizish",
        "Atrofiga issiq suvli grelkalar qo'yib, ustidan iliq adyol bilan yopish",
      ],
      explanation: "Chuqur chala tug'ilgan bola tug'ilishi bilanoq quritilmasdan polietilen xalta yoki plyonkaga solinadi, boshiga qalpoqcha kiydiriladi va bola nurli issiqlik manbai ostiga joylashtiriladi. Quritish va yo'rgaklash uni sovqotishdan yetarli darajada himoya qilmaydi, grelkalar esa kuyish xavfi tufayli xavfli.",
    },
    {
      situation: "5 kunlik qiz bola, muddatida 3400 g vazn bilan tug'ilgan. Ona xavotirda: bolaning ko'krak bezlari simmetrik kattalashgan, ulardan oqish suyuqlik ajralmoqda, ustidagi teri o'zgarmagan; yo'rgakda — jinsiy yoriqdan chiqqan, qon izlari bo'lgan shilliq ajralmalar. Bolaning ahvoli qoniqarli, harorati 36,7 °C, faol emmoqda.",
      question: "Hamshiraning taktikasi qanday?",
      correct: "Onaga bu jinsiy kriz ekanligini tushuntirish va sekretni siqib chiqarishni taqiqlash",
      wrong: [
        "Mastitning oldini olish uchun bolaning ko'krak bezlaridan sekretni sog'ib olish",
        "Infeksiyaning oldini olish uchun o'z tashabbusi bilan antibiotik yuborish",
        "Simptomlar yo'qolguncha bolani sun'iy oziqlantirishga o'tkazish",
      ],
      explanation: "Ko'krak bezlarining dag'allashishi va metrorragiya bilan kechuvchi deskvamativ vulvovaginit — ona estrogenlari ta'sirida yuzaga keladigan jinsiy (gormonal) kriz ko'rinishlari; davolash talab etilmaydi, gigiyenik parvarish yetarli. Sekretni siqib chiqarish bezni jarohatlaydi va mastitga olib kelishi mumkin.",
    },
    {
      situation: "Muddatida tug'ilgan 2 kunlik bola. Ko'krak terisida, qo'l-oyoqlarning yozuvchi yuzalarida va dumbalarida markazida zich kulrang-sarg'ish papulalari bo'lgan qizil dog'lar paydo bo'lgan. Kaftlar, oyoq kaftlari va shilliq qavatlarda toshma yo'q. Ahvoli qoniqarli, harorati 36,8 °C, faol emmoqda.",
      question: "Bolada qaysi holat ehtimoli eng katta?",
      correct: "Yangi tug'ilgan chaqaloqlarning toksik eritemasi",
      wrong: [
        "Yangi tug'ilgan chaqaloqlar pemfigusi",
        "Ter toshmasi",
        "Taglik dermatiti",
      ],
      explanation: "Toksik eritema — tranzitor holat: 2–5-kunlarda markazida papulalari bo'lgan eritematoz dog'lar paydo bo'ladi, kaftlar, oyoq kaftlari va shilliq qavatlar zararlanmaydi, umumiy ahvol buzilmaydi, toshma o'z-o'zidan o'tib ketadi. Pemfigusda bo'shashgan pufaklar va intoksikatsiya kuzatiladi, ter toshmasida — qizib ketganda tabiiy burmalarda mayda toshma toshadi, taglik dermatiti esa taglik sohasi bilan chegaralanadi.",
    },
    {
      situation: "Muddatida tug'ilgan 3 kunlik bola, tug'ilgandagi vazni 3600 g, bugun — 3290 g. Onada hozircha sut kam. Bola bezovta, shilliq qavatlari quruq, tana harorati 38,4 °C. Ko'rikda kasallikning boshqa belgilari aniqlanmadi.",
      question: "Hamshiraning qaysi harakati eng to'g'ri?",
      correct: "Bolaning ustini ochish, ko'krakka tez-tez qo'yish va shifokorga xabar berish",
      wrong: [
        "Bolani iliq adyolga o'rab, issiqlik manbai ostiga yotqizish",
        "O'z qarori bilan isitma tushiruvchi vosita yuborish",
        "Tana harorati normallashguncha emizishni to'xtatish",
      ],
      explanation: "Tranzitor isitma 3–5-kunlarda suyuqlik yetarli tushmaganda va qizib ketganda yuzaga keladi: bola ortiqcha kiyimdan xalos qilinadi, ko'krakka tez-tez qo'yish ta'minlanadi, qo'shimcha suyuqlik faqat shifokor ko'rsatmasi bilan beriladi. Isitma infeksiya belgisi bo'lishi mumkinligi sababli, bu haqda albatta shifokorga xabar beriladi.",
    },
    {
      situation: "Bola 38 haftalik muddatda qoni Rh-manfiy bo'lgan onadan tug'ildi, onada homiladorlik davomida rezus-antitanachalar aniqlangan; bolaning qoni Rh-musbat. 6 soatlik yoshida terining sarg'ayishi va rangparlik qayd etildi, jigar qovurg'a ravog'i chetidan 3 sm chiqib turibdi. Bola lanj, istamay emadi.",
      question: "Yangi tug'ilgan chaqaloqda qaysi holat ehtimoli eng katta?",
      correct: "Yangi tug'ilgan chaqaloqning gemolitik kasalligi",
      wrong: [
        "Fiziologik (tranzitor) sariqlik",
        "Ko'krak suti bilan oziqlantirishga bog'liq sariqlik",
        "Yangi tug'ilgan chaqaloqning gemorragik kasalligi",
      ],
      explanation: "Rezus-sensibilizatsiyalangan onaning bolasida hayotning birinchi sutkasidagi sariqlikning rangparlik (anemiya) va jigar kattalashuvi bilan birga kelishi yangi tug'ilgan chaqaloqning gemolitik kasalligiga xos bo'lib, bu haqda shifokorga zudlik bilan xabar berish zarur. Fiziologik sariqlik 24 soatdan oldin paydo bo'lmaydi hamda anemiya va gepatomegaliya bilan kechmaydi.",
    },
    {
      situation: "Muddatida tug'ilgan 3 kunlik bola. Ona tug'ruqdan keyin bolaga K vitamini yuborilishidan bosh tortgan. Bugun «qahva quyqasi» aralash qusish, qora qatronsimon ich kelishi, vaksina in'eksiyasi joyidan qon sizishi paydo bo'ldi. Onaning ko'krak uchlarida yoriqlar yo'q, bolada sariqlik yo'q.",
      question: "Ushbu manzara qaysi kasallikka xos?",
      correct: "Yangi tug'ilgan chaqaloqning gemorragik kasalligi",
      wrong: [
        "Yangi tug'ilgan chaqaloqning gemolitik kasalligi",
        "Tug'ruqda ona qonini yutib yuborish sindromi",
        "Ichakning tranzitor katari",
      ],
      explanation: "Gemorragik kasallikning klassik shakli K vitamini olmagan bolalarda 2–7-kunlarda rivojlanadi va melena, qonli qusish, kindik yarasi va in'eksiya joylaridan qon ketishi bilan namoyon bo'ladi. Ona qonini yutib yuborganda in'eksiya joylaridan qon sizishi bo'lmaydi, ichakning tranzitor katari esa qon ketishi bilan kechmaydi.",
    },
    {
      situation: "3 kunlik o'g'il bola, muddatida tug'ilgan. Ona siydik ajratgandan keyin yo'rgakda g'isht-qizil rangli dog'larni payqadi, siydik biroz loyqa. Bolaning ahvoli qoniqarli, harorati 36,6 °C, faol emmoqda, tana vazni 6% ga kamaygan.",
      question: "Bolada qaysi holat ehtimoli eng katta?",
      correct: "Siydik kislotali infarkt",
      wrong: [
        "Buyrak rivojlanish nuqsonida gematuriya",
        "Siydik yo'llari infeksiyasi",
        "Qonli ajralmalar bilan kechuvchi jinsiy kriz",
      ],
      explanation: "Siydik kislotali infarkt — hayotning dastlabki kunlarida buyrak kanalchalarida siydik kislotasi kristallarining to'planishi: siydik loyqa bo'lib, yo'rgakda g'isht-qizil dog'lar qoldiradi, bolaning ahvoli buzilmaydi. U birinchi hafta oxiriga kelib o'tib ketadi; oldini olish uchun ko'krakka tez-tez qo'yish ta'minlanadi.",
    },
    {
      situation: "Yangi tug'ilgan chaqaloqlar bo'limi hamshirasida ertalab smenadan oldin tumov, tomoq og'rig'i, 37,6 °C harorat va labda gerpetik toshmalar paydo bo'ldi.",
      question: "To'g'ri taktika qanday?",
      correct: "Katta hamshiraga xabar berish va tuzalguncha yangi tug'ilgan chaqaloqlar bilan ishlamaslik",
      wrong: [
        "Tibbiy niqobni har 2 soatda almashtirib, smenaga chiqish",
        "Smenaga chiqib, har bir muloqotdan oldin qo'llarga antiseptik bilan ishlov berish",
        "Smenaga chiqish, lekin chala tug'ilgan va kasal bolalarni parvarish qilmaslik",
      ],
      explanation: "O'tkir respirator infeksiya belgilari, gerpetik toshmalar yoki terining yiringli zararlanishi bo'lgan xodimlar tuzalgunlariga qadar yangi tug'ilgan chaqaloqlar bilan ishlashga qo'yilmaydi. Niqob va qo'llarga ishlov berish infeksiyaning bolaga yuqishini istisno qilmaydi.",
    },

    // ===== Ginekologiya: tekshirish usullari, hayz sikli, yallig'lanish kasalliklari =====
    {
      question: "Normal hayz siklining davomiyligi qancha?",
      correct: "21–35 kun",
      wrong: [
        "7–14 kun",
        "14–20 kun",
        "40–60 kun",
      ],
      explanation: "Hayz siklining birinchi kuni — hayz qoni kela boshlagan kun. Hayz qon ketishining o'zi odatda 3–7 kun davom etadi.",
    },
    {
      question: "Amenoreya deb nimaga aytiladi?",
      correct: "Hayzning 6 oy va undan ortiq vaqt davomida bo'lmasligi",
      wrong: [
        "Ko'p miqdorda va uzoq davom etadigan hayz",
        "Og'riqli hayz",
        "Hayzlar oralig'idagi qon ketish",
      ],
      explanation: "Ko'p va uzoq hayz — menorragiya; og'riqli hayz — algomenoreya (dismenoreya); hayzlar oralig'idagi qon ketish — metrorragiya.",
    },
    {
      question: "Gipofiz old bo'lagining gonadotrop gormonlari sekretsiyasini gipotalamusning quyidagi gormoni rag'batlantiradi:",
      correct: "Gonadotropin-rilizing-gormon",
      wrong: [
        "Follikulostimullovchi gormon",
        "Lyuteinlovchi gormon",
        "Prolaktin (laktotrop gormon)",
      ],
      explanation: "Gonadotropin-rilizing-gormon (GnRG, lyuliberin) gipotalamus tomonidan pulsatsiyalanuvchi rejimda ajratiladi va gipofizda follikulostimullovchi (FSG) hamda lyuteinlovchi (LG) gormonlar ishlab chiqarilishini rag'batlantiradi. FSG, LG va prolaktin — gipotalamusning emas, gipofiz old bo'lagining gormonlari.",
    },
    {
      question: "Hayz siklining o'rtasida ovulyatsiyani bevosita quyidagi ishga tushiradi:",
      correct: "Lyuteinlovchi gormonning cho'qqi darajadagi ajralishi",
      wrong: [
        "Qonda estradiol darajasining keskin pasayishi",
        "Gipofiz tomonidan prolaktinning cho'qqi darajadagi ajralishi",
        "Sariq tana progesteroni darajasining oshishi",
      ],
      explanation: "Yetuk follikulning yuqori estradiol darajasi musbat qayta aloqa mexanizmi bo'yicha lyuteinlovchi gormonning (LG) ovulyator cho'qqisini keltirib chiqaradi, shundan so'ng follikul yoriladi; ovulyatsiya testlari siydikda LGni aniqlashga asoslangan. Sariq tana ovulyatsiyadan keyin hosil bo'ladi.",
    },
    {
      question: "Ikki fazali hayz siklining ikkinchi fazasida bazal haroratning ko'tarilishiga sabab:",
      correct: "Progesteronning termoregulyatsiya markaziga ta'siri",
      wrong: [
        "Estrogenlarning termoregulyatsiya markaziga ta'siri",
        "Follikulostimullovchi gormonning tuxumdonga ta'siri",
        "Prolaktinning termoregulyatsiya markaziga ta'siri",
      ],
      explanation: "Sariq tana progesteroni termogen ta'sir ko'rsatadi: ovulyatsiyadan keyin rektal harorat taxminan 0,4–0,6 °C ga ko'tariladi va hayzgacha saqlanib turadi. Ikki fazali egri chiziq ovulyatsiya sodir bo'lganidan, bir fazali egri chiziq esa anovulyator sikldan dalolat beradi.",
    },
    {
      question: "Qiz bola hayotidagi birinchi hayz shunday ataladi:",
      correct: "Menarxe",
      wrong: [
        "Telarxe",
        "Pubarxe",
        "Menopauza",
      ],
      explanation: "Menarxe pubertat davrida, odatda telarxe va pubarxedan keyin boshlanadi. Telarxe — ko'krak bezlari rivojlanishining boshlanishi, pubarxe — qovda tuk o'sishining boshlanishi, menopauza — oxirgi mustaqil hayz.",
    },
    {
      question: "Reproduktiv yoshdagi sog'lom ayolda qin ajralmasining kislotali reaksiyasi quyidagilar hisobiga saqlanadi:",
      correct: "Sut kislotasi hosil qiluvchi laktobatsillalar",
      wrong: [
        "Epiteliy glikogenini parchalovchi gardnerellalar",
        "Servikal kanal bezlarining ishqoriy sekreti",
        "Qin dahlizi katta bezlarining sekreti",
      ],
      explanation: "Laktobatsillalar (Doderleyn tayoqchalari) ko'p qavatli yassi epiteliy hujayralari glikogenini sut kislotasiga aylantiradi va pH 3,8–4,5 ni saqlab, shartli patogen flora o'sishini bostiradi. Gardnerellalar va boshqa anaeroblarning ortiqcha ko'payishi esa, aksincha, bakterial vaginozga xos.",
    },
    {
      question: "Qindagi yallig'lanish jarayoniga qin ajralmasi tozaligining quyidagi darajalari mos keladi:",
      correct: "III va IV darajalar",
      wrong: [
        "I va II darajalar",
        "Faqat I daraja",
        "Faqat II daraja",
      ],
      explanation: "I–II darajada Doderleyn tayoqchalari ustunlik qiladi, reaksiya kislotali, leykotsitlar kam — bu norma varianti. III–IV darajada Doderleyn tayoqchalari kam yoki yo'q, leykotsitlar va kokk (patogen) florasi ko'p, reaksiya kuchsiz ishqoriy yoki ishqoriy.",
    },
    {
      question: "Bachadon bo'ynini sitologik tekshirish (onkotsitologiya) uchun material olinadi:",
      correct: "Bachadon bo'ynining qin qismidan va servikal kanaldan",
      wrong: [
        "Faqat qinning orqa gumbazidan paxta tampon bilan",
        "Bachadon bo'shlig'idan bachadon zondi yordamida",
        "Qinning old devori orqali massaj qilingandan keyin uretradan",
      ],
      explanation: "Surtma Eyr shpateli va sitocho'tka (yoki kombinatsiyalangan cho'tka) bilan bachadon bo'yni saratoni ko'pincha paydo bo'ladigan transformatsiya zonasidan olinadi. U ko'zgularda ko'rik vaqtida, bimanual tekshiruvdan oldin va bachadon bo'yniga sirka kislotasi hamda Lyugol eritmasi bilan ishlov berishdan oldin olinadi.",
    },
    {
      question: "Kresloda ginekologik tekshiruvning to'g'ri ketma-ketligini ko'rsating:",
      correct: "Tashqi jinsiy a'zolarni ko'zdan kechirish, ko'zgularda ko'rik, bimanual tekshiruv",
      wrong: [
        "Bimanual tekshiruv, ko'zgularda ko'rik, tashqi jinsiy a'zolarni ko'zdan kechirish",
        "Ko'zgularda ko'rik, bimanual tekshiruv, tashqi jinsiy a'zolarni ko'zdan kechirish",
        "Tashqi jinsiy a'zolarni ko'zdan kechirish, bimanual tekshiruv, ko'zgularda ko'rik",
      ],
      explanation: "Avval tashqi jinsiy a'zolar ko'zdan kechiriladi, so'ng ko'zgular yordamida bachadon bo'yni va qin devorlari ko'rikdan o'tkaziladi hamda surtmalar olinadi va faqat shundan keyin bimanual tekshiruv o'tkaziladi. Agar u oldinroq o'tkazilsa, bachadon bo'ynini jarohatlash va surtmalar natijalarini buzib ko'rsatish mumkin.",
    },
    {
      question: "Kengaytirilgan kolposkopiyada bachadon bo'yniga ketma-ket ishlov beriladi:",
      correct: "Sirka kislotasining 3% li eritmasi, so'ng Lyugol eritmasi bilan",
      wrong: [
        "Vodorod peroksidning 3% li eritmasi, so'ng Lyugol eritmasi bilan",
        "Yodning 5% li spirtli eritmasi, so'ng 70% li etil spirti bilan",
        "Xlorgeksidin eritmasi, so'ng brilliant yashil bilan",
      ],
      explanation: "Sirka kislotasi epiteliyning qisqa muddatli shishi va tomirlarning torayishini keltirib chiqaradi, bu atsetooq (sirka kislotasidan keyin oqaradigan) sohalar va atipik tomirlarni aniqlash imkonini beradi. Lyugol eritmasi (Shiller sinamasi) sog'lom ko'p qavatli yassi epiteliyni to'q jigarrang rangga bo'yaydi, yodnegativ sohalar esa maqsadli tekshirishni talab qiladi.",
    },
    {
      question: "Alohida diagnostik qirishda:",
      correct: "Avval servikal kanal, so'ng bachadon bo'shlig'i qiriladi, qirindilar alohida flakonlarga solinadi",
      wrong: [
        "Avval bachadon bo'shlig'i, so'ng servikal kanal qiriladi, qirindilar alohida flakonlarga solinadi",
        "Avval servikal kanal, so'ng bachadon bo'shlig'i qiriladi, qirindilar bitta flakonga solinadi",
        "Faqat bachadon bo'shlig'i qiriladi, servikal kanal kengaytirilmaydi",
      ],
      explanation: "Bachadon bo'shlig'idan olingan material kanaldan olingan material bilan aralashib ketmasligi uchun avval servikal kanal shilliq qavati, so'ng bachadon bo'shlig'i shilliq qavati qiriladi. Qirindilar 10% li formalin eritmasi solingan alohida flakonlarga solinadi va gistologik tekshiruvga yuboriladi — bu patologik jarayonning joylashuvini aniqlashtirish imkonini beradi.",
    },
    {
      question: "Kichik chanoq a'zolarining transabdominal ultratovush tekshiruviga (UTT) bemorni tayyorlash quyidagini o'z ichiga oladi:",
      correct: "Tekshiruv boshlanishiga qadar siydik pufagini to'ldirish",
      wrong: [
        "Tekshiruvdan bevosita oldin siydik pufagini bo'shatish",
        "Bir kun oldin qinni antiseptik eritmasi bilan chayish",
        "Tekshiruvdan 12 soat oldin har qanday suyuqlik ichishdan voz kechish",
      ],
      explanation: "To'lgan siydik pufagi (tekshiruvdan bir soat oldin taxminan 1 l gazsiz suyuqlik ichiladi) ichak qovuzloqlarini chetga suradi va «akustik oyna» vazifasini bajaradi. Transvaginal UTTda esa, aksincha, siydik pufagi bo'shatiladi.",
    },
    {
      question: "Hayz oldi sindromi uchun simptomlarning quyidagi xususiyati xos:",
      correct: "Siklning ikkinchi fazasida paydo bo'ladi va hayzning dastlabki kunlarida o'tib ketadi",
      wrong: [
        "Hayzning birinchi kunidan paydo bo'ladi va u tugagandan keyin o'tib ketadi",
        "Hayzdan so'ng darhol paydo bo'ladi va siklning o'rtasiga kelib o'tib ketadi",
        "Faqat ovulyatsiya kuni paydo bo'ladi va bir necha soat davom etadi",
      ],
      explanation: "Hayz oldi sindromi — lyutein fazasida, odatda hayzdan 2–10 kun oldin yuzaga keladigan psixoemotsional, vegetativ va modda almashinuvi-endokrin buzilishlarning (jizzakilik, ko'krak bezlarining dag'allashishi, shishlar, bosh og'rig'i) siklik takrorlanuvchi majmuasi. Hayz bilan boshlanadigan og'riqlar dismenoreyaga xos.",
    },
    {
      question: "Bakterial vaginozning xarakterli laborator belgisi — surtmada quyidagilarning aniqlanishi:",
      correct: "«Kalit» hujayralar",
      wrong: [
        "Achitqisimon zamburug'lar mitseliysi va sporalari",
        "Hujayra ichida joylashgan gramm-manfiy diplokokklar",
        "Harakatchan xivchinli eng sodda organizmlar (trixomonadalar)",
      ],
      explanation: "«Kalit» hujayralar — gardnerellalar va boshqa anaeroblar bilan zich qoplangan yassi epiteliy hujayralari; bakterial vaginoz uchun shuningdek pH ning 4,5 dan yuqori bo'lishi, aminotestda «baliq» hidi va yaqqol leykotsitar reaksiyaning yo'qligi xos. Zamburug' mitseliysi kandidozni, diplokokklar — gonoreyani, trixomonadalar — trixomoniazni ko'rsatadi.",
    },
    {
      question: "Urogenital xlamidiya infeksiyasini laborator tashxislashning tavsiya etilgan usuli:",
      correct: "Molekulyar-biologik usul (PZR)",
      wrong: [
        "Gram bo'yicha bo'yalgan surtma mikroskopiyasi",
        "Standart oziqa muhitlariga ekish",
        "Qonda xlamidiyalarga qarshi antitanachalarni aniqlash",
      ],
      explanation: "Xlamidiyalar — obligat hujayra ichi parazitlari: ular oddiy mikroskopiyada aniqlanmaydi va standart oziqa muhitlarida o'smaydi. Klinik tavsiyalarga ko'ra tashxis nuklein kislotalarni amplifikatsiya qilish usullari (PZR — polimeraza zanjirli reaksiyasi) bilan tasdiqlanadi, serologik usullar esa urogenital xlamidiozni tashxislashda qo'llanilmaydi.",
    },
    {
      question: "Sifilisning birlamchi davri uchun quyidagining paydo bo'lishi xos:",
      correct: "Zich asosli og'riqsiz yara",
      wrong: [
        "Vulvada og'riqli, guruh bo'lib joylashgan pufakchalar",
        "Tana rangidagi yumshoq so'rg'ichsimon o'simtalar",
        "Gavda terisida rozeolyoz toshma",
      ],
      explanation: "Qattiq shankr — asosida zich infiltrat bo'lgan og'riqsiz eroziya yoki yara — oqish treponema kirgan joyda yuqtirilgandan keyin o'rtacha 3–4 hafta o'tgach paydo bo'ladi va regionar limfa tugunlarining kattalashuvi bilan kechadi. Pufakchalar genital gerpesga, so'rg'ichsimon o'simtalar — o'tkir uchli kondilomalarga (VPCh 6 va 11 turlari), rozeolyoz toshma — ikkilamchi sifilisga xos.",
    },

    // --- vaziyatli masalalar ---
    {
      situation: "Ayol, 25 yosh, tashqi jinsiy a'zolar sohasida kuchli qichishish, achishish va oq rangli, pishloqsimon (tvorogsimon) ajralmalardan shikoyat qiladi. Yaqinda antibiotiklar bilan davolangan.",
      question: "Taxminiy tashxis qaysi?",
      correct: "Vaginal kandidoz (zamburug'li infeksiya)",
      wrong: [
        "Trixomoniaz",
        "Bakterial vaginoz",
        "Atrofik vaginit",
      ],
      explanation: "Trixomoniazda ajralma ko'pikli, sarg'ish-yashil; bakterial vaginozda kulrang, «baliq hidli» bo'ladi. Antibiotiklar qabul qilish kandidozga moyillik tug'diradi.",
    },
    {
      situation: "23 yoshli bemor menarxedan beri siyrak hayz (2–3 oyda 1 marta) va kontratseptsiyasiz muntazam jinsiy hayotning 1,5 yili davomida homiladorlik bo'lmayotganidan shikoyat qilib murojaat qildi. Obyektiv: tana vazni indeksi (TVI) 31 kg/m², iyakda va qorinning oq chizig'i bo'ylab qora sterjenli (dag'al) tuklar o'sgan, yuzda akne. UTTda ikkala tuxumdon kattalashgan, har birida periferiya bo'ylab joylashgan ko'plab mayda follikullar bor.",
      question: "Eng ehtimolli tashxis:",
      correct: "Polikistoz tuxumdonlar sindromi",
      wrong: [
        "Giperprolaktinemiya",
        "Funksional gipotalamik amenoreya",
        "Surunkali ikki tomonlama salpingooforit",
      ],
      explanation: "Menarxedan boshlangan oligomenoreya, anovulyator bepushtlik, giperandrogeniya (girsutizm, akne), semizlik va UTT bo'yicha tuxumdonlarning multifollikulyar tuzilishi birgalikda polikistoz tuxumdonlar sindromiga xos. Giperprolaktinemiya uchun yaqqol giperandrogeniyasiz galaktoreya va amenoreya xos.",
    },
    {
      situation: "14 yoshli qiz, menarxe bir yil oldin boshlangan, hayzlari nomuntazam. Hayz 2 oyga kechikkandan keyin bachadondan qon ketish boshlangan va 10 kundan beri davom etmoqda. Holsizlik, bosh aylanishidan shikoyat qiladi. Terisi oqargan, puls daqiqasiga 96 marta, AQB 100/60 mm sim. ust., gemoglobin 95 g/l. Jinsiy hayotni inkor etadi.",
      question: "Pubertat davrida bunday qon ketishlarning eng ko'p uchraydigan sababi:",
      correct: "Boshqaruv tizimlarining yetilmaganligi sababli anovulyatsiya",
      wrong: [
        "Bachadonning bo'shliqni deformatsiyalovchi shilliq osti miomasi",
        "Giperplaziya fonidagi endometriy adenokarsinomasi",
        "Bachadon ortiqlarining o'tkir yallig'lanishi (adneksit)",
      ],
      explanation: "Yuvenil (pubertat) qon ketishlar ko'pincha anovulyator bo'ladi: gipotalamus-gipofiz tizimining yetilmaganligi sababli ovulyatsiya sodir bo'lmaydi, sariq tana hosil bo'lmaydi va endometriy progesteronsiz estrogenlarning uzoq ta'siri ostida notekis va uzoq vaqt ko'chadi. O'smirlarda mioma va endometriy saratoni juda kam uchraydi; tekshiruvda qon ivishi buzilishlari ham istisno qilinadi.",
    },
    {
      situation: "28 yoshli bemor tashqi jinsiy a'zolar sohasida yurganda va o'tirganda kuchayadigan keskin og'riq, et uvishishi, haroratning 38,4 °C gacha ko'tarilishidan shikoyat qiladi. 4 kundan beri kasal, iliq kompresslar bilan mustaqil davolangan. Ko'rikda: chap katta jinsiy labning pastki uchdan bir qismida 4×3 sm hosila, ustidagi teri qizargan va shishgan, palpatsiya keskin og'riqli, flyuktuatsiya aniqlanadi.",
      question: "Bemorga qanday davolash ko'rsatilgan?",
      correct: "Yiring o'chog'ini ochish va bo'shliqni drenajlash",
      wrong: [
        "Shish sohasiga iliq kompresslarni davom ettirish",
        "O'z-o'zidan yorilguncha kuzatish",
        "Har kuni qinni antiseptik bilan chayish",
      ],
      explanation: "Flyuktuatsiya bartolin bezi abssessini ko'rsatadi — bu shifokor ko'rsatmasi bilan antibakterial terapiya bilan birgalikda jarrohlik davolash (drenajlash yoki marsupializatsiya bilan ochish) uchun ko'rsatma. Yiringli jarayonda issiqlik muolajalari qarshi ko'rsatilgan.",
    },
    {
      situation: "25 yoshli bemor qorin pastida, ko'proq o'ng tomonda og'riq, haroratning 38,5 °C gacha ko'tarilishi, jinsiy yo'llardan yiringli ajralmalar shikoyati bilan keldi. Hayz tugaganidan keyingi 3-kuni kasal bo'lgan; anamnezida — jinsiy sheriklarni tez-tez almashtirish. Bimanual tekshiruvda o'ng tomondagi bachadon ortiqlari kattalashgan, keskin og'riqli; qorin parda ta'sirlanish simptomlari yo'q. Shifokor o'tkir o'ng tomonlama salpingooforit tashxisini qo'ydi.",
      question: "Bemorga qaysi muolaja qarshi ko'rsatilgan?",
      correct: "Qorinning pastki qismiga grelka",
      wrong: [
        "Qorinning pastki qismiga muzli xalta",
        "To'shak rejimi va ko'p suyuqlik ichish",
        "Shifokor ko'rsatmasi bilan antibakterial terapiya",
      ],
      explanation: "Yallig'lanishning o'tkir bosqichida issiqlik to'qimalarning ekssudatsiyasi va qonga to'lishini kuchaytiradi hamda jarayonning qorin pardaga tarqalishiga yordam beradi, shuning uchun sovuq qo'llaniladi. Issiqlik bilan fizioterapevtik muolajalar faqat o'tkir yallig'lanish bosilgandan keyin tayinlanadi.",
    },
    {
      situation: "30 yoshli bemor ko'p miqdordagi ko'pikli, sarg'ish-yashil, yoqimsiz hidli ajralmalar, qinda qichishish va achishishdan shikoyat qiladi. Ko'zgularda ko'rikda qin va bachadon bo'yni shilliq qavati qizargan, nuqtali qon quyilishlar bor. Nativ surtmada harakatchan trixomonadalar aniqlangan. Shifokor metronidazol bilan davolashni tayinladi.",
      question: "Hamshira (akusherka) bemorga qanday tavsiya berishi kerak?",
      correct: "Sherik bir vaqtning o'zida tekshiruv va davolashdan o'tishi zarur",
      wrong: [
        "Sherikni faqat shikoyatlari bo'lsagina tekshirish va davolash kerak",
        "Prezervativsiz jinsiy hayotni davolashning 2-kunidan qayta boshlash mumkin",
        "Har bir jinsiy aloqadan keyin qinni antiseptik bilan chayish kerak",
      ],
      explanation: "Trixomoniaz — jinsiy yo'l bilan yuqadigan infeksiya (JYYI), erkaklarda u ko'pincha simptomsiz kechadi, shuning uchun sherik bir vaqtda davolanmasa, qayta yuqtirish xavfi yuqori. Davolash tugaguncha va tuzalganlik tasdiqlanguncha jinsiy aloqalar istisno qilinadi.",
    },
    {
      situation: "26 yoshli bemor tashqi jinsiy a'zolar sohasida achishish, qichishish va keskin og'riq, lohaslik, haroratning 37,6 °C gacha ko'tarilishidan shikoyat qiladi. Shunga o'xshash holatlar avval ham, odatda sovqotgandan keyin yuzaga kelgan. Ko'rikda kichik jinsiy lablarning qizargan, shishgan shilliq qavatida tiniq suyuqlikli guruh-guruh pufakchalar va mayda og'riqli eroziyalar bor.",
      question: "Eng ehtimolli tashxis:",
      correct: "Genital gerpes",
      wrong: [
        "Birlamchi sifilis",
        "O'tkir uchli kondilomalar",
        "O'tkir bartolinit",
      ],
      explanation: "Qo'zg'atuvchi omillardan keyin qaytalanadigan, eroziyalar qoldiradigan og'riqli guruh-guruh pufakchalar genital gerpes (oddiy gerpes virusi 2-turi, kamroq 1-turi) uchun xos; davolash — shifokor ko'rsatmasi bilan virusga qarshi preparatlar (atsiklovir, valatsiklovir). Birlamchi sifilisdagi qattiq shankr odatda yakka va og'riqsiz bo'ladi.",
    },
    {
      situation: "22 yoshli bemor siydik ajratishda achishtiruvchi og'riq va jinsiy yo'llardan yiringli ajralmalardan shikoyat qiladi. Bir hafta oldin tasodifiy himoyasiz jinsiy aloqa bo'lgan. Ko'zgularda ko'rikda bachadon bo'yni qizargan, servikal kanaldan shilliq-yiringli ajralmalar kelmoqda. Shifokor gonokokk infeksiyasiga tekshiruv tayinladi.",
      question: "Ushbu bemordan tekshiruv uchun material asosan qaysi o'choqlardan olinadi?",
      correct: "Uretra va servikal kanaldan",
      wrong: [
        "Faqat qinning orqa gumbazidan",
        "Faqat bachadon bo'ynining tashqi yuzasidan",
        "Bachadon bo'shlig'idan aspiratsiya yo'li bilan",
      ],
      explanation: "Gonokokk asosan silindrsimon epiteliyni zararlaydi, shuning uchun ayollarda asosiy o'choqlar — uretra va servikal kanal; ko'rsatmalarga ko'ra material to'g'ri ichak va og'iz-halqumdan ham olinadi. Ko'p qavatli yassi epiteliy bilan qoplangan qin katta yoshli ayollarda kam zararlanadi.",
    },
    {
      situation: "30 yoshli bemor flora va qin tozalik darajasiga surtma olish uchun yuborilgan. Suhbat davomida u shifokor qabuliga kelishdan oldingi kun kechqurun «gigiyena uchun» qinni xlorgeksidin eritmasi bilan chayganligi va qinga antiseptikli sham qo'yganligi aniqlandi.",
      question: "Hamshira (akusherka)ning taktikasi:",
      correct: "Surtma olishni boshqa kunga ko'chirish va tayyorgarlik qoidalarini tushuntirish",
      wrong: [
        "Sham qoldiqlarini avval tampon bilan olib tashlab, surtma olish",
        "Qinni qayta chayib, darhol surtma olish",
        "Surtmani faqat qinning orqa gumbazidan olish",
      ],
      explanation: "Qinni chayish va qin preparatlari mikroflora tarkibini o'zgartiradi, natijada surtma natijasi ishonchsiz bo'ladi. Tekshiruvdan 1–2 sutka oldin jinsiy aloqalar, qinni chayish va vaginal vositalar istisno qilinadi; hayz vaqtida surtma olinmaydi.",
    },
    {
      situation: "17 yoshli qiz har bir hayzning birinchi kunida paydo bo'ladigan va taxminan bir sutka davom etadigan, qorin pastidagi to'lg'oqsimon og'riqlardan shikoyat qiladi; og'riqlar ko'ngil aynishi va holsizlik bilan kechadi. Hayzlari 13 yoshdan, muntazam. Tekshiruvda jinsiy a'zolarning organik patologiyasi aniqlanmagan.",
      question: "Bu holatda og'riqni kamaytirish uchun qaysi preparatlar birinchi qator vositasi hisoblanadi?",
      correct: "Nosteroid yallig'lanishga qarshi vositalar",
      wrong: [
        "Markaziy ta'sir qiluvchi narkotik analgetiklar",
        "Keng ta'sir doirasiga ega antibiotiklar",
        "Ichish uchun temir preparatlari",
      ],
      explanation: "Birlamchi dismenoreya endometriyda miometriyning qisqarishi va ishemiyasini keltirib chiqaruvchi prostaglandinlarning ortiqcha ishlab chiqarilishi bilan bog'liq; nosteroid yallig'lanishga qarshi vositalar ularning sintezini bostiradi. Preparatlar shifokor ko'rsatmasi bilan hayz boshlanishi bilan (yoki bir kun oldin) qabul qilinadi, samarasiz bo'lganda gormonal kontratseptsiya ko'rib chiqiladi.",
    },
    {
      situation: "27 yoshli bemor 7 oy davomida hayz bo'lmasligi va ko'krak bezlari bosilganda og'iz suti tomchilari ajralishidan shikoyat qiladi. Homiladorlik testi manfiy, emizmaydi, dori vositalarini qabul qilmaydi. Jinsiy hayoti muntazam, homilador bo'lmayapti.",
      question: "Buzilishning eng ehtimolli sababini tasdiqlash uchun qonda qaysi gormon darajasini tekshirish kerak?",
      correct: "Prolaktin",
      wrong: [
        "Testosteron",
        "Kortizol",
        "Oksitotsin",
      ],
      explanation: "Amenoreya va galaktoreyaning birga kelishi giperprolaktinemiyaga (shu jumladan gipofiz prolaktinomasiga) xos: prolaktin ortiqchaligi gonadotropin-rilizing-gormon sekretsiyasini va ovulyatsiyani bostiradi. Prolaktinga qon ertalab, och qoringa, tinch holatda, bir kun oldin stress, jinsiy aloqa va ko'krak bezlarini ko'rikdan o'tkazishni istisno qilgan holda olinadi.",
    },

    // ===== Ginekologiya: o'smalar, kontratseptsiya, shoshilinch holatlar =====
    {
      question: "Bachadon bo'yni saratonini erta aniqlash (skrining) uchun qaysi tekshiruv qo'llaniladi?",
      correct: "Bachadon bo'ynidan olingan sitologik surtma (PAP-test) va VPCh testi",
      wrong: [
        "Umumiy qon tahlili",
        "Ko'krak bezlari mammografiyasi",
        "Siydikning umumiy tahlili",
      ],
      explanation: "Bachadon bo'yni saratonining asosiy sababi — inson papillomavirusi (VPCh), ayniqsa 16 va 18 turlari. Skrining saraton oldi o'zgarishlarini erta aniqlash imkonini beradi.",
    },
    {
      question: "Hayz sikli muntazam bo'lgan reproduktiv yoshdagi ayolga ko'krak bezlarini o'z-o'zini tekshirishni qaysi muddatlarda o'tkazish tavsiya etiladi?",
      correct: "Har oy, hayz tugaganidan keyingi dastlabki kunlarda",
      wrong: [
        "Har oy, hayz boshlanishidan 2–3 kun oldin",
        "Har oy, hayz siklining o'rtasida",
        "Yiliga bir marta, profilaktik ko'rik arafasida",
      ],
      explanation: "Hayz tugaganidan keyin ko'krak bezlari eng kam darajada taranglashgan bo'ladi va zichlashmalarni aniqlash osonroq; hayz oldidan bezlar bo'rtib, og'riqli bo'ladi, bu esa baholashni qiyinlashtiradi. Postmenopauzada o'z-o'zini tekshirish har oyning bir xil kunida o'tkaziladi.",
    },
    {
      question: "Kontratseptsiya usulining ishonchliligini baholashda qo'llaniladigan Perl indeksi — bu:",
      correct: "Usulni bir yil davomida qo'llagan 100 ayolda homiladorliklar soni",
      wrong: [
        "Usulni bir oy davomida qo'llagan 1000 ayolda homiladorliklar soni",
        "Birinchi yil davomida usuldan voz kechgan ayollar ulushi",
        "Usul qo'llangan bir yil davomida 100 ayolda kuzatilgan nojo'ya reaksiyalar soni",
      ],
      explanation: "Perl indeksi usuldan 1 yil davomida foydalangan 100 ayolda rejalashtirilmagan homiladorliklar sonini ko'rsatadi: u qanchalik past bo'lsa, kontratseptsiya shunchalik ishonchli.",
    },
    {
      question: "Himoyalanmagan jinsiy aloqadan keyin shoshilinch kontratseptsiya uchun levonorgestrel 1,5 mg ni qaysi muddatda qabul qilish kerak?",
      correct: "Iloji boricha tezroq, 72 soatdan kechiktirmay",
      wrong: [
        "Kamida 72 soat o'tgach, lekin 10 sutkagacha",
        "Kutilayotgan hayzning birinchi kunida",
        "2 hafta ichida istalgan kunda",
      ],
      explanation: "Levonorgestrelning samaradorligi dastlabki soatlarda eng yuqori bo'lib, vaqt o'tishi bilan pasayadi, shuning uchun preparat himoyalanmagan aloqadan keyin iloji boricha tezroq, 72 soat ichida qabul qilinadi. Shoshilinch kontratseptsiya muntazam kontratseptsiyaning o'rnini bosmaydi.",
    },
    {
      question: "Bachadon bo'yni saratonining eng xarakterli erta klinik belgisi qaysi?",
      correct: "Kontakt qonli ajralmalar",
      wrong: [
        "Dumg'aza va bel sohasidagi doimiy og'riqlar",
        "Oyoqlar va vulvaning shishishi",
        "Siydik chiqarishning qiyinlashishi va ich qotishi",
      ],
      explanation: "Bachadon bo'yni saratonining erta belgilari — kontakt qonli ajralmalar (jinsiy aloqa, ko'rik, qinni chayishdan keyin) va suvsimon oqchil ajralmalar, garchi boshlang'ich bosqichlar ko'pincha simptomsiz kechsa-da. Og'riqlar, shishlar, siydik pufagi va to'g'ri ichak faoliyatining buzilishi o'sma tarqalganda paydo bo'ladi — bu kechki belgilardir.",
    },
    {
      question: "Bachadon bo'yni saratonining oldini olishda inson papillomavirusiga qarshi emlash qachon eng samarali bo'ladi?",
      correct: "Jinsiy hayot boshlanishidan oldin",
      wrong: [
        "Skriningda VPCh aniqlangandan so'ng darhol",
        "Premenopauza davrida, 45 yoshdan keyin",
        "Homiladorlik vaqtida, II trimestrda",
      ],
      explanation: "Vaksina VPCh bilan zararlanishning oldini oladi, lekin mavjud infeksiyani davolamaydi, shuning uchun eng katta samaraga u virus bilan birinchi to'qnashuvdan oldin yuborilganda erishiladi (JSST 9–14 yoshli qizlarni emlashni tavsiya qiladi). Homiladorlik vaqtida emlash o'tkazilmaydi.",
    },
    {
      question: "Tugunning joylashuviga ko'ra bachadon miomasining qaysi shakli uchun anemiya rivojlanishiga olib keladigan ko'p va uzoq davom etadigan hayz eng xarakterli?",
      correct: "Shilliq qavat osti (submukoz)",
      wrong: [
        "Oyoqchali qorin parda osti (subseroz)",
        "Boylamlararo (intraligamentar)",
        "Qorin parda orti (retroperitoneal)",
      ],
      explanation: "Submukoz tugun bachadon bo'shlig'ini deformatsiyalaydi, endometriyning qonaydigan yuzasi maydonini oshiradi va miometriyning qisqarish qobiliyatini buzadi, bu esa menorragiya va anemiyaga olib keladi. Subseroz va boylamlararo tugunlar ko'pincha qo'shni a'zolarning siqilish belgilari bilan namoyon bo'ladi.",
    },
    {
      question: "Tuxumdonning funksional (retension) kistasi haqiqiy o'sma — kistomadan nimasi bilan farq qiladi?",
      correct: "2–3 hayz sikli davomida o'z-o'zidan yo'qolib ketishi mumkin",
      wrong: [
        "O'z devori hujayralarining proliferatsiyasi (ko'payishi) hisobiga o'sadi",
        "Faqat postmenopauzadagi ayollarda uchraydi",
        "Har doim shoshilinch jarrohlik yo'li bilan olib tashlashni talab qiladi",
      ],
      explanation: "Funksional kistalar (follikulyar kista, sariq tana kistasi) suyuqlik to'planishi hisobiga hosil bo'ladi va ko'pincha o'z-o'zidan qaytadi, shuning uchun ular 2–3 sikl davomida kuzatiladi. Kistoma — haqiqiy o'sma bo'lib, hujayralar proliferatsiyasi hisobiga o'sadi va o'z-o'zidan yo'qolmaydi, shuning uchun jarrohlik yo'li bilan davolanadi.",
    },
    {
      question: "Shikoyati bo'lmagan 50–69 yoshli ayollarga skrining mammografiyasi qanday davriylikda o'tkaziladi?",
      correct: "2 yilda 1 marta",
      wrong: [
        "6 oyda 1 marta",
        "5 yilda 1 marta",
        "10 yilda 1 marta",
      ],
      explanation: "Rossiya Federatsiyasidagi dispanserizatsiya tartibiga ko'ra mammografiya 40–75 yoshli ayollarga 2 yilda 1 marta o'tkaziladi; JSST ham 50–69 yoshda har 2 yilda skrining o'tkazishni tavsiya qiladi. Mammografiya paypaslanmaydigan o'smalarni erta bosqichda aniqlash imkonini beradi.",
    },
    {
      question: "Genital endometrioz uchun qaysi belgi eng xarakterli?",
      correct: "Yillar o'tgan sari kuchayib boradigan hayz og'riqliligi",
      wrong: [
        "Og'riqsiz, ko'p miqdordagi suvsimon oqchil ajralmalar",
        "Jinsiy yo'llardan yoqimsiz hidli yiringli ajralmalar",
        "Sikl o'rtasida hushdan ketish bilan kechadigan to'satdan og'riq",
      ],
      explanation: "Endometriozga progressiv dismenoreya, surunkali chanoq og'rig'i, jinsiy aloqa vaqtidagi og'riq va bepushtlik xos: endometrioid o'choqlar siklik o'zgaradi va hayz vaqtida qonaydi. Yiringli ajralmalar yallig'lanish kasalliklariga, sikl o'rtasida hushdan ketish bilan kechadigan to'satdan og'riq esa tuxumdon apopleksiyasiga xos.",
    },
    {
      question: "35 yoshdan kichik ayolda kontratseptsiyasiz muntazam jinsiy hayot fonida homiladorlik quyidagi muddat davomida bo'lmasa, bepushtlik tashxisi qo'yiladi:",
      correct: "12 oy",
      wrong: [
        "3 oy",
        "6 oy",
        "18 oy",
      ],
      explanation: "JSST ta'rifi va klinik tavsiyalarga ko'ra bepushtlik — kontratseptsiyasiz muntazam jinsiy hayotda 12 oy davomida homiladorlik bo'lmasligi. 35 yosh va undan katta ayollarda tekshiruv 6 oylik muvaffaqiyatsiz urinishlardan keyinoq boshlanadi.",
    },
    {
      question: "Quyidagi buzilishlardan qaysi biri klimakteriyning kechki (modda almashinuvi bilan bog'liq) belgilariga kiradi?",
      correct: "Postmenopauzal osteoporoz",
      wrong: [
        "Yuz va bo'yinga issiq toshishi",
        "Tungi terlash",
        "Emotsional labillik",
      ],
      explanation: "Vazomotor (issiq toshishi, terlash) va psixoemotsional buzilishlar erta — perimenopauzada va postmenopauzaning dastlabki yillarida paydo bo'ladi. Osteoporoz va yurak-qon tomir kasalliklari menopauzadan bir necha yil o'tgach, uzoq davom etgan estrogen tanqisligi fonida rivojlanadi va kechki modda almashinuvi buzilishlariga kiradi.",
    },
    {
      question: "Quyidagilardan qaysi biri menopauzal gormonal terapiyaga qarshi ko'rsatma hisoblanadi?",
      correct: "Anamnezda ko'krak bezi saratoni",
      wrong: [
        "Kuchli ifodalangan issiq toshishi va terlash",
        "Urogenital atrofiya simptomlari",
        "Tuxumdonlarning erta yetishmovchiligi",
      ],
      explanation: "Ko'krak bezi saratoni (shu jumladan anamnezda) — menopauzal gormonal terapiyaga (MGT) qarshi ko'rsatma, xuddi kelib chiqishi noma'lum bo'lgan jinsiy yo'llardan qon ketish, venoz tromboemboliyalar, endometriy saratoni kabi. Vazomotor simptomlar, urogenital atrofiya va tuxumdonlarning erta yetishmovchiligi esa, aksincha, MGT ga ko'rsatma hisoblanadi.",
    },
    {
      question: "Jinsiy a'zolar tushishining boshlang'ich bosqichlarida tavsiya etiladigan Kegel mashqlari quyidagiga qaratilgan:",
      correct: "Chanoq tubi mushaklarini mustahkamlash",
      wrong: [
        "Qorinning to'g'ri mushaklarini mustahkamlash",
        "Bachadonning boylam apparatini cho'zish",
        "Oyoqlardan venoz qon oqimini yaxshilash",
      ],
      explanation: "Kegel mashqlari — chanoq tubi mushaklarini muntazam ixtiyoriy qisqartirish va bo'shashtirish (siydik chiqarishni ushlab turgandagidek); ular kichik chanoq a'zolarining tayanchini yaxshilaydi va stress siydik tuta olmaslikni kamaytiradi. Qorin pressi uchun mashqlar qorin ichi bosimini oshiradi va chanoq tubi mushaklarini mashq qildirish o'rnini bosmaydi.",
    },
    {
      question: "Quyidagi bachadon bo'yni kasalliklaridan qaysi biri saraton oldi kasalliklariga kiradi?",
      correct: "Bachadon bo'yni epiteliysi displaziyasi (CIN)",
      wrong: [
        "Silindrsimon epiteliy ektopiyasi",
        "Servikal kanal polipi",
        "Bachadon bo'ynining retension (Nabot) kistalari",
      ],
      explanation: "Displaziya (servikal intraepitelial neoplaziya, ayniqsa og'ir darajasi) — saraton oldi holati: davolanmasa, u bachadon bo'yni saratoniga o'tishi mumkin. Ektopiya, poliplar va Nabot kistalari fon xavfsiz jarayonlarga kiradi.",
    },
    {
      question: "Rejali ginekologik operatsiyadan oldin venoz tromboembolik asoratlarning oldini olish uchun bemorga qanday tadbir o'tkaziladi?",
      correct: "Oyoqlarni elastik kompressiya qilish",
      wrong: [
        "Operatsiyadan 2–3 sutka oldin suyuqlik ichishni cheklash",
        "Operatsiya arafasida qat'iy yotoq rejimi",
        "Operatsiyadan oldin qorinni qattiq bintlash",
      ],
      explanation: "Elastik kompressiya (kompression trikotaj yoki oyoqlarni bintlash) venoz qon oqimini tezlashtiradi va tromboz xavfini kamaytiradi; u operatsiyadan oldin boshlanadi va bemor to'liq faollashguncha davom ettiriladi, shifokor ko'rsatmasi bilan antikoagulyantlar bilan birga qo'llaniladi. Suvsizlanish va harakatsizlik, aksincha, venoz tromboembolik asoratlar xavfini oshiradi.",
    },

    // --- vaziyatli masalalar ---
    {
      situation: "Ayol, 28 yosh. Hayz 7 haftaga kechikkan. Qorin pastki qismida to'satdan o'tkir og'riq paydo bo'lib, to'g'ri ichak va yelkaga tarqalmoqda. Bosh aylanishi, ko'ngil aynishi bor. Teri oqargan, AQB 80/50 mm sim. ust., puls daqiqasiga 120 marta. Homiladorlik testi musbat.",
      question: "Taxminiy tashxis va hamshiraning to'g'ri harakati qaysi?",
      correct: "Uzilgan bachadondan tashqari (nay) homiladorligi — shifokorni zudlik bilan chaqirish, venani kateterlash va bemorni shoshilinch operatsiyaga tayyorlash",
      wrong: [
        "O'tkir sistit — ko'p suyuqlik ichirish va kuzatish",
        "Normal bachadon ichi homiladorligi — rejali ko'rikka yozib qo'yish",
        "Ich qotishi — tozalovchi huqna qilish va qoringa issiq grelka qo'yish",
      ],
      explanation: "Gemorragik shok belgilari bilan kechayotgan bachadondan tashqari homiladorlikda bemor shoshilinch operatsiya qilinadi. Qoringa issiq qo'yish va huqna qilish qat'iyan man etiladi.",
    },
    {
      situation: "32 yoshli bemor qorinning pastki qismida chap tomonda to'satdan paydo bo'lgan keskin og'riqlar, ko'ngil aynishi, bir marta qusishdan shikoyat qilib keltirildi. Og'riqlar og'ir narsa ko'targandan keyin paydo bo'lgan. Yarim yil oldin UTT da chap tuxumdonning diametri 7 sm bo'lgan kistomasi aniqlangan, operatsiyadan bosh tortgan. Hayzlari muntazam, oxirgisi 10 kun oldin bo'lgan, homiladorlik testi manfiy. Puls daqiqasiga 100 marta, AQB 120/80 mm sim. ust., tana harorati 37,4°C, qorin pastki qismlarida chap tomonda taranglashgan va og'riqli; qin orqali tekshiruvda bachadondan chapda 7–8 sm li keskin og'riqli, tarang-elastik hosila aniqlanadi.",
      question: "Qaysi shoshilinch holat ehtimoli eng yuqori?",
      correct: "Tuxumdon o'smasi oyoqchasining buralishi",
      wrong: [
        "Tuxumdon apopleksiyasi",
        "O'tkir appenditsit",
        "Nay homiladorligi",
      ],
      explanation: "Kistomasi borligi ma'lum bo'lgan bemorda jismoniy zo'riqishdan keyin to'satdan paydo bo'lgan og'riq, ko'ngil aynishi, qusish, qorin tarangligi va bachadon ortiqlari sohasidagi keskin og'riqli hosila tuxumdon o'smasi oyoqchasining buralishiga xos — bu shoshilinch operatsiyaga ko'rsatma. Apopleksiyada ichki qon ketish belgilari yetakchi bo'lardi, nay homiladorligini esa manfiy test va hayz kechikmaganligi istisno qiladi.",
    },
    {
      situation: "23 yoshli bemor qorinning pastki qismida o'ng tomonda to'satdan paydo bo'lgan, to'g'ri ichakka tarqaluvchi og'riq, holsizlik, bosh aylanishidan shikoyat qilib keltirildi. Og'riq jinsiy aloqa vaqtida paydo bo'lgan. Hayzlari muntazam, har 28 kunda, oxirgisi 24 kun oldin boshlangan, homiladorlik testi manfiy. Terisi oqargan, puls daqiqasiga 108 marta, AQB 95/60 mm sim. ust., tana harorati 36,8°C; qorin yumshoq, pastki qismlarida og'riqli, Shchetkin–Blyumberg simptomi kuchsiz musbat.",
      question: "Qaysi tashxis ehtimoli eng yuqori?",
      correct: "Tuxumdon apopleksiyasi",
      wrong: [
        "Tuxumdon kistasi oyoqchasining buralishi",
        "O'tkir appenditsit",
        "O'tkir salpingooforit",
      ],
      explanation: "Siklning ikkinchi fazasida jinsiy aloqa vaqtida paydo bo'lgan to'satdan og'riqning ichki qon ketish belgilari (oqarish, taxikardiya, AQB pasayishi) bilan birga kelishi va homiladorlik testining manfiyligi tuxumdon apopleksiyasiga xos. Appenditsit va salpingooforit uchun qon yo'qotish belgilari emas, balki isitma va simptomlarning asta-sekin kuchayishi xos.",
    },
    {
      situation: "44 yoshli bemor tuguni submukoz joylashgan bachadon miomasi sababli dispanser hisobida turadi. Bir sutka davomida qorin pastida to'lg'oqsimon og'riqlar va jinsiy yo'llardan ko'p miqdorda qonli ajralmalar kelishidan shikoyat qiladi. Homiladorlik testi manfiy. Ko'zgular yordamida ko'rikda tashqi bo'g'iz biroz ochilgan, servikal kanalda bachadon bo'shlig'idan chiqib kelayotgan, diametri taxminan 3 sm li silliq, yumaloq, pushti rangli hosila ko'rinadi.",
      question: "Qaysi holat haqida o'ylash kerak?",
      correct: "Tug'ilayotgan submukoz tugun",
      wrong: [
        "Servikal kanal polipi",
        "Bachadon bo'yni saratonining ekzofit shakli",
        "Kechayotgan o'z-o'zidan abort",
      ],
      explanation: "Submukoz miomasi bor bemorda to'lg'oqsimon og'riqlar va qon ketish, tashqi bo'g'izning biroz ochilganligi hamda bachadon bo'shlig'idan servikal kanalga chiqib kelayotgan silliq, yumaloq hosila tug'ilayotgan submukoz tugunga xos — bu shoshilinch gospitalizatsiya va jarrohlik davosiga ko'rsatma. O'z-o'zidan abortni manfiy homiladorlik testi istisno qiladi.",
    },
    {
      situation: "26 yoshli bemor kombinatsiyalangan oral kontratseptivlarni (qadoqda 21 ta faol tabletka) qabul qiladi, hozir qabul qilishning ikkinchi haftasi. Odatda tabletkani soat 21:00 da ichadi, lekin kecha unutib qo'ygan va faqat bugun ertalab soat 7:00 da esladi — kechikish 10 soatni tashkil qildi. Oldingi tabletkalarni o'tkazib yubormasdan qabul qilgan.",
      question: "Hamshira qanday tavsiya berishi kerak?",
      correct: "Unutilgan tabletkani darhol ichish, keyingisini — odatdagi vaqtda",
      wrong: [
        "Unutilgan tabletkani ichmaslik, qabul qilishni odatdagi tartibda davom ettirish",
        "Qabul qilishni to'xtatib, yangi qadoqni hayzdan keyin boshlash",
        "Birdaniga uchta tabletka ichib, so'ng qabul qilishni davom ettirish",
      ],
      explanation: "KOK qabul qilish 12 soatdan kamroqqa kechiktirilganda kontratseptiv samara saqlanib qoladi: unutilgan tabletka iloji boricha tezroq ichiladi (hatto shu kuni ikkita tabletka ichishga to'g'ri kelsa ham), keyingisi — odatdagi vaqtda, qo'shimcha himoya kerak emas. Unutilgan tabletkani ichmaslik usulning ishonchliligini pasaytiradi.",
    },
    {
      situation: "61 yoshli bemor bir hafta oldin paydo bo'lgan, jinsiy yo'llardan kam miqdordagi qonli ajralmalar shikoyati bilan ko'rik kabinetiga murojaat qildi. Menopauza 9 yil. Semizlik, 2-tip qandli diabet va arterial gipertenziya bilan og'riydi, gormonal preparatlar qabul qilmaydi. Og'riq bezovta qilmaydi, o'zini qoniqarli his qiladi.",
      question: "Ko'rik kabineti akusherkasining to'g'ri taktikasi qanday?",
      correct: "Endometriy saratonini istisno qilish uchun zudlik bilan ginekologga yo'naltirish",
      wrong: [
        "Bu klimaks belgisi ekanligini tushuntirib, kuzatish",
        "Faqat ajralmalar takrorlangandagina qayta kelishni tavsiya qilish",
        "Qon to'xtatuvchi o'tlar va uyda kuzatishni tavsiya qilish",
      ],
      explanation: "Postmenopauzadagi har qanday qon ketish — endometriy giperplaziyasi va saratonini istisno qilishni talab qiladigan xavotirli simptom (endometriy qalinligini baholagan holda UTT, endometriyni gistologik tekshirish). Semizlik, qandli diabet va arterial gipertenziya — bachadon tanasi saratonining klassik xavf omillari.",
    },
    {
      situation: "52 yoshli bemor o'z-o'zini tekshirishda chap ko'krak bezida zichlashma topdi. Ko'rikda yuqori-tashqi kvadrantda taxminan 2 sm li zich, og'riqsiz, kam harakatchan hosila paypaslanadi, uning ustidagi teri ichkariga tortilgan, so'rg'ich biroz tortilgan. Chap qo'ltiq osti sohasida zich, kattalashgan limfa tuguni paypaslanadi.",
      question: "Hamshiraning to'g'ri taktikasi qanday?",
      correct: "Mammografiya va biopsiya uchun zudlik bilan onkologga yo'naltirish",
      wrong: [
        "O'z-o'zini tekshirishni 3 oydan keyin takrorlash",
        "Zichlashmaga isituvchi kompress qo'yishni tavsiya qilish",
        "Zichlashma so'rilib ketguncha bezni massaj qilishni tavsiya qilish",
      ],
      explanation: "Teri va so'rg'ichning tortilishi hamda qo'ltiq osti limfa tugunining kattalashishi bilan kechayotgan zich, og'riqsiz, kam harakatchan hosila ko'krak bezi saratoniga shubha uyg'otadi, shuning uchun bemor mammografiya, UTT va biopsiya uchun zudlik bilan onkologga yo'naltiriladi. Kuzatish tashxisni kechiktiradi, o'smaga shubha bo'lganda esa issiqlik muolajalari va massaj qarshi ko'rsatilgan.",
    },
    {
      situation: "27 yoshli ayol, tug'ruqdan keyin 7 oy o'tgan, maslahat uchun murojaat qildi. Bolani ko'krak suti bilan boqadi, 5 oyligidan qo'shimcha ovqat kiritgan, tungi emizishni to'xtatgan. Tug'ruqdan keyin hayz hali tiklanmagan. Hayz bo'lmaguncha himoyalanish shart emas deb hisoblaydi.",
      question: "Hamshiraning qaysi javobi to'g'ri?",
      correct: "Laktatsion amenoreya usuli endi ishonchli emas, boshqa usul kerak",
      wrong: [
        "Amenoreya saqlanib, emizish davom etar ekan, usul ishonchli",
        "Usul ko'krak suti bilan boqish to'liq tugaguncha ishonchli",
        "Tug'ruqdan keyingi birinchi hayzgacha himoyalanish shart emas",
      ],
      explanation: "Laktatsion amenoreya usuli faqat uchta shart bir vaqtda bajarilganda samarali: bola 6 oydan kichik, faqat ko'krak suti bilan boqiladi (tungi emizishlar ham), hayz tiklanmagan. Bemorda qo'shimcha ovqat kiritilgan va bola 6 oydan katta, ovulyatsiya esa birinchi hayzdan oldin ham sodir bo'lishi mumkin.",
    },
    {
      situation: "29 yoshli bemorga kecha tuxumdonning endometrioid kistasi sababli laparoskopik kistektomiya bajarilgan. O'ng yelka usti sohasida va kurak ostida simillovchi og'riqlardan shikoyat qiladi. Tana harorati 36,9°C, puls daqiqasiga 76 marta, AQB 120/75 mm sim. ust.; qorin yumshoq, teshiklar sohasida o'rtacha og'riqli, bog'lamlar quruq.",
      question: "Yelka usti sohasidagi og'riqlarning eng ehtimoliy sababi nima?",
      correct: "Qolgan karbonat angidrid gazining diafragmani ta'sirlashi",
      wrong: [
        "Troakar teshigi sohasida yaraning yiringlashi",
        "Yuqori mucha chuqur venalarining trombozi",
        "Narkoz preparatlariga allergik reaksiya",
      ],
      explanation: "Pnevmoperitoneumdan keyin qolgan karbonat angidrid gazi diafragmani ta'sirlaydi va og'riq diafragma nervi bo'ylab yelka usti sohasiga tarqaladi; gemodinamika barqaror va qorin yumshoq bo'lsa, bu kutilgan holat bo'lib, 1–3 sutkada o'tib ketadi. Hamshira bemorga og'riq sababini tushuntiradi va shifokor ko'rsatmasi bilan analgetiklar yuboradi.",
    },
    {
      situation: "24 yoshli bemor, 8 haftalik muddatda sun'iy abortdan (vakuum-aspiratsiya) keyingi 4-sutka. Qorin pastida og'riqlar, et uvishishi, haroratning 38,6°C gacha ko'tarilishi, jinsiy yo'llardan yoqimsiz hidli yiringsimon-qonli ajralmalardan shikoyat qiladi. Bimanual tekshiruvda bachadon biroz kattalashgan, yumshoqroq konsistensiyali, og'riqli.",
      question: "Qaysi asorat ehtimoli eng yuqori?",
      correct: "O'tkir abortdan keyingi endometrit",
      wrong: [
        "O'tkir sistit",
        "Tuxumdon apopleksiyasi",
        "Rivojlanayotgan nay homiladorligi",
      ],
      explanation: "Abortdan keyingi 3–4-sutkada isitma, et uvishishi, og'riqlar, kattalashgan og'riqli bachadon va hidli yiringsimon ajralmalar o'tkir endometritga xos. Bemor gospitalizatsiya qilinadi, shifokor ko'rsatmasi bilan tekshiruv va antibakterial terapiya o'tkaziladi.",
    },
    {
      situation: "38 yoshli bemor kontratseptsiya usulini tanlash uchun murojaat qildi. Kuniga 20 dona sigaret chekadi, chekishni tashlash niyati yo'q. Ikki farzandi bor, yaqin yillarda homiladorlikni rejalashtirmaydi. Tekshiruv natijalariga ko'ra bachadon ichi kontratseptsiyasiga qarshi ko'rsatmalar yo'q. «Dugonamnikiga o'xshash tabletkalar» — kombinatsiyalangan oral kontratseptivlarni buyurishni so'raydi.",
      question: "Hamshira bemorga qanday ma'lumot berishi kerak?",
      correct: "KOK qarshi ko'rsatilgan, shifokor bilan BIV qo'yishni muhokama qilish mumkin",
      wrong: [
        "Har yili arterial bosim nazorat qilinsa, KOK qabul qilish mumkin",
        "KOK tanaffussiz, uzluksiz rejimda qabul qilinsa, xavfsiz",
        "Smola miqdori kam sigaretlarga o'tilsa, KOK qabul qilish mumkin",
      ],
      explanation: "35 yosh va undan katta ayolning kuniga 15 va undan ortiq sigaret chekishi — infarkt, insult va tromboemboliyalar xavfi yuqoriligi sababli KOK ga mutlaq qarshi ko'rsatma (JSST maqbullik mezonlarining 4-toifasi). Bunday bemorlarga estrogensiz usullar to'g'ri keladi: mis saqlovchi BIV yoki levonorgestrel saqlovchi BIV (LNG-BIV), progestagen kontratseptivlar, baryer usullar.",
    },
  ],

  openQuestions: [
    // ===== Fiziologik homiladorlik va antenatal kuzatuv =====
    {
      question: "Homiladorlikning shubhali (taxminiy), ehtimoliy va ishonchli belgilarini sanab bering. Homiladorlik testlari nimaga asoslanganini va nima uchun XGCh testining musbat natijasi ishonchli belgilarga kirmasligini tushuntiring.",
    },
    {
      question: "Tashqi pelviometriya usulini tavsiflang: katta chanoqning asosiy o'lchamlari va ularning normal kattaliklarini, har bir o'lchamni o'lchashda homilador ayolning holatini, qo'llaniladigan asbobni ayting. Haqiqiy kon'yugata qanday aniqlanishini va Mixaelis rombi nima ekanligini tushuntiring.",
    },
    {
      question: "Homiladorlik davrida yurak-qon tomir tizimi, qon, siydik ajratish va hazm qilish tizimlaridagi asosiy fiziologik o'zgarishlarni ayting. Ular homilador ayolning qanday shikoyatlarini izohlaydi va akusherka ovqatlanish hamda rejim bo'yicha qanday tavsiyalar beradi?",
    },
    {
      situation: "Ayol, 23 yosh, birinchi homiladorlik, oxirgi hayz sanasi bo'yicha muddat 8 hafta, ayollar maslahatxonasiga birinchi marta murojaat qildi. Shikoyati yo'q. Kuniga 5 tagacha sigaret chekadi, vitaminlar qabul qilmaydi, nomuntazam ovqatlanadi.",
      question: "Dispanser hisobiga olishda tekshiruv rejasini tuzing (laboratoriya va instrumental tekshiruvlar), prenatal skrininglar muddatlarini ko'rsating va aniqlangan xavf omillarini hisobga olgan holda homilador ayolga tavsiyalar bering.",
    },
    {
      situation: "Homilador ayol, 30 yosh, homiladorlik muddati 34 hafta, ayollar maslahatxonasiga rejali tashrifga keldi. Shikoyati yo'q, homila qimirlashini yaxshi sezmoqda.",
      question: "Tashqi akusherlik tekshiruvining ketma-ketligi va texnikasini tavsiflang: bachadon tubi balandligi va qorin aylanasini o'lchash, Leopold–Levitskiy usullari, homila yurak urishini auskultatsiya qilish. Har bir bosqichda qanday ma'lumotlar olinishini va qanday ko'rsatkichlar normal hisoblanishini ko'rsating.",
    },
    {
      situation: "Birinchi marta homilador ayol, 25 yosh, homiladorlik muddati 36 hafta, homiladorlik asoratsiz kechmoqda. Tug'ruq oldidan xavotirlanmoqda, unga qanday tayyorlanish va tug'ruqxonaga qachon borish kerakligini so'raydi.",
      question: "Tug'ruqqa tayyorlashda akusherka homilador ayolga nimalar haqida gapirib berishi kerakligini sanab bering: qanday simptomlarda tug'ruqxonaga murojaat qilish kerak, o'zi bilan nimalarni olish kerak, tug'ruqda o'z-o'zini og'riqsizlantirish va to'g'ri nafas olish usullari. Tug'ruqqa tayyorlash maktabidagi mashg'ulotlar qanday rol o'ynaydi?",
    },

    // ===== Fiziologik tug'ruq va tug'ruqdan keyingi davr =====
    {
      question: "Tug'ruqdan keyingi davrda (puerperiyda) ayolni parvarishlashda hamshiraning vazifalarini yozing: bachadon involyutsiyasi va lokiyalarni kuzatish, ko'krak bezlari va oraliq gigiyenasi, ayolga beriladigan maslahatlar.",
    },
    {
      question: "Tug'ruq darakchilarini sanab bering. Fiziologik preliminar davrni tavsiflang va tug'ruq boshlanishini preliminar davrdan farqlash imkonini beradigan belgilarni ayting.",
    },
    {
      question: "Ensa bilan kelishning oldingi ko'rinishida tug'ruq biomexanizmini tavsiflang: barcha momentlarni, yetakchi nuqtani, fiksatsiya nuqtasini va boshning qaysi o'lcham bilan tug'ilishini ayting. Ensa bilan kelishning orqa ko'rinishida tug'ruq biomexanizmi nimasi bilan farq qiladi?",
    },
    {
      question: "JSST va YuNISEF tomonidan tavsiya etilgan muvaffaqiyatli emizishning asosiy tamoyillarini sanab bering. Chaqaloqni ko'krakka qo'yish texnikasini, to'g'ri qamrab olish belgilarini va ko'krak sutini qo'lda sog'ish qoidalarini tavsiflang.",
    },
    {
      situation: "Qayta tug'ayotgan ayol, 28 yosh, homiladorlikning 39-haftasida tug'ruq blokiga yotqizildi. To'lg'oqlar muntazam, har 3–4 daqiqada, 35–40 soniyadan. Bachadon og'zi 5 sm ochilgan, homila pufagi butun, bosh kichik chanoqqa kirish qismiga taqalgan. Homila yurak urishi aniq, ritmik, daqiqasiga 142 marta. AQB 120/80 mm sim. ust., puls daqiqasiga 80 marta.",
      question: "Tug'ruq davri va fazasini aniqlang. Bu davrda akusherkaning tug'ayotgan ayol va homila ustidan kuzatuv rejasini tavsiflang: qaysi ko'rsatkichlar va qanday chastotada nazorat qilinadi, partogrammada nimalar aks ettiriladi, tug'ayotgan ayolga qanday tavsiyalar beriladi (holat, suyuqlik ichish, siydik chiqarish, to'lg'oq vaqtida nafas olish).",
    },
    {
      situation: "Birinchi marta tug'ayotgan ayol, 24 yosh, muddatida tug'ruq. Bachadon og'zi to'liq ochilgan, homila boshi chanoq tubida, o'qsimon chok kichik chanoq chiqish qismining to'g'ri o'lchamida, kichik liqildoq qov tomonida. Kuchanishlar har 2 daqiqada, 50–60 soniyadan, kuchanish vaqtida bosh jinsiy yoriqdan ko'rinadi. Homila yurak urishi daqiqasiga 136 marta, aniq, ritmik.",
      question: "Tug'ruq davrini, homilaning oldinda kelishi va pozitsiya ko'rinishini aniqlang. Tug'ruqning ikkinchi davrida akusherkaning harakatlarini tavsiflang: tug'ayotgan ayol va homila holatini nazorat qilish, tug'ruqni qabul qilishga tayyorgarlik, oraliqni himoya qilish bo'yicha akusherlik qo'llanmasining momentlari.",
    },
    {
      situation: "Tug'ayotgan ayol, 25 yosh, birinchi, muddatida tug'ruq. 5 daqiqa oldin vazni 3400 g bo'lgan tirik, muddatida tug'ilgan o'g'il bola tug'ildi. Ayolning ahvoli qoniqarli, AQB 120/75 mm sim. ust., puls daqiqasiga 78 marta. Jinsiy yo'llardan qonli ajralma yo'q.",
      question: "Tug'ruq davrini ayting. Yo'ldosh ajralish belgilarini va ajralgan yo'ldoshni chiqarish usullarini sanab bering. Yo'ldoshni ko'zdan kechirish tartibini va erta tug'ruqdan keyingi davrda ayolni kuzatishni tavsiflang.",
    },

    // ===== Homiladorlik patologiyasi =====
    {
      situation: "Birinchi marta homilador ayol, 22 yosh, homiladorlik muddati 35 hafta. Kuchli bosh og'rig'i, ko'z oldida «pashsha uchishi», to'sh osti (epigastral) sohasida og'riqdan shikoyat qilmoqda. AQB 170/110 mm sim. ust., oyoqlarida va qorin old devorida shishlar bor. Siydikda oqsil 3 g/l.",
      question: "Taxminiy tashxisingizni ayting. Qanday asorat xavfi bor? Shoshilinch yordam va hamshiralik parvarishi rejasini bosqichma-bosqich yozing.",
    },
    {
      question: "O'z-o'zidan bo'ladigan abortning klinik shakllarini (bosqichlarini) sanab bering va har birining xarakterli belgilarini ayting: shikoyatlar, ko'zgularda ko'rik va qin orqali tekshiruv ma'lumotlari, bachadon kattaligining homiladorlik muddatiga mosligi.",
    },
    {
      question: "OIVning onadan bolaga homiladorlik davrida, tug'ruqda va bola tug'ilgandan keyin yuqishining oldini olish chora-tadbirlarini sanab bering.",
    },
    {
      question: "TORCH abbreviaturasini izohlab bering, bachadon ichida infeksiyalanishning homila uchun mumkin bo'lgan oqibatlarini ayting va hamshira homilador ayolga ma'lum qilishi kerak bo'lgan profilaktika choralarini sanab bering.",
    },
    {
      situation: "Homilador ayol, 32 yosh, homiladorlik muddati 34 hafta, preeklampsiya sababli kuzatuvda. Ko'ngil aynishi, qusish, o'ng qovurg'a ostida va epigastriyda og'riq, holsizlikdan shikoyat qilmoqda. AQB 160/105 mm sim. ust., terisi sarg'ish (ikterik) tusda, in'eksiya joylarida gematomalar bor. Tahlillarda: gemoglobin 92 g/l, trombotsitlar 70 × 10⁹/l, ALT va AST 5 marta oshgan, siydik to'q rangda.",
      question: "Taxminiy tashxisni shakllantiring, ushbu holatning ona va homila uchun xavfli asoratlarini ayting hamda shifokor kelguncha va uning ko'rsatmasi bo'yicha akusherkaning harakatlarini yozing.",
    },
    {
      situation: "Homilador ayol, 36 yosh, homiladorlik muddati 33 hafta, chekadi, surunkali arterial gipertenziya bilan og'riydi. Bachadon tubining balandligi 27 sm, qorin aylanasi 82 sm; bemorning so'zlariga ko'ra, homila qimirlashi siyraklashgan. UTT ma'lumotlariga ko'ra homila o'lchamlari 30 haftaga mos keladi.",
      question: "Homiladorlikning qanday asoratini taxmin qilish mumkin? Buyuriladigan homila holatini baholash usullarini sanab bering va bemorni kuzatish hamda parvarishlashda hamshira (akusherka)ning rolini yozing.",
    },
    {
      situation: "Homilador ayol, 28 yosh, homiladorlik muddati 30 hafta, UTTda dixorial diamniotik egizaklar aniqlangan. Yurganda hansirash, jig'ildon qaynashi, kechqurunlari boldirlarda shish paydo bo'lishidan shikoyat qiladi. Bachadon tubining balandligi 38 sm, qorin aylanasi 112 sm.",
      question: "Ko'p homilali homiladorlikning ona va homilalar uchun mumkin bo'lgan asoratlarini sanab bering hamda bemorni kuzatish va hamshiralik parvarishi rejasini tuzing.",
    },
    {
      situation: "Bemor, 26 yosh, 10 yildan beri 1-tip qandli diabet bilan og'riydi va insulinni ko'p martalik in'eksiyalar rejimida qabul qiladi, homiladorlik bo'yicha 8 haftalik muddatda hisobga turdi.",
      question: "Qandli diabeti bor homilador ayolni kuzatish xususiyatlarini yozing: glikemiya nazorati va o'z-o'zini nazorat qilishga o'rgatish, gipoglikemiya belgilari va unda birinchi yordam, ona va homila uchun mumkin bo'lgan asoratlar.",
    },

    // ===== Tug'ruq patologiyasi, qon ketishlar va shoshilinch holatlar =====
    {
      situation: "Tug'ruqdan keyingi 4-kun. Ayolning tana harorati 38,7°C, et uvishishi, holsizlik, qorinning pastki qismida og'riq bor. Lokiyalar loyqa, yiringli, yoqimsiz hidli. Palpatsiyada bachadon og'riqli, yumshoq, involyutsiyasi sekinlashgan.",
      question: "Qanday asorat haqida o'ylaysiz? Hamshiralik muammolarini aniqlang va parvarish rejasini yozing.",
    },
    {
      question: "Tug'ruq faoliyati anomaliyalarining turlarini sanab bering, har biriga qisqacha tavsif bering va ona hamda homila uchun mumkin bo'lgan asoratlarni ayting.",
    },
    {
      question: "Tug'ayotgan ayolni shoshilinch kesar kesishga tayyorlashni hamda operatsiyadan keyingi birinchi sutkada tuqqan ayolga hamshiralik parvarishining xususiyatlarini, jumladan tromboembolik asoratlar profilaktikasini yozing.",
    },
    {
      question: "Oraliq yirtilishi darajalarini sanab bering. Tug'ruqdan keyingi davrda oraliqdagi choklarning hamshiralik parvarishini va akusherka tuqqan ayolga beradigan tavsiyalarni yozing.",
    },
    {
      question: "Tug'ruq zalida infeksion xavfsizlikni ta'minlash chora-tadbirlarini sanab bering: qo'llarga ishlov berish, shaxsiy himoya vositalari, yuzalar va asboblarga ishlov berish, tibbiy chiqindilar (shu jumladan yo'ldosh) bilan muomala qilish, avariya holatidagi harakatlar.",
    },
    {
      situation: "Tuqqan ayol, 30 yosh, 40 daqiqa oldin tabiiy tug'ruq yo'llari orqali tuqqan. Bachadonni tashqi massaj qilish va oksitotsin yuborilishiga qaramay, qon ketish davom etmoqda, qon yo'qotish 1300 ml ni tashkil etdi. Teri oqargan, sovuq ter, ayol karaxt holatda. Puls daqiqasiga 118 marta, AQB 85/50 mm sim. ust., kateter orqali siydik kam ajralmoqda.",
      question: "Shok indeksini hisoblang va tuqqan ayolning holatini baholang. Gemorragik shokda akusherkaning harakatlarini (mustaqil va shifokor ko'rsatmasi bo'yicha) yozing hamda nazorat qilinishi zarur bo'lgan ko'rsatkichlarni sanab bering.",
    },
    {
      situation: "Tuqqan ayol, 23 yosh, tug'ruqdan keyingi 5-kun, tug'ruq vaqtida epiziotomiya qilingan. O'tirganda kuchayadigan oraliq sohasidagi og'riqdan shikoyat qiladi, tana harorati 37,9 °C. Choklar shishgan, atrofidagi teri giperemiyalangan, jarohat yiringli karash bilan qoplangan, bitta chok kesib chiqqan.",
      question: "Asoratni aniqlang. Tuqqan ayolning muammolarini ayting va hamshiralik parvarishi rejasini tuzing.",
    },
    {
      situation: "Tuqqan ayol, 29 yosh, uzoq suvsiz davrdan keyin bajarilgan kesar kesishdan keyingi 6-kun. Tana harorati 39,4 °C, et uvishishi bilan, puls daqiqasiga 128 marta, AQB 90/55 mm sim. ust., nafas soni daqiqasiga 26 marta, ayol lanj, javoblarida chalkashadi, siydik kam ajralmoqda. Lokiyalar yiringli, yoqimsiz hidli.",
      question: "Qanday holatga shubha qilish kerak? Shifokorni zudlik bilan chaqirishni talab qiladigan belgilarni sanab bering, hamshira (akusherka)ning harakatlarini va bemorni kuzatish rejasini yozing.",
    },

    // ===== Yangi tug'ilgan chaqaloq =====
    {
      question: "Yangi tug'ilgan sog'lom chaqaloqqa tug'ruq zalida ko'rsatiladigan birlamchi parvarish bosqichlarini yozing («issiq zanjir», kindik tizimchasiga ishlov berish, ko'z infeksiyasining profilaktikasi, ko'krakka erta qo'yish, antropometriya).",
    },
    {
      question: "Tug'ruq zalida yangi tug'ilgan chaqaloqqa birlamchi reanimatsiya yordami algoritmini yozing: boshlang'ich choralar, o'pkaning sun'iy ventilyatsiyasiga (O'SV) ko'rsatmalar va uning chastotasi, yurakning bilvosita massajiga ko'rsatmalar, uni bajarish texnikasi va kompressiyalar bilan nafaslar nisbati, reanimatsiya samaradorligini baholash mezonlari.",
    },
    {
      question: "Yangi tug'ilgan chaqaloqning kamida oltita chegaraviy (tranzitor) holatini sanab bering. Ularning har biri uchun paydo bo'lish muddatlari, asosiy ko'rinishlari va hamshiraning taktikasini, shu jumladan onaga beriladigan maslahatlarni va shifokorga xabar berish zarur bo'lgan holatlarni ko'rsating.",
    },
    {
      question: "Tug'ruqxonada yangi tug'ilgan chaqaloqqa o'tkaziladigan profilaktik choralarni sanab bering: gepatit B va silga qarshi emlash, gemorragik kasallik profilaktikasi, neonatal va audiologik skrining. Muddatlarini, bajarish texnikasini, hamshiraning rolini va BSJ emlashiga asosiy qarshi ko'rsatmalarni ko'rsating.",
    },
    {
      situation: "Yangi tug'ilgan chaqaloqlar patologiyasi bo'limiga 32 haftalik muddatda 1600 g tana vazni va 41 sm bo'y bilan tug'ilgan bola o'tkazildi. So'rish refleksi susaygan, yutish refleksi saqlangan. Bola kuvezda.",
      question: "Ushbu bolani ko'rikdan o'tkazishda aniqlash mumkin bo'lgan chala tug'ilganlik belgilarini sanab bering. Hamshiralik parvarishi rejasini tuzing: issiqlik rejimini ta'minlash, oziqlantirish usullari va xususiyatlari, infeksiya profilaktikasi, ahvolini nazorat qilish, onaning parvarishda ishtiroki («kenguru» usuli).",
    },
    {
      situation: "Muddatida tug'ilgan 2 kunlik bola. Ona Rh-manfiy, bola Rh-musbat. Terining sarg'ayishi tug'ilgandan 12 soat o'tgach sezilgan, hozirga kelib u gavdaga tarqalgan. Shifokor fototerapiya tayinladi.",
      question: "Patologik sariqlikni fiziologik sariqlikdan ajratib turadigan belgilarni ayting. Yangi tug'ilgan chaqaloq gemolitik kasalligining ko'rinishlarini va paydo bo'lganda hamshira darhol shifokorga xabar berishi kerak bo'lgan simptomlarni sanab bering. Fototerapiya vaqtida bolaga ko'rsatiladigan hamshiralik parvarishini yozing.",
    },
    {
      situation: "Birinchi farzandini tuqqan ayol (muddatida tug'ilgan 4 kunlik qiz bola) uyga chiqishga tayyorlanmoqda. Kindik qoldig'i hali tushmagan, bola faqat ko'krak suti bilan oziqlanmoqda. Ona bolani uyda qanday parvarish qilishni bilmaydi.",
      question: "Uyga chiqarishdan oldin onani o'qitish rejasini tuzing: kindik qoldig'i va teri parvarishi, tagini yuvish, cho'miltirish, yo'rgaklash, xavfsiz uyqu, bolaning yetarli oziqlanish belgilari, shuningdek zudlik bilan shifokorga murojaat qilish zarur bo'lgan xavfli simptomlar.",
    },

    // ===== Ginekologiya: tekshirish usullari, hayz sikli, yallig'lanish kasalliklari =====
    {
      question: "Hayz siklining neyrogumoral boshqaruv darajalarini sanab bering va har bir darajada ishlab chiqariladigan gormonlarni ayting. Tuxumdon va bachadon sikllarining fazalarini hamda ularning o'zaro bog'liqligini yozing.",
    },
    {
      question: "Uretra, servikal kanal va qinning orqa gumbazidan flora va gonokokklarga surtma olish uchun bemorni tayyorlash, zarur jihozlar va surtma olish texnikasini yozing. Qin ajralmasi tozaligining to'rt darajasi tavsifini sanab bering.",
    },
    {
      question: "Jinsiy yo'l bilan yuqadigan asosiy infeksiyalar, ularning qo'zg'atuvchilari va yuqish yo'llarini ayting. Jinsiy yo'l bilan yuqadigan infeksiyalarning (JYYI) shaxsiy va jamoat profilaktikasi choralarini sanab bering hamda jinsiy sheriklarni tekshirish va jinsiy hayot gigiyenasiga o'rgatishda hamshira (akusherka)ning rolini yozing.",
    },
    {
      situation: "29 yoshli bemor homiladorlikni rejalashtirmoqda, hayz sikli nomuntazam. Ovulyatsiya bor-yo'qligini baholash uchun shifokor unga uch hayz sikli davomida bazal haroratni o'lchashni tavsiya qildi.",
      question: "Bemorni bazal haroratni o'lchash va grafik yuritish qoidalariga o'rgating. Normal ikki fazali siklda va anovulyator siklda grafik qanday ko'rinishini tushuntiring hamda natijalarni buzib ko'rsatishi mumkin bo'lgan omillarni ayting.",
    },
    {
      situation: "24 yoshli bemor qorin pastida kuchli og'riqlar, et uvishishi, ko'ngil aynishi, bir marta qusish shikoyatlari bilan ginekologiya bo'limiga keltirildi. Ikki hafta oldin unga bachadon ichi spirali qo'yilgan. Harorati 39,2 °C, puls daqiqasiga 108 marta, tili biroz quruq. Qorin o'rtacha dam bo'lgan, pastki qismlarida taranglashgan va keskin og'riqli, shu yerda Shchyotkin–Blyumberg simptomi musbat; qorinning yuqori qismlari yumshoq.",
      question: "Taxminiy holatni aniqlang. Shifokor kelguncha hamshira (akusherka)ning harakatlarini sanab bering, shifokor ko'rigidan oldin qaysi choralar qarshi ko'rsatilganligini ko'rsating va qinning orqa gumbazi orqali qorin bo'shlig'i punksiyasi uchun jihozlarni yozing.",
    },
    {
      situation: "15 yoshli qiz hayz 3 oyga kechikkandan keyin 12 kundan beri davom etayotgan bachadondan qon ketish bilan kasalxonaga yotqizildi. Holsizlik, bosh aylanishi, ko'z oldida «pashshalar» uchishidan shikoyat qiladi. Teri va shilliq qavatlar oqargan, puls daqiqasiga 102 marta, AQB 95/60 mm sim. ust., gemoglobin 84 g/l. Shifokor gemostatik terapiya va temir preparatlarini tayinladi.",
      question: "Statsionarda bemorga hamshiralik parvarishi rejasini tuzing. Shifoxonadan chiqqandan keyin qizga va uning ota-onasiga rejim, ovqatlanish, hayz kalendarini yuritish va dispanser kuzatuvi bo'yicha qanday tavsiyalar berasiz?",
    },

    // ===== Ginekologiya: o'smalar, kontratseptsiya, shoshilinch holatlar =====
    {
      situation: "Ayol, 38 yosh. Hayzlari ko'p miqdorda va uzoq (8–10 kun) davom etadi; holsizlik, bosh aylanishi, tez charchashdan shikoyat qiladi. Ginekologik ko'rikda bachadon 10 haftalik homiladorlik kattaligida, yuzasi notekis, zich. Qon tahlilida gemoglobin 85 g/l.",
      question: "Taxminiy tashxisingiz qanday? Qanday qo'shimcha tekshiruvlar o'tkazilishi kerak? Bemorni rejali operatsiyaga tayyorlashda hamshiraning vazifalarini yozing.",
    },
    {
      question: "Ko'krak bezlarini o'z-o'zini tekshirish usulini tavsiflang: reproduktiv yoshdagi va postmenopauzadagi ayollar uni qaysi muddatlarda o'tkazadi, u qanday bosqichlardan iborat (ko'zgu oldida ko'zdan kechirish, tik turgan va yotgan holatda paypaslash, so'rg'ichlar va qo'ltiq osti sohalarini ko'zdan kechirish). Ayolni xavotirga solishi kerak bo'lgan o'zgarishlarni sanab o'ting va ular aniqlanganda qanday yo'l tutishi kerakligini tushuntiring.",
    },
    {
      question: "Zamonaviy kontratseptsiya usullari guruhlarini (gormonal, bachadon ichi, baryer, tabiiy usullar, jarrohlik sterilizatsiyasi) sanab o'ting va har bir guruhga misollar keltiring. Usullarni Perl indeksi yordamida ishonchliligi bo'yicha taqqoslang va qaysi usul bir vaqtning o'zida jinsiy yo'l bilan yuqadigan infeksiyalardan ham himoya qilishini ko'rsating.",
    },
    {
      question: "Ginekologiyada «o'tkir qorin» tipida kechadigan shoshilinch holatlarni sanab o'ting (tuxumdon apopleksiyasi, tuxumdon o'smasi oyoqchasining buralishi, miomatoz tugun oziqlanishining buzilishi va boshq.). «O'tkir qorin»ning umumiy belgilarini ayting va shifokorgacha yordam ko'rsatish tamoyillarini tavsiflang: shifokor ko'rigigacha nima qilish zarur va nimalarga yo'l qo'yib bo'lmaydi.",
    },
    {
      situation: "23 yoshli bemor, 7 haftalik muddatda sun'iy abortdan (vakuum-aspiratsiya) keyingi 1-sutka. Homiladorlik birinchi, kelajakda farzand ko'rishni rejalashtirmoqda. Ilgari kontratseptsiya usullaridan foydalanmagan va ular haqida kam biladi. Umumiy ahvoli qoniqarli, jinsiy yo'llardan ajralmalar kam, qonli.",
      question: "Sun'iy abortning mumkin bo'lgan erta va kechki asoratlarini hamda bemor zudlik bilan shifokorga murojaat qilishi kerak bo'lgan xavotirli simptomlarni ayting. Abortdan keyingi reabilitatsiya va maslahat berish rejasini, jumladan rejim, gigiyena, jinsiy hayot va kontratseptsiya usulini tanlash bo'yicha tavsiyalarni tuzing.",
    },
    {
      situation: "51 yoshli bemor yuz va bo'yniga sutkasiga 12–15 martagacha issiq toshishi, tungi terlash, uyqu buzilishi, jizzakilik, yig'loqilikdan shikoyat qiladi. 10 oydan beri hayz ko'rmaydi. Chekadi, jismoniy faollik bilan shug'ullanmaydi, ratsionida sut mahsulotlari kam. Onasi 65 yoshida son suyagi bo'yni sinishini boshidan kechirgan.",
      question: "Bemorning holatini aniqlang va klimakterik sindrom belgilarining guruhlarini (erta, o'rta muddatli, kechki) ayting. Bemorda mavjud osteoporoz xavf omillarini sanab o'ting va turmush tarzi hamda osteoporoz profilaktikasi bo'yicha tavsiyalar tuzing. Agar shifokor menopauzal gormonal terapiya buyursa, hamshiraning vazifalari qanday?",
    },
    {
      situation: "47 yoshli bemorga laparotomik usulda rejali gisterektomiya (bachadon ekstirpatsiyasi) bajarildi. Uyg'onish palatasidan ginekologiya bo'limiga o'tkazildi. Uretral kateter qo'yilgan, qorin old devorida aseptik bog'lam. Bemor oyoq venalarining varikoz kasalligi va semizlik bilan og'riydi.",
      question: "Erta operatsiyadan keyingi davrda hamshiralik parvarishi rejasini tuzing: qaysi ko'rsatkichlarni va qanchalik tez-tez nazorat qilish, yara va kateterni qanday parvarish qilish, tromboembolik va o'pka asoratlari hamda ichak parezining oldini qanday olish, bemorni qachon va qanday faollashtirish kerak. Hamshira shifokorga darhol xabar berishi kerak bo'lgan asoratlar belgilarini sanab o'ting.",
    },
    {
      situation: "67 yoshli bemor qinda kechga borib va og'ir narsa ko'targandan keyin kuchayadigan begona jism sezgisi, yo'talganda va aksirganda siydik tomib ketishidan shikoyat qiladi. Anamnezida uchta tug'ruq, ulardan biri — yirik homila bilan; uzoq yillar og'ir jismoniy mehnat qilgan, surunkali ich qotishidan aziyat chekadi. Ko'rikda — bachadonning to'liq bo'lmagan chiqib qolishi. Bemor hozircha operatsiyadan bosh tortgan, shifokor pessariydan foydalanishni tavsiya qilgan.",
      question: "Bemorda mavjud jinsiy a'zolar tushishi va chiqib qolishining xavf omillarini ayting. Maslahat berish rejasini tuzing: pessariydan foydalanish va uni parvarish qilish qoidalari, Kegel mashqlarini bajarish texnikasi, rejim, ovqatlanish va ich qotishining oldini olish bo'yicha tavsiyalar.",
    },
  ],
});
