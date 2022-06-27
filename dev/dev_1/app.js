  //continuing rock paper scissors with CRUD
  //create player profiles that save down below and pull up game to continue
    //start with a single player to play in the browser
    
  // can check each profile on whether both players are cpu's, players, or mixture of both
  // next selection will be drop down of a character selection and arena select
  // final selection will be rounds played and then the game starts
  //results are displayed and the win/loss gets assigned to the profile
  //lastly, a profile can change characters/arena through editing, and deleted to start new profile



  //start simple, set an event listener for clicking on rock paper scissors
  // keep it to one player, where profile has a player name, and character selection
  //each game randomizes
  

  //CRUD
  //C is create -- localStorage.setItem(key, value);
  //R is read -- localStorage.getItem(key);

  //take code from dev_0 and add following functionality
  //Get input from the user (at least 2 types of inputs) in the browser, make sure you write form validation code and clear input fields once the form is submitted! 
    // Store that information with associated dates and uuid in local storage 
    // Give the user the ability to edit their input (or something related to their input)
    // Process the data and present back to the user
    // Make sure you have all CRUD operations implemented. 
    // Implement at least 2 examples of javascript code that has NOT been covered in this course. 
    // Use arrow functions (unless you can make a case for not using them) and handle apps and input errors.
    // 95% of your code needs inside of function(s). 
    // (NEW) Implement strict mode in all your js files, make sure you have a functions js file and js file for your edit code. 
    // Has meaning output and follows the airbnb js style guide and uses css for a good user experience.
    // Students are required to use Chrome DevTools to walk me thru their code, as a part of their code review. 

    let game = getSavedGame();

    renderGame();

    document.querySelector('#rock').addEventListener('click', (e) => {
      const id = uuidv4();
      const timestamp = moment().calendar();
      let errorMessage = [];
      let errorEl = document.createElement('h5');
      let user = player.value;
      if (user === '' || user === null) {
        errorEl.textContent = `Who are you?`;
        document.querySelector('#err').appendChild(errorEl);  
      } else {
      game.push({
        id: id,
        user: user,
        choice: 'rock',
        createdAt: timestamp,
        compChoice: computerPlay()
      })
      saveGame();
      e.preventDefault();
      renderGame();


      // console.log('rock');
      // console.log(rockDecision());
    }
    if(errorMessage.length > 0){
      errorEl.textContent = errorMessage.join(', ')
    }
    })
  

    document.querySelector('#paper').addEventListener('click', (e) => {
      const id = uuidv4();
      const timestamp = moment().calendar();
      let errorMessage = [];
      let errorEl = document.createElement('h5');
      let user = player.value;
      if (user === '' || user === null) {
        errorEl.textContent = `Who are you?`;
        document.querySelector('#err').appendChild(errorEl);  
      } else {
      game.push({
        id: id,
        user: user,
        choice: 'paper',
        createdAt: timestamp,
        compChoice: computerPlay()
      })
      saveGame();
      e.preventDefault();
      renderGame();


      // console.log('rock');
      // console.log(rockDecision());
    }
    if(errorMessage.length > 0){
      errorEl.textContent = errorMessage.join(', ')
    }
    })

    document.querySelector('#scissors').addEventListener('click', (e) => {
      const id = uuidv4();
      const timestamp = moment().calendar();
      let errorMessage = [];
      let errorEl = document.createElement('h5');
      let user = player.value;
      if (user === '' || user === null) {
        errorEl.textContent = `Who are you?`;
        document.querySelector('#err').appendChild(errorEl);  
      } else {
      game.push({
        id: id,
        user: user,
        choice: 'scissors',
        createdAt: timestamp,
        compChoice: computerPlay()
      })
      saveGame();
      e.preventDefault();
      renderGame();


      // console.log('rock');
      // console.log(rockDecision());
    }
    if(errorMessage.length > 0){
      errorEl.textContent = errorMessage.join(', ')
    }
    })

    // document.addEventListener("DOMContentLoaded", function () {
    //   renderOldGames();
    // });

    window.addEventListener('storage', (e) => {
      if (e.key === 'game') {
        game = JSON.parse(e.newValue)
        renderGame();
      };
    });



    document.addEventListener("DOMContentLoaded", function () {
    
      let contentLoaded = document.createElement('h5')
      
      contentLoaded.textContent =`Page loaded at ${moment().calendar()}`
  
      document.querySelector('#page-loaded').appendChild(contentLoaded);
    });

    console.log(game);