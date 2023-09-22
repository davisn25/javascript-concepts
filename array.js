array = [1,2,3,4,5,6];

/** Map **/
// Map method
mapArray = array.map((x) => x%2 == 0 ? "even" : "odd");

// Map for
forMapArray = [];
for (let i = 0; i < array.length; i++) {
  array[i]%2 == 0 ? forMapArray.push("even") : forMapArray.push("odd");
}

// Map function
function map(array, callback) {
  let map = [];
  for (let i = 0; i < array.length; i++) {
    map.push(callback(array[i]));
  }
  return map;
}
console.log(mapArray)
console.log(forMapArray);
console.log(map(array, function(x) {return x%2 == 0 ? "even" : "odd"}));

/** Filter **/
// Filter method
filterArray = array.filter((x) => x%2 == 0);

// Filter for
forFilterArray = [];
for (let i = 0; i < array.length; i++) {
  if(array[i]%2 == 0) {
    forFilterArray.push(array[i]);
  }
}

function filter(array, callback) {
  let filter = [];
  for (let i = 0; i < array.length; i++) {
    if(callback(array[i])) {
      filter.push(array[i]);
    }
  }
  return filter;
}

// Filter function

console.log(filterArray);
console.log(forFilterArray);
console.log(filter(array, function(x) { return x%2 == 0 }));

/** Reduce **/
reduceArray = array.reduce((a, b) => Math.max(a, b), 0);

forReduceArray = 0;
for (let i = 0; i < array.length; i++) {
  forReduceArray = Math.max(forReduceArray, array[i]);
}

function reduce(array, callback, reduce = array[0]) {
  for (let i = reduce == array[0] ? 1 : 0; i < array.length; i++) {
    reduce = callback(reduce, array[i]);      
  }
  return reduce;
}

console.log(reduceArray);
console.log(forReduceArray);
console.log(reduce(array, function(a, b) { return Math.max(a, b) }, 1));