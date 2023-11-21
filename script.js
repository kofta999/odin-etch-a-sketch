const body = document.querySelector("body");
const grid = document.createElement("div");
const gridButton = document.querySelector("#gridButton");
const clearButton = document.querySelector("#clearButton");
const GRID_MAX_WIDTH = 900;

grid.id = "grid";

gridButton.addEventListener("click", (e) => {
  const gridSize = parseInt(prompt("Grid size"));
  if (gridSize > 100) {
    alert("Grid size cannot be bigger than 100");
    return;
  }
  if (!gridSize) {
    return;
  }
  const blocks = document.querySelectorAll(".block");
  blocks.forEach((block) => {
    block.remove();
  });
  createGrid(gridSize);
});

clearButton.addEventListener("click", (e) => {
  const blocks = document.querySelectorAll(".block");
  blocks.forEach((block) => {
    block.style.backgroundColor = "white";
  });
});

createGrid(16);
body.appendChild(grid);

function createGrid(size) {
  const blockSize = Math.floor(GRID_MAX_WIDTH / size) - 4;
  for (let i = 0; i < size ** 2; i++) {
    let block = document.createElement("div");
    block.className = "block";
    block.style.width = blockSize + "px";
    block.style.height = blockSize + "px";

    grid.appendChild(block);

    let randomColor = getRandomColor();
    let baseBrightness = 100;

    block.addEventListener("mouseover", (e) => {
      console.log(`hsl(${randomColor}deg, 100%, ${baseBrightness}`);
      baseBrightness = baseBrightness > 0 ? baseBrightness - 10 : 0;
      e.target.style.backgroundColor = `hsl(${randomColor}deg, 100%, ${baseBrightness}%`;
    });
  }
}

function getRandomColor() {
  return Math.round(Math.random() * 360);
}
