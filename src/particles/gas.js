class Gas extends Particle {

    constructor(color) {
        super(color);
        this.baseType = 'gas';
    }

    moveUp(gameCells, x, y) {
        // If no particle below, then move down
        if (gameCells.getCell(x, y, 0, -1) === 0 || gameCells.getCell(x, y, 0, -1).baseType === 'liquid') {
            gameCells.swapCells(x, y, 0, -1);
        }
        // should we randomly check left vs right per frame?
        else if ((gameCells.getCell(x, y, 1, -1) === 0 && gameCells.getCell(x, y, -1, -1) === 0)) {
            var randomDirection = Math.random() > 0.5 ? 1 : -1;
            gameCells.swapCells(x, y, randomDirection, -1);
        }
        else if ((gameCells.getCell(x, y, 1, -1).baseType === 'liquid' && gameCells.getCell(x, y, -1, -1).baseType === 'liquid')) {
            var randomDirection = Math.random() > 0.5 ? 1 : -1;
            gameCells.swapCells(x, y, randomDirection, -1);
        }
        else if (gameCells.getCell(x, y, 1, -1) === 0 || gameCells.getCell(x, y, 1, -1).baseType === 'liquid') {
            gameCells.swapCells(x, y, 1, -1);

        }
        else if (gameCells.getCell(x, y, -1, -1) === 0 || gameCells.getCell(x, y, -1, -1).baseType === 'liquid') {
            gameCells.swapCells(x, y, -1, -1);
        }
        // move left
        else if (gameCells.getCell(x, y, -1, 0) === 0 || gameCells.getCell(x, y, -1, -1).baseType === 'liquid') {
            gameCells.swapCells(x, y, -1, 0);
        }
        //move right
        else if (gameCells.getCell(x, y, 1, 0) === 0) {
            gameCells.swapCells(x, y, 1, 0);
        }
    }

}