const showOnPage = function (text) {
    let newParagraph = document.createElement("p");
    newParagraph.innerHTML = text;
    let outputDiv = document.getElementById("output");
    outputDiv.append(newParagraph);
  };

  //multiple arguments

let add = function (a, b, c) {
    return a + b + c;
};

let result = add(10, 1, 5);

showOnPage(result);

//Default arguments

let getScoreText = function (name = 'Anon', score = 0) {
    // return 'Name: ' + name + ' - Score: ' + score;
    return `Name: ${name} - Score: ${score}`
};

let scoreText = getScoreText(undefined, 99);

showOnPage(scoreText);


//Challenge area
// total, tipPercent 20%

let getTip = function (total, tipPercent = .2) {
    let percent = tipPercent * 100;
    let tip = total * tipPercent;
    return `A ${percent}% tip on $${total} would be $${tip}`;
};

let myTip = getTip(100);

showOnPage(myTip);

showOnPage(getTip(200, .25));

let name = 'Tim'
let age = 27;

showOnPage(`Hey, I am ${age} my name is ${name}!`);

//challenge A 25% tip on $40 would be $10