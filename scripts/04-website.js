// This is a comment.
// This code creates a popup. (Kind of annoying)
// alert("Hello");

// Single-line comment.

/*

      A
      big
      multi
      line
      comment.

      */

// Logs 'Hello' to the console.
console.log("Hello!");

console.log("Welcome!");

console.log(2 + 2);
// eslint-disable-next-line no-useless-concat
console.log("some" + "text");

const addToCartButton = document.querySelector("button.add-to-cart");
addToCartButton.addEventListener("click", () =>
	alert("Successfully added to cart!"),
);

const buyNowButton = document.querySelector("button.buy-now");
buyNowButton.addEventListener("click", () => {
	console.log("Loading...");

	alert("Purchased!");
});

const redButton = document.querySelector("button.red-button");
redButton.addEventListener("click", () => {
	console.log("AHH! I got clicked!");

	alert("Why did you click the button?");
});
