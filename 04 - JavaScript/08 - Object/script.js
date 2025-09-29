// Create Object
// 1. Object Literal
let player1 = {
  nickname: 'LeonoreXYZ',
  level: 85,
  hp: 125000,
  mp: 1700,
};

let player2 = {
  nickname: 'LeverieXYZ',
  level: 83,
  hp: 55000,
  mp: 1500,
};

console.log(player1);
console.log(player2);

// 2. Function Declaration
function createCharacter(nickname, level, hp, mp) {
  let character = {};
  character.nickname = nickname;
  character.level = level;
  character.hp = hp;
  character.mp = mp;
  return character;
}

let player3 = createCharacter('LeonoreABC', 85, 125000, 1700);
let player4 = createCharacter('LeverieABC', 83, 55000, 1500);

console.log(player3);
console.log(player4);

// 3. Constructor Function
function Character(nickname, level, hp, mp) {
  this.nickname = nickname;
  this.level = level;
  this.hp = hp;
  this.mp = mp;
}

let player5 = new Character('Leonore123', 85, 125000, 1700);
let player6 = new Character('Leverie123', 83, 55000, 1500);

console.log(player5);
console.log(player6);
