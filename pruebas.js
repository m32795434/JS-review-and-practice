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
console.log(p);

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
    birthday: 'February 12, 1944',
    names: {
      first: 'Linda',
      last: 'Bermeer',
    },
  },
  {
    birthday: 'January 3, 1975',
    names: {
      first: 'Larry',
      last: 'Heep',
    },
  },
];

//-----------------------------------------
const toppings = [
  'Mushrooms ',
  'Tomatoes',
  'Eggs',
  'Chili',
  'lettuce',
  'Avocado',
  'Chiles',
  'acon',
  'Pickles',
  'nions',
  'Cheese',
  'vocado',
];
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
const dateObject = new Intl.DateTimeFormat('es-AR', dateOptions);
const myDateTextContent = dateObject.format(new Date());
myDate.textContent = myDateTextContent;

//-----------------------------------------
function replacePropertyNameAndReturnCopy(array, property, newName) {
  const newArray = _.cloneDeep(array);
  for (const item of newArray) {
    item[newName] = item[property];
    delete item[property];
  }
  return newArray;
}
//-----------------------------------
const response = [
  {
    id: 3,
    lista_id: 1,
    dep_id: 1,
    precio: 700,
    nombre: 'Art A',
    stock: 10,
  },
  {
    id: 3,
    lista_id: 1,
    dep_id: 2,
    precio: 700,
    nombre: 'Art C',
    stock: 15,
  },
  {
    id: 3,
    lista_id: 2,
    dep_id: 1,
    precio: 200,
    nombre: 'Art C',
    stock: 10,
  },
  {
    id: 3,
    lista_id: 2,
    dep_id: 2,
    precio: 200,
    nombre: 'Art C',
    stock: 15,
  },
  {
    id: 1,
    lista_id: 1,
    dep_id: 1,
    precio: 500,
    nombre: 'Art A',
    stock: 10,
  },
  {
    id: 1,
    lista_id: 1,
    dep_id: 2,
    precio: 500,
    nombre: 'Art A',
    stock: 15,
  },
  {
    id: 1,
    lista_id: 2,
    dep_id: 1,
    precio: 300,
    nombre: 'Art A',
    stock: 10,
  },
  {
    id: 1,
    lista_id: 2,
    dep_id: 2,
    precio: 300,
    nombre: 'Art A',
    stock: 15,
  },
  {
    id: 2,
    lista_id: 1,
    dep_id: 2,
    precio: 200,
    nombre: 'Art B',
    stock: 15,
  },
  {
    id: 2,
    lista_id: 1,
    dep_id: 1,
    precio: 200,
    nombre: 'Art B',
    stock: 15,
  },
];

// RESOLUCION 1--------------------
const responseSortedByList = [...response].sort(
  (a, b) => b.lista_id - a.lista_id
);
console.log(responseSortedByList);

/*
function reducerSortedResponse(inv, item) {
  if (!(item.nombre in inv)) {
    inv[item.nombre] = {
      stock: item.stock,
      price: item.precio,
      it: 1,
    };
  } else if (inv[item.nombre].it === 1) {
    inv[item.nombre].stock += item.stock;
    inv[item.nombre].it += 1;
  }
  return inv;
}
const reducedSortedResponse = responseSortedByList.reduce(
  reducerSortedResponse,
  {}
);
console.log(reducedSortedResponse);
*/

// RESOLUCION 2--------------------
function reducerSortedResponse2(inv, item) {
  const index = inv.findIndex((invItem) => invItem.name === item.nombre);
  if (index === -1) {
    const tempItem = {
      name: item.nombre,
      stock: item.stock,
      price: item.precio,
      it: 1,
    };
    inv.push(tempItem);
  } else if (inv[index].it === 1) {
    inv[index].stock += item.stock;
    inv[index].it += 1;
  }
  return inv;
}
const reducedSortedResponse2 = responseSortedByList.reduce(
  reducerSortedResponse2,
  []
);
// video 56
