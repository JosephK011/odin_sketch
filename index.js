const DEFAULT_SIZE = 16;

const grid = document.querySelector('.grid');
const button = document.querySelector('.size');
const search = document.querySelector('.pixels');
const pen = document.querySelector('.pen');
const eraser = document.querySelector('.eraser');
const clear = document.querySelector('.clear');

let size = DEFAULT_SIZE;
let mouseDown = false;
let pen_color = 'black';
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);


function defaultGrid(size){
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`

    for(let i = 0; i < size; i++){
        for(let j = 0; j < size; j++){
            const square = document.createElement('div');
            square.classList.add('square');

            grid.appendChild(square);
        }
    }
    let squares = document.querySelectorAll('.square');

    squares.forEach((square) => {
        square.addEventListener('mouseover', usePen);
        square.addEventListener('mousedown', usePen);
    });
}

function addSquares(num){
    grid.style.gridTemplateColumns = `repeat(${num}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${num}, 1fr)`

    for(let i = 0; i < num; i++){
        for(let j = 0; j < num; j++){
            const square = document.createElement('div');
            square.classList.add('square');

            grid.appendChild(square);
        }
    }
    let squares = document.querySelectorAll('.square');

    squares.forEach((square) => {
        square.addEventListener('mouseover', usePen);
        square.addEventListener('mousedown', usePen);
    });
}

function usePen(e){
    if(e.type === 'mouseover' && !mouseDown) return;
    e.target.style.backgroundColor=pen_color;
}

function changeSize(){
    if(search.value <= 0 || search.value > 100){
        alert('Invalid input');
        return;
    }
    size = search.value;
    grid.innerHTML='';
    addSquares(size);
}

function clearGrid(){
    grid.innerHTML = '';
    addSquares(size);
}
function changeColor(e){
    if(e.target.textContent === 'Eraser'){
        pen_color='white';
        eraser.classList.add('active');
        pen.classList.remove('active');
    }
    else if(e.target.textContent === 'Pen'){
        pen_color='black';
        pen.classList.add('active');
        eraser.classList.remove('active');
    }
}

defaultGrid(size);
button.addEventListener('click', changeSize);
clear.addEventListener('click', clearGrid);
pen.addEventListener('click', changeColor);
eraser.addEventListener('click', changeColor);



