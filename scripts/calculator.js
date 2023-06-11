/* exported updateCalculation */
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
