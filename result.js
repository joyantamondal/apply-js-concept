// result calculate
function cgpaCalculate(number) {
  if (number >= 40 && number <= 45) {
    let result =
      "Yout Got D Need Improve Your Result " + "Your Number is: " + number;
    return result;
  } 
  else if (number >= 46 && number <= 50) {
    let result = "Yout Got C " + "Your Number is: " + number;
    return result;
  }
   else if (number >= 51 && number <= 55) {
    let result = "Yout Got C- " + "Your Number is: " + number;
    return result;
  }
   else if (number >= 56 && number <= 60) {
    let result = "Yout Got C+ " + "Your Number is: " + number;
    return result;
  }
   else if (number >= 61 && number <= 65) {
    let result = "Yout Got B " + "Your Number is: " + number;
    return result;
  }
   else if (number >= 66 && number <= 70) {
    let result = "Yout Got B- " + "Your Number is: " + number;
    return result;
  }
   else if (number >= 71 && number <= 75) {
    let result = "Yout Got B+ " + "Your Number is: " + number;
    return result;
  }
   else if (number >= 76 && number < 80) {
    let result = "Yout Got A- " + "Your Number is: " + number;
    return result;
  }
   else if (number >= 80 && number <= 100) {
    let result = "Yout Got A+ " + "Your Number is: " + number;
    return result;
  }
   else if (number > 100) {
    let result = "Not Accepted over 100";
    return result;
  }
   else if (number < 40 || number < 0) {
    let result = "Failed Your Number is Bellow 40";
    return result;
  }
   else if (number != " ") {
    let result = "Please input your Number";
    return result;
  }
   else {
    console.log("Invalid Number");
  }
  return 0;
}
let stdResult = cgpaCalculate(-1);
console.log(stdResult);
