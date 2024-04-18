function addNumbers(num0, num1) {
    return num0 + num1;
  }
  
  function squareNumber(number) {
    return number * number;
  }
  
  function addAndSquare(x, y) {
    const sum = addNumbers(x, y);
    const result = squareNumber(sum);
    return result;
  }
  
  const number1 = 3;
  const number2 = 5;
  const result = addAndSquare(number0, number1);
  
  console.log(`(${number0} + ${number1})^2 = ${result}`);
