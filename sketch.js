const container = document.querySelector('.container');
const size = Math.round((container.offsetWidth * container.offsetWidth) / 256);
const btn = document.querySelector('.btn');

for(i = 0; i < size; i++) {
    const grid = document.createElement('div');
    grid.classList.add('default');
    container.appendChild(grid);
    grid.addEventListener('mousemove', (e) => {
        if(e.buttons == 1)
        grid.style.cssText = "background-color: black;"
    });
}

btn.addEventListener('click', () => {
    const newGridSize = prompt("Enter a new size between 10 to 100");
    if (newGridSize < 10 || newGridSize > 100) {
        alert('Out of Range');
        return;
    }
    clearGrid();
    makeGrid(newGridSize);
});

function clearGrid() {
    container.innerHTML = '';
}

function makeGrid(size) {
    const newSize = Math.round((container.offsetWidth * container.offsetWidth) / (size * size));
    
    for(j = 0; j < newSize; j++) {
        const newGrid = document.createElement('div');
        newGrid.style.width = size + 'px';
        newGrid.style.height = size + 'px';
        newGrid.classList.add('new');
        container.appendChild(newGrid);
        newGrid.addEventListener('mousemove', (e) => {
            if(e.buttons == 1)
            newGrid.classList.add('draw');
        });
    }
} 


/*const draw = document.querySelectorAll('.default');
draw.forEach(div => {
    div.addEventListener('mousemove', (e) => {
        if(e.buttons == 1)
        div.style.cssText = "background-color: black;"
    });
});*/



