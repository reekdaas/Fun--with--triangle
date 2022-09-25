const quizForm = document.querySelector(".quiz-form");
const submitButton = document.querySelector("#quiz-submit-btn");
const output = document.querySelector("#quiz-output");

const correctAnswers = [
  "90°",
  "right angled",
  "one right angle",
  "a + b + c",
  "45°",
];

const calculateScore = function () {
  const formsdata = new FormData(quizForm);
  let score = 0;
  let index = 0;
  for (let value of formsdata.values()) {
    if (value === correctAnswers[index]) {
      score = score + 1;
    }
    index = index + 1;
  }
  output.innerText = `Your score is ${score}`;
};

submitButton.addEventListener("click", calculateScore);
