// 1. Execution Context, Hoisting, and Scope

// var name = 'Leonore';
// console.log(name);

// creation phase pada Global Context
// variable = undefined
// function = fn()
// hoisting
// window = global object
// this = window

// execution phase
// console.log(sayHello);

// var name = 'Leonore';
// var age = 28;

// function sayHello() {
//   console.log(`Hello, my name is ${name}, and I'm ${age} years old`);
// }

// use javascript visualizer to understand the concept
// function membuat Local Execution Context, yang didalamnya terdapat creation dan execution phase
// window
// arguments

// var name = 'Leonore';
// var username = '@leonorexyz';

// function cetakURL(username) {
//   var instagram = 'https://instagram.com/';
//   return instagram + username;
// }

// console.log(cetakURL(username));

// function a() {
//   console.log('A');

//   function b() {
//     console.log('B');

//     function c() {
//       console.log('C');
//     }

//     c();
//   }

//   b();
// }

// a();

// 2. Closure
// function init() {
//   let name = 'Leonore'; // local variable

//   return function (name) {
//     console.log(name);
//   };
// }

// let showName = init();
// showName('Leverie');

// Factory Function
// function message(time) {
//   return function (name) {
//     console.log(`Hello ${name}, selamat ${time}, semoga harimu menyenangkan!`);
//   };
// }

// let selamatPagi = message('pagi');
// let selamatSiang = message('siang');
// let selamatMalam = message('malam');

// selamatPagi('Leonore');
// selamatMalam('Leverie');

// Private Method

let add = (function () {
  let counter = 0; // private variable
    return function () {
    return ++counter;
    };
})(); // IIFE

console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());