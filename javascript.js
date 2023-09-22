// create grid generator
let container = document.querySelector('.container');
let square;
let resolution = 32;
let selection = 'mouseover';
let color = 'rainbow';
let cellId = [];
//container.setAttribute("style", `width: ${(resolution * resolution)}px; height: ${(resolution * resolution)}px;`);
function gridGen() {
    for(let i = 1; i < ((resolution * resolution) + 1); i++){
        square = document.createElement('div');
        square.style.width = `${256 / resolution}px`;
        square.style.height = `${256 / resolution}px`;
        square.setAttribute("class", "cell");
        square.setAttribute("id", `${i}`);
        cellId[i] = square;
        container.appendChild(square);
        square.addEventListener(selection, () => {
            let clickedSquare = document.getElementById(i);
            if (color == 'rainbow'){
                clickedSquare.style.backgroundColor = rgba();
            }
            else {
                clickedSquare.style.backgroundColor = color;
            }
        })
    }
}
let hoverButton = document.querySelector('.hover');
let clickButton = document.querySelector('.click');
let resetButton = document.querySelector('.reset');
hoverButton.addEventListener('click', () => {
    selection = 'mouseover';
    hoverButton.setAttribute("style", "display: none;");
    clickButton.setAttribute("style", "display: none;");
    gridGen();
})
clickButton.addEventListener('click', () => {
    selection = 'mousedown';
    hoverButton.setAttribute("style", "display: none;");
    clickButton.setAttribute("style", "display: none;");
    gridGen();
})
resetButton.addEventListener('click', () => {
    location.reload();
})
function rgba() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    return(`rgb(${red},${green},${blue})`);
}



