// =====================================================================
// Справочник «Как получить права в Узбекистане» (RU / UZ).
// Собрано по открытым источникам на ноябрь 2026 (см. раздел «Источники»).
// Правила и суммы меняются — при обновлении правьте только этот файл.
// =====================================================================
const GUIDE = {
ru: {
  btn: "Как получить права: документы и экзамены",
  title: "Как получить права в Узбекистане",
  updated: "Актуально на ноябрь 2026. Перед оплатой и записью сверяйтесь с yim.uz и my.gov.uz — правила и суммы меняются.",
  sections: [
  { h: "👤 Кто может сдавать", b: `
    <ul>
      <li><b>Категория A</b> (мотоциклы) — с 16 лет.</li>
      <li><b>Категория B</b> (легковые) — с 18 лет.</li>
      <li><b>C, D, BE, CE, DE</b> — с 21 года.</li>
      <li>На <b>D</b> нужен стаж не менее 3 лет на категории B или C, плюс переподготовка.</li>
    </ul>` },
  { h: "🗺️ Порядок по шагам", b: `
    <ol>
      <li><b>Медсправка формы 083/у.</b> Заявка — на my.gov.uz (услуга «Получение медицинской справки (форма 083/у)»), осмотр — в госполиклинике или уполномоченной частной клинике: окулист, терапевт, ЛОР, при необходимости невролог. Без неё не допустят ни к обучению, ни к экзамену.</li>
      <li><b>Обучение.</b> С 1 февраля 2026 года теорию для категорий A и B можно учить <b>самостоятельно</b> (или на курсах). <b>Практика</b> — обязательно в лицензированной автошколе с инструктором.</li>
      <li>Автошкола сама передаёт данные о вашем обучении в экзаменационную систему.</li>
      <li><b>Запись на экзамен</b> — самостоятельно на сайте <b>yim.uz</b> (личный кабинет), выбираете дату.</li>
      <li><b>Теоретический экзамен</b> на компьютере.</li>
      <li><b>Практический экзамен</b> на автодроме.</li>
      <li>После сдачи выдают <b>сертификат</b> — по нему можно ездить, пока не получите карточку прав.</li>
      <li><b>Получение прав</b> — в Центре государственных услуг или онлайн через my.gov.uz. Обычно 1–3 дня после оплаты сбора, иногда до 10 дней. Возможна доставка почтой.</li>
    </ol>` },
  { h: "📋 Образец: чек-лист документов", b: `
    <div class="gsamp"><b>1. На медкомиссию (083/у):</b>
      <label><input type="checkbox"> Паспорт или ID-карта</label>
      <label><input type="checkbox"> 2 цветные фото 3,5×4,5 см</label>
      <label><input type="checkbox"> Справка из психоневрологического диспансера</label>
      <label><input type="checkbox"> Справка из наркологического диспансера</label>
      <label><input type="checkbox"> Квитанция об оплате медосмотра (цену устанавливает клиника)</label>
    </div>
    <div class="gsamp"><b>2. В автошколу:</b>
      <label><input type="checkbox"> Паспорт или ID-карта (иногда копия)</label>
      <label><input type="checkbox"> Медсправка 083/у</label>
      <label><input type="checkbox"> Фото 3×4 — количество уточните в автошколе (обычно 4–6)</label>
      <label><input type="checkbox"> Некоторые автошколы просят аттестат или диплом</label>
    </div>
    <div class="gsamp"><b>3. На экзамен:</b>
      <label><input type="checkbox"> Паспорт или ID-карта</label>
      <label><input type="checkbox"> Запись на yim.uz (дата и время)</label>
    </div>
    <div class="gsamp"><b>4. За правами:</b>
      <label><input type="checkbox"> Паспорт или ID-карта</label>
      <label><input type="checkbox"> Действующая медсправка 083/у</label>
      <label><input type="checkbox"> Сертификат о сдаче экзамена</label>
    </div>
    <div class="hint">Галочки — для вас, они не сохраняются.</div>` },
  { h: "🖥️ Теоретический экзамен", b: `
    <ul>
      <li><b>20 вопросов</b>, на всё <b>25 минут</b>.</li>
      <li>Сдал — если <b>не меньше 18</b> правильных ответов (до 2 ошибок).</li>
      <li>Результат виден сразу. Без сданной теории к практике не допускают.</li>
      <li>Сданная теория действует <b>2 месяца</b>: если за это время не сдать практику — теорию придётся сдавать заново.</li>
    </ul>
    <div class="gsamp"><b>Образец:</b> режим «🎯 Экзамен» в этом тренажёре устроен так же — 20 вопросов, 25 минут, до 2 ошибок.
      <button class="btn" style="margin-top:8px" onclick="startExam()">Попробовать экзамен</button></div>` },
  { h: "🚗 Практический экзамен (автодром)", b: `
    <p>Проходит на автодроме экзаменационного центра с перекрёстками, светофорами, переходами и знаками. Движение отслеживают датчики, оценка ставится автоматически.</p>
    <p><b>Упражнения:</b></p>
    <ul>
      <li><b>«Змейка»</b> — проезд между конусами без касаний.</li>
      <li><b>Эстакада</b> — остановка и трогание на подъёме без отката.</li>
      <li><b>Параллельная парковка.</b></li>
      <li><b>Разворот в ограниченном пространстве.</b></li>
      <li><b>Остановка у линии разметки.</b></li>
    </ul>
    <p><b>Оценка:</b> у вас 100 баллов, за каждую ошибку снимаются штрафные баллы (например, остановка слишком близко к пешеходному переходу — около 5 баллов). Если ошибок набралось больше допустимого — экзамен не сдан. Решение автоматическое.</p>
    <div class="gsamp"><b>Образец: что взять в день экзамена</b>
      <label><input type="checkbox"> Паспорт или ID-карта</label>
      <label><input type="checkbox"> Удобная обувь (не шлёпанцы и не каблуки)</label>
      <label><input type="checkbox"> Очки или линзы — если они указаны в медсправке</label>
      <label><input type="checkbox"> Приехать заранее: перед стартом бывает инструктаж</label>
    </div>` },
  { h: "🔁 Если не сдали", b: `
    <ul>
      <li>Пересдача — <b>не раньше чем через 7 дней</b>.</li>
      <li>Пересдача платная, за каждый этап отдельно.</li>
      <li>Не сдали теорию — к практике не допускают, сначала пересдаёте теорию.</li>
    </ul>` },
  { h: "💰 Сколько стоит", b: `
    <ul>
      <li><b>Автошкола + весь процесс</b> — по данным СМИ, в среднем 7–10 млн сумов (зависит от школы и города).</li>
      <li><b>Экзамены</b> — разные источники называют от 1 до 1,6 млн сумов за этап; сумма зависит от даты и попытки. <b>Точную цену смотрите при записи на yim.uz.</b></li>
      <li><b>Выдача прав</b> — сбор 0,7 БРВ (базовой расчётной величины).</li>
      <li><b>Медосмотр</b> — цену устанавливает клиника.</li>
    </ul>` },
  { h: "📅 Образец: план подготовки на 3 месяца", b: `
    <div class="gsamp">
      <b>Неделя 1:</b> медсправка 083/у, выбор автошколы для практики.<br>
      <b>Недели 2–6:</b> теория по 20–30 минут в день: «Случайный билет» + «Мои ошибки».<br>
      <b>Недели 4–10:</b> практика с инструктором (40–50 часов вождения), отдельно — упражнения автодрома.<br>
      <b>Недели 9–10:</b> 2–3 «Экзамена» в день, пока не будете стабильно сдавать без ошибок.<br>
      <b>Неделя 11:</b> запись на yim.uz, теория и практика.<br>
      <b>Неделя 12:</b> получение прав в ЦГУ или через my.gov.uz.
    </div>` },
  { h: "📆 Срок действия", b: `
    <ul>
      <li>Права выдаются на <b>10 лет</b>.</li>
      <li>Заменить можно через my.gov.uz или в подразделении ГСБДД; если медсправка истекла — нужна новая.</li>
      <li>Просрочили меньше чем на год — замена без экзаменов. Больше года и не ездили — могут назначить пересдачу. Ездить с просроченными правами — штраф.</li>
    </ul>` },
  { h: "🔗 Источники", b: `
    <ul class="gsrc">
      <li>gov.uz — «Haydovchilik guvohnomasini olish uchun imtihon topshirish»</li>
      <li>Kun.uz — «Как получить водительские права», 10.12.2025</li>
      <li>UzNews.uz — «Как получить водительские права в Узбекистане в 2026 году»</li>
      <li>Постановление Кабмина №408 от 31.05.2018 (lex.uz)</li>
    </ul>
    <div class="hint">Это справка из открытых источников, а не официальная консультация. Официально: yim.uz, my.gov.uz, gov.uz.</div>` },
  ]
},
uz: {
  btn: "Prava olish: hujjatlar va imtihonlar",
  title: "O‘zbekistonda haydovchilik guvohnomasini olish",
  updated: "2026-yil noyabr holatiga. To‘lov va yozilishdan oldin yim.uz va my.gov.uz’da tekshiring — qoidalar va narxlar o‘zgaradi.",
  sections: [
  { h: "👤 Kim topshirishi mumkin", b: `
    <ul>
      <li><b>A toifa</b> (mototsikl) — 16 yoshdan.</li>
      <li><b>B toifa</b> (yengil avtomobil) — 18 yoshdan.</li>
      <li><b>C, D, BE, CE, DE</b> — 21 yoshdan.</li>
      <li><b>D</b> toifa uchun B yoki C toifada kamida 3 yil staj va qayta tayyorlov kerak.</li>
    </ul>` },
  { h: "🗺️ Bosqichma-bosqich tartib", b: `
    <ol>
      <li><b>083/u shaklidagi tibbiy ma’lumotnoma.</b> Ariza — my.gov.uz’da, ko‘rik — davlat poliklinikasi yoki vakolatli xususiy klinikada: okulist, terapevt, LOR, kerak bo‘lsa nevrolog. Usiz o‘qishga ham, imtihonga ham qo‘yilmaydi.</li>
      <li><b>O‘qish.</b> 2026-yil 1-fevraldan A va B toifalar uchun nazariyani <b>mustaqil</b> (yoki kurslarda) o‘rganish mumkin. <b>Amaliyot</b> — faqat litsenziyali avtomaktabda instruktor bilan.</li>
      <li>Avtomaktab o‘qish ma’lumotlarini imtihon tizimiga o‘zi yuboradi.</li>
      <li><b>Imtihonga yozilish</b> — <b>yim.uz</b> saytida (shaxsiy kabinet), sanani o‘zingiz tanlaysiz.</li>
      <li><b>Nazariy imtihon</b> kompyuterda.</li>
      <li><b>Amaliy imtihon</b> avtodromda.</li>
      <li>Topshirgach <b>sertifikat</b> beriladi — guvohnoma tayyor bo‘lguncha u bilan haydash mumkin.</li>
      <li><b>Guvohnomani olish</b> — Davlat xizmatlari markazida yoki my.gov.uz orqali. Odatda to‘lovdan keyin 1–3 kun, ba’zan 10 kungacha. Pochta orqali yetkazib berish ham bor.</li>
    </ol>` },
  { h: "📋 Namuna: hujjatlar ro‘yxati", b: `
    <div class="gsamp"><b>1. Tibbiy ko‘rikka (083/u):</b>
      <label><input type="checkbox"> Pasport yoki ID-karta</label>
      <label><input type="checkbox"> 2 ta rangli surat 3,5×4,5 sm</label>
      <label><input type="checkbox"> Psixonevrologik dispanserdan ma’lumotnoma</label>
      <label><input type="checkbox"> Narkologik dispanserdan ma’lumotnoma</label>
      <label><input type="checkbox"> Ko‘rik uchun to‘lov kvitansiyasi (narxni klinika belgilaydi)</label>
    </div>
    <div class="gsamp"><b>2. Avtomaktabga:</b>
      <label><input type="checkbox"> Pasport yoki ID-karta (ba’zan nusxasi)</label>
      <label><input type="checkbox"> 083/u tibbiy ma’lumotnoma</label>
      <label><input type="checkbox"> 3×4 surat — sonini avtomaktabdan so‘rang (odatda 4–6 ta)</label>
      <label><input type="checkbox"> Ba’zi avtomaktablar attestat yoki diplom so‘raydi</label>
    </div>
    <div class="gsamp"><b>3. Imtihonga:</b>
      <label><input type="checkbox"> Pasport yoki ID-karta</label>
      <label><input type="checkbox"> yim.uz’dagi yozilish (sana va vaqt)</label>
    </div>
    <div class="gsamp"><b>4. Guvohnoma olishga:</b>
      <label><input type="checkbox"> Pasport yoki ID-karta</label>
      <label><input type="checkbox"> Amaldagi 083/u ma’lumotnoma</label>
      <label><input type="checkbox"> Imtihon sertifikati</label>
    </div>
    <div class="hint">Belgilar faqat siz uchun, ular saqlanmaydi.</div>` },
  { h: "🖥️ Nazariy imtihon", b: `
    <ul>
      <li><b>20 ta savol</b>, hammasiga <b>25 daqiqa</b>.</li>
      <li>Kamida <b>18 ta</b> to‘g‘ri javob bo‘lsa — o‘tdingiz (2 tagacha xato).</li>
      <li>Natija darhol ko‘rinadi. Nazariyadan o‘tmasangiz, amaliyotga qo‘yilmaydi.</li>
      <li>Nazariy imtihon natijasi <b>2 oy</b> amal qiladi: shu muddatda amaliyotdan o‘tmasangiz, nazariyani qayta topshirasiz.</li>
    </ul>
    <div class="gsamp"><b>Namuna:</b> trenajyordagi «🎯 Imtihon» rejimi xuddi shunday — 20 savol, 25 daqiqa, 2 tagacha xato.
      <button class="btn" style="margin-top:8px" onclick="startExam()">Imtihonni sinab ko‘rish</button></div>` },
  { h: "🚗 Amaliy imtihon (avtodrom)", b: `
    <p>Imtihon markazining avtodromida o‘tkaziladi: chorrahalar, svetoforlar, piyodalar o‘tish joylari va belgilar bor. Harakatni datchiklar kuzatadi, baho avtomatik qo‘yiladi.</p>
    <p><b>Mashqlar:</b></p>
    <ul>
      <li><b>«Ilon izi»</b> — konuslar orasidan tegmasdan o‘tish.</li>
      <li><b>Estakada</b> — balandlikda to‘xtash va orqaga ketmasdan joyidan qo‘zg‘alish.</li>
      <li><b>Parallel parkovka.</b></li>
      <li><b>Cheklangan joyda burilish (razvorot).</b></li>
      <li><b>Chiziq oldida to‘xtash.</b></li>
    </ul>
    <p><b>Baholash:</b> sizda 100 ball bor, har bir xato uchun jarima ballari ayiriladi (masalan, piyodalar o‘tish joyiga juda yaqin to‘xtash — taxminan 5 ball). Xatolar ruxsat etilganidan oshsa — imtihondan o‘tilmagan. Qaror avtomatik.</p>
    <div class="gsamp"><b>Namuna: imtihon kuni nima olish kerak</b>
      <label><input type="checkbox"> Pasport yoki ID-karta</label>
      <label><input type="checkbox"> Qulay poyabzal (shippak va poshnasiz emas)</label>
      <label><input type="checkbox"> Ko‘zoynak yoki linza — agar ma’lumotnomada ko‘rsatilgan bo‘lsa</label>
      <label><input type="checkbox"> Erta keling: boshlashdan oldin instruktaj bo‘ladi</label>
    </div>` },
  { h: "🔁 O‘ta olmasangiz", b: `
    <ul>
      <li>Qayta topshirish — <b>kamida 7 kundan keyin</b>.</li>
      <li>Qayta topshirish pullik, har bir bosqich uchun alohida.</li>
      <li>Nazariyadan o‘tmasangiz — avval nazariyani qayta topshirasiz.</li>
    </ul>` },
  { h: "💰 Qancha turadi", b: `
    <ul>
      <li><b>Avtomaktab va butun jarayon</b> — OAV ma’lumotlariga ko‘ra, o‘rtacha 7–10 mln so‘m (maktab va shaharga bog‘liq).</li>
      <li><b>Imtihonlar</b> — turli manbalarda bir bosqich uchun 1–1,6 mln so‘m; narx sana va urinishga bog‘liq. <b>Aniq narxni yim.uz’da yozilayotganda ko‘ring.</b></li>
      <li><b>Guvohnoma berish</b> — 0,7 BHM yig‘im.</li>
      <li><b>Tibbiy ko‘rik</b> — narxni klinika belgilaydi.</li>
    </ul>` },
  { h: "📅 Namuna: 3 oylik tayyorgarlik rejasi", b: `
    <div class="gsamp">
      <b>1-hafta:</b> 083/u ma’lumotnoma, amaliyot uchun avtomaktab tanlash.<br>
      <b>2–6-haftalar:</b> har kuni 20–30 daqiqa nazariya: «Tasodifiy bilet» + «Xatolarim».<br>
      <b>4–10-haftalar:</b> instruktor bilan amaliyot (40–50 soat haydash), avtodrom mashqlari alohida.<br>
      <b>9–10-haftalar:</b> kuniga 2–3 ta «Imtihon», xatosiz o‘tguncha.<br>
      <b>11-hafta:</b> yim.uz’da yozilish, nazariya va amaliyot.<br>
      <b>12-hafta:</b> Davlat xizmatlari markazida yoki my.gov.uz orqali guvohnoma olish.
    </div>` },
  { h: "📆 Amal qilish muddati", b: `
    <ul>
      <li>Guvohnoma <b>10 yilga</b> beriladi.</li>
      <li>Almashtirish — my.gov.uz yoki YHXB bo‘linmasida; tibbiy ma’lumotnoma muddati o‘tgan bo‘lsa — yangisi kerak.</li>
      <li>Muddati 1 yildan kam o‘tgan bo‘lsa — imtihonsiz almashtiriladi. 1 yildan ko‘p va haydamagan bo‘lsangiz — qayta imtihon tayinlanishi mumkin. Muddati o‘tgan guvohnoma bilan haydash — jarima.</li>
    </ul>` },
  { h: "🔗 Manbalar", b: `
    <ul class="gsrc">
      <li>gov.uz — «Haydovchilik guvohnomasini olish uchun imtihon topshirish»</li>
      <li>Kun.uz — «Как получить водительские права», 10.12.2025</li>
      <li>UzNews.uz — «Как получить водительские права в Узбекистане в 2026 году»</li>
      <li>Vazirlar Mahkamasining 31.05.2018 yildagi 408-son qarori (lex.uz)</li>
    </ul>
    <div class="hint">Bu ochiq manbalardan olingan ma’lumot, rasmiy maslahat emas. Rasmiy: yim.uz, my.gov.uz, gov.uz.</div>` },
  ]
}
};
