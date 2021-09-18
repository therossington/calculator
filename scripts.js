const operatorInput = document.querySelectorAll('.operators');
const numberInput = document.querySelectorAll('.numbers');
const equals = document.getElementById('equals');
const clear = document.getElementById('clear');
const display = document.getElementById('content');
let inputArray = [];
let operator = '';
let firstInput = '';
let secondInput = '';
let previousResult = '';
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
        console.log("Second input = "+secondInput);
    } else if (operator != '' && result != '') {
        firstInput = previousResult;
        secondInput = inputArray.join('');
        console.log("First input = "+firstInput);
        console.log("Second input = "+secondInput);
    }
}));

equals.addEventListener('click', (e) => {
    operate();
    display.textContent = result;
    inputArray = [];
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
        operate();
        console.log("Result = " + result);
        display.textContent = result;
    }
}));

/* function add(a, b) {
    result = parseFloat(a) + parseFloat(b);
    return result;
}

function subtract(a, b) {
    result = parseFloat(a) - parseFloat(b);
}

function multiply(a, b) {
    result = parseFloat(a) * parseFloat(b);
}

function divide(a, b) {
    result =  parseFloat(a) / parseFloat(b);
} */

function operate() {
    switch(operator) {
        case 'addition':
            result = parseFloat(firstInput) + parseFloat(secondInput);
            //previousResult = result;
            break;
        case 'subtract':
            result = parseFloat(firstInput) - parseFloat(secondInput);
            //previousResult = result;
            break;
        case 'multiply':
            result = parseFloat(firstInput) * parseFloat(secondInput);
            //previousResult = result;
            break;
        case 'divide':
            result = parseFloat(firstInput) / parseFloat(secondInput);
            //previousResult = result;
            break;
    };
};
           
    /* if (operator === 'addition') {
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
    } */