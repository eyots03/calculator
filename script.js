let num = document.querySelectorAll(".num");
let operation = document.querySelectorAll(".operation");
let equal = document.querySelector("#equal");
let display = document.querySelector(".display");
let clear = document.querySelector("#clear");
let backSpace = document.querySelector("#back");
let input = []; // takes user input
let operationUse = false; // tells if an operation is in use
let dispNum = ""; // used for storing number after operation
let dispOp = ""; // used for storing the operation
let dispNum2 = "";

num.forEach(button => {
    button.addEventListener("click", () => {
        if(operationUse) {
            display.textContent = "";
            operationUse = false;
            display.textContent += button.textContent;
            operation.forEach(op => {
                op.style.backgroundColor = "lightgray";
                op.style.color = "black";    
            })
        } else {
                display.textContent += button.textContent;
            }
        
    })
}) 

operation.forEach(button => {
    button.addEventListener("click", () => {
        if(dispNum === "" && dispOp === "") {
            dispNum = Number(display.textContent);
            dispOp = button.textContent;
            button.style.backgroundColor = "black";
            button.style.color = "white";
            operationUse = true;
            function inputHandler(numb, op) {
                let inputType = {
                    numbr: numb,
                    oprt: op
                }
                input.push(inputType);
            }
            inputHandler(dispNum, dispOp);
        } else {
            dispNum2 = Number(display.textContent);
            switch(dispOp){
                case "+":
                    display.textContent = dispNum + dispNum2;
                    break;
                case "-":
                    display.textContent = dispNum - dispNum2;
                    break;
                case "×":
                    display.textContent = dispNum * dispNum2;
                    break;
                case "÷":
                    display.textContent = dispNum / dispNum2;
                    break;            
            }
            dispNum = "";
            dispOp = "";
            dispNum2 = "";
        }
    })
})

equal.addEventListener("click", () => {
        
    })

             
clear.addEventListener("click", () => display.textContent = "");
backSpace.addEventListener("click", () => display.textContent = display.textContent.slice(0, -1));

