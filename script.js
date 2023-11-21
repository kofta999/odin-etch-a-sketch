const body = document.querySelector("body");
const grid = document.createElement("div");
const gridButton = document.querySelector("#gridButton");
const clearButton = document.querySelector("#clearButton");
const GRID_MAX_WIDTH = 900;

grid.className = "grid";

gridButton.addEventListener("click", (e) => {
  const gridSize = parseInt(prompt("Grid size"));
  if (gridSize > 100) {
    alert("Grid size cannot be bigger than 100");
    return;
  }
  const blocks = document.querySelectorAll(".block");
  blocks.forEach((block) => {
    block.remove();
  });
  createGrid(gridSize);
});

// clearButton.addEventListener("click", (e) => {

// })

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
    
    block.addEventListener("mouseover", (e) => {
      e.target.style.backgroundColor = getRandomRGB();
    });
  }
}

function getRandomRGB() {
  const [o, r, s] = [Math.round, Math.random, 255];
  return `rgb(${o(r() * s)},${o(r() * s)} ,${o(r() * s)})`;
}
