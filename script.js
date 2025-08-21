class TicTacToe {
  constructor() {
    this.cells = document.querySelectorAll(".cell");
    this.statusText = document.getElementById("statusText");
    this.restartBtn = document.getElementById("restartBtn");

    this.winConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    this.options = Array(9).fill("");
    this.currentPlayer = "X";
    this.running = false;

    this.initializeGame();
  }

  initializeGame() {
    this.cells.forEach((e, index) =>
      e.addEventListener("click", () => this.cellClicked(e, index))
    );
    this.restartBtn.addEventListener("click", () => this.restartGame());
    this.statusText.textContent = `${this.currentPlayer}'s turn`;
    this.running = true;
  }

  cellClicked(e, index) {
    if (this.options[index] !== "" || !this.running) return;

    this.updateCell(e, index);
    this.checkWinner();
  }

  updateCell(e, index) {
    this.options[index] = this.currentPlayer;
    e.textContent = this.currentPlayer;
  }

  changePlayer() {
    this.currentPlayer = this.currentPlayer === "X" ? "O" : "X";
    this.statusText.textContent = `${this.currentPlayer}'s turn`;
  }

  checkWinner() {
    let roundWon = false;

    for (let condition of this.winConditions) {
      const [a, b, c] = condition;
      if (
        this.options[a] &&
        this.options[a] === this.options[b] &&
        this.options[a] === this.options[c]
      ) {
        roundWon = true;
        break;
      }
    }

    if (roundWon) {
      this.statusText.textContent = `${this.currentPlayer} wins! 🎉`;
      this.running = false;
    } else if (!this.options.includes("")) {
      this.statusText.textContent = "Draw";
      this.running = false;
    } else {
      this.changePlayer();
    }
  }

  restartGame() {
    this.currentPlayer = "X";
    this.options.fill("");
    this.statusText.textContent = `${this.currentPlayer}'s turn`;
    this.cells.forEach((cell) => (cell.textContent = ""));
    this.running = true;
  }
}

new TicTacToe();
