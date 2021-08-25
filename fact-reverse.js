// while loop reverse factorial check
function getFact(number) {
  let factorial = 1;
  let i = number;
  while (i >= 1) {
    factorial = factorial * i;
    i--;
  }
  return factorial;
}
const myFactorial = getFact(4);
console.log(myFactorial);

// for loop reverse factorial check
function getFactorial(num) {
  let factorial = 1;
  for (let i = num; i >= 1; i--) {
    factorial *= i;
  }
  return factorial;
}
const myFact = getFactorial(4);
console.log(myFact);
