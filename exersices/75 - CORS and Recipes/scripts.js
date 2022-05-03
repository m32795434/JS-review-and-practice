// ERROR - REGENERATORRUNTIME IS NOT DEFINED - BABEL - TRANSPILE ERRORS
// SOLUTION: on package.json insert a new entry: "browserslist": "last 1 chrome versions"
const baseEndPoint = 'https://recipes.beginnerjavascript.com/api';
const corsProxy = 'https://cors-anywhere.herokuapp.com';
const form = document.querySelector('form.search');
const recipesGrid = document.querySelector('.recipes');

async function fetchRecipes(query) {
  const res = await fetch(`${corsProxy}/${baseEndPoint}?q=${query}`);
  const data = await res.json();
  return data;
}
function displayRecipes(recipes) {
  console.log(recipes);
  const myHtml = recipes.map(
    (recipe) => `<div class="recipe">
  <h1>${recipe.title}</h1>
  <p>${recipe.ingredients}</p>
  ${
    recipe.thumbnail && `<img src="${recipe.thumbnail}" alt="${recipe.title}"/>`
  }
  <a href="${recipe.href}">View Recipe--> <a/>
  </div>`
  );
  recipesGrid.innerHTML = myHtml.join('');
}
async function fetchAndDisplay(query) {
  form.submit.disabled = true;
  const response = await fetchRecipes(query);
  console.log(response);
  form.submit.disabled = false;
  displayRecipes(response.results);
}
async function handleSubmit(event) {
  event.preventDefault();
  const el = event.currentTarget;
  fetchAndDisplay(el.query.value);
}

form.addEventListener('submit', handleSubmit, { once: true });

fetchAndDisplay('pizza');
