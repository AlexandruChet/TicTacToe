````markdown
# Tic-Tac-Toe

A simple implementation of the game **Tickets and Ticks** in pure JavaScript with the possibility of restarting the game.

## 📌 Description
- Players take turns going for **X** and **O**.
- After each move, a winner or a tie is checked.
- When you win, the message: `X wins! 🎉` or `O wins! 🎉`.
- If the field is completely filled and there is no winner — ``Draw'' is displayed.
- There is a button to restart the game.

## 🛠 Technologies
- HTML
- CSS
- JavaScript (ES6, classes)

## ⚙️ Game logic
- The playing field is presented as an array of 9 elements (`options`).
- Winning combinations are set in the `winConditions' array.
- After each click: 
- Checks if the cell is free. 
- The current player (**X** or **O**) is recorded. 
- Checks whether there is a winner or a tie. 
- If the game continues, the player changes.

## 🚀 Launch
1. Clone or download the project.
2. Insert the markup of the playing field into `index.html`:

```html
<div id="game"> 
<div class="cell"></div> 
<div class="cell"></div> 
<div class="cell"></div> 
<div class="cell"></div> 
<div class="cell"></div> 
<div class="cell"></div> 
<div class="cell"></div> 
<div class="cell"></div> 
<div class="cell"></div>
</div>
<p id="statusText"></p>
<button id="restartBtn">Restart</button>
<script src="script.js"></script>
````

3. Run in the browser.

## 🎮 Management

* Click on any cell to place the symbol of the current player.
* Press `Restart' to start a new game.

---

✨ Made in pure JavaScript without libraries and frameworks.

```
