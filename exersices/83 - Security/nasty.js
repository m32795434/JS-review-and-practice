import { sanitize } from 'dompurify';

console.log('horray!');

const input = document.querySelector('[name="input"]');
const output = document.querySelector('.output');
const buttons = document.querySelectorAll('nav button');
input.addEventListener('input', () => {
  const clean = sanitize(input.value, {
    FORBID_ATTR: ['width', 'height', 'style', 'href', 'target'],
    FORBID_TAGS: ['style', 'script'],
  });
  output.innerHTML = clean.replace(/\n/g, '<br>');
});

// trigger an input even on page load
input.dispatchEvent(new Event('input'));

buttons.forEach((button) =>
  button.addEventListener('click', (e) => {
    alert(e.currentTarget.textContent);
  })
);
