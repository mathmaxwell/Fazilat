/* =====================================================================
   SAVOLLAR: GENETIKA (o'zbek tili)
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

   5. Bu savollarning ruscha varianti alohida faylda (questions/ru-genetics.js) saqlanadi —
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
  topic: "Genetika",

  tests: [
    // ===== Genetika: irsiyatning sitologik asoslari =====
    {
      question: "Sentromerasi o'rtada joylashgan va yelkalari teng uzunlikda bo'lgan xromosoma quyidagicha ataladi:",
      correct: "Metatsentrik",
      wrong: [
        "Submetatsentrik",
        "Akrotsentrik",
        "Telotsentrik",
      ],
      explanation: "Metatsentrik xromosomada sentromera uni ikkita teng yelkaga ajratadi (masalan, 1, 3, 19, 20-xromosomalar). Submetatsentrik xromosomaning yelkalari teng emas, akrotsentrik xromosomaning qisqa yelkasi juda kichik, telotsentrik xromosomalar esa odamda normada uchramaydi.",
    },
    {
      question: "Xromosomalarning ularni bir-biriga yopishib qolishdan va replikatsiya vaqtida qisqarishdan himoya qiladigan uchki qismlari quyidagicha ataladi:",
      correct: "Telomeralar",
      wrong: [
        "Sentromeralar",
        "Kinetoxorlar",
        "Xromomeralar",
      ],
      explanation: "Telomeralar — xromosomalarning ko'p marta takrorlanuvchi qisqa DNK ketma-ketliklaridan (odamda TTAGGG) iborat uchki qismlari bo'lib, xromosoma uchlarini barqarorlashtiradi. Sentromera — birlamchi belbog', uning kinetoxorlariga bo'linish urchug'i iplari birikadi.",
    },
    {
      question: "Geteroxromatin — bu xromosomalarning shunday qismlariki, ular:",
      correct: "Interfazada spirallashgan holatini saqlaydi va kam faol",
      wrong: [
        "Interfazada despirallashgan va faol transkripsiyalanadi",
        "Faol ishlovchi genlarning ko'p qismini saqlaydi",
        "Faqat jinsiy xromosomalarda uchraydi",
      ],
      explanation: "Geteroxromatin interfaza yadrosida kondensatsiyalangan holda qoladi, jadal bo'yaladi va deyarli transkripsiyalanmaydi; euxromatin esa, aksincha, despirallashgan bo'lib, faol genlarni saqlaydi. Geteroxromatin qismlari faqat jinsiy xromosomalarda emas, barcha xromosomalarda (masalan, sentromeralar atrofida) bor.",
    },
    {
      question: "Interfaza yadrosining xromatini — bu:",
      correct: "DNKning oqsillar, eng avvalo gistonlar bilan kompleksi",
      wrong: [
        "Ribosomal RNKning oqsillar bilan kompleksi",
        "Ichki yadro qobig'ining lipoproteidlari",
        "Nuklein kislotalarsiz yadro shirasi oqsillari",
      ],
      explanation: "Xromatin — interfazadagi despirallashgan xromosomalar: giston va giston bo'lmagan oqsillar bilan nukleosomalarga o'ralgan DNK molekulalari. Bo'linishga tayyorgarlik vaqtida xromatin spirallashadi va mikroskopda ko'rinadigan xromosomalarni hosil qiladi.",
    },
    {
      question: "Idiogramma — bu:",
      correct: "To'plamdagi xromosomalarning kattaligi kamayib borish tartibida joylashtirilgan sxematik tasviri",
      wrong: [
        "Xromosomalar tartibga solinib, joylashtirilgunga qadar metafaza plastinkasining fotosurati",
        "Kariotipning xromosomalar umumiy soni va jinsiy xromosomalar to'plami ko'rsatilgan formula shaklidagi yozuvi",
        "Kasallar belgilangan oila shajarasining grafik tasviri",
      ],
      explanation: "Idiogramma — sxema ko'rinishidagi tizimlashtirilgan kariotip: xromosomalar sentromera joylashuvi va differensial bo'yash manzarasini hisobga olgan holda kattaligi kamayib borish tartibida juft-juft qilib joylashtiriladi. 46,XX ko'rinishidagi yozuv — kariotip formulasi, shajara sxemasi esa genealogik usul materiali.",
    },
    {
      question: "47,XX,+18 kariotip yozuvi quyidagini anglatadi:",
      correct: "18-xromosoma bo'yicha trisomiyali ayol kariotipi",
      wrong: [
        "18-xromosoma bo'yicha trisomiyali erkak kariotipi",
        "18-xromosoma bo'yicha monosomiyali ayol kariotipi",
        "18-xromosoma translokatsiyasi bor ayol kariotipi",
      ],
      explanation: "Kariotip yozuvida xromosomalarning umumiy soni (47), so'ngra jinsiy xromosomalar (XX — ayol jinsi) ko'rsatiladi, raqam oldidagi «+» belgisi esa ortiqcha xromosomani, ya'ni 18-trisomiyani bildiradi. Xromosoma yo'qolishi «−» belgisi bilan, translokatsiya esa t harfi bilan belgilanadi.",
    },
    {
      question: "Somatik hujayralar yadrolaridagi Barr tanachasi (X-jinsiy xromatin) — bu:",
      correct: "Nofaol kondensatsiyalangan X-xromosoma",
      wrong: [
        "Yadrodagi kondensatsiyalangan Y-xromosoma",
        "Yadro qobig'iga yondosh yadrocha",
        "Yadro membranasi yonidagi ribosomalar to'plami",
      ],
      explanation: "M. Layon gipotezasiga ko'ra, ikki va undan ortiq X-xromosomasi bor hujayralarda embriogenezning erta bosqichlarida bittasidan tashqari barcha X-xromosomalar inaktivatsiyalanadi va spirallashgan holda qolib, yadro qobig'i yonida Barr tanachalari sifatida aniqlanadi. Y-xromosoma Barr tanachasini hosil qilmaydi (u lyuminessent bo'yashda Y-xromatin sifatida aniqlanadi).",
    },
    {
      question: "Hujayra siklida DNKning ikkilanishi (replikatsiyasi) quyidagi davrda sodir bo'ladi:",
      correct: "Interfazaning sintetik (S) davrida",
      wrong: [
        "Interfazaning presintetik (G1) davrida",
        "Interfazaning postsintetik (G2) davrida",
        "Mitotik bo'linishning profazasida",
      ],
      explanation: "S-davrda DNK replikatsiyasi sodir bo'ladi: har bir xromosoma ikkita opa-singil xromatidadan iborat bo'la boshlaydi va hujayra formulasi 2n2c dan 2n4c ga o'zgaradi. G1 da hujayra o'sadi va DNK sinteziga tayyorlanadi, G2 da esa bo'lajak bo'linish uchun oqsillar va energiya to'playdi.",
    },
    {
      question: "Interfazaning postsintetik (G2) davrida odam somatik hujayrasining genetik formulasi:",
      correct: "2n4c",
      wrong: [
        "2n2c",
        "4n4c",
        "n2c",
      ],
      explanation: "S-davrda DNK replikatsiyasidan keyin xromosomalar soni o'zgarmaydi (2n = 46), DNK miqdori esa ikki baravar ortadi (4c), chunki har bir xromosoma ikkita xromatidadan iborat. 4n4c formulasi mitoz anafazasiga, 2n2c esa G1 davriga xos.",
    },
    {
      question: "Opa-singil xromatidalarning hujayraning qarama-qarshi qutblariga ajralishi quyidagi bosqichda sodir bo'ladi:",
      correct: "Mitoz anafazasida",
      wrong: [
        "Mitoz metafazasida",
        "Mitoz profazasida",
        "Meyozning I anafazasida",
      ],
      explanation: "Mitoz anafazasida sentromeralar bo'linadi va mustaqil xromosomalarga aylangan opa-singil xromatidalar qutblarga tarqaladi. Meyozning I anafazasida esa qutblarga har biri ikkita xromatidadan iborat butun gomologik xromosomalar ajraladi.",
    },
    {
      question: "Mitozning asosiy biologik ahamiyati quyidagidan iborat:",
      correct: "Genetik jihatdan bir xil hujayralar hosil bo'lishi",
      wrong: [
        "Hujayralarda xromosomalar sonining ikki baravar kamayishi",
        "Ota-ona genlarining yangi birikmalari hosil bo'lishi",
        "Odamda jinsiy hujayralar hosil bo'lishi",
      ],
      explanation: "Interfazadagi DNK replikatsiyasi va opa-singil xromatidalarning aniq ajralishi tufayli har bir qiz hujayra ona hujayradagidek xromosomalar to'plamini (2n) oladi; bu o'sish, regeneratsiya va hujayralar almashinuvining asosidir. Xromosomalar sonining kamayishini va genlarning yangi birikmalarini meyoz ta'minlaydi.",
    },
    {
      question: "Gomologik xromosomalar o'rtasida krossingover quyidagi bosqichda sodir bo'ladi:",
      correct: "Meyozning I profazasida",
      wrong: [
        "Meyoz oldidan interfazada",
        "Meyozning I anafazasida",
        "Meyozning II metafazasida",
      ],
      explanation: "Krossingover I profazada (paxitena bosqichida) gomologik xromosomalar kon'yugatsiyalanib, ularning opa-singil bo'lmagan xromatidalari qismlar bilan almashinganda sodir bo'ladi. Interfazada DNK ikkilanadi, I anafazada esa gomologlar allaqachon qutblarga tarqaladi.",
    },
    {
      question: "Meyozda xromosomalar sonining ikki baravar kamayishi (reduksiya) quyidagi jarayon natijasida yuz beradi:",
      correct: "I anafazada gomologik xromosomalarning ajralishi",
      wrong: [
        "II anafazada opa-singil xromatidalarning ajralishi",
        "Meyoz oldidan interfazada DNKning ikkilanishi",
        "Krossingover vaqtida xromosomalarning qismlar bilan almashinishi",
      ],
      explanation: "I anafazada har bir qutbga gomologlarning har bir juftidan (ikkita xromatidadan iborat) bittadan xromosoma ketadi, shuning uchun qiz hujayralar n2c gaploid to'plamni oladi. Ikkinchi bo'linishda opa-singil xromatidalar ajraladi va xromosomalar soni endi o'zgarmaydi (n2c → nc).",
    },
    {
      question: "Spermatogenezdan farqli o'laroq, ovogenezda quyidagi davr bo'lmaydi:",
      correct: "Shakllanish",
      wrong: [
        "Ko'payish",
        "O'sish",
        "Yetilish",
      ],
      explanation: "Spermatogenez to'rt davrni o'z ichiga oladi: ko'payish, o'sish, yetilish va shakllanish (spermatidaning harakatchan spermatozoidga aylanishi). Ovogenezda uch davr bor — ko'payish, o'sish va yetilish; tuxum hujayra shakllanish bosqichini o'tmaydi.",
    },
    {
      question: "Odamda ovulyatsiya vaqtida ayol jinsiy hujayrasi quyidagi bosqichda bo'ladi:",
      correct: "Meyozning II metafazasi",
      wrong: [
        "Meyozning I profazasi",
        "Meyozning I anafazasi",
        "Meyozning II telofazasi",
      ],
      explanation: "Ovulyatsiyadan oldin I tartibli ovotsit meyozning birinchi bo'linishini yakunlaydi, hosil bo'lgan II tartibli ovotsit esa II metafazada to'xtab qoladi. Ikkinchi bo'linish faqat spermatozoid kirganda yakunlanib, yetuk tuxum hujayra va ikkinchi yo'naltiruvchi tanacha hosil bo'ladi.",
    },
    {
      question: "Spermatozoid akrosomasida quyidagilar bo'ladi:",
      correct: "Tuxum hujayra qobiqlarini eritadigan fermentlar",
      wrong: [
        "Irsiy axborotni saqlovchi gaploid yadro",
        "Xivchin harakatini ta'minlovchi mitoxondriyalar",
        "Murtakni oziqlantirish uchun tuxum sarig'i zaxirasi",
      ],
      explanation: "Akrosoma — spermatozoid boshchasining oldingi uchidagi o'zgargan Golji kompleksi; uning fermentlari (gialuronidaza, akrozin) akrosoma reaksiyasi vaqtida tuxum hujayra qobiqlarini eritadi. Yadro boshchada akrosoma ostida, mitoxondriyalar esa boshchaning orqasida, xivchin asosida joylashgan.",
    },
    {
      question: "Spermatogenezda II tartibli spermatotsitlardan birida bitta xromosomaning opa-singil xromatidalari ajralmadi, boshqa II tartibli spermatotsit esa normal bo'lindi. Dastlabki I tartibli spermatotsitdan qanday gametalar hosil bo'ladi?",
      correct: "Ikkita n gameta, bitta n+1, bitta n−1",
      wrong: [
        "Ikkita n+1 va ikkita n−1 gameta",
        "To'rtta n+1 to'plamli gameta",
        "Uchta n va bitta n+1 gameta",
      ],
      explanation: "Birinchi bo'linish normal o'tgan, shuning uchun normal II tartibli spermatotsit ikkita n gameta beradi, anomal spermatotsitda esa ikkala xromatida bitta hujayraga o'tadi (n+1), ikkinchi hujayra bu xromosomasiz qoladi (n−1). Meyoz I da ajralmaslik sodir bo'lganda to'rtala gameta ham anomal bo'lardi: ikkita n+1 va ikkita n−1.",
    },

    // --- vaziyatli masalalar ---
    {
      situation: "Sitogenetik sog'lom erkakning kariotipini tahlil qilib, xromosomalarni Denver tasnifi guruhlariga taqsimlamoqda.",
      question: "Normal erkak kariotipida G guruhiga mansub nechta xromosoma (jinsiy xromosomalarni hisobga olgan holda) bo'lishi kerak?",
      correct: "5",
      wrong: [
        "4",
        "6",
        "3",
      ],
      explanation: "G guruhiga 21- va 22-juftlarning mayda akrotsentrik xromosomalari (2 + 2 = 4) va ularga o'xshash Y-xromosoma kiradi, shuning uchun 46,XY erkakda ular 4 + 1 = 5 ta, ayolda esa 4 ta. X-xromosoma kattaligi va shakliga ko'ra C guruhiga mansub.",
    },
    {
      situation: "16 yoshli o'smirda bukkal epiteliy hujayralarida jinsiy xromatin tekshirilganda yadrolarda ikkitadan Barr tanachasi aniqlandi.",
      question: "Tekshirilayotgan shaxsda qaysi kariotip ehtimoli eng yuqori?",
      correct: "47,XXX",
      wrong: [
        "46,XX",
        "45,X",
        "47,XXY",
      ],
      explanation: "Barr tanachalari soni kariotipdagi X-xromosomalar sonidan bittaga kam: ikkita tanacha uchta X-xromosomaga mos keladi (47,XXX). 46,XX va 47,XXY da bitta tanacha aniqlanadi, 45,X da jinsiy xromatin bo'lmaydi.",
    },
    {
      situation: "Tuxumdonda 100 ta I tartibli ovotsit, urug'donda esa 100 ta I tartibli spermatotsit meyozga kirdi. Barcha hujayralarda meyoz normal yakunlandi.",
      question: "Nechta yetuk tuxum hujayra va spermatozoid hosil bo'ladi?",
      correct: "100 ta tuxum hujayra va 400 ta spermatozoid",
      wrong: [
        "400 ta tuxum hujayra va 400 ta spermatozoid",
        "100 ta tuxum hujayra va 100 ta spermatozoid",
        "200 ta tuxum hujayra va 400 ta spermatozoid",
      ],
      explanation: "Har bir I tartibli spermatotsitdan meyozning ikki bo'linishidan keyin 4 ta spermatida hosil bo'lib, ular 4 ta spermatozoidga aylanadi (100 × 4 = 400). Har bir I tartibli ovotsitdan faqat bitta tuxum hujayra hosil bo'ladi, bo'linishlarning qolgan mahsulotlari — yo'naltiruvchi tanachalar (100 × 1 = 100).",
    },
    {
      situation: "Erkakning I tartibli spermatotsitlaridan birida X- va Y-xromosomalar meyozning I anafazasida ajralmadi, ikkinchi bo'linish normal o'tdi. Bu hujayradan hosil bo'lgan spermatozoidlar normal tuxum hujayrani (23,X) urug'lantirishi mumkin.",
      question: "Bunda zigotalarning qanday kariotiplari hosil bo'lishi mumkin?",
      correct: "47,XXY yoki 45,X",
      wrong: [
        "47,XYY yoki 45,X",
        "47,XXX yoki 45,X",
        "47,XXY yoki 46,XY",
      ],
      explanation: "Meyoz I da jinsiy xromosomalar ajralmaganda ikkita 24,XY spermatozoid va jinsiy xromosomasiz (22 ta autosoma) ikkita spermatozoid hosil bo'ladi, normal 23,X yoki 23,Y gametalarni bu hujayra bermaydi. 23,X tuxum hujayra urug'langanda 47,XXY (23 + 24) va 45,X (23 + 22) zigotalar hosil bo'ladi.",
    },
    {
      situation: "41 yoshli homilador ayol qabulda akusherkadan nima uchun ona yoshi oshishi bilan xromosomalarning ajralmasligi natijasida yuzaga kelgan xromosoma anomaliyasi bor bola tug'ilish xavfi ortishini so'raydi.",
      question: "Qaysi tushuntirish ovogenez xususiyatlariga mos keladi?",
      correct: "I tartibli ovotsitlar ona qornidagi davrdan boshlab I profazada turadi",
      wrong: [
        "Ovogoniylar ayolning butun hayoti davomida mitoz yo'li bilan bo'linishda davom etadi",
        "Ovotsitlarda meyoz faqat jinsiy yetilish boshlanganda boshlanadi",
        "Ayollarning ovotsitlarida gomologik xromosomalar kon'yugatsiyasi sodir bo'lmaydi",
      ],
      explanation: "Barcha I tartibli ovotsitlar qiz bola tug'ilishidan oldinoq meyozga kiradi va ovulyatsiyagacha I profazada (diktiotenada) qoladi, ya'ni 41 yoshli ayolda — 40 yildan ortiq; yosh o'tishi bilan gomologlarning ushlab turilishi va bo'linish urchug'ining ishi buziladi. Ovogoniylarning ko'payishi ona qornidagi davrda tugaydi, ovotsitlarda kon'yugatsiya esa spermatotsitlardagi kabi sodir bo'ladi.",
    },
    {
      situation: "Normal kariotipli odam somatik hujayrasi mitoz metafazasida turibdi.",
      question: "Unda nechta xromosoma va xromatida bor?",
      correct: "46 ta xromosoma va 92 ta xromatida",
      wrong: [
        "92 ta xromosoma va 92 ta xromatida",
        "46 ta xromosoma va 46 ta xromatida",
        "23 ta xromosoma va 46 ta xromatida",
      ],
      explanation: "Metafazada xromosomalar soni diploidligicha qoladi (2n = 46), lekin S-davrdan keyin har bir xromosoma ikkita opa-singil xromatidadan iborat: 46 × 2 = 92 (2n4c formulasi). Bitta xromatidadan iborat 92 ta xromosoma hujayrada mitoz anafazasida bo'ladi.",
    },
    {
      situation: "Erkak urug'donida II tartibli spermatotsit meyozning ikkinchi bo'linishi metafazasida turibdi.",
      question: "Bu hujayrada nechta xromosoma va yadro DNKsi molekulasi bor?",
      correct: "23 ta xromosoma va 46 ta DNK molekulasi",
      wrong: [
        "46 ta xromosoma va 92 ta DNK molekulasi",
        "23 ta xromosoma va 23 ta DNK molekulasi",
        "46 ta xromosoma va 46 ta DNK molekulasi",
      ],
      explanation: "Birinchi (reduksion) bo'linishdan keyin hujayrada gaploid to'plam — 23 ta xromosoma qoladi, lekin ularning har biri hamon ikkita xromatidadan, ya'ni ikkita DNK molekulasidan iborat: 23 × 2 = 46 (n2c formulasi). 23 ta xromosoma va 23 ta DNK molekulasidan iborat to'plam (nc) spermatidada bo'ladi.",
    },
    {
      situation: "Urug'don preparatida odamning I tartibli spermatotsitida meyozning I profazasida (paxitena bosqichi) kon'yugatsiyalangan gomologik xromosomalar ko'rinadi.",
      question: "Bu hujayrada nechta bivalent va xromatida bor?",
      correct: "23 ta bivalent va 92 ta xromatida",
      wrong: [
        "46 ta bivalent va 92 ta xromatida",
        "23 ta bivalent va 46 ta xromatida",
        "46 ta bivalent va 184 ta xromatida",
      ],
      explanation: "Bivalent — kon'yugatsiyalangan gomologik xromosomalar jufti, shuning uchun 46 ta xromosoma 23 ta bivalent hosil qiladi (22 ta autosoma bivalenti va bitta jinsiy XY bivalenti). Har bir bivalent to'rtta xromatidadan iborat (tetrada): 23 × 4 = 92, bu 2n4c formulasiga mos keladi.",
    },

    // ===== Genetika: irsiyatning molekulyar asoslari =====
    {
      question: "DNK nukleotidi quyidagilardan iborat:",
      correct: "Azotli asos, dezoksiriboza va fosfat kislota qoldig'i",
      wrong: [
        "Azotli asos, riboza va fosfat kislota qoldig'i",
        "Aminokislota, dezoksiriboza va fosfat kislota qoldig'i",
        "Azotli asos, glyukoza va fosfat kislota qoldig'i",
      ],
      explanation: "DNK monomeri — dezoksiribonukleotid: azotli asos (A, T, G yoki S), besh uglerodli qand — dezoksiriboza va fosfat kislota qoldig'i. Riboza RNK nukleotidlari tarkibiga kiradi.",
    },
    {
      question: "DNK qo'sh spiralida komplementar asoslar — guanin va sitozin o'rtasida quyidagilar hosil bo'ladi:",
      correct: "Uchta vodorod bog'i",
      wrong: [
        "Ikkita vodorod bog'i",
        "To'rtta vodorod bog'i",
        "Ikkita fosfodiefir bog'i",
      ],
      explanation: "G–S juftligi uchta vodorod bog'i bilan, A–T juftligi esa ikkita vodorod bog'i bilan tutib turiladi, shuning uchun G–S ga boy DNK qismlari mustahkamroq bo'ladi. Fosfodiefir bog'lari turli zanjirlarning asoslarini emas, balki bitta zanjir ichidagi qo'shni nukleotidlarni bog'laydi.",
    },
    {
      question: "DNK molekulasida zanjirlarning antiparallelligi quyidagini anglatadi:",
      correct: "Bir zanjirning 5′-uchi qarshisida ikkinchi zanjirning 3′-uchi joylashgan",
      wrong: [
        "Zanjirlar qarama-qarshi yo'nalishdagi spirallar shaklida buralgan",
        "Ikkala zanjirning nukleotidlar ketma-ketligi bir xil",
        "Zanjirlar o'zaro kovalent bog'lar bilan bog'langan",
      ],
      explanation: "DNK zanjirlari qarama-qarshi yo'nalgan: biri 5′→3′ yo'nalishda, ikkinchisi esa 3′→5′ yo'nalishda boradi. Ikkala zanjir umumiy o'ngga buralgan spiral hosil qiladi, o'zaro vodorod bog'lari bilan bog'langan, ularning ketma-ketliklari esa bir xil emas, balki komplementar.",
    },
    {
      question: "Chargaff qoidalariga ko'ra, qo'sh zanjirli DNK molekulasida:",
      correct: "Purin nukleotidlar soni pirimidin nukleotidlar soniga teng",
      wrong: [
        "Adenil nukleotidlar soni guanil nukleotidlar soniga teng",
        "Timidil nukleotidlar soni sitidil nukleotidlar soniga teng",
        "Nukleotidlarning to'rtala turi miqdori bir xil",
      ],
      explanation: "A–T va G–S komplementarligidan quyidagi kelib chiqadi: A = T, G = S, demak, A + G = T + S (purinlar = pirimidinlar). Adenin va guanin — ikkalasi ham purin bo'lib, bir-biriga teng emas; (A + T) : (G + S) nisbati turga xos.",
    },
    {
      question: "Transport RNKning (tRNK) asosiy vazifasi:",
      correct: "Translyatsiyada aminokislotalarni ribosomaga yetkazib berish",
      wrong: [
        "Oqsil tuzilishi haqidagi axborotni yadrodan ribosomalarga o'tkazish",
        "Ribosoma subbirliklarining struktura asosini hosil qilish",
        "Irsiy axborotni hujayra yadrosida saqlash",
      ],
      explanation: "tRNK ma'lum bir aminokislotani biriktirib oladi va o'z antikodoni bilan ribosomada iRNKning tegishli kodonini taniydi. Axborotni yadrodan o'tkazish — iRNK vazifasi, ribosomalarning struktura asosi — rRNK.",
    },
    {
      question: "DNKdan farqli ravishda, RNK nukleotidlari tarkibiga quyidagilar kiradi:",
      correct: "Riboza va urasil",
      wrong: [
        "Dezoksiriboza va urasil",
        "Riboza va timin",
        "Dezoksiriboza va timin",
      ],
      explanation: "RNK nukleotidlari tarkibida riboza, timin o'rniga esa urasil bo'ladi; DNK tarkibida dezoksiriboza va timin bor. Adenin, guanin va sitozin ikkala nuklein kislota tarkibiga ham kiradi.",
    },
    {
      question: "DNK replikatsiyasining yarim konservativ usuli quyidagini anglatadi:",
      correct: "Har bir qiz molekula bitta ona zanjir va bitta yangi zanjirdan iborat",
      wrong: [
        "Bitta qiz molekula ikkita ona zanjirdan, ikkinchisi esa ikkita yangi zanjirdan iborat",
        "Qiz DNKning har bir zanjiri navbatlashib keladigan eski va yangi qismlardan iborat",
        "Yangi DNK zanjirlarini sintez qilish uchun iRNK molekulasi matritsa bo'lib xizmat qiladi",
      ],
      explanation: "Replikatsiyada ona DNK zanjirlari ajraladi va ularning har biri yangi komplementar zanjir sintezi uchun matritsa bo'lib xizmat qiladi, shuning uchun har bir qiz molekulaning yarmi «eski» bo'ladi. Buni 1958-yilda M. Mezelson va F. Stal isbotlagan.",
    },
    {
      question: "Replikatsiyada DNKning orqada qoluvchi zanjiri quyidagicha sintezlanadi:",
      correct: "Uzlukli, Okazaki fragmentlari ko'rinishida",
      wrong: [
        "Uzluksiz, bitta uzun zanjir ko'rinishida",
        "Uzluksiz, yetakchi zanjir tugaganidan keyin",
        "Uzlukli, iRNK molekulasi matritsasida",
      ],
      explanation: "DNK-polimeraza zanjirni faqat 5′→3′ yo'nalishda uzaytiradi, shuning uchun yetakchi zanjir uzluksiz, orqada qoluvchi zanjir esa qisqa Okazaki fragmentlari ko'rinishida sintezlanadi, so'ngra ularni DNK-ligaza bir-biriga ulaydi. Ikkala zanjir ham bir vaqtda DNK matritsasida sintezlanadi.",
    },
    {
      question: "Genetik kodning aynishganligi (ortiqchaligi) quyidagini anglatadi:",
      correct: "Bitta aminokislota bir nechta kodon bilan kodlanishi mumkin",
      wrong: [
        "Bitta kodon bir nechta turli aminokislotani kodlashi mumkin",
        "Qo'shni kodonlar umumiy nukleotidlar orqali bir-birini qoplaydi",
        "Genetik kod barcha tirik organizmlarda bir xil",
      ],
      explanation: "61 ta ma'noli kodon 20 ta aminokislotani kodlaydi, shuning uchun aminokislotalarning ko'pchiligi 2 tadan 6 tagacha kodonga ega (istisno — metionin va triptofan). Bitta kodonning faqat bitta aminokislotaga mos kelishi — kodning bir ma'noliligi, barcha organizmlarda bir xilligi — universalligi.",
    },
    {
      question: "iRNKning terminatsiyalovchi (stop-) kodonlari:",
      correct: "UAA, UAG, UGA",
      wrong: [
        "AUG, UAA, UGA",
        "AUG, GUG, UUG",
        "AUU, AUS, ASU",
      ],
      explanation: "UAA, UAG va UGA kodonlari aminokislotalarni kodlamaydi va translyatsiya tugashi haqida signal beradi. AUG — metioninni kodlaydigan start (initsiatsiyalovchi) kodon.",
    },
    {
      question: "Splaysing — bu:",
      correct: "Pre-iRNKdan intronlarning olib tashlanishi va ekzonlarning ulanishi",
      wrong: [
        "Pre-iRNKdan ekzonlarning olib tashlanishi va intronlarning ulanishi",
        "Aminokislotaning tegishli tRNKga birikishi",
        "Yadroda DNKning matritsa zanjirida pre-iRNK sintezi",
      ],
      explanation: "Splaysing — eukariot hujayra yadrosidagi protsessing bosqichi: intronlar kesib olinadi, ekzonlar esa ulanib, yetuk iRNK hosil qiladi. DNK matritsasida pre-iRNK sintezi — bu transkripsiya.",
    },
    {
      question: "Transkripsiyani boshlash uchun RNK-polimeraza bog'lanadigan gen qismi quyidagicha ataladi:",
      correct: "Promotor",
      wrong: [
        "Terminator",
        "Ekzon",
        "Intron",
      ],
      explanation: "Promotor genning transkripsiyalanadigan qismidan oldin joylashgan bo'lib, RNK-polimerazani tanish va biriktirish joyi bo'lib xizmat qiladi. Terminator transkripsiya tugashini belgilaydi, ekzonlar va intronlar esa genning transkripsiyalanadigan qismlari.",
    },
    {
      question: "Ichak tayoqchasining laktoza operonida laktoza bo'lmaganda repressor oqsil quyidagiga birikib, struktur genlar transkripsiyasini to'sib qo'yadi:",
      correct: "Operatorga",
      wrong: [
        "Terminatorga",
        "Ribosomaga",
        "Regulyator genga",
      ],
      explanation: "Regulyator gen repressor oqsilni kodlaydi, u operator bilan bog'lanib, RNK-polimerazaga struktur genlarni transkripsiya qilishga xalaqit beradi. Induktor (laktoza) paydo bo'lganda repressor operator bilan bog'lanishini yo'qotadi va transkripsiya boshlanadi.",
    },
    {
      question: "Odamning mitoxondrial DNKsi — bu:",
      correct: "Halqasimon qo'sh zanjirli molekula",
      wrong: [
        "Gistonlar bilan bog'langan chiziqli molekula",
        "Halqasimon bir zanjirli molekula",
        "Chiziqli bir zanjirli molekula",
      ],
      explanation: "Odam mtDNKsi — gistonlar bilan bog'lanmagan kichik halqasimon qo'sh zanjirli molekula (taxminan 16,6 ming nukleotid jufti, 37 ta gen); har bir hujayrada uning ko'plab nusxalari bo'ladi. Gistonlar yordamida o'ralib joylashgan chiziqli molekulalar yadro DNKsiga xos.",
    },
    {
      question: "Polimeraza zanjirli reaksiyasini (PZR) o'tkazish uchun tekshirilayotgan DNKdan tashqari quyidagilar zarur:",
      correct: "Praymerlar, dezoksinukleotidlar va termostabil DNK-polimeraza",
      wrong: [
        "Ribosomalar, transport RNKlar va 20 ta aminokislotadan iborat to'plam",
        "RNK-polimeraza, ribonukleotidlar va promotor qismi",
        "Restriktazalar, DNK-ligaza va plazmid vektor",
      ],
      explanation: "Praymerlar nusxalanadigan qismni chegaralaydi, qizdirishga chidamli DNK-polimeraza esa dezoksinukleotidlardan yangi zanjirlarni sintezlab boradi (magniy ionlari bo'lgan bufer ham kerak). Ribosomalar, tRNK va aminokislotalar DNK sintezi uchun emas, balki translyatsiya uchun kerak.",
    },
    {
      question: "DNKni sekvenirlash — bu:",
      correct: "DNKdagi nukleotidlar ketma-ketligini aniqlash usuli",
      wrong: [
        "DNKning tanlangan qismini ko'p marta nusxalash usuli",
        "DNK fragmentlarini gelda o'lchami bo'yicha ajratish usuli",
        "Kariotipni o'rganish uchun xromosomalarni bo'yash usuli",
      ],
      explanation: "Sekvenirlash nukleotidlar tartibini «o'qish» (masalan, Senger usuli yoki yangi avlod usullari bilan) va ketma-ketlikdagi o'zgarishlarni aniqlash imkonini beradi. DNK qismini ko'p marta nusxalash — bu PZR, fragmentlarni o'lchami bo'yicha ajratish — elektroforez.",
    },
    {
      question: "2003-yilda yakunlangan «Odam genomi» xalqaro loyihasining asosiy vazifasi:",
      correct: "Odam DNKsidagi nukleotidlar ketma-ketligini aniqlash",
      wrong: [
        "Genetik kodning shifrini ochish va uning xossalarini aniqlash",
        "DNKning yarim konservativ replikatsiyasini isbotlash",
        "DNK molekulasi qo'sh spiralining modelini yaratish",
      ],
      explanation: "Loyiha davomida sekvenirlash usuli bilan odam genomining taxminan 3 mlrd nukleotid jufti ketma-ketligi aniqlandi. Genetik kodning shifri 1960-yillarda ochilgan, qo'sh spiral modelini esa 1953-yilda Uotson va Krik taklif qilgan.",
    },

    // --- vaziyatli masalalar ---
    {
      situation: "Qo'sh zanjirli DNK fragmenti tahlil qilinganda adenil nukleotidlar nukleotidlar umumiy sonining 20 foizini tashkil etishi aniqlandi.",
      question: "Ushbu fragmentda guanil nukleotidlar miqdori qancha?",
      correct: "30%",
      wrong: [
        "20%",
        "60%",
        "80%",
      ],
      explanation: "Chargaff qoidasiga ko'ra A = T = 20%, demak, G + S ga 100 − 40 = 60% to'g'ri keladi, G = S = 60 : 2 = 30%. 60% qiymati — bitta guanin miqdori emas, balki G + S yig'indisi.",
    },
    {
      situation: "Qo'sh zanjirli DNK fragmentida 600 ta sitidil nukleotid bor, bu nukleotidlar umumiy sonining 30 foizini tashkil etadi.",
      question: "Ushbu fragmentda nechta adenil nukleotid bor?",
      correct: "400",
      wrong: [
        "600",
        "800",
        "1400",
      ],
      explanation: "Nukleotidlarning umumiy soni 600 : 0,3 = 2000; G = S = 600, A + T ga 2000 − 1200 = 800 to'g'ri keladi, demak, A = T = 800 : 2 = 400.",
    },
    {
      situation: "DNK fragmentining matritsa (transkripsiyalanadigan) zanjiri quyidagi nukleotidlar ketma-ketligiga ega: T-A-S-G-G-A-T-T-S.",
      question: "Ushbu qismda sintezlangan iRNKning ketma-ketligi qanday?",
      correct: "A-U-G-S-S-U-A-A-G",
      wrong: [
        "A-T-G-S-S-T-A-A-G",
        "U-A-S-G-G-A-U-U-S",
        "T-A-S-G-G-A-T-T-S",
      ],
      explanation: "iRNK matritsa zanjiriga komplementar ravishda quriladi: T→A, A→U, G→S, S→G, bunda RNKda timin o'rniga urasil bo'ladi. Timinli A-T-G-S-S-T-A-A-G ketma-ketligi — iRNK emas, balki DNKning ikkinchi zanjiri.",
    },
    {
      situation: "iRNK fragmenti quyidagi ketma-ketlikka ega: A-U-G-G-S-A-U-U-S.",
      question: "Ushbu qismga aminokislotalarni yetkazib beradigan tRNKlar qanday antikodonlarga ega?",
      correct: "UAS, SGU, AAG",
      wrong: [
        "AUG, GSA, UUS",
        "TAS, SGT, AAG",
        "GUA, ASG, SUU",
      ],
      explanation: "iRNK AUG, GSA, UUS kodonlariga bo'linadi; tRNK antikodoni kodonga komplementar (A–U, G–S), shuning uchun antikodonlar — UAS, SGU, AAG. RNKda timin uchramaydi, antikodonning kodon bilan bir xil bo'lishi esa komplementarlik prinsipiga zid.",
    },
    {
      situation: "Qo'sh zanjirli DNK fragmentida jami 1200 ta nukleotid bor. DNK zanjiridagi qo'shni nukleotidlar orasidagi masofa 0,34 nm ga teng.",
      question: "Ushbu DNK fragmentining uzunligi qancha?",
      correct: "204 nm",
      wrong: [
        "408 nm",
        "102 nm",
        "136 nm",
      ],
      explanation: "Qo'sh spiral uzunligi bitta zanjirdagi nukleotidlar soni bilan aniqlanadi: 1200 : 2 = 600, 600 × 0,34 nm = 204 nm. 408 nm javobi ikkala zanjirdagi barcha nukleotidlar 0,34 ga xato ko'paytirilganda hosil bo'ladi.",
    },
    {
      situation: "Laboratoriyada PZR o'tkazilmoqda. Reaksiya aralashmasi 95 °C gacha qizdirilgandan keyin amplifikatordagi harorat 30 soniyaga 55 °C gacha pasaytiriladi, so'ngra 72 °C gacha ko'tariladi.",
      question: "PZR siklining qaysi bosqichi 55 °C haroratda o'tadi?",
      correct: "Praymerlar birikishi (otjig)",
      wrong: [
        "DNK denaturatsiyasi",
        "Zanjirlar elongatsiyasi",
        "Fragmentlarning ligirlanishi",
      ],
      explanation: "Harorat 50–65 °C gacha pasaytirilganda praymerlar bir zanjirli DNKning komplementar qismlariga birikadi — bu otjig (praymerlar birikishi). Denaturatsiya 94–95 °C da, elongatsiya (zanjirlarni DNK-polimeraza yordamida uzaytirish) — 72 °C da boradi.",
    },
    {
      situation: "Peptidni kodlovchi iRNK qismi 15 ta kodondan iborat: birinchisi — AUG start kodoni, oxirgisi, 15-kodon — UAA kodoni.",
      question: "Ushbu qism translyatsiya qilinganda peptid tarkibiga nechta aminokislota kiradi?",
      correct: "14",
      wrong: [
        "15",
        "45",
        "5",
      ],
      explanation: "Har bir ma'noli kodon (shu jumladan AUG start kodoni) bitta aminokislotaga mos keladi, UAA stop-kodoni esa aminokislotani kodlamaydi: 15 − 1 = 14. 45 soni — aminokislotalar emas, balki qismdagi nukleotidlar soni.",
    },
    {
      situation: "Eukariot genidan transkripsiyalangan pre-iRNK 1500 ta nukleotiddan iborat, ulardan 600 tasi intronlarga to'g'ri keladi. Shartli ravishda barcha ekzon nukleotidlari aminokislotalarni kodlaydi deb hisoblang, stop-kodonni hisobga olmang.",
      question: "Ushbu gen kodlagan oqsil nechta aminokislotadan iborat?",
      correct: "300",
      wrong: [
        "500",
        "200",
        "900",
      ],
      explanation: "Splaysingdan keyin yetuk iRNKda faqat ekzonlar qoladi: 1500 − 600 = 900 nukleotid, bu 900 : 3 = 300 kodonga va 300 aminokislotaga mos keladi. 500 javobi intronlar xato hisobga olinganda hosil bo'ladi.",
    },

    // ===== Genetika: belgilarning irsiylanish qonuniyatlari =====
    {
      question: "Allel genlar deb quyidagi joyda joylashgan genlarga aytiladi:",
      correct: "Gomologik xromosomalarning bir xil lokuslarida",
      wrong: [
        "Bitta xromosomaning turli lokuslarida",
        "Gomologik bo'lmagan xromosomalarning bir xil lokuslarida",
        "Gomologik xromosomalarning turli lokuslarida",
      ],
      explanation: "Allellar — bitta genning muqobil shakllari bo'lib, gomologik xromosomalarning bir xil lokuslarini (qismlarini) egallaydi. Turli lokuslarda joylashgan genlar noallel genlar hisoblanadi.",
    },
    {
      question: "Berilgan gen bo'yicha geterozigota deb shunday organizmga aytiladiki, u:",
      correct: "Gomologik xromosomalarida genning turli allellariga ega",
      wrong: [
        "Gomologik xromosomalarida genning bir xil allellariga ega",
        "Bu gen bo'yicha faqat bir tipdagi gameta hosil qiladi",
        "Fenotipda doimo retsessiv belgini namoyon qiladi",
      ],
      explanation: "Geterozigota (Aa) ikkita turli allelga ega va ikki tipdagi gameta — A va a hosil qiladi. Gomozigotalar (AA yoki aa) bir xil allellarga ega va bir tipdagi gameta hosil qiladi.",
    },
    {
      question: "G. Mendel ishlab chiqqan gibridologik usulning o'ziga xos xususiyati:",
      correct: "Har bir belgi juftligi bo'yicha naslni miqdoriy hisobga olish",
      wrong: [
        "Ota-onalar va naslning xromosoma to'plamini mikroskopda o'rganish",
        "Oila shajarasini bir necha avlod davomida tuzish va tahlil qilish",
        "Belgining monozigotali va dizigotali egizaklarda uchrash chastotasini taqqoslash",
      ],
      explanation: "Mendel sof liniyalardan foydalangan, har bir muqobil belgilar juftligining irsiylanishini alohida tahlil qilgan va naslni aniq miqdoriy hisobga olgan. Shajara, xromosomalar va egizaklarni tahlil qilish — odam genetikasining boshqa usullari.",
    },
    {
      question: "Birinchi avlod duragaylarining bir xilligi qonuni (Mendelning I qonuni) quyidagilar chatishtirilganda namoyon bo'ladi:",
      correct: "Muqobil belgilarga ega gomozigota individlar",
      wrong: [
        "Bir xil fenotipli ikkita geterozigota individ",
        "Geterozigota individ va retsessiv gomozigota",
        "Bir xil fenotipli istalgan ikkita individ",
      ],
      explanation: "AA × aa chatishtirilganda barcha F₁ duragaylari Aa genotipga va bir xil fenotipga ega bo'ladi. Aa × Aa chatishtirish 3:1 ajralishni, Aa × aa esa 1:1 ajralishni beradi.",
    },
    {
      question: "Gametalar sofligi gipotezasiga ko'ra:",
      correct: "Har bir gameta juftdagi faqat bitta allelni tashiydi",
      wrong: [
        "Har bir gameta har bir genning ikkala allelini tashiydi",
        "Gametalar faqat dominant allellarni saqlaydi",
        "Duragayda allellar qo'shilib ketadi va bir-birini o'zgartiradi",
      ],
      explanation: "Geterozigotada allellar aralashmaydi va gametalar hosil bo'lishida ajraladi, shuning uchun har bir gametaga juftdagi bitta allel (A yoki a) tushadi. Sitologik asosi — meyozda gomologik xromosomalarning ajralishi.",
    },
    {
      question: "To'liq dominantlikda fenotip bo'yicha 3:1 nisbatdagi ajralish quyidagilarni chatishtirishdan olingan naslda kuzatiladi:",
      correct: "Ikkita geterozigota (Aa × Aa)",
      wrong: [
        "Dominant va retsessiv gomozigotalar (AA × aa)",
        "Geterozigota va retsessiv gomozigota (Aa × aa)",
        "Geterozigota va dominant gomozigota (Aa × AA)",
      ],
      explanation: "Aa × Aa → 1AA : 2Aa : 1aa; to'liq dominantlikda AA va Aa bir xil fenotipga ega, shu sababli 3:1. Aa × aa chatishtirish 1:1 ni, AA × aa va AA × Aa esa fenotip bo'yicha bir xil naslni beradi.",
    },
    {
      question: "Belgilarning mustaqil irsiylanish qonuni (Mendelning III qonuni) shunday genlar uchun bajariladiki, ular:",
      correct: "Gomologik xromosomalarning turli juftlarida joylashgan",
      wrong: [
        "Bitta xromosomada bir-biriga yaqin joylashgan",
        "Bitta genning turli allellari hisoblanadi",
        "Faqat jinsiy xromosomalarda joylashgan",
      ],
      explanation: "Belgilarning mustaqil kombinatsiyalanishi genlar meyozda bir-biridan mustaqil ajraladigan turli xromosoma juftlarida joylashgan bo'lsa, mumkin bo'ladi. Bitta xromosomadagi genlar birikkan bo'lib, birgalikda irsiylanadi.",
    },
    {
      question: "Dominant fenotipli individni quyidagi individ bilan chatishtirish tahliliy chatishtirish deyiladi:",
      correct: "Retsessiv allel bo'yicha gomozigota",
      wrong: [
        "Dominant allel bo'yicha gomozigota",
        "Berilgan gen bo'yicha geterozigota",
        "Xuddi shunday genotipga ega",
      ],
      explanation: "Retsessiv gomozigota (aa) bilan chatishtirish tekshirilayotgan individning genotipini aniqlash imkonini beradi: agar nasl bir xil bo'lsa — u AA, agar 1:1 ajralish kuzatilsa — Aa.",
    },
    {
      question: "Agar genlar turli xromosoma juftlarida joylashgan bo'lsa, AaBBCc genotipli organizm necha tipdagi gameta hosil qiladi?",
      correct: "To'rtta",
      wrong: [
        "Ikkita",
        "Oltita",
        "Sakkizta",
      ],
      explanation: "Gameta tiplari soni 2ⁿ ga teng, bu yerda n — geterozigota holatdagi genlar soni. Bu yerda ikkita gen (Aa va Cc) geterozigota, shuning uchun 2² = 4: ABC, ABc, aBC, aBc.",
    },
    {
      question: "O'ta dominantlik — bu:",
      correct: "Belgining geterozigotada gomozigotalarga qaraganda kuchliroq namoyon bo'lishi",
      wrong: [
        "Geterozigotada ikkala allelning bir vaqtda va mustaqil namoyon bo'lishi",
        "Belgining geterozigotada ota-onalar o'rtasidagi oraliq holatda namoyon bo'lishi",
        "Geterozigotada retsessiv allelning dominant allel tomonidan to'liq bostirilishi",
      ],
      explanation: "O'ta dominantlikda geterozigota ikkala gomozigotadan ustun bo'ladi (masalan, o'roqsimon hujayrali anemiya geni bo'yicha geterozigotalarda tropik bezgakka chidamlilikning yuqoriligi). Ikkala allelning bir vaqtda namoyon bo'lishi — kodominantlik, oraliq belgi — chala dominantlik.",
    },
    {
      question: "Odamda kodominantlikka misol bo'lib quyidagining irsiylanishi xizmat qiladi:",
      correct: "IV (AB) qon guruhi",
      wrong: [
        "I (0) qon guruhi",
        "Qonning rezus-mansubligi",
        "Teri pigmentatsiyasi",
      ],
      explanation: "IᴬIᴮ genotipli odamlarda eritrotsitlarda ikkala antigen — A va B mavjud, ya'ni ikkala allel bir vaqtda namoyon bo'ladi. Rezus-omil to'liq dominantlik tipida, teri pigmentatsiyasi esa polimeriya tipida irsiylanadi.",
    },
    {
      question: "Ko'p allellilik deb quyidagiga aytiladi:",
      correct: "Populyatsiyada bitta genning ikkitadan ortiq allelining mavjudligi",
      wrong: [
        "Bitta odam genotipida genning uch va undan ortiq allelining bo'lishi",
        "Bitta genning bir nechta belgi rivojlanishiga ta'siri",
        "Bir nechta noallel genning bitta belgiga ta'siri",
      ],
      explanation: "Ko'p allellar populyatsiyada mavjud bo'ladi (masalan, AB0 tizimi qon guruhlari genining Iᴬ, Iᴮ va I⁰ allellari), lekin har bir odamning genotipida bir vaqtda faqat ikkita allel bo'ladi.",
    },
    {
      question: "Bombey fenomeni — Iᴬ yoki Iᴮ allellariga ega odamda eritrotsitlarda A va B antigenlarining bo'lmasligi — quyidagi bilan izohlanadi:",
      correct: "Retsessiv epistaz",
      wrong: [
        "Kodominantlik",
        "Polimeriya",
        "Chala dominantlik",
      ],
      explanation: "hh gomozigotalarda o'tmishdosh H antigen hosil bo'lmaydi, shuning uchun Iᴬ va Iᴮ allellari namoyon bo'lmaydi va I (0) guruh fenotipi aniqlanadi. Bir gen ta'sirining boshqa, noallel gen tomonidan bostirilishi epistaz deyiladi.",
    },
    {
      question: "Fibrillin-1 genidagi mutatsiya skelet, ko'rish a'zosi va yurak-qon tomir tizimida o'zgarishlarni keltirib chiqaradigan Marfan sindromi quyidagiga misol bo'ladi:",
      correct: "Genning pleyotrop ta'siri",
      wrong: [
        "Genlarning polimer ta'siri",
        "Genlarning komplementar o'zaro ta'siri",
        "Allellarning kodominantligi",
      ],
      explanation: "Pleyotropiya — bitta genning bir nechta belgiga ta'siri. Marfan sindromida biriktiruvchi to'qimaning bitta oqsilidagi nuqson turli a'zo va tizimlarda namoyon bo'ladi.",
    },
    {
      question: "Genning penetrantligi deb quyidagiga aytiladi:",
      correct: "Gen tashuvchilarda genning fenotipda namoyon bo'lish chastotasi",
      wrong: [
        "Genning turli tashuvchilarida belgining ifodalanish darajasi",
        "Bitta genning bir nechta belgiga ta'sir ko'rsatish qobiliyati",
        "Gen allelining populyatsiyada uchrash chastotasi",
      ],
      explanation: "Penetrantlik belgi namoyon bo'lgan gen tashuvchilarning foizi bilan ifodalanadi. Belgining ifodalanish darajasi — ekspressivlik, genning bir nechta belgiga ta'siri — pleyotropiya.",
    },

    // --- vaziyatli masalalar ---
    {
      situation: "Ayol Rh-manfiy (Rh−). Uning eri Rh-musbat (Rh+), erining onasi esa Rh-manfiy bo'lgan. Rh-musbatlik autosom-dominant belgi sifatida irsiylanadi (D geni).",
      question: "Bu er-xotinda Rh-musbat bola tug'ilish ehtimoli qancha?",
      correct: "50%",
      wrong: [
        "25%",
        "75%",
        "100%",
      ],
      explanation: "Er Rh-manfiy onasidan d allelini olgan, demak, uning genotipi Dd. Sxema: dd × Dd → 1Dd : 1dd, Rh+ bola tug'ilish ehtimoli 50%.",
    },
    {
      situation: "Onada II (A) qon guruhi, otada — III (B). Ularda I (0) qon guruhli bola tug'ildi.",
      question: "Ota-onaning genotiplari qanday?",
      correct: "Ona IᴬI⁰, ota IᴮI⁰",
      wrong: [
        "Ona IᴬIᴬ, ota IᴮIᴮ",
        "Ona IᴬIᴬ, ota IᴮI⁰",
        "Ona IᴬI⁰, ota IᴮIᴮ",
      ],
      explanation: "I (0) guruhli bola I⁰I⁰ genotipga ega va I⁰ allelini har bir ota-onadan bittadan olgan. Demak, ota-onaning ikkalasi ham geterozigota: ona IᴬI⁰, ota IᴮI⁰.",
    },
    {
      situation: "Onada IV (AB) qon guruhi, otada — I (0).",
      question: "Ularning bolalarida qaysi qon guruhlari bo'lishi mumkin?",
      correct: "Faqat II (A) va III (B)",
      wrong: [
        "Faqat IV (AB)",
        "Faqat I (0) va IV (AB)",
        "To'rtta qon guruhidan istalgani",
      ],
      explanation: "IᴬIᴮ × I⁰I⁰ → IᴬI⁰ (II guruh) va IᴮI⁰ (III guruh), har biri 50% ehtimol bilan. Bunday er-xotinda I va IV guruhli bolalar tug'ilishi mumkin emas.",
    },
    {
      situation: "Bahsli otalik bo'yicha sud-tibbiy ekspertizada aniqlandi: onada I (0) qon guruhi, bolada — II (A).",
      question: "Qanday genotipli erkak bu bolaning otasi bo'lishi mumkin?",
      correct: "IᴬIᴮ",
      wrong: [
        "I⁰I⁰",
        "IᴮI⁰",
        "IᴮIᴮ",
      ],
      explanation: "Bola IᴬI⁰ genotipga ega: I⁰ allelini u onasidan olgan, Iᴬ allelini esa faqat otasidan olishi mumkin edi; sanab o'tilgan genotiplardan faqat IᴬIᴮ da Iᴬ bor. Qon guruhlarini tahlil qilish otalikni inkor etish imkonini beradi, lekin uni isbotlay olmaydi.",
    },
    {
      situation: "Sog'lom er-xotinning birinchi farzandi fenilketonuriya (autosom-retsessiv kasallik) bilan kasal, ikkinchi farzandi esa sog'lom.",
      question: "Ikkinchi (sog'lom) farzandning fenilketonuriya genining geterozigota tashuvchisi bo'lish ehtimoli qancha?",
      correct: "2/3",
      wrong: [
        "1/4",
        "1/2",
        "3/4",
      ],
      explanation: "Ota-ona — geterozigotalar: Aa × Aa → 1AA : 2Aa : 1aa. Bola sog'lom, demak, aa genotipi istisno qilinadi va qolgan uchta teng ehtimolli variantdan (AA, Aa, Aa) ikkitasi tashuvchilikka mos keladi — 2/3; 1/2 — sog'lig'i haqida hech narsa ma'lum bo'lmagan bola uchun tashuvchilik ehtimoli.",
    },
    {
      situation: "O'roqsimon hujayrali anemiya chala dominantlik tipida irsiylanadi: HbS/HbS gomozigotalar og'ir anemiyaga chalinadi, HbA/HbS geterozigotalarda eritrotsitlarning bir qismi o'roqsimon shaklga ega bo'ladi, lekin yaqqol anemiya kuzatilmaydi, HbA/HbA gomozigotalar sog'lom. Er-xotinning ikkalasi ham geterozigota.",
      question: "Ularda ota-onasi bilan bir xil fenotipli bola tug'ilish ehtimoli qancha?",
      correct: "50%",
      wrong: [
        "25%",
        "75%",
        "100%",
      ],
      explanation: "HbA/HbS × HbA/HbS → 1 HbA/HbA : 2 HbA/HbS : 1 HbS/HbS. Chala dominantlikda har bir genotip o'z fenotipiga ega (1:2:1 ajralish), shuning uchun ota-ona fenotipi bolalarning 50 foizida takrorlanadi.",
    },
    {
      situation: "Albinizm va fenilketonuriya autosom-retsessiv tipda irsiylanadi, genlar turli xromosoma juftlarida joylashgan. Er-xotinning ikkalasi ham sog'lom va ikkala gen bo'yicha geterozigota (AaBb).",
      question: "Ularda bir vaqtning o'zida ham albinizm, ham fenilketonuriya bilan kasallangan bola tug'ilish ehtimoli qancha?",
      correct: "1/16",
      wrong: [
        "1/4",
        "3/16",
        "9/16",
      ],
      explanation: "aa genotipining ehtimoli 1/4 ga, bb genotipiniki ham 1/4 ga teng; genlar mustaqil irsiylanadi, shuning uchun aabb = 1/4 × 1/4 = 1/16 (Pennet panjarasining 16 ta katagidan bittasi). 3/16 qiymati — faqat bitta muayyan kasallikka (masalan, faqat albinizmga) chalingan bola tug'ilish ehtimoli.",
    },
    {
      situation: "Axondroplaziya to'liq penetrantlik bilan autosom-dominant tipda irsiylanadi. Axondroplaziyali erkak (geterozigota) normal bo'yli ayol bilan nikohdan o'tadi.",
      question: "Ularda axondroplaziyali bola tug'ilish ehtimoli qancha?",
      correct: "50%",
      wrong: [
        "25%",
        "75%",
        "100%",
      ],
      explanation: "Aa × aa → 1Aa : 1aa, shuning uchun har bir bola 50% ehtimol bilan otasidan dominant allelni meros qilib oladi va kasal bo'ladi.",
    },
    {
      situation: "Odamda teri pigmentatsiyasi kumulyativ polimeriya tipida ikki juft noallel gen bilan belgilanadi, deb faraz qilaylik: genotipda dominant allellar qancha ko'p bo'lsa, teri shuncha to'q rangli bo'ladi. Er-xotinning ikkalasi ham A₁a₁A₂a₂ genotipli mulatlar.",
      question: "Ularda oq terili (a₁a₁a₂a₂) bola tug'ilish ehtimoli qancha?",
      correct: "1/16",
      wrong: [
        "4/16",
        "6/16",
        "9/16",
      ],
      explanation: "Har bir ota-ona a₁a₂ gametasini 1/4 ehtimol bilan hosil qiladi, shuning uchun a₁a₁a₂a₂ genotipining ehtimoli 1/4 × 1/4 = 1/16 ga teng. Naslda jami 5 ta fenotipik sinf 1:4:6:4:1 nisbatda bo'ladi; 6/16 — ota-onasi kabi mulat bola tug'ilish ehtimoli.",
    },
    {
      situation: "Normal eshitish uchun ikkita dominant noallel gen bo'lishi zarur: D (chig'anoq rivojlanishi) va E (eshitish nervi rivojlanishi); dd yoki ee genotipli odamlar kar. Kar er-xotinning genotiplari DDee va ddEE.",
      question: "Ularda normal eshitadigan bola tug'ilish ehtimoli qancha?",
      correct: "100%",
      wrong: [
        "0%",
        "25%",
        "50%",
      ],
      explanation: "DDee × ddEE → barcha bolalar DdEe. Ularda bir-birini to'ldiruvchi ikkala dominant gen D va E mavjud (komplementar o'zaro ta'sir), shuning uchun eshitish normal.",
    },

    // ===== Genetika: birikkan irsiylanish va jins genetikasi =====
    {
      question: "T. Morganning irsiyat xromosoma nazariyasiga ko'ra genlar xromosomada joylashadi:",
      correct: "Chiziqli tartibda, har biri ma'lum lokusda",
      wrong: [
        "Tartibsiz, har bir bo'linishda lokusini o'zgartirib",
        "Faqat sentromera sohasida",
        "Faqat uchki qismlarda (telomeralarda)",
      ],
      explanation: "Morgan nazariyasining asosiy qoidalaridan biri: genlar xromosomada chiziqli tartibda joylashgan va har biri ma'lum bir qismni — lokusni egallaydi. Allel genlar gomologik xromosomalarning bir xil lokuslarida joylashadi.",
    },
    {
      question: "Ayolda birikish guruhlarining soni:",
      correct: "23",
      wrong: [
        "46",
        "24",
        "22",
      ],
      explanation: "Birikish guruhlari soni xromosomalarning gaploid soniga teng: ayolda ular 23 ta (22 ta autosoma va X-xromosoma). Erkakda birikish guruhlari 24 ta, chunki X- va Y-xromosomalar turli genlarni saqlaydi va ikkita alohida guruhni tashkil etadi.",
    },
    {
      question: "Krossingover — bu:",
      correct: "Gomologik xromosomalarning opa-singil bo'lmagan xromatidalari o'rtasida qismlar almashinuvi",
      wrong: [
        "Gomologik bo'lmagan xromosomalar o'rtasida qismlar almashinuvi",
        "Gomologik xromosomalarning hujayraning turli qutblariga ajralishi",
        "Gomologik xromosomalarning qismlar almashmasdan yaqinlashishi (kon'yugatsiyasi)",
      ],
      explanation: "Krossingover meyozning I profazasida sodir bo'ladi: gomologik xromosomalarning opa-singil bo'lmagan xromatidalari qismlar almashadi, bu esa birikkan genlarning rekombinatsiyasiga olib keladi. Gomologik bo'lmagan xromosomalar o'rtasidagi qismlar almashinuvi — translokatsiya, ya'ni xromosoma mutatsiyasidir.",
    },
    {
      question: "Genlarning to'liq birikishida digeterozigota hosil qiladi:",
      correct: "Faqat krossover bo'lmagan (ota-ona tipidagi) gametalar",
      wrong: [
        "Har biri 25% dan to'rt tipdagi gametalar",
        "Asosan krossover bo'lmagan va oz miqdorda krossover gametalar",
        "Faqat krossover (rekombinant) gametalar",
      ],
      explanation: "To'liq birikishda genlar o'rtasida krossingover sodir bo'lmaydi, shuning uchun faqat allellarning ota-ona tipidagi kombinatsiyalariga ega gametalar hosil bo'ladi. Krossover gametalarning kichik ulushi to'liq bo'lmagan birikishga, to'rt tipdagi gametalarning teng miqdorda hosil bo'lishi esa mustaqil irsiylanishga xos.",
    },
    {
      question: "Bir morganida to'g'ri keladi:",
      correct: "Genlar o'rtasidagi 1% li krossingover chastotasiga",
      wrong: [
        "Genlar o'rtasidagi 10% li krossingover chastotasiga",
        "Genlar o'rtasidagi 50% li krossingover chastotasiga",
        "Bitta genning nukleotidlarda ifodalangan uzunligiga",
      ],
      explanation: "Morganida — genetik xaritada genlar orasidagi masofa birligi: 1 morganida krossover (rekombinant) gametalar yoki nasllarning 1% iga to'g'ri keladi.",
    },
    {
      question: "Chatishtirishda aniqlash mumkin bo'lgan ikki gen o'rtasidagi rekombinatsiyaning maksimal chastotasi:",
      correct: "50%",
      wrong: [
        "25%",
        "75%",
        "100%",
      ],
      explanation: "Bir-biridan uzoq joylashgan genlar o'rtasida ko'p marta krossingover sodir bo'lganda ham rekombinantlar ulushi 50% dan oshmaydi va bunday genlar birikmagan genlar kabi irsiylanadi. Shuning uchun rekombinatsiya chastotasi bo'yicha masofa yaqin joylashgan genlar uchun ishonchli aniqlanadi.",
    },
    {
      question: "Odamda bolaning jinsini belgilaydi:",
      correct: "Tuxum hujayrani urug'lantirgan spermatozoidning jinsiy xromosomasi",
      wrong: [
        "Urug'lanishda ishtirok etgan tuxum hujayraning jinsiy xromosomasi",
        "Homiladorlikning birinchi trimestrida onaning gormonal holati",
        "Hosil bo'lgan zigotadagi autosomalar soni",
      ],
      explanation: "Barcha tuxum hujayralar X-xromosoma tutadi, spermatozoidlar esa ikki xil bo'ladi — X- yoki Y-xromosomali. X-xromosomali spermatozoid bilan urug'lanishda XX zigota (qiz bola), Y-xromosomali spermatozoid bilan — XY zigota (o'g'il bola) hosil bo'ladi.",
    },
    {
      question: "Embrionda urug'donlar rivojlanishini belgilovchi SRY geni joylashgan:",
      correct: "Y-xromosomaning qisqa yelkasida",
      wrong: [
        "X-xromosomaning uzun yelkasida",
        "X-xromosomaning qisqa yelkasida",
        "Mitoxondrial DNKda",
      ],
      explanation: "SRY geni (Y-xromosomaning jinsni belgilovchi sohasi) Y-xromosomaning qisqa yelkasida joylashgan va gonada kurtaklarining urug'donlarga aylanib rivojlanishini ishga tushiradi. U bo'lmaganda yoki yo'qolganda gonadalar hatto XY kariotipida ham ayol tipida rivojlanadi.",
    },
    {
      question: "Geterogametali jins deb shunday jinsga aytiladiki, u:",
      correct: "Jinsiy xromosomasi bo'yicha farq qiluvchi ikki tipdagi gametalar hosil qiladi",
      wrong: [
        "Jinsiy xromosomasi bo'yicha bir xil bo'lgan bir tipdagi gametalar hosil qiladi",
        "Ikkita bir xil jinsiy xromosomaga ega",
        "Gametalarida jinsiy xromosomalar bo'lmaydi",
      ],
      explanation: "Geterogametali jins turli jinsiy xromosomalarga ega bo'lib, ikki tipdagi gametalar hosil qiladi: odamda bu erkak jinsi (XY — X- va Y-xromosomali spermatozoidlar). Odamda ayol jinsi gomogametali (XX) bo'lib, bir tipdagi tuxum hujayralar hosil qiladi.",
    },
    {
      question: "X-xromosomaga birikkan dominant tipda irsiylanadigan kasalliklarga kiradi:",
      correct: "Gipofosfatemik raxit",
      wrong: [
        "Dyushenning progressiv mushak distrofiyasi",
        "Gemofiliya A",
        "Axondroplaziya",
      ],
      explanation: "Gipofosfatemik (D vitaminiga rezistent) raxit — X-xromosomaga birikkan dominant irsiylanishning klassik misoli: kasal ota uni barcha qizlariga o'tkazadi. Gemofiliya A va Dyushenn miodistrofiyasi X-xromosomaga birikkan retsessiv, axondroplaziya esa autosom-dominant tipda irsiylanadi.",
    },
    {
      question: "Golandrik belgilar deb shunday belgilarga aytiladiki, ular:",
      correct: "Otadan barcha o'g'illarga o'tadi",
      wrong: [
        "Onadan barcha farzandlarga o'tadi",
        "Otadan barcha qizlarga o'tadi",
        "Onadan faqat o'g'illarga o'tadi",
      ],
      explanation: "Golandrik belgilar Y-xromosoma genlari bilan belgilanadi; Y-xromosoma faqat erkaklarda bo'ladi va otadan har bir o'g'ilga o'tadi. Otadan barcha qizlarga o'tish X-xromosomaga birikkan dominant, onadan barcha farzandlarga o'tish esa mitoxondrial irsiylanishga xos.",
    },
    {
      question: "Jins bilan chegaralangan belgilar — bu shunday belgilarki, ular:",
      correct: "Genlari ikkala jinsda ham bo'lsa-da, faqat bir jinsda namoyon bo'ladi",
      wrong: [
        "Faqat Y-xromosomada joylashgan genlar bilan belgilanadi",
        "Ikkala jinsda ham namoyon bo'ladi, lekin dominantligi jinsga bog'liq",
        "Sitoplazma orqali faqat ona tomonidan irsiylanadi",
      ],
      explanation: "Jins bilan chegaralangan belgilarning genlari ikkala jinsda ham (ko'pincha autosomalarda) bo'ladi, lekin ulardan faqat birida namoyon bo'ladi — masalan, erkaklarda soqol o'sishi, sigirlarda sutdorlik. Dominantligi jinsga bog'liq bo'lgan belgilar (erta kallik) jinsga bog'liq belgilar deb ataladi.",
    },
    {
      question: "Odamda jinsga bog'liq (jins tomonidan nazorat qilinadigan) belgiga misol:",
      correct: "Erta kallik",
      wrong: [
        "Albinizm",
        "Ko'p barmoqlilik (polidaktiliya)",
        "Kalta barmoqlilik (braxidaktiliya)",
      ],
      explanation: "Erta kallik geni autosomada joylashgan, lekin erkaklarda dominant, ayollarda esa retsessiv belgi sifatida namoyon bo'ladi, shuning uchun kallik erkaklarda ancha ko'p uchraydi. Albinizm, polidaktiliya va braxidaktiliya ikkala jinsda bir xil namoyon bo'ladi.",
    },
    {
      question: "Mitoxondrial DNK mutatsiyalari sabab bo'lgan kasalliklar o'tadi:",
      correct: "Onadan ikkala jinsdagi farzandlarga",
      wrong: [
        "Otadan faqat o'g'illarga",
        "Otadan faqat qizlarga",
        "Ikkala ota-onadan teng ehtimollik bilan",
      ],
      explanation: "Zigotaning mitoxondriyalari tuxum hujayra sitoplazmasidan kelib chiqadi, shuning uchun mitoxondrial DNK mutatsiyalari faqat ona tomonidan — o'g'illarga ham, qizlarga ham o'tadi; kasal erkak kasallikni farzandlariga o'tkazmaydi. Misol — Leberning ko'ruv nervlari atrofiyasi.",
    },

    // --- vaziyatli masalalar ---
    {
      situation: "Gemofiliya geni tashuvchisi bo'lgan ayol (XᴴXʰ) sog'lom erkakka (XᴴY) turmushga chiqdi.",
      question: "Bu oilada gemofiliya bilan kasallangan bola tug'ilish ehtimoli qancha (barcha farzandlarga nisbatan)?",
      correct: "25%",
      wrong: [
        "50%",
        "0%",
        "75%",
      ],
      explanation: "P: XᴴXʰ × XᴴY; onaning gametalari — Xᴴ va Xʰ, otaniki — Xᴴ va Y; nasl: XᴴXᴴ, XᴴXʰ, XᴴY, XʰY. Faqat XʰY o'g'il kasal — 4 variantdan 1 tasi (barcha farzandlarning 25%), o'g'illar orasida esa kasallanish ehtimoli 50% ni tashkil etadi.",
    },
    {
      situation: "Otasi daltonik bo'lgan, ranglarni normal ajrata oladigan ayol ko'rishi normal erkakka turmushga chiqdi. Daltonizm X-xromosomaga birikkan retsessiv belgi sifatida irsiylanadi.",
      question: "Ularda tug'ilgan o'g'ilning daltonik bo'lish ehtimoli qancha?",
      correct: "50%",
      wrong: [
        "25%",
        "100%",
        "0%",
      ],
      explanation: "Ayol otasidan Xᵈ olgan, demak, uning genotipi XᴰXᵈ; P: XᴰXᵈ × XᴰY. O'g'il X-xromosomani faqat onadan oladi, shuning uchun o'g'illarning XᴰY va XᵈY genotiplari teng ehtimolli — har bir o'g'il 50% ehtimollik bilan kasal (barcha farzandlarga nisbatan — 25%).",
    },
    {
      situation: "Gemofiliya bilan kasallangan erkak (XʰY) nasl-nasabida gemofiliya uchramagan sog'lom ayolga (XᴴXᴴ) uylandi.",
      question: "Bu oilada qanday farzandlar tug'ilishi kutiladi?",
      correct: "Barcha qizlar — tashuvchi, barcha o'g'illar sog'lom",
      wrong: [
        "Barcha o'g'illar kasal, barcha qizlar sog'lom",
        "O'g'illarning yarmi kasal, qizlarning yarmi — tashuvchi",
        "Barcha farzandlar sog'lom va gemofiliya genini tashimaydi",
      ],
      explanation: "P: XᴴXᴴ × XʰY. Qizlar otadan Xʰ, onadan Xᴴ oladi, shuning uchun ularning barchasi sog'lom tashuvchilardir (XᴴXʰ); o'g'illar otadan Y-xromosoma, onadan Xᴴ oladi — barchasi sog'lom (XᴴY).",
    },
    {
      situation: "Gipofosfatemik raxit bilan kasallangan erkak (X-xromosomaga birikkan dominant belgi, genotipi XᴬY) sog'lom ayolga (XᵃXᵃ) uylandi.",
      question: "Ularda tug'ilgan qizning kasal bo'lish ehtimoli qancha?",
      correct: "100%",
      wrong: [
        "50%",
        "25%",
        "0%",
      ],
      explanation: "P: XᵃXᵃ × XᴬY. Har bir qiz otadan Xᴬ oladi va shuning uchun kasal bo'ladi (XᴬXᵃ), har bir o'g'il esa otadan Y-xromosoma oladi va sog'lom bo'ladi (XᵃY).",
    },
    {
      situation: "Gipofosfatemik raxit bilan kasallangan ayol (X-xromosomaga birikkan dominant belgi, geterozigota XᴬXᵃ) sog'lom erkakka (XᵃY) turmushga chiqdi.",
      question: "Ularda tug'ilgan o'g'ilning kasal bo'lish ehtimoli qancha?",
      correct: "50%",
      wrong: [
        "100%",
        "0%",
        "25%",
      ],
      explanation: "P: XᴬXᵃ × XᵃY; onaning gametalari — Xᴬ va Xᵃ, otaniki — Xᵃ va Y. O'g'il onadan teng ehtimollik bilan Xᴬ yoki Xᵃ oladi, shuning uchun har ikkinchi o'g'il kasal bo'ladi; qizning kasal bo'lish ehtimoli ham xuddi shunday — 50%.",
    },
    {
      situation: "AB/ab digeterozigotani (A va B genlari birikkan, dominant allellar bir ota-onadan olingan) aabb retsessiv gomozigota bilan tahliliy chatishtirishda 1000 ta nasl olindi: 455 ta AaBb, 445 ta aabb, 52 ta Aabb va 48 ta aaBb.",
      question: "A va B genlari orasidagi masofa qancha?",
      correct: "10 morganida",
      wrong: [
        "5 morganida",
        "20 morganida",
        "90 morganida",
      ],
      explanation: "Aabb va aaBb nasllar rekombinant (krossover) hisoblanadi: 1000 tadan 52 + 48 = 100 ta, ya'ni 10%. 1% krossingover 1 morganidaga teng bo'lgani uchun genlar orasidagi masofa 10 morganidani tashkil etadi.",
    },
    {
      situation: "A, B va C genlari bitta xromosomada joylashgan. A va B genlari orasidagi masofa — 9 morganida, B va C genlari orasidagi masofa — 4 morganida, bunda C geni A va B genlari orasida joylashgan.",
      question: "A va C genlari orasidagi masofa qancha?",
      correct: "5 morganida",
      wrong: [
        "13 morganida",
        "4,5 morganida",
        "9 morganida",
      ],
      explanation: "Genetik xaritada genlar chiziqli joylashgan va ular orasidagi masofalar qo'shiladi: A–C + C–B = A–B. Demak, A–C = 9 − 4 = 5 morganida.",
    },
    {
      situation: "Shajarada kasallik faqat erkaklarda uchraydi. Kasallarning ota-onalari sog'lom. Kasal erkaklar kasallikni o'g'illariga o'tkazmaydi, lekin ularning sog'lom qizlaridan kasal o'g'illar tug'iladi.",
      question: "Irsiylanishning qaysi tipi eng ehtimolli?",
      correct: "X-xromosomaga birikkan retsessiv",
      wrong: [
        "Y-xromosomaga birikkan (golandrik)",
        "Autosom-dominant",
        "X-xromosomaga birikkan dominant",
      ],
      explanation: "Genni sog'lom tashuvchi onalardan olgan erkaklar kasallanadi; kasallik otadan o'g'ilga o'tmaydi, kasal erkakning sog'lom qizlari orqali esa nabiralarga o'tadi — bular X-xromosomaga birikkan retsessiv irsiylanish belgilaridir. Y-xromosomaga birikkan irsiylanishda kasal otaning barcha o'g'illari kasal bo'lar edi.",
    },
    {
      situation: "Kasallik har bir avlodda kuzatiladi. Kasal erkakning barcha qizlari kasal, barcha o'g'illari esa sog'lom. Kasal ayolning o'g'illarining taxminan yarmi va qizlarining yarmi kasal.",
      question: "Irsiylanishning qaysi tipi eng ehtimolli?",
      correct: "X-xromosomaga birikkan dominant",
      wrong: [
        "Autosom-dominant",
        "X-xromosomaga birikkan retsessiv",
        "Mitoxondrial",
      ],
      explanation: "Har bir avlod zararlanganda kasallikning otadan barcha qizlarga o'tishi va birorta ham o'g'ilga o'tmasligi — X-xromosomaga birikkan dominant irsiylanishning asosiy belgisi; kasal geterozigota ona kasallikni ikkala jinsdagi farzandlarining yarmiga o'tkazadi. Autosom-dominant tipda kasal ota kasallikni o'g'illariga ham o'tkazgan bo'lar edi.",
    },
    {
      situation: "O'zaro amakivachcha bo'lgan sog'lom er-xotinning to'rt farzandi bor: sog'lom o'g'il va qiz, kasal o'g'il va qiz. Na ota-onada, na ularning ajdodlarida bu kasallik qayd etilmagan.",
      question: "Irsiylanishning qaysi tipi eng ehtimolli?",
      correct: "Autosom-retsessiv",
      wrong: [
        "Autosom-dominant",
        "X-xromosomaga birikkan retsessiv",
        "Y-xromosomaga birikkan (golandrik)",
      ],
      explanation: "Sog'lom ota-onada ikkala jinsdagi kasal farzandlarning bo'lishi, oldingi avlodlarda kasallikning yo'qligi va qarindoshlar o'rtasidagi nikoh — autosom-retsessiv irsiylanish belgilari (ikkala ota-ona geterozigota, Aa). X-xromosomaga birikkan retsessiv tip istisno qilinadi, chunki bunda sog'lom otadan kasal qiz tug'ilishi mumkin emas.",
    },
    {
      situation: "Kasallik har bir avlodda kuzatiladi, erkaklar va ayollar bir xil chastotada kasallanadi. Kasal ota kasallikni o'g'li va qiziga o'tkazgan; har bir kasalning ota-onasidan biri kasal, oilaning sog'lom a'zolarida esa kasal avlod yo'q.",
      question: "Irsiylanishning qaysi tipi eng ehtimolli?",
      correct: "Autosom-dominant",
      wrong: [
        "X-xromosomaga birikkan dominant",
        "Autosom-retsessiv",
        "Mitoxondrial",
      ],
      explanation: "Kasallikning vertikal tarzda o'tishi, ikkala jinsning bir xil zararlanishi va kasallikning otadan o'g'ilga o'tishi autosom-dominant tipga xos. Otadan o'g'ilga o'tish X-xromosomaga birikkan dominant irsiylanishni, kasallikning otadan o'tishining o'zi esa mitoxondrial irsiylanishni istisno qiladi.",
    },

    // ===== Genetika: o'zgaruvchanlik va mutagenez =====
    {
      question: "Reaksiya normasi — bu:",
      correct: "Genotip bilan belgilanadigan belgi o'zgaruvchanligining chegaralari",
      wrong: [
        "Organizm somatik hujayralaridagi xromosomalar soni o'zgarishining chegaralari",
        "Odamlarning bir avlodida spontan mutatsiyalarning paydo bo'lish chastotasi",
        "Hujayraning DNK molekulasidagi shikastlanishlarni fermentlar yordamida bartaraf etish qobiliyati",
      ],
      explanation: "Reaksiya normasi — belgining muhit sharoitlari ta'sirida o'zgarishi mumkin bo'lgan, genetik jihatdan belgilangan chegaralari; nasldan naslga belgining o'zi emas, aynan reaksiya normasi o'tadi.",
    },
    {
      question: "Modifikatsion o'zgaruvchanlik uchun qaysi xususiyat xos?",
      correct: "O'zgarishlar guruhli va yo'naltirilgan xarakterga ega",
      wrong: [
        "O'zgarishlar jinsiy hujayralar orqali avlodlarga o'tadi",
        "O'zgarishlar alohida individlarda to'satdan paydo bo'ladi",
        "O'zgarishlar individ genotipining qayta tuzilishi bilan bog'liq",
      ],
      explanation: "Modifikatsiyalar bir xil sharoitga tushib qolgan barcha individlarda o'xshash tarzda paydo bo'ladi va shu sharoitlarga mos keladi, lekin irsiylanmaydi; to'satdan va yakka-yakka paydo bo'lish — mutatsiyalarning xususiyatlari.",
    },
    {
      question: "Variatsion qatorda belgining qaysi variantlari eng ko'p uchraydi?",
      correct: "Belgining o'rtacha qiymatiga ega variantlar",
      wrong: [
        "Belgining maksimal qiymatiga ega variantlar",
        "Belgining minimal qiymatiga ega variantlar",
        "Barcha variantlar bir xil chastotada uchraydi",
      ],
      explanation: "Modifikatsion o'zgaruvchanlikning taqsimlanishi odatda normal taqsimotga yaqin bo'ladi: variatsion egri chiziq o'rtacha qiymatlar sohasida maksimumga ega va chekka variantlar tomon pasayib boradi.",
    },
    {
      question: "Kombinativ o'zgaruvchanlikning manbai nima?",
      correct: "Meyozning I profazasidagi krossingover",
      wrong: [
        "DNK molekulasida nukleotidning almashinishi",
        "Xromosoma uchki qismining yo'qolishi",
        "Xromosomalar to'plamining karrali ortishi",
      ],
      explanation: "Kombinativ o'zgaruvchanlik krossingover, meyozda xromosomalarning mustaqil taqsimlanishi va urug'lanishda gametalarning tasodifiy qo'shilishi hisobiga yuzaga keladi; bunda genlar va xromosomalarning tuzilishi o'zgarmaydi.",
    },
    {
      question: "G. de Frizning mutatsion nazariyasiga qaysi qoida kiradi?",
      correct: "Bir xil mutatsiyalar takroran paydo bo'lishi mumkin",
      wrong: [
        "Mutatsiyalar uzluksiz o'zgaruvchanlik qatorlarini hosil qiladi",
        "Mutatsiyalar har doim moslashuvchan xarakterga ega",
        "Mutatsiyalar muhit sharoitlari o'zgarganda yo'qoladi",
      ],
      explanation: "De Frizga ko'ra, mutatsiyalar to'satdan, sakrashsimon paydo bo'ladi, turg'un irsiylanadi, foydali va zararli bo'ladi hamda takroran paydo bo'lishi mumkin; uzluksiz qatorlar va qaytuvchanlik modifikatsiyalarga xos.",
    },
    {
      question: "Odamda somatik mutatsiyalar uchun nima xos?",
      correct: "Jinsiy ko'payishda avlodlarga o'tmaydi",
      wrong: [
        "Jinsiy hujayralar orqali barcha avlodlarga o'tadi",
        "Faqat kimyoviy mutagenlar ta'sirida paydo bo'ladi",
        "Faqat embrion va homila hujayralarida paydo bo'ladi",
      ],
      explanation: "Somatik mutatsiyalar tana hujayralarida paydo bo'ladi va faqat qiz hujayralarga o'tadi (mozaitsizm va o'smalarga olib kelishi mumkin), lekin naslga o'tmaydi; naslga generativ mutatsiyalar o'tadi.",
    },
    {
      question: "Nonsens-mutatsiya — bu nukleotid almashinishi bo'lib, uning natijasida:",
      correct: "Aminokislota kodoni stop-kodonga aylanadi",
      wrong: [
        "Oqsildagi bitta aminokislota boshqasi bilan almashinadi",
        "Oqsilning aminokislota tarkibi o'zgarmaydi",
        "Keyingi kodonlar o'qish ramkasi siljigan holda o'qiladi",
      ],
      explanation: "Nonsens-mutatsiyada stop-kodon hosil bo'ladi, oqsil sintezi muddatidan oldin to'xtaydi va qisqargan oqsil hosil bo'ladi; bitta aminokislotaning boshqasi bilan almashinishi — missens-mutatsiya.",
    },
    {
      question: "Seymsens-mutatsiyalar (sokin mutatsiyalar) genetik kodning quyidagi xususiyati tufayli oqsilni o'zgartirmaydi:",
      correct: "Aynishganlik",
      wrong: [
        "Universallik",
        "Bir-birini qoplamaslik",
        "Tripletlik",
      ],
      explanation: "Aminokislotalarning ko'pchiligi bir nechta triplet bilan kodlanadi, shuning uchun nukleotidning almashinishi o'sha aminokislotaning sinonim kodonini hosil qilishi mumkin va oqsil o'zgarmaydi.",
    },
    {
      question: "Izoxromosomaning hosil bo'lish sababi:",
      correct: "Hujayra bo'linishida sentromeraning ko'ndalang ajralishi",
      wrong: [
        "Uchki qismlar yo'qolgandan keyin xromosoma uchlarining birikishi",
        "Ikkita akrotsentrik xromosomaning sentromeralar sohasida qo'shilib ketishi",
        "Ikki joydan uzilgandan keyin xromosoma qismining 180° ga burilishi",
      ],
      explanation: "Sentromeraning ko'ndalang (bo'ylama emas) ajralishida ikkita bir xil yelkadan iborat xromosoma hosil bo'ladi, masalan, X-xromosoma uzun yelkasining izoxromosomasi; qolgan variantlar halqasimon xromosoma, robertson translokatsiyasi va inversiyani tavsiflaydi.",
    },
    {
      question: "Xromosomalar sonining gaploid to'plamga karrali bo'lmagan o'zgarishi qanday ataladi?",
      correct: "Aneuploidiya",
      wrong: [
        "Poliploidiya",
        "Duplikatsiya",
        "Mozaitsizm",
      ],
      explanation: "Aneuploidiya — alohida xromosomalar sonining ortishi yoki kamayishi (trisomiya, monosomiya); poliploidiya — butun xromosoma to'plamining karrali ortishi (69, 92 ta xromosoma).",
    },
    {
      question: "Qaysi omil kimyoviy mutagenlarga kiradi?",
      correct: "Alkillovchi sitostatiklar",
      wrong: [
        "Rentgen nurlanishi",
        "Qizilcha virusi",
        "Ultrabinafsha nurlanish",
      ],
      explanation: "Alkillovchi sitostatiklar (masalan, siklofosfamid) DNKni shikastlaydi va kimyoviy mutagenlarga kiradi; rentgen va ultrabinafsha nurlanish — fizik mutagenlar, viruslar — biologik mutagenlar.",
    },
    {
      question: "Qaysi moddalar antimutagenlarga kiradi?",
      correct: "Antioksidantlar — C va E vitaminlari",
      wrong: [
        "Og'ir metallar tuzlari",
        "Pestitsidlar va gerbitsidlar",
        "Tamaki tutunining tarkibiy qismlari",
      ],
      explanation: "Antimutagenlar mutatsiyalar chastotasini kamaytiradi: mutagenlar va erkin radikallarni zararsizlantiradi yoki DNK reparatsiyasini qo'llab-quvvatlaydi; ularga A, C, E vitaminlari, selen kiradi, qolgan variantlar esa mutagenlardir.",
    },
    {
      question: "DNK reparatsiyasining (shikastlangan tuzilishini tiklashning) buzilishi asosida yotadigan kasallik:",
      correct: "Pigmentli kseroderma",
      wrong: [
        "Fenilketonuriya",
        "Shereshevskiy–Terner sindromi",
        "Gemofiliya",
      ],
      explanation: "Pigmentli kserodermada ultrabinafsha nurlar keltirib chiqargan DNK shikastlanishlarining eksizion reparatsiyasi buzilgan; fenilketonuriya va gemofiliya muayyan genlarning mutatsiyalari, Shereshevskiy–Terner sindromi esa X-xromosoma bo'yicha monosomiya sababli yuzaga keladi.",
    },
    {
      question: "Teratogenning homilaga ta'siri oqibatlari mutagenning jinsiy hujayralarga ta'siri oqibatlaridan nimasi bilan farq qiladi?",
      correct: "Yuzaga kelgan rivojlanish nuqsonlari irsiylanmaydi",
      wrong: [
        "O'zgarishlar naslning bir necha avlodiga o'tadi",
        "O'zgarishlar faqat homilaning jinsiy hujayralarida paydo bo'ladi",
        "O'zgarishlar har doim homila xromosomalarining soniga taalluqli bo'ladi",
      ],
      explanation: "Teratogen genotipni o'zgartirmasdan embrional rivojlanishni buzadi, shuning uchun yuzaga kelgan nuqson irsiylanmaydi va irsiy patologiyaning fenokopiyasi bo'lishi mumkin; mutagen genetik materialni o'zgartiradi va jinsiy hujayralardagi mutatsiyalar naslga o'tadi.",
    },
    {
      question: "N. I. Vavilovning irsiy o'zgaruvchanlikdagi gomologik qatorlar qonuni nimani ta'kidlaydi?",
      correct: "Yaqin turlar va turkumlar irsiy o'zgaruvchanlikning o'xshash qatorlariga ega",
      wrong: [
        "Mutatsiyalar oraliq shakllarsiz to'satdan paydo bo'ladi va turg'un irsiylanadi",
        "Har bir juft belgi boshqa juft belgilardan mustaqil ravishda irsiylanadi",
        "Bitta xromosomada joylashgan genlar birgalikda, ya'ni birikkan holda irsiylanadi",
      ],
      explanation: "Vavilov genetik jihatdan yaqin turlar va turkumlar irsiy o'zgaruvchanlikning o'xshash qatorlariga ega ekanligini ko'rsatdi; tibbiyotda bu odam kasalliklarini o'xshash mutatsiyalarga ega hayvonlarda o'rganishni asoslaydi. Qolgan variantlar — de Friz, Mendel va Morgan qoidalari.",
    },

    // --- vaziyatli masalalar ---
    {
      situation: "O'roqsimon hujayrali anemiyada β-globin genining 6-kodonida GAG tripleti GTG tripleti bilan almashingan. Natijada gemoglobin zanjirida glutamin kislota valin bilan almashinadi, oqsil zanjirining uzunligi o'zgarmaydi.",
      question: "Bu o'zgarish gen mutatsiyalarining qaysi turiga kiradi?",
      correct: "Missens-mutatsiya",
      wrong: [
        "Nonsens-mutatsiya",
        "Seymsens-mutatsiya",
        "O'qish ramkasining siljishi",
      ],
      explanation: "Bitta aminokislotaning boshqasi bilan almashinishiga olib keladigan bitta nukleotid almashinishi — missens-mutatsiya; nonsens-mutatsiyada stop-kodon hosil bo'lar edi, seymsens-mutatsiyada aminokislota o'zgarmas edi.",
    },
    {
      situation: "DNK kodlovchi zanjirining bir qismi S-A-T-G-G-A-T-T-A-S-S-G ketma-ketligiga ega edi. Mutatsiyadan keyin bu qismning ketma-ketligi S-A-T-G-A-T-T-A-S-S-G bo'lib qoldi.",
      question: "Qanday mutatsiya sodir bo'lgan va uning oqibati qanday?",
      correct: "Nukleotidning tushib qolishi, o'qish ramkasining siljishi bilan",
      wrong: [
        "Nukleotidning qo'shilishi, o'qish ramkasining siljishi bilan",
        "Nukleotidning almashinishi, o'qish ramkasi siljimasdan",
        "Tripletning tushib qolishi, o'qish ramkasi siljimasdan",
      ],
      explanation: "Qism bitta nukleotidga qisqargan (G tushib qolgan), shuning uchun keyingi barcha tripletlar siljish bilan o'qiladi: SAT-GGA-TTA-SSG o'rniga SAT-GAT-TAS-SG…, va mutatsiya joyidan keyin oqsil butunlay o'zgaradi.",
    },
    {
      situation: "Fenotipik jihatdan sog'lom 30 yoshli ayol Daun sindromli bola tug'ilishi munosabati bilan tekshirildi. Uning kariotipi: 45,XX,t(14;21).",
      question: "Ayolda qanday xromosoma qayta tuzilishi aniqlangan?",
      correct: "Robertson translokatsiyasi",
      wrong: [
        "14-xromosoma bo'yicha monosomiya",
        "Retsiprok translokatsiya",
        "21-xromosoma uzun yelkasining izoxromosomasi",
      ],
      explanation: "14 va 21 akrotsentrik xromosomalarning uzun yelkalari bittaga qo'shilgan, shuning uchun xromosomalar 45 ta, lekin muhim genetik material yo'qolmagan (faqat qisqa yelkalar yo'qoladi) — bu monosomiya emas, balki balanslangan robertson translokatsiyasidir.",
    },
    {
      situation: "Daun sindromi belgilari unchalik yaqqol bo'lmagan qiz bolada qon limfotsitlari kariotipini tekshirishda hujayralarning 30% ida 47,XX,+21 kariotipi, qolgan hujayralarda — 46,XX aniqlandi.",
      question: "Bunday holat qanday ataladi?",
      correct: "Mozaitsizm",
      wrong: [
        "Poliploidiya",
        "Duplikatsiya",
        "Translokatsiya",
      ],
      explanation: "Organizmda kariotipi turlicha bo'lgan ikki va undan ortiq hujayra liniyasining bo'lishi mozaitsizm deb ataladi; u maydalanishning dastlabki bosqichlarida mitozda xromosomalar ajralishining buzilishi tufayli yuzaga keladi va belgilari odatda to'liq trisomiyadagiga qaraganda yengilroq bo'ladi.",
    },
    {
      situation: "D vitamini bilan profilaktika olmagan 10 oylik bolada irsiy D vitaminiga rezistent raxit ko'rinishlariga o'xshash raxit belgilari aniqlandi. D vitaminining standart dozalari bilan davolash kursidan keyin bu ko'rinishlar yo'qoldi.",
      question: "Irsiy kasallik ko'rinishlariga o'xshash bunday irsiy bo'lmagan o'zgarishlar qanday ataladi?",
      correct: "Fenokopiya",
      wrong: [
        "Genokopiya",
        "Mozaitsizm",
        "Antitsipatsiya",
      ],
      explanation: "Fenokopiya — genotip o'zgarmagan holda muhit omillari ta'sirida fenotipning irsiy patologiyaga o'xshab o'zgarishi, shuning uchun u irsiylanmaydi; genokopiyalar — turli genlarning mutatsiyalari keltirib chiqargan o'xshash fenotiplar.",
    },
    {
      situation: "Turli oilalardan bo'lgan ikki o'g'il bolada qon ketishga moyillik ortganining bir xil klinik manzarasi kuzatiladi. Birida qon ivishi VIII omili genining mutatsiyasi, ikkinchisida — IX omil genining mutatsiyasi aniqlangan.",
      question: "Turli genlarning mutatsiyalari sabab bo'lgan o'xshash fenotipik ko'rinishlar qanday ataladi?",
      correct: "Genokopiyalar",
      wrong: [
        "Fenokopiyalar",
        "Modifikatsiyalar",
        "Morfozlar",
      ],
      explanation: "Genokopiyalar — turli genlarning mutatsiyalari keltirib chiqargan bir xil yoki o'xshash fenotiplar (masalan, gemofiliya A va B); fenokopiyalar, modifikatsiyalar va morfozlar — genotip o'zgarmagan holdagi irsiy bo'lmagan o'zgarishlar.",
    },
    {
      situation: "Onkologiya bo'limi hamshirasi venaga yuborish uchun sitostatik eritmasini tayyorlamoqda.",
      question: "Uning qaysi harakati sitostatiklar bilan xavfsiz ishlash qoidalariga mos keladi?",
      correct: "Ikki juft qo'lqop kiyib, eritmani laminar boksda tayyorlaydi",
      wrong: [
        "Bir juft qo'lqop kiyib, eritmani ochiq stolda tayyorlaydi",
        "Shpritsdagi havoni chiqarishda eritmani igna orqali havoga purkaydi",
        "Qo'lqoplarga spirt bilan ishlov berib, ularni qayta ishlatadi",
      ],
      explanation: "Sitostatiklar mutagen, kanserogen va teratogen ta'sirga ega, shuning uchun ular laminar boksda himoya kiyimi, ikki juft qo'lqop, niqob (respirator) va ko'zoynak taqqan holda suyultiriladi; eritmani purkash va qo'lqoplarni qayta ishlatish mumkin emas.",
    },
    {
      situation: "Har kuni sitostatiklarni suyultiradigan kimyoterapiya bo'limi hamshirasi katta hamshiraga homiladorlik muddati 6 hafta ekanligini ma'lum qildi.",
      question: "To'g'ri taktika qanday?",
      correct: "Uni sitostatiklar bilan aloqani istisno qiladigan ishga o'tkazish",
      wrong: [
        "Ikki juft qo'lqopda ishlashni majburiy qilib, avvalgi ishida qoldirish",
        "Homiladorlik 20 haftaga yetguncha avvalgi ishida qoldirish",
        "Smena davomiyligini qisqartirib, avvalgi ishida qoldirish",
      ],
      explanation: "Sitostatiklar mutagen va teratogen ta'sirga ega, shuning uchun homilador (va emizikli) ayollar ular bilan ishlashga qo'yilmaydi va bunday aloqasi bo'lmagan ishga o'tkaziladi; himoya vositalari va smenani qisqartirish xavfni bartaraf etmaydi.",
    },
    {
      situation: "Yiqilgandan keyin bilak suyagi singaniga gumon qilingan, homiladorlik muddati 14 hafta bo'lgan ayolga shifokor bilak rentgenografiyasini buyurdi.",
      question: "Rentgenologik tekshiruvga nisbatan qanday taktika tutiladi?",
      correct: "Ko'rsatma bo'yicha, qorin va chanoq sohasini himoyalab o'tkazish",
      wrong: [
        "Tekshiruvni homiladorlik tugaguncha kechiktirish",
        "Rentgenografiyani kompyuter tomografiyasi bilan almashtirish",
        "Tekshiruvni faqat homiladorlik to'xtatilgandan keyin o'tkazish",
      ],
      explanation: "Homilador ayollarga rentgenologik tekshiruvlar faqat qat'iy klinik ko'rsatmalar bo'yicha, qorin va chanoq sohasini himoyalagan holda o'tkaziladi; sinish o'z vaqtida tashxislashni talab qiladi, kompyuter tomografiyasi esa faqat nur yuklamasini oshiradi.",
    },
    {
      situation: "Oilada miotonik distrofiya kuzatiladi: boboda dastlabki belgilar 50 yoshda paydo bo'lgan va kuchsiz ifodalangan, uning qizida — 30 yoshda, qizining o'g'lida esa kasallik tug'ilganidan og'ir shaklda namoyon bo'lgan.",
      question: "Kuzatilayotgan hodisa qanday ataladi va u nima bilan bog'liq?",
      correct: "Trinukleotid takrorlar ekspansiyasi bilan bog'liq antitsipatsiya",
      wrong: [
        "Meyozda xromosomalarning ajralmasligi bilan bog'liq antitsipatsiya",
        "Somatik mutatsiyalarning to'planishi bilan bog'liq mozaitsizm",
        "Noqulay muhit omillari bilan bog'liq fenokopiya",
      ],
      explanation: "Har bir keyingi avlodda kasallikning ertaroq boshlanishi va og'irlashishi — antitsipatsiya; u dinamik mutatsiya — gen naslga o'tganda STG trinukleotid takrorlari sonining ortishi bilan izohlanadi.",
    },

    // ===== Genetika: odam genetikasini o'rganish usullari =====
    {
      question: "Odamning genetik tadqiqot obyekti sifatidagi o'ziga xos xususiyatlaridan biri:",
      correct: "Eksperimental nikohlarning mumkin emasligi",
      wrong: [
        "Kariotipda xromosomalar sonining kamligi",
        "Populyatsiyada avlodlarning tez almashinishi",
        "Har bir oilada ko'p sonli nasl",
      ],
      explanation: "Odamda gibridologik tahlilni qo'llab bo'lmaydi, chunki yo'naltirilgan eksperimental nikohlar mumkin emas; bundan tashqari, odamda xromosomalar soni ko'p (46), nasli kam sonli va avlodlar sekin almashadi (taxminan har 25–30 yilda).",
    },
    {
      question: "Genealogik usulda proband deb ataladi:",
      correct: "Shajara tuzish boshlanadigan shaxs",
      wrong: [
        "Birinchi avlodda ko'rsatilgan oila asoschisi",
        "Shajaradagi har qanday kasal qarindosh",
        "Tekshirilayotgan shaxsning tug'ishgan aka-ukasi yoki opa-singlisi",
      ],
      explanation: "Proband — ma'lumot to'plash va shajara tuzish boshlanadigan shaxs (ko'pincha bemor yoki maslahat uchun murojaat qilgan kishi); shajarada u strelka bilan belgilanadi. Probandning tug'ishgan aka-uka va opa-singillari — uning sibslari.",
    },
    {
      question: "Genealogik usulda sibslar deb ataladi:",
      correct: "Tug'ishgan aka-uka va opa-singillar",
      wrong: [
        "Amakivachcha, ammavachcha, tog'avachcha va xolavachchalar",
        "Qon-qarindoshlarning turmush o'rtoqlari",
        "Probandning ona tomonidagi qarindoshlari",
      ],
      explanation: "Sibslar — tug'ishgan aka-uka va opa-singillar, ya'ni bir juft ota-onaning farzandlari; faqat bitta umumiy ota yoki onasi bo'lgan bolalar yarim sibslar deb ataladi.",
    },
    {
      question: "Shajaradagi «II-3» belgisi quyidagini ko'rsatadi:",
      correct: "Ikkinchi avlodning chapdan uchinchi a'zosi",
      wrong: [
        "Uchinchi avlodning chapdan ikkinchi a'zosi",
        "Probandning ikkinchi nikohdan bo'lgan uchinchi farzandi",
        "Uch farzandli oiladagi ikkinchi farzand",
      ],
      explanation: "Avlodlar yuqoridan pastga qarab rim raqamlari bilan (I — eng katta avlod), bir avlod a'zolari esa chapdan o'ngga qarab tartib bilan arab raqamlari bilan belgilanadi; shuning uchun «II-3» — ikkinchi avlodning tartib bo'yicha uchinchi a'zosi.",
    },
    {
      question: "Egizaklar usulida konkordantlik deb ataladi:",
      correct: "O'rganilayotgan belgining juftdagi ikkala egizakda ham mavjudligi",
      wrong: [
        "Belgining egizaklardan faqat bittasida mavjudligi",
        "Barcha egizaklar orasida monozigot juftlar ulushi",
        "Juftdagi monozigot egizaklarning genetik jihatdan bir xilligi",
      ],
      explanation: "Konkordantlik — juftdagi egizaklarning o'rganilayotgan belgi bo'yicha mos kelishi, ya'ni belgining ikkalasida ham mavjudligi. Belgining egizaklardan faqat bittasida mavjudligi diskordantlik deb ataladi.",
    },
    {
      question: "Kariotipni tekshirish uchun ko'pincha qaysi hujayralar kulturasidan foydalaniladi:",
      correct: "Periferik qon limfotsitlari",
      wrong: [
        "Periferik qon eritrotsitlari",
        "Bukkal epiteliy hujayralari",
        "Periferik qon trombotsitlari",
      ],
      explanation: "Kariotiplash uchun bo'linuvchi yadroli hujayralar kerak: periferik qon limfotsitlari fitogemagglyutinin bilan bo'linishga rag'batlantiriladi va taxminan 72 soat davomida kultivatsiya qilinadi. Eritrotsitlar va trombotsitlarda yadro bo'lmaydi, bukkal epiteliy esa jinsiy xromatinni tezkor aniqlash uchun ishlatiladi.",
    },
    {
      question: "Xromosoma preparatlarini tayyorlashda hujayralar kulturasiga kolxitsin quyidagi maqsadda qo'shiladi:",
      correct: "Hujayralar bo'linishini metafaza bosqichida to'xtatish",
      wrong: [
        "Kulturadagi limfotsitlar bo'linishini rag'batlantirish",
        "Hujayralarning bo'kishi va xromosomalarning tarqalishini yuzaga keltirish",
        "Hujayralarni fiksatsiya qilish va ularning tuzilishini saqlash",
      ],
      explanation: "Kolxitsin bo'linish urchug'ini buzadi va hujayralar metafazada to'planadi; bu vaqtda xromosomalar maksimal darajada spirallashgan va yaxshi ko'rinadi. Bo'linishni fitogemagglyutinin rag'batlantiradi, hujayralarning bo'kishini gipotonik eritma yuzaga keltiradi, fiksatsiya esa metanol va sirka kislotasi aralashmasi (3 : 1) bilan o'tkaziladi.",
    },
    {
      question: "Xromosomalarni differensial G-bo'yash quyidagi imkoniyatni beradi:",
      correct: "Har bir juft xromosomani aniq identifikatsiya qilish",
      wrong: [
        "Genlardagi nukleotidlar ketma-ketligini aniqlash",
        "Alohida genlardagi nuqtali mutatsiyalarni aniqlash",
        "Qon hujayralaridagi fermentlar faolligini baholash",
      ],
      explanation: "Tripsin bilan ishlov berilib, Gimza bo'yog'i bilan bo'yalgandan so'ng har bir xromosoma to'q va och ko'ndalang tasmalardan iborat o'ziga xos chizmaga ega bo'ladi; bu barcha juftlarni identifikatsiya qilish va struktur qayta tuzilishlarni aniqlash imkonini beradi. Nukleotidlar ketma-ketligi va nuqtali mutatsiyalar molekulyar-genetik usullar bilan aniqlanadi.",
    },
    {
      question: "Jinsiy xromatinni tezkor aniqlash uchun material bo'lib xizmat qiladi:",
      correct: "Lunj shilliq qavati epiteliysidan olingan qirma",
      wrong: [
        "Periferik qon limfotsitlari kulturasi",
        "Vena qoni zardobi",
        "Kapillyar qonning quruq dog'i",
      ],
      explanation: "Jinsiy xromatin (Barr tanachalari) lunj shilliq qavatidan qirib olingan bukkal epiteliy hujayralarining yadrolarida aniqlanadi; usul tez va kultivatsiyani talab qilmaydi, ammo taxminiy natija beradi, bu natija kariotiplash bilan tasdiqlanadi.",
    },
    {
      question: "Irsiy kasalliklar diagnostikasida tandem mass-spektrometriya usuli quyidagi imkoniyatni beradi:",
      correct: "Qonda ko'plab aminokislotalar va atsilkarnitinlarni bir vaqtda aniqlash",
      wrong: [
        "Hujayralarni kultivatsiya qilmasdan bir tomchi qon bo'yicha bolaning kariotipini aniqlash",
        "Xromosomalarning muvozanatlashgan translokatsiyalari va inversiyalarini aniqlash",
        "Bukkal epiteliy hujayralari yadrolaridagi Barr tanachalarini sanash",
      ],
      explanation: "Tandem mass-spektrometriya quruq qon dog'ini bir marta tekshirishda o'nlab metabolitlar konsentratsiyasini o'lchaydi; bu aminoatsidopatiyalar, organik atsiduriyalar va yog' kislotalari oksidlanishi nuqsonlarini aniqlash imkonini beradi; kengaytirilgan neonatal skrining shu usulga asoslangan.",
    },
    {
      question: "Xardi–Vaynberg qonuni bajarilishining shartlaridan biri:",
      correct: "Er-xotin juftlarning tasodifiy tanlanishi (panmiksiya)",
      wrong: [
        "Populyatsiyada qon-qarindoshlar nikohining yuqori chastotasi",
        "Populyatsiyalar o'rtasida aholining jadal migratsiyasi",
        "Tabiiy tanlanishning doimiy ta'siri",
      ],
      explanation: "Xardi–Vaynberg qonuni katta populyatsiyada panmiksiya, mutatsiyalar, tanlanish va migratsiya bo'lmaganda hamda barcha genotiplar bir xil hayotchanlikka ega bo'lganda bajariladi. Qon-qarindoshlar nikohi, migratsiya va tanlanish genotiplar chastotalari muvozanatini buzadi.",
    },
    {
      question: "Tibbiy genetikada dermatoglifik usulning ahamiyati shundaki, u:",
      correct: "Xromosoma kasalliklari diagnostikasida yordamchi usul hisoblanadi",
      wrong: [
        "Daun sindromi tashxisini uzil-kesil tasdiqlash imkonini beradi",
        "Kasallikning irsiylanish turini aniqlashda asosiy usul hisoblanadi",
        "Bepusht er-xotinlarni tekshirishda kariotiplashning o'rnini bosadi",
      ],
      explanation: "Dermatoglifika barmoqlar, kaftlar va oyoq tagidagi teri naqshlarini (yoylar, sirtmoqlar, gajaklar, triradiuslar, bukilish burmalari) o'rganadi; xarakterli o'zgarishlar, masalan, kaftning ko'ndalang burmasi sog'lom odamlarda ham uchraydi, shuning uchun usul faqat yordamchi hisoblanadi, xromosoma kasalligi tashxisi esa kariotiplash bilan tasdiqlanadi.",
    },
    {
      question: "Xromosoma mikromatritsa tahlili yordamida quyidagini aniqlab BO'LMAYDI:",
      correct: "Muvozanatlashgan translokatsiyalar",
      wrong: [
        "Xromosoma qismlarining mikrodeletsiyalari",
        "Xromosomalarning mikroduplikatsiyalari",
        "Autosomalar bo'yicha trisomiyalar",
      ],
      explanation: "Mikromatritsa tahlili butun genom bo'ylab genetik material miqdoridagi o'zgarishlarni (mikrodeletsiyalar, mikroduplikatsiyalar, aneuploidiyalar) aniqlaydi, ammo DNK miqdori o'zgarmaydigan muvozanatlashgan qayta tuzilishlarni — translokatsiyalar va inversiyalarni aniqlamaydi.",
    },
    {
      question: "Ekzom sekvenirlash quyidagi imkoniyatni beradi:",
      correct: "Barcha ekzonlarning nukleotidlar ketma-ketligini o'qish",
      wrong: [
        "Xromosomalarning muvozanatlashgan translokatsiyalari va inversiyalarini aniqlash",
        "Metafaza bosqichida xromosomalar soni va shaklini aniqlash",
        "Qon zardobidagi fermentlar faolligini o'lchash",
      ],
      explanation: "Ekzom — genlarning barcha kodlovchi qismlari majmui (genomning taxminan 1–2 foizi); uni sekvenirlash minglab genlarda nuqtali mutatsiyalar va kichik insersiyalar yoki deletsiyalarni bir vaqtda izlash imkonini beradi, bu ayniqsa tashxisi noaniq bo'lgan genetik geterogen kasalliklarda qimmatlidir.",
    },
    {
      question: "Somatik hujayralar gibridizatsiyasi usuli quyidagi maqsadda qo'llaniladi:",
      correct: "Odam xromosomalarida genlarni kartalash",
      wrong: [
        "Yangi tug'ilgan chaqaloqlarda xromosoma kasalliklarini tezkor diagnostika qilish",
        "Irsiyat va muhitning nisbiy rolini baholash",
        "Yangi tug'ilgan chaqaloqlarni modda almashinuvi kasalliklariga ommaviy skrining qilish",
      ],
      explanation: "Odam va kemiruvchilar hujayralarining qo'shilishidan olingan gibrid hujayralar asta-sekin odam xromosomalarini yo'qotadi; odamning muayyan oqsili mavjudligini saqlanib qolgan xromosomalar bilan solishtirib, uni kodlovchi gen qaysi xromosomada joylashgani aniqlanadi.",
    },

    // --- vaziyatli masalalar ---
    {
      situation: "Populyatsiyada autosom-retsessiv kasallikning yangi tug'ilgan chaqaloqlar orasidagi chastotasi 1 : 10 000 ni tashkil etadi. Populyatsiya Xardi–Vaynberg qonuni shartlariga javob beradi.",
      question: "Ushbu populyatsiyada mutant genning geterozigota tashuvchilari chastotasi taxminan:",
      correct: "1 : 50",
      wrong: [
        "1 : 100",
        "1 : 5000",
        "1 : 10 000",
      ],
      explanation: "q² = 1/10 000, bundan q = 0,01 va p = 1 − 0,01 = 0,99; geterozigotalar chastotasi 2pq = 2 × 0,99 × 0,01 ≈ 0,02, ya'ni taxminan 1 : 50. 1 : 100 qiymati — tashuvchilar chastotasi emas, balki retsessiv allel chastotasi q.",
    },
    {
      situation: "Populyatsiyada odamlarning 16 foizi Rh-manfiy qonga ega (dd genotipi). Rezus-mansublik D va d allellariga ega bitta gen bilan belgilanadi, populyatsiya esa Xardi–Vaynberg muvozanatida deb qabul qilingan.",
      question: "Ushbu populyatsiyada geterozigotalar (Dd) ulushi:",
      correct: "48%",
      wrong: [
        "36%",
        "84%",
        "24%",
      ],
      explanation: "q² = 0,16, bundan q = 0,4 va p = 0,6; geterozigotalar chastotasi 2pq = 2 × 0,6 × 0,4 = 0,48, ya'ni 48%. 36% (p²) — DD gomozigotalar ulushi, 84% esa barcha Rh-musbat odamlar (DD + Dd) ulushi.",
    },
    {
      situation: "Kasallikni o'rganishda 50 juft monozigot egizak tekshirildi: 40 juftda ikkala egizak ham kasal bo'lgan. 40 juft dizigot egizak orasida 8 juftda ikkalasi ham kasal bo'lgan.",
      question: "Xolsinger formulasi bo'yicha hisoblangan irsiylanish koeffitsiyenti (H) va muhit ta'siri ulushi (E):",
      correct: "H = 0,75; E = 0,25",
      wrong: [
        "H = 0,60; E = 0,40",
        "H = 0,25; E = 0,75",
        "H = 0,80; E = 0,20",
      ],
      explanation: "Monozigot egizaklar konkordantligi 40/50 = 80%, dizigot egizaklarniki 8/40 = 20%; H = (80 − 20) / (100 − 20) = 60/80 = 0,75, E = 1 − H = 0,25 — irsiyatning roli ustun. 0,60 qiymati konkordantliklarning oddiy ayirmasi xato olinganda hosil bo'ladi.",
    },
    {
      situation: "7 yoshli egizak o'g'il bolalar tashqi ko'rinishidan bir-biriga juda o'xshash. Tekshiruvda ulardan birida A (II), ikkinchisida B (III) qon guruhi aniqlandi.",
      question: "Bu egizaklarni qaysi turga kiritish kerak?",
      correct: "Dizigot egizaklar",
      wrong: [
        "Monozigot egizaklar",
        "Genlarning ekspressivligi turlicha bo'lgan monozigot egizaklar",
        "Bu ma'lumotlar bo'yicha egizaklar turini aniqlab bo'lmaydi",
      ],
      explanation: "Monozigot egizaklar bitta zigotadan rivojlanadi va bir xil genotipga ega bo'ladi, shuning uchun qon guruhi bo'yicha har doim mos keladi; qon guruhidagi farq tashqi o'xshashlikka qaramay dizigotlikni bir ma'noda ko'rsatadi.",
    },
    {
      situation: "Hamshira shajarani tahlil qilmoqda. III avlodda strelka bilan bo'yalgan kvadrat ko'rsatilgan. Uning II avloddagi ota-onasi bitta gorizontal nikoh chizig'i bilan birlashtirilgan: otasi — bo'yalmagan kvadrat, onasi — markazida nuqtasi bo'lgan bo'yalmagan doiracha. Proband bilan umumiy sibslar chizig'i orqali ikkita bo'yalmagan doiracha birlashtirilgan.",
      question: "Shajaraning bu qismini qanday to'g'ri o'qish kerak?",
      correct: "Proband — kasal erkak, onasi — tashuvchi, opa-singillari sog'lom",
      wrong: [
        "Proband — kasal ayol, onasi — tashuvchi, aka-ukalari sog'lom",
        "Proband — kasal erkak, onasi kasal, opa-singillari — tashuvchi",
        "Proband — sog'lom erkak, onasi vafot etgan, opa-singillari kasal",
      ],
      explanation: "Kvadrat erkakni, bo'yalgan belgi — kasalni, strelka — probandni bildiradi; markazida nuqtasi bo'lgan doiracha — X-xromosoma bilan birikkan retsessiv genning geterozigota tashuvchisi bo'lgan ayolni, bo'yalmagan doirachalar esa sog'lom ayollarni bildiradi. Vafot etganlar ustidan chizilgan belgi bilan belgilanadi.",
    },
    {
      situation: "Er-xotin tibbiy-genetik maslahatxonaga murojaat qildi: ayolda I trimestrda uch marta o'z-o'zidan homila tushgan. Unda ginekologik va endokrin patologiya istisno qilingan.",
      question: "Birinchi navbatda qaysi genetik tekshiruv ko'rsatilgan?",
      correct: "Er-xotin ikkalasining kariotipini tekshirish",
      wrong: [
        "Xotinda jinsiy xromatinni aniqlash",
        "Aminoatsidopatiyalarga biokimyoviy skrining",
        "Er-xotin ikkalasini dermatoglifik tahlil qilish",
      ],
      explanation: "Odatiy homila tushishi — er-xotin ikkalasini kariotiplashga ko'rsatma: ulardan birida muvozanatlashgan xromosoma qayta tuzilishi (masalan, translokatsiya) bo'lishi mumkin, uning oqibatida muvozanatlashmagan gametalar hosil bo'ladi va embrionlar nobud bo'ladi. Jinsiy xromatin faqat X-xromosomalar sonini aks ettiradi, dermatoglifika esa yordamchi usul.",
    },
    {
      situation: "Muolaja xonasi hamshirasiga bolaning sitogenetik tekshiruvi (kariotiplash) uchun qon olish topshirildi.",
      question: "Materialni qanday to'g'ri olish va tayyorlash kerak?",
      correct: "Vena qonini steril holda geparinli probirkaga olish, muzlatmaslik",
      wrong: [
        "Kapillyar qonni filtr qog'ozli test-blankka tomizib, havoda quritish",
        "Zardob olish uchun vena qonini ivish aktivatori bor probirkaga olish",
        "Vena qonini EDTA li probirkaga olib, muzlatish",
      ],
      explanation: "Kariotiplash uchun kultivatsiya qilinadigan tirik limfotsitlar kerak, shuning uchun qon steril holda geparinli probirkaga olinadi, muzlatilmaydi va laboratoriyaga tezda yetkaziladi. EDTA li probirkalar DNK ajratib olish uchun, test-blankda quritilgan qon esa biokimyoviy skrining uchun ishlatiladi.",
    },
    {
      situation: "1 yoshli bola psixomotor rivojlanishdan orqada qolmoqda, sochi va terisi och rangli, siydigidan «sichqon» hidi keladi. Shifokor aminokislotalar almashinuvining irsiy buzilishiga shubha qilmoqda.",
      question: "Taxminiy tashxisni qaysi usul tasdiqlash imkonini beradi?",
      correct: "Biokimyoviy — qonda fenilalanin darajasini aniqlash",
      wrong: [
        "Sitogenetik — qon limfotsitlari kariotipini tekshirish",
        "Dermatoglifik — kaft va barmoqlar teri naqshlarini tahlil qilish",
        "Sitogenetik — jinsiy xromatinni aniqlash",
      ],
      explanation: "Klinik manzara fenilketonuriyaga xos; biokimyoviy usullar bloklangan reaksiya substratining to'planishini aniqlaydi — fenilketonuriyada qonda fenilalanin darajasi keskin oshgan bo'ladi. Modda almashinuvining gen kasalliklarida kariotip va jinsiy xromatin o'zgarmaydi.",
    },
    {
      situation: "Yangi tug'ilgan chaqaloqda tug'ma yurak nuqsoni, gipokalsiyemiya, rentgenogrammada timus soyasining yo'qligi aniqlangan. Genetik shifokor 22q11.2 mikrodeletsiyasi sindromiga (Di Jorji sindromi) shubha qilmoqda. Standart kariotip — 46,XY, ko'rinadigan o'zgarishlarsiz.",
      question: "Tashxisni tasdiqlash uchun qaysi usulni qo'llash kerak?",
      correct: "22q11.2 sohasiga DNK-zond bilan FISH",
      wrong: [
        "Standart kariotiplashni takrorlash",
        "Jinsiy xromatinni aniqlash",
        "Tandem mass-spektrometriya",
      ],
      explanation: "22q11.2 mikrodeletsiyasi standart kariotiplashda ko'rish uchun juda kichik; FISHda fluoressent nishonlangan DNK-zond deletsiyali 22-xromosomada signal bermaydi. Tandem mass-spektrometriya modda almashinuvi kasalliklarini diagnostika qilishda qo'llaniladi.",
    },
    {
      situation: "Bolada mukovissidoz tasdiqlangan: molekulyar-genetik usul bilan CFTR genidagi F508del mutatsiyasi bo'yicha gomozigotalik aniqlangan. Uning 18 yoshli sog'lom opasi bu mutatsiyaning tashuvchisi ekanligini bilmoqchi.",
      question: "Uni tekshirish uchun qaysi usul eng maqsadga muvofiq?",
      correct: "Oilada ma'lum bo'lgan mutatsiyaga PZR-diagnostika",
      wrong: [
        "Butun genomni xromosoma mikromatritsa tahlili",
        "G-bo'yash bilan kariotipni tekshirish",
        "Bukkal epiteliyda jinsiy xromatinni aniqlash",
      ],
      explanation: "Agar oilada mutatsiya ma'lum bo'lsa, uning qarindoshlarda mavjudligini PZR usuli bilan tekshirish eng oson. Kariotiplash va mikromatritsa tahlili xromosomalar soni va tuzilishidagi o'zgarishlarni aniqlaydi, ammo F508del (uchta nukleotidning yo'qolishi) kabi nuqtali mutatsiyalar va kichik deletsiyalarni aniqlamaydi.",
    },

    // ===== Genetika: irsiy kasalliklar =====
    {
      question: "Multifaktorial (ko'p omilli) kasalliklarga kiradi:",
      correct: "Lab va tanglay yorig'i",
      wrong: [
        "Fenilketonuriya",
        "Shereshevskiy–Terner sindromi",
        "Gemofiliya A",
      ],
      explanation: "Lab va tanglay yorig'i ko'plab genlar va noqulay muhit omillarining o'zaro ta'sirida rivojlanadi va multifaktorial tug'ma rivojlanish nuqsonlariga kiradi. Fenilketonuriya va gemofiliya A — monogen kasalliklar, Shereshevskiy–Terner sindromi — xromosoma kasalligi.",
    },
    {
      question: "Yangi tug'ilgan chaqaloqda lab va tanglay yorig'i, polidaktiliya, mikroftalmiya va yurak nuqsonining birga uchrashi ko'proq quyidagi sindromga xos:",
      correct: "Patau",
      wrong: [
        "Edvards",
        "Daun",
        "Shereshevskiy–Terner",
      ],
      explanation: "Patau sindromi (trisomiya 13, kariotip 47,XX,+13 yoki 47,XY,+13) «lab va tanglay yorig'i, polidaktiliya, mikroftalmiya» triadasi va ichki a'zolarning og'ir nuqsonlari bilan namoyon bo'ladi. Edvards sindromi uchun barmoqlarning fleksor holati va ustma-ust kesishishi hamda «belanchak» oyoq panjalari xos.",
    },
    {
      question: "Daun sindromining translokatsion shakli oilada tibbiy-genetik prognoz uchun alohida ahamiyatga ega, chunki u:",
      correct: "Muvozanatlashgan translokatsiyaning sog'lom tashuvchisidan o'tishi mumkin",
      wrong: [
        "Aqliy zaifliksiz va ichki a'zolar rivojlanish nuqsonlarisiz kechadi",
        "Xromosomalarning ajralmasligi tufayli faqat 35 yoshdan katta onalarning bolalarida uchraydi",
        "21-xromosoma bo'yicha monosomiya bilan bog'liq, shuning uchun yengilroq kechadi",
      ],
      explanation: "Translokatsion shaklda 21-xromosomaning ortiqcha materiali boshqa akrotsentrik xromosomaga (ko'pincha 14- yoki 21-xromosomaga) birikkan bo'ladi; ko'pincha muvozanatlashgan translokatsiyani fenotipik jihatdan sog'lom ota yoki ona tashiydi va kasal bolaning qayta tug'ilish xavfi regulyar trisomiyaga qaraganda ancha yuqori bo'ladi. Klinik jihatdan bu shakl regulyar trisomiyadan farq qilmaydi va onaning yoshiga bog'liq emas.",
    },
    {
      question: "Shereshevskiy–Terner sindromining yetakchi klinik belgilari:",
      correct: "Past bo'y, bo'yinda qanotsimon burma, birlamchi amenoreya",
      wrong: [
        "Baland bo'y, ginekomastiya, moyaklarning kichikligi, bepushtlik",
        "Mikrotsefaliya, mushukning miyovlashiga o'xshash yig'i",
        "Araxnodaktiliya, ko'z gavharining chala chiqishi, baland bo'y",
      ],
      explanation: "Shereshevskiy–Terner sindromi (kariotip 45,X) qizlarda past bo'ylilik, bo'yinda qanotsimon burma, birlamchi amenoreya va bepushtlik bilan kechadigan gonadalar disgeneziyasi bilan namoyon bo'ladi. Ginekomastiya bilan birga baland bo'y Klaynfelter sindromiga, ko'z gavharining chala chiqishi bilan birga araxnodaktiliya esa Marfan sindromiga xos.",
    },
    {
      question: "«Mushuk chinqirig'i» sindromining sababi:",
      correct: "5-xromosoma qisqa yelkasining deletsiyasi",
      wrong: [
        "4-xromosoma qisqa yelkasining deletsiyasi",
        "5-xromosoma bo'yicha trisomiya",
        "15-xromosoma uzun yelkasining deletsiyasi",
      ],
      explanation: "«Mushuk chinqirig'i» sindromi 5p qisman monosomiyasi (masalan, 46,XY,del(5p)) bilan bog'liq: yangi tug'ilgan chaqaloqda miyovlashga o'xshash baland ovozli yig'i, mikrotsefaliya, oysimon yuz, keyinchalik — aqliy zaiflik kuzatiladi. 4-xromosoma qisqa yelkasining deletsiyasi boshqa sindromni — Volf–Xirshxorn sindromini keltirib chiqaradi.",
    },
    {
      question: "Klassik fenilketonuriya quyidagi ferment yetishmovchiligi bilan bog'liq:",
      correct: "Fenilalaningidroksilaza",
      wrong: [
        "Galaktoza-1-fosfaturidiltransferaza",
        "21-gidroksilaza",
        "Tirozinaza",
      ],
      explanation: "Fenilalaningidroksilaza fenilalaninni tirozinga aylantiradi; u yetishmaganda fenilalanin va uning hosilalari to'planib, rivojlanayotgan bosh miyani shikastlaydi. 21-gidroksilaza yetishmovchiligi — adrenogenital sindrom, tirozinaza yetishmovchiligi esa albinizm sababi.",
    },
    {
      question: "Galaktozemiyada bolaning ovqatlanishidan quyidagilarni chiqarib tashlash zarur:",
      correct: "Ko'krak suti va tarkibida laktoza bo'lgan sut aralashmalari",
      wrong: [
        "Go'sht, baliq va fenilalaninga boy boshqa mahsulotlar",
        "Tarkibida glyuten bo'lgan bug'doy, javdar, arpadan tayyorlangan non va bo'tqalar",
        "Tarkibida fruktoza va saxaroza bo'lgan mevalar, rezavorlar va sharbatlar",
      ],
      explanation: "Laktoza glyukoza va galaktozaga parchalanadi, shuning uchun galaktozemiyada hayotning birinchi kunlaridanoq ko'krak suti va sut aralashmalari laktoza va galaktozasiz maxsus aralashmalar (masalan, soya oqsili izolyati asosidagi aralashmalar) bilan almashtiriladi, sut va sut mahsulotlari umrbod chiqarib tashlanadi. Fenilalaninni cheklash — fenilketonuriyada, glyutenni chiqarib tashlash esa seliakiyada qo'llaniladigan parhez tamoyili.",
    },
    {
      question: "Mukovissidozli bolaga ferment preparatlarini (minimikrosferali pankreatin) quyidagicha qabul qilish buyuriladi:",
      correct: "Har bir ovqatlanish vaqtida, shu jumladan yengil tamaddilarda ham",
      wrong: [
        "Sutkada bir marta ertalab nahorga",
        "Faqat bronx-o'pka jarayoni qo'zg'algan davrda",
        "Chorakda bir marta 10–14 kunlik kurslar bilan",
      ],
      explanation: "Oshqozon osti bezi yetishmovchiligida fermentlar yog' saqlovchi har bir ovqat bilan (ovqatning boshida) doimiy qabul qilinadi; dozani shifokor najas xususiyati va tana vaznining ortishiga qarab tanlaydi. Nahorga yoki kurslar bilan qabul qilish ovqatning hazm bo'lishini ta'minlamaydi.",
    },
    {
      question: "«Irsiy kasallik — asosiy davolash usuli» juftliklaridan qaysi biri to'g'ri?",
      correct: "Irsiy gemoxromatoz — muntazam qon chiqarish",
      wrong: [
        "Galaktozemiya — fenilalanin cheklangan parhez",
        "Katta β-talassemiya — temir preparatlarini uzoq muddat qabul qilish",
        "Gemofiliya A — K vitaminini mushak ichiga yuborish",
      ],
      explanation: "Irsiy gemoxromatozda (autosom-retsessiv, HFE geni) temirning ortiqcha so'rilishi uning jigar, oshqozon osti bezi va yurakda to'planishiga olib keladi, shuning uchun ortiqcha temir qon chiqarish yo'li bilan chiqariladi. β-talassemiyada organizmda temir ortiqcha to'planganligi sababli temir preparatlari buyurilmaydi, gemofiliya A da esa vena ichiga VIII omil konsentrati yuboriladi.",
    },
    {
      question: "Gemofiliyali bemorga qarshi ko'rsatma hisoblanadi:",
      correct: "Dori preparatlarini mushak ichiga yuborish",
      wrong: [
        "Ivish omili konsentratini vena ichiga yuborish",
        "Qon ketishi bo'lmagan davrda suzish va davolash jismoniy tarbiyasi",
        "Og'riqni qoldirish uchun paratsetamol qabul qilish",
      ],
      explanation: "Gemofiliya bilan og'rigan bemorlarda mushak ichiga in'eksiyalar keng mushaklararo gematomalarni keltirib chiqaradi, shuning uchun preparatlar vena ichiga, teri ostiga yoki ichish uchun beriladi; atsetilsalitsil kislotasi ham qarshi ko'rsatilgan. Suzish va davolash jismoniy tarbiyasi esa, aksincha, mushaklarni mustahkamlash va bo'g'imlarni himoya qilish uchun tavsiya etiladi.",
    },
    {
      question: "3–5 yoshli o'g'il bolada Dyushenn miodistrofiyasining xarakterli erta belgisi:",
      correct: "Poldan turishda qo'llari bilan o'z oyoqlari bo'ylab «tirmashib» ko'tarilish",
      wrong: [
        "Oyoq-qo'llarning ixtiyorsiz keng ko'lamli harakatlari va grimasalar",
        "Tug'ilgandan oyoq-qo'llar proksimal qismlarining kaltaligi",
        "Bo'g'imlarning haddan tashqari harakatchanligi va bo'y o'sishida tengdoshlaridan o'zib ketish",
      ],
      explanation: "Dyushenn miodistrofiyasida (X-birikkan retsessiv irsiylanish, distrofin oqsilining yo'qligi) chanoq kamari va son mushaklari erta zaiflashadi: Govers usuli, «o'rdaksimon» yurish, boldir mushaklarining psevdogipertrofiyasi paydo bo'ladi. Xoreik harakatlar Gentington xoreyasiga, oyoq-qo'llar proksimal qismlarining kaltaligi esa axondroplaziyaga xos.",
    },
    {
      question: "Bemorning qarindoshlari uchun multifaktorial kasallik xavfi haqidagi qaysi fikr to'g'ri?",
      correct: "Oilada bir nechta kasal qarindosh bo'lsa, xavf yuqoriroq",
      wrong: [
        "Xavf har qanday darajadagi qarindoshlar uchun bir xil",
        "Ota-onasi sog'lom bo'lganda sibslar uchun xavf har doim 25% ni tashkil etadi",
        "Xavf probanddagi kasallikning og'irligiga bog'liq emas",
      ],
      explanation: "Multifaktorial kasalliklar uchun bo'sag'a modeli xos: qarindoshlar uchun xavf oiladagi kasallar soni, probanddagi kasallikning og'irligi va qarindoshlik yaqinligi ortishi bilan oshadi, shuningdek, kamroq zararlanadigan jins vakili kasal bo'lsa, xavf yuqoriroq bo'ladi. Ota-onasi sog'lom bo'lganda sibslar uchun 25% xavf autosom-retsessiv kasalliklarga xos.",
    },
    {
      question: "Bitta kasal onaning bolalarida mitoxondrial kasallikning turlicha og'irlikda kechishi birinchi navbatda quyidagi bilan izohlanadi:",
      correct: "Geteroplazmiya — hujayralarda mutant mtDNK ulushining turlicha bo'lishi",
      wrong: [
        "Mutant allelning to'liqsiz dominantligi",
        "Mitoxondrial DNK molekulalari o'rtasidagi krossingover",
        "X-xromosomalardan birining inaktivatsiyasi",
      ],
      explanation: "Hujayrada mitoxondrial DNKning ko'plab nusxalari bo'ladi va bo'linishlarda normal va mutant molekulalar tasodifiy taqsimlanadi, shuning uchun bitta onaning bolalari mutant mtDNKning turlicha ulushini oladi va turlicha og'irlikda kasallanadi. To'liqsiz dominantlik va X-xromosoma inaktivatsiyasi yadro genlariga taalluqli.",
    },
    {
      question: "Genomik imprinting kasalliklariga quyidagi sindromlar kiradi:",
      correct: "Prader–Villi va Angelman",
      wrong: [
        "Patau va Edvards",
        "Marfan va Elers–Danlos",
        "Klaynfelter va Shereshevskiy–Terner",
      ],
      explanation: "Ikkala sindrom ham 15q11–q13 sohasi bilan bog'liq: Prader–Villi sindromi bu sohaning otadan o'tgan nusxasi funksiyasi yo'qolganda (otadan o'tgan xromosomada deletsiya yoki onalik uniparental disomiyasi), Angelman sindromi esa onadan o'tgan nusxasi funksiyasi yo'qolganda rivojlanadi. Patau va Edvards sindromlari — autosomalar trisomiyalari, Marfan va Elers–Danlos sindromlari — biriktiruvchi to'qimaning monogen kasalliklari.",
    },

    // --- vaziyatli masalalar ---
    {
      situation: "41 yoshli onadan tug'ilgan qiz chaqaloq. Ko'rikda: yuzi va ensasi yassi, ko'z kesimi qiyiq, epikant, qanshari yassi, bo'yni kalta, kaftda ko'ndalang burma, mushak gipotoniyasi yaqqol ifodalangan; yurakda shovqin eshitiladi.",
      question: "Bolada qaysi kariotip bo'lishi ehtimoli yuqori?",
      correct: "47,XX,+21",
      wrong: [
        "47,XX,+18",
        "47,XX,+13",
        "47,XXX",
      ],
      explanation: "Yoshi katta onaning bolasida yassi yuz, mongoloid ko'z kesimi, epikant, kaftning ko'ndalang burmasi, gipotoniya va yurak nuqsoni Daun sindromiga xos. Ko'p hollarda (taxminan 95%) bu regulyar trisomiya 21 bo'ladi — qiz bolada kariotip 47,XX,+21.",
    },
    {
      situation: "Hamshira Daun sindromi (regulyar trisomiya 21) bo'lgan 3 oylik bolani patronaj qilmoqda. Ona xavotirda: bola lanj, mushak tonusi pasaygan, boshini yaxshi tutmaydi. Exokardiografiya ma'lumotlariga ko'ra yurak nuqsonlari yo'q, bola pediatr va nevrolog nazoratida.",
      question: "Hamshiraning qaysi tavsiyasi to'g'ri?",
      correct: "Massaj, davolash gimnastikasi, mutaxassislar bilan erta mashg'ulotlar",
      wrong: [
        "Xromosoma kasalligi borligi sababli profilaktik emlashlardan voz kechish",
        "Jarohatlarning oldini olish uchun 3 yoshgacha harakat faolligini cheklash",
        "Tarkibida fenilalanin bo'lgan mahsulotlarni chiqarib tashlagan parhez",
      ],
      explanation: "Daun sindromli bolalarga erta abilitatsiya ko'rsatilgan: gipotoniyada massaj va davolash gimnastikasi, erta pedagogik yordam (defektolog, logoped), kalendar bo'yicha emlash, eshitish, ko'rish va qalqonsimon bez funksiyasini muntazam nazorat qilish. Harakatni cheklash va emlashlardan voz kechish zararli, fenilalaninsiz parhez esa fenilketonuriyada kerak.",
    },
    {
      situation: "Muddatiga yetgan homiladorlikdan tug'ilgan o'g'il chaqaloq, tana vazni 2100 g. Dolixotsefaliya, mikrognatiya, past joylashgan deformatsiyalangan quloq supralari. Qo'l panjalari mushtga siqilgan, II barmoq III barmoqni, V barmoq esa IV barmoqni yopib turadi; oyoq panjalari «belanchak» shaklida. Yurak nuqsoni aniqlangan.",
      question: "Qaysi kariotip bo'lishi ehtimoli yuqori?",
      correct: "47,XY,+18",
      wrong: [
        "47,XY,+13",
        "47,XY,+21",
        "46,XY,del(5p)",
      ],
      explanation: "Barmoqlarning fleksor holati va ustma-ust kesishishi, «belanchak» oyoq panjalari, dolixotsefaliya, mikrognatiya va tana vaznining kamligi Edvards sindromiga (trisomiya 18) xos; ko'pchilik bolalar hayotining birinchi yilida nobud bo'ladi. Trisomiya 13 uchun lab va tanglay yorig'i, polidaktiliya va mikroftalmiya xos.",
    },
    {
      situation: "26 yoshli erkak nikohdagi bepushtlik sababli murojaat qildi. Bo'yi 188 sm, oyoq-qo'llari uzun, tana proporsiyalari evnuxoid, yuzida tuklar siyrak, ginekomastiya bor. Moyaklari kichik, spermogrammada — azoospermiya.",
      question: "Qaysi kariotip bo'lishi ehtimoli yuqori?",
      correct: "47,XXY",
      wrong: [
        "47,XYY",
        "45,X",
        "47,XXX",
      ],
      explanation: "Evnuxoid proporsiyali baland bo'y, ginekomastiya, kichik moyaklar va azoospermiya Klaynfelter sindromiga (47,XXY) xos. 47,XYY kariotipli erkaklar ham baland bo'yli, lekin odatda fertil bo'ladi va ularda ginekomastiya kuzatilmaydi, 45,X va 47,XXX kariotiplari esa ayollarda uchraydi.",
    },
    {
      situation: "Muddatida tug'ilgan bolada neonatal skrining va tasdiqlovchi tekshiruv natijalariga ko'ra klassik fenilketonuriya aniqlangan. Bola 3 haftalik, ko'krak suti bilan boqilmoqda. Ona hamshiradan endi bolani qanday ovqatlantirish kerakligini so'ramoqda.",
      question: "Qaysi javob parhez bilan davolash tamoyillariga mos keladi?",
      correct: "Fenilalaninsiz davolovchi aralashma va shifokor belgilagan miqdordagi ko'krak suti",
      wrong: [
        "Hech qanday cheklovsiz talab bo'yicha emizish",
        "Sigir suti asosidagi oddiy moslashtirilgan sut aralashmasiga o'tkazish",
        "Xavfsiz oqsil manbai sifatida soya aralashmasiga o'tkazish",
      ],
      explanation: "Fenilketonuriyada ovqatlanishning asosini fenilalaninsiz maxsus mahsulot tashkil etadi, tabiiy oqsil (ko'krak suti, keyinchalik — hisob-kitob bo'yicha mahsulotlar) esa shifokor qondagi fenilalanin darajasiga qarab belgilaydigan miqdorda beriladi. Har qanday oddiy aralashmaning, shu jumladan soya aralashmasining oqsili tarkibida fenilalanin bor.",
    },
    {
      situation: "2 yoshli bola tug'ilganidan beri tez-tez bronxit va pnevmoniya bilan kasallanadi, yo'tali qovushqoq, qiyin ajraladigan balg'am bilan kechadi. Najasi ko'p, yog'li, badbo'y, qiyin yuviladi; ishtahasi yaxshi bo'lishiga qaramay, bola tana vazni bo'yicha orqada qolmoqda. Ona bolani o'pganda terisining sho'r ta'mini sezadi. Chaqaloqlik davrida mekoniyli ileus bo'lgan.",
      question: "Birinchi navbatda qaysi kasallik haqida o'ylash kerak?",
      correct: "Mukovissidoz",
      wrong: [
        "Seliakiya",
        "Bronxial astma",
        "Galaktozemiya",
      ],
      explanation: "Qovushqoq balg'amli surunkali bronx-o'pka jarayoni, steatoreya, tana vazni bo'yicha orqada qolish, terining sho'r ta'mi va mekoniyli ileusning birga kelishi mukovissidozning aralash shakliga (autosom-retsessiv kasallik, CFTR geni) xos. Seliakiyada o'pka zararlanishi va sho'r ter bo'lmaydi.",
    },
    {
      situation: "Gemofiliya A bilan og'rigan 7 yoshli o'g'il bola tanaffusda yiqilib tushdi. Bir soatdan keyin o'ng tizza bo'g'imi kattalashgan, ushlab ko'rilganda issiq, keskin og'riqli; bola oyog'ini yarim bukilgan holatda tutib turibdi.",
      question: "Maktab hamshirasining qaysi harakati to'g'ri?",
      correct: "Tinchlik, immobilizatsiya, sovuq, VIII omilni yuborish uchun shifokorni zudlik bilan chaqirish",
      wrong: [
        "Isituvchi kompress qo'yish va bo'g'imdagi harakatlarni faol rivojlantirishni boshlash",
        "Analgetikni mushak ichiga yuborish va bolani oyog'i ko'tarilgan holatda yotqizish",
        "Og'riqni qoldirish uchun atsetilsalitsil kislotasi berish va bolani o'ringa yotqizish",
      ],
      explanation: "Gemartrozda asosiysi — shifokor ko'rsatmasi bilan VIII omil konsentratini imkon qadar erta yuborish, ungacha esa tinchlik, oyoq-qo'l immobilizatsiyasi va sovuqni ta'minlash. Issiqlik va bo'g'imdagi harakatlar qon quyilishini kuchaytiradi, mushak ichiga in'eksiyalar gematomalarni keltirib chiqaradi, atsetilsalitsil kislotasi trombotsitlar funksiyasini buzadi.",
    },
    {
      situation: "43 yoshli erkak: ikki yil davomida qo'llarning ixtiyorsiz keng ko'lamli harakatlari, grimasalar, asabiylik, xotira va tanqidiy baholash qobiliyatining pasayishi kuchayib bormoqda. Uning otasi 40 yoshdan keyin boshlangan shunga o'xshash kasallik bilan og'rigan; ota tomonidan buvisida ham «zo'raki harakatlar» bo'lgan.",
      question: "Qaysi kasallik ehtimoli yuqori?",
      correct: "Gentington xoreyasi",
      wrong: [
        "Dyushenn miodistrofiyasi",
        "Spinal mushak atrofiyasi",
        "I tip neyrofibromatoz",
      ],
      explanation: "Gentington xoreyasi — autosom-dominant kasallik (HTT genida CAG-takrorlar ekspansiyasi), ko'pincha 35–50 yoshda boshlanadi: xoreik giperkinez, ruhiy buzilishlar, avj olib boruvchi demensiya kuzatiladi; kasallik har bir avlodda uchraydi. Dyushenn miodistrofiyasi va spinal mushak atrofiyasi giperkinezlarsiz mushak zaifligi bilan namoyon bo'ladi va bolalikda boshlanadi.",
    },
    {
      situation: "Bo'yi normal bo'lgan sog'lom ota-onadan tug'ilgan chaqaloqda oyoq-qo'llarning asosan yelka va son hisobiga kaltaligi, peshonasi bo'rtib chiqqan katta bosh, botiq qanshar kuzatiladi; gavda uzunligi normal. Qolgan jihatlardan bola faol, yaxshi emadi.",
      question: "Qaysi tashxis ehtimoli yuqori?",
      correct: "Axondroplaziya",
      wrong: [
        "Marfan sindromi",
        "Shereshevskiy–Terner sindromi",
        "Gipofizar nanizm",
      ],
      explanation: "Gavda uzunligi normal bo'lganda oyoq-qo'llar proksimal qismlarining kaltaligi, makrotsefaliya va bo'rtib chiqqan peshona axondroplaziyaga xos — bu autosom-dominant kasallik (FGFR3 geni); sog'lom ota-onada u ko'pincha yangi mutatsiya natijasida yuzaga keladi, intellekt odatda saqlangan bo'ladi. Gipofizar nanizmda tug'ilgandagi tana uzunligi normal, bo'y o'sishidagi orqada qolish esa proporsional bo'ladi.",
    },
    {
      situation: "Yangi tug'ilgan qiz chaqaloq: tashqi jinsiy a'zolari oraliq tipda shakllangan — klitor kattalashgan, katta jinsiy lablar qisman bitishgan. Hayotining 2-haftasida qusish, ovqatdan bosh tortish, tana vaznining tez kamayishi, suvsizlanish belgilari paydo bo'ldi; qonda natriy pasaygan, kaliy oshgan.",
      question: "Qaysi kasallik ehtimoli yuqori?",
      correct: "Adrenogenital sindrom",
      wrong: [
        "Tug'ma pilorostenoz",
        "Galaktozemiya",
        "Mukovissidoz (kistoz fibroz)",
      ],
      explanation: "Qiz bolada tashqi jinsiy a'zolarning virilizatsiyasi va hayotning 2–3-haftasida tuz yo'qotish krizi (qusish, suvsizlanish, giponatriyemiya, giperkaliyemiya) adrenogenital sindromning tuz yo'qotuvchi shakliga (21-gidroksilaza yetishmovchiligi, autosom-retsessiv irsiylanish) xos; bu holat hayot uchun xavfli va shoshilinch gormonal terapiyani talab qiladi. Pilorostenozda qonda kaliy pasaygan bo'ladi, jinsiy a'zolar esa o'zgarmagan.",
    },
    {
      situation: "13 yoshli o'g'il bola aqliy zaiflik va giperaktivlik sababli kuzatuvda. Yuzi cho'zinchoq, quloqlari katta, dingaygan, iyagi oldinga chiqqan, bo'g'imlari haddan tashqari harakatchan, moyaklari kattalashgan. Tog'asida (onasining aka-ukasida) ham shunga o'xshash buzilishlar bor.",
      question: "Qaysi kasallik ehtimoli yuqori?",
      correct: "Mo'rt X-xromosoma sindromi",
      wrong: [
        "Klaynfelter sindromi",
        "Y-xromosoma bo'yicha disomiya sindromi",
        "Marfan sindromi",
      ],
      explanation: "Aqliy zaiflikning cho'zinchoq yuz, katta quloqlar va makroorxidizm bilan birga kelishi, shuningdek, ona tomonidagi erkak qarindoshlarning kasallanishi mo'rt X-xromosoma sindromiga (FMR1 genida CGG-takrorlar ekspansiyasi) xos. Klaynfelter sindromida esa, aksincha, moyaklar kichraygan bo'ladi.",
    },

    // ===== Genetika: tibbiy-genetik maslahat va profilaktika =====
    {
      question: "Irsiy patologiyaning birlamchi profilaktikasiga quyidagi tadbir kiradi:",
      correct: "Er-xotinga homilador bo'lishdan oldin tibbiy-genetik maslahat berish",
      wrong: [
        "Skriningda fenilketonuriya aniqlangan bolani parhez bilan davolash",
        "Daun sindromli bolani reabilitatsiya qilish",
        "Tug'ma yurak nuqsonini jarrohlik yo'li bilan tuzatish",
      ],
      explanation: "Birlamchi profilaktika kasal bola homilasi paydo bo'lishining oldini olishga qaratilgan: farzand ko'rishni genetik xavfni hisobga olgan holda rejalashtirish, homiladorlikdan oldin TGM, mutagenlardan himoyalanish. Kasal bo'lib tug'ilgan bolani davolash, nuqsonini tuzatish va reabilitatsiya qilish birlamchi profilaktikaga kirmaydi.",
    },
    {
      question: "Tibbiy-genetik maslahatning asosiy vazifasi:",
      correct: "Genetik xavfni aniqlash va oilaga qaror qabul qilishda yordam berish",
      wrong: [
        "Farzand ko'rish haqidagi qarorni er-xotin o'rniga qabul qilish",
        "Irsiy kasalliklari bor shaxslarga nikohdan o'tishni taqiqlash",
        "Aniqlangan irsiy kasallikni davolash",
      ],
      explanation: "TGMning maqsadi — nasl salomatligi prognozini (genetik xavfni) aniqlash, uni oilaga tushuntirish va oilaga farzand ko'rish haqida mustaqil qaror qabul qilishda yordam berish. Maslahatchi er-xotin o'rniga qaror qabul qilishga yoki nikohni taqiqlashga haqli emas.",
    },
    {
      question: "Er-xotinni tibbiy-genetik maslahatga yo'naltirish uchun ko'rsatma bo'lib quyidagi holat hisoblanadi:",
      correct: "Oilada tug'ma rivojlanish nuqsoni bor bola tug'ilishi",
      wrong: [
        "25 yoshli sog'lom ayolning birinchi homiladorligi",
        "Homiladorlarning yengil darajadagi erta toksikozi",
        "Er-xotin ikkalasining qon guruhi bir xil bo'lishi",
      ],
      explanation: "TGMga ko'rsatmalar: bolada yoki qarindoshda irsiy kasallik yoki tug'ma nuqson, qarindoshlar o'rtasidagi nikoh, odatiy homila tushishi, bepushtlik, onaning yoshi, mutagen va teratogenlar ta'siri. Sog'lom yosh ayolning birinchi homiladorligi, yengil toksikoz va qon guruhlarining mos kelishi ko'rsatma hisoblanmaydi.",
    },
    {
      question: "Tibbiy-genetik maslahatning birinchi bosqichi:",
      correct: "Oiladagi kasallik tashxisini aniqlashtirish",
      wrong: [
        "Bo'lajak nasl uchun genetik xavfni hisoblash",
        "Oilaga xulosa va prognozni tushuntirish",
        "Oila tomonidan tavsiyalar bajarilishini nazorat qilish",
      ],
      explanation: "Maslahat tashxisni aniqlashtirishdan (klinik-genealogik tahlil, laboratoriya tekshiruvlari) boshlanadi: aniq tashxissiz irsiylanish turini aniqlab, xavfni hisoblab bo'lmaydi. So'ng xavf baholanadi, shundan keyin xulosa tuziladi va oilaga tushuntiriladi.",
    },
    {
      question: "Tibbiy-genetik maslahatdagi nodirektivlik tamoyili quyidagini anglatadi:",
      correct: "Farzand ko'rish haqidagi qarorni oila mustaqil qabul qiladi",
      wrong: [
        "Maslahatchi oila uchun keyingi taktikani o'zi tanlaydi",
        "Maslahat faqat shifokor yo'llanmasi bilan o'tkaziladi",
        "Tekshiruv natijalari barcha qarindoshlarga ma'lum qilinadi",
      ],
      explanation: "Maslahatchi xavfni va barcha mumkin bo'lgan harakat variantlarini tushuntiradi, lekin o'z fikrini majburlamaydi: yakuniy qarorni oilaning o'zi qabul qiladi. Natijalarni bemorning roziligisiz qarindoshlarga ma'lum qilish konfidensiallik tamoyilini buzadi.",
    },
    {
      question: "Multifaktorial kasalliklarda (masalan, lab va tanglay kemtigida) takroriy xavf quyidagicha baholanadi:",
      correct: "Empirik xavf jadvallari bo'yicha",
      wrong: [
        "Monogen kasalliklardagi kabi Mendel qonunlari bo'yicha",
        "Probandning kariotipi bo'yicha",
        "Xardi–Vaynberg formulasi bo'yicha",
      ],
      explanation: "Multifaktorial kasalliklarda mendel tipidagi irsiylanish yo'q, shuning uchun xavf empirik yo'l bilan — ko'p sonli oilalarni kuzatish asosida tuzilgan jadvallar bo'yicha baholanadi. Mendel qonunlari bo'yicha nazariy hisoblash irsiylanish turi ma'lum bo'lgan monogen kasalliklarda qo'llaniladi.",
    },
    {
      question: "Noinvaziv prenatal test (NIPT) quyidagini tekshirishga asoslangan:",
      correct: "Ona qonidagi homilaning hujayradan tashqari DNKsi",
      wrong: [
        "Punksiya yo'li bilan olingan homila oldi suvlari hujayralari",
        "Biopsiyada olingan xorion vorsinkalari",
        "Kordotsentezda olingan kindik tizimchasi qoni",
      ],
      explanation: "NIPT uchun homilador ayolning vena qoni olinadi va unda aylanib yuruvchi hujayradan tashqari DNK tekshiriladi; bu DNK asosan yo'ldosh (trofoblast) hujayralaridan kelib chiqqan. Shuning uchun test homila uchun xavfsiz, ammo skrining testi bo'lib qoladi va musbat natijada tasdiqlashni talab qiladi.",
    },
    {
      question: "Homiladorlik muddati bo'yicha eng erta qo'llaniladigan invaziv prenatal diagnostika usuli:",
      correct: "Xorion vorsinkalari biopsiyasi",
      wrong: [
        "Amniotsentez",
        "Kordotsentez",
        "Fetoskopiyada homila to'qimalari biopsiyasi",
      ],
      explanation: "Xorion vorsinkalari biopsiyasi I trimestrda (odatda 10–11 haftadan), amniotsentez — II trimestrda (15–16 haftadan), kordotsentez va homila to'qimalari biopsiyasi esa undan ham kechroq bajariladi. Erta muddat oilaga natijani ertaroq olish imkonini beradi.",
    },
    {
      question: "Invaziv prenatal diagnostikaning eng muhim ehtimoliy asorati:",
      correct: "Homiladorlikning o'z-o'zidan uzilishi",
      wrong: [
        "Homilada xromosoma kasalligi paydo bo'lishi",
        "Homilada yurak nuqsoni shakllanishi",
        "Homila hujayralarida yangi mutatsiyalar paydo bo'lishi",
      ],
      explanation: "Invaziv muolajalarning asosiy xavfi — homila tushishi; shuningdek, homila oldi suvlarining sizib chiqishi, qon ketish, infeksiyalanish va rezus-sensibilizatsiya ham bo'lishi mumkin. Punksiya homilada xromosoma kasalliklari, rivojlanish nuqsonlari yoki mutatsiyalarni keltirib chiqarmaydi.",
    },
    {
      question: "Preimplantatsion genetik testlash (PGT) — bu:",
      correct: "EKU orqali olingan embrion hujayralarini bachadonga ko'chirishdan oldin tekshirish",
      wrong: [
        "Homilador ayol qonidagi homilaning hujayradan tashqari DNKsini tekshirish",
        "Amniotsentezda olingan homila hujayralarini tekshirish",
        "Neonatal skrining uchun olingan yangi tug'ilgan chaqaloq qonini tekshirish",
      ],
      explanation: "PGTda EKU usulida olingan embriondan bitta yoki bir nechta hujayra olinadi va ular bachadon bo'shlig'iga ko'chirishdan oldin tekshiriladi; patologiya aniqlanmagan embrion ko'chiriladi. Bu genetik xavfi yuqori bo'lgan oilaga prenatal diagnostika natijalariga ko'ra homiladorlikni to'xtatishdan qochish imkonini beradi.",
    },
    {
      question: "Neonatal skriningning asosiy maqsadi:",
      correct: "Kasallikni simptomlar paydo bo'lgunga qadar aniqlash",
      wrong: [
        "Har bir yangi tug'ilgan chaqaloqning kariotipini aniqlash",
        "Bolaning barcha irsiy kasalliklarini aniqlash",
        "Ota-onada mutatsiya tashuvchanligini aniqlash",
      ],
      explanation: "Neonatal skrining — yangi tug'ilgan chaqaloqlarni simptomlar paydo bo'lgunga qadar boshlangan davolash (masalan, fenilketonuriyada parhez bilan davolash, tug'ma gipotireozda o'rnini bosuvchi gormonal terapiya) og'ir oqibatlarning oldini oladigan kasalliklarga ommaviy tekshirish. Dastur barcha irsiy kasalliklarni emas, balki cheklangan kasalliklar ro'yxatini qamrab oladi.",
    },
    {
      question: "Ona yoshi ortishi bilan birinchi navbatda quyidagi kasalliklarga chalingan bola tug'ilish xavfi ortadi:",
      correct: "Xromosoma kasalliklari (trisomiyalar)",
      wrong: [
        "Autosom-retsessiv modda almashinuvi kasalliklari",
        "X-xromosomaga birikkan retsessiv kasalliklar",
        "Mitoxondrial kasalliklar",
      ],
      explanation: "Ayol yoshi ortishi bilan tuxum hujayralarning yetilishida meyozda xromosomalarning ajralmaslik chastotasi ortadi, shuning uchun trisomiyalar (Daun, Edvards, Patau sindromlari) xavfi oshadi. Monogen kasalliklar xavfi ona yoshiga deyarli bog'liq emas.",
    },
    {
      question: "Tibbiy-genetik maslahatdagi konfidensiallik tamoyili quyidagini anglatadi:",
      correct: "Ma'lumotlar bemorning roziligisiz uchinchi shaxslarga berilmaydi",
      wrong: [
        "Tekshiruv natijalari avtomatik ravishda barcha qarindoshlarga ma'lum qilinadi",
        "Bemorga o'z tekshiruvining natijalari aytilmaydi",
        "Ma'lumotlar kasbga yaroqlilikni baholash uchun ish beruvchiga beriladi",
      ],
      explanation: "Genetik ma'lumot shifokorlik sirini tashkil etadi: u qarindoshlarga, ish beruvchiga va boshqa shaxslarga faqat bemorning roziligi bilan ma'lum qilinadi (qonunda bevosita nazarda tutilgan holatlar bundan mustasno). Bemorning o'zi o'z tekshiruvi natijalari haqida ma'lumot olish huquqiga ega.",
    },
    {
      question: "G6FD fermentining irsiy yetishmovchiligi bo'lgan odamlarda ayrim dorilarni (masalan, primaxin, sulfanilamidlarni) qabul qilish quyidagini keltirib chiqarishi mumkin:",
      correct: "Eritrotsitlarning o'tkir gemolizi",
      wrong: [
        "Xavfli gipertermiya",
        "Miorelaksantlardan keyin uzoq davom etadigan apnoe",
        "Gipoglikemik koma",
      ],
      explanation: "G6FD eritrotsitlarni oksidlovchi shikastlanishdan himoya qiladi; uning yetishmovchiligida oksidlovchilar (primaxin, sulfanilamidlar, nitrofuranlar, bob (Vicia faba)) sariqlik va to'q rangli siydik bilan kechadigan o'tkir gemolizni keltirib chiqaradi. Xavfli gipertermiya va uzoq davom etadigan apnoe — narkoz bilan bog'liq boshqa farmakogenetik reaksiyalar.",
    },
    {
      question: "Ayollar maslahatxonasi akusherkasining irsiy patologiya profilaktikasidagi roli birinchi navbatda quyidagidan iborat:",
      correct: "Xavf guruhidagi ayollarni aniqlash va ularni TGMga yo'naltirish",
      wrong: [
        "Oila uchun genetik xavfni mustaqil hisoblash",
        "Xavf guruhidagi homiladorlarda amniotsentez bajarish",
        "Homiladorlikni to'xtatish haqida qaror qabul qilish",
      ],
      explanation: "Akusherka anamnez (oilaviy, akusherlik, kasbiy) yig'adi, xavf guruhidagi ayollar va oilalarni aniqlaydi, tekshiruvlarning ahamiyatini tushuntiradi va ularni genetik shifokorga yo'naltiradi. Xavfni genetik shifokor hisoblaydi, invaziv muolajalarni shifokor bajaradi, homiladorlik haqidagi qarorni esa ayolning o'zi qabul qiladi.",
    },

    // --- vaziyatli masalalar ---
    {
      situation: "Tibbiy-genetik maslahatxonaga 30 va 32 yoshli er-xotin murojaat qildi. Ularning birinchi farzandi Daun sindromi bilan tug'ilgan. Ular keyingi homiladorlikda xavf qanday ekanligini bilmoqchi.",
      question: "Ushbu maslahat qaysi turga kiradi?",
      correct: "Retrospektiv",
      wrong: [
        "Prospektiv",
        "Skrining",
        "Populyatsion",
      ],
      explanation: "Retrospektiv maslahat oilada kasal bola tug'ilgandan keyin — bo'lajak farzandlar salomatligiga nisbatan o'tkaziladi. Prospektiv maslahat kasal bola tug'ilishidan oldin, xavf homiladorlikdan oldin yoki homiladorlikning erta muddatlarida aniqlanganda o'tkaziladi.",
    },
    {
      situation: "Er-xotin sog'lom. Ularning birinchi farzandi autosom-retsessiv kasallik — mukovissidoz bilan og'rigan. Tekshiruv er-xotinning ikkalasi ham mutatsiyaning geterozigota tashuvchilari ekanligini tasdiqladi.",
      question: "Har bir keyingi homiladorlikda kasal bola tug'ilishining genetik xavfi qancha?",
      correct: "25%",
      wrong: [
        "50%",
        "75%",
        "100%",
      ],
      explanation: "Ikki geterozigota nikohida (Aa × Aa) kasal bola (aa) tug'ilish ehtimoli 1/4, ya'ni har bir homiladorlikda 25% ni tashkil etadi, oldin nechta kasal bola tug'ilganidan qat'i nazar. Bu Mendel qonunlari bo'yicha hisoblangan nazariy xavf.",
    },
    {
      situation: "36 yoshli homilador ayolga 12 haftada hujayradan tashqari DNK bo'yicha noinvaziv prenatal test o'tkazildi. Natija: trisomiya 21 xavfi yuqori. Ayol akusherkadan bu homilada albatta Daun sindromi borligini anglatadimi, deb so'ramoqda.",
      question: "Akusherkaning qaysi javobi to'g'ri?",
      correct: "Yo'q, bu skrining: tasdiqlovchi invaziv diagnostika kerak",
      wrong: [
        "Ha, test juda aniq va tashxis allaqachon uzil-kesil qo'yilgan",
        "NIPTni takrorlash kerak, natijalar mos kelsa, tashxis tasdiqlanadi",
        "Yo'q, UTTni takrorlash kifoya, natija normal bo'lsa, xavotirga o'rin yo'q",
      ],
      explanation: "NIPT — yuqori sezgir skrining testi, ammo tekshiriladigan DNK asosan yo'ldoshdan kelib chiqqan, shuning uchun soxta musbat natijalar bo'lishi mumkin (masalan, platsentar mozaitsizmda). Musbat natija invaziv muolajadan (odatda amniotsentezdan) keyin homila kariotipini tekshirish orqali tasdiqlanadi.",
    },
    {
      situation: "37 yoshli homilador ayolga amniotsentez o'tkazildi. Uning qoni Rh-manfiy, rezus-antitanachalar aniqlanmagan, eri Rh-musbat.",
      question: "Muolajadan keyin qanday tadbirni o'tkazish zarur?",
      correct: "Antirezus immunoglobulin (anti-D) yuborish",
      wrong: [
        "Tug'ruqqacha qat'iy yotoq rejimini belgilash",
        "Rh-musbat eritrotsitar massa quyish",
        "Anemiya profilaktikasi uchun temir preparatlarini yuborish",
      ],
      explanation: "Invaziv muolaja vaqtida homila eritrotsitlari ona qon oqimiga tushib, Rh-manfiy sensibilizatsiyalanmagan ayolda rezus-sensibilizatsiyani keltirib chiqarishi mumkin. Shuning uchun muolajadan keyin (72 soat ichida) antirezus immunoglobulin yuboriladi.",
    },
    {
      situation: "Yangi tug'ilgan chaqaloqning onasiga neonatal skrining natijalariga ko'ra bola qonida fenilalanin miqdori oshganligi aniqlangani ma'lum qilindi. Bola sog'lom ko'rinadi, ona sarosimada.",
      question: "Keyingi to'g'ri taktika qanday?",
      correct: "Zudlik bilan takroriy tasdiqlovchi tekshiruv o'tkazish",
      wrong: [
        "Simptomlar paydo bo'lishini kutib, so'ng tekshirish",
        "Bola sog'lom ko'rinayotgani uchun hech narsa qilmaslik",
        "Davolamasdan, bir yildan keyin tahlilni bir marta takrorlash",
      ],
      explanation: "Skriningning musbat natijasi hali tashxis emas: bola zudlik bilan takroriy (tasdiqlovchi) tekshiruvga va mutaxassis maslahatiga chaqiriladi. Simptomlarni kutish mumkin emas — fenilketonuriyada ular nerv tizimining shikastlanishi qaytmas bo'lib qolganda paydo bo'ladi.",
    },
    {
      situation: "Bir-biriga amakivachcha (xolavachcha) bo'lgan yigit va qiz, ikkalasi ham sog'lom, turmush qurishni rejalashtirmoqda va hamshiradan bo'lajak farzandlari uchun xavf bor-yo'qligini so'ramoqda.",
      question: "Ularning farzandlarida birinchi navbatda qaysi kasalliklar xavfi ortgan?",
      correct: "Autosom-retsessiv kasalliklar",
      wrong: [
        "Autosom-dominant kasalliklar",
        "Y-xromosomaga birikkan kasalliklar",
        "Xromosoma kasalliklari (trisomiyalar)",
      ],
      explanation: "Qarindoshlarning umumiy ajdoddan bir xil retsessiv mutatsiyani meros qilib olgan bo'lish ehtimoli yuqoriroq, shuning uchun qarindoshlar o'rtasidagi nikohda kam uchraydigan retsessiv allellar bo'yicha gomozigotalar ko'proq tug'iladi. Bunday juftlikka homilador bo'lishdan oldin TGM tavsiya etish kerak.",
    },
    {
      situation: "24 yoshli ayol fenilketonuriya bilan og'riydi. Bolaligida u maxsus parhezga rioya qilgan, o'smirlik yoshida uni to'xtatgan. Hozir homiladorlikni rejalashtirmoqda.",
      question: "Birinchi navbatda qanday tavsiya berish kerak?",
      correct: "Homilador bo'lishdan oldin parhezni qayta boshlash va butun homiladorlik davomida unga rioya qilish",
      wrong: [
        "Parhezni faqat tug'ruqdan keyin, agar bola kasal bo'lib chiqsa, boshlash",
        "Parhez kerak emas, chunki kattalarda fenilketonuriya xavfli emas",
        "Agar UTTda og'ishlar aniqlansa, parhezni II trimestrda boshlash",
      ],
      explanation: "Ona qonidagi fenilalaninning yuqori darajasi hatto kasallikni meros qilib olmagan bolaga ham teratogen ta'sir ko'rsatadi (homilada mikrotsefaliya, aqliy zaiflik, yurak nuqsonlari). Shuning uchun parhez homilador bo'lishdan oldin qayta boshlanadi, fenilalaninning normal darajasiga erishiladi va unga butun homiladorlik davomida rioya qilinadi.",
    },
    {
      situation: "40 yoshli homilador ayolda skrining natijalariga ko'ra homilada xromosoma patologiyasi xavfi yuqori ekanligi aniqlandi va unga amniotsentez taklif qilindi. Shifokor bilan batafsil suhbatdan so'ng u muolajadan bosh tortmoqda. Eri akusherkadan xotinini ko'ndirishni so'ramoqda.",
      question: "Akusherka qanday yo'l tutishi kerak?",
      correct: "Ayolning qarorini hurmat qilish va unga bosim o'tkazmaslik",
      wrong: [
        "Erini xotini o'rniga rozilik varaqasiga imzo chekishga ko'ndirish",
        "Muolajadan o'tmasa, hisobdan chiqarilishi haqida ogohlantirish",
        "Roziligini kutmasdan uni muolajaga yozib qo'yish",
      ],
      explanation: "Prenatal diagnostika faqat ixtiyoriy ravishda, homilador ayolning o'zining xabardor qilingan roziligi bilan o'tkaziladi; u rad etishga haqli, rad etish esa mumkin bo'lgan oqibatlar tushuntirilgandan keyin yozma ravishda rasmiylashtiriladi. Bosim, tahdid va boshqa shaxs tomonidan imzolangan rozilikka yo'l qo'yilmaydi.",
    },
    {
      situation: "28 yoshli bemor umumiy narkoz ostida rejali operatsiya uchun yotqizildi. Anamnez yig'ilayotganda u amakisi (tog'asi) narkoz ostidagi operatsiya vaqtida tana harorati keskin ko'tarilgani, mushak rigidligi rivojlangani va u o'limdan zo'rg'a qolganini aytdi.",
      question: "Hamshiraning qaysi harakatlari to'g'ri?",
      correct: "Anesteziologga xavfli gipertermiya xavfi haqida xabar berish",
      wrong: [
        "E'tibor bermaslik: narkozga reaksiyalar irsiylanmaydi",
        "Bemorga operatsiyadan bir soat oldin isitma tushiruvchi dori berish",
        "Operatsiyani mustaqil ravishda bekor qilish va bemorni statsionardan chiqarish",
      ],
      explanation: "Xavfli gipertermiya — ingalyatsion anestetiklar va suksinilxolinga irsiy (ko'pincha autosom-dominant) farmakogenetik reaksiya. Oilaviy anamnez og'irlashgan bo'lsa, anesteziolog xavfsiz preparatlarni tanlaydi va maxsus davoni (dantrolen) tayyorlab qo'yadi; isitma tushiruvchi dorilar uning oldini olmaydi.",
    },
    {
      situation: "Yangi tug'ilgan chaqaloqqa Daun sindromi tashxisi qo'yildi. Kariotiplashda translokatsion shakl aniqlandi: 21-xromosomaning ortiqcha materiali 14-xromosomaga birikkan (Robertson translokatsiyasi). Ota-ona sog'lom va yana farzand ko'rishni rejalashtirmoqda.",
      question: "Oilaga birinchi navbatda qanday tekshiruvni tavsiya etish kerak?",
      correct: "Ota-onaning ikkalasining kariotipini tekshirish",
      wrong: [
        "Ota-onaning ikkalasida siydikning biokimyoviy tahlili",
        "Ota-onaning qon guruhi va rezus-omilini aniqlash",
        "Hech qanday: takrorlanish xavfi populyatsiyadagi bilan bir xil",
      ],
      explanation: "Translokatsion Daun sindromi ko'p hollarda fenotipik jihatdan sog'lom ota yoki onadan — balanslangan translokatsiya tashuvchisidan meros bo'lib o'tadi va bunda takrorlanish xavfi regulyar trisomiyaga qaraganda ancha yuqori bo'ladi. Bo'lajak farzandlar uchun xavfni baholash maqsadida ota-onaning ikkalasining kariotipi tekshiriladi.",
    },
  ],

  openQuestions: [
    // ===== Genetika: irsiyatning sitologik asoslari =====
    {
      question: "Mitoz va meyozni taqqoslang: bo'linishlar soni, kon'yugatsiya va krossingover bor-yo'qligi, anafazada xromosomalarning harakati, hosil bo'ladigan hujayralar soni va ularning xromosoma to'plamini (n va c genetik formulalari bilan), shuningdek har bir bo'linish usulining biologik ahamiyatini ko'rsating. Meyoz va urug'lanish avlodlar qatorida xromosomalar sonining doimiyligini qanday ta'minlashini tushuntiring.",
    },
    {
      question: "Metafaza xromosomasining tuzilishini (xromatidalar, sentromera, yelkalar, telomeralar, ikkilamchi belbog' va sputniklar) tavsiflang, sentromeraning joylashuviga ko'ra xromosoma turlarini sanab o'ting va euxromatin bilan geteroxromatinning farqlarini tushuntiring. Kariotip va idiogrammaga ta'rif bering, Denver tasnifining A–G guruhlarini ularga kiruvchi xromosomalarni ko'rsatgan holda sanab o'ting.",
    },
    {
      question: "Spermatogenez va ovogenezni taqqoslang: davrlarni sanab o'ting, ularning ontogenezda kechish muddatlarini, bitta I tartibli hujayradan hosil bo'ladigan gametalar sonini va ovogenezdagi meyoz xususiyatlarini ko'rsating. Spermatozoid va tuxum hujayraning tuzilishini hamda urug'lanishning asosiy bosqichlarini tavsiflang.",
    },
    {
      situation: "Laboratoriyada uchta tekshiriluvchining bukkal epiteliy hujayralarida jinsiy xromatin tekshirildi. Birinchisida Barr tanachalari topilmadi, ikkinchisida yadrolarda bitta tanacha, uchinchisida — ikkita tanacha aniqlandi.",
      question: "Jinsiy xromatinning kelib chiqishini (M. Layon gipotezasi) va Barr tanachalari sonini X-xromosomalar soni bilan bog'laydigan qoidani tushuntiring. Har bir tekshiriluvchida jinsiy xromosomalarning mumkin bo'lgan to'plamlarini (birinchi va ikkinchisi uchun kamida ikkita variant) ko'rsating va tegishli kariotiplarni yozing.",
    },
    {
      situation: "Normal kariotipli (46 ta xromosoma) odam somatik hujayrasi bo'linishdan keyin yangi hujayra sikliga kiradi.",
      question: "Masalani yeching va tushuntiring: hujayra G1 davrida, S-davr tugagandan keyin, G2 davrida, shuningdek mitoz metafazasi va anafazasida hamda telofazadan keyin har bir qiz hujayrada nechta xromosoma, xromatida va yadro DNKsi molekulasini saqlaydi va uning genetik formulasi (n, c) qanday? Interfazaning har bir davri va mitozning har bir fazasidagi jarayonlarni tavsiflang.",
    },
    {
      situation: "Er-xotinning 47,XXY kariotipli farzandi tug'ildi. Molekulyar-genetik tekshiruv bola ikkala X-xromosomani onadan, Y-xromosomani esa otadan olganini ko'rsatdi.",
      question: "Meyozda xromosomalarning ajralmaslik mexanizmini tushuntiring: onada meyozning qaysi bo'linishida buzilish sodir bo'lishi mumkin, jinsiy xromosomalar meyoz I da va meyoz II da ajralmaganda qanday gameta turlari hosil bo'ladi. Ushbu oilada 47,XXY zigota hosil bo'lish sxemasini tuzing.",
    },

    // ===== Genetika: irsiyatning molekulyar asoslari =====
    {
      question: "Uotson va Krik modeliga ko'ra DNK molekulasining tuzilishini (nukleotid tarkibi, komplementarlik, antiparallellik, Chargaff qoidalari) va uning replikatsiya mexanizmini yozing: yarim konservativ prinsip, asosiy fermentlar, yetakchi va orqada qoluvchi zanjirlar sintezi.",
    },
    {
      question: "Genetik kodning xossalarini sanab o'ting (tripletlik, aynishganlik, bir ma'nolilik, bir-birini qoplamaslik, universallik, kolinearlik), ularning har birining mazmunini ochib bering hamda start va terminatsiyalovchi kodonlarni ko'rsating.",
    },
    {
      question: "Eukariot genining tuzilishini (promotor, ekzonlar, intronlar, terminator) va oqsil biosintezi bosqichlarini yozing: transkripsiya, iRNK protsessingi va splaysingi, translyatsiya. Bu jarayonda iRNK, tRNK, rRNK va ribosomalarning rolini ko'rsating.",
    },
    {
      situation: "DNK matritsa (transkripsiyalanadigan) zanjirining fragmenti quyidagi ketma-ketlikka ega: T-A-S-S-G-A-T-G-S-A-T-T. DNK zanjiridagi qo'shni nukleotidlar orasidagi masofa — 0,34 nm.",
      question: "Masalani yeching va har bir qadamni tushuntiring: DNKning ikkinchi zanjirini va iRNKni tuzing, tRNK antikodonlarini yozing, kodlanadigan peptiddagi kodonlar sonini va aminokislotalar sonini aniqlang, DNK fragmentining uzunligini hisoblang.",
    },
    {
      situation: "DNK molekulasida 880 ta guanil nukleotid aniqlangan, bu nukleotidlar umumiy sonining 22 foizini tashkil etadi.",
      question: "Masalani yeching va yechimni tushuntiring: adenil, timidil va sitidil nukleotidlar sonini, nukleotidlarning umumiy sonini va ushbu DNK molekulasining uzunligini (bitta nukleotidga 0,34 nm) aniqlang. Yechim qanday qonuniyatlarga asoslangan?",
    },
    {
      situation: "Klinik-diagnostik laboratoriyaga infeksiya qo'zg'atuvchisining DNKsini polimeraza zanjirli reaksiyasi usulida aniqlash uchun bemorning qon namunasi keltirildi.",
      question: "PZR prinsipini tushuntiring: reaksiya aralashmasining komponentlarini sanab o'ting, bitta sikl bosqichlarini va ularning harorat rejimini yozing, 20 ta sikldan keyin bitta molekuladan tekshirilayotgan DNK qismining nazariy jihatdan nechta nusxasi hosil bo'lishini hisoblang.",
    },

    // ===== Genetika: belgilarning irsiylanish qonuniyatlari =====
    {
      question: "G. Mendelning uchta qonunini (birinchi avlod duragaylarining bir xilligi, ajralish, belgilarning mustaqil irsiylanishi qonunlari) ta'riflang. Har bir qonun uchun genlarning harfiy belgilari bilan chatishtirish sxemasini (P, gametalar, F₁, F₂) yozing, genotip va fenotip bo'yicha ajralishni ko'rsating, qonunlar bajarilishining shartlarini sanab o'ting va gametalar sofligi gipotezasining sitologik asosini tushuntiring.",
    },
    {
      question: "Allel genlarning o'zaro ta'sir tiplarini taqqoslang: to'liq dominantlik, chala dominantlik, kodominantlik va o'ta dominantlik. Har bir tipga ta'rif bering, odamdan misol keltiring va to'liq hamda chala dominantlikda ikkita geterozigota (Aa × Aa) naslida fenotip bo'yicha qanday ajralish kuzatilishini tushuntiring.",
    },
    {
      situation: "Ayolda II (A) qon guruhi va Rh-manfiy qon, uning erida — III (B) qon guruhi va Rh-musbat qon. Ularning birinchi farzandi I (0) qon guruhi va Rh-manfiy qonga ega. Rh-musbatlik — autosom-dominant belgi (D geni); AB0 tizimi qon guruhlari genlari va rezus-omil geni mustaqil irsiylanadi.",
      question: "Masalani yeching: ota-ona va birinchi farzandning genotiplarini aniqlang, chatishtirish sxemasini yozing, bu er-xotin farzandlarining mumkin bo'lgan qon guruhlari va rezus-mansubligini ko'rsating hamda yana bitta I (0) qon guruhli va Rh-manfiy qonli farzand tug'ilish ehtimolini hisoblang. Qon guruhlari va rezus-omilning irsiylanishi haqidagi bilimlar tibbiyotda qayerda qo'llanilishini tushuntiring.",
    },
    {
      situation: "Albinizm autosom-retsessiv tipda irsiylanadi. Albinos erkak pigmentatsiyasi normal bo'lgan va otasi albinos bo'lgan ayol bilan nikohdan o'tadi.",
      question: "Masalani yeching: er-xotinning genotiplarini aniqlang, chatishtirish sxemasini yozing va albinos bola tug'ilish ehtimolini hisoblang. Bu oiladagi normal pigmentatsiyali bolalar albinizm geni tashuvchilari bo'ladimi yoki yo'qmi, tushuntiring.",
    },
    {
      situation: "Braxidaktiliya (kalta barmoqlilik) autosom-dominant tipda irsiylanadi. Masala shartiga ko'ra, bu gen bo'yicha gomozigotalar embrional rivojlanishning erta bosqichlarida nobud bo'ladi. Er-xotinning ikkalasida ham braxidaktiliya bor.",
      question: "Masalani yeching: er-xotinning genotiplarini aniqlang, chatishtirish sxemasini yozing va tug'ilgan bolalar orasida genotip va fenotip bo'yicha ajralishni aniqlang. Normal barmoqli bola tug'ilish ehtimolini hisoblang va nima uchun bunday oilalarda 3:1 ajralish kuzatilmasligini tushuntiring.",
    },
    {
      situation: "Otoskleroz 30% penetrantlik bilan autosom-dominant tipda irsiylanadi. Er-xotinning ikkalasi ham otoskleroz geni bo'yicha geterozigota.",
      question: "Masalani yeching: chatishtirish sxemasini yozing va penetrantlikni hisobga olgan holda otoskleroz belgilari namoyon bo'lgan bola tug'ilish ehtimolini hisoblang. Penetrantlik ekspressivlikdan nimasi bilan farq qilishini va nima uchun dominant gen tashuvchisi fenotipik jihatdan sog'lom bo'lib qolishi mumkinligini tushuntiring.",
    },
    {
      question: "Pennet panjarasidan foydalanib masalani yeching. Axondroplaziya autosom-dominant tipda, mukovissidoz — autosom-retsessiv tipda irsiylanadi; genlar turli xromosoma juftlarida joylashgan. Ikkala gen bo'yicha geterozigota bo'lgan axondroplaziyali erkak mukovissidoz geni tashuvchisi bo'lgan normal bo'yli ayol bilan nikohdan o'tadi. Er-xotinning genotiplari va gameta tiplarini aniqlang, ikkala belgi bo'yicha sog'lom bola va ikkala kasallikka chalingan bola tug'ilish ehtimolini hisoblang.",
    },

    // ===== Genetika: birikkan irsiylanish va jins genetikasi =====
    {
      question: "T. Morganning irsiyat xromosoma nazariyasining asosiy qoidalarini sanab bering. Birikish guruhi nima ekanligini, birikish guruhlari soni nima bilan belgilanishini va nima uchun ayolda ular 23 ta, erkakda esa 24 ta ekanligini tushuntiring.",
    },
    {
      question: "Odamda jinsni belgilashning xromosoma mexanizmini tushuntiring: qaysi jins gomogametali, qaysi biri geterogametali, ular qanday tipdagi gametalar hosil qiladi, Y-xromosoma va SRY genining roli qanday. Jinslar nisbati 1 : 1 ga yaqin bo'lishini tushuntiruvchi sxemani yozing.",
    },
    {
      question: "Shajarada X-xromosomaga birikkan retsessiv, X-xromosomaga birikkan dominant va Y-xromosomaga birikkan irsiylanish tiplarining belgilarini (mezonlarini) sanab bering. Bu tiplarni o'zaro taqqoslang va X-xromosomaga birikkan retsessiv hamda X-xromosomaga birikkan dominant tipda irsiylanadigan kasalliklarga misollar keltiring.",
    },
    {
      situation: "Otasi gemofiliya bilan kasallangan, onasi esa sog'lom va tashuvchi bo'lmagan ayol sog'lom erkakka turmushga chiqdi. Gemofiliya X-xromosomaga birikkan retsessiv belgi sifatida irsiylanadi.",
      question: "Masalani yeching: er-xotinning genotiplarini aniqlang, chatishtirish sxemasini yozing (P, gametalar, F₁), barcha farzandlarga nisbatan kasal bola tug'ilish ehtimolini va tug'ilgan o'g'ilning kasal bo'lish ehtimolini hisoblang. Bu oilada kasal qiz tug'ilishi mumkinmi? Nima uchunligini tushuntiring.",
    },
    {
      situation: "Drozofilaning AB/ab digeterozigota urg'ochisini (A va B genlari bitta xromosomada joylashgan, dominant allellar bir ota-onadan olingan) aabb retsessiv gomozigota bilan tahliliy chatishtirishda 1000 ta nasl olindi: 415 ta AaBb, 405 ta aabb, 92 ta Aabb va 88 ta aaBb.",
      question: "Masalani yeching: chatishtirish sxemasini yozing, qaysi nasllar krossover bo'lmagan, qaysilari krossover ekanligini, bu genlarda to'liq yoki to'liq bo'lmagan birikish kuzatilishini aniqlang va genlar orasidagi masofani morganidalarda hisoblang. Nima uchun to'rt sinf nasllari teng miqdorda olinmaganini tushuntiring.",
    },
    {
      situation: "Proband — modda almashinuvining irsiy kasalligi bo'lgan qiz bola. Uning ota-onasi sog'lom va o'zaro amakivachcha, probandning sog'lom akasi (yoki ukasi) bor. Buvilari, bobolari va boshqa qarindoshlarida bu kasallik qayd etilmagan.",
      question: "Kasallikning eng ehtimolli irsiylanish tipini aniqlang va xulosa asoslangan shajara belgilarini sanab bering. Bu tipni autosom-dominant tip bilan taqqoslang, ota-onaning genotiplarini yozing va keyingi homiladorlikda kasal bola tug'ilish ehtimolini hisoblang.",
    },
    {
      situation: "Shajarada kasallik faqat kasal ayollardan o'tadi: kasal ona uni o'g'illariga ham, qizlariga ham (turli og'irlikda) o'tkazadi, kasal qizlarning farzandlari ham kasal, kasal erkaklarning esa barcha farzandlari sog'lom.",
      question: "Irsiylanish tipini aniqlang, uning mexanizmini tushuntiring va bu tipning shajaradagi belgilarini sanab bering. U X-xromosomaga birikkan dominant irsiylanishdan nimasi bilan farq qiladi? Kasal erkakka farzandlari uchun kasallanish xavfi haqida nima deyish kerak?",
    },

    // ===== Genetika: o'zgaruvchanlik va mutagenez =====
    {
      question: "Modifikatsion va mutatsion o'zgaruvchanlikni taqqoslang: kamida beshta farqni ko'rsating (yuzaga kelish sababi, genotipning o'zgarishi, irsiylanishi, ommaviyligi yoki yakkaligi, yo'nalganligi, qaytuvchanligi, ahamiyati) va odamda o'zgaruvchanlikning har bir shakliga ikkitadan misol keltiring.",
    },
    {
      question: "Mutatsiyalarning tasniflarini sanab bering: kelib chiqishi, hujayralar turi, hayotchanlikka ta'siri va irsiy materialning tuzilish darajasi bo'yicha. Har bir guruh uchun ta'rif bering va misol keltiring; gen mutatsiyalari uchun ularning turlarini (nukleotidlarning almashinishi, qo'shilishi, tushib qolishi) va oqibatlarini tavsiflang.",
    },
    {
      question: "Mutagen omillarni tavsiflang: fizik, kimyoviy va biologik mutagenlarni misollar bilan sanab bering, mutagen teratogendan nimasi bilan farq qilishini tushuntiring hamda organizmni mutatsiyalardan himoya qilishda antimutagenlar va DNK reparatsiyasining rolini tavsiflang.",
    },
    {
      situation: "Muolaja xonasida sitostatikni suyultirish vaqtida hamshira flakonni tushirib yubordi: u sindi, eritma polga to'kildi va xalatining yengiga hamda qo'l bilagining terisiga tegdi.",
      question: "Bu vaziyatda hamshiraning harakatlari ketma-ketligini tavsiflang. Sitostatiklar bilan xavfsiz ishlashning asosiy qoidalarini sanab bering va ular tibbiy genetika nuqtai nazaridan nima uchun zarurligini tushuntiring.",
    },
    {
      situation: "26 yoshli ayolga umurtqa pog'onasi bel bo'limining rejali rentgenografiyasi buyurilgan. Hamshira uni tekshiruvga yozmoqda.",
      question: "Tekshiruvdan oldin hamshira bemordan qanday ma'lumotlarni aniqlashtirishi kerak va nima uchun? Bemorlar va tibbiyot xodimlarini ionlovchi nurlanishning mutagen ta'siridan himoya qilish choralarini sanab bering.",
    },
    {
      situation: "Sitogenetik tekshiruvda quyidagi kariotiplar olindi: A bemor — 47,XXY; B bemor — 46,XY,del(5)(p15); o'z-o'zidan tushgan homila materiali V — 69,XXX; G bemor — 46,XX,r(18).",
      question: "Har bir holat uchun irsiy materialning tuzilish darajasi bo'yicha mutatsiya tipini aniqlang va mutatsiya turini ayting. Genom mutatsiyalari xromosoma mutatsiyalaridan nimasi bilan farq qilishini tushuntiring va xromosoma qayta tuzilishlarining asosiy turlarini sanab bering.",
    },

    // ===== Genetika: odam genetikasini o'rganish usullari =====
    {
      question: "Odam genetikasini o'rganishning genealogik usulini tavsiflang: uning bosqichlarini ayting, shajara tuzishda qo'llaniladigan asosiy belgilarni (kamida 10 ta) va shajara tuzish qoidalarini (avlodlar va avlod a'zolarini belgilash, sibslarning joylashuvi, shajara legendasi) sanab o'ting. «Proband», «sibslar», «yarim sibslar» tushunchalariga ta'rif bering. Genealogik tahlil nimani aniqlash imkonini berishini tushuntiring.",
    },
    {
      question: "Sitogenetik usul (kariotiplash) bosqichlarini tavsiflang: qanday material ishlatiladi, fitogemagglyutinin, kolxitsin, gipotonik eritma va fiksator nima uchun qo'llaniladi, differensial G-bo'yashning afzalligi nimada. Kariotipni tekshirishga ko'rsatmalarni sanab o'ting. Jinsiy xromatinni aniqlashning tezkor usuli tamoyilini va nima uchun uning natijasi kariotiplash bilan tasdiqlanishi kerakligini tushuntiring.",
    },
    {
      question: "Molekulyar-genetik usullarni tavsiflang: fluoressent in situ gibridizatsiya (FISH), xromosoma mikromatritsa tahlili, PZR-diagnostika, Senger bo'yicha sekvenirlash va ekzom sekvenirlash. Har bir usul uchun uning tamoyili va asosiy diagnostik vazifalarini ko'rsating, misollar keltiring. Standart kariotiplashda qanday buzilishlar aniqlanmasligini va ular qaysi usullar bilan aniqlanishini tushuntiring.",
    },
    {
      situation: "Muayyan populyatsiyada mukovissidoz (autosom-retsessiv kasallik) yangi tug'ilgan chaqaloqlar orasida 1 : 2500 chastota bilan uchraydi.",
      question: "Xardi–Vaynberg qonuni bo'yicha retsessiv va dominant allellar chastotalarini hamda mutant genning geterozigota tashuvchilari chastotasini hisoblang, yechim jarayonini ko'rsating. Xardi–Vaynberg qonuni bajariladigan shartlarni sanab o'ting. Nima uchun populyatsiyada mutant gen tashuvchilari kasallarga qaraganda ko'p marta ortiq ekanligini va bu tibbiy-genetik maslahat berish uchun qanday ahamiyatga ega ekanligini tushuntiring.",
    },
    {
      situation: "Egizaklarning ikki kasallik bo'yicha konkordantligi o'rganildi. A kasallik: monozigot egizaklar konkordantligi — 82%, dizigot egizaklarniki — 10%. B kasallik: monozigot egizaklar konkordantligi — 28%, dizigot egizaklarniki — 20%.",
      question: "Har bir kasallik uchun Xolsinger formulasi bo'yicha irsiylanish koeffitsiyenti va muhit ta'siri ulushini hisoblang, yechim jarayonini ko'rsating va irsiyat hamda muhitning roli haqida xulosa chiqaring. Monozigot egizaklar dizigot egizaklardan nimasi bilan farq qilishini, konkordantlik va diskordantlik nima ekanligini va nima uchun hatto A kasallikda ham monozigot egizaklar konkordantligi 100% ga yetmasligini tushuntiring.",
    },
    {
      situation: "Tibbiy-genetik maslahatxonaga ko'plab tug'ma rivojlanish nuqsonlari va psixomotor rivojlanishi kechikkan 3 yoshli bolasi bilan ona murojaat qildi. Genetik shifokor bolaga kariotipni tekshirishni, onaga esa DNKning molekulyar-genetik tekshiruvini buyurdi.",
      question: "Bemorlarni tayyorlash va genetik tekshiruvlar uchun material olishda hamshiraning rolini tavsiflang: kariotiplash uchun qonni qanday olish va yetkazish kerak (probirka turi, saqlash va tashish shartlari, nima uchun qonni muzlatish mumkin emas), DNK ajratib olish uchun qon olish nimasi bilan farq qiladi, jinsiy xromatinni aniqlash uchun bukkal epiteliydan qirma qanday olinadi. Materialni markirovka qilish, yo'llanmani rasmiylashtirish, infeksion xavfsizlik va etik me'yorlarga rioya qilishga qo'yiladigan talablarni ko'rsating.",
    },

    // ===== Genetika: irsiy kasalliklar =====
    {
      question: "Odam irsiy patologiyasining asosiy guruhlarini sanab o'ting. Har bir guruh uchun yuzaga kelish sababini va naslga o'tish xususiyatlarini ko'rsating, ikkitadan kasallik misolini keltiring.",
    },
    {
      question: "Daun sindromining sitogenetik variantlarini va ularning oiladagi prognoz uchun ahamiyatini tavsiflang. Sindromning yetakchi klinik belgilarini sanab o'ting va Daun sindromli bolani parvarishlash, abilitatsiya qilish va dispanser kuzatuvi bo'yicha tavsiyalar tuzing.",
    },
    {
      question: "Shereshevskiy–Terner va Klaynfelter sindromlarini taqqoslang: kariotipini, turli yosh davrlaridagi yetakchi klinik belgilarini, davolash imkoniyatlarini va fertillik bo'yicha prognozini ko'rsating.",
    },
    {
      situation: "Bola 1 oylik. Neonatal skrining va tasdiqlovchi tekshiruv natijalariga ko'ra «klassik fenilketonuriya» tashxisi qo'yilgan, shifokor parhez bilan davolashni buyurgan. Ona sarosimada va hamshiradan nima uchun bolaga oddiy ovqat berish mumkin emasligini so'ramoqda.",
      question: "Onaga kasallikning mohiyati va parhez bilan davolashning maqsadini tushuntiring. Suhbat rejasini tuzing: parhez tamoyillari, ruxsat etilgan va taqiqlangan mahsulotlar, qondagi fenilalanin darajasini nazorat qilish, parhezni buzish oqibatlari.",
    },
    {
      situation: "Og'ir gemofiliya A bilan og'rigan 9 yoshli o'g'il bola maktabning tibbiyot xonasiga murojaat qildi: partaga urilgandan keyin burnidan qon ketmoqda va u 20 daqiqa davomida to'xtamayapti. Anamnezida — tizza bo'g'imlarining takroriy gemartrozlari.",
      question: "Gemofiliyali bemorda qon ketishi va gemartrozda shoshilinch yordam rejasini tuzing. Bemorga qarshi ko'rsatilgan muolajalar va preparatlarni sanab o'ting hamda oilaga turmush tarzi bo'yicha tavsiyalar bering.",
    },
    {
      situation: "Mukovissidozning aralash (o'pka-ichak) shakli bilan og'rigan 6 yoshli qiz bola bronx-o'pka jarayoni qo'zg'alganidan keyin statsionardan chiqarilmoqda. Mukolitik ingalyatsiyalari, ferment preparati, kineziterapiya buyurilgan.",
      question: "Hamshiralik parvarishi va oilani o'qitish rejasini tuzing: kineziterapiya texnikasi va rejimi, ferment preparatlarini qabul qilish qoidalari, ovqatlanish xususiyatlari, infeksiyalar va o'zaro yuqtirishning oldini olish.",
    },

    // ===== Genetika: tibbiy-genetik maslahat va profilaktika =====
    {
      question: "Irsiy patologiya profilaktikasining darajalarini (birlamchi, ikkilamchi, uchlamchi) sanab bering. Har bir daraja nimaga qaratilganini tushuntiring va har biri uchun 2–3 tadan tadbir misolini keltiring. Bu tadbirlarning qaysilarida hamshira (akusherka) ishtirok etishini ko'rsating.",
    },
    {
      question: "Tibbiy-genetik maslahatni tavsiflang: maqsadlari, yo'naltirish uchun ko'rsatmalar (shu jumladan ota-ona yoshi va qarindoshlar o'rtasidagi nikohning roli), bosqichlari, prospektiv va retrospektiv maslahatning farqi. TGMning etik tamoyillarini (ixtiyoriylik, xabardor qilingan rozilik, konfidensiallik, nodirektivlik) ochib bering va maslahatchi nima uchun oila o'rniga qaror qabul qilmasligi kerakligini tushuntiring.",
    },
    {
      question: "Prenatal diagnostikaning noinvaziv va invaziv usullarini taqqoslang. Ultratovush va biokimyoviy skrining hamda NIPT uchun imkoniyatlar va cheklovlarni; xorion vorsinkalari biopsiyasi, amniotsentez va kordotsentez uchun — olinadigan material, bajariladigan trimestr va mumkin bo'lgan asoratlarni ko'rsating. NIPTning musbat natijasi nima uchun tasdiqlashni talab qilishini tushuntiring.",
    },
    {
      situation: "Homilador ayol, 38 yosh, muddat 12 hafta, qoni Rh-manfiy, rezus-antitanachalar yo'q, eri Rh-musbat. I trimestr skriningi natijalariga ko'ra trisomiya 21 xavfi yuqori ekanligi aniqlandi; shifokor xorion vorsinkalari biopsiyasini tavsiya qilmoqda.",
      question: "Akusherkaning ish rejasini tuzing: homilador ayolni muolajaga qanday tayyorlash va xabardor qilingan rozilikni ta'minlash, mumkin bo'lgan asoratlar haqida nimalarni tushuntirish, muolajadan keyin qanday profilaktik choralar ko'rish, qanday shikoyatlar paydo bo'lganda ayol zudlik bilan yordamga murojaat qilishi kerak.",
    },
    {
      situation: "27 va 29 yoshli er-xotin maslahatxonaga murojaat qildi: ularning birinchi farzandi yuqori lab va tanglay kemtigi bilan tug'ilgan. Oilada boshqa tug'ma nuqsonlar holati qayd etilmagan. Er-xotin ikkinchi homiladorlikni rejalashtirmoqda va nuqson takrorlanadimi, deb so'ramoqda.",
      question: "Maslahat turini aniqlang. Multifaktorial kasalliklarda genetik xavf qanday baholanishini va empirik xavf nazariy xavfdan nimasi bilan farq qilishini tushuntiring. Oilaga taklif qilish mumkin bo'lgan perikonsepsion profilaktika tadbirlari va prenatal diagnostika usullarini sanab bering.",
    },
    {
      situation: "19 yoshli talabada sulfanilamidlar guruhiga mansub antibakterial preparatni qabul qilgandan keyin holsizlik, terining sarg'ayishi va to'q rangli siydik paydo bo'ldi. Tekshiruvda gemoliz va G6FD fermentining irsiy yetishmovchiligi aniqlandi.",
      question: "Farmakogenetika nimani o'rganishini tushuntiring va rivojlangan reaksiyaning mexanizmini tavsiflang. Bemor va uning qarindoshlari bilan suhbat rejasini tuzing: qaysi preparatlar va mahsulotlardan saqlanish kerak, kasallik haqida kimni ogohlantirish kerak, qarindoshlarni tekshirish zarurmi. Yana bir farmakogenetik reaksiyaga misol keltiring va uning profilaktika choralarini ayting.",
    },
  ],
});
