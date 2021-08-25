function isLeapYear(year){
    if((year%400==0 && year%100!=0 ) || (year%4==0) ){
        return true;
    }
    else {
        return false;
    }
}
const myYear = 40;
const isMyYearLeapYear = isLeapYear(myYear);
console.log('Is my year is leap year',  isMyYearLeapYear);
const yourYear = 2040;
const isYourYearLeapYear = isLeapYear(yourYear);
console.log('Is Her year is leap year',  isYourYearLeapYear);