const toDoList1 = [];

const handleButtonClick1 = () => {
	const item = document.querySelector("input.js-item-input-1");

	// @ts-ignore
	if (item.value) {
		// @ts-ignore
		toDoList1.push(item.value);

		console.log(toDoList1);

		// @ts-ignore
		item.value = "";
	}
};

const button1 = document.querySelector("button.js-add-button-1");
button1.addEventListener("click", handleButtonClick1);

const handleButtonClick2 = () => {
	const item = document.querySelector("input.js-item-input-2");

	// @ts-ignore
	if (item.value) {
		const itemsDivContainer = document.querySelector("div.js-items-2");

		// @ts-ignore
		itemsDivContainer.innerHTML += `<p>${item.value}</p>`;

		// @ts-ignore
		item.value = "";
	}
};

const button2 = document.querySelector("button.js-add-button-2");
button2.addEventListener("click", handleButtonClick2);

const toDoList3 = JSON.parse(localStorage.getItem("toDoList")) ?? [];
const itemsDiv = document.querySelector("div.js-items-3");

const renderToDoList = () => {
	localStorage.setItem("toDoList", JSON.stringify(toDoList3));

	itemsDiv.innerHTML = "";

	toDoList3.forEach((/** @type {{ item: string; date: string; }} */ item) => {
		// Multi-line strings.
		itemsDiv.innerHTML += `
			<div class="item-name">${item.item}</div>
			<div class="item-date">${item.date}</div>

			<button class="delete-button js-delete-button">Delete</button>
		`;
	});

	// querySelectorAll: remember, important.
	document
		.querySelectorAll("button.js-delete-button")
		.forEach((button, index) =>
			button.addEventListener("click", () => {
				// Index is still accessible here.
				// Closure:
				// If a function has access to a value, it will always have access to that value.
				// Value gets "packaged together" (enclosed) with the function.
				toDoList3.splice(index, 1);
				renderToDoList();
			}),
		);

	// "index" is deleted after the function is called.
};

renderToDoList();

const handleButtonClick3 = () => {
	const item = document.querySelector("input.js-item-input-3");
	const date = document.querySelector("input.js-date-input-3");

	// @ts-ignore
	if (item.value && date.value) {
		// @ts-ignore
		toDoList3.push({item: item.value, date: date.value});

		renderToDoList();

		// @ts-ignore
		item.value = "";
		// @ts-ignore
		date.value = "";
	}
};

const button3 = document.querySelector("button.js-add-button-3");
button3.addEventListener("click", handleButtonClick3);
