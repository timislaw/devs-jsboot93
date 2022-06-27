const showOnPage = function (text) {
    let newParagraph = document.createElement("p");
    newParagraph.innerHTML = text;
    let outputDiv = document.getElementById("output");
    outputDiv.append(newParagraph);
  };

//   const showAccount = function (acc) {
//     account.forEach(function (acc) {
//       showOnPage(`${acc.name} ${acc.expenses}`);
//     });
//   };


//Andrew code included in account object
// const account = {
//     name: 'Tim',
//     expenses: [],
//     addExpense: function ( description, amount) {
//         this.expenses.push({
//             description: description,
//             amount: amount
//         })
//     },
//     getAccountSummary: function () {
//         let totalExpenses = 0

//         this.expenses.forEach(function (expense) {
//             totalExpenses = totalExpenses + expense.amount;
//         })
//         return `${this.name} has $${totalExpenses} in expenses.`
//     }
// };


//challenge 1
//Expense --> description, amount
//addExpense --> description, amount (add new object to expenses array)
//getAccountSummary --> total up all expenses --> Tim has $1250 in expenses.



//------------------- my code below --------------------
// const addExpense = function () {

// };

// const getAccountSummary = function (acc) {
//     const total = acc.expenses.reduce((accumulator, currentValue) => {
//         return accumulator + currentValue;
//     }, 0);

//     return `${acc.name} has $${total} in expenses.`
// };

// ------------------------end my code -------------------

//completely blanked out on using an array of objects and then making account summary property function. His explanation did make sense.


//challebnge 2

// 1. add income array to account
//2. addIncome method -> description, amount
//3. tweak getAccountSummary
//'Tim has a balance of $10. $100 in income. $90 in expenses.

//my code below

// const account = {
//     name: 'Tim',
//     expenses: [],
//     addExpense: function ( description, amount) {
//         this.expenses.push({
//             description: description,
//             amount: amount
//         })
//     },
//     getAccountSummary: function () {
//         let totalExpenses = 0;
//         let totalIncome = 0;
//         let balance = this.income.amount - this.expenses.amount;

//         this.expenses.forEach(function (expense) {
//             totalExpenses = totalExpenses + expense.amount;
//         });
//         this.income.forEach(function (inc) {
//             totalIncome = totalIncome + inc.amount;
//         });
//         return `${this.name} has a balance of $${balance}. $${totalIncome} in income. $${totalExpenses} in expenses.`
//     },
//     income: [],

//     addIncome: function (description, amount) {
//         this.income.push({
//             description: description,
//             amount: amount
//         })
//     }
// };


//end my code


//andrews code below

const account = {
    name: 'Tim',
    expenses: [],
    income: [],
    addExpense: function ( description, amount) {
        this.expenses.push({
            description: description,
            amount: amount
        })
    },
    addIncome: function (description, amount) {
        this.income.push({
            description: description,
            amount: amount
        })
    },
    getAccountSummary: function () {
        let totalExpenses = 0;
        let totalIncome = 0;
        let accountBalance = 0;

        this.expenses.forEach(function (expense) {
            totalExpenses = totalExpenses + expense.amount;
        });
        this.income.forEach(function (income) {
            totalIncome = totalIncome + income.amount;
        });

        accountBalance = totalIncome - totalExpenses;
        return `${this.name} has a balance of $${accountBalance}. $${totalIncome} in income. $${totalExpenses} in expenses.`
    },
};



//end andrews code

account.addExpense('Rent', 950);

account.addExpense('Coffee', 2);
account.addIncome('Job', 1000);
showOnPage(account.getAccountSummary());


//notes: for my code, i forgot to assume that before the function for income is used, i shouldn't call it in a variable above it.