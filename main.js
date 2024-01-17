// Connecting to HTML elements
const botDisplay = document.querySelector("#botDisplay");
const topDisplay = document.querySelector("#topDisplay");
const numBtn = document.querySelectorAll(".numBtn");
const clear = document.querySelector('.clear');
const operateBtn = document.querySelectorAll('.operateBtn');
const equal = document.querySelector('.equal');

// Faux display
// display.textContent = '24 + 88';

// Basic functions
const add = (a,b) => a+b;

const subtract = (a,b) => a-b;

const multiply = (a,b) => a*b;

const divide = (a,b) => a/b;

let val1;
let val2;
let equalClicked = false;


const operations = {
    add: (a,b) => a+b,
    subtract: (a,b) => a-b,
    multiply: (a,b) => a*b,
    divide: (a,b) => a/b,
}

let operationClicked;


// function to update display
const updateDisplay = (num) => {
    botDisplay.textContent += num.textContent;
}

// Updates display with number clicked
numBtn.forEach(num => {
    num.addEventListener("click", () => {
        updateDisplay(num);
    })
})

    // Updates display with operation clicked
    operateBtn.forEach(op => {
        op.addEventListener("click", () => {
            val1 = parseInt(botDisplay.textContent);
            updateDisplay(op);
            topDisplay.textContent = botDisplay.textContent;
            operationClicked = op.id;
            botDisplay.textContent = '';
        })
    })




// Clear display
clear.addEventListener("click", () => {
    botDisplay.textContent = '';
    topDisplay.textContent = '';
    val1 = '';
    val2 = '';
    equalClicked = false;
    // Make sure to clear other variables as well
})

const clearFn = () => botDisplay.textContent = '';



equal.addEventListener("click", () => {
    val2 = parseInt(botDisplay.textContent);
    topDisplay.textContent += botDisplay.textContent + '=';
    // Perform operation clicked
    if(operationClicked === 'add'){
        val1 = operations.add(val1,val2);
    } else if(operationClicked === 'subtract'){
        val1 = operations.subtract(val1,val2);
    } else if(operationClicked === 'divide'){
        val1 =  operations.divide(val1,val2);
    } else if(operationClicked === 'multiply'){
       val1 = operations.multiply(val1,val2);
    }

    clearFn();
    botDisplay.textContent = val1;
    equalClicked = true;
})