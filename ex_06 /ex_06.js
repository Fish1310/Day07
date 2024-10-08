const robot = document.getElementById("robot");
const speechBubble = document.getElementById("speech-bubble");
const screenText = document.getElementById("screen-text");
const inputField = document.getElementById("robot-input");
const eyeLeftIris = document.querySelector(".eye-left-iris");
const eyeRightIris = document.querySelector(".eye-right-iris");

let eyeClickCount = 0;

function showTemporaryMessage(element, message, duration) {
    element.textContent = message;
    setTimeout(() => {
        element.textContent = "Hello !";
    }, duration);
}

robot.addEventListener("click", () => {
    showTemporaryMessage(speechBubble, "Ouch, that hurts!", 2000);
});

robot.addEventListener("mousemove", (event) => {
    const rect = robot.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    screenText.textContent = `X: ${Math.floor(x)}, Y: ${Math.floor(y)}`;
});

inputField.addEventListener("input", () => {
    showTemporaryMessage(screenText, "Don't worry, I'll take care of it!", 2000);
});

function changeEyeColor() {
    const randomColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    eyeLeftIris.style.fill = randomColor();
    eyeRightIris.style.fill = randomColor();
}

eyeRightIris.addEventListener("click", () => {
    eyeClickCount++;
    if (eyeClickCount >= 7) {
        changeEyeColor();
        eyeClickCount = 0;
    }
});

eyeLeftIris.addEventListener("click", () => {
    eyeClickCount++;
    if (eyeClickCount >= 7) {
        changeEyeColor();
        eyeClickCount = 0;
    }
});
