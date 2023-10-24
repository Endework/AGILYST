const showDropdownsButton = document.getElementById("btn2");
const showDropdownButton = document.getElementById("btn1");
const showDropdown2Button = document.getElementById("btn3");
const dropdowns = document.querySelector(".dropdowns");
const dropdown = document.querySelector(".dropdown");
const dropdown2 = document.querySelector(".dropdown2");
const showPopup = document.querySelector(".search-input");
const cardExpertise = document.querySelector(".card-expertise");

showDropdownsButton.addEventListener("click", function () {
	if (dropdowns.style.opacity === "0" || dropdowns.style.opacity === "") {
		dropdowns.style.opacity = "1";
	} else {
		dropdowns.style.opacity = "0";
	}
});
showDropdownButton.addEventListener("click", function () {
	if (dropdown.style.opacity === "0" || dropdown.style.opacity === "") {
		dropdown.style.opacity = "1";
	} else {
		dropdown.style.opacity = "0";
	}
});

showPopup.addEventListener("click", function () {
	if (
		cardExpertise.style.opacity === "0" ||
		cardExpertise.style.opacity === ""
	) {
		cardExpertise.style.opacity = "1";
	} else {
		cardExpertise.style.opacity = "0";
	}
});

showDropdown2Button.addEventListener("click", function () {
	if (dropdown2.style.opacity === "0" || dropdown2.style.opacity === "") {
		dropdown2.style.opacity = "1";
	} else {
		dropdown2.style.opacity = "0";
	}
});

// services links

// Get a reference to the protected link
const protectedLink = document.querySelector(".protected-link");

// Add a click event listener to the link
protectedLink.addEventListener("click", function (event) {
	const confirmation = confirm(
		"To access this service, please sign up or log in. Do you want to proceed?"
	);

	// If the user cancels the confirmation, prevent the link from being followed
	if (!confirmation) {
		event.preventDefault();
	}
});

//  chat bot script

const toggleChatButton = document.getElementById("toggleChatButton");
const chatContainer = document.getElementById("chatContainer");
const closeChatButton = document.getElementById("closeChatButton");
const chatArea = document.getElementById("chatArea");
const userInput = document.getElementById("userInput");
const sendMessageButton = document.getElementById("sendMessageButton");

toggleChatButton.addEventListener("click", () => {
	chatContainer.style.display = "block";
});

closeChatButton.addEventListener("click", () => {
	chatContainer.style.display = "none";
});

sendMessageButton.addEventListener("click", () => {
	const userMessage = userInput.value;
	addMessage(userMessage, "user");
	userInput.value = "";

	const botResponse = getBotResponse(userMessage);
	addMessage(botResponse, "bot");
});

// Trigger sendMessage function on user input (e.g., Enter key press)
userInput.addEventListener("keydown", function (event) {
	if (event.key === "Enter") {
		const userMessage = userInput.value;
		addMessage(userMessage, "user");
		userInput.value = "";

		const botResponse = getBotResponse(userMessage);
		addMessage(botResponse, "bot");
	}
});

function addMessage(message, sender) {
	const messageDiv = document.createElement("div");
	messageDiv.className = `message ${sender}`;
	messageDiv.textContent = message;
	chatArea.appendChild(messageDiv);
	chatArea.scrollTop = chatArea.scrollHeight;
}

// Define patterns for user messages and corresponding chatbot responses
const responses = {
	hello: "Thanks for contacting Agilyst! 😊 How can we help you?",
	hola: "Thanks for contacting Agilyst! 😊 How can we help you?",
	hi: "Thanks for contacting Agilyst! 😊 How can we help you?",
	hey: "Thanks for contacting Agilyst! 😊 How can we help you?",
	thanks:
		"You're welcome! If there is nothing else to ask, can you kindly exit?",
	"tell me a joke":
		"Why did the scarecrow win an award? Because he was outstanding in his field!",
	goodbye: "Goodbye! Feel free to return anytime if you have more questions.",
	"what is agile":
		"Agile is a project management and product development approach that prioritizes flexibility, collaboration, and customer feedback.",
	"key principles of agile":
		"Some key Agile principles include customer collaboration, responding to change, and delivering working software frequently.",

	// Add more patterns and responses here...
};

// function getBotResponse(userMessage) {
//     const lowerCaseUserMessage = userMessage.toLowerCase();
//     return responses[lowerCaseUserMessage] || "I'm here to help. Please ask another question.";
// }

// endework
const agileRules = [
	{
		pattern: /what is agile/i,
		response:
			"Agile is a project management and product development approach that prioritizes flexibility, collaboration, and customer feedback.",
	},
	{
		pattern: /key principles of agile/i,
		response:
			"Some key Agile principles include customer collaboration, responding to change, and delivering working software frequently.",
	},
	{
		pattern: /agile manifesto/i,
		response:
			"The Agile Manifesto is a set of guiding values and principles for Agile development, emphasizing individuals and interactions, working software, and customer collaboration.",
	},
	{
		pattern: /scrum/i,
		response:
			"Scrum is an Agile framework that involves fixed-length iterations called sprints, daily stand-up meetings, and a product backlog.",
	},
	{
		pattern: /kanban system/i,
		response:
			"Kanban is an Agile methodology focused on visualizing work, limiting work in progress, and optimizing flow.",
	},
	{
		pattern: /user story in agile/i,
		response:
			"A user story is a short, simple description of a feature or functionality from an end user's perspective.",
	},
	{
		pattern: /sprint in scrum/i,
		response:
			"A sprint in Scrum is a fixed time-boxed period (usually 2 to 4 weeks) during which a development team works to complete a set of user stories and produce a potentially shippable product increment.",
	},
	{
		pattern: /daily stand-up meeting/i,
		response:
			"A daily stand-up meeting is a short, daily team meeting in Agile where team members discuss their progress, plans, and any obstacles they're facing.",
	},
	{
		pattern: /product backlog/i,
		response:
			"A product backlog is a prioritized list of features, enhancements, and bug fixes that make up the work to be done on a product.",
	},
	{
		pattern: /sprint backlog/i,
		response:
			"A sprint backlog is a subset of items from the product backlog that a development team commits to completing during a sprint.",
	},
	{
		pattern: /changing requirements in agile/i,
		response:
			"Agile handles changing requirements by embracing change and allowing for flexibility in response to customer needs.",
	},
	{
		pattern: /tell me what Agilyst means/i,
		response:
			"Agilyst is a cutting-edge Agile project management platform designed to streamline your team's workflow.",
	},
	{
		pattern: /meaning of Agilyst/i,
		response:
			"The name Agilyst is a combination of Agile and Catalyst, two words that reflect our core values and vision. We are a team of experts who help organizations adopt agile practices and transform their culture and performance. We are catalysts for positive change and innovation, enabling our clients to achieve their goals faster and better.",
	},
	{
		pattern: /define Agilyst/i,
		response:
			"The name Agilyst is a combination of Agile and Catalyst, two words that reflect our core values and vision. We are a team of experts who help organizations adopt agile practices and transform their culture and performance. We are catalysts for positive change and innovation, enabling our clients to achieve their goals faster and better.",
	},
	{
		pattern: /your name/i,
		response: "Hi there 👋,I'm Bluey. How may I help you today?",
	},

	// Extend the array with your new rules...
];

// Define Agilyst intent with patterns and responses
const agilystIntents = [
	{
		tag: "about_us",
		patterns: [
			"What is Agilyst?",
			"Tell me about your app",
			"What does Agilyst do?",
			"Hi, can you tell me what Agilyst means?",
			"Can you explain Agilyst?",
			"What's the meaning of Agilyst?",
			"Define Agilyst",
		],
		responses: [
			"Agilyst is a cutting-edge Agile project management platform designed to streamline your team's workflow.",
			"It helps you plan, track, and manage your Agile projects with ease.\n\nOur mission is to empower teams to work more efficiently and collaboratively, making Agile methodologies accessible to everyone.\n\nAgilyst is an Agile project management tool that simplifies your team's work processes.",
			"It offers features like user story management, sprint planning, task tracking, and more.\n\nFeel free to explore and use it to enhance your Agile projects!",
		],
	},
];

function getBotResponse(userMessage) {
	if (userMessage.toLowerCase().includes("thanks")) {
		return "You're welcome! If there is nothing else to ask, can you kindly exit?";
	}

	// Check for a greeting and provide a friendly response
	const greetings = ["hello", "hi", "hey", "hola"];
	if (
		greetings.some((greeting) => userMessage.toLowerCase().includes(greeting))
	) {
		return "Thanks for contacting Agilyst! 😊 How can we help you?";
	}

	for (const rule of agileRules) {
		if (rule.pattern.test(userMessage.toLowerCase())) {
			return rule.response;
		}
	}

	for (const intent of agilystIntents) {
		for (const pattern of intent.patterns) {
			if (new RegExp(pattern, "i").test(userMessage.toLowerCase())) {
				if (intent.tag.toLowerCase() === "about_us") {
					return intent.responses.join("\n\n");
				}
			}
		}
	}

	// Provide a default response with friendlier suggestion links for other Agilyst-related questions
	const suggestionText =
		"Thanks for contacting Agilyst! 😊 To learn more about our platform, you can:\n";
	const suggestionLinks = {
		"Visit our website to learn more": "https://www.agilyst.com/about-us",
		"Explore our features": "https://www.agilyst.com/features",
		"Contact our support team": "https://www.agilyst.com/contact-us",
		"Learn more about Agilyst": "https://www.agilyst.com/about-us",
	};
	const suggestions = Object.entries(suggestionLinks).map(
		([suggestion, link]) => `- [${suggestion}](${link})`
	);
	return (
		suggestionText +
		suggestions.join("\n") +
		"\nFeel free to explore and reach out if you have more questions!"
	);
}


