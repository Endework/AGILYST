const showCard3 = document.querySelector(".community-link");
const card3 = document.querySelector(".card3");


showCard3.addEventListener("click", function () {
	if (card3.style.opacity === "0" || card3.style.opacity === "") {
		card3.style.opacity = "1";
	} else {
		card3.style.opacity = "0";
	}
});