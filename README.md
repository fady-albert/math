# Math Rush

Math Rush is a fast-paced math game built with HTML, CSS, and JavaScript.

The goal is simple: solve as many math problems as possible before the timer runs out. As you progress through the levels, the questions become more challenging.

## Links

* [Repository](https://github.com/fady-albert/math)
* [Live Demo](https://fady-albert.github.io/math/)

## Features

* Randomly generated math questions
* Countdown timer
* 3 lives per game
* Score system
* Combo system
* Best score saved with `localStorage`
* Multiple difficulty levels
* Level unlocking system
* Dark / Light mode
* Saves game settings locally
* Responsive design
* Animated answer feedback
* Clean and minimal UI
* Google Material Symbols icons

## Levels

| Level | Difficulty | Operations                                      |
| ----- | ---------- | ----------------------------------------------- |
| 1     | Easy       | Addition, Subtraction                           |
| 2     | Normal     | Addition, Subtraction, Multiplication           |
| 3     | Hard       | Addition, Subtraction, Multiplication, Division |
| 4     | Expert     | Larger numbers + all operations                 |
| 5     | Master     | Extreme difficulty                              |

Each level increases the difficulty by changing the number range, operations, and available time.

## How to Play

1. Open Math Rush.
2. Click **PLAY**.
3. Select an unlocked level.
4. Solve the displayed math problem.
5. Choose the correct answer from the four options.
6. Correct answers increase your score.
7. Wrong answers cost one life.
8. Build combos to earn more points.
9. Try to get the highest score before the timer reaches zero.

## Built With

* **HTML5** — Page structure
* **CSS3** — Styling, animations, and responsive design
* **JavaScript** — Game logic and interactions
* **LocalStorage** — Saving settings, best score, and unlocked levels
* **Google Material Symbols** — Icons

## Project Structure

```text
Math-Rush/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## Download

You can download the project directly from GitHub.

1. Open the [repository](https://github.com/fady-albert/math).
2. Click the **Code** button.
3. Select **Download ZIP**.
4. Extract the ZIP file.
5. Open `index.html` in your browser.

You can also clone the repository:

```bash
git clone https://github.com/fady-albert/math.git
cd math
```

No installation or additional dependencies are required.

## Main JavaScript Systems

### Question Generator

The game generates random math questions depending on the selected level.

### Answer Generator

For every question, the game creates:

* 1 correct answer
* 3 different wrong answers

The answers are shuffled before being displayed.

### Score System

Correct answers increase the score, while combos can provide additional points.

### Life System

The player starts with 3 lives. A wrong answer removes one life.

### Level System

Levels are progressively unlocked by reaching the required score.

### Timer

Each level has a different amount of time. The timer decreases while the player is solving questions.

### LocalStorage

The game uses `localStorage` to save:

* Best score
* Unlocked levels
* Dark / Light mode

This means the player's progress and settings remain available after refreshing the page.

## Dark Mode

Math Rush includes a dark and light mode.

The selected mode is saved automatically using `localStorage`, so the game keeps the user's preference after refreshing the page.

## Responsive Design

The interface is designed to work on:

* Desktop
* Laptop
* Tablet
* Mobile

## Future Improvements

Possible future updates:

* Sound effects
* Background music
* Global leaderboard
* More themes
* More game modes
* More advanced math questions
* Statistics page
* Achievements
* Different time modes
* Multiplayer mode

## Author

**Fady Albert**

Built with HTML, CSS, and JavaScript.

## License

This project is open source and available for learning and personal use.
