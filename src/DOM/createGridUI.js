import { changeToComputerTurn } from "../changeToComputerTurn";
import { Ship } from "../Ship";

function createPlayerGameboardUI() {
  const playerShipsArea = document.querySelector("#player-ships-area");
  const playerGameboard = window.player.gameBoard;
  const playerGameboardGrids = playerGameboard.grids;
  playerShipsArea.innerHTML = "";

  playerGameboardGrids.forEach((arrayElement) => {
    arrayElement.forEach((element) => {
      const shootBtn = document.createElement("button");
      shootBtn.disabled = true;
      if (element instanceof Ship) {
        shootBtn.classList.add("player-ship-cell");
      } else if (element) {
        shootBtn.textContent = element;
      }

      playerShipsArea.appendChild(shootBtn);
    });
  });
}

function createComputerGameboardUI() {
  const computerShipsArea = document.querySelector("#computer-ships-area");
  const computerGameboard = window.computer.gameBoard;
  const computerGameboardGrids = computerGameboard.grids;
  computerShipsArea.innerHTML = "";

  for (let i = 0; i < computerGameboardGrids.length; i++) {
    for (let j = 0; j < computerGameboardGrids[i].length; j++) {
      const shootBtn = document.createElement("button");
      shootBtn.classList.add("player-shoot-btn");
      shootBtn.addEventListener("click", () => {
        const x = j;
        const y = i;
        computerGameboard.receiveAttack(x, y);
        shootBtn.textContent = computerGameboardGrids[y][x];

        if (computerGameboard.allShipsDestroyed()) {
          alert("You Win");
        }
        
        changeToComputerTurn();
      });

      computerShipsArea.appendChild(shootBtn);

      
    }
  }
}

export { createComputerGameboardUI, createPlayerGameboardUI };
