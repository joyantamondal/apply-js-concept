// debuging
function getFactorial(number){
    let factorial = 1;
    // console.log(number);
    for(let i= 1; i<=number; i++){
        // console.log(i);
        factorial = factorial * i;
        // console.log(i, factorial);
    }
    return factorial;
}
const getMyFactorial = getFactorial(7);
console.log(getMyFactorial);