import { Ship } from "../scripts/Ship";

it("Ship Get Hit", () => {
    const newShip = new Ship(3, 3);

    newShip.hit();
    expect(newShip.numberOfHit).toBe(1);
    newShip.hit();
    expect(newShip.numberOfHit).toBe(2);
    newShip.hit();
    expect(newShip.isSunk()).toBe(true);
}) 