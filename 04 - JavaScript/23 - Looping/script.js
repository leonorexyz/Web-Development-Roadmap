// for..of
// array
// const characters = ['LeonoreXYZ', 'LeverieXYZ'];

// for (const char of characters) console.log(char);

// string
// const characters = 'LeonoreXYZ';

// for (const char of characters) console.log(char);

// get index on for..of
// const characters = ['LeonoreXYZ', 'LeverieXYZ'];

// for (const [index, char] of characters.entries()) console.log(index, char);

// NodeList
// const nameList = document.querySelectorAll('.name');

// nameList.forEach((name) => console.log(name.textContent));

// for (n of nameList) {
//   console.log(n.textContent);
// }

// Arguments
// function addSum() {
//     let sum = 0;
//     for (const n of arguments) sum += n;
//     return sum;
// }

// console.log(addSum(1, 2, 3, 4, 5));

// for..in
const characters = {
  name: 'LeonoreXYZ',
  level: 85,
  guild: 'LeoKingdom',
};

for (char in characters) {
  console.log(characters[char]);
}
