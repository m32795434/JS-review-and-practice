function wait(ms = 0) {
  return new Promise((res) => setTimeout(res, ms));
}
// This is the way we can test a function that return a random number
function getRandomBetween(min = 20, max = 150, randomNumber = Math.random()) {
  return Math.floor(randomNumber * (max - min) + min);
}
// FIRST WITH AN ASYNC FOR OF LOOP

async function draw(el) {
  const text = el.textContent;
  let soFar = '';
  console.dir(el);
  for (const letter of text) {
    soFar += letter;
    el.textContent = soFar;
    const { typeMin, typeMax } = el.dataset;
    await wait(getRandomBetween(typeMin, typeMax));
  }
}
// SECOND WITH RECURSION
/*
function draw(el) {
  const text = el.textContent;
  let index = 1;
  const { typeMin, typeMax } = el.dataset;
  async function drawLetter() {
    el.textContent = text.slice(0, index);
    index += 1;
    if (index <= text.length) {
      await wait(getRandomBetween(typeMin, typeMax));
      drawLetter();
    }
  }
  drawLetter();
} */
document.querySelectorAll('[data-type]').forEach(draw);
