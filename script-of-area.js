const inputValues = document.querySelectorAll(".input-value");
const submitButton = document.querySelector("#submit-button");
const output = document.querySelector("#output");
const calculateArea = function (base, height) {
  const area = (base * height) / 2;
  // console.log(area);
  return area;
};

const clickEventHandler = function () {
  let base = inputValues[0].value;
  let height = inputValues[1].value;
  if (base && height) {
    const areaOfTriangle = calculateArea(Number(base), Number(height));
    output.innerText = `Area of triangle is ${areaOfTriangle} cm²`;
  } else {
    output.innerText = `Please provide the required input`;
  }
};

submitButton.addEventListener("click", clickEventHandler);
