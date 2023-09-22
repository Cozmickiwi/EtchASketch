let container = document.querySelector('.container');
let square = document.createElement('div');
square.style.width = '25px';
square.style.height = '25px';
for(let i = 1; i < 257; i++){
    let square = document.createElement('div');
    square.style.width = '14px';
    square.style.height = '14px';
    
    square.setAttribute("id", "cell");
    container.appendChild(square);
}