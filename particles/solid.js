
class Solid extends Particle {
    constructor(color) {
        super(color);
        this.baseType = 'solid';
    }

    moveDown(gameCells, x, y, swappableTypes) {
        // If no particle below, then move down
        if (gameCells.getCell(x, y, 0, 1) === 0 || swappableTypes.includes(gameCells.getCell(x, y, 0, 1).type)) {
            gameCells.swapCells(x, y, 0, 1);
        }
        // should we randomly check left vs right per frame?
        else if ((gameCells.getCell(x, y, 1, 1) === 0 && gameCells.getCell(x, y, -1, 1) === 0) || ((swappableTypes.includes(gameCells.getCell(x, y, 1, 1).type) && swappableTypes.includes(gameCells.getCell(x, y, -1, 1).type)))) {
            var randomDirection = Math.random() > 0.5 ? 1 : -1;
            gameCells.swapCells(x, y, randomDirection, 1);
        }
        else if (gameCells.getCell(x, y, 1, 1) === 0 || swappableTypes.includes(gameCells.getCell(x, y, 1, 1).type)) {
            gameCells.swapCells(x, y, 1, 1);
        }
        else if (gameCells.getCell(x, y, -1, 1) === 0 || swappableTypes.includes(gameCells.getCell(x, y, -1, 1).type)) {
            gameCells.swapCells(x, y, -1, 1);
        }
    }
}