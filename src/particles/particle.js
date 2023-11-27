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
        const burnableTypes = ['fire', 'lava']
        if (gameCells.getCell(x, y, 0, 1) !== 0 && burnableTypes.includes(gameCells.getCell(x, y, 0, 1).type)) {
            burnProb += burnProbValue;
        }
        else if (gameCells.getCell(x, y, 0, -1) !== 0 && burnableTypes.includes(gameCells.getCell(x, y, 0, -1).type)) {
            burnProb += burnProbValue;
        }
        else if (gameCells.getCell(x, y, -1, 1) !== 0 && burnableTypes.includes(gameCells.getCell(x, y, -1, 1).type)) {
            burnProb += burnProbValue;
        }
        else if (gameCells.getCell(x, y, 1, 1) !== 0 && burnableTypes.includes(gameCells.getCell(x, y, 1, 1).type)) {
            burnProb += burnProbValue;
        }
        else if (gameCells.getCell(x, y, -1, -1) !== 0 && burnableTypes.includes(gameCells.getCell(x, y, -1, -1).type)) {
            burnProb += burnProbValue;
        }
        else if (gameCells.getCell(x, y, 1, -1) !== 0 && burnableTypes.includes(gameCells.getCell(x, y, 1, -1).type)) {
            burnProb += burnProbValue;
        }
        else if (gameCells.getCell(x, y, 1, 0) !== 0 && burnableTypes.includes(gameCells.getCell(x, y, 1, 0).type)) {
            burnProb += burnProbValue;
        }
        // move left
        else if (gameCells.getCell(x, y, -1, 0) !== 0 && burnableTypes.includes(gameCells.getCell(x, y, -1, 0).type)) {
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
