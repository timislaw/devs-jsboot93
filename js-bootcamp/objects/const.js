
const showOnPage = function (text) {
    let newParagraph = document.createElement("p");
    newParagraph.innerHTML = text;
    let outputDiv = document.getElementById("output");
    outputDiv.append(newParagraph);
  };

  const person = {
      age: 27
  };

//   person = {};

  person.age = 28;
//   isRaining = false;

  console.log(person);

  // challenge area
  