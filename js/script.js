let value1 = "";
let value2 = "";
let display = "0";
let displayvalue = "0";
let operator = "";
let secondOperation = false;
let evaluated = false;

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

    updateScreen();
}

function notNumberHandler(id) {
    switch (id) {
        case "delete":
            display = display.slice(0, -1)
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
    } 
    display += id;

}

function checkRounding() {
    updateScreen();
    let displayWidth = document.getElementById('display').clientWidth;
    let numberWidth = document.getElementById('numbers').clientWidth;
    if (display.includes('.')) {
        while (numberWidth >= displayWidth) {
            display = display.slice(0, -1);
            displayvalue = '0';
            updateScreen();
            displayWidth = document.getElementById('display').clientWidth;
            numberWidth = document.getElementById('numbers').clientWidth;
        }
    } else {
        if (numberWidth > displayWidth) {
            displayvalue = `${display.charAt(0)}.${display.charAt(1)} * 10 ^ ${display.length - 1}`
        } else {
            displayvalue = '0';
        }
    }
}

function dropTrailing() {
    if (display.includes('.')) {
        if (display.charAt(display.length - 1) == '.') {
            return;
        } else {
            display = parseFloat(+display);
        }
    }
}

function updateScreen() {
    let text = document.getElementById('numbers');
    if (displayvalue == '0') {
        text.innerText = display;
    } else {
        text.innerText = displayvalue;
    }
    if (evaluated) {
        displayvalue = '0';
    }
    
}

/* Handling functions */
function resetCalculator() {
    value1 = '';
    value2 = '';
    display = '0';
    operator = '';
    secondOperation = false;
    displayvalue = '0';
    evaluated = false;
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
    updateScreen();
    checkRounding();
    dropTrailing();
    evaluated = true;
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