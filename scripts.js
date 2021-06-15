const mainContainer = document.getElementById("main");
const buttonContainer = document.getElementById("colorPicker");
const colorArray = ["Black", "Red", "Blue", "Green", "White"];
let currentColor = "black";

function addColors() {
  colorArray.forEach((element) => {
    let newButton = document.createElement("button");
    newButton.id = element.toLowerCase();
    newButton.classList.add("button");
    newButton.innerText = element;
    newButton.addEventListener("click", (event) => {
      currentColor = event.target.id;
    });
    buttonContainer.appendChild(newButton);
  });
}

function setDefaultGrid() {
  setGridSize(50);
  fillGrid(50);
}
function setGridSize(inputSize) {
  mainContainer.style.gridTemplateColumns = `repeat(${inputSize}, 1fr)`;
}

function fillGrid(inputSize) {
  for (let i = 0; i < inputSize * inputSize; i++) {
    let newDiv = document.createElement("div");
    newDiv.classList.add("grid-element");
    newDiv.addEventListener("mouseover", (event) => {
      event.target.classList.remove("grid-element");
      event.target.style.backgroundColor = currentColor;
    });
    mainContainer.appendChild(newDiv);
  }
}

function clearGrid() {
  const gridArray = Array.from(mainContainer.childNodes);
  gridArray.forEach((element) => {
    element.className = "grid-element";
    element.style.backgroundColor = "#40434e";
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
window.addEventListener("load", () => {
  setDefaultGrid(), addColors();
});
