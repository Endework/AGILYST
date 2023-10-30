
//message interface

const showbuttonDiv = document.querySelector(".send-icon");
const buttonDiv = document.querySelector(".buttonDiv");


showbuttonDiv.addEventListener("click", function () {
	if (buttonDiv.style.opacity === "0" || buttonDiv.style.opacity === "") {
		buttonDiv.style.opacity = "1";
	} else {
		buttonDiv.style.opacity = "0";
	}
});


const message = document.querySelector(".message");

message.addEventListener("input", function () {
  // Clear the message after 3 seconds (3000 milliseconds)
  setTimeout(clearMessage, 22000);
});

function clearMessage() {
  message.value = "";
}


// Define language data
const languageData = {
	en: {
		welcome: "Welcome",
		greeting: "Hello, how are you?",
	},
	fr: {
		welcome: "Bienvenue",
		greeting: "Bonjour, comment allez-vous?",
	},
	pt: {
		welcome: "Bem-vindo",
		greeting: "Hola, como vai?",
	},
	de: {
		welcome: "Willkommen",
		greeting: "Hola, wie geht es lhnen?",
	},
	// Add translations for more languages
};

// Function to translate content
function translateContent(language) {
	const elements = document.querySelectorAll("[data-i18n]");
	elements.forEach((element) => {
		const key = element.getAttribute("data-i18n");
		element.textContent = languageData[language][key];
	});
}

// Initialize with the default language (e.g., English)
let selectedLanguage = "en";
translateContent(selectedLanguage);

// Handle language selection
const languageSelect = document.getElementById("language-select");
languageSelect.addEventListener("change", (event) => {
	selectedLanguage = event.target.value;
	translateContent(selectedLanguage);
});







