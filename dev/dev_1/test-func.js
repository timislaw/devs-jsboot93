// let createDOM = (game) => {
    
// };




// let rockDecision = () => {
//     let computer = computerPlay();
//     if (computer === 0) {
//         return `${game[0].user} Rock -- draw`
//     } else if (computer === 1) {
//         return `${game[0].user} Paper -- lose`
//     } else {
//         return `${game[0].user} Scissors -- win`
//     };
// };

// let paperDecision = () => {
//     let computer = computerPlay();
//     if (computer === 0) {
//         return `${game[0].user} Rock -- win`
//     } else if (computer === 1) {
//         return `${game[0].user} Paper -- draw`
//     } else {
//         return `${game[0].user} Scissors -- lose`
//     };
// };

// let scissorsDecision = () => {
//     let computer = computerPlay();
//     if (computer === 0) {
//         return `${game[0].user} Rock -- lose`
//     } else if (computer === 1) {
//         return `${game[0].user} Paper -- win`
//     } else {
//         return `${game[0].user} Scissors -- draw`
//     };
// };






    // let renderGame = (game) => {


    //     document.querySelector('#output').innerHTML = ``;
    // const gameEl = generateGameDOM(game);
    // document.querySelector('#output').appendChild(gameEl);

    // };



    // let generateGameDOM = (game) => {
    //     const gameEl = document.createElement('div');
    //     const textEl = document.createElement('a');
    //     const timeEl = document.createElement('span');
    // //remove game button
    //     button.textContent = 'x';
    //     gameEl.appendChild(button);
    //     button.addEventListener('click', () => {
    //         removeGame(game.id);
    //         saveGame(game);
    //         // renderGame(game);
    //     })
    
    //     //game text
    //     if (game.choice === 0) {
    //         console.log(player.value);
    //         console.log(game.choice);
    //         textEl.textContent = `${player.value} chose rock -- computer chose ${computerPlay()}`
    //         timeEl.textContent = `  Created: ${moment(game.timestamp)}.`
    //     } else if (game.choice === 1) {
    //         console.log(game.choice);
    //         textEl.textContent = `${game.user} chose paper -- computer chose ${computerPlay()}`
    //         timeEl.textContent = `  Created: ${moment(game.timestamp)}.`
    //     } else if (game.choice === 2) {
    //         console.log(game.user)
    //         textEl.textContent = `${game.user} chose scissors -- computer chose ${computerPlay()}`
    //         timeEl.textContent = `  Created: ${moment(game.timestamp)}.`
    //     }
    //     textEl.setAttribute('href', `edit.html#${game.id}`);
    //     gameEl.appendChild(textEl);
    //     gameEl.appendChild(timeEl);
    
    //     return gameEl;
    // }
    



    if (game.choice === 0) {
        console.log('hello?')
        textEl.textContent = `${game.user} chose rock -- computer chose ${computerPlay()}`
        timeEl.textContent = `  Created: ${moment(game.timestamp)}.`
    } else if (game.choice === 1) {
        console.log(game.choice);
        textEl.textContent = `${game.user} chose paper -- computer chose ${computerPlay()}`
        timeEl.textContent = `  Created: ${moment(game.timestamp)}.`
    } else if (game.choice === 2) {
        console.log(game.user)
        textEl.textContent = `${game.user} chose scissors -- computer chose ${computerPlay()}`
        timeEl.textContent = `  Created: ${moment(game.timestamp)}.`
    }



    const gameEl = document.createElement('div');
    const textEl = document.createElement('a');
    const timeEl = document.createElement('span');



    // remove button
    removeButton(each)
    
    textEl.textContent = 'this is a test'

    document.querySelector('#output').appendChild(textEl);

    textEl.setAttribute('href', `edit.html#${game.id}`);
    gameEl.appendChild(textEl);
    gameEl.appendChild(timeEl);



//     let renderGame = (game) => {
//     // document.querySelector('#output').innerHTML = ``;
//     const gameEl = generateGameDOM(game);
//     document.querySelector('#output').appendChild(gameEl);
// };



let renderGame = (game) => {
    document.querySelector('#output').innerHTML = '';
    const gameEl = document.createElement('div');
    const textEl = document.createElement('p');
    const timeEl = document.createElement('span');
    game.forEach((each) => {
        
        
        if (game[0].choice === 0) {
            textEl.textContent = `yarp`;
            removeButton(each);
            document.querySelector('#output').appendChild(textEl);
        } else if (game[0].choice === 1) {
            textEl.textContent = `yup`;
            removeButton(each);
            document.querySelector('#output').appendChild(textEl);
        } else if (game[0].choice === 2) {
            textEl.textContent = `nope`;
            timeEl.textContent = game.createdAt;
            document.querySelector('#output').appendChild(textEl);
            document.querySelector('#output').appendChild(timeEl);
            removeButton(each);

        }
        // document.querySelector('#output').appendChild(textEl);
    });

    
};


const removeButton = (each) => {
    const button = document.createElement('button');
    button.textContent = 'x';
    button.addEventListener('click', () => {
        removeGame(each.id);
        saveGame(game);
        renderGame(game);
    })
    document.querySelector('#output').appendChild(button);
    }



    // const gameOutput = () => {
//   if (game.choice === 0) {
//     console.log('hello?')
//     textEl.textContent = `${game.user} chose rock -- computer chose ${computerPlay()}`
//     timeEl.textContent = `  Created: ${moment(game.timestamp)}.`
// } else if (game.choice === 1) {
//     console.log(game.choice);
//     textEl.textContent = `${game.user} chose paper -- computer chose ${computerPlay()}`
//     timeEl.textContent = `  Created: ${moment(game.timestamp)}.`
// } else if (game.choice === 2) {
//     console.log(game.user)
//     textEl.textContent = `${game.user} chose scissors -- computer chose ${computerPlay()}`
//     timeEl.textContent = `  Created: ${moment(game.timestamp)}.`
// }
// };
