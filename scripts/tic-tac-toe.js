/* eslint-disable no-use-before-define */
/* eslint-disable func-style */
let gameBoard = ["", "", "", "", "", "", "", "", ""];
const gameBoardElement = document.querySelector("div.js-board-container");

let computerPiece, playerPiece;

function renderGameBoard() {
	gameBoardElement.innerHTML = "";
	gameBoard.forEach((move) => {
		if (!move) {
			gameBoardElement.innerHTML += `
      <div class="board-element">
				<img
					class="grey-square"
					alt="Grey Square"
					src="images/grey-square.png" />
			</div>
      `;
		} else if (move === "x") {
			gameBoardElement.innerHTML += `
      <div class="board-element">
				<img
					class="grey-square"
					alt="Grey Square"
					src="images/grey-square.png" />

          <div class="move">
            <img alt="X" src="images/cross.png" class="move-icon">
          </div>
			</div>
      `;
		} else if (move === "o") {
			gameBoardElement.innerHTML += `
      <div class="board-element">
				<img
					class="grey-square"
					alt="Grey Square"
					src="images/grey-square.png" />

          <div class="move">
            <img alt="O" src="images/circle.png" class="move-icon">
          </div>
			</div>
      `;
		}
	});

	const greySquareImages = document.querySelectorAll("img.grey-square");

	greySquareImages.forEach((element, index) =>
		element.addEventListener("click", () => {
			if (gameStatus.innerHTML === "Your move" && !gameBoard[index]) {
				gameBoard.splice(index, 1, playerPiece);
				renderGameBoard();

				const status = checkGameStatus();

				if (!status) playComputerMove();
			}
		}),
	);
}

function pickRandomMove() {
	const filteredGameBoard = gameBoard
		.map((move, index) => ({
			move,
			index,
		}))
		.filter((move) => !move.move);

	return filteredGameBoard[Math.floor(Math.random() * filteredGameBoard.length)]
		.index;
}

function playMove(index, move) {
	gameBoard[index] = move;
	renderGameBoard();
}

const gameStatus = document.querySelector("p.js-game-status");

function playComputerMove() {
	gameStatus.innerHTML = "Computer's move";

	setTimeout(() => {
		const moveIndex = pickRandomMove();
		playMove(moveIndex, computerPiece);

		const status = checkGameStatus();

		if (!status) gameStatus.innerHTML = "Your move";
	}, Math.random() * 2000 + 500);
}

const startGameButton = document.querySelector("button.js-start-game-button");

function checkGameStatus() {
	let status;

	gameBoard.forEach((move, index) => {
		if (
			move &&
			// Horizontal row check.
			((index % 3 === 0 &&
				gameBoard[index + 1] === move &&
				gameBoard[index + 2] === move) ||
				// Vertical row check.
				(gameBoard[index + 3] === move && gameBoard[index + 6] === move) ||
				// Diagonal up to down check.
				(move === gameBoard[0] &&
					move === gameBoard[4] &&
					move === gameBoard[8]) ||
				// Diagonal down to up check.
				(move === gameBoard[2] &&
					move === gameBoard[4] &&
					move === gameBoard[6]))
		) {
			status = `${move === playerPiece ? "You win!" : "You lose!"}`;
		}
	});

	if (!status && !gameBoard.includes("")) status = "Tie";

	if (status) {
		startGameButton.innerHTML = "Reset Game";
		gameStatus.innerHTML = status;
	}

	return status;
}

const difficultySelection = document.querySelector(
	"select.js-difficult-selector",
);

startGameButton.addEventListener("click", () => {
	if (
		startGameButton.innerHTML === "End Game" ||
		startGameButton.innerHTML === "Reset Game"
	) {
		gameBoard = ["", "", "", "", "", "", "", "", ""];
		renderGameBoard();

		startGameButton.classList.remove("end-game-button", "js-end-game-button");
		startGameButton.classList.add("start-game-button", "js-start-game-button");

		startGameButton.innerHTML = "Start Game";
		gameStatus.innerHTML = "";
	} else if (
		!gameStatus.innerHTML &&
		// @ts-ignore
		difficultySelection.value !== "Select Difficulty"
	) {
		startGameButton.classList.remove(
			"start-game-button",
			"js-start-game-button",
		);

		startGameButton.classList.add("end-game-button", "js-end-game-button");

		startGameButton.innerHTML = "End Game";

		gameBoard = ["", "", "", "", "", "", "", "", ""];
		renderGameBoard();

		const firstMove = Math.random() > 0.5 ? "player" : "computer";

		if (firstMove === "computer") {
			computerPiece = "x";
			playerPiece = "o";
		} else {
			computerPiece = "o";
			playerPiece = "x";
		}

		if (firstMove === "computer") {
			playComputerMove();
		} else {
			gameStatus.innerHTML = "Your move";
		}
	}
});
