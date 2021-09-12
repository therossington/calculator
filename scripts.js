const calculator = document.querySelector('.calculator');
const keypad = document.querySelector('.keypad');
const display = document.getElementById('content');

//Checks what user inputs - for testing.

keypad.addEventListener('click', (e) => {
    if (e.target.matches('button')) {
        const key = e.target;
        const action = key.dataset.action;
        if (!action) {
            console.log('number key');
        } else if (
            action === 'addition' ||
            action === 'subtract' ||
            action === 'multiply' ||
            action === 'divide'
        ) {
            console.log('operator key');
        } else if (action === 'decimal') {
            console.log('decimal key');
        } else if (action === 'clear') {
            console.log('clear key');
        } else if (action === 'equals') {
            console.log('equals key');
        };
    };
});

//Number display - how append non-zero and decimals to the display.

keypad.addEventListener('click', (e) => {
    if (e.target.matches('button')) {
        const key = e.target;
        const action = key.dataset.action;
        const content = key.textContent;
        const number = display.textContent;
        if (!action) {
            if (number === '0') {
                display.textContent = content;
            } else {
                display.textContent = number + content;
        }} else if (action === 'decimal') {
            display.textContent = number + '.';
        };
    };
});