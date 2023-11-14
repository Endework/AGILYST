const profilePictureInput = document.getElementById("profilePicture");
const profilePicture = document.getElementById("profile-picture");

profilePictureInput.addEventListener("change", function () {
	const file = profilePictureInput.files[0];
	if (file) {
		const reader = new FileReader();

		reader.onload = function (e) {
			profilePicture.src = e.target.result;
		};

		reader.readAsDataURL(file);
	}
});


const showfiltersDiv = document.querySelector("#fa-filters");
const filters = document.querySelector(".filters");

showfiltersDiv.addEventListener("click", function () {
	if (filters.style.opacity === "0" || filters.style.opacity === "") {
		filters.style.opacity = "1";
	} else {
		filters.style.opacity = "0";
	}
});