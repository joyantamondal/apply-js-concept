
function calculateInterest(total, years, ratePercent, roundToPlaces){
    var interestRate = ((ratePercent/100) + 1);
    var interest = (total * Math.pow(interestRate, years)).toFixed(roundToPlaces);
    return interest ;
}
const answer  = calculateInterest(1000, 5, 5, 2);
console.log(answer);