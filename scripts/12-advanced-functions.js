/* eslint-disable no-use-before-define */
/* eslint-disable func-style */
/* eslint-disable no-unused-vars */
/* eslint-disable no-empty-function */
/* eslint-disable no-dupe-keys */
// @ts-nocheck

// Hoisting. Doesn't work when saving function to variable.
greeting();
function greeting() {
	console.log("Hello! #1");
}
greeting();

const num = 2;
// Anonymous function. (function without a name)
const function1 = function () {
	console.log("Hello! #2");
};

console.log(function1, typeof function1);
function1();

const object1 = {
	num: 2,
	// Method. (function saved within an object)
	f() {
		console.log("Hello! #3");
	},
	// Method shorthand syntax ^
};

object1.f();

const display = (param) => console.log(param);

display(2);

const run = (fx) => fx();

// Passing a function into another function. Callback function.
run(() => console.log("Hello! #4"));

// 1000ms = 1s.
setTimeout(() => {
	console.log("Timeout! #1");
	console.log("Timeout! #2");
}, 3000);

// setTimeout is asynchronous.
// Synchronous: waits for the code to be finished before moving on to the next line.

console.log("Next Line #1");

setInterval(() => {
	console.log("Interval!");
}, 3000);

// setInterval is asynchronous.

console.log("Next Line #2");

// Preferred loop for looping over an array.

// Continue doesn't work in forEach, but you can use return instead.

// Break doesn't work in forEach. Better to use a normal loop.
["Make Dinner", "Wash Dishes", "watch YouTube"].forEach(
	// Recommended to use arrow functions here.
	(value, index, array) => {
		if (value === "Wash Dishes") return;

		console.log(value, index, array);
	},
);

const add = () => console.log(2 + 3);

add();
add();

const runTwice = (fx) => {
	fx();
	fx();
};

runTwice(() => console.log("12b"));
runTwice(add);

const handleButtonClick = () => {
	const buttonElement = document.querySelector(
		"button.js-start-finished-button",
	);

	buttonElement.innerHTML = "Loading...";

	setTimeout(() => (buttonElement.innerHTML = "Finished!"), 1000);
};

let currentTimeout;

const handleAddToCartButtonClick = () => {
	const paragraphElement = document.querySelector("p.js-add-to-cart-message");

	paragraphElement.classList.add("add-to-cart-message-opaque");

	clearTimeout(currentTimeout);
	currentTimeout = setTimeout(
		() => paragraphElement.classList.remove("add-to-cart-message-opaque"),
		2000,
	);
};

let messages = 0;

setInterval(() => {
	if (messages) {
		document.title = `(${messages}) New message${messages === 1 ? "" : "s"}`;
		setTimeout(() => (document.title = "App"), 1000);
	}
}, 2000);

const regularFunction = function (_param1, _param2) {
	console.log("Hello");

	return 5;
};

regularFunction();

const arrowFunction = (_param1, _param2) => {
	console.log("Hello");

	return 5;
};

arrowFunction();

const oneParam = (param) => {
	console.log(param + 1);
};

oneParam(2);

const oneLine = () => 2 + 3;

console.log(oneLine());

const object2 = {
	method: () => {},
	// Shorthand method syntax.
	// Recommended to use this syntax.
	method() {},
};

const button = document.querySelector("button.js-button");

const f = (event) => console.log("Clicked! #1", event);

// Better than the onclick attribute.
button.addEventListener("click", f());

// Remove event listener. Has to be the exact function.
button.removeEventListener("click", f);

button.addEventListener("click", (event) => console.log("Clicked! #2", event));

console.log([1, -3, 5].filter((number) => number >= 0));
console.log([1, 1, 3].map((number) => number * 2));

// Closure: If a function has access to a value, it will always have access to that value.

const multiply = (num1, num2) => num1 * num2;

console.log(multiply(2, 3));
console.log(multiply(7, 10));

const countPositive = (arr) => {
	let positive = 0;

	arr.forEach((number) => {
		if (number >= 0) positive++;
	});

	return positive;
};

console.log(countPositive([1, -3, 5]));
console.log(countPositive([-2, 3, -5, 7, 10]));

const addNum = (arr, n) => arr.map((e) => e + n);

console.log(addNum([1, 2, 3], 2));
console.log(addNum([-2, -1, 0, 99], 2));

const removeEgg = (arr) => arr.filter((e, i) => (e === "egg" ? i > 2 : true));

console.log(removeEgg(["egg", "apple", "egg", "egg", "ham"]));

const startButton = document.querySelector("button.js-start-finished-button");
startButton.addEventListener("click", handleButtonClick);

const addToCartButton = document.querySelector("button.js-add-to-cart-button");
addToCartButton.addEventListener("click", handleAddToCartButtonClick);

const addButton = document.querySelector("button.js-add-button");
addButton.addEventListener("click", () => messages++);

const removeButton = document.querySelector("button.js-remove-button");
removeButton.addEventListener("click", () => messages && messages--);
