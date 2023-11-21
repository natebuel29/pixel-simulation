
class Sand extends Particle {
    constructor() {
        var colorOffset = 10;
        super(getRandomColor(194, 178, 128, colorOffset));
        this.type = 'sand';
    }

    simulate(gameCells, x, y) {
        // If no particle below, then move down
        if (gameCells.getCell(x, y, 0, 1) === 0 || gameCells.getCell(x, y, 0, 1).type === 'water') {
            gameCells.swapCells(x, y, 0, 1);
        }
        // should we randomly check left vs right per frame?
        else if ((gameCells.getCell(x, y, 1, 1) === 0 && gameCells.getCell(x, y, -1, 1) === 0) || ((gameCells.getCell(x, y, 1, 1).type === 'water' && gameCells.getCell(x, y, -1, 1).type === 'water'))) {
            var randomDirection = Math.random() > 0.5 ? 1 : -1;
            gameCells.swapCells(x, y, randomDirection, 1);

        }
        else if (gameCells.getCell(x, y, 1, 1) === 0 || gameCells.getCell(x, y, 1, 1).type === 'water') {
            gameCells.swapCells(x, y, 1, 1);

        }
        else if (gameCells.getCell(x, y, -1, 1) === 0 || gameCells.getCell(x, y, -1, 1).type === 'water') {
            gameCells.swapCells(x, y, -1, 1);

        }
    }
}