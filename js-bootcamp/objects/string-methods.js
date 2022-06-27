const showOnPage = function (text) {
  let newParagraph = document.createElement("p");
  newParagraph.innerHTML = text;
  let outputDiv = document.getElementById("output");
  outputDiv.append(newParagraph);
};

let name = ' Tim Ross ';

// Length property
console.log(name.length);

//convert to upper case

console.log(name.toUpperCase());

//convert to lower case
console.log(name.toLowerCase());

//includes method
let password = 'abc123pasd098';
console.log(password.includes('password'));

// Trim
console.log(name.trim());

//challenge area
// isValidPassword
// length is more than 8 - and it doesn't contain the password

let isValidPassword = function (password) {
    // let valid = password;
    // if (valid.length > 8 && !valid.includes('password')) {
    //     return true;
    // } else {
    //     return false;
    // }  ------------------ my code
    return valid.length > 8 && !valid.includes('password')
};

console.log(isValidPassword('ajsdf'));
console.log(isValidPassword('asdlfkjsdf'));
console.log(isValidPassword('password'));