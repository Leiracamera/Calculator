// initialize variables 

displayValue = "0";
firstOperand = null;
secondOperand = null;
currentOperator = null;
result = null;


const output = document.querySelector('.calculator-output');
const numberKeys = document.querySelectorAll('.calculator-key-number');
const allClearKey = document.querySelector('.calculator-key-clear'); 


function updateOutput(e) {
  const key = e.target.textContent;

  if (output.textContent === '0') {
    output.textContent = key;
   } else {
    output.textContent += key;
  }
}

function clearOutput() {
  output.textContent = '0'
}

numberKeys.forEach(key => {
  key.addEventListener('click', updateOutput);
});

allClearKey.addEventListener('click', clearOutput);


function add(firstOperand, secondOperand) {
  return firstOperand + secondOperand;
}

function subtract(firstOperand, secondOperand) {
  return firstOperand - secondOperand;
}

function multiply(firstOperand, secondOperand) {
  return firstOperand * secondOperand;
}

function divide(firstOperand, secondOperand) {
  return firstOperand / secondOperand;
}

const display = document.querySelector('.calculator-output');

















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
  