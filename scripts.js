const mainContainer = document.getElementById("main");
let inputGridSize = parseInt(prompt("What size grid? for a 3x3, type 3."));
function generateGrid(inputNum) {
  if (inputNum > 100) {
    warningDiv = document.createElement("div");
    warningDiv.innerText = "Value must be 100 or less!";
    mainContainer.appendChild(warningDiv);
    return;
  }
  let gridSize = inputNum * inputNum;
  let rowCounter = 1;
  let colCounter = 1;
  mainContainer.style.gridTemplateColumns = `repeat(${inputNum}, 1fr)`;
  mainContainer.style.gridTemplateRows = `repeat(${inputNum}, 1fr)`;

  for (let i = 0; i < gridSize + 1; i++) {
    let newDiv = document.createElement("div");
    newDiv.id = "box" + i;
    newDiv.className = "flexItem";
    mainContainer.appendChild(newDiv);
    newDiv.addEventListener("mouseover", (event) => {
      event.target.style.backgroundColor = "black";
    });
  }
}

generateGrid(inputGridSize);
