const calculatorContainer = document.querySelector("#calculator-container");
let calculatorInput = document.querySelector("#calculator-input");
let canClickDecimal = true;
let isNumberComplete = false;
let OperatorClicked = false;

let firstNumberString = "";
let secondNumberString = "";

const firstNumber = (e) => {
  // This allows us to to only click on number classes
  const clickedNumber = e.target.classList.contains("number");

  if (clickedNumber) {
    // We don't want our zeros to continuously stack :)
    if (firstNumberString === "0") {
      // Handle the case where the first number is 0
      firstNumberString = e.target.value;
    } else if (e.target.value == "." && canClickDecimal) {
      firstNumberString += e.target.value;
      canClickDecimal = false;
      isNumberComplete = true;
    } else if (e.target.value !== ".") {
      firstNumberString += e.target.value;
      isNumberComplete = true;
    }
    calculatorInput.placeholder = firstNumberString;
    console.log(`This is first number: ${firstNumberString}`);
  }
};

calculatorContainer.addEventListener("click", firstNumber);

const operator = (e) => {
  const clickedOperator = e.target.classList.contains("operation");

  if (clickedOperator) {
    calculatorInput.placeholder = e.target.value;
    calculatorContainer.removeEventListener("click", firstNumber);
    console.log(`This is my operator: ${calculatorInput.placeholder}`);
    OperatorClicked = true;
  }
};

calculatorContainer.addEventListener("click", operator);

const secondNumber = (e) => {
  const clickedNumber = e.target.classList.contains("number");

  if (clickedNumber && OperatorClicked) {
    if (firstNumberString === "0") {
      // Handle the case where the first number is 0
      firstNumberString = e.target.value;
    } else if (e.target.value == "." && canClickDecimal) {
      firstNumberString += e.target.value;
      canClickDecimal = false;
      isNumberComplete = true;
    } else if (e.target.value !== ".") {
      firstNumberString += e.target.value;
      isNumberComplete = true;
    }
    calculatorInput.placeholder = firstNumberString;
    console.log(`This is first number: ${firstNumberString}`);
  }
};

calculatorContainer.addEventListener("click", secondNumber);
