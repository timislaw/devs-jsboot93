// const showOnPage = function (text) {
//     let newParagraph = document.createElement("p");
//     newParagraph.innerHTML = text;
//     let outputDiv = document.getElementById("output");
//     outputDiv.append(newParagraph);
//   };

//students score, total possible score
// 15/20. print message 'You got a C (75%)!
//A 90-100, B 80-89, C 70-79, D 60-69, F 0-59

const yourGrade = function (studentScore = 0, totalScore = 20) {
    if (typeof score !== 'number' || typeof totalScore !== 'number') {
        throw Error('Please provide numbers only');
    }
    const yourPercent = (studentScore / totalScore) * 100;
    let letterGrade = ''
    if (yourPercent >= 90) {
        letterGrade = 'A';
        return `You got an A (${yourPercent}%)!`;
    } else if (yourPercent >= 80) {
        letterGrade = 'B';
    } else if (yourPercent >= 70) {
        letterGrade = 'C';
    } else if (yourPercent >= 60) {
        letterGrade = 'D';
    } else {
        letterGrade = 'F';
    }
    return `You got a ${letterGrade} (${yourPercent})!`
};

try {
const postedGrade = yourGrade(true, 'string');
console.log(postedGrade);
} catch (e) {
    console.log(e.message);
};
// showOnPage(postedGrade);