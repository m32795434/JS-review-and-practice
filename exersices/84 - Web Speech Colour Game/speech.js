import { handleResult } from './handlers';
import { colorsByLength, isDark } from './colors';

const colorsEl = document.querySelector('.colors');

function displayColors(colors) {
  return colors
    .map(
      (color) =>
        `<span class="color ${
          isDark(color) && 'dark'
        }" style="background:${color}">${color}</span>`
    )
    .join('');
}

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

function start() {
  // see if the browser supports this
  if (!('SpeechRecognition' in window)) {
    console.log('your browser does not support speech recognition');
    return;
  }
  console.log('starting....');
  const recognition = new SpeechRecognition();
  recognition.continuous = true;
  recognition.interimResults = true; // will recognize as soon as it hears a word
  recognition.onresult = handleResult;
  recognition.start();
  console.log(recognition);
}
// start();
colorsEl.innerHTML = displayColors(colorsByLength);
