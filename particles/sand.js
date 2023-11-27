
class Sand extends Solid {
    constructor() {
        var colorOffset = 10;
        super(getRandomColor(194, 178, 128, 1, colorOffset));
        this.type = 'sand';
        this.isCorrodible = true;
        this.swapableParticles = ['water', 'acid']
    }

    simulate(gameCells, x, y) {
        this.moveDown(gameCells, x, y, this.swapableParticles);
    }
}