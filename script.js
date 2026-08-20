const ORDER_WEBHOOK_URL_IL = "https://formspree.io/f/xbgrwoay";
const ORDER_WEBHOOK_URL_US = "https://formspree.io/f/xkjwkvly";

// State Variables (Leave these as they are)
let userRegion = '';
let userLanguage = '';
let selectedEdition = 'he'; 
let selectedPayment = 'Cash';

const translations = {
    en: {
        title: "Double Redemption",
        description: `<p>The sisters’ boundless love and devotion to one another and to their mother, as well as their profound faith in the Almighty, which gave them strength and support in a new and unfamiliar land, resonate deeply in the heart of everyone who opens this book. The heroines’ lives were far from easy, yet their story is told so compellingly that the book is impossible to put down, from the very first page to the last. The lives and destinies of those closest to them have a profound impact on Hana and Hagit, and we can almost physically feel an inner strength, a Jewish sense of identity, and a clear understanding of their purpose in this world being forged within these fragile young women, who will later become mature women and mothers. Passing through external changes and profound inner transformations, they face life’s trials with dignity and courage.</p>
        <p>The culmination of this story is the extraordinary account of transferring their mother’s remains from Belarus for reburial in the Land of Israel. It takes the sisters years to complete this immensely difficult mission, yet they never give up or lose heart. Remarkably, the reader does not experience this event as tragic at all; on the contrary, it becomes a source of genuine inspiration and fills one with a powerful, life-affirming energy.</p>
        <p>In the book Double Geula (the word geula has deliberately been left untranslated by the publishers, since no single Russian word can fully convey the depth of the concept of “redemption”), the twin sisters sincerely and movingly share their understanding of how the Creator guides their destiny and the lives of those around them. This honest and touching story inspires and gives strength to overcome any of life’s hardships. Above all, however, Hana and Hagit speak of the immense value of gratitude to the Creator, blessed be He, and remind us how important it is to appreciate everything that happens in our lives.</p>`,
        locTitle: "Welcome",
        locSub: "Where are you ordering from?",
        btnIl: "Israel",
        btnUs: "United States",
        editionLabel: "Select Edition:",
        heEdition: "Hebrew",
        ruEdition: "Russian",
        priceLabel: "Price",
        namePlaceholder: "Full Name",
        paymentLabel: "Payment Method:",
        cash: "Cash",
        cartBtn: "Place Order",
        alertSuccess: "Thank you! Your order has been placed.",
        alertError: "Please enter your full name before ordering.",
        // Payment Instructions
        cashInst: "Pay in cash upon delivery/pickup.",
        bitInst: "Send <strong>80 ₪</strong> via Bit to: <br><strong style='font-size:1.2em;'>+972 54-538-4137</strong>",
        zelleInst: "Send <strong>$40</strong> via Zelle to: <br><strong style='font-size:1.2em;'>+1 518 466 8854</strong><br>(Lika Yakovis)"
    },
    he: {
        title: "הגאולה הכפולה",
        description: `<p>אהבתן ומסירותן האינסופיות של האחיות זו לזו ולאימן, ואמונתן בבורא עולם שנתנה להן אחיזה בארץ לא מוכרת – כל אלה יוצרות בלב הקוראות הזדהות עם התאומות. חייהן לא היו קלים, אבל סיפורן כתוב בצורה מרתקת כל כך שהספר נקרא בנשימה אחת, מן העמוד הראשון ועד האחרון. גורלם של אנשים שונים הקרובים לחנה ולחגית משפיע עליהן השפעה עמוקה, והקוראות חשות באופן מוחשי ופיזי כיצד מתגבשים בתוך נערות שבריריות – ולאחר מכן נשים בוגרות, אימהות – חוסן פנימי, מודעות עצמית יהודית והבנה של דרכן בעולם הזה. הן עוברות תהפוכות חיצוניות ופנימיות, ובסופו של דבר מצליחות לעמוד בכל הניסיונות בעוז ובנחישות.</p>
        <p>שיאו של מה שקורה לגיבורות הספר אפשר ככל הנראה לראות בסיפור העתקת מקום קבורתה של אימן מבלרוס לישראל. שנים אחדות עוברות עד שהן מצליחות להשלים את המשימה המורכבת הזאת, אבל הן לא מוותרות ולא מתייאשות. באופן מפתיע, אירוע זה אינו נתפס כעצוב בעיני הקוראות; אדרבה, יש בו כדי לעורר השראה ולהטעין את הקוראות באנרגיה חיובית.</p>
        <p>בספר הגאולה הכפולה האחיות התאומות חולקות עם הקוראות את הבנתן של השפעת הבורא על גורלן ועל גורל של אנשים אחרים בסביבתן, ועושות זאת באופן שובה לב. סיפור חייהן, המסופר בכנות ובצורה חיה ומרגשת, מעורר בקוראות השראה, מעצים אותן ומעניק להן כוחות להתמודדות עם אתגרי החיים. וחשוב מכול – חנה וחגית מעלות על נס את ערך ההודיה לקדוש ברוך הוא ואת החשיבות של הכרת הטוב על כל הדברים שקורים בחיינו</p>`,
        locTitle: "ברוכים הבאים",
        locSub: "מאיפה אתם מזמינים?",
        btnIl: "ישראל",
        btnUs: "ארצות הברית",
        editionLabel: "בחר מהדורה:",
        heEdition: "עברית",
        ruEdition: "רוסית",
        priceLabel: "מחיר",
        namePlaceholder: "שם מלא",
        paymentLabel: "אמצעי תשלום:",
        cash: "מזומן",
        cartBtn: "בצע הזמנה",
        alertSuccess: "תודה! ההזמנה שלך התקבלה בהצלחה.",
        alertError: "אנא הכנס את שמך המלא לפני ביצוע ההזמנה.",
        // Payment Instructions - Added <span dir="ltr"> to fix number formatting
        cashInst: "התשלום במזומן בעת המסירה/האיסוף.",
        bitInst: "העבר <strong>80 ₪</strong> בביט למספר: <br><strong style='font-size:1.2em;'><span dir='ltr'>+972 54-538-4137</span></strong>",
        zelleInst: "העבר <strong>$40</strong> ב-Zelle למספר: <br><strong style='font-size:1.2em;'><span dir='ltr'>+1 518 466 8854</span></strong><br>(Lika Yakovis)"
    },
    ru: {
        title: "Двойная геула",
        description: `<p>Бесконечная любовь и преданность сестёр друг другу и своей маме, а также их глубокая вера во Всевышнего, подарившая им опору на новой, незнакомой земле, — всё это находит живой отклик в сердце каждого, открывающего книгу. Жизнь героинь не была простой, но эта история написана настолько захватывающе, что читается на одном дыхании, от первой и до последней страницы. Судьбы близких людей оказывают на Хану и Хагит глубокое влияние, и мы буквально физически ощущаем, как внутри этих хрупких девушек — а в будущем зрелых женщин и матерей — выковываются внутренний стержень, еврейское самосознание и ясное понимание своего предназначения в этом мире. Проходя через внешние перемены и глубокие внутренние трансформации, они с честью и мужеством выдерживают жизненные испытания.</p>
        <p>Кульминацией этой истории становится невероятный сюжет о переносе захоронения их мамы из Беларуси на Землю Израиля. У сестёр уходят годы на то, чтобы завершить эту сложнейшую миссию, но они не сдаются и не опускают руки. Удивительно, но это событие совершенно не воспринимается читателем как трагическое; напротив, оно дарит подлинное вдохновение и заряжает мощной созидательной энергией.</p>
        <p>В книге «Двойная геула» (слово «геула» сознательно оставлено издательством без перевода, так как ни одно русское слово не способно полностью передать всю глубину понятия "избавление") сёстры-близнецы искренне и проникновенно делятся своим осознанием того, как Творец направляет их судьбу и жизни окружающих людей. Эта честная, трогательная история вдохновляет и даёт силы для преодоления любых жизненных невзгод. Но главное — Хана и Хагит говорят о великой ценности благодарности Творцу, Благословен Он, и напоминают о том, как важно уметь ценить всё, что происходит в нашей жизни.</p>`,
        locTitle: "Добро пожаловать",
        locSub: "Откуда вы заказываете?",
        btnIl: "Израиль",
        btnUs: "США",
        editionLabel: "Выберите издание:",
        heEdition: "Иврит",
        ruEdition: "Русский",
        priceLabel: "Цена",
        namePlaceholder: "Полное Имя",
        paymentLabel: "Способ оплаты:",
        cash: "Наличные",
        cartBtn: "Оформить заказ",
        alertSuccess: "Спасибо! Ваш заказ принят.",
        alertError: "Пожалуйста, введите свое полное имя перед заказом.",
        // Payment Instructions
        cashInst: "Оплата наличными при доставке/самовывозе.",
        bitInst: "Отправьте <strong>80 ₪</strong> через Bit на номер: <br><strong style='font-size:1.2em;'>+972 54-538-4137</strong>",
        zelleInst: "Отправьте <strong>$40</strong> через Zelle на номер: <br><strong style='font-size:1.2em;'>+1 518 466 8854</strong><br>(Lika Yakovis)"
    }
};

// STEP 1: Select Language
function setLanguage(language) {
    userLanguage = language;
    const langObj = translations[language];
    
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'he' ? 'rtl' : 'ltr';

    document.getElementById('splash-loc-title').innerText = langObj.locTitle;
    document.getElementById('splash-loc-sub').innerText = langObj.locSub;
    document.getElementById('splash-btn-il').innerText = langObj.btnIl;
    document.getElementById('splash-btn-us').innerText = langObj.btnUs;

    const stepLang = document.getElementById('step-language');
    const stepLoc = document.getElementById('step-location');
    
    stepLang.style.opacity = '0';
    setTimeout(() => {
        stepLang.classList.remove('active');
        stepLoc.classList.add('active');
        setTimeout(() => { stepLoc.style.opacity = '1'; }, 50);
    }, 400); 
}

// STEP 2: Select Region
function setRegion(region) {
    userRegion = region;
    const langObj = translations[userLanguage];
    
    if (region === 'Israel') {
        document.getElementById('final-price').innerText = '80 ₪';
        document.getElementById('pay-digital').innerText = 'Bit';
    } else if (region === 'USA') {
        document.getElementById('final-price').innerText = '$40';
        document.getElementById('pay-digital').innerText = 'Zelle';
    }

    // Translate Main Site UI
    document.getElementById('book-title').innerText = langObj.title;
    document.getElementById('desc-placeholder').innerHTML = langObj.description;
    document.getElementById('edition-label').innerText = langObj.editionLabel;
    document.getElementById('btn-he').innerText = langObj.heEdition;
    document.getElementById('btn-ru').innerText = langObj.ruEdition;
    document.getElementById('price-label').innerText = langObj.priceLabel;
    document.getElementById('buyer-name').placeholder = langObj.namePlaceholder;
    document.getElementById('payment-label').innerText = langObj.paymentLabel;
    document.getElementById('pay-cash').innerText = langObj.cash;
    document.getElementById('add-cart-btn').innerText = langObj.cartBtn;

    // Call the function to display the translated payment instructions
    updatePaymentInstructions();

    const splashScreen = document.getElementById('splash-screen');
    splashScreen.style.opacity = '0';
    setTimeout(() => {
        splashScreen.style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
    }, 500);
}

// Button toggles
function selectEdition(edition) {
    selectedEdition = edition;
    document.getElementById('btn-he').classList.remove('active');
    document.getElementById('btn-ru').classList.remove('active');
    document.getElementById('btn-' + edition).classList.add('active');
}

function selectPayment(method) {
    selectedPayment = method;
    document.getElementById('pay-cash').classList.remove('active');
    document.getElementById('pay-digital').classList.remove('active');
    
    if (method === 'Cash') document.getElementById('pay-cash').classList.add('active');
    if (method === 'Digital') document.getElementById('pay-digital').classList.add('active');
    
    updatePaymentInstructions();
}

// Updates the instruction text box based on language, region, and payment choice
function updatePaymentInstructions() {
    const langObj = translations[userLanguage];
    const box = document.getElementById('payment-instructions');
    
    if (selectedPayment === 'Cash') {
        box.innerHTML = langObj.cashInst;
    } else if (selectedPayment === 'Digital' && userRegion === 'Israel') {
        box.innerHTML = langObj.bitInst;
    } else if (selectedPayment === 'Digital' && userRegion === 'USA') {
        box.innerHTML = langObj.zelleInst;
    }
}

// Image Gallery
function changeImage(src) {
    document.getElementById('hero-img').src = src;
}

// Form Submission via Email/Formspree
function submitOrder() {
    const buyerName = document.getElementById('buyer-name').value.trim();
    const langObj = translations[userLanguage];

    if (!buyerName) {
        alert(langObj.alertError);
        return;
    }

    const actualPaymentMethod = selectedPayment === 'Cash' ? 'Cash' : (userRegion === 'Israel' ? 'Bit' : 'Zelle');
    const actualEdition = selectedEdition === 'he' ? 'Hebrew' : 'Russian';

    // Decide which Formspree link to send the email to based on the region
    const targetUrl = userRegion === 'Israel' ? ORDER_WEBHOOK_URL_IL : ORDER_WEBHOOK_URL_US;

    // The data sent to your Email
    const payload = {
        Customer_Name: buyerName,
        Shipping_Region: userRegion,
        Book_Edition: actualEdition,
        Payment_Method: actualPaymentMethod
    };

    // Send it to the correct Formspree endpoint
    fetch(targetUrl, {
        method: 'POST',
        headers: { 
            'Accept': 'application/json',
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify(payload)
    })
    .then(response => {
        if (response.ok) {
            alert(langObj.alertSuccess);
            document.getElementById('buyer-name').value = '';
        } else {
            alert("There was an error sending the order. Please try again.");
        }
    })
    .catch(error => {
        console.error('Error sending order:', error);
        alert("There was a network error. Please check your connection.");
    });
}