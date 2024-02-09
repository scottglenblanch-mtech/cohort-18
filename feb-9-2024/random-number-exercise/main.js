function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
  }
  
  const num1 = getRandomInt(0, 31);
  const num2 = getRandomInt(0, 31);
  const num3 = getRandomInt(0, 31);
  
  console.log('The numbers generated are...', num1, num2, num3);
  
  const maxNumber = Math.max(num1, num2, num3);
  
  console.log('The max number of the randomly generated numbers is...', maxNumber)