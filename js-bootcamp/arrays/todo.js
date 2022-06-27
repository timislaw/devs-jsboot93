const showOnPage = function (text) {
    let newParagraph = document.createElement("p");
    newParagraph.innerHTML = text;
    let outputDiv = document.getElementById("output");
    outputDiv.append(newParagraph);
  };

  const showTodo = function (todo) {
    todos.forEach(function (todo) {
      showOnPage(`${todo.text} ${todo.completed}`);
    });
  };


  //create an array with five todos
  // you have x todos
  // print the first and second to last items -> Todo: walk the dog

  // const todos = [
  //     'Clean dishes',
  //     'Take out trash',
  //     'Feed Cat',
  //     'Clean Litterbox',
  //     'Organize'
  // ];

// 1. convert array of strings to array of objects -> text, completed
// 2. create function to remove a todo by text value

// const newTodos = Object.assign({completed: 'no'}, todos); ----- first attempt

// const newTodos = todos.map(function (x) {
//   return {
//     toDo: x,
//     completed: 'no'
//   };

// });

// const deleteTodo = function (todo, text) {
//   let detectText = text;
//   return todo.toDo != detectText.toLowerCase();
// };


//Andrew Code below
const todos = [{
  text:'Clean dishes',
  completed: true
},
{
  text:'Take out trash',
  completed: false
},
{
  text:'Feed Cat',
  completed: true
},
{
  text:'Clean Litterbox',
  completed: false
},
{
  text:'Organize',
  completed: true
}];

const deleteTodo = function (todos, todoText) {
  const index = todos.findIndex(function (todo) {
    return todo.text.toLowerCase() === todoText.toLowerCase();
  });
  if (index > -1) {
    todos.splice(index, 1);
  };
};
//------------ end andrews code ----------------
deleteTodo(todos, 'feed cat');
// showTodo(todos);

// console.log(todos)




//challenge only display completed = false tasks

// const getThingsToDo = function (todo) {
//   return todo.completed === false;
// };

// showTodo(todos.find(getThingsToDo));

// console.log(todos.find(getThingsToDo));

//andrews code below -----------------------

// const getThingsToDo = function (todos) {
//   return todos.filter(function (todo, index) {
//       return todo.completed === false;
//   });
// }

// console.log(getThingsToDo(todos));




// new challenge video 45
//define and fill out sort todos function

const sortTodos = function (todos) {
  todos.sort(function (a, b) {
      if (a.completed === false) {
          return -1 ;
      } else if (b.completed === false) {
          return 1;
      } else {
          return 0;
      };
  });
};


//andrew code below
// const sortTodos = function (todos) {
//   todos.sort(function (a, b) {
//     if (a.completed === false && b.completed) {
//       return -1;
//     } else if (b.completed === false && a.completed) {
//       return 1;
//     } else {
//       return 0;
//     };
    
//   });
// };

sortTodos(todos);
showTodo(todos);
