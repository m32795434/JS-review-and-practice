const video = document.querySelector('.webcam');

const canvas = document.querySelector('.video'); // I don't like this NAME, becasuse this will paint a rectangle in the canvas, not the video.
const ctx = canvas.getContext('2d');

const faceCanvas = document.querySelector('.face'); // it will store the small face, and then draw it in a normal size
const faceCtx = faceCanvas.getContext('2d');
const SIZE = 10;
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
  const faces = await faceDetector.detect(video); // this "detect" is a method from the faceDetector object, and throws an array of faces.
  faces.forEach(drawFace);
  faces.forEach(censor);
  // ask the browser when the next animation frame is, and tell it to run "detect" for us.
  requestAnimationFrame(detect); // it could be just "detect();"
}
function drawFace(face) {
  const { width, height, top, left } = face.boundingBox;
  // console.log(face);
  // console.log({ width, height, top, left });
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = '#ffc600';
  ctx.lineWidth = 2;
  ctx.strokeRect(left, top, width, height); // paint the rectangle
}

function censor({ boundingBox: face }) {
  // draw the small face
  faceCtx.drawImage(
    // 5 source args
    video, // source image
    face.x, // where do we start to pull from
    face.y,
    face.width,
    face.height,
    // 4 draw args
    face.x, // where do we start to draw
    face.y,
    SIZE,
    SIZE
  );
  // take that face back out and draw it back at normal size
  faceCtx.drawImage(
    faceCanvas, // source image
    face.x, // where we start
    face.y,
    SIZE, // width and height
    SIZE,
    // DRAWING ARGS
    face.x,
    face.y,
    face.width,
    face.height
  );
}

// if we don't have access to the globals variables. We can:
// window.populateVideo = populateVideo; or
// console.log(populateVideo); then store in a global variable

populateVideo().then(detect);
