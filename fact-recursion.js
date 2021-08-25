// recursive function is a function called by itself and do a task
function factorial(n){
    if(n==1){
        return 1;
    }
    return n* factorial(n-1);
}
const myFactorial = factorial(4);
console.log(myFactorial);