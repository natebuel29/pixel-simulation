
class Wood extends Particle {
    constructor() {
        var colorOffset = 5;
        super(getRandomColor(89, 80, 62, colorOffset));
        this.type = 'wood';
    }

    simulate(gameWorld, x, y) {
    }

}