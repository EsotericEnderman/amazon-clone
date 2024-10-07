const cartQuantity = document.querySelector("div.cart-quantity");

function updateCart() {
	localStorage.setItem("cart", JSON.stringify(cart));

	let total = 0;
	for (const item in cart) {
		total += cart[item].quantity;
	}

	if (cartQuantity) cartQuantity.innerHTML = `${total}`;
}
