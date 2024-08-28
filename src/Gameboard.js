import { Ship } from "./Ship";

class Gameboard {
  constructor() {
    this.grids = [];
    for (let index = 0; index < 5; index++) {
      const copyArr = [null, null, null, null, null];
      this.grids.push(copyArr);
    }
  }
  placeShip(ship, x = 0, y = 0) {
    if (!this.grids[y][x] && ship) {
      this.grids[y][x] = ship;
    } else {
      return null;
    }
  }

  receiveAttack(x, y) {
    if (!this.grids[y][x]) {
      this.grids[y][x] = ".";
    } else {
      if (this.grids[y][x] === "." || this.grids[y][x] === "x") return;
      else {
        const ship = this.grids[y][x];
        ship.hit();
        this.grids[y][x] = "x";
      }
    }
    return this.grids[y][x];
  }

  allShipsDestroyed() {
    let result = true;
    this.grids.forEach((arrayElement) => {
      arrayElement.forEach((element) => {
        if (element instanceof Ship) {
          result = false;
        }
      });
    });
    if (result) {
      const playerShootBtns = document.querySelectorAll(".player-shoot-btn");
      playerShootBtns.forEach((btnElement) => {
        btnElement.disabled = true;
      });
    }
    return result;
  }
}

export { Gameboard };
