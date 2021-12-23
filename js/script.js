let display = '0';
let previous = '';
let operator = '';
let decimal = false;
let displayBool = false;
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', buttonHandler);
});

function buttonHandler(e) {
    
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