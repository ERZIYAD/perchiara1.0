// ==========================================
// SEMPRE QUI ❤️
// Creato da Ziyad esclusivamente per Chiara
// ==========================================

// Configurazione
const APP = {
    instagram: "https://instagram.com/ziyadrbx59",
    relationshipDate: new Date("2026-07-19T22:34:00")
};

// Avvio
window.addEventListener("DOMContentLoaded", () => {
    showSplash();
    connectButtons();
    updateLoveTimer();
    setInterval(updateLoveTimer, 1000);
    showDailyQuote();
});

// Splash Screen
function showSplash() {

    const splash = document.getElementById("splash");
    const app = document.getElementById("app");

    if (!splash || !app) return;

    app.style.display = "none";

    setTimeout(() => {

        splash.style.opacity = "0";

        setTimeout(() => {

            splash.style.display = "none";
            app.style.display = "block";

        }, 800);

    }, 3000);

}

// Pulsante Instagram
function connectButtons() {

    const talk = document.getElementById("talk");

    if (!talk) return;

    talk.addEventListener("click", () => {

        window.open(APP.instagram, "_blank");

    });

}
// ==========================================
// CONTATORE DEL TEMPO INSIEME ❤️
// ==========================================

function updateLoveTimer() {

    const timer = document.getElementById("loveTimer");

    if (!timer) return;

    const now = new Date();

    const diff = now - APP.relationshipDate;

    if (diff < 0) {

        timer.innerHTML = "Il nostro viaggio sta per iniziare ❤️";

        return;

    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (diff / (1000 * 60 * 60)) % 24
    );

    const minutes = Math.floor(
        (diff / (1000 * 60)) % 60
    );

    const seconds = Math.floor(
        (diff / 1000) % 60
    );

    timer.innerHTML =
    `${days} giorni<br>${hours}h ${minutes}m ${seconds}s`;

}

// ==========================================
// FRASE DEL GIORNO ❤️
// ==========================================

const quotes = [

    "Respira. Io sono sempre con te. ❤️",

    "Sei più forte di quanto credi.",

    "Non sei sola.",

    "Un passo alla volta.",

    "Ogni giorno insieme è un regalo.",

    "Sono fiero di te.",

    "Il tuo sorriso illumina il mio mondo.",

    "Ti voglio un bene infinito.",

    "Anche oggi ce la farai ❤️"

];

function showDailyQuote() {

    const quote = document.getElementById("dailyQuote");

    if (!quote) return;

    const random =
        quotes[Math.floor(Math.random() * quotes.length)];

    quote.innerHTML = random;

}
// ==========================================
// CUORI ANIMATI ❤️
// ==========================================

function startHearts() {

    setInterval(createHeart, 1200);

}

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "floating-heart";

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize = (18 + Math.random() * 20) + "px";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 9000);

}

startHearts();

// ==========================================
// EFFETTO CLICK DELLE CARD
// ==========================================

document.querySelectorAll(".card").forEach(card => {

    card.addEventListener("click", () => {

        card.animate([

            {
                transform: "scale(1)"
            },

            {
                transform: "scale(.97)"
            },

            {
                transform: "scale(1)"
            }

        ], {

            duration: 180

        });

    });

});

// ==========================================
// RESPIRAZIONE GUIDATA 🌬️
// ==========================================

const circle = document.getElementById("circle");

if (circle) {

    let grow = true;

    setInterval(() => {

        if (grow) {

            circle.style.transform = "scale(1.3)";

        } else {

            circle.style.transform = "scale(.8)";

        }

        grow = !grow;

    }, 4000);

}
// ==========================================
// DIARIO ❤️
// ==========================================

const diary = document.getElementById("diary");

const saveDiary = document.getElementById("saveDiary");

if (diary) {

    diary.value = localStorage.getItem("semprequi_diary") || "";

}

if (saveDiary) {

    saveDiary.addEventListener("click", () => {

        localStorage.setItem(
            "semprequi_diary",
            diary.value
        );

        saveDiary.innerHTML = "✅ Salvato!";

        setTimeout(() => {

            saveDiary.innerHTML = "💾 Salva";

        }, 2000);

    });

}

// ==========================================
// EFFETTO COMPARSA
// ==========================================

const app = document.getElementById("app");

if (app) {

    app.animate([

        {
            opacity: 0,
            transform: "translateY(20px)"
        },

        {
            opacity: 1,
            transform: "translateY(0)"
        }

    ], {

        duration: 700,
        fill: "forwards"

    });

}

// ==========================================
// MESSAGGIO DI BENVENUTO
// ==========================================

console.log("Sempre Qui ❤️ avviato con successo");
