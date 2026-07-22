// ============================================
// SEMPRE QUI ❤️
// Creato da Ziyad esclusivamente per Chiara
// Versione 1.0
// ============================================

// -------------------------------
// CONFIGURAZIONE
// -------------------------------

const APP = {

    instagram: "https://instagram.com/ziyadrbx59",

    relationshipDate: new Date("2026-07-19T22:34:00")

};

// -------------------------------
// AVVIO APP
// -------------------------------

window.addEventListener("load", () => {

    startSplash();

    connectButtons();

    startLoveTimer();

    startFloatingHearts();

});

// -------------------------------
// SPLASH SCREEN
// -------------------------------

function startSplash(){

    const splash=document.getElementById("splash");

    const app=document.getElementById("app");

    if(!splash || !app) return;

    setTimeout(()=>{

        splash.style.opacity="0";

        setTimeout(()=>{

            splash.style.display="none";

            app.style.display="block";

        },800);

    },3000);

}

// -------------------------------
// COLLEGAMENTO PULSANTI
// -------------------------------

function connectButtons(){

    const talk=document.getElementById("talk");

    if(talk){

        talk.addEventListener("click",()=>{

            window.open(APP.instagram,"_blank");

        });

    }

}

// -------------------------------
// CONTATORE AMORE
// -------------------------------

function startLoveTimer(){

    updateLoveTimer();

    setInterval(updateLoveTimer,1000);

}

function updateLoveTimer(){

    const timer=document.getElementById("loveTimer");

    if(!timer) return;

    const now=new Date();

    const diff=now-APP.relationshipDate;

    if(diff<0){

        timer.innerHTML="Sta per iniziare ❤️";

        return;

    }

    const days=Math.floor(diff/86400000);

    const hours=Math.floor(diff/3600000)%24;

    const minutes=Math.floor(diff/60000)%60;

    const seconds=Math.floor(diff/1000)%60;

    timer.innerHTML=
    `${days} giorni<br>${hours}h ${minutes}m ${seconds}s`;

}
// ============================================
// CUORI CHE VOLANO ❤️
// ============================================

function startFloatingHearts(){

    setInterval(createHeart,900);

}

function createHeart(){

    const heart=document.createElement("div");

    heart.innerHTML="❤";

    heart.style.position="fixed";

    heart.style.left=Math.random()*100+"vw";

    heart.style.top="105vh";

    heart.style.fontSize=(18+Math.random()*20)+"px";

    heart.style.opacity=".18";

    heart.style.pointerEvents="none";

    heart.style.zIndex="999";

    heart.style.transition="transform 8s linear, opacity 8s";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.style.transform=
        `translateY(-120vh) rotate(${Math.random()*360}deg)`;

        heart.style.opacity="0";

    },50);

    setTimeout(()=>{

        heart.remove();

    },8500);

}

// ============================================
// FRASE DEL GIORNO
// ============================================

const dailyQuotes=[

"Respira. Ci sono sempre. ❤️",

"Anche oggi sono fiero di te.",

"Sei più forte di quanto pensi.",

"Non sei sola.",

"Ti voglio un bene infinito.",

"Un passo alla volta.",

"Ogni giorno insieme è un regalo.",

"Il tuo sorriso vale tantissimo.",

"Sei importante.",

"Grazie di esistere ❤️"

];

function showDailyQuote(){

    const random=

    dailyQuotes[
    Math.floor(
    Math.random()*dailyQuotes.length
    )
    ];

    const header=document.querySelector("header p");

    if(header){

        header.innerHTML=random;

    }

}

showDailyQuote();

// ============================================
// EFFETTO CLICK CARD
// ============================================

document.querySelectorAll(".card").forEach(card=>{

    card.addEventListener("click",()=>{

        card.animate([

            {
                transform:"scale(1)"
            },

            {
                transform:"scale(.96)"
            },

            {
                transform:"scale(1)"
            }

        ],{

            duration:170

        });

    });

});
// ============================================
// CUORI CHE VOLANO ❤️
// ============================================

function startFloatingHearts(){

    setInterval(createHeart,900);

}

function createHeart(){

    const heart=document.createElement("div");

    heart.innerHTML="❤";

    heart.style.position="fixed";

    heart.style.left=Math.random()*100+"vw";

    heart.style.top="105vh";

    heart.style.fontSize=(18+Math.random()*20)+"px";

    heart.style.opacity=".18";

    heart.style.pointerEvents="none";

    heart.style.zIndex="999";

    heart.style.transition="transform 8s linear, opacity 8s";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.style.transform=
        `translateY(-120vh) rotate(${Math.random()*360}deg)`;

        heart.style.opacity="0";

    },50);

    setTimeout(()=>{

        heart.remove();

    },8500);

}

// ============================================
// FRASE DEL GIORNO
// ============================================

const dailyQuotes=[

"Respira. Ci sono sempre. ❤️",

"Anche oggi sono fiero di te.",

"Sei più forte di quanto pensi.",

"Non sei sola.",

"Ti voglio un bene infinito.",

"Un passo alla volta.",

"Ogni giorno insieme è un regalo.",

"Il tuo sorriso vale tantissimo.",

"Sei importante.",

"Grazie di esistere ❤️"

];

function showDailyQuote(){

    const random=

    dailyQuotes[
    Math.floor(
    Math.random()*dailyQuotes.length
    )
    ];

    const header=document.querySelector("header p");

    if(header){

        header.innerHTML=random;

    }

}

showDailyQuote();

// ============================================
// EFFETTO CLICK CARD
// ============================================

document.querySelectorAll(".card").forEach(card=>{

    card.addEventListener("click",()=>{

        card.animate([

            {
                transform:"scale(1)"
            },

            {
                transform:"scale(.96)"
            },

            {
                transform:"scale(1)"
            }

        ],{

            duration:170

        });

    });

});
// ============================================
// REGISTRA SERVICE WORKER
// ============================================

if ("serviceWorker" in navigator) {

    window.addEventListener("load", () => {

        navigator.serviceWorker
            .register("./service-worker.js")
            .then(() => {

                console.log("Service Worker registrato!");

            })
            .catch(error => {

                console.log(error);

            });

    });

}
