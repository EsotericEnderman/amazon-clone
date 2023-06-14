// ! Note: Logical operators have a lower priority than comparison operators and math operators.

// @ts-ignore
// eslint-disable-next-line prefer-const
let score = JSON.parse(localStorage.getItem("score")) ?? {
	wins: 0,
	losses: 0,
	ties: 0,
};

// @ts-ignore
const updateScoreElement = () => {
	document.querySelector(
		"p.js-score",
	).innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
};

updateScoreElement();

/**
 * @returns {"rock" | "paper" | "scissors"}
 */
// @ts-ignore
const pickComputerMove = () => {
	const randomNumber = Math.random();

	return randomNumber < 1 / 3
		? "rock"
		: randomNumber < 2 / 3
		? "paper"
		: "scissors";
};

/**
 * @param {"rock" | "paper" | "scissors"} playerMove
 * @returns {void}
 */
// eslint-disable-next-line no-unused-vars
// @ts-ignore
const playGame = (playerMove) => {
	const computerMove = pickComputerMove();

	const result =
		computerMove === playerMove
			? "Tie"
			: (computerMove === "rock" && playerMove === "scissors") ||
			  (computerMove === "paper" && playerMove === "rock") ||
			  (computerMove === "scissors" && playerMove === "paper")
			? "You lose"
			: "You win";

	result === "You win"
		? score.wins++
		: result === "You lose"
		? score.losses++
		: score.ties++;

	localStorage.setItem("score", JSON.stringify(score));

	updateScoreElement();

	document.querySelector("p.js-result").innerHTML = `${result}.`;
	document.querySelector("p.js-moves-chosen").innerHTML = `You <img alt="${
		playerMove[0].toUpperCase
	}${playerMove.slice(
		1,
	)} Emoji" src="images/${playerMove}-emoji.png" class="move-icon" /><img alt="${
		computerMove[0].toUpperCase
	}${computerMove.slice(
		1,
	)} Emoji" src="images/${computerMove}-emoji.png" class="move-icon" /> Computer`;
};

let intervalID;

// Personal preference if arrow function or not.
const autoPlay = () => {
	const autoPlayButton = document.querySelector("button.auto-play-button");

	if (autoPlayButton.innerHTML === "Auto Play") {
		autoPlayButton.innerHTML = "Stop Auto Play";

		intervalID = setInterval(() => playGame(pickComputerMove()), 1000);
	} else {
		// Stops a setInterval function.
		clearInterval(intervalID);

		autoPlayButton.innerHTML = "Auto Play";
	}
};

const resetScore = () => {
	score = {wins: 0, losses: 0, ties: 0};
	updateScoreElement();
	localStorage.removeItem("score");
};

// Better than onclick attribute.
const rockButton = document.querySelector("button.js-rock-button");

rockButton.addEventListener("click", () => playGame("rock"));

const paperButton = document.querySelector("button.js-paper-button");

paperButton.addEventListener("click", () => playGame("paper"));

const scissorsButton = document.querySelector("button.js-scissors-button");

scissorsButton.addEventListener("click", () => playGame("scissors"));

const confirmationContainerDiv = document.querySelector(
	"div.js-confirmation-container",
);

const resetScoreConfirmationPopup = () => {
	confirmationContainerDiv.innerHTML = `
			<p class="reset-score-confirmation-message">
				Are you sure you want to reset the score?
			</p>

			<button class="yes-button js-yes-button">Yes</button>
			<button class="no-button js-no-button">No</button>
			`;

	const yesButton = document.querySelector("button.js-yes-button");
	const noButton = document.querySelector("button.js-no-button");

	yesButton.addEventListener("click", () => {
		resetScore();
		confirmationContainerDiv.innerHTML = "";
	});

	noButton.addEventListener("click", () => {
		confirmationContainerDiv.innerHTML = "";
	});
};

const resetScoreButton = document.querySelector("button.js-reset-score-button");

resetScoreButton.addEventListener("click", resetScoreConfirmationPopup);

const autoPlayButton = document.querySelector("button.js-auto-play-button");

autoPlayButton.addEventListener("click", autoPlay);

document.addEventListener("keydown", (event) => {
	switch (event.key) {
		case "r":
			playGame("rock");
			break;
		case "p":
			playGame("paper");
			break;
		case "s":
			playGame("scissors");
			break;
		case "a":
			autoPlay();
			break;
		case "Backspace":
			resetScoreConfirmationPopup();
			break;
	}
});
