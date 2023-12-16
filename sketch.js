const container = document.querySelector('.container');
const size = Math.round((container.offsetWidth * container.offsetWidth) / 256);

for(i = 0; i < size; i++) {
    const grid = document.createElement('div');
    grid.classList.add('default');
    container.appendChild(grid);
}

const draw = document.querySelectorAll('.default');
draw.forEach(div => {
    div.addEventListener('mousemove', (e) => {
        if(e.buttons == 1)
        div.style.cssText = "background-color: black;"
    });
});


