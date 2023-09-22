document.getElementById("email").addEventListener("input", function () {
	if (this.value === "") {
		document.getElementById("form").submit();
	}
});

document.getElementById("password").addEventListener("input", function () {
	if (this.value === "") {
		document.getElementById("form").submit();
	}
});

// password specific characters
document.getElementById("password").addEventListener("input", function () {
	var password = this.value;
	var regex = /^[A-Za-z0-9]{8,}$/;
	var errorMessage = document.getElementById("password-error");

	if (!regex.test(password)) {
		errorMessage.innerHTML =
			"Password must be at least 8 characters long and contain only letters and numbers.";
	} else {
		errorMessage.innerHTML = "";
	}
});

var anchor = document.createElement("a");
anchor.href =
	"https://accounts.google.com/o/oauth2/v2/auth?scope=email&redirect_uri=YOUR_REDIRECT_URI&response_type=code&client_id=YOUR_CLIENT_ID";
// anchor.innerHTML = 'Sign in with Google';
document.body.appendChild(anchor);

var anchor = document.createElement("a");
anchor.href =
	"https://www.facebook.com/v2.8/dialog/oauth?client_id=YOUR_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&response_type=code&scope=email";
// anchor.innerHTML = 'Sign in with Facebook';
document.body.appendChild(anchor);

var anchor = document.createElement("a");
anchor.href =
	"https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=YOUR_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&scope=r_liteprofile%20r_emailaddress";
// anchor.innerHTML = 'Sign in with LinkedIn';
document.body.appendChild(anchor);

// JavaScript to toggle the pop-up
const popupContainer = document.querySelector('.popup-container');
const closeButton = document.querySelector('.close-button');

function openPopup() {
    popupContainer.style.display = 'block';
}

function closePopup() {
    popupContainer.style.display = 'none';
}

// Event listeners
closeButton.addEventListener('click', closePopup);

// Open the pop-up when needed (e.g., a button click)
// Example: document.querySelector('#showPopupButton').addEventListener('click', openPopup);