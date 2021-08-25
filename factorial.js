/*Factorial of a whole number 'n' is defined as the product of that number with every whole number till 1 */
// 3!= 3 X 2 X 1
// 4!= 4 X 3 X 2 X 1
// 5!= 5 X 4 X 3 X 2 X 1 
// factorrial using only loop
var fact = 1;
for (var i = 1; i <= 4; i++) {
    fact *= i;
}
console.log(fact);
// factorial using function

function factorial(n){
    var fact = 1;
    
 for(var i=1; i<=n; i++)
 {
     var fact = fact*i;
     
 }
 return fact;
}
var factNumber = factorial(7);
console.log(factNumber);