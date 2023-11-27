
function round5(x) {
    return Math.floor(x / 5) * 5;
}

function getRandomIntFromMax(max) {
    return Math.floor(Math.random() * max);
}

function getRandomColor(r, g, b, a, colorOffset) {
    return "rgba(" + (r + getRandomIntFromMax(colorOffset)) + "," + (g + getRandomIntFromMax(colorOffset)) + "," + (b + getRandomIntFromMax(colorOffset)) + "," + a + ")";
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}