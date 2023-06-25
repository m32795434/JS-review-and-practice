// Select the elemtns on the page: Canvas, shake button
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakeButton = document.querySelector('.shake');
const range = document.querySelector('input[type="range"]');
let dotWidthRange = 0;

// Setup our canvas for drawing using destructuring.
const { width, height } = canvas;
const MOVE_AMOUNT = 20;
ctx.strokeStyle = `hsl(${Math.random() * 360}, 100%, 50%)`;

// create random x and y starting points on the canvas.
/* eslint-disable */
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);


ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = MOVE_AMOUNT;

ctx.beginPath(); // start the drawing;
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

/* eslint-enable */

// write a draw function
function handleRange(e) {
  dotWidthRange = e.target.value;
  console.log(e.target.value);
}
function draw({ key }) {
  ctx.strokeStyle = `hsl(${Math.random() * 360}, 100%, 50%)`;
  console.log(key);
  // start the path
  ctx.beginPath();
  ctx.moveTo(x, y);
  // move our x and y where the user pressed the arrow key
  switch (key) {
    case 'ArrowUp':
      y -= MOVE_AMOUNT;
      break;
    case 'ArrowDown':
      y += MOVE_AMOUNT;
      break;
    case 'ArrowLeft':
      x -= MOVE_AMOUNT;
      break;
    case 'ArrowRight':
      x += MOVE_AMOUNT;
      break;
    default:
      break;
  }
  ctx.lineWidth = MOVE_AMOUNT * dotWidthRange;
  ctx.lineTo(x, y);
  ctx.stroke();
}

// write a handler for the keys and others
function handleKey(e) {
  if (e.key.includes('Arrow')) {
    e.preventDefault(); // stop scrolling
    draw(e);
  }
}

// listen for arrows keys and others
window.addEventListener('keydown', handleKey);
range.addEventListener('input', handleRange);

// clear canvas
function clearCanvas() {
  canvas.classList.add('shake');
  ctx.clearRect(0, 0, width, height);
  canvas.addEventListener(
    'animationend',
    () => {
      canvas.classList.remove('shake');
    },
    { once: true }
  );
}
shakeButton.addEventListener('click', clearCanvas);
