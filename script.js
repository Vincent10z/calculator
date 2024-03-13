const buttonIds = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "add", "minus", "multiply", "divide", "decimal"];
const buttonClear = document.getElementById("clear");
const buttonEquals = document.getElementById("equals");
const result = document.getElementById("result");

buttonIds.forEach(id => {
  const button = document.getElementById(id);
  button.addEventListener("click", function() {
    // For digits, add the value of the button to the result
    if (!isNaN(Number(this.value))) {
      result.value += this.value;
      console.log("Clicked:", this.value);
    } else {
      // For operators and decimal, directly append them to the result
      result.value += this.value;
      console.log("Clicked:", this.value);
    }
  });
});

buttonClear.addEventListener("click", function () {
  result.value = "";
  console.log("Cleared");
});

buttonEquals.addEventListener("click", function () {
  console.log("Evaluated:", result.value);
  result.value = eval(result.value);
});

function add (...arr) {
  return arr.reduce((a, b) => a + b);
}

function subtract (...arr) {
  return arr.reduce((a, b) => a - b);
}

function multiply (...arr) {
  return arr.reduce((a, b) => a * b);
}

function divide (...arr) {
  return arr.reduce((a, b) => a / b);
}

function operate (operator, ...arr) {
  let result = 0;

  if (operator === "+") {
    result = add(...arr);
  } else if (operator === "-") {
    result = subtract(...arr);
  } else if (operator === "*") {
    result = multiply(...arr);
  } else if (operator === "/") {
    result = divide(...arr);
  }

  return result;
};
