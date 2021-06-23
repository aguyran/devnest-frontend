let movies = null;
const startBtn = document.getElementById("start");
const mainDiv = document.getElementById("main");
const container = document.getElementById("container");
startBtn.addEventListener("click", () => random());
async function random() {
  const response = await fetch(
    "https://opentdb.com/api.php?amount=10&difficulty=medium"
  );
  movies = await response.json();
  if (movies["response_code"] === 0) {
    console.log(movies);
    movies = movies["results"];
    startQuiz();
    return "Success";
  } else {
    alert("Error Fetching Questions! Please retry after sometime");
    return "Failed";
  }
}

function startQuiz() {
  mainDiv.classList.remove("main-menu");
  mainDiv.classList.add("game-canvas");
  startBtn.classList.add("disabled");
  container.classList.remove("disabled");
  container.classList.add("game-container");
  container.appendChild(quesObj(1));
}

function quesObj(quesNum) {
  let quesContainer = document.createElement("div");
  let ques = document.createElement("h1");
  ques.className = "heading";
  ques.innerHTML = movies[quesNum]["question"];
  quesContainer.appendChild(ques);

  if (movies[quesNum]["type"] === "boolean") {
    quesContainer.appendChild(optionObject(2));
  } else if (movies[quesNum]["type"] === "multiple") {
    quesContainer.appendChild(optionObject(4));
  }
  return quesContainer;
}

function optionObject(numberOfOptions) {
  let optionDiv = document.createElement("div");
  optionDiv.className = "options";
  for (let i = 0; i < numberOfOptions; i++) {
    let optionName = document.createElement("p");
    let optionButton = document.createElement("button");
    optionName.className = "option-name";
    optionButton.className = "ans-btn";
    optionDiv.appendChild(optionName);
    optionDiv.appendChild(optionButton);
  }
  return optionDiv;
}
