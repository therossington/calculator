const operatorInput = document.querySelectorAll('.operators');
const numberInput = document.querySelectorAll('.numbers');
const equals = document.getElementById('equals');
const clear = document.getElementById('clear');
const display = document.getElementById('content');
let inputArray = [];
let operator = '';
let firstInput = '';
let secondInput = '';

//Collects number input.

numberInput.forEach(numberInput => numberInput.addEventListener('click', () => {
    inputArray.push(numberInput.textContent);
    display.textContent = inputArray.join('');
    if (operator == '') {
        firstInput = inputArray.join('');
    } else if (operator != '') {
        secondInput = inputArray.join('');
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
}));

function add(firstInput,secondInput) {
    return parseInt(firstInput) + parseInt(secondInput);
}

function subtract(firstInput, secondInput) {
    return firstInput - secondInput;
}

function multiply(firstInput, secondInput) {
    return firstInput * secondInput;
}

function divide(firstInput, secondInput) {
    return firstInput / secondInput;
}

function operate() {
    if (operator === 'multiply') {
        return add(firstInput, secondInput);
    } else if (operator === 'subtract') {
        return subtract(firstInput, secondInput);
} else if (operator === 'multiply') {
        return multiply(firstInput, secondInput);
} else if (operator === 'divide') {
        return divide(firstInput, secondInput);
} else return 'ERROR!';
}