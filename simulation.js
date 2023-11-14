
// GLOBALS

const displaySize = 500;
const tempColor = "rgba(" + 194 + "," + 178 + "," + 128 + "," + (255 / 255) + ")";
const r = 194;
const g = 178;
const b = 128;
var mouseX = 0;
var mouseY = 0;
var mousePressed = false;
var canvas;
var ctx;
var gameWorld = Array.from(Array(100), () => new Array(100));
var currParticleFunction = () => new Sand();
var paused = false;
var frameCount = 0;

function getCursorPosition(canvas, event) {
    const rect = canvas.getBoundingClientRect();
    var x = event.clientX - rect.left;
    var y = event.clientY - rect.top;
    x = round5(x);
    y = round5(y);
    //   console.log("x: " + x / 5 + " y: " + y / 5);
    return { x, y };
}

function initEventListener(canvas) {
    canvas.addEventListener("mousedown", (event) => {
        if (mouseY >= 0 && mouseY <= 500 && mouseX >= 0 && mouseX < 500) {
            mousePressed = true;
        } else {
            mousePressed = false;
        }
    })
    canvas.addEventListener("mouseup", (event) => {
        mousePressed = false;
    })
    canvas.addEventListener("mousemove", (event) => {
        let { x, y } = getCursorPosition(canvas, event);
        mouseX = x;
        mouseY = y;
    });

    document.addEventListener("keydown", (event) => {
        console.log(event.key === 'w');
        if (event.key === 'w') {
            currParticleFunction = () => new Wood();
        } else if (event.key === 's') {
            currParticleFunction = () => new Sand();
        } else if (event.key === 'p') {
            console.log("pause this bitch");
            paused = !paused;
        }
    })
}

function init() {
    canvas = document.getElementById('game');
    ctx = canvas.getContext('2d');
    initEventListener(canvas);
}

function simulate() {

    var ran = frameCount % 2 == 0 ? true : false;
    for (var j = 99; j >= 0; j--) {
        for (ran ? i = 99 : i = 0; ran ? i >= 0 : i < 100; ran ? i-- : i++) {
            if (gameWorld[i][j] !== 0) {
                var particle = gameWorld[i][j];
                particle.simulate(gameWorld, i, j);
            }
        }
    }

    if (mousePressed) {
        var x = mouseX / 5;
        var y = mouseY / 5;

        drawFilledCircle(x, y, 3)
    }

}

// Function to draw a filled circle on the canvas using pixels
function drawFilledCircle(centerX, centerY, radius) {
    for (let x = -radius; x <= radius; x++) {
        for (let y = -radius; y <= radius; y++) {
            if (x * x + y * y < radius * radius) {
                if ((centerX + x) >= 0 && (centerX + x) < 100 && (centerY + y) >= 0 && (centerY + y) < 100 && gameWorld[(centerX + x)][(centerY + y)] === 0) {
                    gameWorld[(centerX + x)][(centerY + y)] = currParticleFunction();
                }
            }
        }
    }
}


function render() {
    ctx.clearRect(0, 0,
        canvas.width, canvas.height);
    for (var i = 0; i < 100; i++) {
        for (var j = 0; j < 100; j++) {
            if (gameWorld[i][j] !== 0) {
                var particle = gameWorld[i][j]
                ctx = canvas.getContext('2d');
                var color = particle.color;
                ctx.fillStyle = color;
                ctx.fillRect(i * 5, j * 5, 5, 5);
            }
        }
    }
}

window.onload = function () {
    for (var i = 0; i < 100; i++) {
        for (var j = 0; j < 100; j++) {
            gameWorld[i][j] = 0;
        }
    }
    init();
    // The proper game loop
    window.requestAnimationFrame(gameLoop);

}


function gameLoop() {
    frameCount++;
    if (!paused) {
        simulate();
    }
    render();
    //drawFilledCircle(50, 50, 20);
    setTimeout(() => {
        window.requestAnimationFrame(gameLoop);
    }, 1000 / 60);
}



