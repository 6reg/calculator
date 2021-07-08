const numberButtons = document.querySelectorAll("[data-number]");
const operatorButtons = document.querySelectorAll("[data-operator]");
const equalsButton = document.querySelector("[data-equals]");
const clearButton = document.querySelector("[data-ce]");
const deleteButton = document.querySelector("[data-delete]");
const dotButton = document.querySelector("[data-dot]");
const screen = document.querySelector("[data-screen]");

let firstOperand = "";
let secondOperand = "";
let operator = null;
let shouldResetScreen = false;

window.addEventListener("keydown", setInput);
equalsButton.addEventListener("click", evaluate);
clearButton.addEventListener("click", clear);
deleteButton.addEventListener("click", deleteNumber);
dotButton.addEventListener("click", appendPoint);

numberButtons.forEach((button) =>
    button.addEventListener("click", () => appendNumber(button.textContent)));

operatorButtons.forEach((button) => 
    button.addEventListener("click", setOperator));

equalsButton.addEventListener("click", getScore);
clearButton.addEventListener("click", clearScreen);
deleteButton.addEventListener("click", deleteNumber);
dotButton.addEventListener("click", setDot);

function appendNumber(number) {
    if (screen.textContent === "0" || shouldResetScreen) resetScreen();
    screen.textContent += number;
}

function setOperator(operatorButton) {
    if (operator === null) {
        firstOperand = screen.textContent;
        operator = operatorButton.target.textContent;
    } else {
        operator = operatorButton.target.textContent;
        getScore();
    }
    shouldResetScreen = true;
}

function getScore() {
    secondOperand = screen.textContent;
    firstOperand = operate(operator, firstOperand, secondOperand);
    secondOperand = "";
    screen.textContent = firstOperand;
}

function clearScreen() {
    screen.textContent = "0";
    firstOperand = "";
    secondOperand = "";
    operator = null;
}

function resetScreen() {
        screen.textContent = "";
        shouldResetScreen = false;
    }

function clear() {
    screen.textContent = "0";
    firstOperand = "";
    secondOperand = "";
    currentOperation = null;
}

function setDot() {
    if (shouldResetScreen) resetScreen();
    if (screen.textContent === "") screen.textContent = "0";
    if (screen.textContent.includes(".")) return;
    screen.textContent += ".";
}

function deleteNumber() {
    screen.textContent = screen.textContent.toString().slice(0, -1);
}

function setOperation(operator) {
    if (currentOperation != null) evaluate();
    firstOperand = screen.textContent;
    currentOperation = operator;
    shouldResetScreen = true;
}

function evaluate() {
    if (currentOperation === null || shouldResetScreen) return;
    if (currentOperation === "/" && screen.textContent === "0") {
        alert("OH SHI-");
        clear();
        return;
    }
    secondOperand = screen.textContent;
    screen.textContent = roundResult(
        operate(currentOperation, firstOperand, secondOperand)
    );
    currentOperation = null;
}

function roundResult(number) {
    return Math.round(number * 1000) / 1000;
}

function setInput(e) {
    if (e.key >= 0 && e.key <= 9) appendNumber(e.key);
    if (e.key === ".") appendPoint();
    if (e.key === "=" || e.key === "Enter") evaluate();
    if (e.key === "Backspace") deleteNumber();
    if (e.key === "Escape") clear();
    if (e.key === "+" || e.key === "-" || e.key === "*" || e.key === "/")
        setOperation(convertOperator(e.key));
}

function convertOperator(keyboardOperator) {
    if (keyboardOperator === "/") return "/";
    if (keyboardOperator === "*") return "x";
    if (keyboardOperator === "-") return "-";
    if (keyboardOperator === "+") return "+";
}

const add = (a,b) => a + b;
const subtract = (a,b) => a - b;
const multiply = (a,b) => a * b;
const divide = (a,b) => a / b;

function operate(operator, a, b) {
    a = Number(a);
    b = Number(b);
    switch (operator) {
        case "+":
            return add(a,b);
        case "-":
            return subtract(a,b);
        case "x":
            return multiply(a,b);
        case "/":
            return divide(a,b);
        default:
            return;
    }
}



    