
class Sand extends Particle {
    colorOffset = 10;
    constructor() {
        super();
        this.color = getRandomColor(194, 178, 128, this.colorOffset);
    }

    simulate(gameWorld) {
    }
}