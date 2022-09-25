const sides = document.querySelectorAll(".side-input");
const submitButton = document.querySelector("#submit-btn");
const output = document.querySelector("#output");

const calSumofSquare = function (a, b) {
  const sumOfSquares = a * a + b * b;
  return sumOfSquares;
};

const calculateHypotenuse = function () {
  const sideA = sides[0].value;
  const sideB = sides[1].value;

  if (sideA && sideB) {
    let sum = calSumofSquare(Number(sideA), Number(sideB));
    let lengthOfHypotenuse = Math.sqrt(sum);
    // console.log(lengthOfHypotenuse);
    output.innerText = `The length of hypotenuse is ${lengthOfHypotenuse}`;
  } else {
    output.innerText = `Please provide the required input`;
  }
};

submitButton.addEventListener("click", calculateHypotenuse);
