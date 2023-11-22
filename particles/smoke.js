class Smoke extends Particle {

    constructor() {
        var colorOffset = 10;
        super(getRandomColor(50, 50, 50, 1, 5));
        this.life = 1;
        this.type = 'smoke';
        this.lastTime = new Date().getTime();
        this.decayRate = (Math.random() * (0.00300 - 0.00900) + 0.00900).toFixed(4)
    }

    simulate(gameCells, x, y) {
        const curTime = new Date().getTime();
        if (curTime - this.lastTime >= this.getRandomInt(50, 500)) {
            this.life -= this.decayRate;
            if (this.life <= 0) {
                gameCells.setCell(x, y, 0, 0, 0);
            }
            this.color = getRandomColor(50, 50, 50, this.life, 5);
            this.lastTime = curTime;
            // If no particle below, then move down
            if (gameCells.getCell(x, y, 0, -1) === 0) {
                gameCells.swapCells(x, y, 0, -1);
            }
            // should we randomly check left vs right per frame?
            else if ((gameCells.getCell(x, y, 1, -1) === 0 && gameCells.getCell(x, y, -1, -1) === 0)) {
                var randomDirection = Math.random() > 0.5 ? 1 : -1;
                gameCells.swapCells(x, y, randomDirection, -1);

            }
            else if (gameCells.getCell(x, y, 1, -1) === 0) {
                gameCells.swapCells(x, y, 1, -1);

            }
            else if (gameCells.getCell(x, y, -1, -1) === 0) {
                gameCells.swapCells(x, y, -1, -1);
            }
            // move left
            else if (gameCells.getCell(x, y, -1, 0) === 0) {
                gameCells.swapCells(x, y, -1, 0);

            }
            //move right
            else if (gameCells.getCell(x, y, 1, 0) === 0) {
                gameCells.swapCells(x, y, 1, 0);
            }
        }
    }


    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}