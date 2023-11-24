
class Wood extends Particle {
    constructor() {
        var colorOffset = 5;
        super(getRandomColor(89, 80, 62, 1, colorOffset));
        this.type = 'wood';
        this.burnProbValue = .01;
    }

    simulate(gameCells, x, y) {
        this.burnProb = 0;
        if (gameCells.getCell(x, y, 0, 1) !== 0 && gameCells.getCell(x, y, 0, 1).type === 'fire') {
            this.burnProb += this.burnProbValue;
        }
        else if (gameCells.getCell(x, y, 0, -1) !== 0 && gameCells.getCell(x, y, 0, -1).type === 'fire') {
            this.burnProb += this.burnProbValue;
        }
        else if (gameCells.getCell(x, y, -1, 1) !== 0 && gameCells.getCell(x, y, -1, 1).type === 'fire') {
            this.burnProb += this.burnProbValue;
        }
        else if (gameCells.getCell(x, y, 1, 1) !== 0 && gameCells.getCell(x, y, 1, 1).type === 'fire') {
            this.burnProb += this.burnProbValue;
        }
        else if (gameCells.getCell(x, y, -1, -1) !== 0 && gameCells.getCell(x, y, -1, -1).type === 'fire') {
            this.burnProb += this.burnProbValue;
        }
        else if (gameCells.getCell(x, y, 1, -1) !== 0 && gameCells.getCell(x, y, 1, -1).type === 'fire') {
            this.burnProb += this.burnProbValue;
        }
        else if (gameCells.getCell(x, y, 1, 0) !== 0 && gameCells.getCell(x, y, 1, 0).type === 'fire') {
            this.burnProb += this.burnProbValue;
        }
        // move left
        else if (gameCells.getCell(x, y, -1, 0) !== 0 && gameCells.getCell(x, y, -1, 0).type === 'fire') {
            this.burnProb += this.burnProbValue;
        }

        if (Math.random() < this.burnProb) {
            var fire = new Fire();
            fire.life = 2;
            gameCells.setCell(x, y, 0, 0, fire);
        }
    }

}