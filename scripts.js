const mainContainer = document.getElementById("main");
function setDefaultGrid() {
  setGridSize(50);
  fillGrid(50);
}
function setGridSize(inputSize) {
  mainContainer.style.gridTemplateColumns = `repeat(${inputSize}, 1fr)`;
  mainContainer.style.gridTemplateRows = `repeat(${inputSize}, 1fr)`;
}

function fillGrid(inputSize) {
  for (let i = 0; i < inputSize * inputSize; i++) {
    let newDiv = document.createElement("div");
    newDiv.classList.add("grid-element");
    newDiv.addEventListener("mouseover", (event) => {
      event.target.classList.add("grid-element-colored");
    });
    mainContainer.appendChild(newDiv);
  }
}

function clearGrid() {
  const gridArray = Array.from(mainContainer.childNodes);
  gridArray.forEach((element) => {
    element.classList.remove("grid-element-colored");
  });
}

function changeGrid() {
  let size = parseInt(
    prompt("What size grid do you want? Enter 3 for a 3x3 grid")
  );
  const gridArray = Array.from(mainContainer.childNodes);
  gridArray.forEach((element) => {
    mainContainer.removeChild(element);
  });
  setGridSize(size);
  fillGrid(size);
}
window.addEventListener("load", setDefaultGrid());
