const textArea = document.querySelector('[name="text"]');
const result = document.querySelector('.result');
const filterInputs = Array.from(document.querySelectorAll('[name= "filter"]'));
/* eslint-disable */
const funkyLetters = {
  '-': '₋', '!': 'ᵎ', '?': 'ˀ', '(': '⁽', ')': '₎', '+': '⁺', '=': '₌', '0': '⁰', '1': '₁', '2': '²', '4': '₄', '5': '₅', '6': '₆', '7': '⁷', '8': '⁸', '9': '⁹', a: 'ᵃ', A: 'ᴬ', B: 'ᴮ', b: 'ᵦ', C: '𝒸', d: 'ᵈ', D: 'ᴰ', e: 'ₑ', E: 'ᴱ', f: '𝒻', F: 'ᶠ', g: 'ᵍ', G: 'ᴳ', h: 'ʰ', H: 'ₕ', I: 'ᵢ', i: 'ᵢ', j: 'ʲ', J: 'ᴶ', K: 'ₖ', k: 'ₖ', l: 'ˡ', L: 'ᴸ', m: 'ᵐ', M: 'ₘ', n: 'ₙ', N: 'ᴺ', o: 'ᵒ', O: 'ᴼ', p: 'ᵖ', P: 'ᴾ', Q: 'ᵠ', q: 'ᑫ', r: 'ʳ', R: 'ᵣ', S: 'ˢ', s: 'ˢ', t: 'ᵗ', T: 'ₜ', u: 'ᵘ', U: 'ᵤ', v: 'ᵛ', V: 'ᵥ', w: '𝓌', W: 'ʷ', x: 'ˣ', X: 'ˣ', y: 'y', Y: 'Y', z: '𝓏', Z: 'ᶻ' };
/* eslint-enable */
const filters = {
  sarcastic(letter, index) {
    // if it is odd, it will return <>0, so it is truthy,
    if (index % 2) {
      return letter.toUpperCase();
    } // if it's even
    return letter.toLowerCase();
  },
  funky(letter) {
    // check if there is a funky letter for this case or
    // check if there is a lower case version
    let funkyLetter = funkyLetters[letter];
    funkyLetter = funkyLetter || funkyLetters[letter.toLowerCase()];
    // if there ir nothing return the letter
    return funkyLetter || letter;
  },
  unable(letter) {
    const random = Math.floor(Math.random() * 3);
    if (random === 2 && letter === ' ') {
      return '...';
    }
    return letter;
  },
};

function transformText(text) {
  // const filter = document.querySelector('[name="filter"]:checked').value;
  const filter = filterInputs.find((input) => input.checked).value;
  // take the text and loop over each caracter
  const mod = Array.from(text).map(filters[filter]).join('');
  result.textContent = mod;
}
textArea.addEventListener('input', (e) => transformText(e.target.value));
filterInputs.forEach((input) =>
  input.addEventListener('input', () => transformText(textArea.value))
);
