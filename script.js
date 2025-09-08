// initialize the atributes

let score = 0;
const scoreDisplay = document.getElementById("score");
const box = document.getElementById("box");
const gameArea = document.getElementById("gameArea");
const startBtn = document.getElementById("startBtn");

// Generate random position with parameters for max width and height
function getRandomPosition(maxWidth, maxHeight) {
  const x = Math.floor(Math.random() * (maxWidth - 60)); // 60 = box size + margin
  const y = Math.floor(Math.random() * (maxHeight - 60));
  return { x, y }; // return value
}

// Update score 
function updateScore(points) {
  score += points;
  scoreDisplay.textContent = score;
}

// This function move the box to a new random position
function moveBox() {
  const { x, y } = getRandomPosition(gameArea.clientWidth, gameArea.clientHeight);
  box.style.left = x + "px";
  box.style.top = y + "px";
}

// When box is clicked add one point to the score
box.addEventListener("click", () => {
  updateScore(1); // add point
  box.classList.add("clicked");
  setTimeout(() => box.classList.remove("clicked"), 400);
  moveBox(); // move after click
});

// The event Start game when the user click start
startBtn.addEventListener("click", () => {
  score = 0;
  updateScore(0);
  moveBox();
});

