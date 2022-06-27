//Function - input (argument), code, output (return value)

// let greetUser = function () {
//     showOnPage('Welcome User!');
// };

// greetUser();
// greetUser();
// greetUser();

// let square = function (num) {
//     let result = num * num;
//     return result;
// };

// let value = square(3);

// let otherValue = square(10);

// showOnPage(value);
// showOnPage(otherValue);

//Challenge Area
//convertFahrenheitToCelsius

//Call a couple of times (32 -> 0) (68 -> 20)

//print the converted values

let convertFahrenheitToCelsius = function (far) {
    let result = (far - 32) * 5 / 9;
    return result;
};

let cels1 = convertFahrenheitToCelsius(32);

let cels2 = convertFahrenheitToCelsius(68);

showOnPage(cels1);

showOnPage(cels2);