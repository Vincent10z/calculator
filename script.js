// Define buttonIds array and other variables
const buttonIds = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "add", "minus", "multiply", "divide", "decimal"];
const buttonClear = document.getElementById("clear");
const buttonEquals = document.getElementById("equals");
const result = document.getElementById("result");

// Loop to add event listeners to buttons
buttonIds.forEach(id => {
  const button = document.getElementById(id);
  button.addEventListener("click", function() {
    result.value += button.textContent; // Append the text content of the button
    console.log("Clicked:", button.textContent);
  });
});

// Event listener for the clear button
buttonClear.addEventListener("click", function () {
  result.value = "";
  console.log("Cleared");
});

// Event listener for the equals button
buttonEquals.addEventListener("click", function () {
  console.log("Evaluated:", result.value);
  result.value = evaluateExpression(result.value);
});

// Functions for arithmetic operations
function evaluateExpression(expression) {
  const operators = ["+", "-", "*", "/"];
  let operands = expression.split(/[-+*/]/).map(Number);
  let operator = expression.split("").find(char => operators.includes(char));
  
  if (operands.length === 2 && operator) {
    return operate(operator, ...operands);
  } else {
    return "Invalid expression";
  }
}

function operate(operator, ...operands) {
  switch (operator) {
    case "+":
      return add(...operands);
    case "-":
      return subtract(...operands);
    case "*":
      return multiply(...operands);
    case "/":
      return divide(...operands);
    default:
      return "Invalid operator";
  }
}

function add(...operands) {
  return operands.reduce((acc, val) => acc + val, 0);
}

function subtract(...operands) {
  return operands.reduce((acc, val) => acc - val);
}

function multiply(...operands) {
  return operands.reduce((acc, val) => acc * val, 1);
}

function divide(...operands) {
  if (operands.includes(0)) {
    return 'Bro, 0? Really?';
}
  return operands.reduce((acc, val) => acc / val);
}
