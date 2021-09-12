const numberSelect = document.querySelectorAll('.numbers');
const operatorSelect = document.querySelectorAll('.operators');
const equalsSelect = document.getElementById('equals');
const clearSelect = document.getElementById('clear');
const previousOperandDisplay = document.getElementById('previous-operand');
const currentOperandDisplay = document.getElementById('current-operand');

class Calculator {
    constructor(previousOperandDisplay, currentOperantDisplay) {
        this.previousOperandDisplay = previousOperandDisplay;
        this.currentOperantDisplay = currentOperantDisplay;
        this.clear();
    };
};

const calculator = new Calculator(previousOperandDisplay, currentOperandDisplay);

function clear() {
    this.currentOperand = '';
    this.previousOperand = '';
    this.operation = '';
}

numberSelect.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.textContent);
        calculator.updateDisplay();
    })
});

operatorSelect.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.textContent);
        calculator.updateDisplay();
    });
});

function backspace() {

};

function appendNumber(number) {
    if (number === '.' && this.currentOperand.includes('.')) {
        return this.currentOperand = this.currentOperand.toString() + number.toString();
    };
};

function chooseOperation(a) {

};

function operate() {

};

function updateDisplay() {
    this.currentOperandDisplay.textContent = this.currentOperand;
};