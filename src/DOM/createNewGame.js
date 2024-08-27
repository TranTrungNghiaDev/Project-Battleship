import { Player } from "../Player";
import { Gameboard } from "../Gameboard";
import { Ship } from "../Ship";
import { createGameboardUI } from "./createGridUI";

const newGameBtn = document.querySelector("#new-game-btn");
const newGameDialog = document.querySelector("#new-game-dialog");
newGameBtn.addEventListener("click", () => {
    newGameDialog.showModal();
})

const submitBtn = document.querySelector("#new-game-dialog-btn");

submitBtn.addEventListener("click", (e) => {
    const nameInput = document.querySelector("#player-name");
    const playerName = nameInput.value;

    const playerGameboard = new Gameboard();
    const firstShip = new Ship(1);
    const secondShip = new Ship(2);
    const thirdShip = new Ship(3);
    playerGameboard.placeShip(firstShip, 4, 0);
    playerGameboard.placeShip(secondShip, 0, 1);
    playerGameboard.placeShip(secondShip, 0, 2);
    playerGameboard.placeShip(thirdShip, 1, 4);
    playerGameboard.placeShip(thirdShip, 2, 4);
    playerGameboard.placeShip(thirdShip, 3, 4);

    window.player = new Player(playerName, playerGameboard);

    const playerArea = document.querySelector("#player-area");
    createGameboardUI(window.player, playerArea);
})
