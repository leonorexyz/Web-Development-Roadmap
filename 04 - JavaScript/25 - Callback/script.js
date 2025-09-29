// Callback
// Synchronous Callback
// function hello(name) {
//   alert(`Hello ${name}`);
// }

// function showMessage(callback) {
//   const name = prompt('Insert name : ');
//   callback(name);
// }

// showMessage((name) => alert(`Hello ${name}`));

// Asynchronous Callback
console.log('Start');
$.ajax({
    url: 'data/anime.json',
    success: (anime) => {
        // console.log(anime)
        anime.data.forEach((a) => console.log(a));
    },
    error: (e) => console.log(e.responseText),
});
console.log('Finish');