import { handleResult } from './handlers';
import { colorsByLength, isDark } from './colors';

const colorsEl = document.querySelector('.colors');
const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');

// new SpeechRecognition, no matters if it's one of the "webkit" versions
window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition;
function displayColors(colors) {
  return colors
    .map(
      (color) =>
        `<span class="color ${color} ${
          isDark(color) ? 'dark' : ''
        }" style="background:${color};">${color}</span>`
    )
    .join('');
}

function start() {
  // see if the browser supports this
  if (!('SpeechRecognition' in window)) {
    console.log('your browser does not support speech recognition');
    return;
  }
  recognition = new window.SpeechRecognition();
  console.log('starting....');
  colorsEl.innerHTML = displayColors(colorsByLength); // could be outside the function?
  recognition.continuous = true;
  recognition.interimResults = true; // will recognize as soon as it hears a word
  recognition.onresult = handleResult;
  recognition.start();
  console.log(recognition);
}
function handleStart() {
  recognition.start();
  startBtn.classList.add('animate');
  stopBtn.classList.remove('animate');
}
function handleStop() {
  recognition.stop();
  stopBtn.classList.add('animate');
  startBtn.classList.remove('animate');
}

start();

startBtn.addEventListener('click', handleStart);
stopBtn.addEventListener('click', handleStop);
