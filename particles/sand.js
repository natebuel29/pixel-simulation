
class Sand extends Particle {
    constructor() {
        var colorOffset = 10;
        super(getRandomColor(194, 178, 128, 1, colorOffset));
        this.type = 'sand';
        this.isCorrodible = true;
        this.swapableParticles = ['water', 'acid']
    }

    simulate(gameCells, x, y) {
        // If no particle below, then move down
        if (gameCells.getCell(x, y, 0, 1) === 0 || this.swapableParticles.includes(gameCells.getCell(x, y, 0, 1).type)) {
            gameCells.swapCells(x, y, 0, 1);
        }
        // should we randomly check left vs right per frame?
        else if ((gameCells.getCell(x, y, 1, 1) === 0 && gameCells.getCell(x, y, -1, 1) === 0) || ((this.swapableParticles.includes(gameCells.getCell(x, y, 1, 1).type) && this.swapableParticles.includes(gameCells.getCell(x, y, -1, 1).type)))) {
            var randomDirection = Math.random() > 0.5 ? 1 : -1;
            gameCells.swapCells(x, y, randomDirection, 1);
        }
        else if (gameCells.getCell(x, y, 1, 1) === 0 || this.swapableParticles.includes(gameCells.getCell(x, y, 1, 1).type)) {
            gameCells.swapCells(x, y, 1, 1);
        }
        else if (gameCells.getCell(x, y, -1, 1) === 0 || this.swapableParticles.includes(gameCells.getCell(x, y, -1, 1).type)) {
            gameCells.swapCells(x, y, -1, 1);
        }
    }
}