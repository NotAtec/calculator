let value1 = "";
let value2 = "";
let display = "0";
let operator = "";
let secondOperation = false;

const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', buttonHandler);
});

function buttonHandler(e) {
    if (this.classList.contains('NaN')) {
        notNumberHandler(this.id);
    } else {
        numberHandler(this.id);
    }
    updateScreen(this.id);
}

function notNumberHandler(id) {
    switch (id) {
        case "delete":
            let displayArr = display.split('');
            displayArr.pop();
            display = displayArr.join('');
            break;
        case "reset":
            resetCalculator();
            break;
        case "equal":
            evaluate();
            break;
        case "decimal":
            decimalHandling();
            break;
        default:
            operation(id);
    }
}

function numberHandler(id) {
    if (display == '0') {
        display = '';
    }
    if (secondOperation) {
        display = '';
    } else {
        display += id;
    }
}

function updateScreen(id) {
    let text = document.getElementById('numbers');
    text.innerText = display;
}

/* Handling functions */
function resetCalculator() {
    value1 = '';
    value2 = '';
    display = '0';
    operator = '';
    secondOperation = false;
}

function operation(opr) {
    if (operator != '') {
        evaluate();
        operator = opr;
        secondOperation = true;
    } else {
        operator = opr;
        value1 = display;
        display = '';
    }
}

function evaluate() {
    if (operator == '') {
        return;
    }
    
    if (display == '') {
        display = value1;
        return;
    }

    display = operate(operator, value1, display).toString();
    value1 = display;
    value2 = '';
    operator = '';
    secondOperation = false;
}

function decimalHandling() {
    if (display.includes('.')) {
        return;
    } else {
        display += '.';
    }
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