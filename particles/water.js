
class Water extends Liquid {
    constructor() {
        super(getRandomColor(14, 135, 245, 1, 10));
        this.type = 'water';
    }

    simulate(gameCells, x, y) {
        this.color = getRandomColor(14, 135, 245, 1, 10);
        this.moveDown(gameCells, x, y, []);
        this.snuffFire(gameCells, x, y);
    }
}