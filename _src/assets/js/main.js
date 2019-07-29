'use strict';
debugger
const citaCoelho = new Array(10)
citaCoelho[0] = "./assets/images/cita1.png";
citaCoelho[1] = "./assets/images/cita2.jpg";
citaCoelho[2] = "./assets/images/cita3.png";
citaCoelho[3] = "./assets/images/cita4.png";
citaCoelho[4] = "./assets/images/cita5.jpg";
citaCoelho[5] = "./assets/images/cita6.png";
citaCoelho[6] = "./assets/images/cita7.png";
citaCoelho[7] = "./assets/images/cita8.jpg";
citaCoelho[8] = "./assets/images/cita9.jpg";
citaCoelho[9] = "./assets/images/cita10.jpg";


function choosepicture(event) {
    const numberResult = getRandomArbitrary(0, 10);
    document.getElementById("myImg").src = citaCoelho[numberResult];

    function getRandomArbitrary(min, max) {
        const randomNumber = parseInt(Math.random() * (max - min) + min);
        return randomNumber;
    }
};

const button = document.querySelector('.js-button');
button.addEventListener('click', choosepicture);