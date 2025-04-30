const gridContainer = document.getElementById('grid-container');
const grids = document.getElementById('change-size')
const colorPicker = document.getElementById('color-picker');

let gridSize = 16;
let currentColor = colorPicker.value;

colorPicker.addEventListener('input', (event) => {
  currentColor = event.target.value;
});

function createGrid(size) {
  gridContainer.innerHTML = '';
  const itemSize = `${100 / size}%`;

  for (let i = 0; i < size * size; i++) {
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    gridItem.style.width = itemSize;
    gridItem.style.height = itemSize;

    gridItem.addEventListener('mouseenter', () => {
      gridItem.style.backgroundColor = currentColor;
    });

    gridContainer.appendChild(gridItem);
  }
  gridSize = size;
}

createGrid(gridSize);

grids.addEventListener('click', ()=> {
  let newGrid = prompt("Enter the new grid size(max 200):");
  let newSize = parseInt(newGrid);

  if (isNaN(newGrid) || newGrid <=0 || newGrid > 200) {
    alert("Please enter a valid positive number(max 200).");
    return;
  }

  createGrid(newSize);
});