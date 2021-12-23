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
    switch (e.target.id) {
        case 'decimal':
            decimalHandler();
            break;
        case 'delete':
            backspace();
            break;
        case 'reset':
            resetCalculator();
            break;
        case 'equal':
            equalHandler();
            break;
        default:
            if (e.target.classList.contains('operator')) {
                operatorHandler(e.target.id);
            } else {
                numberHandler(e.target.id);
            }  
    }
}

function numberHandler(id) {
    if (display == '0' || displayBool == true) {
        display = '';
    } 
    if (id == '0' && display == '0' && operator == 'divide') {
        display = 'I\'m dissapointed.'
    } else {
        display += id;
    }
    displayString();
}

function operatorHandler(id) {
    if (operator != '') {
        display = operate(operator, previous, display);
        previous = display;
        operator = id;
        displayBool = true;
    } else {
        previous = display;
        operator = id;
        display = '';
    }
    displayString();

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
    const displayArray = display.split('');
    if (displayArray.pop() == '.') {
        decimal = false;
    }
    display = displayArray.join('');
    displayString();
}

function displayString() {
    display = truncate(display, 14);
    screen = document.getElementById('numbers');
    screen.innerText = display;
}

function truncate(str, n) {
    return (str.length > n) ? str.substr(0, n-1) : str;
}

function resetCalculator() {
    display = '0';
    previous = '';
    decimal = false;
    operator = '';
    displayBool = false;
    displayString();
}

function equalHandler() {
    const prev2 = display;
    display = operate(operator, previous, display);
    previous = prev2;
    operator = '';
    displayString();
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