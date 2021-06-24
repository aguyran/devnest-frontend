let questions = null;
let globalQues = 0;
let score = 0;
let mergedArray = [];
const totalQuestions = 10;
const difficulty = document.getElementById("difficulty").value;
const startBtn = document.getElementById("start");
const mainDiv = document.getElementById("main");
const container = document.getElementById("container");
const quesContainerMain = document.getElementById("quesContainer");
const scoreLabel = document.getElementById("score");

const questionNumLabel = document.getElementById("question-number");
startBtn.addEventListener("click", () => {
  fetch(
    `https://opentdb.com/api.php?amount=${totalQuestions}&difficulty=${difficulty}`
  ).then(function (response) {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    console.log(response.status);
    response.json().then(function (response) {
      if (!response["response_code"]) {
        questions = response["results"];
        startQuiz();
      } else console.log("error! Fetching");
    });
  });
});

function startQuiz() {
  mainDiv.classList.remove("main-menu");
  mainDiv.classList.add("game-canvas");
  startBtn.classList.add("disabled");
  document.getElementById("main2").classList.add("disabled");
  document.getElementById("main2").classList.remove("random");
  quesContainerMain.classList.remove("disabled");
  container.classList.remove("disabled");
  container.classList.add("game-container");
  scoreLabel.classList.remove("disabled");
  quesContainerMain.appendChild(quesObj(globalQues));
  questionNumLabel.classList.remove("disabled");
}

function quesObj(quesNum) {
  questionNumLabel.innerText = `Question ${
    globalQues + 1
  } out of ${totalQuestions}`;
  let quesContainer = document.createElement("div");
  mergedArray = [
    ...questions[quesNum]["incorrect_answers"],
    questions[quesNum]["correct_answer"],
  ];
  console.log(mergedArray);
  shuffle(mergedArray);
  let ques = document.createElement("h1");
  ques.className = "heading";
  ques.innerHTML = questions[quesNum]["question"];
  quesContainer.appendChild(ques);

  if (questions[quesNum]["type"] === "boolean") {
    quesContainer.appendChild(optionObject(2, mergedArray));
  } else if (questions[quesNum]["type"] === "multiple") {
    quesContainer.appendChild(optionObject(4, mergedArray));
  }
  return quesContainer;
}

function optionObject(numberOfOptions, mergedArray) {
  let optionDiv = document.createElement("div");
  optionDiv.className = "options";
  for (let i = 0; i < numberOfOptions; i++) {
    let optionName = document.createElement("p");
    let optionButton = document.createElement("button");
    optionName.className = "option-name";
    optionName.innerHTML = mergedArray[i];
    optionButton.className = "ans-btn";
    optionDiv.appendChild(optionName);
    optionDiv.appendChild(optionButton);
    optionButton.innerText = "Select Option";
    optionButton.addEventListener("click", () => forButton(i));
  }

  return optionDiv;
}

// Fishers Algorithm From
// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array

function shuffle(array) {
  var currentIndex = array.length,
    randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}
function forButton(i) {
  if (mergedArray[i] === questions[globalQues]["correct_answer"]) {
    score += 1;
  }
  globalQues += 1;
  if (globalQues == 10) gameOver();
  quesContainerMain.removeChild(quesContainerMain.childNodes[0]);
  quesContainerMain.appendChild(quesObj(globalQues));
  scoreLabel.innerText = `Score: ${score}`;
}

function gameOver() {}
