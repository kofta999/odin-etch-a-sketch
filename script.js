const grid = document.querySelector(".grid");

// for (let i = 0; i < 16; i++) {
//   let row = document.createElement("div");
//   row.className = "row";
//   for (let j = 0; j < 16; j++) {
//     let div = document.createElement("div");
//     div.className = "block";
//     row.appendChild(div);
//   }
//   grid.appendChild(row);
// }

for (let i = 0; i < 16 ** 2; i++) {
    let div = document.createElement("div");
    div.className = "block";

  grid.appendChild(div);
}
