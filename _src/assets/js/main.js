'use strict';
debugger

function getRandomArbitrary(min, max) {
    const randomNumber = parseInt(Math.random() * (max - min) + min);
    return randomNumber;
}

function getMessage(event) {
    const numberResult = getRandomArbitrary(0, 100);
    const message = document.querySelector(".js-message");
    const inputNumber = document.querySelector(".js-inputNumber");
    const inputNumberContent = document.querySelector(".js-inputNumber").value;
    debugger

    if (inputNumber === numberResult) {
        message.innerHTML = '¡HAS GANADO, CAMPEONA!';
    } else if (inputNumber < numberResult) {
        message.innerHTML = 'demasiado bajo';
    } else {
        message.innerHTML = 'demasiado alto';
    }
    console.log(Math.ceil(numberResult));
    console.log(numberResult);
    console.log(inputNumber);
    console.log(inputNumberContent);
}


const button = document.querySelector('.js-button');
button.addEventListener('click', getMessage);