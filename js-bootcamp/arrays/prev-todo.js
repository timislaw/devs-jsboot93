
// Delete the 3rd item
// add a new item onto the end
// remove the first item from the list

// todos.splice( 2, 1);
// todos.push('Wash Bathtub');
// todos.shift();

//Andrews code below
//todos.splice(2, 1);
//todos.push('Buy coffee');
//todos.shift();

// 1. The first item
// 2. The second item


  // showOnPage(`You have ${todos.length} todos!`);


// todos.map(function (item) {
//     showOnPage(`1. ${todos[0]}`)
//     showOnPage(`2. ${todos[1]}`)
// });


//andrews code
// todos.forEach(function (todo, index) {
//     const num = index + 1;
//     showOnPage(`${num}. ${todo}`);
// });


//   showOnPage(todos);

//   console.log(`You have ${todos.length} todos!`)
//   console.log(`Todo: ${todos[0]}`)
//   console.log(`Todo: ${todos[todos.length - 2]}`)


// 1. Order cat food
// 2. Clean kitchen
// ..

// for (let count = 0; count < todos.length; count++) {
//     let list = 0;
//     showOnPage(`${list++}. ${todos[count]}`);
// };

//Andrews code
// for (let count = 0; count < todos.length; count++) {
//     const num = count + 1;
//     const todo = todos[count];
//     showOnPage(`${num}. ${todo}`);
// };