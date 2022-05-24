var receiveMsg = document.querySelector(".receive-message");
var clearBtn = document.querySelector(".clear-button");
var bellBox = document.querySelector(".bell-box");
var inspoBox = document.querySelector(".inspiration-box");



receiveMsg.addEventListener("click", showMessage);
clearBtn.addEventListener("click", clearMessage);


function showMessage() {
  bellBox.classList.add('hidden');
  inspoBox.classList.remove('hidden');
}

function clearMessage() {
  bellBox.classList.remove('hidden');
  inspoBox.classList.add('hidden');
}
