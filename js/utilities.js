function getInputField(inputId) {
    let inputField = document.getElementById(inputId);
    let inputValueString = inputField.value;
    let inputValue = parseFloat(inputValueString);
    inputField.value = "";
    return inputValue;
}

function getElement(elementId) {
    let element = document.getElementById(elementId);
    let elementTextString = element.innerText;
    let elementText = parseFloat(elementTextString);
    return elementText;
}

function setTotalAmountValue(elementId, total) {
    let elementIdd = document.getElementById(elementId);
    elementIdd.innerText = total;
}