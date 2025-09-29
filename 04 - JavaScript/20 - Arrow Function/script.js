// Arrow Function
// Implicit Return
// const showName = (name) => `Nome: ${name}`;
// console.log(showName('Leonore'));

// Multiple Parameters
// const showName = (name, age) => {
//   return `Nome: ${name}, Age: ${age}`;
// };

// console.log(showName('Leonore', 28));

// No Parameters
// const showName = () => 'Leonore';
// console.log(showName());

// let characters = ['Luffy', 'Zoro', 'Nami'];

// let countCharacters = characters.map((name) => name.length);
// console.log(countCharacters);

// Constructor Function
// this in arrow function, arrow function tidak memiliki konsep this

// Constructor Function\
// const Character = function () {
//   this.name = 'Jade';
//   this.type = 'Human';
//   this.sayHello = () => {
//     console.log(`Test ${this.name}`);
//   };
// };

// const character = new Character();
// console.log(character);

// Object Literal
// const Character = {
//   name: 'Jade',
//   type: 'Human',
//   sayHello: () => {
//     console.log(`${this.name}`);
//   },
// };

// const Character = function () {
//   this.name = 'Jade';
//   this.type = 'Human';
//   this.level = 1;
//   this.sayHello = () => {
//     console.log(`Test ${this.name}`);
//   };

//   setInterval(() => {
//     console.log(this.level++);
//   }, 500);
// };

// const character = new Character();
// console.log(character);


const box = document.querySelector('.box');
box.addEventListener('click', () => {
    let first = 'size';
    let second = 'caption';

    if(box.classList.contains(first)) {
        [first, second] = [second, first];
    }

    box.classList.toggle(first);
    setTimeout(() => {
        box.classList.toggle(second);
    }, 600);
});