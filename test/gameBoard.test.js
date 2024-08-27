import { Ship } from "../scripts/Ship";
import { Gameboard } from "../scripts/Gameboard";

it("Place Ships", () => {
    const firstShip = new Ship(1);
    const playerGameboard = new Gameboard();
    playerGameboard.placeShip(firstShip, 4, 0);
    expect(playerGameboard.placeShip(firstShip, 4, 0)).toBeNull();
})

it("Receive Attack", () => {
    const firstShip = new Ship(1);
    const playerGameboard = new Gameboard();
    playerGameboard.placeShip(firstShip, 0, 4);
    expect(playerGameboard.receiveAttack(0 , 4)).toBe("x");
    playerGameboard.receiveAttack(0 , 4);
    expect(firstShip.isSunk()).toBe(true);
})

it("Miss Attack", () => {
    const playerGameboard = new Gameboard();
    expect(playerGameboard.receiveAttack(0 , 4)).toBe(".");
})