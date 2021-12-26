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
        default:
            operation(id);
    }
}

function numberHandler(id) {
    if (display == '0') {
        display = '';
    }
    display += id;
    console.log(display);
}

function updateScreen() {
    /* TODO: Add required checks to prevent non-normal behaviour */
    let text = document.getElementById('numbers');
    text.innerText = display;
}

/* Handling functions */
function resetCalculator() {

}

function operation(opr) {
    if (operator != '') {
        evaluate();
    } else {
        operator = opr;
        value1 = display;
        display = '';
    }
}

function evaluate() {

}

/* basic functions */
function operate(op, a, b) { /* Possibly restructure to combine operate & evaluate */
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