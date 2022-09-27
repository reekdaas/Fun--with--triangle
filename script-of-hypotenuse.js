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
    if (sideA > 0 && sideB > 0) {
      let sum = calSumofSquare(Number(sideA), Number(sideB));
      let length = Math.sqrt(sum);
      let lengthOfHypotenuse = length.toFixed();
      // console.log(lengthOfHypotenuse);
      output.innerText = `The length of hypotenuse is ${lengthOfHypotenuse}`;
    } else {
      output.innerText = `Input should be greater than zero`;
    }
  } else {
    output.innerText = `Please provide the required input`;
  }
};

submitButton.addEventListener("click", calculateHypotenuse);
