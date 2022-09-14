const grid = document.getElementById('grid');
const clearButton = document.getElementById('clear');
const sizeButton = document.getElementById('grid-size');

clearButton.onclick = () => clearGrid();
sizeButton.onclick = () => changeSize();

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)


function grid_init(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`
    for (let i = 0; i < size * size; i++) {
        const gridElement = document.createElement("div");
        gridElement.classList.add('grid-element');
        gridElement.addEventListener('mouseover', changeColor)
        gridElement.addEventListener('mousedown', changeColor)
        grid.appendChild(gridElement);
    }
}



function changeColor(e) {
    if (e.type === 'mouseover' && !mouseDown) return
    e.target.style.backgroundColor = 'black';
}

function clearGrid() {
    deleteGrid();
    grid_init(currentSize);
}

function deleteGrid() {
    let child = grid.lastElementChild;
    while (child) {
        grid.removeChild(child);
        child = grid.lastElementChild;
    }
}

function changeSize() {
    let size = Number(prompt("Please choose grid size"));
    while (isNaN(size)) {
        size = Number(prompt("Not a number, try again"));
    }
    while (size >= 100) {
        size = Number(prompt("Please enter a number lower than 100"));
    }
    while (size==0){
        size = Number(prompt("Please enter a number higher than 0"));
    }
    console.log(size);
    deleteGrid();
    grid_init(size);
    currentSize = size;
}

const defaultSize = 16;
let currentSize = defaultSize;
grid_init(defaultSize);