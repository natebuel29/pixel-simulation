
class Sand extends Solid {
    constructor() {
        super(getRandomColor(194, 178, 128, 1, 10));
        this.type = 'sand';
        this.isCorrodible = true;
        this.swapableParticles = ['water', 'acid']
    }

    simulate(gameCells, x, y) {
        this.moveDown(gameCells, x, y, this.swapableParticles);
    }
}