'use strict';

// 1. Elements we need from the HTML
const numberSelect = document.querySelector('.js_select');
const bettingAmountInput = document.querySelector('.js_money');

const bettingResultText = document.querySelector('.js_changeText');
const playButton = document.querySelector('.js_btn');
const resetButton = document.querySelector('.js_reset');
const currentUserBalanceText = document.querySelector('.js_user_balance');

const minBalance = 0;
const maxBalance = 200;
const userStartingBalance = 50;

let currentUserBalance;

function restartGame() {
  numberSelect.value = 0;
  bettingAmountInput.value = '';

  currentUserBalance = userStartingBalance;
  currentUserBalanceText.innerHTML = currentUserBalance;

  playButton.classList.remove('hidden');
  resetButton.classList.add('hidden');
}

function endGame() {
  playButton.classList.add('hidden');
  resetButton.classList.remove('hidden');
}

function onPlayButtonClick(event) {
  event.preventDefault();
  if (parseInt(numberSelect.value) && bettingAmountInput.value) {
    doBet();
    if (currentUserBalance <= minBalance || currentUserBalance >= maxBalance) {
      endGame();
    }
  } else {
    console.log('You cannot bet! Select a number and set an amount to bet');
  }
}

function onResetClick(event) {
  event.preventDefault();
  restartGame();
}

function doBet() {
  const bettingAmount = bettingAmountInput.value;
  const userSelectedNumber = parseInt(numberSelect.value);
  const randomNumber = getRandomNumber(6);
  if (userSelectedNumber === randomNumber) {
    currentUserBalance += bettingAmount * 2;
    bettingResultText.innerHTML = 'Has ganado el doble de lo apostado :)';
  } else {
    currentUserBalance = Math.max(currentUserBalance - bettingAmount, 0);
    bettingResultText.innerHTML = 'Has perdido lo apostado :(';
  }
  currentUserBalanceText.innerHTML = currentUserBalance;
}

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

playButton.addEventListener('click', onPlayButtonClick);
resetButton.addEventListener('click', onResetClick);

// Starting the game
restartGame();
