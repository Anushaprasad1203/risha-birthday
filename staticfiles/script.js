function revealLetter() {
    var letter = document.getElementById("letterBox");

    letter.style.display = "block";

    setTimeout(function() {
        letter.style.opacity = "1";
        letter.style.transform = "translateY(0)";
    }, 50);

    launchConfetti();
}
/* ---------- FLOWERS ---------- */
const flowerContainer = document.querySelector('.flowers');

function createFlower() {
    const flower = document.createElement('span');
    flower.innerHTML = "🌸";
    flower.style.left = Math.random() * 100 + "vw";
    flower.style.fontSize = (Math.random() * 15 + 15) + "px";
    flower.style.animationDuration = (Math.random() * 6 + 6) + "s";
    flowerContainer.appendChild(flower);

    setTimeout(() => {
        flower.remove();
    }, 10000);
}

setInterval(createFlower, 1500);

/* ---------- CONFETTI ---------- */
function launchConfetti() {
    for (let i = 0; i < 100; i++) {
        let confetti = document.createElement("div");
        confetti.className = "confetti";
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.backgroundColor = getRandomColor();
        confetti.style.animationDuration = (Math.random() * 3 + 2) + "s";
        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 4000);
    }
}

function getRandomColor() {
    const colors = ["#ff9bb3", "#ffd6e0", "#fff5f8", "#ff7fa5"];
    return colors[Math.floor(Math.random() * colors.length)];
}

/* ---------- PAGE TRANSITION ---------- */
document.addEventListener("DOMContentLoaded", function() {

    document.body.style.opacity = "0";
    document.body.style.transition = "opacity 0.8s ease";

    setTimeout(function() {
        document.body.style.opacity = "1";
    }, 100);

    const links = document.querySelectorAll("a");

    links.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const target = this.href;

            document.body.style.opacity = "0";

            setTimeout(function() {
                window.location.href = target;
            }, 600);
        });
    });

});
document.querySelectorAll('.gallery img').forEach(img => {
    img.addEventListener('click', function() {
        const overlay = document.createElement('div');
        overlay.style.position = 'fixed';
        overlay.style.top = 0;
        overlay.style.left = 0;
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.background = 'rgba(0,0,0,0.8)';
        overlay.style.display = 'flex';
        overlay.style.alignItems = 'center';
        overlay.style.justifyContent = 'center';
        overlay.style.zIndex = 9999;

        const bigImg = document.createElement('img');
        bigImg.src = this.src;
        bigImg.style.maxWidth = '80%';
        bigImg.style.borderRadius = '20px';

        overlay.appendChild(bigImg);
        document.body.appendChild(overlay);

        overlay.addEventListener('click', function() {
            overlay.remove();
        });
    });
});
