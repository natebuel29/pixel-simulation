
class Sand extends Particle {
    colorOffset = 20;
    constructor() {
        this.color = getRandomColor(194, 178, 128, this.colorOffset);
    }

    simulate(gameWorld) {
    }
}