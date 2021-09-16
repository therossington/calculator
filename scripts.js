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
        console.log("First input = "+firstInput);
    } else if (operator != '' && result == '') {
        secondInput = inputArray.join('');
        // operate(firstInput, secondInput);       
        console.log("Second input = "+secondInput);
    } else if (operator != '' && result != '') {
        firstInput = result;
        secondInput = inputArray.join('');
        console.log("First input = "+firstInput);
        console.log("Second input = "+secondInput);
    }
}));

equals.addEventListener('click', (e) => {
    display.textContent = result;
    return console.log(result + e.target.id);
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
    operator = e.target.id; 
    inputArray = [];
    console.log(operator);
    if (secondInput != '') {
        operate(firstInput, secondInput);
        console.log("Result = " + result);
        display.textContent = result;
    }
}));

function add(a, b) {
    result = parseFloat(a) + parseFloat(b);
    return result;
}

function subtract(a, b) {
    result = parseFloat(a) - parseFloat(b);
    return result;
}

function multiply(a, b) {
    result = parseFloat(a) * parseFloat(b);
    return result;
}

function divide(a, b) {
    result =  parseFloat(a) / parseFloat(b);
    return result;
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

equals.addEventListener('click', (e) => {
    return console.log(result + e.target.id);
});

