'use strict';

const userElement = document.querySelector('#edit')
const gameId = location.hash.substring(1)
let games = getSavedGame()
let gameEdit = games.find( (game) =>  game.id === gameId)

if (!gameEdit) {
    location.assign('index.html')
};

userElement.value = gameEdit.user;
userElement.addEventListener('input', (e) => {
    gameEdit.user = e.target.value
    localStorage.setItem('game', JSON.stringify(games));

});

document.addEventListener("DOMContentLoaded", function () {
    
    let contentLoaded = document.createElement('h5')
    
    contentLoaded.textContent =`Page loaded at ${moment().calendar()}`

    document.querySelector('#page-loaded').appendChild(contentLoaded);
  });

    // window.addEventListener('storage', (e) => {
    //   if (e.key === 'game') {
    //     game = JSON.parse(e.newValue)
        
    //   };
    // });

    document.hasStorageAccess().then(hasAccess => {
        if (hasAccess) {
         console.log('storage enabled')
        } else {
         console.log('storage disabled')
        }
      });