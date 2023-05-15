var readlineSync = require('readline-sync');


function sizeCalculator() {
  let length = readlineSync.question('Enter the length of the room in meters \n' );
  let width = readlineSync.question('Enter the width of the room in meters \n');
  let squareMeters = (length * width).toFixed(2)
  let squareFeet = (squareMeters * 10.7639).toFixed(2)
  console.log(`The area of the room is ${squareMeters} square meters (${squareFeet} square feet).`);
}

sizeCalculator();