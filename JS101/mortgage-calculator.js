// GET  the loan amount
// GET the annual percentage rate
// GET the loan duration in month
// Monthly interest rate = Annual Percentage Rate / 12
// IF all inputs are set and validated
// PRINT the monthly payment amount

const readline = require('readline-sync');

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function invalidNumber(num) {
  if ((Number.isNaN(Number(num)) === false) || (num <= 0)) {
    return false;
  } else {
    return true;
  }
}

prompt('Welcome to the Mortage Calculator!');

prompt('What is the loan amount? \n Note: Make sure to enter a number. Decimals should be a dot. Example: 2682.12');
let loanAmount = Number(readline.question());

while (invalidNumber(loanAmount)) {
  prompt("Hmm... That doesn't look like a valid number. Decimals should be a dot and ensure it is greater than 0. Example: 2682.12");
  loanAmount = readline.question();
}

prompt('What is the annual percentage rate? \n Note: Make sure to enter a number. Decimals should be a dot. Example: 34.12 for an APR of 34.12%');
let loanAPR = Number(readline.question());

while (invalidNumber(loanAPR)) {
  prompt("Hmm... That doesn't look like a valid number. Decimals should be a dot. Example: 34.12 for an APR of 34.12%");
  loanAPR = readline.question();
}

prompt('What is the loan duration in months? \n Note: Make sure to enter a number. Example: 12 for 12 months');
let loanDuration = Number(readline.question());

while (invalidNumber(loanDuration)) {
  prompt("Hmm... That doesn't look like a valid number. Make sure to enter a number. Example: 12 for 12 months");
  loanDuration = readline.question();
}

let monthsInYear = 12;
let percentageChanger = 100;

let monthlyInterestRate = (loanAPR / percentageChanger) / monthsInYear;

let monthlyPayment = (loanAmount * (monthlyInterestRate /
(1 - Math.pow((1 + monthlyInterestRate), (-loanDuration))))).toFixed(2);


prompt(`Your monthly expected payment amount is $${monthlyPayment}`);