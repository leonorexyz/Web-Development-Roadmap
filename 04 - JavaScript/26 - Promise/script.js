// Promise
// Object yang  merepresentasikan keberhasilan / kegagalan sebuah event yang asynchronous di masa yang akan datang

// janji (terpenuhi / ingkar)
// states (fulfilled / rejected / pending)
// callback (resolve / reject / finally)

// contoh 1
// let ditepati = false;
// const janji1 = new Promise((resolve, reject) => {
//   if (ditepati) {
//     resolve('Janji telah ditepati!');
//   } else {
//     reject('Ingkar janji...');
//   }
// });

// janji1.then((response) => console.log('OK! : ' + response)).catch((response) => console.log('NOT OK! : ' + response));

// contoh 2
// let ditepati = false;
// const janji2 = new Promise((resolve, reject) => {
//   if (ditepati) {
//     setTimeout(() => {
//       resolve('Janji telah ditepati!');
//     }, 2000);
//   } else {
//     setTimeout(() => {
//       reject('Ingkar janji...');
//     }, 2000);
//   }
// });

// console.log('mulai');
// janji2
//   .finally(() => console.log('selesai menunggu!'))
//   .then((response) => console.log('OK! : ' + response))
//   .catch((response) => console.log('NOT OK! : ' + response));
// console.log('selesai');

// Promise.all()

// const film = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve([
//       {
//         judul: 'Your Name',
//         sutradara: 'Makoto Shinkai',
//       },
//     ]);
//   }, 1000);
// });

// const cuaca = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve([
//       {
//         kota: 'Tangerang',
//         temp: 30,
//         kondisi: 'panas',
//       },
//     ]);
//   }, 500);
// });

// // Promise.all([film, cuaca]).then((response) => console.log(response));
// Promise.all([cuaca, film]).then((response) => {
//   const [film, cuaca] = response;
//   console.log(film);
//   console.log(cuaca);
// });

// Async & Await
function cobaPromise() {
  return new Promise((resolve, reject) => {
    const waktu = 4000;
    if (waktu < 5000) {
      setTimeout(() => {
        resolve('selesai');
      }, 2000);
    } else {
      reject('kelamaan');
    }
  });
}

async function cobaAsync() {
  try {
    const coba = await cobaPromise();
    console.log(coba);
  } catch (e) {
    console.error(e);
  }
}

cobaAsync();