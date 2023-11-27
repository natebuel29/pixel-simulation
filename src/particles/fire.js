
class Fire extends Particle {
    constructor() {
        super(getRandomColor(226, 88, 34, 1, 5));
        this.type = 'fire';
        this.fireColors = [
            {
                r: 226,
                g: 88,
                b: 34
            },
            {
                r: 245,
                g: 245,
                b: 0
            },
            {
                r: 245,
                g: 0,
                b: 0
            },
        ];
        this.decayRate = (Math.random() * (0.00300 - 0.0200) + 0.0200).toFixed(4)
        this.life = 1;
    }

    simulate(gameCells, x, y) {
        this.life -= this.decayRate;
        if (this.life <= 0) {
            gameCells.setCell(x, y, 0, 0, new Smoke());
        }
        // this.life = this.handleDecay(gameCells, x, y, this.life, this.decayRate);
        var randomColor = this.fireColors[getRandomInt(0, this.fireColors.length - 1)];
        this.color = getRandomColor(randomColor.r, randomColor.g, randomColor.b, 1, 5);
    }

}