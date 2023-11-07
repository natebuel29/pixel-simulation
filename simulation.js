
// GLOBALS

const displaySize = 500;
const tempColor = "rgba(" + 145 + "," + 144 + "," + 78 + "," + (255 / 255) + ")";
var mouseX = 0;
var mouseY = 0;
var mousePressed = false;
var canvas;
var ctx;
//Should we use an old and new grid when updated?
var gameWorld = Array.from(Array(100), () => new Array(100))


//BUGS:

// When sand reaches left or right borders than an error is thrown

function round5(x) {
    return Math.floor(x / 5) * 5;
}

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
}

function init() {
    canvas = document.getElementById('game');
    ctx = canvas.getContext('2d');
    initEventListener(canvas);
}

// function sand_rules() { }

function simulate() {
    ctx.clearRect(0, 0,
        canvas.width, canvas.height);
    for (var j = 99; j >= 0; j--) {
        for (var i = 99; i >= 0; i--) {
            // If no particle below, then move down
            if (gameWorld[i][j] === 1 && gameWorld[i][j + 1] != 1) {
                if (j + 1 < 100) {
                    gameWorld[i][j] = 0;
                    gameWorld[i][j + 1] = 1;
                }
            }
            else if (gameWorld[i][j] === 1 && gameWorld[i + 1][j + 1] != 1 && gameWorld[i - 1][j + 1] != 1) {
                if (j + 1 < 100 && i + 1 < 100) {
                    var randomDirection = Math.random() > 0.5 ? 1 : -1;
                    gameWorld[i][j] = 0;
                    gameWorld[i + randomDirection][j + 1] = 1;
                }
            }
            else if (gameWorld[i][j] === 1 && gameWorld[i + 1][j + 1] != 1) {
                if (j + 1 < 100 && i + 1 < 100) {
                    gameWorld[i][j] = 0;
                    gameWorld[i + 1][j + 1] = 1;
                }
            }
            else if (gameWorld[i][j] === 1 && j + 1 && i - 1 >= 0 < 100 && gameWorld[i - 1][j + 1] != 1) {
                if (j + 1 < 100 && i - 1 >= 0) {
                    gameWorld[i][j] = 0;
                    gameWorld[i - 1][j + 1] = 1;
                }
            }
        }
    }

    if (mousePressed) {
        var x = mouseX / 5;
        var y = mouseY / 5;
        // console.log("x: " + x + " y: " + y);

        if (x >= 0 && x < 100 && y >= 0 && y < 100 && gameWorld[x][y] === 0) {
            gameWorld[x][y] = 1;
        }
    }

}



function render() {
    for (var i = 0; i < 100; i++) {
        for (var j = 0; j < 100; j++) {
            if (gameWorld[i][j] === 1) {
                ctx = canvas.getContext('2d');
                ctx.fillStyle = tempColor;
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
    console.log("frame started");
    simulate();
    render();
    console.log("frame ended");
    setTimeout(() => {
        window.requestAnimationFrame(gameLoop);
    }, 1000 / 40);
}



