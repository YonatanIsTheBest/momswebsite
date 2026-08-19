// Variables to remember user choices
let userRegion = '';
let userLanguage = '';
let selectedEdition = 'he'; // Defaults to Hebrew book

// Translation Dictionary with Full Overviews & UI text
const translations = {
    en: {
        title: "Double Redemption",
        description: `
            <p>The sisters’ boundless love and devotion to one another and to their mother, as well as their profound faith in the Almighty, which gave them strength and support in a new and unfamiliar land, resonate deeply in the heart of everyone who opens this book. The heroines’ lives were far from easy, yet their story is told so compellingly that the book is impossible to put down, from the very first page to the last. The lives and destinies of those closest to them have a profound impact on Hana and Hagit, and we can almost physically feel an inner strength, a Jewish sense of identity, and a clear understanding of their purpose in this world being forged within these fragile young women, who will later become mature women and mothers. Passing through external changes and profound inner transformations, they face life’s trials with dignity and courage.</p>
            <p>The culmination of this story is the extraordinary account of transferring their mother’s remains from Belarus for reburial in the Land of Israel. It takes the sisters years to complete this immensely difficult mission, yet they never give up or lose heart. Remarkably, the reader does not experience this event as tragic at all; on the contrary, it becomes a source of genuine inspiration and fills one with a powerful, life-affirming energy.</p>
            <p>In the book Double Geula (the word geula has deliberately been left untranslated by the publishers, since no single Russian word can fully convey the depth of the concept of “redemption”), the twin sisters sincerely and movingly share their understanding of how the Creator guides their destiny and the lives of those around them. This honest and touching story inspires and gives strength to overcome any of life’s hardships. Above all, however, Hana and Hagit speak of the immense value of gratitude to the Creator, blessed be He, and remind us how important it is to appreciate everything that happens in our lives.</p>
        `,
        editionLabel: "Select Edition:",
        heEdition: "Hebrew",
        ruEdition: "Russian",
        priceLabel: "Price (incl. shipping)",
        cartBtn: "Add to Cart"
    },
    he: {
        title: "הגאולה הכפולה",
        description: `
            <p>אהבתן ומסירותן האינסופיות של האחיות זו לזו ולאימן, ואמונתן בבורא עולם שנתנה להן אחיזה בארץ לא מוכרת – כל אלה יוצרות בלב הקוראות הזדהות עם התאומות. חייהן לא היו קלים, אבל סיפורן כתוב בצורה מרתקת כל כך שהספר נקרא בנשימה אחת, מן העמוד הראשון ועד האחרון. גורלם של אנשים שונים הקרובים לחנה ולחגית משפיע עליהן השפעה עמוקה, והקוראות חשות באופן מוחשי ופיזי כיצד מתגבשים בתוך נערות שבריריות – ולאחר מכן נשים בוגרות, אימהות – חוסן פנימי, מודעות עצמית יהודית והבנה של דרכן בעולם הזה. הן עוברות תהפוכות חיצוניות ופנימיות, ובסופו של דבר מצליחות לעמוד בכל הניסיונות בעוז ובנחישות.</p>
            <p>שיאו של מה שקורה לגיבורות הספר אפשר ככל הנראה לראות בסיפור העתקת מקום קבורתה של אימן מבלרוס לישראל. שנים אחדות עוברות עד שהן מצליחות להשלים את המשימה המורכבת הזאת, אבל הן לא מוותרות ולא מתייאשות. באופן מפתיע, אירוע זה אינו נתפס כעצוב בעיני הקוראות; אדרבה, יש בו כדי לעורר השראה ולהטעין את הקוראות באנרגיה חיובית.</p>
            <p>בספר הגאולה הכפולה האחיות התאומות חולקות עם הקוראות את הבנתן של השפעת הבורא על גורלן ועל גורל של אנשים אחרים בסביבתן, ועושות זאת באופן שובה לב. סיפור חייהן, המסופר בכנות ובצורה חיה ומרגשת, מעורר בקוראות השראה, מעצים אותן ומעניק להן כוחות להתמודדות עם אתגרי החיים. וחשוב מכול – חנה וחגית מעלות על נס את ערך ההודיה לקדוש ברוך הוא ואת החשיבות של הכרת הטוב על כל הדברים שקורים בחיינו</p>
        `,
        editionLabel: "בחר מהדורה:",
        heEdition: "עברית",
        ruEdition: "רוסית",
        priceLabel: "מחיר (כולל משלוח)",
        cartBtn: "הוסף לעגלה"
    },
    ru: {
        title: "Двойная геула",
        description: `
            <p>Бесконечная любовь и преданность сестёр друг другу и своей маме, а также их глубокая вера во Всевышнего, подарившая им опору на новой, незнакомой земле, — всё это находит живой отклик в сердце каждого, открывающего книгу. Жизнь героинь не была простой, но эта история написана настолько захватывающе, что читается на одном дыхании, от первой и до последней страницы. Судьбы близких людей оказывают на Хану и Хагит глубокое влияние, и мы буквально физически ощущаем, как внутри этих хрупких девушек — а в будущем зрелых женщин и матерей — выковываются внутренний стержень, еврейское самосознание и ясное понимание своего предназначения в этом мире. Проходя через внешние перемены и глубокие внутренние трансформации, они с честью и мужеством выдерживают жизненные испытания.</p>
            <p>Кульминацией этой истории становится невероятный сюжет о переносе захоронения их мамы из Беларуси на Землю Израиля. У сестёр уходят годы на то, чтобы завершить эту сложнейшую миссию, но они не сдаются и не опускают руки. Удивительно, но это событие совершенно не воспринимается читателем как трагическое; напротив, оно дарит подлинное вдохновение и заряжает мощной созидательной энергией.</p>
            <p>В книге «Двойная геула» (слово «геула» сознательно оставлено издательством без перевода, так как ни одно русское слово не способно полностью передать всю глубину понятия "избавление") сёстры-близнецы искренне и проникновенно делятся своим осознанием того, как Творец направляет их судьбу и жизни окружающих людей. Эта честная, трогательная история вдохновляет и даёт силы для преодоления любых жизненных невзгод. Но главное — Хана и Хагит говорят о великой ценности благодарности Творцу, Благословен Он, и напоминают о том, как важно уметь ценить всё, что происходит в нашей жизни.</p>
        `,
        editionLabel: "Выберите издание:",
        heEdition: "Иврит",
        ruEdition: "Русский",
        priceLabel: "Цена (включая доставку)",
        cartBtn: "В корзину"
    }
};

// Controls the Edition Toggle Buttons
function selectEdition(edition) {
    selectedEdition = edition;
    // Remove highlight from both buttons
    document.getElementById('btn-he').classList.remove('active');
    document.getElementById('btn-ru').classList.remove('active');
    // Add highlight to the clicked button
    document.getElementById('btn-' + edition).classList.add('active');
}

// When user clicks Israel or USA
function setRegion(region) {
    userRegion = region;
    
    if (region === 'Israel') {
        document.getElementById('final-price').innerText = '80 ₪';
        document.getElementById('final-subtext').innerText = 'Total for Israel orders';
    } else if (region === 'USA') {
        document.getElementById('final-price').innerText = '$40';
        document.getElementById('final-subtext').innerText = 'Total for USA orders';
    }

    const stepLocation = document.getElementById('step-location');
    const stepLanguage = document.getElementById('step-language');
    
    stepLocation.style.opacity = '0';
    setTimeout(() => {
        stepLocation.classList.remove('active');
        stepLanguage.classList.add('active');
        setTimeout(() => { stepLanguage.style.opacity = '1'; }, 50);
    }, 400); 
}

// When user clicks a language
function setLanguage(language) {
    userLanguage = language;
    
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'he' ? 'rtl' : 'ltr';

    // Translate all UI text based on language choice
    document.getElementById('book-title').innerText = translations[language].title;
    document.getElementById('desc-placeholder').innerHTML = translations[language].description;
    
    // Translate Edition UI
    document.getElementById('edition-label').innerText = translations[language].editionLabel;
    document.getElementById('btn-he').innerText = translations[language].heEdition;
    document.getElementById('btn-ru').innerText = translations[language].ruEdition;
    
    document.getElementById('price-label').innerText = translations[language].priceLabel;
    document.getElementById('add-cart-btn').innerText = translations[language].cartBtn;

    const splashScreen = document.getElementById('splash-screen');
    splashScreen.style.opacity = '0';
    setTimeout(() => {
        splashScreen.style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
    }, 500);
}

// Swaps the main large picture when a small thumbnail is clicked
function changeImage(src) {
    document.getElementById('hero-img').src = src;
}