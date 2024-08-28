import { createPlayerGameboardUI } from "./DOM/createGridUI";
import { Ship } from "./Ship";

function changeToComputerTurn() {
    const playerGameboard = window.player.gameBoard;
    const playerGameboardGrids = playerGameboard.grids;

    let x = Math.floor(Math.random() * 5);
    let y = Math.floor(Math.random() * 5);

    while(playerGameboardGrids[y][x] && !(playerGameboardGrids[y][x] instanceof Ship)) {
        x = Math.floor(Math.random() * 5);
        y = Math.floor(Math.random() * 5);
    }

    playerGameboard.receiveAttack(x, y);
    createPlayerGameboardUI();

    if(playerGameboard.allShipsDestroyed()) {
        alert("You Lose");
    }
}

export {changeToComputerTurn}