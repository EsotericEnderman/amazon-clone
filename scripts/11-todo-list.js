const toDoListArray = [];

const handleButtonClick = () => {
	// IMPORTANT: For input elements, it's `.value`.
	const item = document.querySelector("input.js-todo-name-input");

	// @ts-ignore
	toDoListArray.push(item.value);

	// @ts-ignore
	item.value = "";
	console.log(toDoListArray);
};

const toDoItems = document.querySelector("div.js-to-do-items");

const handleButtonClick2 = () => {
	const item = document.querySelector("input.js-todo-name-input-2");

	// @ts-ignore
	toDoListArray.push(item.value);

	// "Generating" the HTML.
	// @ts-ignore
	toDoItems.innerHTML += `<p>${item.value}</p>`;

	// @ts-ignore
	item.value = "";
};
