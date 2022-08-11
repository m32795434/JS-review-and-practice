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
const myDate = document.querySelector('.date');
console.log(h1); // null

const toppings = [
  'Mushrooms ',
  'Tomatoes',
  'Eggs',
  'Chili',
  'ettuce',
  'Avocado',
  'Chiles',
  'acon',
  'Pickles',
  'nions',
  'Cheese',
  'vocado',
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
const faces = ['😃', '🤠', '🤡', '🤑', '😵', '🌞', '🐶', '😺'];
const orderTotals = [342, 1002, 523, 34, 634, 854, 1644, 2222];

const feedback = [
  { comment: 'Love the burgs', rating: 4 },
  { comment: 'Horrible Service', rating: 2 },
  { comment: 'Smoothies are great, liked the burger too', rating: 5 },
  { comment: 'Ambiance needs work', rating: 3 },
  { comment: 'I DONT LIKE BURGERS', rating: 1 },
];
const people = [
  {
    birthday: 'April 22, 1993',
    names: {
      first: 'Keith',
      last: 'Buckley',
    },
  },
  {
    birthday: 'January 3, 1975',
    names: {
      first: 'Larry',
      last: 'Heep',
    },
  },
  {
    birthday: 'February 12, 1944',
    names: {
      first: 'Linda',
      last: 'Bermeer',
    },
  },
];
// --------------------------------------
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
//-----------------------------------------
function cheqAndAddAnItemToList(lista, newItem) {
  let myList = [...lista];
  const toLowerTopping = lista.map((top) => top.toLowerCase());
  if (!toLowerTopping.includes(newItem.toLowerCase())) {
    myList = [...myList, newItem];
  }
  return myList;
}
const newToppingWtihPineapple = cheqAndAddAnItemToList(toppings, 'Pineapple');
//-----------------------------------------
const dateOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};
const myDateTextContent = new Date().toLocaleDateString('es-AR', dateOptions);
myDate.textContent = myDateTextContent;

//-----------------------------------------
const filteredPeople = people.map((single) => {
  const nowTimeStamp = Date.now();
  const bday = new Date(single.birthday);
  const ageTimeSt = bday.getTime();
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const bdayTimeFormat = new Intl.DateTimeFormat('es-AR', options).format(bday);
  return {
    age: Math.floor((nowTimeStamp - ageTimeSt) / 31536000000),
    fullName: `${single.names.first} ${single.names.last}`,
    description: `${single.names.first} nació el ${bdayTimeFormat}`,
  };
});
console.table(filteredPeople);
//-----------------
const options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

const dateTimeObject = new Intl.DateTimeFormat('es-AR', options);
const date1 = dateTimeObject.format(new Date());
