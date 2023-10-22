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
