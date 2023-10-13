function calculator(num1, num2, operator) {
    let result;
  
    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        if (num2 !== 0) {
          result = num1 / num2;
        } else {
          console.log("Division by zero is not allowed");
          return;
        }
        break;
      default:
        console.log("Invalid operator");
        return;
    }
  
    console.log("Result: " + result);
  }
  
  // Example usage:
  calculator(5, 3, '+'); // Output: Result: 8
  calculator(8, 4, '-'); // Output: Result: 4
  calculator(6, 2, '*'); // Output: Result: 12
  calculator(10, 0, '/'); // Output: Division by zero is not allowed
  calculator(7, 3, '%'); // Output: Invalid operator
  