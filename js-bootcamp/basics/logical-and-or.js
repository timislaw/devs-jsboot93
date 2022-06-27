let temp = 150;

// if (temp >= 60) {
//     if (temp <= 90) {

//     };
// };


//Logical And Operator -- true if both sides are true. false otherwise

if (temp >= 60 && temp <= 90) {
    console.log('pretty nice out');
};

//Logical Or operator -- true if one side atleast is true. false otherwise


// if (temp >= 60 && temp <= 90) {
//     console.log('pretty nice out');
// } else if (temp <= 0 || temp >= 120) {
//     console.log('do not go outside');
// } else {
//     console.log('do what you want')
// };

//challenge

let isGuestOneVegan = false;
let isGuestTwoVegan = false;

//are both vegan? only offer up vegan dishes
//at least one guest vegan. make sure to offer up some vegan options
// else, offer up anything on the menu

if (isGuestOneVegan == true && isGuestTwoVegan == true) {
    console.log(`here's the vegan menu`);
} else if ( isGuestOneVegan == true || isGuestTwoVegan == true) {
    console.log(`here's one vegan menu`);
} else {
    console.log ('order whenever you are ready');
};