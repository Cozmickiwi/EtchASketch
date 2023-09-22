// create grid generator
let container = document.querySelector('.container');
let buttons = document.querySelector('.buttons');
let square;
let resolution;
let selection = 'mouseover';
let color = 'black';
let cellId = [];
//container.setAttribute("style", `width: ${(resolution * resolution)}px; height: ${(resolution * resolution)}px;`);
function gridGen() {
    for(let i = 1; i < ((resolution * resolution) + 1); i++){
        square = document.createElement('div');
        square.style.width = `${512 / resolution}px`;
        square.style.height = `${512 / resolution}px`;
        square.setAttribute("class", "cell");
        square.setAttribute("id", `${i}`);
        cellId[i] = square;
        buttons.appendChild(blackButton);
        buttons.appendChild(rainbowButton);
        buttons.appendChild(eraseButton);
        blackButton.addEventListener('click', () => {
            color = 'black';
        })
        rainbowButton.addEventListener('click', () => {
            color = 'rainbow';
        })
        eraseButton.addEventListener('click', () => {
            color = 'white';
        })
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
let blackButton = document.createElement('button');
let rainbowButton = document.createElement('button');
let eraseButton = document.createElement('button');
blackButton.setAttribute("id", "blackButton");
rainbowButton.setAttribute("id", "rainbowButton");
eraseButton.setAttribute("id", "eraseButton");
blackButton.innerHTML = "Black";
rainbowButton.innerHTML = "Rainbow";
eraseButton.innerHTML = "Eraser";

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

let resolutionChoice = prompt("Please enter a number (max 100) (unsupported numbers will be auto rounded): ");
if (resolutionChoice > 100){
    alert("Entered number greater than 100, resolution rounded to 100x100.");
    resolution = 100;
}
else if (resolutionChoice < 1){
    alert("Entered number lower than 1, Please enter another number.");
    location.reload();
}
else {
    alert(`Resolution set to ${resolutionChoice}x${resolutionChoice}.`)
    resolution = resolutionChoice;
}
