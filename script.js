let text = document.querySelectorAll(".text");
let display = document.querySelector(".display");
let clear = document.querySelector("#clear");
let backSpace = document.querySelector("#back");

text.forEach(text => text.addEventListener("click", () => {
    display.textContent += text.textContent;
}))

clear.addEventListener("click", () => display.textContent="");
backSpace.addEventListener("click", () => display.textContent = display.textContent.slice(0, -1));

