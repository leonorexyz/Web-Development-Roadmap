// JS Object
// 1. Object Literal
// let character = {
//   nickname: 'LeonoreXYZ',
//   level: 85,
//   guild: 'LeoKingdom',
//   hp: 123000,
//   levelUp: function () {
//     this.level += 1;
//     this.hp += 3000;
//     console.log(`Congratulations! ${this.nickname} is now level ${this.level}.`);
//   },
// };

// 2, Function Declaration
// function Character(nickname, level, guild, hp) {
//   let character = {};
//   character.nickname = nickname;
//   character.level = level;
//   character.guild = guild;
//   character.hp = hp;
//   character.levelUp = function () {
//     this.level += 1;
//     this.hp += 3000;
//     console.log(`Congratulations! ${this.nickname} is now level ${this.level}.`);
//   };
//   return character;
// }

// let char1 = Character('LeonoreXYZ', 85, 'LeoKingdom', 123000);
// let char2 = Character('LeverieXYZ', 84, 'LeoKingdom', 55000);
// console.log(char1);
// console.log(char2);
// char1.levelUp();
// char2.levelUp();

// 3. Constructor Function
// function Character(nickname, level, guild, hp) {
//     this.nickname = nickname;
//     this.level = level;
//     this.guild = guild;
//     this.hp = hp;
//     this.levelUp = function () {
//         this.level += 1;
//         this.hp += 3000;
//         console.log(`Congratulations! ${this.nickname} is now level ${this.level}.`);
//     };
// }

// let char1 = new Character('LeonoreXYZ', 85, 'LeoKingdom', 123000);
// let char2 = new Character('LeverieXYZ', 84, 'LeoKingdom', 55000);
// console.log(char1);
// console.log(char2);
// char1.levelUp();
// char2.levelUp();

// 4. Object.create()
// const methodCharacter = {
//   levelUp: function () {
//     this.level += 1;
//     this.hp += 3000;
//     console.log(`Congratulations! ${this.nickname} is now level ${this.level}.`);
//   },
// };

// function Character(nickname, level, guild, hp) {
//   let character = Object.create(methodCharacter);
//   character.nickname = nickname;
//   character.level = level;
//   character.guild = guild;
//   character.hp = hp;
//   return character;
// }

// let char1 = Character('LeonoreXYZ', 85, 'LeoKingdom', 123000);
// let char2 = Character('LeverieXYZ', 84, 'LeoKingdom', 55000);
// console.log(char1);
// console.log(char2);
// char1.levelUp();
// char2.levelUp();

// 5. Prototype
// function Character(nickname, level, guild, hp) {
//   this.nickname = nickname;
//   this.level = level;
//   this.guild = guild;
//   this.hp = hp;
// }

// Character.prototype.levelUp = function () {
//   this.level += 1;
//   this.hp += 3000;
//   console.log(`Congratulations! ${this.nickname} is now level ${this.level}.`);
// };

// let char1 = new Character('LeonoreXYZ', 85, 'LeoKingdom', 123000);
// let char2 = new Character('LeverieXYZ', 84, 'LeoKingdom', 55000);
// console.log(char1);
// console.log(char2);
// char1.levelUp();
// char2.levelUp();

// 6. Class
class Character {
  constructor(nickname, level, guild, hp) {
    this.nickname = nickname;
    this.level = level;
    this.guild = guild;
    this.hp = hp;
  }
  levelUp() {
    this.level += 1;
    this.hp += 3000;
    console.log(`Congratulations! ${this.nickname} is now level ${this.level}.`);
  }
}

let char1 = new Character('LeonoreXYZ', 85, 'LeoKingdom', 123000);
let char2 = new Character('LeverieXYZ', 84, 'LeoKingdom', 55000);
console.log(char1);
console.log(char2);
char1.levelUp();
char2.levelUp();
