// create n * n square divs
function drawGrid(squares = 16) {
  const gridContainer = document.querySelector(".grid");

  for(let i = 0; i < squares; i++) {
    const rowContainer = document.createElement("div")
    rowContainer.setAttribute("class", `row-${i}`);
    gridContainer.appendChild(rowContainer);
    
    // attach the "hover" event listener to each row
    rowContainer.addEventListener("mouseover", changeColor, {capture: true});
    
    for(let j = 0; j < squares; j++) {
      const squareContainer = document.createElement("div")
      squareContainer.setAttribute("id", `${i}-${j}`);
      rowContainer.appendChild(squareContainer);
    }
  }
}

// change the color of each square div
function changeColor(event) {
  event.stopPropagation();
  const target = event.target;
  const targetColorBackground = target.getAttribute("style");
  let currentOpacity;

  if(targetColorBackground) {
    // need to trim the string that has the opacity value
    // rgba() is now deprecated. We are using rgb( r g b / opacity) instead
    const opacityString = targetColorBackground.slice( (targetColorBackground.indexOf("/") + 1) , (targetColorBackground.indexOf(")")) );
    currentOpacity = Number.parseFloat(opacityString);
    // console.log(currentOpacity);
  }

  const randomR = Math.floor(Math.random() * 255);
  const randomG = Math.floor(Math.random() * 255);
  const randomB = Math.floor(Math.random() * 255);
  // when the grid is drawn in the beginning, the opacity is undefined
  target.setAttribute("style", `background-color: rgb( ${randomR} ${randomG} ${randomB} / ${currentOpacity ? (currentOpacity.toFixed(1) === "1.0" ? currentOpacity : currentOpacity + 0.1) : 0.1 } )`);
  // console.log(target.getAttribute("style"));
}

// clear the grid
function clear() {
  const gridContainer = document.querySelector(".grid");
  while(gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild);
  }
}

// resets the grid when the button is clicked
function resetGrid() {
  const squaresPerSide = prompt("How many squares per side for the new grid? (maximum 100)");
  const intSquare = Number.parseInt(squaresPerSide);
  if ( !(intSquare >= 1 && intSquare <= 100) ) {
    alert("Can't create a grid with the number entered. Please enter the appropriate number again.");
    return;
  }

  clear();
  drawGrid(intSquare);
}

function main() {
  const buttonElement = document.querySelector(".reset");
  buttonElement.addEventListener("click", resetGrid);

  // first start with 16 * 16 grid
  drawGrid();
}

main();