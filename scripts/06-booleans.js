// @ts-nocheck
console.log(typeof true);

// eslint-disable-next-line yoda
console.log(3 > 5 - 5);
// Evaluates as 3 > (5 - 5) => true.

// Comparison operators have a lower priority than math operations.
// => false;

// eslint-disable-next-line eqeqeq
console.log(5 === "5.00", 5 == "5.00");

// eslint-disable-next-line yoda, no-constant-condition
if (3 > 5 - 5) console.log("Hello");
else console.log("Bye");

const age = 15;

if (age >= 16) {
	console.log("You can drive");
	console.log("Congrats");
} else if (age >= 14) {
	console.log("Almost there.");
} else {
	console.log("You can not drive");
}

// Or
// eslint-disable-next-line no-constant-binary-expression
console.log(true || false);

// Not
console.log(!true);

// eslint-disable-next-line no-constant-condition
if (0) console.log("truthy");

const cartQuantity = 5;

if (cartQuantity) console.log("Cart has products!");

console.log(!0);

console.log("text" / 5);

let variable;
console.log(variable);

// eslint-disable-next-line no-constant-condition
const result = 0 ? "truthy" : "falsy";
console.log(result);

// Short-circuit evaluation:
// Stops evaluation at 'false'.
// eslint-disable-next-line no-constant-condition, no-constant-binary-expression
const value = false && true ? "truthy" : "falsy";

// Guard operator.
// eslint-disable-next-line no-constant-binary-expression
false && console.log("truthy");

// Saves "Hello" in the variable.
// eslint-disable-next-line no-constant-binary-expression
const message = 5 && "Hello";
console.log(message);

// Default operator.
// Also stops early (short-circuits) if the value is true.
// eslint-disable-next-line no-constant-binary-expression
const currency = undefined || "USD";

console.log(currency);

const hour = 14;

const timeMessage =
	hour >= 6 && hour <= 12
		? "Good morning"
		: hour > 12 && hour < 20
		? "Good afternoon"
		: "Good night";

console.log(timeMessage);

const name = "Slqmy";

console.log(`${timeMessage}, ${name}!`);

const personAge = 65;

const discount = personAge <= 6 || personAge >= 65;

const isHoliday = false;

console.log(!isHoliday && discount ? "Discount" : "No discount");

const randomNumber = Math.random();

const choice = randomNumber < 0.5 ? "heads" : "tails";

console.log(choice);

const guess = "heads";

console.log(guess === choice ? "You win!" : "You lose!");
