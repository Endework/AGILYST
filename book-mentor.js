// script.js
const colorChangeButton = document.getElementById("color-change-button");

colorChangeButton.addEventListener("click", () => {
    // Toggle the 'button-clicked' class on click
    colorChangeButton.classList.toggle("button-clicked");
});
