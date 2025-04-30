const gridContainer = document.getElementById('grid-container');
const grids = document.getElementById('change-size')
let gridSize = 16;

function createGrid(size) {
  gridContainer.innerHTML = '';
  const itemSize = `${100 / size}%`;

  for (let i = 0; i < size * size; i++) {
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    gridItem.style.width = itemSize;
    gridItem.style.height = itemSize;

    gridItem.addEventListener('mouseenter', () => {
      gridItem.classList.add('colored');
    });

    gridContainer.appendChild(gridItem);
  }
  gridSize = size;
}

createGrid(gridSize);

grids.addEventListener('click', ()=> {
  let newGrid = prompt("Enter the new grid size(max 100):");
  let newSize = parseInt(newGrid);

  if (isNaN(newGrid) || newGrid <=0 || newGrid > 100) {
    alert("Please enter a valid positive number(max 100).");
    return;
  }

  createGrid(newSize);
});