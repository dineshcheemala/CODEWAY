let displayValue = '0';

function updateDisplay() {
    document.getElementById('display').innerText = displayValue;
}

function clearDisplay() {
    displayValue = '0';
    updateDisplay();
}

function appendNumber(number) {
    if (displayValue === '0' && number !== '.') {
        displayValue = number;
    } else {
        displayValue += number;
    }
    updateDisplay();
}

function operate(operator) {
    displayValue += operator;
    updateDisplay();
}

function calculate() {
    displayValue = eval(displayValue);
    updateDisplay();
}
