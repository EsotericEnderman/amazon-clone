/* eslint-disable prefer-template */
/* eslint-disable no-unused-expressions */
// @ts-nocheck
String(25);

// ! NOTE: Type coercion: If a string only contains a number and you - * / then it will be converted into a number.

console.log("25" - 5);

// => 255. Adding works differently.
console.log("25" + 5);
// Don't do math using strings.

// You don't have to type 'window' at the front.
window.document;
window.console;
window.console.log("window");
window.alert("Popup!");

// One solution: When you click the button: 1. Add a class that has different styles using `.classList`.

const button = document.querySelector("button.js-subscribe-button");

const subscribe = () => {
	if (button.innerText === "Subscribe") {
		button.innerHTML = "Subscribed";
		button.classList.add("is-subscribed");
	} else {
		button.innerHTML = "Subscribe";
		button.classList.remove("is-subscribed");
	}
};

button.addEventListener("click", subscribe);

const inputElement = document.querySelector("input.js-cost-input");

const calculateTotal = () => {
	/**
	 * @constant {InputElement} inputElement
	 */

	let cost = Number(inputElement.value) * 100;

	const output = document.querySelector("p.js-total-cost");

	if (cost < 0) {
		output.classList.add("error");
		output.innerHTML = "Error: cost cannot be less than $0";
	}

	// "25" + 10 = 2510
	// Type coercion
	else {
		if (cost < 4000) cost += 1000;

		output.classList.remove("error");
		output.innerHTML = `$${cost / 100}`;
	}
};

/**
 *
 * @param {KeyboardEvent} event
 * @returns {void}
 */
const handleCostKeydown = (event) => event.key === "Enter" && calculateTotal();

inputElement.addEventListener("keydown", handleCostKeydown);

const calculateButton = document.querySelector("button.js-calculate-button");

calculateButton.addEventListener("click", calculateTotal);

// ! NOTE: clicks, keydowns = events.
// ! NOTE: onclick, onkeydown = event listener.

const jsButton = document.querySelector("button.js-button");

console.log(jsButton.classList.contains("js-button"));

const buttonToggle = (buttonName) => {
	const switchButton = document.querySelector(
		`button.js-switch-button-${buttonName}`,
	);

	const buttons = document.querySelectorAll(`button.switch-button`);

	const buttonClass = "switch-button-on";

	for (const togglableButton of buttons) {
		if (!togglableButton.classList.contains(`js-switch-button-${buttonName}`)) {
			togglableButton.classList.remove(buttonClass);
		}
	}

	if (switchButton.classList.contains(buttonClass)) {
		switchButton.classList.remove(buttonClass);
	} else switchButton.classList.add(buttonClass);
};

document
	.querySelectorAll("button.js-switch-button")
	.forEach((switchButton) =>
		switchButton.addEventListener("click", () =>
			buttonToggle(switchButton.innerHTML.toLowerCase().trim()),
		),
	);
