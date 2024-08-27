class Gameboard {
    constructor() {
        this.cells = [null,null,null,null,null,null];
        this.grids = [];
        for (let index = 0; index < 5; index++) {
            this.grids.push(this.cells);
        }
    }
    placeShip(ship, x = 0, y = 0) {
        if(!this.grids[y][x] && ship) {
            this.grids[y][x] = ship;
        }
        else {
            return null;
        }
    }

    receiveAttack(x, y) {
        if(!this.grids[y][x]) {
            this.grids[y][x] = ".";
        }
        else {
            if(this.grids[y][x] === "." || this.grids[y][x] === "x") return;
            else {
                const ship = this.grids[y][x];
                ship.hit();
                this.grids[y][x] = "x";
            }
        }
        return this.grids[y][x];
    }
}

export {Gameboard}
