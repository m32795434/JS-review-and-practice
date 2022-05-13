export async function fetchJoke(loader) {
  loader.classList.remove('hidden');
  const response = await fetch('https://icanhazdadjoke.com/', {
    headers: { Accept: 'application/json' },
  });
  const data = await response.json();
  loader.classList.add('hidden');
  return data;
}
