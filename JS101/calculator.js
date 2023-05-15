// Ask the user for the first number
// Ask the user for the second number
// Ask the user for the operation
// perform the operation
// display the result of the operation
const readline = require('readline-sync');

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function invalidNumber(num) {
  return Number.isNaN(Number(num));
}

prompt('Welcome to the calculator!');

prompt('What is the first number?');
let number1 = Number(readline.question());

while (invalidNumber(number1)) {
  prompt("Hmm... That doesn't look like a valid number.");
  number1 = readline.question();
}

prompt('What is the second number?');
let number2 = Number(readline.question());


while (invalidNumber(number2)) {
  prompt("Hmm... That doesn't look like a valid number.");
  number2 = Number(readline.question());
}

prompt('What operation would you like to perform?\n 1) Add 2) Substract 3) Multiply or 4) Divide');
let operation = readline.question();

while (!['1', '2', '3', '4'].includes(operation)) {
  prompt('You must choose 1, 2, 3 or 4');
  operation = readline.question();
}

let output;

switch (operation) {
  case '1':
    output = number1 + number2;
    break;
  case '2':
    output = number1 - number2;
    break;
  case '3':
    output = number1 * number2;
    break;
  case '4':
    output = number1 / number2;
    break;
}

console.log(`The result is ${output}`);