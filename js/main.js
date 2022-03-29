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
const userMoneyText = document.getElementById("user_money");

userMoneyText.innerHTML = userMoney;
resetButton.hidden = true;

// 2. Declare functions and events
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

btn.addEventListener("click", (event) => {
  event.preventDefault();
  const bet = moneyInput.value;
  const playerSelectedNumber = parseInt(select.value);
  const randomNumber = getRandomNumber(6);
  if (playerSelectedNumber === randomNumber) {
    userMoney += bet * 2;
    resultText.innerHTML = "Has ganado el doble de lo apostado :)";
  } else {
    userMoney = Math.max(userMoney - bet, 0);
    resultText.innerHTML = "Has perdido lo apostado :(";
  }

  userMoneyText.innerHTML = userMoney;

  if (userMoney <= 0 || userMoney >= 200) {
    playButton.hidden = true;
    resetButton.hidden = false;
  }
});
