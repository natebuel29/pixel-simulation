
class Water extends Particle {
    constructor() {
        var colorOffset = 10;
        super(getRandomColor(14, 135, 204, colorOffset));
        this.type = 'water';

    }

    simulate(gameWorld, x, y) {
        this.color = getRandomColor(14, 135, 204, 10);
        var inBoundsRight = x + 1 < 100;
        var inBoundsLeft = x - 1 >= 0;
        // If no particle below, then move down
        if (gameWorld[x][y] !== 0 && gameWorld[x][y + 1] === 0) {
            if (y + 1 < 100) {
                var curParticle = gameWorld[x][y];
                gameWorld[x][y + 1] = curParticle;
                gameWorld[x][y] = 0;
            }
        }
        else if (gameWorld[x][y] !== 0 && inBoundsRight && inBoundsLeft && gameWorld[x + 1][y + 1] === 0 && gameWorld[x - 1][y + 1] === 0) {
            if (y + 1 < 100 && x + 1 < 100) {
                var randomDirection = Math.random() > 0.5 ? 1 : -1;
                var curParticle = gameWorld[x][y];
                gameWorld[x + randomDirection][y + 1] = curParticle;
                gameWorld[x][y] = 0;

            }
        }
        else if (gameWorld[x][y] !== 0 && inBoundsRight && inBoundsLeft && gameWorld[x + 1][y] === 0 && gameWorld[x - 1][y] === 0) {
            if (y + 1 < 100 && x + 1 < 100) {

                var randomDirection = Math.random() > 0.5 ? 1 : -1;
                var curParticle = gameWorld[x][y];
                gameWorld[x + randomDirection][y] = curParticle;
                gameWorld[x][y] = 0;

            }
        }
        // move left
        else if (gameWorld[x][y] !== 0 && inBoundsLeft && gameWorld[x - 1][y] === 0) {
            if (gameWorld[x - 1][y] === 0) {
                var curParticle = gameWorld[x][y];
                gameWorld[x - 1][y] = curParticle;
                gameWorld[x][y] = 0;
                console.log("here in moveleft");

            }
        }
        //move right
        else if (gameWorld[x][y] !== 0 && inBoundsRight && gameWorld[x + 1][y] === 0) {
            console.log("here in move right");
            var curParticle = gameWorld[x][y];
            gameWorld[x + 1][y] = curParticle;
            gameWorld[x][y] = 0;
        }
        else {
            console.log("here in else :(");
        }
    }
}