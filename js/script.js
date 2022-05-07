let formElement = document.querySelector(".js-form");
let inputElement = document.querySelector(".js-input");
let firstElement = document.querySelector(".js-first");
let secondElement = document.querySelector(".js-second");
let outputElement = document.querySelector(".js-output");
formElement.addEventListener("input", () => {
    let A = inputElement.value;
    let B = firstElement.value;
    let C = secondElement.value;
    let output = (A * B) / C;
    outputElement.value = output.toFixed(2);
});










