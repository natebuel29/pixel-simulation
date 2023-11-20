
class Sand extends Particle {
    constructor() {
        var colorOffset = 10;
        super(getRandomColor(194, 178, 128, colorOffset));
        this.type = 'sand';
    }

    simulate(gameTiles, x, y) {
        var inBoundsRight = x + 1 < 100;
        var inBoundsLeft = x - 1 >= 0;
        // If no particle below, then move down
        if (gameTiles.getCell(x, y, 0, 1) === 0) {
            var tarCell = gameTiles.getCell(x, y, 0, 1);
            if (tarCell.type === 'water') {
                var curCell = gameTiles.getCell(x, y, 0, 0);
                gameTiles.setCell(x, y, 0, 1, curCell);
                gameTiles.setCell(x, y, 0, 0, tarCell);
                // gameWorld[x][y + 1] = currSand;
                // gameWorld[x][y] = targetPar;
            } else {
                var curCell = gameTiles.getCell(x, y, 0, 0);
                gameTiles.setCell(x, y, 0, 1, curCell);
                gameTiles.setCell(x, y, 0, 0, 0);

                // var currSand = gameWorld[x][y];
                // gameWorld[x][y + 1] = currSand;
                // gameWorld[x][y] = 0;

            }


        }
        else if (gameWorld[x][y] !== 0 && inBoundsRight && inBoundsLeft && y + 1 < 100 && (gameWorld[x + 1][y + 1] === 0 || gameWorld[x + 1][y + 1].type === 'water') && gameWorld[x - 1][y + 1] === 0) {
            if (y + 1 < 100 && x + 1 < 100) {
                var randomDirection = Math.random() > 0.5 ? 1 : -1;
                var currSand = gameWorld[x][y];
                gameWorld[x + randomDirection][y + 1] = currSand;
                gameWorld[x][y] = 0;

            }
        }
        else if (gameWorld[x][y] !== 0 && inBoundsRight && (y + 1 < 100 && x + 1 < 100) && (gameWorld[x + 1][y + 1] === 0 || gameWorld[x + 1][y + 1].type === 'water')) {
            if (gameWorld[x + 1][y + 1].type === 'water') {
                var currSand = gameWorld[x][y];
                var targetPar = gameWorld[x + 1][y + 1]
                gameWorld[x + 1][y + 1] = currSand;
                gameWorld[x][y] = targetPar;
            } else {
                var currSand = gameWorld[x][y];
                gameWorld[x + 1][y + 1] = currSand;
                gameWorld[x][y] = 0;
            }

        }
        else if (gameWorld[x][y] !== 0 && y + 1 < 100 && x - 1 >= 0) {
            //todo: do we want to move water somewhere? \
            if (gameWorld[x - 1][y + 1].type === 'water') {
                var currSand = gameWorld[x][y];
                var targetPar = gameWorld[x - 1][y + 1]
                gameWorld[x - 1][y + 1] = currSand;
                gameWorld[x][y] = targetPar;
            }
            else if (gameWorld[x - 1][y + 1] === 0) {
                var currSand = gameWorld[x][y];
                gameWorld[x - 1][y + 1] = currSand;
                gameWorld[x][y] = 0;

            }
        }
    }
}