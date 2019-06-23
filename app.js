// Variables
const sounds = document.querySelectorAll(".sound");
const pads = document.querySelectorAll(".pads div");
const visual = document.querySelectorAll(".visual");
const header = document.querySelector('h1');
const colors = ["#60d394", "#d36060", "#c060d3", "#d3d160", "#6860d3", "#60b2d3"];

// Sounds
pads.forEach((pad, index) => {
    pad.addEventListener('click', function () {
        // Resets sound time
        sounds[index].currentTime = 0;
        sounds[index].play();

        // Header Animation
        header.style.animation = "flash 1s linear infinite alternate";
        header.style.color = colors[index];

        createBubbles(index);
    });

    // Bubble Animation
    const createBubbles = (index) => {
        const bubble = document.createElement("div");
        visual[0].appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = "jump 1s ease";
        bubble.addEventListener("animationend", function () {
            visual[0].removeChild(this);
        })
    }
});
