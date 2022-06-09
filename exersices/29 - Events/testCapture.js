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
}, {capture: true}); //capture this first
div3.addEventListener(
  'click',
  (e) => {
    console.log(e.currentTarget);
  }
);
window.addEventListener('click', function() {
  console.log(this);
});
html.addEventListener('click', function() {
  console.log(this);
});
document.addEventListener('click', function() {
  console.log(this);
});
body.addEventListener('click', function() {
  console.log(this);
});
