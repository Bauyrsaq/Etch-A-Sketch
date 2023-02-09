const grid = document.querySelector('#grid');
let gridSize = 16;
const gridElements = document.querySelectorAll('.grid-element');


function setGridSize() {
    grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
}

createGrid();


function createGrid() {
    grid.innerHTML = '';
    for (let i = 0; i < gridSize * gridSize; i++) {
        const gridElement = document.createElement('div');
        gridElement.classList.add('grid-element');
        grid.appendChild(gridElement);
    }
}


let slider = document.getElementById("myRange");
let output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
// slider.oninput = function() {
//   output.innerHTML = this.value;
//   gridSize = this.value;
//   setGridSize();
//   createGrid();
// }

slider.oninput = function() {
    output.innerHTML = this.value;
};

slider.onpointerup = function() {
    gridSize = this.value;
    setGridSize();
    createGrid();
};

// gridElements.forEach(gridElement => gridElement.addEventListener('click', () => {
//     gridElement.target.classList.add('playing');
// }));

let mouseDown = false;

document.body.onmousedown = () => mouseDown = true;
document.body.onmouseup = () => mouseDown = false;

function changeColor(e) {
    e.target.style.backgroundColor = '#000';
}

grid.addEventListener('click', () => {
    const gridElements = document.querySelectorAll('.grid-element');
    gridElements.forEach(gridElement => gridElement.addEventListener('click', changeColor));
});

window.onload = () => {
    console.log('Hello');
};