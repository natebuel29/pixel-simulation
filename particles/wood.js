
class Wood extends Solid {
    constructor() {
        super(getRandomColor(89, 80, 62, 1, 5));
        this.type = 'wood';
        this.burnProbValue = .01;
        this.isCorrodible = true;
    }

    simulate(gameCells, x, y) {
        this.handleBurn(gameCells, x, y, this.burnProbValue);
    }

}