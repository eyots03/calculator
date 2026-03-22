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
let total = 0;

num.forEach(button => { // function for when a number is clicked
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

operation.forEach(button => { // function for when an operation is clicked
    button.addEventListener("click", () => {
        if(dispNum === "" && dispOp === "") {
            dispNum = Number(display.textContent);
            dispOp = button.textContent;
            operation.forEach(op => {
                op.style.backgroundColor = "lightgray";
                op.style.color = "black";    
            })
            button.style.backgroundColor = "black";
            button.style.color = "white";
            operationUse = true;
            if(total !== 0) display.textContent = Number(display.textContent) + total;
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
            total += Number(display.textContent);
            dispNum = "";
            dispOp = "";
            dispNum2 = "";
            operation.forEach(op => {
                op.style.backgroundColor = "lightgray";
                op.style.color = "black";    
            })
            button.style.backgroundColor = "black";
            button.style.color = "white";
            operationUse = true;
        }
    })
})

equal.addEventListener("click", () => {
        
    })

             
clear.addEventListener("click", () => {
    display.textContent = "";
    dispNum = "";
    dispOp = "";
    dispNum2 = "";
    total = 0;
    operation.forEach(op => {
                op.style.backgroundColor = "lightgray";
                op.style.color = "black";    
            })
});
backSpace.addEventListener("click", () => display.textContent = display.textContent.slice(0, -1));

