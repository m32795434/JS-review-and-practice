const button = document.querySelector('.button');
const div1 = document.querySelector('.div1');
const div2 = document.querySelector('.div2');
const div3 = document.querySelector('.div3');
const html = document.querySelector('html');
const body = document.querySelector('body');

button.addEventListener('click', (e) => {
  console.log(e.currentTarget);
});
div1.addEventListener('click', (e) => {
  console.log(e.currentTarget);
});
div2.addEventListener('click', (e) => {
  console.log(e.currentTarget);
});
div3.addEventListener(
  'click',
  (e) => {
    // e.stopPropagation();
    console.log(e.currentTarget);
  },
  { capture: true }
);
window.addEventListener('click', (e) => {
  console.log(e);
  console.log('window');
});
html.addEventListener('click', () => {
  console.log('html');
});
document.addEventListener('click', () => {
  console.log('document');
});
body.addEventListener('click', () => {
  console.log('body');
});
