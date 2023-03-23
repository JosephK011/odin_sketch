function addSquares(num){
    const grid = document.querySelector('.grid');

    for(let i = 0; i < num; i++){
        for(let j = 0; j < num; j++){
            const square = document.createElement('div');
            square.classList.add('square');
            grid.appendChild(square);
        }
    }
}

addSquares(16);