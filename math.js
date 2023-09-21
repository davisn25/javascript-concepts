/** Abs **/
function absolute(number) {
  if(number < 0) {
    return -number;
  }
  return number;
}

console.log("Absolute");
console.log(Math.abs(-1));
console.log(absolute(-1))

/** Max **/
set = [16, 2, 3, 5, 1];
function max(...numbers) {
  let max = 0;
  for (let i = 0; i < numbers.length; i++) {
    if(numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
}

console.log("Max")
console.log(Math.max(...set));
console.log(max(...set));

/** Power **/
function power(number, power) {
  let result = number;
  for (let i = 1; i < power; i++, result *= number);
  return result;
}

console.log("Power");
console.log(Math.pow(7, 3));
console.log(power(7, 3));

/** Trunc **/
function trunc(fraction) {
  const trunc = fraction.toString();
  return Number(trunc.substring(0, trunc.indexOf(".")));
}

/** Floor **/
function floor(fraction) {
  if(fraction < 0) {
    return trunc(fraction) - 1;
  }
  return trunc(fraction);
}

/** Ceiling **/
function ceiling(fraction) {
  if(fraction < 0) {
    return trunc(fraction);
  }
  return trunc(fraction) + 1;
}

/** Round **/
function round(number) {
  if(ceiling(number) - number < .5) {
    return ceiling(number);
  }
  return floor(number);
}

console.log("Round");
console.log(Math.round(1.9));
console.log(round(1.9));