let cartQuantity = 0;

/**
 * @param {number} number
 * @returns {void}
 */
const updateCart = (number) => {
	if (cartQuantity + number > 10) {
		return alert("The cart is full!");
	}

	if (cartQuantity + number < 0) {
		return alert("Not enough items in the cart");
	}

	cartQuantity += number;
	document.querySelector(
		"p.js-cart-quantity",
	).innerHTML = `Cart Quantity: ${cartQuantity}`;
};

const updateCartButtons = document.querySelectorAll(
	"button.update-cart-button",
);
updateCartButtons.forEach((button) =>
	button.addEventListener("click", () =>
		updateCart(
			parseInt(
				button.innerHTML === "Add to cart"
					? "1"
					: button.innerHTML === "Remove from cart"
					? "-1"
					: button.innerHTML,
			),
		),
	),
);

const resetCartButton = document.querySelector("button.reset-cart-button");
resetCartButton.addEventListener("click", () => {
	cartQuantity = 0;
	document.querySelector("p.js-cart-quantity").innerHTML = `Cart Quantity: 0`;
});
