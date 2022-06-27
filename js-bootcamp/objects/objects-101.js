const showOnPage = function (text) {
    let newParagraph = document.createElement("p");
    newParagraph.innerHTML = text;
    let outputDiv = document.getElementById("output");
    outputDiv.append(newParagraph);
  };

let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
};

showOnPage(`${myBook.title} by ${myBook.author}`);

myBook.title = 'Animal Farm';

showOnPage(`${myBook.title} by ${myBook.author}`);

//challenge area

//name , age, location

let person = {
name: 'Tim',
age: 27,
location: 'Fresno'
};

//Tim is age 27 and lives in Fresno
//increase age by 1 and print message again

showOnPage(`${person.name} is ${person.age} and lives in ${person.location}`);

person.age = 28;

showOnPage(`${person.name} is ${person.age} and lives in ${person.location}`);