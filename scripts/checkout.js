/* eslint-disable func-style */
/* eslint-disable no-undef */
// @ts-nocheck

const orderSummary = document.querySelector("div.js-order-summary");
const checkoutItemCount = document.querySelector("a.js-item-count");

const checkoutItemCountDiv = document.querySelector("div.js-item-count");

const priceSummaryDiv = document.querySelector("div.js-payment-summary-money");

const priceSummaryDelivery = document.querySelector(
	"div.js-payment-summary-money-shipping",
);

function updateCheckout() {
	orderSummary.innerHTML = "";

	let index = 0;
	let items = 0;
	let totalPriceCents = 0;
	let totalDeliveryCostCents = 0;

	for (const key in cart) {
		items += Number(cart[key].quantity);

		const product = products[key];

		totalPriceCents += products[key].priceCents * cart[key].quantity;
		totalDeliveryCostCents += cart[key].deliveryDateOption * 500 - 1;

		orderSummary.innerHTML += `

    <div class="cart-item-container">
      <div class="delivery-date">Delivery date: Tuesday, June 21</div>

      <div class="cart-item-details-grid">
        <img
          class="product-image"
          src="${product.image}"
          alt="Product Image" />

        <div class="cart-item-details">
          <div class="product-name">
            ${product.name}
          </div>
          <div class="product-price">$${(product.priceCents / 100).toFixed(
						2,
					)}</div>
          <div class="product-quantity">
            <span> Quantity: <span class="quantity-label">${
							cart[key].quantity
						}</span> </span>
            <span class="update-quantity-link link-primary">
              Update
            </span>
            <span class="delete-quantity-link link-primary js-delete-quantity-link">
              Delete
            </span>
          </div>
        </div>

        <div class="delivery-options">
          <div class="delivery-options-title">
            Choose a delivery option:
          </div>
          <div class="delivery-option">
            <input
              type="radio"
              checked
              class="delivery-option-input js-delivery-option-input"
              name="delivery-option-${index}" />
            <div>
              <div class="delivery-option-date">Tuesday, June 21</div>
              <div class="delivery-option-price">FREE Shipping</div>
            </div>
          </div>
          <div class="delivery-option">
            <input
              type="radio"
              class="delivery-option-input js-delivery-option-input"
              name="delivery-option-${index}" />
            <div>
              <div class="delivery-option-date">Wednesday, June 15</div>
              <div class="delivery-option-price">$4.99 - Shipping</div>
            </div>
          </div>
          <div class="delivery-option">
            <input
              type="radio"
              class="delivery-option-input js-delivery-option-input"
              name="delivery-option-${index}" />
            <div>
              <div class="delivery-option-date">Monday, June 13</div>
              <div class="delivery-option-price">$9.99 - Shipping</div>
            </div>
          </div>
        </div>
      </div>
    </div>

  `;

		index++;
	}

	checkoutItemCount.innerHTML = `${items} items`;
	checkoutItemCountDiv.innerHTML = `Items (${items}):`;

	priceSummaryDiv.innerHTML = `$${(totalPriceCents / 100).toFixed(2)}`;
	priceSummaryDelivery.innerHTML = `$${Math.max(
		totalDeliveryCostCents / 100,
		0,
	).toFixed(2)}`;

	document
		.querySelectorAll("span.js-delete-quantity-link")
		.forEach((span, spanIndex) =>
			span.addEventListener("click", () => {
				delete cart[Object.keys(cart)[spanIndex]];

				updateCart();
				updateCheckout();
			}),
		);

	if (!orderSummary.innerHTML.trim()) {
		orderSummary.innerHTML = `

  <div class="empty-cart-message">
    Your cart is empty.
  </div>

  <a class="button-primary view-products-link" href="../amazon.html">
    View products
  </a>

  `;
	}
}

updateCheckout();

document
	.querySelectorAll("input.js-delivery-option-input")
	.forEach((select, index) =>
		select.addEventListener("click", () => {
			const cartIndex = Math.floor(index / 3);

			cart[cartIndex].deliveryDateOption = index % 3;
		}),
	);
