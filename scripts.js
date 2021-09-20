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

numberInput.forEach(numberInput => numberInput.addEventListener('click', () => {
    inputArray.push(numberInput.textContent);
    display.textContent = inputArray.join('');
    if (display.textContent > 8) display.textContent = display.textContent.substring(0,8);
    if (operator == '') {
        result = '';
        firstInput = display.textContent;
    } else if (operator != '' && result == '') {
        secondInput = display.textContent;
    } else if (operator != '' && result != '') {
        firstInput = result;
        secondInput = display.textContent;
    }
}));

equals.addEventListener('click', (e) => {
    operate();
    display.textContent = Math.round(result);
    inputArray = [];
    if (firstInput == '' && secondInput == '') {
        display.textContent = 0;
    } else if (firstInput != '' && secondInput == '') {
        display.textContent = firstInput;
    }
});


clear.addEventListener('click', () => {
    display.innerHTML = '';
    display.textContent = '0';
    inputArray = [];
    firstInput = '';
    secondInput = '';
    operator = '';
    result = '';
});


operatorInput.forEach(operatorInput => operatorInput.addEventListener('click', (e) => {
    inputArray = [];
    if (secondInput != '') {
        operate();
        display.textContent = Math.round(result);
        firstInput = '';
        secondInput = '';
    };
    operator = e.target.id;
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
        result = parseFloat(firstInput) + parseFloat(secondInput)
        return result
    } else if (operator === 'subtract') {
        result = parseFloat(firstInput) - parseFloat(secondInput);
        return result;
    } else if (operator === 'multiply') {
        result = parseFloat(firstInput) * parseFloat(secondInput);
        return result;
    } else if (operator === 'divide') {
         result = parseFloat(firstInput) / parseFloat(secondInput)
         return result;
    } else return 'ERROR!';
};