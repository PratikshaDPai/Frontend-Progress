// create a calculator that does the following:
// add, subtract, get the sum, multiply, get the power, and find the factorial

function calculator(nums) {
  const operand1 = Number(nums[0]);
  const operand2 = Number(nums[2]);
  const operator = nums[1];
  function sum(a, b) {
    return a + b;
  }
  function diff(a, b) {
    return a - b;
  }
  function mul(a, b) {
    return a * b;
  }
  function div(a, b) {
    return a / b;
  }
  switch (operator) {
    case "+":
      console.log(sum(operand1, operand2));
      return sum(operand1, operand2);
    case "-":
      console.log(diff(operand1, operand2));
      return diff(operand1, operand2);

    case "*" || "x":
      console.log(mul(operand1, operand2));
      return mul(operand1, operand2);

    case "/":
      console.log(div(operand1, operand2));
      return div(operand1, operand2);

    default:
      break;
  }
  return 0;
}
let userInput = [];
const nums = document.querySelectorAll(".num");
const operators = document.querySelectorAll(".operator");
const inputBox = document.querySelector("#input");
const equals = document.querySelector("#equals");
function calculate() {
  console.log(userInput);
  inputBox.value = calculator(userInput);
  if (inputBox.value === 0) {
    userInput = [];
  } else userInput = [inputBox.value];
  console.log(`calculate ${userInput}`);
}
function addtoInputBox(data) {
  data.addEventListener("click", () => {
    inputBox.value = data.innerHTML;
    userInput.push(inputBox.value);
    console.log(`addtoInputBox ${userInput}`);
  });
}
for (const num of nums) {
  addtoInputBox(num);
}
for (const operator of operators) {
  addtoInputBox(operator);
}
equals.addEventListener("click", calculate);
