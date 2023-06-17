// ! Note: Logical operators have a lower priority than comparison operators and math operators.

// eslint-disable-next-line prefer-const
// @ts-ignore
let score = JSON.parse(localStorage.getItem("score")) ?? {
	wins: 0,
	losses: 0,
	draws: 0,
};

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
// @ts-ignore
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

	console.log(
		`You chose '${playerMove}', computer chose '${computerMove}'. ${result}.\nWins: ${score.wins}, Losses: ${score.losses}, Draws: ${score.draws}`,
	);
};

document.querySelectorAll("button.game-button").forEach((button) =>
	button.addEventListener("click", () =>
		// @ts-ignore
		playGame(button.innerHTML.toLowerCase()),
	),
);

// @ts-ignore
const resetScoreButton = document.querySelector("button.reset-score-button");
resetScoreButton.addEventListener("click", () => {
	score = {wins: 0, losses: 0, draws: 0};

	localStorage.removeItem("score");
});
