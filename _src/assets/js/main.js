"use strict";

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}

const myRandomNumber = getRandomNumber(100);
console.log(`Mi número aleatorio es ${myRandomNumber}`);

const inputNumber = document.querySelector(".js-inputNumber");
const message = document.querySelector(".js-message");

let counter = 0;
const counterNumber = document.querySelector(".js-counter");

function getMessage(event) {
    counter = counter + 1;
    counterNumber.innerHTML = counter;
    if (inputNumber.value > 100 || inputNumber.value < 1) {
        message.innerHTML = "Escribe un número entre 1 y 100";
    } else if (inputNumber.value == myRandomNumber) {
        message.innerHTML = "¡HAS GANADO, CAMPEONA!";
    } else if (inputNumber.value < myRandomNumber) {
        message.innerHTML = "demasiado bajo";
    } else {
        message.innerHTML = "demasiado alto";
    }
    console.log(inputNumber.value);
    console.log(myRandomNumber);
}

const button = document.querySelector(".js-button");
button.addEventListener("click", getMessage);
