// Template Literals / Template String
// const name = 'Leonore';
// const age = 28;
// console.log(`My name is ${name} and I am ${age} years old.`);

// Embedded Expressions
// console.log(`${1 + 1}`);
// console.log(`${alert('Hello!')}`);

// const x = 9;
// console.log(`${(x % 2 == 0) ? 'Even' : 'Odd'}`);

// HTML Fragments
// const characters = {
//     nickname: 'LeonoreXYZ',
//     level: 85,
//     guild: 'LeoKingdom'
// };

// const el = `
//     <div class="character">
//         <h2>${characters.nickname}</h2>
//         <span class="level">Level: ${characters.level}</span>
//         <span class="guild">Guild: ${characters.guild}</span>
//     </div>`;

// console.log(el);

// Looping HTML Fragments
// const characters = [
//   {
//     nickname: 'LeonoreXYZ',
//     level: 85,
//     guild: 'LeoKingdom',
//   },
//   {
//     nickname: 'LeverieXYZ',
//     level: 84,
//     guild: 'LeoKingdom',
//   },
// ];

// const el = `
//     <div class="characters">
//         ${characters
//           .map(
//             (char) => `<ul>
//                     <li>${char.nickname}</li>
//                     <li>${char.level}</li>
//                     <li>${char.guild}</li>
//                 </ul>`
//           )
//           .join('')}
//     </div>`;

// document.body.innerHTML = el;

// Conditional HTML Fragments
// Ternary
// const song = {
//   title: 'Uchiage Hanabi',
//   singer: 'DAOKO',
//   feat: 'Kenshi Yonezu',
// };

// const el = `<div class="song">
//   <ul>
//     <li>${song.title}</li>
//     <li>${song.singer} ${song.feat ? `(feat. ${song.feat})` : ''}</li>
//   </ul>
// </div>`;

// console.log(el);

// Nested
// const characters = {
//   name: 'Jade',
//   type: 'Human',
//   level: 140,
//   role: ['INT', 'Single', 'Buff'],
// };

// function printRole(role) {
//   return `
//     <ol>
//       ${role.map((r) => `<li>${r}</li>`).join('')}
//     </ol>
//   `;
// }

// const el = `<div class="characters">
//   <h2>${characters.name}</h2>
//   <span class="type">${characters.type}</span>
//   <span class="level">${characters.level}</span>
//   <h4>Role : </h4>
//   ${printRole(characters.role)}
// </div>`;

// document.body.innerHTML = el;

// Tagged Templates
// const name = 'Luna';
// const age = 25;

// function coba(strings, ...args) {
// //   let result = '';
// //   strings.forEach((str, i) => {
// //     result += `${str}${args[i] || ''}`;
// //   });
// //   return result;

//   return strings.reduce((result, str, i) => `${result}${str}${args[i] || ''}`, '');
// }

// const str = coba`Hello, my name is ${name}, i'm ${age} years old.`;
// console.log(str);

// Highlight
const name = 'Luna';
const age = 25;

function highlight(strings, ...args) {
  return strings.reduce((result, str, i) => `${result}${str}<span class="hl">${args[i] || ''}</span>`, '');
}

const str = highlight`Hello, my name is ${name}, i'm ${age} years old.`;

document.body.innerHTML = str;