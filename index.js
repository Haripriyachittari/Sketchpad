const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
const drawColor = document.querySelector('#color');
const lineWidthInput = document.querySelector('#linewidth')

canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

let position = {
    x: 0,
    y: 0,
}

//start drawing
document.addEventListener("mousedown", (e) => {
    document.addEventListener("mousemove", draw);
    reposition(e);
})


//stop drawing
document.addEventListener("mouseup", (e) => {
    document.removeEventListener("mousemove", draw);
})

//change linewidth and color;
let color = "red";
let linewidth = 10;

document.addEventListener("change", () => {
    color = drawColor.value;
})
document.addEventListener("change", () => {
    linewidth = lineWidthInput.value;

})

function reposition(e) {
    position.x = e.clientX - canvas.offsetLeft;
    position.y = e.clientY - canvas.offsetTop;
}

function draw(e) {
    ctx.beginPath();
    ctx.lineWidth = linewidth;
    ctx.lineCap = "round";
    ctx.strokeStyle = color;
    ctx.moveTo(position.x, position.y);
    reposition(e);
    ctx.lineTo(position.x, position.y);
    ctx.stroke();
    ctx.closePath();
}
clearBtn.addEventListener("click",()=>{
    ctx.clearRect(0,0,canvas.width,canvas.height);
})