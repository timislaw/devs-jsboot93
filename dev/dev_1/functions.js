'use strict';
//read existing game
let getSavedGame = () => {
    const gameJSON = localStorage.getItem('game');

    try {
        return gameJSON ? JSON.parse(gameJSON) : [];
    } catch (e) {
        return [];
    };
};
//save game
let saveGame = () => {
    localStorage.setItem('game', JSON.stringify(game));
};


//delete game
let removeGame = (id) => {
    const gameIndex = game.findIndex((game) => game.id === id);

    if (gameIndex > -1) {
        game.splice(gameIndex, 1);
    };
};


const removeButton = (game) => {
    const button = document.createElement("button");
    button.textContent = "x";
    button.addEventListener("click", function () {
      removeGame(game.id);
      saveGame();
      renderGame();
    });
    return button
  };


const computerPlay = () => {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
      return 'rock';
    } else if (randomNumber === 1) {
      return 'paper';
    } else {
      return 'scissors';
    };
  };



  const renderGame =  () => {
    document.querySelector("#output").innerHTML = "";

    let i = 0;

    game.forEach(() => {
      const container = document.createElement('div')
      container.className = 'container'

    let gameTime = document.createElement('p');
    gameTime.textContent = game[i].createdAt;

      let name = document.createElement('p');
      name.textContent = `${game[i].user}: ${game[i].choice} ---- computer: ${game[i].compChoice}`;
      container.appendChild(name);
  
      //removeButton - function returning button
      const buttonRemove = removeButton(game[i]);
      container.appendChild(buttonRemove)
  
      const nextLine = document.createElement('br')
      container.appendChild(nextLine)
  
      const updateGame = document.createElement('a')
      updateGame.textContent = "Make changes"
            container.appendChild(nextLine)

      updateGame.setAttribute('href', `edit.html#${game[i].id}`)
      container.appendChild(updateGame);
      container.appendChild(gameTime)
      container.appendChild(nextLine)
      container.appendChild(nextLine)

      document.querySelector("#output").appendChild(container)
      i++
    });
    
  };