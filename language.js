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
	sw: {
		welcome: "Karibu",
		greeting: "Habari, uko aje?",
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
function changeLanguage() {
	const selectedLanguage = document.getElementById("language-select").value;
	const pageTitle = document.getElementById("page-title");
	const pageContent = document.querySelector(".page-content");

	if (translations[selectedLanguage]) {
		pageTitle.textContent = translations[selectedLanguage].pageTitle;
		pageContent.textContent = translations[selectedLanguage].pageContent;
	}
}

// Add an event listener to the language select input
document
	.getElementById("language-select")
	.addEventListener("change", changeLanguage);

// Initialize the language when the page loads
changeLanguage();
