let inputSize = 16;
const container = document.querySelector('.container');
const btn = document.querySelector('.btn');
const clear = document.querySelector('.clear');

btn.addEventListener('click', () => {
    inputSize = prompt("Enter a new size between 10 to 100");
    if (inputSize < 10 || inputSize > 100) {
        alert('Out of Range');
        return;
    }
    clearGrid();
    makeGrid(inputSize);
});


function clearGrid() {
    container.innerHTML = '';
}

function makeGrid(size) {
    const newSize = Math.round((container.offsetWidth * container.offsetWidth) / (size * size));
    
    for(i = 0; i < newSize; i++) {
        const grid = document.createElement('div');
        grid.style.width = size + 'px';
        grid.style.height = size + 'px';
        grid.classList.add('new');
        container.appendChild(grid);
        grid.addEventListener('mousemove', (e) => {
            if(e.buttons == 1)
            grid.classList.add('draw');
        });
    }
} 

makeGrid(inputSize);

clear.addEventListener('click', () => {
    clearGrid();
    makeGrid(inputSize);
});


/*const draw = document.querySelectorAll('.default');
draw.forEach(div => {
    div.addEventListener('mousemove', (e) => {
        if(e.buttons == 1)
        div.style.cssText = "background-color: black;"
    });
});*/



