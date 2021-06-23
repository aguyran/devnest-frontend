const grid = document.getElementById("grid");
let last = [];
let moves = 0;
let scores = 0;
let emojiArray = [
  "🤑",
  "😲",
  "🥵",
  "😱",
  "😂",
  "🍆",
  "🍕",
  "🍔",
  "🍟",
  "🥭",
  "🍎",
  "🌽",
  "🍅",
  "🌷",
  "🤯",
  "🤡",
  "👺",
  "👾",
  "🤑",
  "😲",
  "🥵",
  "😱",
  "😂",
  "🍆",
  "🍕",
  "🍔",
  "🍟",
  "🥭",
  "🍎",
  "🌽",
  "🍅",
  "🌷",
  "🤯",
  "🤡",
  "👺",
  "👾",
];
const moveDiv = document.getElementById("result");
const scoreDiv = document.getElementById("score");
emojiArray = shuffle(emojiArray);
console.log(emojiArray.length);
for (let i = 0; i < 36; i++) {
  let div = document.createElement("div");
  let front = document.createElement("div");
  let rear = document.createElement("div");
  front.className = "front";
  rear.className = "rear";
  div.className = "tile";

  front.innerHTML = "<p>♦</p>";
  rear.innerHTML = `<p>${emojiArray[i]}</p>`;
  rear.id = `${i}`;
  grid.appendChild(div);

  div.appendChild(front);
  div.appendChild(rear);
}
grid.addEventListener("click", (e) => {
  if (!e.target.classList.contains("spin")) {
    e.target.classList.add("spin");
    let rear = e.target.childNodes[1];
    if (last.length > 0) {
      if (
        rear.childNodes[0].innerHTML === last[1].childNodes[0].innerHTML &&
        last[1].id != rear.id
      ) {
        e.target.classList.add("disabled");
        last[0].classList.add("disabled");
        scores += 1;
        scoreDiv.innerText = `Score: ${scores}`;
        last = [];
      } else {
        removeSpin(e, last[0]);
        last = [];
      }
    } else {
      last = [e.target, rear];
    }

    moves += 1;
    moveDiv.innerText = `Moves: ${moves}`;
  }
  console.log(e);
});

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

function removeSpin(e, passedLast) {
  setTimeout(() => {
    e.target.classList.remove("spin");
    passedLast.classList.remove("spin");
  }, 800);
}
