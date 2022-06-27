const showOnPage = function (text) {
    let newParagraph = document.createElement("p");
    newParagraph.innerHTML = text;
    let outputDiv = document.getElementById("output");
    outputDiv.append(newParagraph);
  };


  let myAccount = {
    name: 'Tim Ross',
    expenses: 0,
    income: 0
};

let otherAccount = myAccount;

otherAccount.income = 1000;

let addExpense = function (account, amount) {
    account.expenses = account.expenses + amount;
};

addExpense(myAccount, 2.50);

console.log(myAccount);

//addIncome
//resetAccount function
//getAccountSummary
//Account for Tim  has $900. $1000 in income. $100 in expenses.
let addIncome = function (account, amount) {
    account.income = account.income + amount;
};

let resetAccount = function (account) {
    account.income = 0;
    account.expenses = 0;
};

let getAccountSummary = function (account) {
    let balance = account.income - account.expenses; //andrew's
    return `Account for ${account.name}  has $${account.income - account.expenses}. $${account.income} in income. $${account.expenses} in expenses.`;

};

//addIncome
//addExpense
//addExpense
//getAccountSummary
//resetAccount
//getAccountSummary

addIncome(myAccount, 2000);
showOnPage(getAccountSummary(myAccount));
addExpense(myAccount, 700);
showOnPage(getAccountSummary(myAccount));
addExpense(myAccount, 150);
showOnPage(getAccountSummary(myAccount));
getAccountSummary(myAccount);
showOnPage(getAccountSummary(myAccount));
resetAccount(myAccount);
showOnPage(getAccountSummary(myAccount));
getAccountSummary(myAccount);
showOnPage(getAccountSummary(myAccount));

