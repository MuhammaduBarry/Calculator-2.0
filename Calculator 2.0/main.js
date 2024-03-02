const calculatorButtons = document.querySelectorAll(
  ".number, .operation, .main-control"
);
const calculatorContainer = document.querySelector("#calculator-container");
let calculatorInput = document.querySelector("#calculator-input");

// Creating a string to hold our values
let firstNumberString = "";

// We can only have one decimal click, so we use this to check
let canClickDecimal = true;

// This allows us to hold our values
const firstNumber = (e) => {
  let count = 0;
  // This allows us to to only click on number classes
  const clickedNumber = e.target.classList.contains("number");
  if (clickedNumber) {
    if (e.target.value == "." && canClickDecimal) {
      firstNumberString += e.target.value;
      canClickDecimal = false;
    } else if (e.target.value !== ".") {
      firstNumberString += e.target.value;
    }
  }

  console.log(firstNumberString);
};

calculatorContainer.addEventListener("click", firstNumber);
