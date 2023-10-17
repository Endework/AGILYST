// script.js
const showDropdownsButton = document.getElementById('btn2');
const showDropdownButton = document.getElementById('btn1');
const dropdowns = document.querySelector('.dropdowns');
const dropdown = document.querySelector('.dropdown');

showDropdownsButton.addEventListener('click', function () {
    if (dropdowns.style.display === 'none' || dropdowns.style.display === '') {
        dropdowns.style.display = 'block';
    } else {
        dropdowns.style.display = 'none';
    }
});
showDropdownButton.addEventListener('click', function () {
    if (dropdown.style.display === 'none' || dropdown.style.display === '') {
        dropdown.style.display = 'block';
    } else {
        dropdown.style.display = 'none';
    }
});

const toggleChatButton = document.getElementById('toggleChatButton');
const chatContainer = document.getElementById('chatContainer');
const closeChatButton = document.getElementById('closeChatButton');
const chatArea = document.getElementById('chatArea');
const userInput = document.getElementById('userInput');
const sendMessageButton = document.getElementById('sendMessageButton');

toggleChatButton.addEventListener('click', () => {
    chatContainer.style.display = 'block';
});

closeChatButton.addEventListener('click', () => {
    chatContainer.style.display = 'none';
});

sendMessageButton.addEventListener('click', () => {
    const userMessage = userInput.value;
    addMessage(userMessage, 'user');
    userInput.value = '';

    const botResponse = getBotResponse(userMessage);
    addMessage(botResponse, 'bot');
});

// Trigger sendMessage function on user input (e.g., Enter key press)
userInput.addEventListener('keydown', function(event) {
    if (event.key === "Enter") {
        const userMessage = userInput.value;
    addMessage(userMessage, 'user');
    userInput.value = '';

    const botResponse = getBotResponse(userMessage);
    addMessage(botResponse, 'bot');
    }
})

function addMessage(message, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}`;
    messageDiv.textContent = message;
    chatArea.appendChild(messageDiv);
    chatArea.scrollTop = chatArea.scrollHeight;
}

// Define patterns for user messages and corresponding chatbot responses
const responses = {
    'hello': 'Thanks for contacting Agilyst! 😊 How can we help you?',
    'hola': 'Thanks for contacting Agilyst! 😊 How can we help you?',
    'hi': 'Thanks for contacting Agilyst! 😊 How can we help you?',
    'hey': 'Thanks for contacting Agilyst! 😊 How can we help you?',
    'thanks':"You're welcome! If there is nothing else to ask, can you kindly exit?",
    'tell me a joke': 'Why did the scarecrow win an award? Because he was outstanding in his field!',
    'goodbye': 'Goodbye! Feel free to return anytime if you have more questions.',
    'what is agile':'Agile is a project management and product development approach that prioritizes flexibility, collaboration, and customer feedback.',
    'key principles of agile':'Some key Agile principles include customer collaboration, responding to change, and delivering working software frequently.'
    
    // Add more patterns and responses here...
};

function getBotResponse(userMessage) {
    const lowerCaseUserMessage = userMessage.toLowerCase();
    return responses[lowerCaseUserMessage] || "I'm here to help. Please ask another question.";
}