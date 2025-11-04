// Game
class Game {
  constructor() {
    this.players = []; // array of objetcs in this case players
    this.currentAssets = [];
    this.currentBoard = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];
  }
  addPlayers(player) {
    this.players.push(player); // add players
  }
  start() {
    this.players.forEach((player) => {
      player.chooseAsset(this.currentAssets); // way to connect the game to the players and their asset choice
    });
  }
}
//Player
class Player {
  constructor(name) {
    this.name = name;
    this.asset = null;
  }
  chooseAsset(currentAssets) {
    let asset;

    if (currentAssets.length === 0) {
      return "choose";
    } else if (currentAssets[0] === "X") {
      this.asset = "O";
    } else {
      this.asset = "X";
    }

    console.log(`Player ${this.name} has choosen ${this.asset}!!`);
  }
}
//Matrix 3x3
const board = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
let newGame;
let player1;
let player2;
let currenTurn = 0;

const startButton = document.getElementById("startButton");
const gameContainer = document.getElementById("gameContainer");
const boardContainer = document.getElementById("boardContainer");
const playerInfo = document.getElementById("playerInfo");
const resetButton = document.getElementById("resetButton");

const setupModal = document.getElementById("setupModal");
const assetModal = document.getElementById("assetModal");
const resultModal = document.getElementById("resultModal");

startButton.addEventListener("click", () => {
  setupModal.style.display = "flex";
});

document.getElementById("continueButton").addEventListener("click", () => {
  const p1Name =
    document.getElementById("player1Input").value.trim() || "Player 1";
  const p2Name =
    document.getElementById("player2Input").value.trim() || "Player 2";

  player1 = new Player(p1Name);
  player2 = new Player(p2Name);

  setupModal.style.display = "none";

  document.getElementById(
    "assetQuestion"
  ).textContent = `${player1.name}, X or O?`;
  assetModal.style.display = "flex";
});

document.querySelectorAll(".assetChoice").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const asset = e.target.dataset.asset;
    newGame = new Game();
    newGame.addPlayers(player1);
    newGame.addPlayers(player2);
    newGame.currentAssets.push(asset);
    player1.asset = asset;
    player2.asset = asset === "X" ? "O" : "X";

    assetModal.style.display = "none";
    startButton.style.display = "none";
    gameContainer.style.display = "flex";
    initializeBoard();
    updatePlayerInfo();
  });
});

function initializeBoard() {
  boardContainer.innerHTML = "";
  currentTurn = 0;
  newGame.currentBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      const cell = document.createElement("div");
      cell.className = "cell";
      cell.dataset.row = i;
      cell.dataset.col = j;
      boardContainer.appendChild(cell);

      cell.addEventListener("click", (event) => {
        handleClick(event);
      });
    }
  }
}

function updatePlayerInfo() {
  const player = currentTurn === 0 ? player1 : player2;
  playerInfo.textContent = `${player.name}'s Turn (${player.asset})`;
}

function handleClick(event) {
  const cell = event.target;
  if (cell.classList.contains("filled")) return;

  const row = Number(cell.dataset.row);
  const col = Number(cell.dataset.col);
  const player = currentTurn === 0 ? player1 : player2;

  if (newGame.currentBoard[row][col] === null) {
    newGame.currentBoard[row][col] = player.asset;
    cell.textContent = player.asset;
    cell.classList.add("filled");

    if (hasWon(player.asset, newGame.currentBoard)) {
      setTimeout(() => {
        document.getElementById(
          "resultMessage"
        ).textContent = `${player.name} Wins!`;
        resultModal.style.display = "flex";
      }, 300);
      return;
    }

    if (isBoardFull(newGame.currentBoard)) {
      setTimeout(() => {
        document.getElementById("resultMessage").textContent = "It's a Draw!";
        resultModal.style.display = "flex";
      }, 300);
      return;
    }

    currentTurn = currentTurn === 0 ? 1 : 0;
    updatePlayerInfo();
  }
}

function hasWon(player, currentBoard) {
  for (let i = 0; i < currentBoard.length; i++) {
    if (currentBoard[i].every((cell) => cell === player)) return true;
  }

  for (let i = 0; i < currentBoard[0].length; i++) {
    if (currentBoard.every((row) => row[i] === player)) return true;
  }

  if (currentBoard.every((row, i) => row[i] === player)) return true;

  if (
    currentBoard.every((row, i) => row[currentBoard.length - i - 1] === player)
  )
    return true;

  return false;
}

function isBoardFull(board) {
  return board.every((row) => row.every((cell) => cell !== null));
}

resetButton.addEventListener("click", () => {
  initializeBoard();
  updatePlayerInfo();
});

document.getElementById("playAgainButton").addEventListener("click", () => {
  resultModal.style.display = "none";
  initializeBoard();
  updatePlayerInfo();
});

//Check methods:
// .some
// .find
// .every
// .has
// .filter
