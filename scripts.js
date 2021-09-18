/* Need to create previousOperator and currentOperator function that evalues 
previous operator and doesn't drop new operator until next button is hit. */

"use strict";

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
        result = '';
        firstInput = inputArray.join('');
    } else if (operator != '' && result == '') {
        secondInput = inputArray.join('');
    } else if (operator != '' && result != '') {
        firstInput = result;
        secondInput = inputArray.join('');
    }
}));

equals.addEventListener('click', (e) => {
    operate();
    display.textContent = result;
    inputArray = [];
    console.log("1st in - ",firstInput,"2nd in - ", secondInput,"Operator - ", operator);
});

//Triggers clear actions.

clear.addEventListener('click', () => {
    display.innerHTML = '';
    display.textContent = '0';
    inputArray = [];
    firstInput = '';
    secondInput = '';
    operator = '';
    result = '';
});

//Selects operator.

operatorInput.forEach(operatorInput => operatorInput.addEventListener('click', (e) => {
    operator = e.target.id; // Check this - something not right
    inputArray = [];
    if (secondInput != '') {
        operate();
        console.log("1st in - ",firstInput,"2nd in - ", secondInput,"Operator - ", operator);
        display.textContent = result;
        firstInput = '';
        secondInput = '';
    };
}));

function add(a, b) {
    result = parseFloat(a) + parseFloat(b);
}

function subtract(a, b) {
    result = parseFloat(a) - parseFloat(b);
}

function multiply(a, b) {
    result = parseFloat(a) * parseFloat(b);
}

function divide(a, b) {
    result =  parseFloat(a) / parseFloat(b);
}

function operate() {
    if (operator === 'addition') {
        result = parseFloat(firstInput) + parseFloat(secondInput);
        return result;
    } else if (operator === 'subtract') {
        result = parseFloat(firstInput) - parseFloat(secondInput);
        return result;
    } else if (operator === 'multiply') {
        result = parseFloat(firstInput) * parseFloat(secondInput);
        return result;
    } else if (operator === 'divide') {
         result = parseFloat(firstInput) / parseFloat(secondInput);
         return result;
    } else return 'ERROR!';
};