
class Water extends Liquid {
    constructor() {
        var colorOffset = 10;
        super(getRandomColor(14, 135, 245, 1, colorOffset));
        this.type = 'water';
    }

    simulate(gameCells, x, y) {
        this.color = getRandomColor(14, 135, 245, 1, 10);
        this.moveDown(gameCells, x, y, []);
        this.snuffFire(gameCells, x, y);
    }
}