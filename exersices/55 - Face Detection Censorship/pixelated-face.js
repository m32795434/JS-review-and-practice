const video = document.querySelector('.webcam');
//  we will use the canvas objects to getContext, set their width and height the same as the video element, and clear the canvas with its measures.
// we will use the respective contexts to draw the image and clear the canvas.

const canvas = document.querySelector('.video'); // I don't like this NAME, becasuse this will paint a rectangle in the canvas, not the video.
const ctx = canvas.getContext('2d');
const faceCanvas = document.querySelector('.face'); // it will store the DRAW of the small face, and then draw it in a normal size
const faceCtx = faceCanvas.getContext('2d');

const optionsInputs = document.querySelectorAll(
  '.controls input[type="range"]'
);
const options = {
  SIZE: 10,
  SCALE: 1.35,
};
function handleOption(event) {
  const { name, value } = event.currentTarget; // the NAME and the VALUE of the input
  // console.log(name, value);
  options[name] = parseFloat(value);
}
optionsInputs.forEach((input) => {
  input.addEventListener('input', handleOption);
});
let faceDetector;
try {
  faceDetector = new window.FaceDetector();
} catch (err) {
  alert(
    'You have to enable the Experimental Web Platform features. Go to "yourBrowser://flags" and enable!'
  );
}
// console.log(video, canvas, faceCanvas, faceDetector);

// write a function that will populate the users video

async function populateVideo() {
  let stream;
  try {
    stream = await navigator.mediaDevices.getUserMedia({
      video: { width: 640, height: 360 },
    });
    console.log(stream);
  } catch (err) {
    alert('You have to authorize the camera recording to use this app😄');
  }
  video.srcObject = stream;
  await video.play();
  // size the canvases to be the same size as the video
  // console.log(video.videoWidth, video.videoHeight);
  canvas.height = video.videoHeight;
  canvas.width = video.videoWidth;
  faceCanvas.height = video.videoHeight;
  faceCanvas.width = video.videoWidth;
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
  // faceCtx.imageSmoothingEnabled = false;
  faceCtx.clearRect(0, 0, faceCanvas.width, faceCanvas.height);

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
    options.SIZE,
    options.SIZE
  );
  const width = face.width * options.SCALE;
  const height = face.height * options.SCALE;
  // take that face back out and draw it back at normal size
  faceCtx.drawImage(
    faceCanvas, // the source image is in the canvas, not in the context
    face.x, // where we start
    face.y,
    options.SIZE, // width and height
    options.SIZE,
    // DRAWING ARGS
    face.x - (width - face.width) / 2,
    face.y - (height - face.height) / 2,
    width,
    height
  );
}
async function detect() {
  const faces = await faceDetector.detect(video); // this "detect" is a method from the faceDetector object, and throws an array of faces.
  faces.forEach(drawFace);
  faces.forEach(censor);
  // ask the browser when the next animation frame is, and tell it to run "detect" for us.
  requestAnimationFrame(detect); // this performs better, but it could be just "detect();"
}

// if we don't have access to the globals variables. We can:
// window.populateVideo = populateVideo; or
// console.log(populateVideo); then store in a global variable

populateVideo().then(detect);
