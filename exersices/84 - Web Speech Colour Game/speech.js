window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

function start() {
  // see if the browser supports this
  if (!('SpeechRecognition' in window)) {
    console.log('your browser does not support speech recognition');
    return;
  }
  console.log('starting....');
}
start();
