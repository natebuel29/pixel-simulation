class Stone extends Solid {

    constructor() {
        super(getRandomColor(183, 176, 156, 1, 20));
        this.type = 'stone';
    }


    simulate(gameCells, x, y) {
    }
}