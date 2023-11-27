class Smoke extends Gas {

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
        if (curTime - this.lastTime >= getRandomInt(50, 500)) {
            this.color = getRandomColor(50, 50, 50, this.life, 5);
            this.lastTime = curTime;
            this.moveUp(gameCells, x, y);
            this.life = this.handleDecay(gameCells, x, y, this.life, this.decayRate);
        }
    }
}