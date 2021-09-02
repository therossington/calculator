let operator = '*';
let firstInput = 5;
let secondInput = 10;

function add(firstInput,secondInput) {
    return firstInput + secondInput;
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
    if (operator === '+') {
        return add(firstInput, secondInput);
    } else if (operator === '-') {
        return subtract(firstInput, secondInput);
} else if (operator === '*') {
        return multiply(firstInput, secondInput);
} else if (operater === '/') {
        return divide(firstInput, secondInput);
} else return 'ERROR!';
}