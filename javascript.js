const DEFAULT_MODE = 'color';
const DEFAULT_COLOR = 'black';
const DEFAULT_SIZE = 16;

let currentMode = DEFAULT_MODE;
let currentColor = DEFAULT_COLOR;
let currentSize = DEFAULT_SIZE;

const grid = document.querySelector('#grid');
const gridElements = document.querySelectorAll('.grid-element');
const setColor = document.querySelector('#set-color');
const colorMode = document.querySelector('#color-mode');
const rainbowMode = document.querySelector('#rainbow-mode');
const eraserMode = document.querySelector('#eraser');
const clearMode = document.querySelector('#clear');


setColor.oninput = (e) =>  setCurrentColor(e.target.value);
colorMode.onclick = () => setCurrentMode('color');
rainbowMode.onclick = () => setCurrentMode('rainbow');
eraserMode.onclick = () => setCurrentMode('eraser');
clearMode.onclick = () => setupGrid(currentSize);


function setCurrentColor(color) {
    currentColor = color;
}


function setGridSize(currentSize) {
    grid.style.gridTemplateColumns = `repeat(${currentSize}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${currentSize}, 1fr)`;
}

function clearGrid() {
    grid.innerHTML = '';
}

function setupGrid(currentSize) {
    setGridSize(currentSize);
    clearGrid();
    for (let i = 0; i < currentSize * currentSize; i++) {
        const gridElement = document.createElement('div');
        gridElement.classList.add('grid-element');
        gridElement.addEventListener('mouseover', changeColor);
        gridElement.addEventListener('mousedown', changeColor);
        grid.appendChild(gridElement);
    }
}


let slider = document.getElementById("myRange");
let output = document.getElementById("slide-size");
output.innerHTML = `${slider.value} x ${slider.value}`; // Display the default slider value

slider.oninput = function() {
    output.innerHTML = `${this.value} x ${this.value}`;
};

slider.onpointerup = function() {
    currentSize = this.value;
    setupGrid(currentSize);
};

let mouseDown = false;

document.body.onmousedown = () => {
    mouseDown = true;
    console.log(mouseDown);
};
document.body.onmouseup = () => {
    mouseDown = false;
    console.log(mouseDown);
};

function changeColor(e) {
    if (e.type === 'mouseover' && !mouseDown) return;
    if (currentMode === 'color') {
        e.target.style.backgroundColor = currentColor;
    } else if (currentMode === 'rainbow') {
        const randomR = Math.floor(Math.random() * 256);
        const randomG = Math.floor(Math.random() * 256);
        const randomB = Math.floor(Math.random() * 256);
        e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
    } else if (currentMode === 'eraser') {
        e.target.style.backgroundColor = '#fff';
    }
}

function setCurrentMode(newMode) {
    if (newMode === 'color') {
        currentMode = 'color';
    } else if (newMode === 'rainbow') {
        currentMode = 'rainbow';
    } else if (newMode === 'eraser') {
        currentMode = 'eraser';
    }
}

window.onload = () => {
    setupGrid(DEFAULT_SIZE);
};
