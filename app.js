//get a random four digit pin
function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {
        return getPin();
    }
}

//show the generated pin 
function generatePin() {
    const pin = getPin();
    document.getElementById('pin-show').value = pin;
}

document.getElementById('calc-keypad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const inputField = document.getElementById('pin-input');
    if (isNaN(number)) {
        if (number == 'C') {
            inputField.value = '';
        }
    }
    else {
        const prevInput = inputField.value;
        const newInput = prevInput + number;
        inputField.value = newInput;
    }
})

function verifyPin() {
    const pin = document.getElementById('pin-show').value;
    const inputPin = document.getElementById('pin-input').value;

    const matched = document.getElementById('pin-matched');
    const unmatched = document.getElementById('pin-unmatched');

    if (pin == inputPin) {
        matched.style.display = 'block';
        unmatched.style.display = 'none';
    }
    else {
        unmatched.style.display = 'block';
        matched.style.display = 'none';
    }
}