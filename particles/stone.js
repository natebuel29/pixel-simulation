class Stone extends Solid {

    constructor() {
        var colorOffset = 20;
        super(getRandomColor(183, 176, 156, 1, colorOffset));
        this.type = 'stone';
    }


    simulate(gameCells, x, y) {
    }
}