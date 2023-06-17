// @ts-nocheck
// ! Note: Logical operators have a lower priority than comparison operators and math operators.

// eslint-disable-next-line prefer-const
let score = JSON.parse(localStorage.getItem("score")) ?? {
	wins: 0,
	losses: 0,
	draws: 0,
};

const updateScoreElement = () => {
	document.querySelector(
		"p.js-score",
	).innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Draws: ${score.draws}`;
};

/**
 * @returns {"rock" | "paper" | "scissors"}
 */
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
const playGame = (playerMove) => {
	const computerMove = pickComputerMove();

	const result =
		computerMove === playerMove
			? "Draw"
			: (computerMove === "rock" && playerMove === "scissors") ||
			  (computerMove === "paper" && playerMove === "rock") ||
			  (computerMove === "scissors" && playerMove === "paper")
			? "You lose"
			: "You win";

	result === "You win"
		? score.wins++
		: result === "You lose"
		? score.losses++
		: score.draws++;

	localStorage.setItem("score", JSON.stringify(score));

	updateScoreElement();

	document.querySelector("p.js-result").innerHTML = `${result}.`;
	document.querySelector(
		"p.js-moves-chosen",
	).innerHTML = `You - ${playerMove} &#183; ${computerMove} - Computer`;
};

const resetScoreButton = document.querySelector("button.js-reset-score-button");
resetScoreButton.addEventListener("click", () => {
	score = {wins: 0, losses: 0, draws: 0};
	updateScoreElement();
	localStorage.removeItem("score");
});

document
	.querySelectorAll("button.js-playgame-button")
	.forEach((button) =>
		button.addEventListener("click", () =>
			playGame(button.innerHTML.toLowerCase().trim()),
		),
	);
