const stats = JSON.parse(localStorage.getItem("stats")) ?? {
	wins: 0,
	losses: 0,
};

// @ts-ignore
const playGame = () => {
	const result = Math.random() > 0.5 ? "You win!" : "You lose!";

	result === "You win!" ? stats.wins++ : stats.losses++;

	localStorage.setItem("stats", JSON.stringify(stats));

	console.log(result);
	console.log("Wins: ", stats.wins, "Losses: ", stats.losses);
};

document
	.querySelectorAll("button.play-game-button")
	// @ts-ignore
	.forEach((button) => button.addEventListener("click", playGame));
