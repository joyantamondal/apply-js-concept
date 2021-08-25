// even check using function
function isEven(number) {
  if (number % 2 == 0) {
    return true;
  }
  return false;
}
const myNumber = 16;
const isMyNumberEven = isEven(myNumber);
console.log("My Number is EVen " + isMyNumberEven);
const herNumber = 1901;
const isHerNumberEven = isEven(herNumber);
console.log("Her Number is Even " + isHerNumberEven);

// odd check using function
function isOdd(number) {
  if (number % 2 == 1) {
    return true;
  }
  return false;
}
const myNumberCheck = 201;
const isMyNumverOdd = isOdd(myNumberCheck);
console.log("My Number is Odd " + isMyNumverOdd);
const herNumberCheck = 300;
const isherNumverOdd = isOdd(herNumberCheck);
console.log("Her Number is Odd " + isherNumverOdd);
