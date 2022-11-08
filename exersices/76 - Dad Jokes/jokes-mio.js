const jokeButton = document.querySelector('.getJoke');
const jokeHolder = document.querySelector('.joke p');
const loader = document.querySelector('.loader');
const buttonText = [
  'Ugh.',
  '🤦🏻‍♂️',
  'omg dad.',
  'you are the worst',
  'seriously',
  'stop it.',
  'please stop',
  'that was the worst one',
];
async function wait(ms) {
  return new Promise((res) => {
    setTimeout(res, ms);
  });
}
async function fetchJoke() {
  loader.style.display = 'inline-block';
  jokeHolder.textContent = '';
  await wait(1000);
  const response = await fetch('https://icanhazdadjoke.com/', {
    headers: { Accept: 'application/json' },
  });
  const data = await response.json();
  return data;
}
function randomItemFromArray(arr, not) {
  const item = arr[Math.floor(Math.random() * arr.length)];
  if (item === not) {
    console.log(`repeted item!:${not}`);
    return randomItemFromArray(arr, not);
  }
  return item;
}
async function handleClick() {
  const { joke } = await fetchJoke();
  loader.style.display = 'none';
  jokeHolder.textContent = joke;
  jokeButton.textContent = randomItemFromArray(
    buttonText,
    jokeButton.textContent
  );
}
jokeButton.addEventListener('click', handleClick);
