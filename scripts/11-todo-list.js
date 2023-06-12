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

const handleButtonClick2 = () => {
	const item = document.querySelector("input.js-item-input-2");

	// @ts-ignore
	if (item.value) {
		const itemsDiv = document.querySelector("div.js-items-2");

		// @ts-ignore
		itemsDiv.innerHTML += `<p>${item.value}</p>`;

		// @ts-ignore
		item.value = "";
	}
};

const toDoList3 = [];
const itemsDiv = document.querySelector("div.js-items-3");

const renderToDoList = () => {
	itemsDiv.innerHTML = "";

	toDoList3.forEach((item, index) => {
		console.log(itemsDiv.innerHTML, index, toDoList3);

		itemsDiv.innerHTML += `
		<div class="to-do-row">
			<div class="item-name">${item.item}</div>
			<div class="item-date">${item.date}</div>
			<button onclick="toDoList3.splice(${index}, 1);renderToDoList();" class="delete-button">Delete</button>
		</div>`;
	});
};

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
