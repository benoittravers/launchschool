let readlineSync = require("readline-sync");

function billCalculator() {
  console.log('What is the bill? ');
  let billAmount = readlineSync.prompt();
  
  console.log('What is the tip percentage? ')
  let billPercentage = parseInt(readlineSync.prompt() * 0.01);
  let tipAmount = parseInt(billAmount * billPercentage);
  let totalAmount = (tipAmount + billAmount);
  
  console.log(`\n \n The tip is $${tipAmount}`);
  console.log(`The total is $${totalAmount}`);
}

billCalculator();


/*
What is the bill? 200
What is the tip percentage? 15

The tip is $30.00
The total is $230.00
*/