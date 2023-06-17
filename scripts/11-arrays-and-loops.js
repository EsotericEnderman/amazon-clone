// @ts-nocheck
const numbers = [10, 20, 30];
console.log(numbers);

console.log(numbers[1]);

numbers[0] = 99;

console.log(numbers);

const array = [1, "hello", true, {name: "socks"}];

console.log(typeof [1, 2]);
console.log(Array.isArray([1, 2]));

console.log(numbers.length);

numbers.push(100);
console.log(numbers);

numbers.splice(0, 1);
console.log(numbers);

// Loop variable.
let i = 1;

// Loop condition.
while (i <= 5) {
	// Loop body.
	console.log(i);
	// Increment step.
	// Makes sure that the loop ends at some point.
	// Otherwise, the loop will be an infinite loop.
	i++;
}

// eslint-disable-next-line no-shadow
for (let i = 1; i <= 5; i++) {
	console.log(i);
}

// Standard loop => for-loop.
// Non-standard loop => maybe a while loop.
// E.g.,

// Generate random numbers until one that's at least 0.5.

let randomNumber = 0;

// Results in some funny randomness.
while (randomNumber < 0.9) {
	randomNumber = Math.random();
	console.log(randomNumber);
}

// Non-standard loop => no loop variable that is increased, no increment step.
// Better to use a while loop  because they are more flexible.

const todoList = ["made dinner", "wash dishes", "watch youtube 💀"];

for (let index = 0; index < todoList.length; index++) {
	const item = todoList[index];
	console.log(index, item);
}

for (const item of todoList) {
	console.log(item);
}

const numbersList = [1, 1, 3];

let total = 0;

// eslint-disable-next-line no-shadow
for (let i = 0; i < numbersList.length; i++) {
	const value = numbersList[i];
	total += value;
	console.log(total, value, i);
}

console.log(
	numbersList.reduce((accumulator, number) => accumulator + number, 0),
);

const numbersDoubled = [];

// eslint-disable-next-line no-shadow
for (const element of numbersList) {
	numbersDoubled.push(element * 2);
}

console.log(numbersDoubled);

const numbersList2 = [10, 20, 30];
numbersList2[2] = 99;
console.log(numbersList2);

// eslint-disable-next-line no-shadow
const getLastValue = (array) => array[array.length - 1];

console.log(getLastValue([1, 20, 22, 24, 5]));
console.log(getLastValue(["hi", "hello", "good"]));

// eslint-disable-next-line no-shadow
const arraySwap = (array) => {
	const lastElem = array[array.length - 1];
	const firstElem = array[0];

	array[array.length - 1] = firstElem;
	array[0] = lastElem;

	console.log(array);
};

arraySwap([1, 20, 22, 24, 5]);
arraySwap(["hi", "hello", "good"]);

// eslint-disable-next-line no-shadow
for (let i = 0; i <= 10; i += 2) console.log(i);

// eslint-disable-next-line no-shadow
for (let i = 5; i >= 0; i--) console.log(i);

let index = 0;
while (index <= 10) {
	console.log(index);
	index += 2;
}

let index2 = 5;

while (index2 >= 0) {
	console.log(index2);
	index2--;
}

// eslint-disable-next-line no-shadow
const increaseByOne = (array) => array.map((element) => element + 1);
console.log(increaseByOne([1, 2, 3]));

// eslint-disable-next-line no-shadow
const increaseByOneIntendedSolution = (array) => {
	const newArray = [];

	// eslint-disable-next-line no-shadow
	for (let i = 0; i < array.length; i++) {
		newArray.push(array[i] + 1);
	}

	return newArray;
};

console.log(increaseByOneIntendedSolution([1, 2, 3]));

console.log(increaseByOne([-2, -1, 0, 99]));

console.log(increaseByOneIntendedSolution([-2, -1, 0, 99]));

const addNum = (arr, num) => arr.map((elem) => elem + num);

console.log(addNum([1, 2, 3], 2));

const addArrays = (arr1, arr2) =>
	// eslint-disable-next-line no-shadow
	arr1.map((elem, index) => elem + arr2[index]);

console.log(addArrays([1, 1, 2], [1, 1, 3]));

const countPositive = (nums) => nums.filter((num) => num > 0).length;
console.log(countPositive([1, -3, 5]));
console.log(countPositive([-2, 3, -5, 7, 10]));

const minMax = (arr) => {
	const obj = {
		min: Infinity,
		max: -Infinity,
	};

	for (const num of arr) {
		if (num > obj.max) obj.max = num;
		if (num < obj.min) obj.min = num;
	}

	return {
		min: obj.min === Infinity ? null : obj.min,
		max: obj.max === -Infinity ? null : obj.max,
	};
};

console.log(minMax([1, -3, 5]));
console.log(minMax([-2, 3, -5, 7, 10]));

console.log(minMax([]));
console.log(minMax([3]));

const countWords = (arr) => {
	const obj = {};

	for (const word of arr) {
		obj[word] ??= 0;
		obj[word]++;
	}

	return obj;
};

console.log(countWords(["apple", "apple", "grape", "apple"]));

// Arrays are references.
const array1 = [1, 2, 3];
const array2 = array1;

array2.push(4);

console.log(array1, array2);

const array3 = array1.slice();

array3.push(5);

console.log(array1, array2, array3);

const array4 = [1, 2, 3];

const [firstValue, secondValue] = array4;

console.log(firstValue, secondValue);

// Break = exit a loop early.
// Continue = continue a loop early / skip a part of the loop.

// eslint-disable-next-line no-shadow
for (let i = 1; i <= 10; i++) {
	if (!(i % 3)) continue;

	console.log(i);

	if (i === 8) break;
}

// ALWAYS DO INCREMENT STEP MANUALLY.

let o = 1;
while (o <= 10) {
	if (!(o % 3)) {
		o++;
		continue;
	}
	console.log(o);
	o++;
}

const nums = [1, 1, 3];

const doubleArray = (arr) => {
	const numsDoubled = [];

	for (const number of arr) {
		if (!number) return numsDoubled;
		numsDoubled.push(number * 2);
	}

	return numsDoubled;
};

console.log(doubleArray([1, 1, 3]));
console.log(doubleArray([2, 2, 155, 0, 5]));

const searchArray = ["hello", "world", "search", "good", "search"];

const includesSearch = (arr) => {
	for (let p = 0; p < arr.length; p++) {
		if (arr[p] === "search") {
			console.log(p);
			break;
		}
	}
};

includesSearch(searchArray);
includesSearch(["not", "found"]);

const findIndex = (arr, word) => {
	for (let p = 0; p < arr.length; p++) {
		if (arr[p] === word) return p;
	}

	return -1;
};

console.log(findIndex(["green", "red", "blue", "red"], "red"));
console.log(findIndex(["green", "red", "blue", "red"], "yellow"));

const unique = (arr) => {
	const arrCopy = arr.slice();

	for (let k = 0; k < arrCopy.length; k++) {
		if (findIndex(arrCopy, arrCopy[k]) !== k) {
			arrCopy.splice(k, 1);
			k--;
		}
	}

	return arrCopy;
};

console.log(unique(["green", "red", "blue", "red"]));
console.log(unique(["red", "green", "green", "red"]));

const foodsArray = ["egg", "apple", "egg", "egg", "ham"];

const removeEgg = (foods) => {
	let removedEggNumber = 0;
	const newArr = [];

	foods = foods.slice().reverse();

	for (const food of foods) {
		if (food === "egg" && removedEggNumber !== 2) {
			removedEggNumber++;
			continue;
		}
		newArr.push(food);
	}

	return newArr.reverse();
};

console.log(removeEgg(foodsArray));
console.log(foodsArray);

for (let k = 1; k <= 20; k++) {
	if (!(k % 3) && !(k % 5)) console.log("FizzBuzz");
	else if (!(k % 3)) console.log("Fizz");
	else if (!(k % 5)) console.log("Buzz");
	else console.log(k);
}
