// video-call-script.js

const userVideo = document.getElementById("user-video");
const endCallIcon = document.getElementById("end-call");
const ringingSound = document.getElementById("ringing-sound");

let userStream = null;

if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
	navigator.mediaDevices
		.getUserMedia({ video: true })
		.then(function (stream) {
			userStream = stream;
			userVideo.srcObject = stream;
			userVideo.play();
		})
		.catch(function (error) {
			console.error("Unable to access the camera:", error);
			// Handle any error or show a message to the user
		});
} else {
	console.error("getUserMedia is not supported in this browser");
	// You may display an error message and provide alternative options
}

endCallIcon.addEventListener("click", function () {
	if (userStream) {
		userStream.getTracks().forEach((track) => track.stop());
	}
	ringingSound.pause();
	window.location.href = "/HTML/Mentee-dashboard/mentee-coach-dashboard-1.html"; // Replace with the URL of your main page
});

ringingSound.play(); // Start the ringing sound
