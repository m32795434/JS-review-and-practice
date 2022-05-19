import { isValidColor } from './colors';

function logWords(words) {}

export function handleResult({ results }) {
  const words = results[results.length - 1][0].transcript;
  logWords(words);
  // lowercase everything
  let color = words.toLowerCase();
  // strip any spaces out
  color = color.replace(/\s/g, '');
  // check if it's a valid color
  if (!isValidColor(color)) return; // thats all!
  // if it is show the UI
  const colorSpan = document.querySelector(`.${color}`);
  colorSpan.classList.add('got');
  console.log(color);
  console.log('this is a valid color!');
  // change the background color with the selected color
  document.body.style.backgroundColor = color;
}
