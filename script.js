let num = document.querySelectorAll(".num");
let operation = document.querySelectorAll(".operation");
let equal = document.querySelector("#equal");
let display = document.querySelector(".display");
let clear = document.querySelector("#clear");
let backSpace = document.querySelector("#back");

let operationUse = false; // tells if an operation is in use
let dispNum = ""; // used for storing number after operation
let dispOp = ""; // used for storing the operation
let dispNum2 = "";
let total = 0;

function operationDefault() {
    operation.forEach(op => {
                op.style.backgroundColor = "lightgray";
                op.style.color = "black";    
            })
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
        if(dispNum === "" && dispOp === "") {
            dispNum = Number(display.textContent);
            console.log("dispnum"+dispNum);
            dispOp = button.textContent;
            console.log("dispop"+dispOp);
            operationDefault();
            button.style.backgroundColor = "black";
            button.style.color = "white";
            operationUse = true;
            if(total !== 0) {
                switch(dispOp) {
                    case "+":
                        display.textContent = Number(display.textContent) + total;
                        break;
                    case "-":
                        display.textContent = total - Number(display.textContent);
                        total -= dispNum;   
                        break;
                    case "×":
                        display.textContent = total * Number(display.textContent);
                        break;
                    case "÷":
                        display.textContent = total / Number(display.textContent);
                }
            }
            console.log("display"+display.textContent);
            console.log("total"+total);
        } else {
            dispNum2 = Number(display.textContent);
            console.log("dispnum2"+dispNum2);
            switch(dispOp) {
                case "+":
                    display.textContent = dispNum + dispNum2;
                    total += Number(display.textContent);
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
                    display.textContent = dispNum * dispNum2;
                    total *= Number(display.textContent);
                    break;
                case "÷":
                    display.textContent = dispNum / dispNum2;
                    total /= Number(display.textContent);
                    break;            
            }
            display.textContent = total;
            console.log(total+"total");
            dispNum = "";
            dispOp = "";
            dispNum2 = "";
            operationDefault();
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
    operationDefault();
});
backSpace.addEventListener("click", () => display.textContent = display.textContent.slice(0, -1));

