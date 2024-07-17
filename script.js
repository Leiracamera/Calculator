const add = function(a, b) {
    return a + b;
      
  };
  
  const subtract = function(a, b) {
    return a - b;
      
  };
  
  const sum = function(numbers) {
      return numbers.reduce((total, number) => total + number, 0);
  };
  
  const multiply = function(numbers) {
    return numbers.reduce((total, number) => total * number, 1)
  };
  
  const power = function(base, exponent) {
    return Math.pow(base, exponent);
  };
  
  const factorial = function(numbers) {
    var result = numbers;
    if (numbers === 0 || numbers === 1)
      return 1;
    while (numbers > 1) {
      numbers--;
      result *= numbers;
    }
    return result;
      
  };
  
  // Do not edit below this line
  module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial
  };
  