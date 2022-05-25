var receiveMsg = document.querySelector(".receive-message");
var clearBtn = document.querySelector(".clear-button");
var bellBox = document.querySelector(".bell-box");
var inspoBox = document.querySelector(".inspiration-box");
var typeOfMessage = document.getElementsByName("radio-btn");
var messageReturned = document.querySelector("p");
var affirmations = [
  "I forgive myself and set myself free.",
  "I believe I can be all that I want to be.",
  "I am in the process of becoming the best version of myself.",
  "I have the freedom & power to create the life I desire.",
  "I choose to be kind to myself and love myself unconditionally.",
  "My possibilities are endless.",
  "I am worthy of my dreams.",
  "I am enough.",
  "I deserve to be healthy and feel good.",
  "I am full of energy and vitality and my mind is calm and peaceful.",
  "Every day I am getting healthier and stronger.",
  "I honor my body by trusting the signals that it sends me.",
  "I manifest perfect health by making smart choices.",
];
var mantras = [
  "Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.",
  "Don’t let yesterday take up too much of today.",
  "Every day is a second chance.",
  "Tell the truth and love everyone.",
  "I am free from sadness.",
  "I am enough.",
  "In the beginning it is you, in the middle it is you and in the end it is you.",
  "I love myself.",
  "I am present now.",
  "Inhale the future, exhale the past.",
  "This too shall pass.",
  "Yesterday is not today.",
  "The only constant is change.",
  "Onward and upward.",
  "I am the sky, the rest is weather.",
];

receiveMsg.addEventListener("click", showMessage);
clearBtn.addEventListener("click", clearMessage);


function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function getRandomMessage() {
  for (var i = 0; i < typeOfMessage.length; i++) {
    if (typeOfMessage[i].checked) {
      var receivedMessage = getRandomIndex(typeOfMessage[i].value);
      console.log(typeOfMessage[i].value);
      if (typeOfMessage[i].value === 'mantra') {
        return mantras[receivedMessage];
      }
      return affirmations[receivedMessage];
    }
  }
}

function showMessage() {
  var selected = document.querySelector('input[type="radio"]:checked');
  bellBox.classList.add('hidden');
  inspoBox.classList.remove('hidden');
  console.log(selected);
  messageReturned.innerText = getRandomMessage(mantras);
}

function clearMessage() {
  bellBox.classList.remove('hidden');
  inspoBox.classList.add('hidden');
}
