const numbers = [1, 2, 3];
const letters = ['a', 'b', 'c'];

function zipList(arr1, arr2) {
  const arr = [];
  let k = 0;
  for (let i = 0; i < arr2.length; i++) {
    arr[k] = arr1[i];
    k++;
    arr[k] = arr2[i];
    k++;
  }
  return arr;
}

console.log(zipList(numbers, letters));

function zipListTheSimpleWay(arr1, arr2) {
  const zip = _.zip(arr1, arr2);
  const flatten = _.flatten(zip);
  return flatten;
}

console.log(zipListTheSimpleWay(numbers, letters));
