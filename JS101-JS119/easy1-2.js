function OddNumber()  {
  let counter = 1
  while (counter < 100) {
    if (counter % 2 === 1){
      console.log(counter);
    }
    counter += 1;
  }
}

OddNumber();