// Array

// 1. Add array element
let arr = [];
arr[0] = 'Leonore';
arr[1] = 'Leverie';

console.log(arr);

// 2. Array join
console.log(arr.join('-'));

// 3. Array push
arr.push('Leonora');
console.log(arr);

// 4. Array pop
arr.pop();
console.log(arr);

// 5. Array map
let arr2 = [1, 2, 3, 4, 5];
let arr3 = arr2.map(function (item) {
  return item * 2;
});
console.log(arr3);
