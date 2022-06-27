// const showOnPage = function (text) {
//     let newParagraph = document.createElement("p");
//     newParagraph.innerHTML = text;
//     let outputDiv = document.getElementById("output");
//     outputDiv.append(newParagraph);
//   };


// let myBook = {
//     title: '1984',
//     author: 'George Orwell',
//     pageCount: 326
// };


// let otherBook = {
//     title: 'A Peoples History',
//     author: 'Howard Zinn',
//     pageCount: 723
// };

// let getSummary = function (book) {
//     return {
//         summary: `${book.title} by ${book.author}.`,
//         pageCountSummary: `${book.title} is ${book.pageCount} pages long.`
//     };
// };

// let bookSummary = getSummary(myBook);
// let otherBookSummary = getSummary(otherBook);

// showOnPage(bookSummary.pageCountSummary)
// challenge area
//create function -- take fahrenheit in - return object with all three

// let fahrenheit = 57;

// let celsius = (fahrenheit - 32) * 5 / 9;

// let kelvin = (fahrenheit - 32) * 5 / 9 + 273.15;

let conversion = function (far) {
    return {
        far: far,
        kelv: (far - 32) * 5 / 9 + 273.15,
        cels: (far - 32) * 5 / 9
    };
};

let newTemps = conversion(54);

console.log(newTemps);