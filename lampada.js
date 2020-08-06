const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');

function isLampBroken() {
    return lamp.src.indexOf('quebrada') > -1;
}

function isLampOn() {
    return lamp.src.indexOf('desligada') > -1;
}


function turnLamp() {
    if (!isLampBroken()) {
        if (!isLampOn()) {
            lamp.src = "./img/desligada.jpg";
        } else {
            lamp.src = "./img/ligada.jpg";
        }
    }
}

function lampOff() {
    if (!isLampBroken()) {
        lamp.src = "./img/desligada.jpg";
    }
}

function lampBroken() {
    if (!isLampBroken()) {
        lamp.src = './img/quebrada.jpg';
    }
}

turnOn.addEventListener('click', turnLamp);
lamp.addEventListener('mouseover', turnLamp);
lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('dblclick', lampBroken);