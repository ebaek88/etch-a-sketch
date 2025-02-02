// create n * n square divs
function drawGrid(squares = 4) {
  const gridContainer = document.querySelector(".grid");

  for(let i = 0; i < squares; i++) {
    const rowContainer = document.createElement("div")
    rowContainer.setAttribute("class", `row-${i}`);
    gridContainer.appendChild(rowContainer);
    
    // attach the "hover" event listener to each row
    rowContainer.addEventListener("mousemove", changeColor, {capture: true});
    
    for(let j = 0; j < squares; j++) {
      const squareContainer = document.createElement("div")
      squareContainer.setAttribute("id", `${i}-${j}`);
      rowContainer.appendChild(squareContainer);
    }
  }
}

function changeColor(event) {
  let target = event.target;
  target.setAttribute("style", "background-color: #000");
}

function main() {
  // first start with 4 * 4 grid
  drawGrid();
}

main();