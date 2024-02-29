const numbers = document.querySelectorAll(".number");
const operations = document.querySelectorAll(".operation");
const mainControl = document.querySelectorAll(".main-control");

document.addEventListener("click", (e) => {
  for (let i = 0; i < numbers.length; i++) {
    if (e.target === numbers[i]) {
      console.log(numbers[i].value);
    }
  }
  for (let i = 0; i < operations.length; i++) {
    if (e.target === operations[i]) {
      console.log(operations[i].value);
    }
  }
  for (let i = 0; i < mainControl.length; i++) {
    if (e.target === mainControl[i]) {
      console.log(e.target);
    }
  }
});
