
// GLOBALS
const displaySize = 500;
var mouseX = 0;
var mouseY = 0;
var mousePressed = false;
var canvas;
var ctx;
var currParticleFunction = () => new Obsidian();
var paused = false;
var frameCount = 0;
var gameCells;
var slider = document.getElementById("myRange");
var radius = slider.value;

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
    radius = this.value;
}

function getCursorPosition(canvas, event) {
    const rect = canvas.getBoundingClientRect();
    var x = event.clientX - rect.left;
    var y = event.clientY - rect.top;
    x = round5(x);
    y = round5(y);
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

function clearBoard() {
    for (var i = 0; i < 100; i++) {
        for (var j = 0; j < 100; j++) {
            gameWorld[i][j] = 0;
        }
    }
}

function updateParticle(particleName) {
    switch (particleName) {
        case "sand":
            console.log("sand");
            currParticleFunction = () => new Sand();
            break;
        case "wood":
            console.log("wood");
            currParticleFunction = () => new Wood();
            break;
        case "stone":
            console.log("stone");
            currParticleFunction = () => new Stone();
            break;
        case "obsidian":
            console.log("obsidian");
            currParticleFunction = () => new Obsidian();
            break;
        case "water":
            console.log("water");
            currParticleFunction = () => new Water();
            break;
        case "acid":
            console.log("acid");
            currParticleFunction = () => new Acid();
            break;
        case "fire":
            console.log("fire");
            currParticleFunction = () => new Fire();
            break;
        case "lava":
            console.log("lava");
            currParticleFunction = () => new Lava();
            break;
        case "smoke":
            console.log("smoke");
            currParticleFunction = () => new Smoke();
            break;
        case "erase":
            console.log("erase");
            currParticleFunction = () => 0;
            break;
        case "clear":
            gameCells.clearCells();
            break;
    }
}

function init() {
    canvas = document.getElementById('game');
    ctx = canvas.getContext('2d');
    initEventListener(canvas);
}

function step() {
    var ran = frameCount % 2 == 0 ? true : false;
    for (var j = 99; j >= 0; j--) {
        for (ran ? i = 99 : i = 0; ran ? i >= 0 : i < 100; ran ? i-- : i++) {
            var particle = gameCells.getCell(i, j, 0, 0);
            if (particle !== 0 && !particle.hasBeenUpdated) {
                particle.simulate(gameCells, i, j);
                particle.hasBeenUpdated = true;
            }
        }
    }

    if (mousePressed) {
        var x = mouseX / 5;
        var y = mouseY / 5;

        drawFilledCircle(x, y, radius)
    }
}

// Function to draw a filled circle on the canvas using pixels
function drawFilledCircle(centerX, centerY, radius) {
    for (let x = -radius; x <= radius; x++) {
        for (let y = -radius; y <= radius; y++) {
            if (x * x + y * y < radius * radius) {
                if ((centerX + x) >= 0 && (centerX + x) < 100 && (centerY + y) >= 0 && (centerY + y) < 100 && (gameCells.getCell((centerX + x), (centerY + y), 0, 0) === 0 || currParticleFunction() === 0)) {
                    gameCells.setCell((centerX + x), (centerY + y), 0, 0, currParticleFunction());
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
            if (gameCells.getCell(i, j, 0, 0) !== 0) {
                var particle = gameCells.getCell(i, j, 0, 0);
                var color = particle.color;
                ctx.fillStyle = color;
                ctx.fillRect(i * 5, j * 5, 5, 5);
            }
        }
    }
}

window.onload = function () {
    gameCells = new GameCells(5, 100);
    init();
    // The proper game loop
    window.requestAnimationFrame(gameLoop);

}


function gameLoop() {
    frameCount++;
    if (!paused) {
        step();
    }
    render();
    for (var j = 99; j >= 0; j--) {
        for (i = 0; i < 100; i++) {
            var particle = gameCells.getCell(i, j, 0, 0);
            if (particle !== 0) {
                particle.hasBeenUpdated = false;
            }
        }
    }

    //drawFilledCircle(50, 50, 20);
    setTimeout(() => {
        window.requestAnimationFrame(gameLoop);
    }, 1000 / 144);
}



