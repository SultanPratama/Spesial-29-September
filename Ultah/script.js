// 1. Animasi Mengetik (Typewriter)
const fullText = "Selamat Ulang Tahun, Novaaa!";
const typewriterEl = document.getElementById("typewriter");
const cursorEl = document.getElementById("cursor");
const subtitleEl = document.getElementById("subtitle");
const miniHeartsEl = document.getElementById("miniHearts");
const celebrateBtnEl = document.getElementById("celebrateBtn");

let charIndex = 0;

function typeWriter() {
    if (charIndex < fullText.length) {
        typewriterEl.textContent += fullText.charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, 90);
    } else {
        cursorEl.style.display = "none";
        subtitleEl.classList.add("show");
        miniHeartsEl.classList.add("show");
        celebrateBtnEl.classList.add("show");
    }
}

// Jalankan saat halaman dibuka
window.addEventListener("DOMContentLoaded", () => {
    setTimeout(typeWriter, 500);
    createFloatingParticles();
});

// 2. Pembuat Partikel Melayang (Kupu-kupu, Hati, Bunga)
function createFloatingParticles() {
    const container = document.getElementById("particleContainer");
    const items = ["🦋", "💕", "🌸", "✨", "❤️", "🌺"];

    setInterval(() => {
        const particle = document.createElement("div");
        particle.classList.add("floating-item");
        particle.textContent = items[Math.floor(Math.random() * items.length)];
        
        particle.style.left = Math.random() * 100 + "vw";
        particle.style.animationDuration = (Math.random() * 4 + 6) + "s";
        particle.style.fontSize = (Math.random() * 1 + 1) + "rem";

        container.appendChild(particle);

        setTimeout(() => {
            particle.remove();
        }, 10000);
    }, 600);
}