// Variables for clickable items
let operandA = '';
let operatorClick = '';
let operandB = '';
let output = document.querySelector('.calculator-output');

// Function to update output based on button clicks
function updateOutput(e) {
  const key = e.target.textContent;

  if (output.textContent === '0') {
    output.textContent = key;
   } else {
    output.textContent += key;
  }
}

// Function to clear output
function clearOutput() {
  output.textContent = '0';
  operandA = '';
  operatorClick = '';
  operandB = '';
}

// Add event listeners to number keys 
const numberKeys = document.querySelectorAll('.calculator-key-number');
numberKeys.forEach(key => {
  key.addEventListener('click', updateOutput);
});

// Add event listener to clear key
const allClearKey = document.querySelector('.calculator-key-ac');
allClearKey.addEventListener('click', clearOutput);

// Basic operations 
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => {
  if (b === 0) {
      return Error("Error: Division by Zero");
  } return a / b;
};

// Function to handle operator clicks
function handleOperatorClick(e) {
  const operator = e.target.textContent;
  if (operatorClick === '') {
    operandA = output.textContent;
    operatorClick = operator;
    output.textContent = '0';
  } else {
    operandB = output.textContent;
    output.textContent = calculate(operandA, operator, operandB);
    operandA = output.textContent;
    operatorClick = operator;
    output.textContent = '0';
  }
}

// Function to calculate result based on operator
function calculate(a, operator, b) {
  const numA = parseFloat(a);
  const numB = parseFloat(b);

  switch (operator) {
    case '+':
      return add(numA, numB);
    case '-':
      return subtract(numA, numB);
    case '*':
      return multiply(numA, numB);
    case '/':
      return divide(numA, numB);
    default:
      return 'Error';
  }
}

// Add event listeners to operator keys
const operatorKeys = document.querySelectorAll('.operator-key');
operatorKeys.forEach(key => {
  key.addEventListener('click', handleOperatorClick);
}); 













// const add = function(a, b) {
//     return a + b;
      
//   };
  
//   const subtract = function(a, b) {
//     return a - b;
      
//   };
  
//   const sum = function(numbers) {
//       return numbers.reduce((total, number) => total + number, 0);
//   };
  
//   const multiply = function(numbers) {
//     return numbers.reduce((total, number) => total * number, 1)
//   };
  
//   const power = function(base, exponent) {
//     return Math.pow(base, exponent);
//   };
  
//   const factorial = function(numbers) {
//     var result = numbers;
//     if (numbers === 0 || numbers === 1)
//       return 1;
//     while (numbers > 1) {
//       numbers--;
//       result *= numbers;
//     }
//     return result;
      
//   };

//   function operate() {
    
//   }
  
//   // Do not edit below this line
//   module.exports = {
//     add,
//     subtract,
//     sum,
//     multiply,
//     power,
//     factorial
//   };
  