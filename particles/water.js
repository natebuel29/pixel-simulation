
class Water extends Particle {
    constructor() {
        var colorOffset = 10;
        super(getRandomColor(14, 135, 204, colorOffset));
        this.type = 'water';

    }

    simulate(gameCells, x, y) {
        this.color = getRandomColor(14, 135, 204, 10);
        // If no particle below, then move down
        if (gameCells.getCell(x, y, 0, 1) === 0) {
            gameCells.swapCells(x, y, 0, 1);
        }
        else if (gameCells.getCell(x, y, 1, 1) === 0 && gameCells.getCell(x, y, -1, 1) === 0) {
            var randomDirection = Math.random() > 0.5 ? 1 : -1;
            gameCells.swapCells(x, y, randomDirection, 1);

        }
        else if (gameCells.getCell(x, y, 1, 0) === 0 && gameCells.getCell(x, y, -1, 0) === 0) {
            var randomDirection = Math.random() > 0.5 ? 1 : -1;
            gameCells.swapCells(x, y, randomDirection, 0);

        }
        // move left
        else if (gameCells.getCell(x, y, -1, 0) === 0) {
            gameCells.swapCells(x, y, -1, 0);

        }
        //move right
        else if (gameCells.getCell(x, y, 1, 0) === 0) {
            gameCells.swapCells(x, y, 1, 0);git
        }
    }
}