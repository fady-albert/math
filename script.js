// import HTML data
const modeBtn = document.getElementById("mode");
const modeIcon = document.getElementById("modeIcon");
const home = document.getElementById("home");
const levels = document.getElementById("levels");
const game = document.getElementById("game");
const gameOver = document.getElementById("gameOver");
const playBtn = document.getElementById("playBtn");
const backBtn = document.getElementById("backBtn");
const levelsBtn = document.getElementById("levelsBtn");
const menuBtn = document.getElementById("menuBtn");
const question = document.getElementById("question");
const answers = document.getElementById("answers");
const scoreText = document.getElementById("score");
const timeText = document.getElementById("time");
const bestText = document.getElementById("best");
const homeBest = document.getElementById("homeBest");
const finalScore = document.getElementById("finalScore");
const finalBest = document.getElementById("finalBest");
const currentLevelText = document.getElementById("currentLevel");
const comboText = document.getElementById("combo");
const livesText = document.getElementById("lives");
const progressBar = document.getElementById("progressBar");
const levelButtons = document.querySelectorAll(".level-btn");

// js data
let score = 0;
let time = 60;
let lives = 3;
let combo = 0;
let currentLevel = 1;
let correctAnswer = 0;
let timer = null;
let questionLocked = false;
let highScore = Number(localStorage.getItem("mathRushHighScore")) || 0;
let unlockedLevel = Number(localStorage.getItem("mathRushUnlocked")) || 1;

if (unlockedLevel > 5) {
    unlockedLevel = 5;
}

homeBest.textContent = highScore;

// levels data
const levelData = {
    1: { time: 60, min: 1, max: 10, operations: ["+", "-"], range: 3 },
    2: { time: 55, min: 5, max: 20, operations: ["+", "-", "*"], range: 5 },
    3: { time: 50, min: 10, max: 50, operations: ["+", "-", "*", "/"], range: 8 },
    4: { time: 45, min: 20, max: 100, operations: ["+", "-", "*", "/"], range: 12 },
    5: { time: 40, min: 50, max: 200, operations: ["+", "-", "*", "/"], range: 15 }
};

// mode
const savedMode = localStorage.getItem("mode");

if (savedMode === "dark") {
    document.body.classList.add("dark");
    modeIcon.textContent = "dark_mode";
} else {
    modeIcon.textContent = "light_mode";
}

modeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const isDark = document.body.classList.contains("dark");
    localStorage.setItem("mode", isDark ? "dark" : "light");
    setTimeout(() => {
        modeIcon.textContent = isDark ? "dark_mode" : "light_mode";
    }, 500);
});

// game
playBtn.addEventListener("click", () => {
    home.classList.add("hidden");
    levels.classList.remove("hidden");
    updateLevels();
});

backBtn.addEventListener("click", () => {
    levels.classList.add("hidden");
    home.classList.remove("hidden");
});

// choose the level
levelButtons.forEach(button => {
    button.addEventListener("click", () => {
        const level = Number(button.dataset.level);

        if (level > unlockedLevel) {
            return;
        }

        currentLevel = level;
        startGame();
    });
});

// if user has the ability to play the level it will be opened
function updateLevels() {
    levelButtons.forEach(button => {
        const level = Number(button.dataset.level);
        const icon = button.querySelector(".level-icon");

        if (level <= unlockedLevel) {
            button.classList.remove("locked");
            icon.textContent = "play_arrow";
        } else {
            button.classList.add("locked");
            icon.textContent = "lock";
        }
    });
}

// strat the game
function startGame() {
    clearInterval(timer);

    score = 0;
    lives = 3;
    combo = 0;
    questionLocked = false;

    time = levelData[currentLevel].time;

    scoreText.textContent = score;
    timeText.textContent = time;
    bestText.textContent = highScore;
    currentLevelText.textContent = currentLevel;
    progressBar.style.width = "100%";

    updateLives();
    updateCombo();

    levels.classList.add("hidden");
    gameOver.classList.add("hidden");
    game.classList.remove("hidden");

    generateQuestion();

    timer = setInterval(updateTimer, 1000);
}

// set the timer to end the game
function updateTimer() {
    time--;

    timeText.textContent = time;

    const maxTime = levelData[currentLevel].time;
    const percentage = (time / maxTime) * 100;

    progressBar.style.width = `${percentage}%`;

    if (time <= 0) {
        endGame();
    }
}

// generate random questions
function generateQuestion() {
    questionLocked = false;

    const data = levelData[currentLevel];
    let a = randomNumber(data.min, data.max);
    let b = randomNumber(data.min, data.max);
    const operation = data.operations[Math.floor(Math.random() * data.operations.length)];

    if (operation === "/") {
        b = randomNumber(2, Math.min(15, data.max));
        correctAnswer = randomNumber(2, Math.min(15, data.max));
        a = correctAnswer * b;
    } else {
        correctAnswer = calculate(a, b, operation);

        if (operation === "-" && correctAnswer < 0) {
            [a, b] = [b, a];
            correctAnswer = calculate(a, b, operation);
        }
    }

    question.textContent = `${a} ${getSymbol(operation)} ${b} = ?`;
    generateAnswers();
}

// get the operation
function calculate(a, b, operation) {
    if (operation === "+") return a + b;
    if (operation === "-") return a - b;
    if (operation === "*") return a * b;
    if (operation === "/") return a / b;
}

function getSymbol(operation) {
    if (operation === "*") return "×";
    if (operation === "/") return "÷";
    return operation;
}

// get answers
function generateAnswers() {
    const options = [correctAnswer];
    const range = levelData[currentLevel].range;

    while (options.length < 4) {
        const difference = randomNumber(1, range);
        const direction = Math.random() < 0.5 ? -1 : 1;
        const wrongAnswer = correctAnswer + difference * direction;

        if (wrongAnswer >= 0 && wrongAnswer !== correctAnswer && !options.includes(wrongAnswer)) {
            options.push(wrongAnswer);
        }
    }

    shuffle(options);

    answers.innerHTML = "";

    options.forEach(answer => {
        const button = document.createElement("button");
        button.className = "answer";
        button.textContent = answer;

        button.addEventListener("click", () => {
            checkAnswer(button, answer);
        });

        answers.appendChild(button);
    });
}

function checkAnswer(button, answer) {
    if (questionLocked) {
        return;
    }

    questionLocked = true;

    if (answer === correctAnswer) {
        button.classList.add("correct");
        correct();
    } else {
        button.classList.add("wrong");
        wrong();

        document.querySelectorAll(".answer").forEach(btn => {
            if (Number(btn.textContent) === correctAnswer) {
                btn.classList.add("correct");
            }
        });
    }

    setTimeout(() => {
        if (lives <= 0) {
            endGame();
            return;
        }

        generateQuestion();
    }, 500);
}

function correct() {
    combo++;

    let points = 10;

    if (combo >= 3) {
        points += combo * 2;
    }

    score += points;
    scoreText.textContent = score;
    updateCombo();
}

function wrong() {
    lives--;
    combo = 0;
    updateLives();
    updateCombo();
}

function updateLives() {
    livesText.innerHTML = "";

    for (let i = 0; i < lives; i++) {
        const icon = document.createElement("span");
        icon.className = "material-symbols-rounded";
        icon.textContent = "favorite";
        livesText.appendChild(icon);
    }
}

function updateCombo() {
    comboText.innerHTML = `<span class="material-symbols-rounded">local_fire_department</span> x${combo}`;
}

function endGame() {
    clearInterval(timer);

    game.classList.add("hidden");
    gameOver.classList.remove("hidden");

    if (score > highScore) {
        highScore = score;
        localStorage.setItem("mathRushHighScore", highScore);
    }

    if (score >= 100 && currentLevel === unlockedLevel && unlockedLevel < 5) {
        unlockedLevel++;
        localStorage.setItem("mathRushUnlocked", unlockedLevel);
    }

    finalScore.textContent = score;
    finalBest.textContent = highScore;
    homeBest.textContent = highScore;
}

levelsBtn.addEventListener("click", () => {
    gameOver.classList.add("hidden");
    levels.classList.remove("hidden");
    updateLevels();
});

menuBtn.addEventListener("click", () => {
    gameOver.classList.add("hidden");
    home.classList.remove("hidden");
});

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

updateLevels();
updateLives();
updateCombo();