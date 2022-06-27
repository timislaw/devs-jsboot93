const showOnPage = function (text) {
    let newParagraph = document.createElement("p");
    newParagraph.innerHTML = text;
    let outputDiv = document.getElementById("output");
    outputDiv.append(newParagraph);
  };

  let num = 103.941;

  console.log(num.toFixed(10));

  console.log(Math.round(num));
  console.log(Math.floor(num));
  console.log(Math.ceil(num));

// let min = 1;
// let max = 5;
// 0 - .99999
//   let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  // 10 - 20
// console.log(randomNum);


//challenge area

//1 - 5 -- true if correct- false if not correct

let makeGuess = function (guess) {
    // random = Math.floor(Math.random() * (max - min + 1)) + min;
    // return guess === random; ---------------- my code

    let min = 1
    let max = 5
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

    return guess === randomNum
};

console.log(makeGuess(1));