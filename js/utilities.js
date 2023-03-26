/*
1.get the element by ID
2.get the value from the element
3.convert string to a number type
*/

//function for input field value 
function getInputFieldValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputFieldString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldString);
    inputField.value = '';
    return inputFieldValue;
}

//function for html element value access

function getElementValueById(elementId) {
    const elementField = document.getElementById(elementId);
    const elementValueString = elementField.innerText;
    const elementValue = parseFloat(elementValueString);
    return elementValue;
}

//function for add
function add(a, b) {
    const total = a + b;
    return total;
}

//function for deduct
function deduct(a, b) {
    const result = a - b;
    return result;
}

//function set text element
function setTextElementById(elementId, newValue) {
    const elementField = document.getElementById(elementId);
    elementField.innerText = newValue;
}

