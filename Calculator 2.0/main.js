const calculatorButtons = document.querySelectorAll(
  ".number, .operation, .main-control"
);

const test = () => {
  for (let i = 0; i < calculatorButtons.length; i++) {
    const button = calculatorButtons[i];

    if (button.classList.contains("number")) {
      console.log(button.value);
    } else if (button.classList.contains("operation")) {
      console.log(button.value);
    } else if (button.classList.contains("main-control")) {
      console.log(button.value);
    }
  }
};
