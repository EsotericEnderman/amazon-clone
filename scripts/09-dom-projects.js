/* eslint-disable no-use-before-define */
/* eslint-disable func-style */
// @ts-nocheck
/* eslint-disable no-unused-expressions */
String(25);

// ! NOTE: Type coercion: If a string only contains a number and you - * / then it will be converted into a number.

console.log("25" - 5);

// => 255. Adding works differently.
// eslint-disable-next-line prefer-template
console.log("25" + 5);
// Don't do math using strings.

// You don't have to type 'window' at the front.
window.document;
window.console;
window.console.log("window");
window.alert("Popup!");

const button = document.querySelector("button.js-subscribe-button");

function subscribe() {
	button.innerHTML =
		button.innerText === "Subscribe" ? "Subscribed" : "Subscribe";
}

button.addEventListener("click", subscribe);

function calculateTotal() {
	let cost = Number(inputElement.value) * 100;

	// "25" + 10 = 2510
	// Type coercion
	if (cost < 4000) cost += 1000;

	document.querySelector("p.js-total-cost").innerHTML = `$${cost / 100}`;
}

function handleCostKeydown(event) {
	event.key === "Enter" && calculateTotal();
}

const inputElement = document.querySelector("input.js-cost-input");
inputElement.addEventListener("keydown", handleCostKeydown);

// ! NOTE: clicks, keydowns = events.
// ! NOTE: onclick, onkeydown = event listener.

const calculateButton = document.querySelector("button.calculate-button");
calculateButton.addEventListener("click", () => calculateTotal());
