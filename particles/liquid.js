class Liquid extends Particle {
    constructor(color) {
        super(color);
        this.baseType = 'liquid';
    }

    moveDown(gameCells, x, y, swappableTypes) {
        // If no particle below, then move down
        if (gameCells.getCell(x, y, 0, 1) === 0 || swappableTypes.includes(gameCells.getCell(x, y, 0, 1).type)) {
            gameCells.swapCells(x, y, 0, 1);
        }
        else if ((gameCells.getCell(x, y, 1, 1) === 0 && gameCells.getCell(x, y, -1, 1) === 0) || (swappableTypes.includes(gameCells.getCell(x, y, 1, 1).type) && swappableTypes.includes(gameCells.getCell(x, y, -1, 1).type))) {
            var randomDirection = Math.random() > 0.5 ? 1 : -1;
            gameCells.swapCells(x, y, randomDirection, 1);
        }
        else if ((gameCells.getCell(x, y, 1, 0) === 0 && gameCells.getCell(x, y, -1, 0) === 0) || (swappableTypes.includes(gameCells.getCell(x, y, 1, 0).type) && swappableTypes.includes(gameCells.getCell(x, y, -1, 0).type))) {
            var randomDirection = Math.random() > 0.5 ? 1 : -1;
            gameCells.swapCells(x, y, randomDirection, 0);
        }
        // move left
        else if (gameCells.getCell(x, y, -1, 0) === 0 || swappableTypes.includes(gameCells.getCell(x, y, -1, 0).type)) {
            gameCells.swapCells(x, y, -1, 0);
        }
        //move right
        else if (gameCells.getCell(x, y, 1, 0) === 0 || swappableTypes.includes(gameCells.getCell(x, y, 1, 0).type)) {
            gameCells.swapCells(x, y, 1, 0);
        }
    }

    snuffFire(gameCells, x, y) {
        if (gameCells.getCell(x, y, 0, 1) !== 0 && gameCells.getCell(x, y, 0, 1).type === 'fire') {
            gameCells.setCell(x, y, 0, 1, 0)
        }
        else if (gameCells.getCell(x, y, 1, 1) !== 0 && gameCells.getCell(x, y, 1, 1).type === 'fire') {
            gameCells.setCell(x, y, 1, 1, 0)
        }
        else if (gameCells.getCell(x, y, -1, 1) === 0 && gameCells.getCell(x, y, -1, 1).type === 'fire') {
            gameCells.setCell(x, y, -1, 1, 0)
        }
        else if (gameCells.getCell(x, y, -1, 0) !== 0 && gameCells.getCell(x, y, -1, 0).type === 'fire') {
            gameCells.setCell(x, y, -1, 0, 0)
        }
        else if (gameCells.getCell(x, y, 1, 0) !== 0 && gameCells.getCell(x, y, 1, 0).type === 'fire') {
            gameCells.setCell(x, y, 1, 0, 0)
        }
    }
}