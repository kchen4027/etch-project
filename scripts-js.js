const container = document.querySelector('.container');

function makeRows(rows, cols) {
    for (let i = 0; i < (cols * rows); i++) {
        const div = document.createElement('div');
        div.style.border = '1px solid red';
        container.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
        container.appendChild(div).classList.add('box');
    }
    const boxes = container.querySelectorAll('div.box')
    for (const box of boxes) {
        box.addEventListener("mouseover", () => {
        let Rnum = Math.floor(Math.random() * 255 + 1);
        box.style.background = `rgb(${Rnum}, ${Rnum}, ${Rnum})`;
        });
        
    }
}

makeRows(16, 16);

function clearRows() {
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
}


const clearGrid = document.querySelector('#cleargrid');
clearGrid.addEventListener('click', () => {
    clearRows();
    let x = prompt("How many squares per side?");
    if (x > 100) {
        alert("ERROR! Input is greater than 100");
        return;
    }
    if (x < 0) {
        alert("ERROR! Input is less than 0");
        return;
    }
    makeRows(x, x);
});