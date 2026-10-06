/* =====================================================================
   SAVOLLAR BAZASI
   Akusherlik va ginekologiya — hamshiralar uchun test
   =====================================================================

   BU FAYLNI QANDAY TAHRIRLASH KERAK
   ---------------------------------
   1. YANGI TEST QO'SHISH
      TESTLAR ro'yxatining oxiriga (yopuvchi  ];  belgisidan oldin)
      quyidagi blokni nusxalab qo'ying va matnlarni o'zgartiring:

        {
          savol: "Savol matni?",
          togri: "To'g'ri javob",
          notogri: [
            "Noto'g'ri javob 1",
            "Noto'g'ri javob 2",
            "Noto'g'ri javob 3",
          ],
          izoh: "Qisqa tushuntirish (ixtiyoriy, natijada ko'rsatiladi).",
        },

      VAZIYATLI MASALA bo'lsa, "savol" qatoridan oldin vaziyat qo'shing:
          vaziyat: "Bemor haqida ma'lumot ...",

   2. TO'G'RI VA NOTO'G'RI JAVOBNI ALMASHTIRISH
      Matnni "togri" qatoridan "notogri" ro'yxatiga ko'chiring (yoki aksincha).
      Har bir testda faqat BITTA "togri" javob bo'ladi.
      Noto'g'ri javoblar soni istalgancha bo'lishi mumkin (kamida 1 ta).

   3. Javob variantlari test vaqtida avtomatik aralashtiriladi —
      to'g'ri javob ekranda har safar har xil o'rinda (A, B, C yoki D) chiqadi.

   4. YANGI YOPIQ (YOZMA) SAVOL QO'SHISH — YOPIQ_SAVOLLAR ro'yxatiga:
        {
          vaziyat: "...",        // ixtiyoriy, kerak bo'lmasa bu qatorni o'chiring
          savol: "Savol matni",
        },

   MUHIM QOIDALAR
   - Har bir matn qo'shtirnoq ichida yoziladi:  "matn"
   - Matn ichida apostrof (o', g', ') bemalol ishlatiladi.
   - Matn ichida qo'shtirnoq kerak bo'lsa,  « »  belgilarini ishlating.
   - Har bir blokdan  }  keyin vergul  ,  qo'yishni unutmang.
   - Faylni saqlagach, brauzerda sahifani yangilang (F5).
     Xato bo'lsa, sahifa buni ko'rsatadi.
   ===================================================================== */


/* ----------------------------- SOZLAMALAR ----------------------------- */
const SOZLAMALAR = {
  sarlavha: "Akusherlik va ginekologiya",
  qismSarlavha: "Hamshiralar bilimini baholash testi",

  // Har bir urinishda nechta savol beriladi.
  // Bazada ko'proq savol bo'lsa — shuncha savol tasodifiy tanlanadi.
  // 0 yozilsa — bazadagi barcha savollar beriladi.
  testlarSoni: 25,
  yopiqSavollarSoni: 5,

  // true — test savollari tartibi har safar aralashtiriladi; false — fayldagi tartibda.
  savollarniAralashtirish: true,

  // Vaqt chegarasi (daqiqada). 0 — vaqt cheklanmagan.
  vaqtChegarasi: 0,

  // true — yakunda to'g'ri javoblar va izohlar ko'rsatiladi.
  // false — faqat umumiy ball ko'rsatiladi (imtihon uchun qulay).
  togriJavoblarniKorsatish: true,
};


/* ------------------------------- TESTLAR ------------------------------ */
const TESTLAR = [
  // ===== Oddiy testlar =====
  {
    savol: "Fiziologik homiladorlikning o'rtacha davomiyligi qancha?",
    togri: "280 kun (40 hafta)",
    notogri: [
      "240 kun (34 hafta)",
      "260 kun (37 hafta)",
      "300 kun (43 hafta)",
    ],
    izoh: "Oxirgi hayzning birinchi kunidan hisoblanganda homiladorlik o'rtacha 280 kun, ya'ni 40 hafta (10 akusherlik oyi) davom etadi.",
  },
  {
    savol: "Negele formulasi bo'yicha taxminiy tug'ruq sanasi qanday hisoblanadi?",
    togri: "Oxirgi hayzning birinchi kunidan 3 oy ayirib, 7 kun qo'shiladi",
    notogri: [
      "Oxirgi hayzning birinchi kuniga 3 oy qo'shib, 7 kun ayiriladi",
      "Oxirgi hayzning oxirgi kuniga 9 oy qo'shiladi",
      "Oxirgi hayzning birinchi kunidan 2 oy ayirib, 14 kun qo'shiladi",
    ],
    izoh: "Masalan: oxirgi hayz 10-yanvarda boshlangan bo'lsa: 10-yanvar − 3 oy = 10-oktabr, + 7 kun = 17-oktabr.",
  },
  {
    savol: "Homila yurak urishining normal chastotasi qancha?",
    togri: "Daqiqasiga 110–160 marta",
    notogri: [
      "Daqiqasiga 60–80 marta",
      "Daqiqasiga 80–100 marta",
      "Daqiqasiga 180–220 marta",
    ],
    izoh: "Homila yurak urishi daqiqasiga 110 dan kam (bradikardiya) yoki 160 dan ko'p (taxikardiya) bo'lishi homila gipoksiyasi belgisi bo'lishi mumkin.",
  },
  {
    savol: "Homiladorlikning 24-haftasida bachadon tubi qayerda joylashadi?",
    togri: "Kindik sathida",
    notogri: [
      "Qov suyagining yuqori chetida",
      "Kindik bilan qov suyagi o'rtasida",
      "Xanjarsimon o'simta sathida",
    ],
    izoh: "12 hafta — qov suyagi ustida; 16 hafta — kindik bilan qov o'rtasida; 24 hafta — kindik sathida; 36 hafta — xanjarsimon o'simta sathida.",
  },
  {
    savol: "Leopold–Levitskiy usullarining birinchisi yordamida nima aniqlanadi?",
    togri: "Bachadon tubining balandligi va bachadon tubida joylashgan homila qismi",
    notogri: [
      "Homilaning holati va pozitsiyasi (orqasi qaysi tomonda ekanligi)",
      "Homilaning oldinda yotgan qismi",
      "Oldinda yotgan qismning kichik chanoqqa nisbati",
    ],
    izoh: "1-usul — bachadon tubi va undagi qism; 2-usul — homila holati va pozitsiyasi; 3-usul — oldinda yotgan qism; 4-usul — oldinda yotgan qismning kichik chanoqqa nisbati.",
  },
  {
    savol: "Apgar shkalasi bo'yicha yangi tug'ilgan chaqaloq qaysi belgilar asosida baholanadi?",
    togri: "Yurak urishi, nafas, mushak tonusi, reflekslar, teri rangi",
    notogri: [
      "Tana vazni, bo'yi, bosh aylanasi, ko'krak aylanasi, harorat",
      "Arterial bosim, harorat, qondagi qand, gemoglobin, diurez",
      "So'rish, uyqu, yig'lash, siydik ajratish, ich kelishi",
    ],
    izoh: "Har bir belgi 0–2 ball bilan baholanadi. Baholash tug'ilgandan keyin 1- va 5-daqiqada o'tkaziladi; 7–10 ball — qoniqarli holat.",
  },
  {
    savol: "Tug'ruqning uchinchi (yo'ldosh) davri normada qancha davom etadi?",
    togri: "30 daqiqagacha",
    notogri: [
      "2 soatgacha",
      "6 soatgacha",
      "12 soatgacha",
    ],
    izoh: "Yo'ldosh davri homila tug'ilgandan boshlanib, yo'ldosh tug'ilishi bilan tugaydi.",
  },
  {
    savol: "Tug'ruqda fiziologik (yo'l qo'yiladigan) qon yo'qotish hajmi qancha?",
    togri: "Tana vaznining 0,5 foizigacha (taxminan 500 ml gacha)",
    notogri: [
      "Tana vaznining 1,5 foizigacha (taxminan 1000 ml gacha)",
      "Tana vaznining 2 foizigacha (taxminan 1200 ml gacha)",
      "Tana vaznining 3 foizigacha (taxminan 2000 ml gacha)",
    ],
    izoh: "Tabiiy tug'ruqdan keyin 500 ml dan ortiq qon yo'qotish tug'ruqdan keyingi qon ketish deb hisoblanadi.",
  },
  {
    savol: "Homiladorlikni rejalashtirayotgan ayolga homilada nerv nayi nuqsonlarining oldini olish uchun nima tavsiya etiladi?",
    togri: "Foliy kislotasi — kuniga 400 mkg (homiladorlikdan oldin va 1-trimestrda)",
    notogri: [
      "Katta dozada A vitamini",
      "Profilaktik antibiotiklar kursi",
      "Siydik haydovchi dorilar",
    ],
    izoh: "Foliy kislotasini homiladorlikdan 1–3 oy oldin boshlab, 12 haftagacha qabul qilish tavsiya etiladi. Katta dozadagi A vitamini homilaga zararli (teratogen) ta'sir ko'rsatadi.",
  },
  {
    savol: "Preeklampsiyaning asosiy klinik belgilariga nimalar kiradi?",
    togri: "Arterial gipertenziya, proteinuriya, shishlar",
    notogri: [
      "Arterial gipotenziya, glyukozuriya, isitma",
      "Taxikardiya, anemiya, sariqlik",
      "Ich ketishi, qusish, tana haroratining pasayishi",
    ],
    izoh: "Preeklampsiya homiladorlikning 20-haftasidan keyin arterial bosimning 140/90 mm sim. ust. va undan yuqori bo'lishi hamda proteinuriya bilan namoyon bo'ladi.",
  },
  {
    savol: "Eklampsiya tutqanoqlarining oldini olish va davolashda tanlov preparati qaysi?",
    togri: "Magniy sulfat",
    notogri: [
      "Oksitotsin",
      "Furosemid",
      "Metilergometrin",
    ],
    izoh: "Magniy sulfat — JSST tavsiya etgan asosiy preparat. Uning antidoti — 10% li kalsiy glyukonat eritmasi.",
  },
  {
    savol: "Normal hayz siklining davomiyligi qancha?",
    togri: "21–35 kun",
    notogri: [
      "7–14 kun",
      "14–20 kun",
      "40–60 kun",
    ],
    izoh: "Hayz siklining birinchi kuni — hayz qoni kela boshlagan kun. Hayz qon ketishining o'zi odatda 3–7 kun davom etadi.",
  },
  {
    savol: "Amenoreya deb nimaga aytiladi?",
    togri: "Hayzning 6 oy va undan ortiq vaqt davomida bo'lmasligi",
    notogri: [
      "Ko'p miqdorda va uzoq davom etadigan hayz",
      "Og'riqli hayz",
      "Hayzlar oralig'idagi qon ketish",
    ],
    izoh: "Ko'p va uzoq hayz — menorragiya; og'riqli hayz — algomenoreya (dismenoreya); hayzlar oralig'idagi qon ketish — metrorragiya.",
  },
  {
    savol: "Bachadon bo'yni saratonini erta aniqlash (skrining) uchun qaysi tekshiruv qo'llaniladi?",
    togri: "Bachadon bo'ynidan olingan sitologik surtma (PAP-test) va VPCh testi",
    notogri: [
      "Umumiy qon tahlili",
      "Ko'krak bezlari mammografiyasi",
      "Siydikning umumiy tahlili",
    ],
    izoh: "Bachadon bo'yni saratonining asosiy sababi — inson papillomavirusi (VPCh), ayniqsa 16 va 18 turlari. Skrining saraton oldi o'zgarishlarini erta aniqlash imkonini beradi.",
  },
  {
    savol: "Tug'ruqdan keyingi davr (puerperiy) qancha davom etadi?",
    togri: "6–8 hafta",
    notogri: [
      "2–3 kun",
      "10 kun",
      "6 oy",
    ],
    izoh: "Bu davrda bachadon involyutsiyasi va homiladorlik bilan bog'liq o'zgarishlarning qayta tiklanishi yakunlanadi.",
  },

  // ===== Vaziyatli masalalar =====
  {
    vaziyat: "Qayta homilador ayol, 30 yosh, homiladorlik muddati 34 hafta. Tunda uyqu vaqtida to'satdan qindan qip-qizil qon kela boshlagan. Og'riq yo'q. Bachadon tonusi normal, palpatsiyada og'riqsiz. Homila yurak urishi daqiqasiga 140 marta.",
    savol: "Qaysi patologiya haqida o'ylash kerak?",
    togri: "Yo'ldoshning oldinda kelishi (placenta previa)",
    notogri: [
      "Normal joylashgan yo'ldoshning muddatidan oldin ko'chishi",
      "Bachadon yorilishi",
      "Homila oldi suvlarining muddatidan oldin ketishi",
    ],
    izoh: "Og'riqsiz, qaytalanuvchi, qip-qizil qon ketish — yo'ldosh oldinda kelishining asosiy belgisi. Bunday bemorda operatsiya xonasidan tashqarida qin orqali tekshiruv o'tkazilmaydi.",
  },
  {
    vaziyat: "Homiladorlikning 36-haftasi. Ayolda preeklampsiya aniqlangan. To'satdan qorinda kuchli og'riq paydo bo'lgan, bachadon taranglashgan, palpatsiyada og'riqli. Qindan oz miqdorda to'q rangli qon kelmoqda. Teri qoplamlari oqargan, puls daqiqasiga 110 marta. Homila yurak urishi daqiqasiga 100 marta.",
    savol: "Taxminiy tashxisingiz qanday?",
    togri: "Normal joylashgan yo'ldoshning muddatidan oldin ko'chishi",
    notogri: [
      "Yo'ldoshning oldinda kelishi",
      "Soxta to'lg'oqlar (Brekston-Hiks qisqarishlari)",
      "O'tkir sistit",
    ],
    izoh: "Qorinda og'riq, bachadon tarangligi, homila holatining yomonlashuvi va ichki qon ketish belgilari yo'ldosh ko'chishiga xos. Preeklampsiya — asosiy xavf omillaridan biri.",
  },
  {
    vaziyat: "Ayol, 28 yosh. Hayz 7 haftaga kechikkan. Qorin pastki qismida to'satdan o'tkir og'riq paydo bo'lib, to'g'ri ichak va yelkaga tarqalmoqda. Bosh aylanishi, ko'ngil aynishi bor. Teri oqargan, AQB 80/50 mm sim. ust., puls daqiqasiga 120 marta. Homiladorlik testi musbat.",
    savol: "Taxminiy tashxis va hamshiraning to'g'ri harakati qaysi?",
    togri: "Uzilgan bachadondan tashqari (nay) homiladorligi — shifokorni zudlik bilan chaqirish, venani kateterlash va bemorni shoshilinch operatsiyaga tayyorlash",
    notogri: [
      "O'tkir sistit — ko'p suyuqlik ichirish va kuzatish",
      "Normal bachadon ichi homiladorligi — rejali ko'rikka yozib qo'yish",
      "Ich qotishi — tozalovchi huqna qilish va qoringa issiq grelka qo'yish",
    ],
    izoh: "Gemorragik shok belgilari bilan kechayotgan bachadondan tashqari homiladorlikda bemor shoshilinch operatsiya qilinadi. Qoringa issiq qo'yish va huqna qilish qat'iyan man etiladi.",
  },
  {
    vaziyat: "Tug'ruqdan 20 daqiqa o'tgach (yo'ldosh to'liq tug'ilgan) ayolning qinidan ko'p miqdorda qon kela boshladi. Palpatsiyada bachadon yumshoq, chegaralari aniq emas, tubi kindikdan yuqorida.",
    savol: "Akusherka (hamshira)ning birinchi navbatdagi harakatlari qaysi?",
    togri: "Yordam chaqirish, bachadonni tashqi massaj qilish, siydik pufagini kateterlash va shifokor ko'rsatmasi bilan uterotonik (oksitotsin) yuborish",
    notogri: [
      "Ayolni yotqizib, 1 soat davomida kuzatishni davom ettirish",
      "Qorinning pastki qismiga issiq grelka qo'yish",
      "Faqat og'riq qoldiruvchi dori yuborish",
    ],
    izoh: "Bachadon atoniyasi — tug'ruqdan keyingi qon ketishning eng ko'p uchraydigan sababi. To'la siydik pufagi bachadon qisqarishiga xalaqit beradi.",
  },
  {
    vaziyat: "Birinchi marta tug'ayotgan ayol tug'ruqning birinchi davrida. Homila pufagi o'z-o'zidan yorildi, yashil rangli homila oldi suvlari ketdi.",
    savol: "Bu belgi nimadan dalolat beradi?",
    togri: "Homila ichi gipoksiyasidan (suvlarga mekoniy aralashgan)",
    notogri: [
      "Normal holat, hech qanday chora kerak emas",
      "Ko'p suvlilikdan",
      "Ona organizmida temir moddasi ko'pligidan",
    ],
    izoh: "Yashil rangli suvlar homila kislorod yetishmovchiligi tufayli mekoniy ajratganini ko'rsatadi. Homila yurak urishini doimiy nazorat qilish va shifokorga xabar berish zarur.",
  },
  {
    vaziyat: "Qoni Rh-manfiy bo'lgan ayol Rh-musbat chaqaloq tug'di. Homiladorlik davomida ayol qonida rezus-antitanachalar aniqlanmagan.",
    savol: "Rezus-sensibilizatsiyaning oldini olish uchun nima qilinadi?",
    togri: "Tug'ruqdan keyin 72 soat ichida onaga anti-D (antirezus) immunoglobulin yuboriladi",
    notogri: [
      "Chaqaloqqa darhol qon quyiladi",
      "Hech qanday chora talab etilmaydi",
      "Onaga 72 soat ichida Rh-musbat qon quyiladi",
    ],
    izoh: "Anti-D immunoglobulin onada rezus-antitanachalar hosil bo'lishining oldini oladi va keyingi homiladorlikda homilaning gemolitik kasalligini profilaktika qiladi.",
  },
  {
    vaziyat: "Og'ir preeklampsiya tashxisi bilan ayolga venadan magniy sulfat yuborilmoqda. Navbatdagi kuzatuvda: nafas soni daqiqasiga 10 marta, tizza reflekslari aniqlanmaydi, so'nggi 4 soatda siydik miqdori 60 ml.",
    savol: "Hamshiraning to'g'ri harakati qaysi?",
    togri: "Magniy sulfat yuborishni to'xtatish, shifokorga zudlik bilan xabar berish va 10% li kalsiy glyukonat tayyorlash",
    notogri: [
      "Magniy sulfat yuborish tezligini oshirish",
      "Bemorga qo'shimcha tinchlantiruvchi dori berish",
      "Hech narsani o'zgartirmay, kuzatishni davom ettirish",
    ],
    izoh: "Nafas soni daqiqasiga 16 dan kam, tizza reflekslarining yo'qolishi va diurezning soatiga 30 ml dan kam bo'lishi — magniy sulfat bilan zaharlanish belgilari.",
  },
  {
    vaziyat: "Ayol, 25 yosh, tashqi jinsiy a'zolar sohasida kuchli qichishish, achishish va oq rangli, pishloqsimon (tvorogsimon) ajralmalardan shikoyat qiladi. Yaqinda antibiotiklar bilan davolangan.",
    savol: "Taxminiy tashxis qaysi?",
    togri: "Vaginal kandidoz (zamburug'li infeksiya)",
    notogri: [
      "Trixomoniaz",
      "Bakterial vaginoz",
      "Atrofik vaginit",
    ],
    izoh: "Trixomoniazda ajralma ko'pikli, sarg'ish-yashil; bakterial vaginozda kulrang, «baliq hidli» bo'ladi. Antibiotiklar qabul qilish kandidozga moyillik tug'diradi.",
  },
  {
    vaziyat: "Homiladorlikning 39-haftasi. Ayol qorin pastida davriy og'riqlardan shikoyat qilib keldi. To'lg'oqlar har 3–4 daqiqada, 40–45 soniya davom etadi va kuchayib bormoqda. Qin orqali tekshiruvda bachadon bo'yni 6 sm ga ochilgan, homila pufagi butun.",
    savol: "Ayol tug'ruqning qaysi davrida?",
    togri: "Tug'ruqning birinchi davri (ochilish davri), faol fazasi",
    notogri: [
      "Soxta to'lg'oqlar (prelyuminar davr)",
      "Tug'ruqning ikkinchi davri (kuchanish, homilaning tug'ilish davri)",
      "Tug'ruqning uchinchi davri (yo'ldosh davri)",
    ],
    izoh: "Birinchi davr bachadon bo'yni to'liq (10 sm) ochilguncha davom etadi. Ikkinchi davr — to'liq ochilishdan homila tug'ilguncha, uchinchi davr — yo'ldosh tug'ilguncha.",
  },
  {
    vaziyat: "Sog'lom, muddatida tug'ilgan chaqaloq. Tug'ilishi bilan baqirdi, mustaqil nafas olmoqda, mushak tonusi yaxshi.",
    savol: "Akusherka (hamshira)ning keyingi to'g'ri harakati qaysi?",
    togri: "Chaqaloqni quritib, onaning qorniga «teri-teriga» yotqizish, ustini issiq yopish va birinchi soat ichida ko'krakka qo'yish",
    notogri: [
      "Chaqaloqni darhol cho'miltirish va tortish",
      "Chaqaloqni onadan ajratib, bolalar bo'limiga olib ketish",
      "Nafas yo'llarini majburiy so'rib tozalash va kislorod berish",
    ],
    izoh: "«Issiq zanjir» va «teri-teriga» kontakt chaqaloqni gipotermiyadan saqlaydi va erta emizishni ta'minlaydi. Sog'lom chaqaloqda nafas yo'llarini muntazam so'rish tavsiya etilmaydi.",
  },
];


/* ------------------- YOPIQ SAVOLLAR (yozma javob) --------------------- */
const YOPIQ_SAVOLLAR = [
  {
    vaziyat: "Birinchi marta homilador ayol, 22 yosh, homiladorlik muddati 35 hafta. Kuchli bosh og'rig'i, ko'z oldida «pashsha uchishi», to'sh osti (epigastral) sohasida og'riqdan shikoyat qilmoqda. AQB 170/110 mm sim. ust., oyoqlarida va qorin old devorida shishlar bor. Siydikda oqsil 3 g/l.",
    savol: "Taxminiy tashxisingizni ayting. Qanday asorat xavfi bor? Shoshilinch yordam va hamshiralik parvarishi rejasini bosqichma-bosqich yozing.",
  },
  {
    savol: "Tug'ruqdan keyingi davrda (puerperiyda) ayolni parvarishlashda hamshiraning vazifalarini yozing: bachadon involyutsiyasi va lokiyalarni kuzatish, ko'krak bezlari va oraliq gigiyenasi, ayolga beriladigan maslahatlar.",
  },
  {
    vaziyat: "Tug'ruqdan keyingi 4-kun. Ayolning tana harorati 38,7°C, et uvishishi, holsizlik, qorinning pastki qismida og'riq bor. Lokiyalar loyqa, yiringli, yoqimsiz hidli. Palpatsiyada bachadon og'riqli, yumshoq, involyutsiyasi sekinlashgan.",
    savol: "Qanday asorat haqida o'ylaysiz? Hamshiralik muammolarini aniqlang va parvarish rejasini yozing.",
  },
  {
    savol: "Yangi tug'ilgan sog'lom chaqaloqqa tug'ruq zalida ko'rsatiladigan birlamchi parvarish bosqichlarini yozing («issiq zanjir», kindik tizimchasiga ishlov berish, ko'z infeksiyasining profilaktikasi, ko'krakka erta qo'yish, antropometriya).",
  },
  {
    vaziyat: "Ayol, 38 yosh. Hayzlari ko'p miqdorda va uzoq (8–10 kun) davom etadi; holsizlik, bosh aylanishi, tez charchashdan shikoyat qiladi. Ginekologik ko'rikda bachadon 10 haftalik homiladorlik kattaligida, yuzasi notekis, zich. Qon tahlilida gemoglobin 85 g/l.",
    savol: "Taxminiy tashxisingiz qanday? Qanday qo'shimcha tekshiruvlar o'tkazilishi kerak? Bemorni rejali operatsiyaga tayyorlashda hamshiraning vazifalarini yozing.",
  },
];
