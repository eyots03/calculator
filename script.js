let num = document.querySelectorAll(".num");
let operation = document.querySelectorAll(".operation");
let equal = document.querySelector("#equal");
let display = document.querySelector(".display");
let clear = document.querySelector("#clear");
let backSpace = document.querySelector("#back");

let operationUse = false; // tells if an operation is in use
let equalUse = false;
let dispNum = []; // used for storing number after operation
let dispOp = []; // used for storing the operation
let operator; // chooses the right operator from disOp
let total = 0;

function operationDefault() { // function that reverts the operation buttons to it's default behaviour
    operation.forEach(button => {
        button.disabled = false;
        button.style.backgroundColor = "lightgray";
        button.style.color = "black";    
    })
}

function operationStatus(button) { // function for when operation button is in use
    operation.forEach((button) => button.disabled = true)
    button.style.backgroundColor = "rgb(22, 23, 42)";
    button.style.color = "white";
    operationUse = true;
    button.disabled = true;
}

function operationError() { // function for when an error occurs
    switch (display.textContent) {
    case "Infinity":
        display.textContent = "You can't divide by zero!";
        break;
    case "NaN":
        display.textContent = "Error!";
        break;
}}

function operationCalc(preValue) { // function for basic operations
    switch(operator) {
        case "+":
            if(total === 0 && dispNum.length < 3) {
                display.textContent = preValue + Number(display.textContent);
                total = Number(display.textContent);
            } else {
                display.textContent = total + Number(display.textContent);
                total = Number(display.textContent);
            }
            break;
        case "-":
            if(total === 0 && dispNum.length < 3) {
                display.textContent = preValue - Number(display.textContent);
                total = Number(display.textContent);
            } else {
                display.textContent = total - Number(display.textContent);
                total = Number(display.textContent);
            }
            break;
        case "×":
            if(total === 0 && dispNum.length < 3) {
                display.textContent = preValue * Number(display.textContent);
                total = Number(display.textContent);
            } else {
                display.textContent = total * Number(display.textContent);
                total = Number(display.textContent);
            }
            break;
        case "÷":
            if(total === 0 && dispNum.length < 3) {
                display.textContent = preValue / Number(display.textContent);
                total = Number(display.textContent);
            } else {
                display.textContent = total / Number(display.textContent);
                total = Number(display.textContent);
            }
            break;            
    }
}

num.forEach(button => { // function for when a number is clicked
    button.addEventListener("click", () => {
        if(operationUse || equalUse) {
            num.forEach((button) => button.disabled = false)
            display.textContent = "";
            operationUse = false;
            equalUse = false;
            display.textContent += button.textContent;
            operationDefault();
        } else {
                display.textContent += button.textContent;
            }   
        if(button.textContent === ".") button.disabled = true;    
    })
}) 

operation.forEach(button => { // function for when an operation is clicked
    button.addEventListener("click", () => {
        dispNum.push(Number(display.textContent));
        dispOp.push(button.textContent);

        if(dispNum.length < 2) {
            operationDefault();
            operationStatus(button);
        } else {
            operator = dispOp[dispOp.length - 2];
            operationCalc(dispNum[dispNum.length - 2]);
            operationDefault();
            operationStatus(button);
        }
        operationError();
    })
})

equal.addEventListener("click", () => { // function for equals
    if(operationUse === false && equalUse === false) {
        equalUse = true;
        operator = dispOp[dispOp.length - 1];
        operationCalc(dispNum[dispNum.length - 1]);
        operationError();
        dispNum.length = 0;
        dispOp.length = 0;
        total = 0;
    }
})
             
clear.addEventListener("click", () => { // function for clear
    display.textContent = "";
    dispNum.length = 0;
    dispOp.length = 0;
    total = 0;
    num.forEach((button) => button.disabled = false)
    operationDefault();
})

backSpace.addEventListener("click", () => {
    if(operationUse !== true) display.textContent = display.textContent.slice(0, -1);
})