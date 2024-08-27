function createGameboardUI(player, area) {
    const playerGameboardGrids = player.gameBoard.grids;
    area.innerText = "";
    for (let i = 0; i < playerGameboardGrids.length; i++) {
        for (let j = 0; j < playerGameboardGrids[i].length; j++) {
            const shootBtn = document.createElement("button");
            if(playerGameboardGrids[i][j]) {
                shootBtn.classList.add("player-ship-cell");
            }
            area.appendChild(shootBtn);
        }
    }
}

export {createGameboardUI};