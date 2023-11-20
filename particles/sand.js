
class Sand extends Particle {
    constructor() {
        var colorOffset = 10;
        super(getRandomColor(194, 178, 128, colorOffset));
        this.type = 'sand';
    }

    simulate(gameCells, x, y) {
        var inBoundsRight = x + 1 < 100;
        var inBoundsLeft = x - 1 >= 0;
        // If no particle below, then move down
        if (gameCells.getCell(x, y, 0, 1) === 0) {
            var tarCell = gameCells.getCell(x, y, 0, 1);
            var curCell = gameCells.getCell(x, y, 0, 0);
            if (tarCell.type === 'water') {
                gameCells.setCell(x, y, 0, 1, curCell);
                gameCells.setCell(x, y, 0, 0, tarCell);
            } else {
                gameCells.setCell(x, y, 0, 1, curCell);
                gameCells.setCell(x, y, 0, 0, 0);
            }
        }
        // should we randomly check left vs right per frame?
        else if (gameCells.getCell(x, y, 1, 1) === 0 && gameCells.getCell(x, y, -1, 1) === 0) {
            var randomDirection = Math.random() > 0.5 ? 1 : -1;
            var tarCell = gameCells.getCell(x, y, randomDirection, 1);
            var curCell = gameCells.getCell(x, y, 0, 0);
            if (tarCell.type === 'water') {
                gameCells.setCell(x, y, randomDirection, 1, curCell);
                gameCells.setCell(x, y, 0, 0, tarCell);
            } else {
                gameCells.setCell(x, y, randomDirection, 1, curCell);
                gameCells.setCell(x, y, 0, 0, 0);
            }
        }
        else if (gameCells.getCell(x, y, 1, 1) === 0) {
            var tarCell = gameCells.getCell(x, y, 1, 1);
            var curCell = gameCells.getCell(x, y, 0, 0);
            if (tarCell.type === 'water') {
                gameCells.setCell(x, y, 1, 1, curCell);
                gameCells.setCell(x, y, 0, 0, tarCell);
            } else {
                gameCells.setCell(x, y, 1, 1, curCell);
                gameCells.setCell(x, y, 0, 0, 0);
            }

        }
        else if (gameCells.getCell(x, y, -1, 1) === 0) {
            var tarCell = gameCells.getCell(x, y, -1, 1);
            var curCell = gameCells.getCell(x, y, 0, 0);
            //todo: do we want to move water somewhere? \
            if (tarCell.type === 'water') {
                gameCells.setCell(x, y, -1, 1, curCell);
                gameCells.setCell(x, y, 0, 0, tarCell);
            }
            else {
                gameCells.setCell(x, y, -1, 1, curCell);
                gameCells.setCell(x, y, 0, 0, 0);
            }
        }
    }
}