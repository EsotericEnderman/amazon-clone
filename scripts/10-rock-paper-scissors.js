// ! Note: Logical operators have a lower priority than comparison operators and math operators.

const score = JSON.parse(localStorage.getItem("score")) ?? {
	wins: 0,
	losses: 0,
	ties: 0
};

const updateScoreElement = () => {
	document.querySelector("p.js-score").innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
};

/**
 * @returns {"rock" | "paper" | "scissors"}
 */
const pickComputerMove = () => {
	const randomNumber = Math.random();

	return randomNumber < 1 / 3 ? "rock" : randomNumber < 2 / 3 ? "paper" : "scissors";
};

/**
 * @param {"rock" | "paper" | "scissors"} playerMove
 * @returns {void}
 */
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

	result === "You win" ? score.wins++ : result === "You lose" ? score.losses++ : score.ties++;

	localStorage.setItem("score", JSON.stringify(score));

	updateScoreElement();

	document.querySelector("p.js-result").innerHTML = `${result}.`;
	document.querySelector("p.js-moves-chosen").innerHTML = `You <img alt="${playerMove[0].toUpperCase}${playerMove.slice(
		1
	)} Emoji" src="images/${playerMove}-emoji.png" class="move-icon" /><img alt="${
		computerMove[0].toUpperCase
	}${computerMove.slice(1)} Emoji" src="images/${computerMove}-emoji.png" class="move-icon" /> Computer`;
};
