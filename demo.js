let arr = [
  [1, 2],
  [3, 4],
  [5, 6, 7, 8],
  [9, 10, 11],
];

// let flattenArray = [];

// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr[i].length; j++) {
//     flattenArray.push(arr[i][j]);
//   }
// }

// let flattenArray = [].concat(...arr);

let flattenArray = arr.flat(2);

console.log(flattenArray);
