let num = document.querySelectorAll(".num");
let operation = document.querySelectorAll(".operation");
let equal = document.querySelector("#equal");
let display = document.querySelector(".display");
let clear = document.querySelector("#clear");
let backSpace = document.querySelector("#back");

let operationUse = false; // tells if an operation is in use
let dispNum = []; // used for storing number after operation
let dispOp = []; // used for storing the operation
let operator; // chooses the right operator from disOp
let total = 0;

function operationDefault() {
    operation.forEach(op => {
                op.style.backgroundColor = "lightgray";
                op.style.color = "black";    
            })
}

function operationStatus(button) {
    button.style.backgroundColor = "black";
    button.style.color = "white";
    operationUse = true;
}

function operationCalc(preValue) {
    switch(operator) {
        case "+":
            if(total === 0) {
                display.textContent = preValue + Number(display.textContent);
                total = Number(display.textContent);
            } else {
                display.textContent = total + Number(display.textContent);
                total = Number(display.textContent);
            }
            break;
        case "-":
            if(total === 0) {
                display.textContent = preValue - Number(display.textContent);
                total = Number(display.textContent);
            } else {
                display.textContent = total - Number(display.textContent);
                total = Number(display.textContent);
            }
            break;
        case "×":
            if(total === 0) {
                display.textContent = preValue * Number(display.textContent);
                total = Number(display.textContent);
            } else {
                display.textContent = total * Number(display.textContent);
                total = Number(display.textContent);
            }
            break;
        case "÷":
            if(total === 0) {
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
        if(operationUse) {
            display.textContent = "";
            operationUse = false;
            display.textContent += button.textContent;
            operationDefault();
        } else {
                display.textContent += button.textContent;
            }
        
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
    })
})

equal.addEventListener("click", () => {
    operator = dispOp[dispOp.length - 1];
    operationCalc(dispNum[dispNum.length - 1]);
    console.log(total);
})
             
clear.addEventListener("click", () => {
    display.textContent = "";
    dispNum.length = 0;
    dispOp.length = 0;
    total = 0;
    operationDefault();
})

backSpace.addEventListener("click", () => display.textContent = display.textContent.slice(0, -1))

