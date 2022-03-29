"use strict";
// 1. Elements we need from the HTML
const btn = document.querySelector(".js_btn");

// 2. Declare functions and events

btn.addEventListener("click", (event) => {
  event.preventDefault();

  console.log("Hola, has hecho click!");
});
/* 
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
  } */

// 3. Code that runs when the page loads
