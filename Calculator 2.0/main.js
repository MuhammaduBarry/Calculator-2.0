const calculatorContainer = document.querySelector("#calculator-container");
let calculatorInput = document.querySelector("#calculator-input");
let canClickDecimal = true;
let isNumberComplete = false;
let OperatorClicked = false;
let isCalculatorOn = true;

let firstNumberString = "";
let secondNumberString = "";
let operatorType = "";

const number = (e, numberString) => {
  const clickedNumber = e.target.classList.contains("number");

  if (clickedNumber) {
    // We don't want our zeros to continuously stack :)
    if (numberString === "0") {
      // Handle the case where the first number is 0
      numberString = e.target.value;
    } else if (e.target.value === "." && canClickDecimal) {
      // This allows our string to stack and add our numbers
      numberString += e.target.value;
      // Only one decimal is allowed in numbers
      canClickDecimal = false; // Once turned false then another decimal is not allowed
      // This checks if the number is completed so the second one can run after the operation
      isNumberComplete = true;
    } else if (e.target.value !== ".") {
      // If not then we just continuously add numbers
      numberString += e.target.value;
      isNumberComplete = true;
    }
    calculatorInput.placeholder = numberString;
    console.log(`this is my number: ${numberString}`);
  }
  // In the end we need to return our number string
  return numberString;
};

const firstNumber = (e) => {
  // We need to assign our string to the function so that our value can get updated
  firstNumberString = number(e, firstNumberString);
};

calculatorContainer.addEventListener("click", firstNumber);

const operator = (e) => {
  const clickedOperator = e.target.classList.contains("operation");

  if (clickedOperator && isNumberComplete) {
    calculatorContainer.removeEventListener("click", firstNumber);
    operatorType = e.target.value;
    calculatorInput.placeholder = e.target.value;
    calculatorContainer.removeEventListener("click", firstNumber);
    console.log(`This is my operator: ${calculatorInput.placeholder}`);
    OperatorClicked = true;
  }
};

calculatorContainer.addEventListener("click", operator);

const secondNumber = (e) => {
  if (OperatorClicked) {
    calculatorContainer.removeEventListener("click", operator);
    secondNumberString = number(e, secondNumberString);
  }
};

calculatorContainer.addEventListener("click", secondNumber);

let result;

const operation = (e) => {
  const clearButton = document.querySelector("#clear-button");
  const offButton = document.querySelector("#off-button");
  if (e.target.value === "=") {
    calculatorContainer.removeEventListener("click", secondNumber);
    switch (operatorType) {
      case "%":
        result = firstNumberString % secondNumberString;
        console.log(
          `${firstNumberString} ${operatorType} ${secondNumberString} is: ${result}`
        );
        break;
      case "/":
        result = firstNumberString / secondNumberString;
        console.log(
          `${firstNumberString} ${operatorType} ${secondNumberString} is: ${result}`
        );
        break;
      case "*":
        result = firstNumberString * secondNumberString;
        console.log(
          `${firstNumberString} ${operatorType} ${secondNumberString} is: ${result}`
        );
        break;
      case "-":
        result = firstNumberString - secondNumberString;
        console.log(
          `${firstNumberString} ${operatorType} ${secondNumberString} is: ${result}`
        );
        break;
      case "+":
        result = firstNumberString + secondNumberString;
        console.log(
          `${firstNumberString} ${operatorType} ${secondNumberString} is: ${result}`
        );
        break;
      default:
        console.log("Sorry something went wrong");
    }
  } else if (e.target === clearButton) {
    firstNumberString = "";
    secondNumberString = "";
    calculatorInput.placeholder = "0";
    console.log(`Initial input is now: ${calculatorInput.placeholder}`);
  } else if (e.target === offButton) {
    calculatorInput.placeholder = "";
    firstNumberString = "";
    secondNumberString = "";
    console.log("Calculator is off");
    isCalculatorOn = false;
  }
};

calculatorContainer.addEventListener("click", operation);
