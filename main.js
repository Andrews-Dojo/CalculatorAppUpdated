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
let count = 0;

// Object containing operations
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
            if(count<1){
                val1 = parseInt(botDisplay.textContent);
                updateDisplay(op);
                operationClicked = op.id;
                topDisplay.textContent += botDisplay.textContent;
                botDisplay.textContent = '';
                count++;
            } else {
                val2 = parseInt(botDisplay.textContent);
                performOperation();
                topDisplay.textContent = val1;
                //updateDisplay(op);
                operationClicked = op.id;
                topDisplay.textContent += op.textContent;
                botDisplay.textContent = '';
            }
            

        })
    })


    



// Clear display
clear.addEventListener("click", () => {
    botDisplay.textContent = '';
    topDisplay.textContent = '';
    val1 = 0;
    val2 = 0;
    count = 0;
    // Make sure to clear other variables as well
})



const performOperation = () => {
    val2 = parseInt(botDisplay.textContent);
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
    val1 = val1.toFixed(2);
}

const checkFor0 = () => {
    if (operationClicked === 'divide' && val2 === 0){
        botDisplay.textContent = 'Cant divide by 0, IDIOT';
    }
}

equal.addEventListener("click", () => {
    topDisplay.textContent += botDisplay.textContent + '=';
    performOperation();    
    botDisplay.textContent = val1;
    checkFor0();
    count = 0;
})