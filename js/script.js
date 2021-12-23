let display = '0';
let decimal = false;
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', buttonHandler);
});

function buttonHandler(e) {
    switch (e.target.id) {
        case 'decimal':
            decimalHandler();
            break;
        case 'delete':
            backspace();
            break;
        case 'reset':
            resetCalculator();
        default:
            if (e.target.classList.contains('operator')) {
                operatorHandler(e.target.id);
            } else {
                numberHandler(e.target.id);
            }  
    }
}

function numberHandler(id) {
    console.log(id);
}

function operatorHandler(id) {
    console.log(id);
}

function decimalHandler() {
    if (decimal) {
        return;
    } else {
        decimal = true;
        display += '.';
    }
    displayString();
}

function backspace() {
    displayArray = display.split('');
    if (displayArray.pop() == '.') {
        decimal = false;
    }
    display = displayArray.join('');
    displayString();
}

function displayString() {
    screen = document.getElementById('numbers');
    screen.innerText = display;
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