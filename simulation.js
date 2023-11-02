
// GLOBALS

const displaySize = 500;
const tempColor = "rgba(" + 127 + "," + 150 + "," + 5 + "," + (255 / 255) + ")";
var mouseX = 0;
var mouseY = 0;
var mousePressed = false;
var canvas;
var ctx;

function round5(x) {
    return Math.floor(x / 5) * 5;
}

function getCursorPosition(canvas, event) {
    const rect = canvas.getBoundingClientRect();
    var x = event.clientX - rect.left;
    var y = event.clientY - rect.top;
    x = round5(x);
    y = round5(y);
    console.log("x: " + x + " y: " + y);
    return { x, y };
}

function initEventListener(canvas) {
    canvas.addEventListener("mousedown", (event) => {
        mousePressed = true;
    })
    canvas.addEventListener("mouseup", (event) => {
        mousePressed = false;
    })
    canvas.addEventListener("mousemove", (event) => {
        let { x, y } = getCursorPosition(canvas, event);
        mouseX = x;
        mouseY = y;
    });
}

function init() {
    canvas = document.getElementById('game');
    ctx = canvas.getContext('2d');
    initEventListener(canvas);
}

function render() {
    if (mousePressed) {
        ctx = canvas.getContext('2d');
        ctx.fillStyle = tempColor;
        ctx.fillRect(mouseX, mouseY, 5, 5);
    }

}

window.onload = function () {
    init();
}

// The proper game loop
window.requestAnimationFrame(gameLoop);

function gameLoop() {
    render();
    window.requestAnimationFrame(gameLoop);
}



