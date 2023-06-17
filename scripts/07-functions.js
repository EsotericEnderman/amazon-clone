/**
 * @returns {void}
 */
const f = () => {
	console.log("Hello");
	console.log(2 + 2);
};

f();

f();

f();

/**
 * @param {unknown} x
 * @returns {void}
 */
const g = (x) => {
	console.log(x);
};

g(4);

const calculateTax = (cost, taxPercent = 0.1) => console.log(cost * taxPercent);

calculateTax(2000, 0.2);
calculateTax(5000);

/**
 * @param {string | undefined} name
 * @returns {void}
 */
const greet = (name) => console.log(name ? `Hello, ${name}!` : "Hi there!");

greet("Slqmy");
greet("Simon");
greet("rolyPolyVole");
greet("John Pork");
// @ts-ignore
greet();

/**
 * @param {number} celsius
 * @returns {number}
 */
const convertToFahrenheit = (celsius) => celsius * (9 / 5) + 32;

/**
 * @param {number} fahrenheit
 * @returns {number}
 */
const convertToCelsius = (fahrenheit) => (fahrenheit - 32) * (5 / 9);

/**
 * @param {number} degrees
 * @param {string} unit
 * @returns {string}
 */
const convertTemperature = (degrees, unit) =>
	unit.toUpperCase() === "C"
		? `${convertToFahrenheit(degrees)}F`
		: `${convertToCelsius(degrees)}C`;

console.log(convertTemperature(0, "C"));

const func = (parameter = "default") => console.log(parameter);

func(); // => "default";
func(undefined); // => "default";

func(null); // => "null";
