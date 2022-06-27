const showOnPage = function (text) {
    let newParagraph = document.createElement("p");
    newParagraph.innerHTML = text;
    let outputDiv = document.getElementById("output");
    outputDiv.append(newParagraph);
  };


  //Global scope (convertFahrenheitToCelsius, tempOne, tempTwo)
    //Local scope (far, result)
        //Local scope (isFreezing)
  let convertFahrenheitToCelsius = function (far) {
    let result = (far - 32) * 5 / 9;

    if (result <= 0) {
        let isFreezing = true;
    };

    return result;
};

let cels1 = convertFahrenheitToCelsius(32);

let cels2 = convertFahrenheitToCelsius(68);

showOnPage(cels1);

showOnPage(cels2);