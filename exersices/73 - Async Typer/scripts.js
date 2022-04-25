function wait(ms = 0) {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve('Done');
    }, ms)
  );
}
/*
async function run(ms) {
  const result = await wait(ms);
  console.log(result);
}
run(3000);
*/
function getRandomBetween(min = 20, max = 150, randomNumber = Math.random()) {
  return Math.floor(randomNumber * (max - min) + min);
}
// FIRST WITH AN ASYNC FOR OF LOOP
async function draw(el) {
  const text = el.textContent;
  let soFar = '';
  for (const letter of text) {
    soFar += letter;
    el.textContent = soFar;
    const { typeMin, typeMax } = el.dataset;
    await wait(getRandomBetween(typeMin, typeMax));
  }
}
// SECOND WITH RECURSION
document.querySelectorAll('[data-type]').forEach(draw);
