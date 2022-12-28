import { cloneDeep } from 'lodash';
import to from 'await-to-js';

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
// FUNCTIONS TO CONVERT INTO A MODULE

function isEven(value) {
  return value % 2 === 0;
}

// FUNCTION parseBoolean FROM JAVA
// a function to parse a string containing "true" or "false" t its boolean matched type.

function parseBoolean(s) {
  const sL = s.toLowerCase();
  return sL === 'true';
}

// Promises
// MAKE A SAFE FUNCTION WITH A HOF(HIGH ORDER FUNCTION)-(THE REST of the FUNCTION WILL STOP RUNNING since the error occurs) (****)
// usefull for Node.js, so all the pages can use the same error handling.
function makeSafeAnAsynchronousFunction(fn, handleStatus) {
  return function () {
    fn().catch(handleStatus);
  };
}

// if newItem doesn't exist in the list, add it
function cheqAndAddAnItemToList(lista, newItem) {
  let myList = [...lista];
  const toLowerTopping = lista.map((top) => top.toLowerCase());
  if (!toLowerTopping.includes(newItem.toLowerCase())) {
    myList = [...myList, newItem];
  }
  return myList;
}

// A GENERIC TOOL - ASINCHRONOUS .MAP()
async function asyncMap(array, callBack) {
  const results = [];
  for (const item of array) {
    results.push(await callBack(item));
  }
  return results;
}

// REPLACING AN OBJECT PROPERTY NAME

function replacePropertyNameAndReturnCopy(array, property, newName) {
  const newArray = cloneDeep(array);
  for (const item of newArray) {
    item[newName] = item[property];
    delete item[property];
  }
  return newArray;
}

// DATES
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat

let { timeZone, locale } = Intl.DateTimeFormat().resolvedOptions(); // eg: America/Montevideo
if (timeZone === 'America/Montevideo') {
  locale = 'es-AR';
}
const localesTZones = [
  'pt-BR',
  'en-US',
  'es-ES',
  'en-GB',
  'pl-PL',
  'uk-UA',
  'be-BY',
  'ja-JP',
  'zh-Hant-MO',
  'es-AR',
];
const locLength = localesTZones.length;
// const arEG = new Intl.Locale("ar-EG");//to show the allowed locales
// console.log(arEG.timeZones); // logs ["Africa/Cairo"]
/*
const dateOptions = {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  hour12: false,
  timeZone,
}; */
const dateOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  timeZone,
};

// dateObject
const dateObject = new Intl.DateTimeFormat(locale, dateOptions);
myDate.textContent = dateObject.format(new Date());

let i = 0;
function changeDate() {
  setInterval(() => {
    if (i >= 0 && i < locLength) {
      console.log('changing...');
      locale = localesTZones[i];
      const text = new Intl.DateTimeFormat(locale, dateOptions).format(
        new Date()
      );
      myDate.textContent = text;
      i++;
    } else {
      i = 0;
    }
  }, 2000);
}

//----------------------------------------
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

/// ///////////////////
/*
class Automovil {
  gasolina = 0;
  constructor(marca, modelo, km) {
    this.marca = marca;
    this.modelo = modelo;
    this.km = km;
  }

  doblarIzquierda() {
    console.log('doblando izquierda');
  }

  viajar(kmRecorridos) {
    this.km += kmRecorridos;
    return this.km;
  }

  cargarGasolina(lt) {
    this.gasolina += lt;
    this.pasajeros = 0;
    return this.gasolina;
  }

  set Gasolina(gasolina){
    this.gasolina=gasolina;
  }
}

class Auto extends Automovil {
  constructor(marca, modelo, km, pasajeros) {
    super(marca, modelo, km);
    this.pasajeros = pasajeros;
  }

  derrapar() {
    console.log('freno de mano activado..derrapando');
  }
}
const auto1 = new Auto('chevrolet', 2015, 70000, 20);
*/

// Do we need a framework to prevent unnecessary refresh in the DOM? no!
/*
class HeroeComponent {
  name = 'ironman';

  age = 45;

  showData() {
    return `${this.name} is ${this.age} years old`;
  }

  get toUpperCaseName() {
    return this.name.toUpperCase();
  }

  changeName() {
    this.name = 'Hulk';
  }
}
const changeHero = document.querySelector('.changeHero');
const heroName = document.querySelector('.heroName');
const hero1 = new HeroeComponent();
window.hero1 = hero1;
heroName.innerText = hero1.name;

// this is how Ng think about data binding?
changeHero.addEventListener('click', () => {
  if (!(hero1.name === 'Hulk')) {
    hero1.changeName();
    heroName.innerText = hero1.name;
  }
});
*/
