
class Lava extends Liquid {
    constructor() {
        super(getRandomColor(229, 101, 32, 1, 30));
        this.type = 'lava';
    }

    simulate(gameCells, x, y) {
        this.color = getRandomColor(229, 101, 32, 1, 30);
        this.moveDown(gameCells, x, y, []);
        this.createObsidian(gameCells, x, y);
        this.destroyLiquids(gameCells, x, y);
    }

    destroyLiquids(gameCells, x, y) {
        // If no particle below, then move down
        if (gameCells.getCell(x, y, 0, 1) !== 0 && gameCells.getCell(x, y, 0, 1).baseType === 'liquid' && gameCells.getCell(x, y, 0, 1).type !== 'lava') {
            gameCells.setCell(x, y, 0, 1, 0);
        }
        else if ((gameCells.getCell(x, y, -1, 1) !== 0 && gameCells.getCell(x, y, -1, 1).baseType === 'liquid' && gameCells.getCell(x, y, -1, 1).type !== 'lava') &&
            (gameCells.getCell(x, y, 1, 1) !== 0 && gameCells.getCell(x, y, 1, 1).baseType === 'liquid' && gameCells.getCell(x, y, 1, 1).type !== 'lava')) {
            var randomDirection = Math.random() > 0.5 ? 1 : -1;
            gameCells.setCell(x, y, randomDirection, 1, 0);
        }
        else if (gameCells.getCell(x, y, 1, 1) !== 0 && gameCells.getCell(x, y, 1, 1).baseType === 'liquid' && gameCells.getCell(x, y, 1, 1).type !== 'lava') {
            gameCells.setCell(x, y, 1, 1, 0);
        }
        else if (gameCells.getCell(x, y, -1, 1) !== 0 && gameCells.getCell(x, y, -1, 1).baseType === 'liquid' && gameCells.getCell(x, y, -1, 1).type !== 'lava') {
            gameCells.setCell(x, y, -1, 1, 0);
        }
        else if ((gameCells.getCell(x, y, 1, 0) !== 0 && gameCells.getCell(x, y, 1, 0).baseType === 'liquid' && gameCells.getCell(x, y, 1, 0).type !== 'lava') &&
            (gameCells.getCell(x, y, -1, 0) !== 0 && gameCells.getCell(x, y, -1, 0).baseType === 'liquid' && gameCells.getCell(x, y, -1, 0).type !== 'lava')) {
            var randomDirection = Math.random() > 0.5 ? 1 : -1;
            gameCells.setCell(x, y, randomDirection, 0, 0);
        }
        else if (gameCells.getCell(x, y, 1, 0) !== 0 && gameCells.getCell(x, y, 1, 0).baseType === 'liquid' && gameCells.getCell(x, y, 1, 0).type !== 'lava') {
            gameCells.setCell(x, y, 1, 0, 0);
        }
        else if (gameCells.getCell(x, y, -1, 0) !== 0 && gameCells.getCell(x, y, -1, 0).baseType === 'liquid' && gameCells.getCell(x, y, -1, 0).type !== 'lava') {
            gameCells.setCell(x, y, -1, 0, 0);
        }
    }

    createObsidian(gameCells, x, y) {
        if (gameCells.getCell(x, y, 0, 1) !== 0 && gameCells.getCell(x, y, 0, 1).type === 'water') {
            gameCells.setCell(x, y, 0, 0, new Obsidian());
            gameCells.setCell(x, y, 0, 1, new Obsidian());
        }
        else if (gameCells.getCell(x, y, 0, -1) !== 0 && gameCells.getCell(x, y, 0, -1).type === 'water') {
            gameCells.setCell(x, y, 0, 0, new Obsidian());
            gameCells.setCell(x, y, 0, -1, new Obsidian());
        }
        else if (gameCells.getCell(x, y, -1, 1) !== 0 && gameCells.getCell(x, y, -1, 1).type === 'water') {
            gameCells.setCell(x, y, 0, 0, new Obsidian());
            gameCells.setCell(x, y, -1, 1, new Obsidian());
        }
        else if (gameCells.getCell(x, y, 1, 1) !== 0 && gameCells.getCell(x, y, 1, 1).type === 'water') {
            gameCells.s(x, y, 0, 0, new Obsidian());
            gameCells.setCell(x, y, 1, 1, new Obsidian());
        }
        else if (gameCells.getCell(x, y, -1, -1) !== 0 && gameCells.getCell(x, y, -1, -1).type === 'water') {
            gameCells.setCell(x, y, 0, 0, new Obsidian());
            gameCells.setCell(x, y, -1, -1, new Obsidian());
        }
        else if (gameCells.getCell(x, y, 1, -1) !== 0 && gameCells.getCell(x, y, 1, -1).type === 'water') {
            gameCells.setCell(x, y, 0, 0, new Obsidian());
            gameCells.setCell(x, y, 1, -1, new Obsidian());
        }
        else if (gameCells.getCell(x, y, 1, 0) !== 0 && gameCells.getCell(x, y, 1, 0).type === 'water') {
            gameCells.setCell(x, y, 0, 0, new Obsidian());
            gameCells.setCell(x, y, 1, 0, new Obsidian());
        }
        // move left
        else if (gameCells.getCell(x, y, -1, 0) !== 0 && gameCells.getCell(x, y, -1, 0).type === 'water') {
            gameCells.setCell(x, y, 0, 0, new Obsidian());
            gameCells.setCell(x, y, -1, 0, new Obsidian());
        }
    }
}