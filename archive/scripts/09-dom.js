// @ts-nocheck
// document.body.innerHTML = "hello";
document.title = "Good job!";

console.log(document.title);

document.title = "Changed Title";

console.log(document.title);

console.log(document.body);

// Elements are converted into JS objects.

console.log(typeof document.body);

console.log(document.body.innerHTML);

// document.body.innerHTML = "Changed HTML";
// document.body.innerHTML = "<button>Good job!</button>";

console.log(document.querySelector("button").innerHTML);

// document.querySelector("button").innerHTML = "Changed Button";

// Usually ends with Element or "Elem".
const buttonElement = document.querySelector(".js-button");

console.log(buttonElement);

console.log(document.querySelector("button"));

const updateNameElement = () =>
	(document.querySelector("p.js-name-output").innerHTML = `Your name is: ${
		// @ts-ignore
		document.querySelector("input.js-name-input").value
	}`);

const handleNameInputKeyDown = (event) =>
	event.key === "Enter" && updateNameElement();

const textInputElement = document.querySelector("input.js-text-input");

textInputElement.addEventListener("keydown", (event) => {
	const text = document.querySelector("p.js-text-output").innerHTML;

	event.key.length === 1 &&
		(document.querySelector("p.js-text-output").innerHTML += event.key);

	event.key === "Backspace" &&
		(document.querySelector("p.js-text-output").innerHTML = text.slice(0, -1));
});

const _9bButton = document.querySelector("button.js-9b");
_9bButton.addEventListener("click", () => {
	document.querySelector("button.js-9b").innerHTML = "9b done!";
});

const tailsButton = document.querySelector("button.js-tails");
tailsButton.addEventListener("click", () => {
	document.querySelector("p.js-choice").innerHTML = "You chose: tails";
});

const headsButton = document.querySelector("button.js-heads");
headsButton.addEventListener("click", () => {
	document.querySelector("p.js-choice").innerHTML = "You chose: heads";
});

document
	.querySelector("input.js-name-input")
	.addEventListener("keydown", handleNameInputKeyDown);

document
	.querySelector("button.js-submit-button")
	.addEventListener("click", updateNameElement);
