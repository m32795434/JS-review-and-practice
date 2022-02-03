const textArea = document.querySelector('[name="text"]');
const result = document.querySelector('.result');
const filterInputs = document.querySelectorAll('[name= "filter"]');

const filters = {
  sarcastic(letter, index) {
    // if it is odd, it will return <>0, so it is truthy,
    if (index % 2) {
      return letter.toUpperCase();
    } // if it's even
    return letter.toLowerCase();
  },
  funky() {},
  unable() {},
};

function transformText(text) {
  const filter = document.querySelector('[name="filter"]: checked').value;
  // take the text and loop over each caracter
  const mod = Array.from(text).map(filters.value).join('');
  result.textContent = mod;
}
textArea.addEventListener('input', (e) => transformText(e.target.value));
