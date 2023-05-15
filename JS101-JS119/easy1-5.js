let readlineSync = require("readline-sync");

function billCalculator() {
  console.log('What is the bill? ');
  let billAmount = readlineSync.prompt();

  console.log('What is the tip percentage? ');
  let billPercentage = readlineSync.prompt() * 0.01;
  let tipAmount = billAmount * billPercentage;
  let totalAmount = +tipAmount + +billAmount;

  console.log(`\n \n The tip is $${tipAmount}`);
  console.log(`The total is $${totalAmount}`);
}

billCalculator();