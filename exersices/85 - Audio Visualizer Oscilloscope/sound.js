import { hslToRgb } from './utils';

const WIDTH = 4000;
const HEIGHT = 1500;
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.width = WIDTH;
canvas.height = HEIGHT;
let analyzer;
let bufferLength;

function handleError(err) {
  console.error(err);
}

async function getAudio() {
  const stream = await navigator.mediaDevices
    .getUserMedia({ audio: true })
    .catch(handleError);
  const audioCtx = new AudioContext();
  analyzer = audioCtx.createAnalyser();
  const source = audioCtx.createMediaStreamSource(stream);
  source.connect(analyzer);
  // how much data should we collect
  analyzer.fftSize = 1024;
  // pull the data off the audio
  // how many pieces of data are there?!
  bufferLength = analyzer.frequencyBinCount;
  //   console.log(bufferLength); // example: 512
  const timeData = new Uint8Array(bufferLength);
  const frequencyData = new Uint8Array(bufferLength);
  drawTimeData(timeData);
  drawFrequency(frequencyData);
}

function drawTimeData(timeData) {
  // inyect the time data into our timeData 8bit array
  analyzer.getByteTimeDomainData(timeData);
  //   console.log(timeData);
  // now we can draw the data
  // 1. clear the canvas
  ctx.clearRect(0, 0, WIDTH, HEIGHT);
  // 2. set up some cnvas drawing
  ctx.lineWidth = 10;
  ctx.strokeStyle = '#ffc600';
  ctx.beginPath();
  const sliceWidth = WIDTH / bufferLength; // ex:1500/512
  let x = 0;
  timeData.forEach((data, i) => {
    const v = data / 128; // multiplayer
    const y = (v * HEIGHT) / 2;
    // Draw our lines
    if (i === 0) {
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
    }
    x += sliceWidth;
  });

  ctx.stroke();

  // ask the browser when the next animation frame is, and tell it to run "drawTimeData" for us.
  // it performs better than just calling "drawTimeData();"
  requestAnimationFrame(() => drawTimeData(timeData));
}

function drawFrequency(frequencyData) {
  // inyect the frequency data into our frequencyData 8bit array
  analyzer.getByteFrequencyData(frequencyData);
  requestAnimationFrame(() => drawFrequency(frequencyData));
  // figure out the bar width
  const barWidth = WIDTH / bufferLength;
  let x = 0;
  frequencyData.forEach((amount) => {
    // 0 to 255
    const percent = amount / 255;
    const barHeight = (HEIGHT * percent) / 2;
    // TODO: convert the colours to hsl
    const [h, s, l] = [360 / (360 * percent), 0.7, 0.5];
    const [r, g, b] = hslToRgb(h, s, l);
    ctx.fillStyle = `rgb(${r},${g},${b})`;
    ctx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);
    x += barWidth;
  });
}

getAudio();
