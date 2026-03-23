let num = document.querySelectorAll(".num");
let operation = document.querySelectorAll(".operation");
let equal = document.querySelector("#equal");
let display = document.querySelector(".display");
let clear = document.querySelector("#clear");
let backSpace = document.querySelector("#back");

let operationUse = false; // tells if an operation is in use
let dispNum = ""; // used for storing number after operation
let dispOp = []; // used for storing the operation
let operator;
let dispNum2 = "";
let total = 0;

function operationDefault() {
    operation.forEach(op => {
                op.style.backgroundColor = "lightgray";
                op.style.color = "black";    
            })
}

function equals() {
    equal.addEventListener("click", () => {

    })
}

function operationStatus(button) {
    button.style.backgroundColor = "black";
    button.style.color = "white";
    operationUse = true;
}

num.forEach(button => { // function for when a number is clicked
    button.addEventListener("click", () => {
        if(operationUse) {
            display.textContent = "";
            operationUse = false;
            display.textContent += button.textContent;
            operationDefault();
            equals();
        } else {
                display.textContent += button.textContent;
            }
        
    })
}) 

operation.forEach(button => { // function for when an operation is clicked
    button.addEventListener("click", () => {
        dispOp.push(button.textContent);
        if(dispNum === "") {
            dispNum = Number(display.textContent);
            operationDefault();
            operationStatus(button);
            if(total !== 0) {
                operator = dispOp[dispOp.length - 2];
                switch(operator) {
                    case "+":
                        display.textContent = dispNum + total;
                        total += dispNum;
                        break;
                    case "-":
                        display.textContent = total - dispNum;
                        total -= dispNum;   
                        break;
                    case "×":
                        display.textContent = total * dispNum;
                        total *= dispNum;
                        break;
                    case "÷":
                        display.textContent = total / dispNum;
                        total /= dispNum;
                }
            }

        } else {
            dispNum2 = Number(display.textContent);
           dispOp.length > 2 ? operator = dispOp[dispOp.length - 2] : 
           operator = dispOp[dispOp.length - 1];
            switch(operator) {
                case "+":
                    if(total === 0) {
                        display.textContent = dispNum + dispNum2;
                        total = Number(display.textContent);
                    } else {
                        total += dispNum2;
                    }
                    break;
                case "-":
                    if(total === 0) {
                        display.textContent = dispNum - dispNum2;
                        total = Number(display.textContent);
                    } else {
                        total -= dispNum2;
                    }
                    break;
                case "×":
                    if(total === 0) {
                        display.textContent = dispNum * dispNum2;
                        total = Number(display.textContent);
                    } else {
                        total *= dispNum2;
                    }
                    break;
                case "÷":
                    if(total === 0) {
                        display.textContent = dispNum / dispNum2;
                        total = Number(display.textContent);
                    } else {
                        total /= dispNum2;
                    }
                    break;            
            }
            display.textContent = total;
            dispNum = "";
            operationDefault();
            operationStatus(button);
        }
    })
})
             
clear.addEventListener("click", () => {
    display.textContent = "";
    dispNum = "";
    dispOp.length = 0;
    dispNum2 = "";
    total = 0;
    operationDefault();
});
backSpace.addEventListener("click", () => display.textContent = display.textContent.slice(0, -1));

