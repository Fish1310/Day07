const gameContainer = document.getElementById('game-container');
const scoreDisplay = document.getElementById('score');
const modeToggleButton = document.querySelector('.mode-toggle');

let score = 0;

function updateScore() {
    score += 1;
    scoreDisplay.textContent = `Score: ${score}`;
}

function createCircle() {
    const circle = document.createElement('div');
    circle.classList.add('circle');
    circle.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    circle.style.top = `${Math.random() * 80}vh`;
    circle.style.left = `${Math.random() * 90}vw`;

    circle.addEventListener('click', () => {
        updateScore();
        gameContainer.removeChild(circle);
    });

    gameContainer.appendChild(circle);
}

setInterval(createCircle, 1000);

modeToggleButton.addEventListener('click', (event) => {
    event.preventDefault();
    document.body.classList.toggle('light-mode');
    
    if (document.body.classList.contains('light-mode')) {
        modeToggleButton.textContent = "Dark Mode";
    } else {
        modeToggleButton.textContent = "White Mode";
    }
});
