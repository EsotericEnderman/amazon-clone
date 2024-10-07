const orderSummary = document.querySelector("div.js-order-summary");
const checkoutItemCount = document.querySelector("a.js-item-count");

const checkoutItemCountDiv = document.querySelector("div.js-item-count");

const priceSummaryDiv = document.querySelector("div.js-payment-summary-money");

const priceSummaryDelivery = document.querySelector(
	"div.js-payment-summary-money-shipping",
);

const totalBeforeTax = document.querySelector("div.js-total-before-tax");

const estimatedTax = document.querySelector("div.js-estimated-tax");

const orderTotal = document.querySelector("div.js-order-total");

const days = [
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
	"Sunday",
];

const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];

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
      <div class="delivery-date js-delivery-date">Delivery date: ${formatDate(
				new Date(
					Date.now() +
						1000 *
							60 *
							60 *
							24 *
							(cart[key].deliveryDateOption === 0
								? 9
								: cart[key].deliveryDateOption === 1
								? 3
								: 1),
				),
			)}</div>

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
            <span class="update-quantity-link link-primary js-update-quantity-link">
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
              class="delivery-option-input js-delivery-option-input"
              name="delivery-option-${index}" ${
			cart[key].deliveryDateOption === 0 ? "checked" : ""
		} />
            <div>
              <div class="delivery-option-date">${formatDate(
								new Date(Date.now() + 1000 * 60 * 60 * 24 * 9),
							)}</div>
              <div class="delivery-option-price">FREE Shipping</div>
            </div>
          </div>
          <div class="delivery-option">
            <input
              type="radio"
              class="delivery-option-input js-delivery-option-input"
              name="delivery-option-${index}" ${
			cart[key].deliveryDateOption === 1 ? "checked" : ""
		}/>
            <div>
              <div class="delivery-option-date">${formatDate(
								new Date(Date.now() + 1000 * 60 * 60 * 24 * 3),
							)}</div>
              <div class="delivery-option-price">$4.99 - Shipping</div>
            </div>
          </div>
          <div class="delivery-option">
            <input
              type="radio"
              class="delivery-option-input js-delivery-option-input"
              name="delivery-option-${index}" ${
			cart[key].deliveryDateOption === 2 ? "checked" : ""
		}/>
            <div>
              <div class="delivery-option-date">${formatDate(
								new Date(Date.now() + 1000 * 60 * 60 * 24),
							)}</div>
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

	totalBeforeTax.innerHTML = `$${(
		(totalPriceCents + totalDeliveryCostCents) /
		100
	).toFixed(2)}`;

	estimatedTax.innerHTML = `$${(
		(totalPriceCents + totalDeliveryCostCents) /
		1000
	).toFixed(2)}`;

	orderTotal.innerHTML = `$${(
		(totalPriceCents + totalDeliveryCostCents) *
		0.011
	).toFixed(2)}`;

	document
		.querySelectorAll("span.js-delete-quantity-link")
		.forEach((span, spanIndex) =>
			span.addEventListener("click", () => {
				const keys = Object.keys(cart);
				const keyToDelete = keys[spanIndex];
				delete cart[keyToDelete];

				updateCart();
				updateCheckout();
			}),
		);

	document
		.querySelectorAll("span.js-update-quantity-link")
		.forEach((span, spanIndex) =>
			span.addEventListener("click", () => {
				span.innerHTML = `
        <input type="number" value="1" class="new-quantity-input"></input>
      `;
			}),
		);

	if (!orderSummary.innerHTML.trim()) {
		orderSummary.innerHTML = `

  <div class="empty-cart-message">
    Your cart is empty.
  </div>

  <a class="button-primary view-products-link" href="../index.html">
    View products
  </a>

  `;
	}

	document
		.querySelectorAll("input.js-delivery-option-input")
		.forEach((select, selectIndex) =>
			select.addEventListener("click", () => {
				const cartIndex = Math.floor(selectIndex / 3);
				const keys = Object.keys(cart);
				cart[keys[cartIndex]].deliveryDateOption = selectIndex % 3;

				updateCart();
				updateCheckout();
			}),
		);
}

updateCheckout();

/**
 * @param {Date} date
 */
function formatDate(date) {
	return `${days[date.getDay()]}, ${
		months[date.getMonth()]
	} ${date.getDate()}`;
}
