import { Player } from "../Player";
import { Gameboard } from "../Gameboard";
import { Ship } from "../Ship";
import {
  createComputerGameboardUI,
  createPlayerGameboardUI,
} from "./createGridUI";

const newGameBtn = document.querySelector("#new-game-btn");
const newGameDialog = document.querySelector("#new-game-dialog");
newGameBtn.addEventListener("click", () => {
  newGameDialog.showModal();
});

const submitBtn = document.querySelector("#new-game-dialog-btn");

submitBtn.addEventListener("click", (e) => {
  const nameInput = document.querySelector("#player-name");
  const firstShipCoordinateX = document.querySelector("#ship-1-x");
  const firstShipCoordinateY = document.querySelector("#ship-1-y");
  const secondShipCoordinateX = document.querySelector("#ship-2-x");
  const secondShipCoordinateY = document.querySelector("#ship-2-y");
  const thirdShipCoordinateX = document.querySelector("#ship-3-x");
  const thirdShipCoordinateY = document.querySelector("#ship-3-y");

  const playerName = nameInput.value;
  const playerGameboard = new Gameboard();
  const firstShip = new Ship(1);
  const secondShip = new Ship(2);
  const thirdShip = new Ship(3);

  playerGameboard.placeShip(
    firstShip,
    firstShipCoordinateX.value,
    firstShipCoordinateY.value
  );

  playerGameboard.placeShip(
    secondShip,
    secondShipCoordinateX.value,
    secondShipCoordinateY.value
  )

  playerGameboard.placeShip(
    secondShip,
    Number(secondShipCoordinateX.value) + 1,
    secondShipCoordinateY.value
  )

  playerGameboard.placeShip(
    thirdShip,
    thirdShipCoordinateX.value,
    thirdShipCoordinateY.value
  )

  playerGameboard.placeShip(
    thirdShip,
    thirdShipCoordinateX.value,
    Number(thirdShipCoordinateY.value) + 1
  )

  playerGameboard.placeShip(
    thirdShip,
    thirdShipCoordinateX.value,
    Number(thirdShipCoordinateY.value) + 2
  )

  window.player = new Player(playerName, playerGameboard);

  const computerGameboard = new Gameboard();
  const computerFirstShip = new Ship(1);
  const computerSecondShip = new Ship(2);
  const computerThirdShip = new Ship(3);
  computerGameboard.placeShip(computerFirstShip, 1, 4);
  computerGameboard.placeShip(computerSecondShip, 3, 2);
  computerGameboard.placeShip(computerSecondShip, 3, 1);
  computerGameboard.placeShip(computerThirdShip, 4, 1);
  computerGameboard.placeShip(computerThirdShip, 4, 2);
  computerGameboard.placeShip(computerThirdShip, 4, 3);
  window.computer = new Player("Computer", computerGameboard);

  createPlayerGameboardUI();
  createComputerGameboardUI();
});
