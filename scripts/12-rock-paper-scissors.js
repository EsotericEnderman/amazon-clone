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
