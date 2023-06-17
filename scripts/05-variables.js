let variable1 = 3;
console.log(variable1);

// @ts-ignore
const calculation = 2 + 2;

console.log(calculation);
console.log(calculation + 2);

const result = calculation + 2;
console.log(result);

const message = "Hello";
console.log(message);

variable1 = 5;
console.log(variable1);

variable1++;
console.log(variable1);

const variable2 = 5;
console.log(variable2);

console.log(typeof 3, typeof variable2, typeof message);

// @ts-ignore
const name = "Slqmy";

console.log(`My name is ${name}`);

const cost = 5 + 2 * 3 + 9;

console.log(`Cost of food: $${cost}`);

const tax = cost * 0.1;

console.log(`Tax (10%): $${tax}`);

const totalCost = cost + tax;

console.log(`Total cost: $${totalCost}`);
