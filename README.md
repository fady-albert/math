# Math Rush

Math Rush is a fast-paced math game built with **HTML, CSS, and JavaScript**.

The goal is simple: solve as many math problems as possible before the timer runs out. As you progress through the levels, the questions become more challenging.

The game features multiple difficulty levels, a scoring and combo system, lives, local progress saving, themes, animations, and an atmospheric **Horror / Bloody theme with background music**.

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
* Horror / Bloody theme
* Horror background music
* Looping background music
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
* **CSS3** — Styling, animations, themes, and responsive design
* **JavaScript** — Game logic, interactions, audio, and game systems
* **LocalStorage** — Saving settings, best score, and unlocked levels
* **Google Material Symbols** — Icons
* **HTML Audio API** — Background music

## Project Structure

```text
Math-Rush/
│
├── index.html
├── style.css
├── script.js
├── horror.mp3
└── README.md
```

## Game Systems

### Question Generator

The game generates random math questions depending on the selected level.

Different levels use different number ranges and mathematical operations to progressively increase the difficulty.

### Answer Generator

For every question, the game creates:

* 1 correct answer
* 3 different wrong answers

The answers are shuffled before being displayed.

### Score System

Correct answers increase the player's score.

Maintaining a combo allows the player to earn additional points and achieve higher scores.

### Life System

The player starts with **3 lives**.

A wrong answer removes one life. The game ends when all lives are lost or the timer reaches zero.

### Combo System

Consecutive correct answers build a combo.

Higher combos allow players to increase their score faster and reward accurate gameplay.

### Level System

Levels are progressively unlocked by reaching the required score.

Each level introduces more challenging questions and different gameplay conditions.

### Timer

Each level has a different amount of available time.

The timer continuously decreases while the player is solving questions, creating a fast-paced gameplay experience.

### LocalStorage

Math Rush uses `localStorage` to save important game data, including:

* Best score
* Unlocked levels
* Dark / Light mode
* Game settings

This allows the game to remember the player's progress and preferences after refreshing the page.

## Horror / Bloody Theme

Math Rush includes a dark **Horror / Bloody theme** designed to give the game a more intense atmosphere.

The theme uses:

* Deep black backgrounds
* Dark blood-red colors
* Red glow effects
* Horror-inspired UI styling
* Animated visual feedback
* Dark atmospheric elements

The theme is designed to make the traditional math game feel more intense and game-like.

## Background Music

The game includes atmospheric horror background music.

The music uses the JavaScript `Audio` API and is configured to loop continuously:

```javascript
const horror = new Audio('./horror.mp3');

horror.loop = true;
horror.volume = 0.5;
```

Because modern browsers can block automatic audio playback, the game may require user interaction before the music can start.

## Responsive Design

The interface is designed to work across different screen sizes:

* Desktop
* Laptop
* Tablet
* Mobile

The layout adapts to different screen sizes while keeping the gameplay accessible and readable.

## Animations

Math Rush uses CSS animations and JavaScript interactions to provide visual feedback during gameplay.

Animations are used for:

* Correct answers
* Wrong answers
* Score changes
* Combo feedback
* UI transitions
* Theme effects
* Horror atmosphere

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

## Future Improvements

Possible future updates:

* Global leaderboard
* More horror themes
* More game modes
* More advanced math questions
* Statistics page
* Achievements
* Different time modes
* Multiplayer mode
* More sound effects
* Custom background music
* Difficulty-based sound effects
* Additional visual effects

## Author

**Fady Albert**

Built with **HTML, CSS, and JavaScript**.

## License

This project is open source and available for learning and personal use.
