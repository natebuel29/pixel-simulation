
function round5(x) {
    return Math.floor(x / 5) * 5;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getRandomColor(r, g, b, colorOffset) {
    return "rgba(" + (r + getRandomInt(colorOffset)) + "," + (g + getRandomInt(colorOffset)) + "," + (b + getRandomInt(colorOffset)) + "," + 1 + ")";
}
