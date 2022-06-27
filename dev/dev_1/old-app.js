'use strict';
  //rock paper scissors
  
  //1 global variable that is an array of objects, roshambo tally of wins per cpu
  
  const roShamBo = [
    {
      ro: "rock",
      sham: "paper",
      bo: "scissors",
    },
    {
      compOneWins: 0,
      compTwoWins: 0,
    },
  ];
  
  //function that generates random number that equates to ro, sham, or bo strings
  
  const computerPlay = function () {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    let selection = randomNumber;
    if (selection === 1) {
      return `${roShamBo[0].ro}`;
    } else if (selection === 2) {
      return `${roShamBo[0].sham}`;
    } else {
      return `${roShamBo[0].bo}`;
    };
  };
  
  //function returns which hand wins or 0 for draw
  const findWinner = function (handOne, handTwo) {
    if (handOne.includes(handTwo)) {
      return 0; //draw
    } else if (handOne.includes("rock") && handTwo.includes("scissors")) {
      return 1; //hand one
    } else if (handTwo.includes("rock") && handOne.includes("scissors")) {
      return 2; //hand two
    } else if (handOne.includes("scissors") && handTwo.includes("paper")) {
      return 1;//hand one
    } else if (handTwo.includes("scissors") && handOne.includes("paper")) {
      return 2;//hand two
    } else if (handOne.includes("paper") && handTwo.includes("rock")) {
      return 1;//hand one
    } else if (handTwo.includes("paper") && handOne.includes("rock")) {
      return 2;//hand two
    };
  };
  
  //function that pits 2 computers against eachother and runs the computerplay function in each
  // for x amount of games, play computerPlay function for each computer
  //
  
  const bestOf = function (x) {
    for (let i = 0; i < x; i++) {
      let cpuOnePlay = computerPlay();
      let cpuTwoPlay = computerPlay();
      console.log(cpuOnePlay);
      console.log(cpuTwoPlay);
      let winner = findWinner(cpuOnePlay, cpuTwoPlay);
      if (winner === 1) {
        roShamBo[1].compOneWins += 1;
        console.log("--player one wins--");
      } else if (winner === 2) {
        roShamBo[1].compTwoWins += 1;
        console.log("--player two wins--");
      } else if (winner === 0) {
        console.log("--this is a draw--");
      };
    };
    console.log(
      `Results: Computer One wins: ${roShamBo[1].compOneWins} & Computer Two wins: ${roShamBo[1].compTwoWins}`
    );
  };
  
  const computerPlay1 = () => {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
      return `rock`;
    } else if (randomNumber === 1) {
      return `paper`;
    } else {
      return `scissors`;
    };
  };

console.log(computerPlay());