const inputs = document.querySelectorAll(".angle-input");
const isTriangleButton = document.querySelector("#is-Triangle");
const output = document.querySelector("#output");

function sumOfAngles(angle1, angle2, angle3) {
  let sum = angle1 + angle2 + angle3;
  return sum;
}

const isTriangle = function () {
  const angle1 = inputs[0].value;
  const angle2 = inputs[1].value;
  const angle3 = inputs[2].value;
  if (angle1 && angle2 && angle3) {
    if (angle1 > 0 && angle2 > 0 && angle3 > 0) {
      const sum = sumOfAngles(
        Number(inputs[0].value),
        Number(inputs[1].value),
        Number(inputs[2].value)
      );
      if (sum === 180) {
        output.innerText = `Great! It's a triangle`;
      } else {
        output.innerText = `Oh! It's not a triangle`;
      }
    } else {
      output.innerText = `Input should be greater than zero`;
    }
  } else {
    output.innerText = `Please provied required inputs`;
  }
};

isTriangleButton.addEventListener("click", isTriangle);
