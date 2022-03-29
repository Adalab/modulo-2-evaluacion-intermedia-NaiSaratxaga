"use strict";
// 1. Elements we need from the HTML
const btn = document.querySelector(".js_btn");
const select = document.querySelector(".js_select");
const resultText = document.querySelector(".js_changeText");

// 2. Declare functions and events

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

btn.addEventListener("click", (event) => {
  event.preventDefault();
  const valueFromThePlayer = parseInt(select.value);
  const randomNumber = getRandomNumber(6);
  if (valueFromThePlayer === randomNumber) {
    resultText.innerHTML = "Has ganado el doble de lo apostado :)";
  } else {
    resultText.innerHTML = "Has perdido lo apostado :(";
  }
});
