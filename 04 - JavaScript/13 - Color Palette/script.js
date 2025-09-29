const button = document.getElementById('buttonChangeColor');
button.addEventListener('click', function () {
  document.body.classList.toggle('light-blue');
});

const randomColorButton = document.createElement('button');
const randomColorButtonText = document.createTextNode('Randomize Color!');
randomColorButton.appendChild(randomColorButtonText);
randomColorButton.setAttribute('type', 'button');

button.after(randomColorButton);

randomColorButton.addEventListener('click', function () {
  const r = Math.round(Math.random() * 255 + 1);
  const g = Math.round(Math.random() * 255 + 1);
  const b = Math.round(Math.random() * 255 + 1);
  document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
});

const sliderRed = document.querySelector('input[name=sliderRed]');
const sliderGreen = document.querySelector('input[name=sliderGreen]');
const sliderBlue = document.querySelector('input[name=sliderBlue]');

sliderRed.addEventListener('input', function () {
  const r = sliderRed.value;
  const g = sliderGreen.value;
  const b = sliderBlue.value;
  document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
});

sliderGreen.addEventListener('input', function () {
  const r = sliderRed.value;
  const g = sliderGreen.value;
  const b = sliderBlue.value;
  document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
});

sliderBlue.addEventListener('input', function () {
  const r = sliderRed.value;
  const g = sliderGreen.value;
  const b = sliderBlue.value;
  document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
});

document.body.addEventListener('mousemove', function (event) {
  // posisi mouse
  //   const x = event.clientX;

  // ukuran browser
  //   const width = window.innerWidth;

  const xPos = Math.round((event.clientX / window.innerWidth) * 255);
  const yPos = Math.round((event.clientY / window.innerHeight) * 255);
  const avg = Math.round((xPos + yPos) / 2);
  document.body.style.backgroundColor = 'rgb(' + xPos + ',' + yPos + ',' + avg + ')';
});
