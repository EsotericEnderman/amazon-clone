/* eslint-disable no-use-before-define */
/* eslint-disable func-style */
const timerElement = document.querySelector("p.js-time");

let timer = JSON.parse(localStorage.getItem("timer")) ?? 0;
let startTime = timer ? Date.now() - timer : null;

const numberFormat = new Intl.NumberFormat("en-GB", {minimumIntegerDigits: 3})
	.format;

updateTimerElement();

const buttonState = localStorage.getItem("buttonState");

const goButton = document.querySelector("button.js-go-button");
goButton.addEventListener("click", handleGoButtonClick);

let interval;

if (timer && buttonState !== "Go") handleGoButtonClick();

const resetButton = document.querySelector("button.js-reset-button");

resetButton.addEventListener("click", () => {
	clearInterval(interval);
	interval = null;

	startTime = null;
	timer = 0;

	updateTimerElement();
});

function handleGoButtonClick() {
	if (goButton.innerHTML === "Go") {
		startTime = Date.now() - timer;

		interval = setInterval(updateTimerElement, 0);

		goButton.innerHTML = "Stop";
		localStorage.setItem("buttonState", "Stop");
	} else {
		clearInterval(interval);
		interval = null;

		goButton.innerHTML = "Go";
		localStorage.setItem("buttonState", "Go");
	}
}

function formatTime() {
	let ms = startTime ? Date.now() - startTime : 0;

	timer = ms;
	localStorage.setItem("timer", JSON.stringify(timer));

	let s = ms / 1000;
	ms = Math.floor(ms % 1000);
	let m = s / 60;
	s = Math.floor(s % 60);
	const h = Math.floor(m / 60);
	m = Math.floor(m % 60);

	return `${h ? `${h}h ` : ""}${m || h ? `${m}m ` : ""}${
		s || m || h ? `${s}s ` : ""
	}${numberFormat(ms)}ms`;
}

function updateTimerElement() {
	timerElement.innerHTML = formatTime();
}
