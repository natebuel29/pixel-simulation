
class Acid extends Liquid {
    constructor() {
        var colorOffset = 10;
        super(getRandomColor(143, 245, 9, 1, colorOffset));
        this.type = 'acid';
        this.corrosionProb = 0.03;
        this.swappableTypes = ['water'];
    }

    simulate(gameCells, x, y) {
        this.color = getRandomColor(143, 245, 9, 1, 20);
        this.moveDown(gameCells, x, y, this.swappableTypes);
        this.corrodeParticles(gameCells, x, y);
    }

    corrodeParticles(gameCells, x, y) {
        if (gameCells.getCell(x, y, 0, 1).isCorrodible && this.corrosionProb > Math.random()) {
            gameCells.setCell(x, y, 0, 1, 0);
        }
        else if (gameCells.getCell(x, y, -1, 0).isCorrodible && this.corrosionProb > Math.random()) {
            gameCells.setCell(x, y, -1, 0, 0);
        }
        else if (gameCells.getCell(x, y, 1, 0).isCorrodible && this.corrosionProb > Math.random()) {
            gameCells.setCell(x, y, 1, 0, 0);
        }
    }
}