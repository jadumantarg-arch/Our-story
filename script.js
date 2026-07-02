// ===============================
// PASSWORD
// ===============================

const password = "03072024";

function unlockWebsite() {

    const input = document.getElementById("password").value;
    const error = document.getElementById("error");

    if (input === password) {

        document.getElementById("password-page").style.display = "none";

        const loader = document.getElementById("loader");
        loader.style.display = "flex";

        setTimeout(() => {

            loader.style.display = "none";
            document.getElementById("website").style.display = "block";

            updateCounter();

        },3000);

    }

    else{

        error.innerHTML = "❌ Wrong Password";

        error.style.color = "#ff4d6d";

    }

}



// ===============================
// SCROLL
// ===============================

function goToStory(){

document.getElementById("story").scrollIntoView({

behavior:"smooth"

});

}



// ===============================
// DAY COUNTER
// ===============================

function updateCounter(){

const start = new Date("2024-07-03");

const today = new Date();

const diff = today - start;

const days = Math.floor(diff/(1000*60*60*24));

document.getElementById("days").innerHTML = days;

}



// ===============================
// MUSIC
// ===============================

const musicButton = document.getElementById("musicButton");

const music = document.getElementById("music");

let playing = false;

if(musicButton){

musicButton.onclick = ()=>{

if(!playing){

music.play();

musicButton.innerHTML="⏸️";

playing=true;

}

else{

music.pause();

musicButton.innerHTML="🎵";

playing=false;

}

};

}
// ===============================
// FADE-IN ANIMATION
// ===============================

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0px)";

}

});

},{
threshold:0.15
});

document.querySelectorAll("section").forEach(section=>{

section.style.opacity="0";
section.style.transform="translateY(60px)";
section.style.transition="all .8s ease";

observer.observe(section);

});



// ===============================
// MEMORY CARDS ANIMATION
// ===============================

document.querySelectorAll(".memory").forEach((card,index)=>{

card.style.opacity="0";
card.style.transform="translateX(-40px)";
card.style.transition=".7s";

setTimeout(()=>{

card.style.opacity="1";
card.style.transform="translateX(0px)";

},500+(index*350));

});



// ===============================
// PHOTO HOVER EFFECT
// ===============================

document.querySelectorAll(".photo-card img").forEach(photo=>{

photo.addEventListener("mouseenter",()=>{

photo.style.transform="scale(1.08)";

});

photo.addEventListener("mouseleave",()=>{

photo.style.transform="scale(1)";

});

});



// ===============================
// LETTER EFFECT
// ===============================

const letter=document.querySelector(".letter-card");

if(letter){

letter.style.opacity="0";
letter.style.transform="translateY(60px)";

window.addEventListener("scroll",()=>{

const top=letter.getBoundingClientRect().top;

if(top<window.innerHeight-120){

letter.style.opacity="1";
letter.style.transform="translateY(0px)";
letter.style.transition="1s";

}

});

}
// ==========================================
// LIVE DAY COUNTER
// ==========================================

function updateCounter() {

    const startDate = new Date("2024-07-03T00:00:00");
    const today = new Date();

    const diff = today - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    const counter = document.getElementById("days");

    if(counter){

        counter.innerHTML = days + "<br><span>Days ❤️</span>";

    }

}

updateCounter();



// ==========================================
// BUTTON RIPPLE EFFECT
// ==========================================

document.querySelectorAll("button").forEach(btn=>{

btn.addEventListener("click",()=>{

btn.style.transform="scale(.95)";

setTimeout(()=>{

btn.style.transform="scale(1)";

},150);

});

});



// ==========================================
// FLOATING HEARTS
// ==========================================

function createHeart(){

const heart=document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="fixed";
heart.style.left=Math.random()*100+"vw";
heart.style.top="100vh";
heart.style.fontSize=(20+Math.random()*20)+"px";
heart.style.opacity=".8";
heart.style.pointerEvents="none";
heart.style.zIndex="9999";
heart.style.transition="transform 6s linear, opacity 6s linear";

document.body.appendChild(heart);

setTimeout(()=>{

heart.style.transform="translateY(-120vh)";
heart.style.opacity="0";

},50);

setTimeout(()=>{

heart.remove();

},6000);

}

setInterval(createHeart,2500);



// ==========================================
// PHOTO CLICK EFFECT
// ==========================================

document.querySelectorAll(".photo-card img").forEach(photo=>{

photo.addEventListener("click",()=>{

photo.style.transform="scale(1.12) rotate(2deg)";

setTimeout(()=>{

photo.style.transform="scale(1) rotate(0deg)";

},350);

});

});



// ==========================================
// PAGE LOADED
// ==========================================

window.addEventListener("load",()=>{

console.log("❤️ Welcome Juii ❤️");

});
// Future Text Animation

const futureMessages=[
"Loading our next chapter...",
"More late night talks...",
"More random laughs...",
"More memories...",
"Forever? ❤️"
];

let futureIndex=0;

setInterval(()=>{

const text=document.getElementById("futureText");

if(text){

futureIndex=(futureIndex+1)%futureMessages.length;

text.innerHTML=futureMessages[futureIndex];

}

},2500);
// ===========================
// CHAPTER 09
// ===========================

const reasons=[

"Because one reply changed my entire life broooo ilyyyssmmm .",

"Because youre perfect for me. 😭❤️",

"Because your sunnnn naaaaa makes my whole day better.",

"Because even from miles away, you still feel like home ,",

"Because you always make me smile.",

"Because you're the first person I want to tell everything to.",

"Because you're the only fish in my sea. 🤍",

"Because every memory with you feels special.",

"Because you make ordinary days unforgettable.",

"Because... you're you. ❤️"

];

let reason=0;

setInterval(()=>{

const title=document.getElementById("reasonTitle");
const text=document.getElementById("reasonText");

if(title && text){

reason=(reason+1)%reasons.length;

title.innerHTML="❤️ Reason #"+(reason+1);

text.innerHTML=reasons[reason];

}

},3500);
// =========================
// FINAL CHAPTER
// =========================

const endingLines=[

"Before you leave... There's something I still want to say.",

"Broo ikk sometimes you feel very frustrated cause hnn me kaam hi ese krta hu ikk lekin fir bhi bro tu usi time aakar mere sath rhti hh soo brooo illyyyysssmmmm yrr .",

"You became the one jiske bina kuch possible hi ni hh.",

"You became my safe place.",

"You became my favourite person.",

"And if I had another chance...",

"I'd still text you...",

"'You also born in November??' ❤️",

"Because it gave me you.",

"I love you so much, Juii. 🤍",

"BROOOOOOOOO ILLLYYYYSSSMMMM YRRRRRRR"

];

let endingIndex=0;

setInterval(()=>{

const ending=document.getElementById("endingText");

if(ending){

ending.innerHTML=endingLines[endingIndex];

endingIndex++;

if(endingIndex>=endingLines.length){

endingIndex=0;

}

}

},4000);
const lastButton=document.getElementById("lastButton");

if(lastButton){

lastButton.onclick=()=>{

const final=document.getElementById("finalLine");

const lines=[

"03 July 2024 ❤️",

"One simple message...",

"Changed my whole life.",

"Thank you for replying.",

"Thank you for staying.",

"I'll always be grateful for us.",

"I love you so much, Juii. 🤍",

"Happy 2 Years Of Our First Message ❤️"

];

let i=0;

lastButton.style.display="none";

const interval=setInterval(()=>{

final.innerHTML=lines[i];

i++;

if(i>=lines.length){

clearInterval(interval);

}

},2500);

};

}