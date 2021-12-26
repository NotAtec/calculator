let value1 = "";
let value2 = "";
let display = "0";
let operator = "";
let decimalBool = false;

const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', buttonHandler);
});

function buttonHandler(e) {
    console.log(this.classList);
    if (this.classList.contains('operator')) {
        operatorHandler(this.id);
    } else {
        numberHandler(this.id);
    }
    updateScreen();
}

function operatorHandler(id) {

}

function numberHandler(id) {
    if (display == '0') {
        display = '';
    }
    display += id;
    console.log(display);
}

function updateScreen() {
    let text = document.getElementById('numbers');
    text.innerText = display;

}

/* basic functions */
function operate(op, a, b) {
    switch (op) {
        case 'add':
            return add(a,b);
        case 'subtract':
            return subtract(a,b);
        case 'multiply':
            return multiply(a,b);
        case 'divide':
            return divide(a,b);
    }
}

function add(a, b) {
    return +a + +b;
}

function subtract(a, b) {
    return +a - +b;
}

function multiply(a, b) {
    return +a * +b
}

function divide(a, b) {
    return +a / +b
}