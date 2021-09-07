const button = document.querySelectorAll('button');
const display = document.getElementById('content');
let inputArray = [];

//Evaluates each click for entry.

let numOperations = '';

button.forEach(button => button.addEventListener('click', () => {
    if (button.id == 'clear') {
            display.innerHTML = '';
            display.textContent = '0';
            inputArray = [];
     } else if (button.id != 'clear') {
            inputArray.push(button.textContent);
            display.textContent = inputArray.join('');
            return console.log(inputArray.join(''));
     }
    }
)       
);

let operator = '';
let firstInput = inputArray;
let secondInput = inputArray;


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
} else if (operator === '&times') {
        return multiply(firstInput, secondInput);
} else if (operater === '&divide') {
        return divide(firstInput, secondInput);
} else return 'ERROR!';
}