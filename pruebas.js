console.log('it works!');
const myHtml = `
<div>
    <h1>Hola mundo</h1>
    <p>Lorem ipsum dolor sit amet 
            <strong>HOOOOO  HO HOOOO</strong> 
        consectetur adipisicing elit.
    </p>
    <img src="https://picsum.photos/200/300" alt="nice dog!">
    <ul>
        <li>uno</li>
        <li>dos</li>
        <li>tres</li>
    </ul>
</div>`;
const myFragment = document.createRange().createContextualFragment(myHtml);
document.body.appendChild(myFragment);
const p = document.querySelector('p');
const par = document.querySelector('.par');
const h1 = p.closest('h1');
console.log(h1); // null

function isEven(value) {
  return value % 2 === 0;
}
par.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    const value = parseFloat(e.currentTarget.value);
    if (isEven(value)) {
      par.insertAdjacentText('afterend', `  ${value} is even!`);
    } else {
      par.insertAdjacentText('afterend', `  ${value} is odd!`);
    }
  }
});

const toppings = [
  'Mushrooms ',
  'Tomatoes',
  'Eggs',
  'Chili',
  'Lettuce',
  'Avocado',
  'Chiles',
  'Bacon',
  'Pickles',
  'Onions',
  'Cheese',
  'Avocado',
];
const buns = ['egg', 'wonder', 'brioche'];

const meats = {
  beyond: 10,
  beef: 5,
  pork: 7,
};

const prices = {
  hotDog: 453,
  burger: 765,
  sausage: 634,
  corn: 234,
};

const orderTotals = [342, 1002, 523, 34, 634, 854, 1644, 2222];

const feedback = [
  { comment: 'Love the burgs', rating: 4 },
  { comment: 'Horrible Service', rating: 2 },
  { comment: 'Smoothies are great, liked the burger too', rating: 5 },
  { comment: 'Ambiance needs work', rating: 3 },
  { comment: 'I DONT LIKE BURGERS', rating: 1 },
];

function filterByRating(rating) {
  return (singlecommnet) => singlecommnet.rating === 1;
}
const oneRatingIndex = feedback.findIndex(filterByRating(1));
console.log(feedback);

const funciones = {
  sumar: (a, b) => a + b,
  restar: (a, b) => a - b,
};
console.log(funciones.sumar);
