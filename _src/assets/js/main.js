"use strict";

const myRandomNumber = getRandomNumber(100);
const inputNumberElement = document.querySelector(".js-inputNumber");
const message = document.querySelector(".js-message");

const counterNumber = document.querySelector(".js-counter");
let counter = 0;

const handleForm = function(ev) {
    event.preventDefault();
    parseInput();
    updateMessage();
    updateCounter();
    console.log(`Mi número aleatorio es ${myRandomNumber}`);
    console.log(`El número introducido por la usuaria es ${inputNumberElement.value}`);
}

function getRandomNumber(max) {
    return parseInt(Math.ceil(Math.random() * max));
}


function parseInput() {
    return parseInt(inputNumberElement.value);
}

function updateCounter() {
    counter++;
    counterNumber.innerHTML = counter;
}

function updateMessage() {
    const inputNumber = parseInput();

    if (inputNumber > 100 || inputNumber < 1) {
        message.innerHTML = "Escribe un número entre 1 y 100";
    } else if (inputNumber === myRandomNumber) {
        message.innerHTML = "¡HAS GANADO, CAMPEONA!";
    } else if (inputNumber < myRandomNumber) {
        message.innerHTML = "demasiado bajo";
    } else {
        message.innerHTML = "demasiado alto";
    }
}

const button = document.querySelector(".js-button");
button.addEventListener("click", handleForm);