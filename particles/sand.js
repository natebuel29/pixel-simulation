
class Sand extends Particle {
    constructor() {
        var colorOffset = 10;
        super(getRandomColor(194, 178, 128, colorOffset));

    }

    simulate(gameWorld, x, y) {
        var inBoundsRight = x + 1 < 100;
        var inBoundsLeft = x - 1 >= 0;
        // If no particle below, then move down
        if (gameWorld[x][y] !== 0 && gameWorld[x][y + 1] === 0) {
            if (y + 1 < 100) {
                var currSand = gameWorld[x][y];
                gameWorld[x][y + 1] = currSand;
                gameWorld[x][y] = 0;

            }
        }
        else if (gameWorld[x][y] !== 0 && inBoundsRight && inBoundsLeft && gameWorld[x + 1][y + 1] === 0 && gameWorld[x - 1][y + 1] === 0) {
            if (y + 1 < 100 && x + 1 < 100) {
                var randomDirection = Math.random() > 0.5 ? 1 : -1;
                var currSand = gameWorld[x][y];
                gameWorld[x + randomDirection][y + 1] = currSand;
                gameWorld[x][y] = 0;

            }
        }
        else if (gameWorld[x][y] !== 0 && inBoundsRight && gameWorld[x + 1][y + 1] === 0) {
            if (y + 1 < 100 && x + 1 < 100) {
                var currSand = gameWorld[x][y];
                gameWorld[x + 1][y + 1] = currSand;
                gameWorld[x][y] = 0;
            }
        }
        else if (gameWorld[x][y] !== 0 && y + 1 < 100 && x - 1 >= 0) {
            if (gameWorld[x - 1][y + 1] === 0) {
                var currSand = gameWorld[x][y];
                gameWorld[x - 1][y + 1] = currSand;
                gameWorld[x][y] = 0;

            }
        }
    }
}