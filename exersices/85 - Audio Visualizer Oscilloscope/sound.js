const WIDTH  = 1500;
const HEIGHT = 1500;
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.width = WIDTH;
canvas.height = HEIGHT;
let analyzer;

async function getAudio(){
    const stream = await navigator.mediaDevices.getUserMedia(
        {audio: true,}
    );
    const audioCtx = new AudioContext();
    analyzer = audioCtx.createAnalyser();
const source = audioCtx.createMediaStreamSource(stream);
source.connect(analyzer);
// how much data should we collect
analyzer.fftSize = 2**10;
//pull the data off the audio
const timeData = new Uint8Array(analyzer.frequencyBinCount);
console.log(timeData)
}

getAudio();
