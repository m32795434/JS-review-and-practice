const video = document.querySelector('.webcam');

const canvas = document.querySelector('.video');
const ctx = canvas.getContext('2d');

const faceCanvas = document.querySelector('.face');
const faceCtx = canvas.getContext('2d');

const faceDetector = new window.FaceDetector();
console.log(video, canvas, faceCanvas, faceDetector);

// write a function that will populate the users video

async function populateVideo() {
  const stream = await navigator.mediaDevices.getUserMedia({
    video: { width: 1280, height: 720 },
  });
  video.srcObject = stream;
  await video.play();
  // size the canvases to be the same size as the video
  console.log(video.videoWidth, video.videoHeight);
  canvas.height = video.videoHeight;
  canvas.width = video.videoWidth;
  faceCanvas.height = video.videoHeight;
  faceCanvas.width = video.videoWidth;
}

async function detect() {
  const faces = await faceDetector.detect(video); // this "detect" is a method from the faceDetector object
  console.log(faces);

  // ask the browser when the next animation frame is, and tell it to run "detect" for us.
  requestAnimationFrame(detect); // it could be just "detect();"
}
function drawFace(face) {
  console.log(face);
}

// if we don't have access to the globals variables. We can:
// window.populateVideo = populateVideo; or
// console.log(populateVideo); then store in a global variable

populateVideo().then(detect);
