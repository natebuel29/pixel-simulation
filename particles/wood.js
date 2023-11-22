
class Wood extends Particle {
    constructor() {
        var colorOffset = 5;
        super(getRandomColor(89, 80, 62, 1, colorOffset));
        this.type = 'wood';
    }

    simulate(gameCells, x, y) {
    }

}