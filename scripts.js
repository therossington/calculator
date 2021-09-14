const operatorInput = document.querySelectorAll('.operators');
const numberInput = document.querySelectorAll('.numbers');
const equals = document.getElementById('equals');
const clear = document.getElementById('clear');
const display = document.getElementById('content');
let inputArray = [];
let operator = '';
let firstInput = '';
let secondInput = '';
let result = '';

//Collects number input.

numberInput.forEach(numberInput => numberInput.addEventListener('click', () => {
    inputArray.push(numberInput.textContent);
    display.textContent = inputArray.join('');
    if (operator == '') {
        firstInput = inputArray.join('');
    } else if (operator != '') {
        secondInput = inputArray.join('');
        operate(firstInput, secondInput);
        console.log("Result " + operate(firstInput, secondInput));
        console.log(firstInput);
        console.log(secondInput);
    }
}));

//Triggers clear actions.

clear.addEventListener('click', () => {
    display.innerHTML = '';
    display.textContent = '0';
    inputArray = [];
    operator = '';
})

//Selects operator.

operatorInput.forEach(operatorInput => operatorInput.addEventListener('click', (e) => {
    operator = e.target.id; 
    inputArray = [];
    console.log(operator);
}));

function add(a, b) {
    return parseFloat(a) + parseFloat(b);
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate() {
    if (operator === 'addition') {
        return add(firstInput, secondInput);
    } else if (operator === 'subtract') {
        return subtract(firstInput, secondInput);
} else if (operator === 'multiply') {
        return multiply(firstInput, secondInput);
} else if (operator === 'divide') {
        return divide(firstInput, secondInput);
} else return 'ERROR!';
}
