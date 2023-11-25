
class Acid extends Particle {
    constructor() {
        var colorOffset = 10;
        super(getRandomColor(143, 245, 9, 1, colorOffset));
        this.type = 'acid';
        this.corrosionProb = 0.03;
    }

    simulate(gameCells, x, y) {
        this.color = getRandomColor(143, 245, 9, 1, 20);
        // If no particle below, then move down
        if (gameCells.getCell(x, y, 0, 1) === 0 || gameCells.getCell(x, y, 0, 1).type === 'water') {
            gameCells.swapCells(x, y, 0, 1);
        }
        else if (gameCells.getCell(x, y, 0, 1).isCorrodible && this.corrosionProb > Math.random()) {
            gameCells.setCell(x, y, 0, 1, 0);
        }
        else if (gameCells.getCell(x, y, 0, 1) !== 0 && gameCells.getCell(x, y, 0, 1).type === 'fire') {
            gameCells.setCell(x, y, 0, 1, 0)
        }
        else if ((gameCells.getCell(x, y, 1, 1) === 0 || gameCells.getCell(x, y, 1, 1).type === ' water') && (gameCells.getCell(x, y, -1, 1) === 0 || gameCells.getCell(x, y, -1, 1).type === 'water')) {
            var randomDirection = Math.random() > 0.5 ? 1 : -1;
            gameCells.swapCells(x, y, randomDirection, 1);
        }
        else if (gameCells.getCell(x, y, 1, 1) !== 0 && gameCells.getCell(x, y, 1, 1).type === 'fire') {
            gameCells.setCell(x, y, 1, 1, 0)
        }

        else if (gameCells.getCell(x, y, -1, 1) === 0 && gameCells.getCell(x, y, -1, 1).type === 'fire') {
            gameCells.setCell(x, y, -1, 1, 0)
        }
        else if ((gameCells.getCell(x, y, 1, 0) === 0 || gameCells.getCell(x, y, 1, 0).type === 'water') && (gameCells.getCell(x, y, -1, 0) === 0 || gameCells.getCell(x, y, -1, 0).type === 'water')) {
            var randomDirection = Math.random() > 0.5 ? 1 : -1;
            gameCells.swapCells(x, y, randomDirection, 0);
        }
        // move left
        else if (gameCells.getCell(x, y, -1, 0) === 0 || gameCells.getCell(x, y, -1, 0).type === 'water') {
            gameCells.swapCells(x, y, -1, 0);
        }
        else if (gameCells.getCell(x, y, -1, 0).isCorrodible && this.corrosionProb > Math.random()) {
            gameCells.setCell(x, y, -1, 0, 0);
        }
        else if (gameCells.getCell(x, y, -1, 0) !== 0 && gameCells.getCell(x, y, -1, 0).type === 'fire') {
            gameCells.setCell(x, y, -1, 0, 0)
        }
        //move right
        else if (gameCells.getCell(x, y, 1, 0) === 0 || gameCells.getCell(x, y, 1, 0).type === 'water') {
            gameCells.swapCells(x, y, 1, 0);
        }
        else if (gameCells.getCell(x, y, 1, 0).isCorrodible && this.corrosionProb > Math.random()) {
            gameCells.setCell(x, y, 1, 0, 0);
        }
        else if (gameCells.getCell(x, y, 1, 0) !== 0 && gameCells.getCell(x, y, 1, 0).type === 'fire') {
            gameCells.setCell(x, y, 1, 0, 0)
        }
    }
}