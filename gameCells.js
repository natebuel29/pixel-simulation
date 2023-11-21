class GameCells {
    constructor(cellSize, maxCells) {
        this.maxCells = maxCells;
        this.cells = Array.from(Array(maxCells), () => new Array(maxCells));
        for (var i = 0; i < maxCells; i++) {
            for (var j = 0; j < maxCells; j++) {
                this.cells[i][j] = 0;
            }
        }

        this.cellSize = cellSize;
    }

    getCell(x, y, xDirection, yDirection) {
        if ((y + yDirection >= 0 && y + yDirection < this.maxCells) && (x + xDirection >= 0 && x + xDirection < this.maxCells)) {
            return this.cells[x + xDirection][y + yDirection];
        } else {
            return "out of bounds";
        }
    }

    setCell(x, y, xDirection, yDirection, value) {
        //  console.log(`${x + xDirection}, ${y + yDirection}`);
        if ((y + yDirection >= 0 && y + yDirection < this.maxCells) && (x + xDirection >= 0 && x + xDirection < this.maxCells)) {
            this.cells[x + xDirection][y + yDirection] = value;
        } else {
            console.log("ALERT ALERT WE ARE OUT OF BOUNDS")
        }
    }

    clearCells() {
        for (var i = 0; i < 100; i++) {
            for (var j = 0; j < 100; j++) {
                this.cells[i][j] = 0;
            }
        }
    }
}