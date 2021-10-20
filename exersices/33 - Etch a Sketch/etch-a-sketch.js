// Select the elemtns on the page: Canvas, shake button
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakeButton = document.querySelector('.shake');

// Setup our canvas for drawing using distructuring.
const { width, height } = canvas;
const MOVE_AMOUNT = 20;
let hue = 0;
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

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
function draw({ key }) {
  // increment the hue
  hue += 10;
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  console.log(key);
  // start the path
  ctx.beginPath();
  ctx.moveTo(x, y);
  // move our x and y where the user pressed the arrow key
  // x -= 10; // x = x -10;
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
  ctx.lineTo(x, y);
  ctx.stroke();
}

// write a handler for the keys
function handleKey(e) {
  if (e.key.includes('Arrow')) {
    e.preventDefault(); // stop scrolling
    draw({ key: e.key });
  }
}

// listen for arrows keys
window.addEventListener('keydown', handleKey);

// clear canvas
function clearCanvas() {
  canvas.classList.add('shake');
  canvas.addEventListener(
    'animationend',
    () => {
      canvas.classList.remove('shake');
    },
    { once: true }
  );
}
shakeButton.addEventListener('click', clearCanvas);
