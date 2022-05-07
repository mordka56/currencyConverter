{
    const onFormSubmit = () => {
        const inputElement = document.querySelector(".js-input");
        const outputElement = document.querySelector(".js-output");
        const firstElement = document.querySelector(".js-first");
        const secondElement = document.querySelector(".js-second");
        calculateResult(inputElement, outputElement, firstElement, secondElement);

    };
    const calculateResult = (inputElement, outputElement, firstElement, secondElement) => {
        const input = inputElement.value;
        const firstValue = firstElement.value;
        const secondValue = secondElement.value;
        const output = (input * firstValue) / secondValue;
        outputElement.value = output.toFixed(2);
    }

    const init = () => {
        const formElement = document.querySelector(".js-form");
        formElement.addEventListener("input", onFormSubmit);

    }
    init();
}











