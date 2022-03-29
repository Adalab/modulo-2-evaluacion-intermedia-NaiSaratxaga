"use strict";
// bonus
let userMoney = 50;

// 1. Elements we need from the HTML
const btn = document.querySelector(".js_btn");
const select = document.querySelector(".js_select");
const resultText = document.querySelector(".js_changeText");
const playButton = document.querySelector(".js_btn");
const resetButton = document.querySelector(".js_reset");
const moneyInput = document.getElementById("money");
const userMoneyText = document.getElementById("user-money");

userMoneyText.innerHTML = userMoney;
resetButton.hidden = true;

// 2. Declare functions and events
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

btn.addEventListener("click", (event) => {
  event.preventDefault();
  const bet = moneyInput.value;
  const valueFromThePlayer = parseInt(select.value);
  const randomNumber = getRandomNumber(6);
  if (valueFromThePlayer === randomNumber) {
    userMoney += bet * 2;
    resultText.innerHTML = "Has ganado el doble de lo apostado :)";
  } else {
    userMoney -= bet;
    resultText.innerHTML = "Has perdido lo apostado :(";
  }

  userMoneyText.innerHTML = userMoney;

  if (userMoney >= 200) {
    playButton.hidden = true;
    resetButton.hidden = false;
    alert("has llegado a 200");
  }

  if (userMoney <= 0) {
    playButton.hidden = true;
    resetButton.hidden = false;
    alert("has perdido todo");
  }
});
