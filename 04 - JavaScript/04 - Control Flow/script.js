// let repeat = true;

// while (repeat) {
//     console.log("Hello, World!");
//     repeat = confirm("Do you want to see the message again?");
// }

// let count = 10;
// index = 1;

// // while (index <= count) {
// //     console.log(index);
// //     index++;
// // }

// for (let i = index; i <= count; i++) {
//     console.log(i);
// }

// let number = prompt('Insert a number: ');

// if (number % 2 === 0) {
//   console.log('The number is even.');
// } else {
//   console.log('The number is odd.');
// }

// let formula = prompt('Choose a formula (1: Area of Circle, 2: Area of Square, 3: Area of Triangle): ');

// switch (formula) {
//   case 'circle':
//     let radius = parseFloat(prompt('Enter the radius of the circle: '));
//     let areaCircle = Math.PI * Math.pow(radius, 2);
//     console.log(`The area of the circle is: ${areaCircle.toFixed(2)}`);
//     break;
//   case 'square':
//     let side = parseFloat(prompt('Enter the side length of the square: '));
//     let areaSquare = Math.pow(side, 2);
//     console.log(`The area of the square is: ${areaSquare.toFixed(2)}`);
//     break;
//   case 'triangle':
//     let base = parseFloat(prompt('Enter the base length of the triangle: '));
//     let height = parseFloat(prompt('Enter the height of the triangle: '));
//     let areaTriangle = 0.5 * base * height;
//     console.log(`The area of the triangle is: ${areaTriangle.toFixed(2)}`);
//     break;
// }

let = item = '';
for (let i = 5; i >= 1; i--) {
  for (let j = 1; j <= i; j++) {
    item += '*';
  }
  item += '\n';
}
console.log(item);
