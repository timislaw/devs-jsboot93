
//unix epoch - january 1st 1970 00:00:00


const now = new Date();
const timestamp = now.getTime();
const myDate = new Date(timestamp);

console.log(myDate.getFullYear());

const pastOne = new Date('March 1 2017 12:00:00');
const pastTwo = new Date();
const pastTimeOne = pastOne.getTime();
const pastTimeTwo = pastTwo.getTime();


if (pastTimeOne < pastTimeTwo) {
  console.log(pastTimeOne.toString());
} else if (pastTimeTwo < pastTimeOne) {
  console.log(pastTimeTwo.toString());
};

// console.log(`Year: ${now.getFullYear()}`);
// console.log(`Month: ${now.getMonth()}`);
// console.log(`Day: ${now.getDate()}`);
// console.log(`Hours: ${now.getHours()}`);
// console.log(`Minutes: ${now.getMinutes()}`);
// console.log(`Seconds: ${now.getSeconds()}`);

