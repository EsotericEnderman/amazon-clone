const productsGrid = document.querySelector("div.products-grid");

productsGrid.innerHTML = "";

// @ts-ignore
// eslint-disable-next-line no-undef
products.forEach((product) => {
	productsGrid.innerHTML += `
    <div class="product-container">
      <div class="product-image-container">
        <img
          class="product-image"
          src="${product.image}"
          alt="Product Image" />
      </div>

      <div class="product-name limit-text-to-2-lines">
        ${product.name}
      </div>

      <div class="product-rating-container">
        <img
          class="product-rating-stars"
          src="images/ratings/rating-${product.rating.stars * 10}.png"
          alt="Product Rating Stars" />
        <div class="product-rating-count link-primary">${
					product.rating.count
				}</div>
      </div>

      <div class="product-price">$${(product.priceCents / 100).toFixed(2)}</div>

      <div class="product-quantity-container">
        <select>
          <option selected value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>

      <div class="product-spacer"></div>

      <div class="added-to-cart">
        <img src="images/icons/checkmark.png" alt="Checkmark" />
        Added
      </div>

      <button class="add-to-cart-button js-add-to-cart-button button-primary">
          Add to Cart
      </button>
    </div>
  `;

	// Note - Data attribute:
	// Have to start with "data-".
	// Separate words with a - (kebab case)
	// Gets converted to camelcase in JS.
	// E.g., data-product-name => button.dataset.productName
});

const selectElements = document.querySelectorAll("select");

// Better solution: find the product by the index, and have the cart be an object.
// Object key = product ID
// Object value = quantity
document
	.querySelectorAll("button.js-add-to-cart-button")
	.forEach((button, index) =>
		button.addEventListener("click", () => {
			// @ts-ignore
			// eslint-disable-next-line no-undef
			cart[products[index].id] ??= {quantity: 0};

			// @ts-ignore
			// eslint-disable-next-line no-undef
			cart[products[index].id].quantity += parseInt(
				selectElements[index].value,
			);
		}),
	);
