// =======================================
// SEMPRE QUI ❤️
// Creato da Ziyad esclusivamente per Chiara
// =======================================

// Aspetta che la pagina sia pronta
window.addEventListener("load", () => {

    const splash = document.getElementById("splash");
    const app = document.getElementById("app");

    // Mostra la Home dopo 3 secondi
    setTimeout(() => {

        splash.style.display = "none";
        app.style.display = "block";

    }, 3000);

});

// =======================================
// APRI INSTAGRAM
// =======================================

const talk = document.getElementById("talk");

if (talk) {

    talk.addEventListener("click", () => {

        window.open(
            "https://instagram.com/ziyadrbx59",
            "_blank"
        );

    });

}

// =======================================
// ANIMAZIONE CLICK CARD
// =======================================

document.querySelectorAll(".card").forEach(card => {

    card.addEventListener("click", () => {

        card.animate([
            { transform: "scale(1)" },
            { transform: "scale(.96)" },
            { transform: "scale(1)" }
        ], {
            duration: 180
        });

    });

});

// =======================================
// FRASE DEL GIORNO
// =======================================

const quotes = [

    "Sono fiero di te ❤️",

    "Respira. Un passo alla volta.",

    "Non sei sola.",

    "Ti voglio un bene infinito.",

    "Anche oggi hai fatto del tuo meglio.",

    "Sei molto più forte di quanto credi.",

    "Ogni giorno insieme è un regalo.",

    "Ti voglio bene ❤️"

];

const randomQuote =
quotes[Math.floor(Math.random() * quotes.length)];

console.log(randomQuote);
