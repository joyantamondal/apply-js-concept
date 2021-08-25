// celcious to Fahrenheit
// (0°C × 9/5) + 32 formula
function cToF(cn){
    let cc = (cn*9/5)+32;
    return cc;
}
const f = cToF(60);
console.log(f,"°F");

// farenheit to celcious
//formula (100°F − 32) × 5/9 = 37.778°C
function fToC(fn){
  let fc = (fn - 32) * 5/9;
  return fc;
}
const c = fToC(60);
console.log(c, "°C");