let inputSize = 16;
const container = document.querySelector('.container');
const btn = document.querySelector('.btn');
const clear = document.querySelector('.clear');
const rainbow = document.querySelector('.rainbow');

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

rainbow.addEventListener('click', () => {
    const coloured = document.querySelectorAll('.new');
    coloured.forEach(div => {
        div.addEventListener('mousemove', (e) => { 
            if(e.buttons == 1)
            e.target.style.backgroundColor = randomColor();
        });
    });
});

makeGrid(inputSize);

clear.addEventListener('click', () => {
    clearGrid();
    makeGrid(inputSize);
});


function randomColor() {
    const randomR = Math.floor(Math.random() * 256);
    const randomG = Math.floor(Math.random() * 256);
    const randomB = Math.floor(Math.random() * 256);
    return `rgb(${randomR}, ${randomG}, ${randomB})`;
}



