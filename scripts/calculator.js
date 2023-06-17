/* exported updateCalculation */
// @ts-ignore
let calculation = localStorage.getItem("calculation") ?? "";

/**
 * @param {string} input
 * @returns {void}
 */
// eslint-disable-next-line no-unused-vars
const updateCalculation = (input) => {
	input !== undefined && (calculation += input);

	calculation
		? localStorage.setItem("calculation", calculation)
		: localStorage.removeItem("calculation");

	document.querySelector("p.js-calculation").innerHTML =
		calculation !== "" ? calculation : "Press any button to begin";
};

document
	.querySelectorAll("button.js-calculator-button")
	.forEach((button) =>
		button.addEventListener("click", () =>
			updateCalculation(button.innerHTML.trim()),
		),
	);

document
	.querySelectorAll("button.operator-button")
	.forEach((button) =>
		button.addEventListener("click", () =>
			updateCalculation(` ${button.innerHTML.trim()} `),
		),
	);

document.querySelector("button.equals-button").addEventListener("click", () => {
	// eslint-disable-next-line no-eval
	calculation = eval(calculation);
	// @ts-ignore
	updateCalculation();
});

document.querySelector("button.clear-button").addEventListener("click", () => {
	calculation = "";
	// @ts-ignore
	updateCalculation();
});
