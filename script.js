// Typing Effect
const text = "Thank you po na nagkakilalahay kita, Padayon lang kita sa aton journey kahit maiwat, Tani Makita ta ikaw soon...Amping permi po -Renz. 💙";
let i = 0;

function typeWriter() {
    if (i < text.length) {
        document.getElementById("message").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 40);
    }
}

typeWriter();

// Music Control
const music = document.getElementById("bgMusic");

function toggleMusic() {
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}

// Floating Hearts
function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 10 + "px";
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}

setInterval(createHeart, 500);