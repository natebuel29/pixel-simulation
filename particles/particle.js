class Particle {
    constructor(color) {
        this.hasBeenUpdated = false;
        this.color = color;
        this.isCorrodible = false;
    }

    simulate(gameCells, x, y) {
    }


    handleBurn(gameCells, x, y, burnProbValue) {
        var burnProb = 0;
        if (gameCells.getCell(x, y, 0, 1) !== 0 && gameCells.getCell(x, y, 0, 1).type === 'fire') {
            burnProb += burnProbValue;
        }
        else if (gameCells.getCell(x, y, 0, -1) !== 0 && gameCells.getCell(x, y, 0, -1).type === 'fire') {
            burnProb += burnProbValue;
        }
        else if (gameCells.getCell(x, y, -1, 1) !== 0 && gameCells.getCell(x, y, -1, 1).type === 'fire') {
            burnProb += burnProbValue;
        }
        else if (gameCells.getCell(x, y, 1, 1) !== 0 && gameCells.getCell(x, y, 1, 1).type === 'fire') {
            burnProb += burnProbValue;
        }
        else if (gameCells.getCell(x, y, -1, -1) !== 0 && gameCells.getCell(x, y, -1, -1).type === 'fire') {
            burnProb += burnProbValue;
        }
        else if (gameCells.getCell(x, y, 1, -1) !== 0 && gameCells.getCell(x, y, 1, -1).type === 'fire') {
            burnProb += burnProbValue;
        }
        else if (gameCells.getCell(x, y, 1, 0) !== 0 && gameCells.getCell(x, y, 1, 0).type === 'fire') {
            burnProb += burnProbValue;
        }
        // move left
        else if (gameCells.getCell(x, y, -1, 0) !== 0 && gameCells.getCell(x, y, -1, 0).type === 'fire') {
            burnProb += burnProbValue;
        }

        if (Math.random() < burnProb) {
            var fire = new Fire();
            fire.life = 2;
            gameCells.setCell(x, y, 0, 0, fire);
        }
    }


    handleDecay(gameCells, x, y, life, decayRate) {
        life -= decayRate;
        if (life <= 0) {
            gameCells.setCell(x, y, 0, 0, 0);
        }

        return life;
    }
}
