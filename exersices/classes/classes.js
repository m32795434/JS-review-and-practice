/* eslint-disable max-classes-per-file */
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

  set Gasolina(gasolina) {
    this.gasolina = gasolina;
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

// Do we need a framework to prevent unnecessary refresh in the DOM? no!

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
/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
class Hero {
  constructor(id = Hero.nextId++, name, emotion, birthdate, url, rate = 100) {
    this.id = id;
    this.name = name;
    this.emotion = emotion;
    this.birthdate = birthdate;
    this.url = url;
    this.rate = rate;
  }

  clone() {
    return Object.assign(new Hero(), this);
  }
}
Hero.nextId = 0; // when the constructor runs, increment this value
Hero.heroes = [
  new Hero(
    0,
    'Hercules',
    'happy',
    new Date(1970, 1, 25),
    'https://www.imdb.com/title/tt0065832/',
    325
  ),
  new Hero(1, 'Dr Nice', 'happy'),
  new Hero(2, 'RubberMan', 'sad'),
  new Hero(3, 'Windstorm', 'confused'),
  new Hero(4, 'Magneta'),
];
