/* eslint-disable*/
const people = [
  { name: 'Manu', cool: true, country: 'Argentina' },
  { name: 'Cinta', cool: true, country: 'EEUU' },
  { name: 'Scotch', cool: false, country: 'Plastic Country' },
];

people.forEach((person, index) => {
  console.log(person.name);
});


// --------------------------Console Methods-----------------------

//console.log/console.warn/console.error
//console.table(people);
/* function doctorize1(name) {
  console.count(`Dr. ${name}`);
} */

/* people.forEach((person, index) => {
  console.groupCollapsed(`name: ${person.name}`);
  console.log(`country: ${person.country}`);
  console.log(`cool: ${person.cool}`);
  console.log(`DONE!`);
  console.groupEnd(`name: ${person.name}`);
}); */


// --------------------Grabbing Elements--------------
// With $0,$1,$2,$3...we can see in console the html code, of the element we "click" at last,  and before.
// With $0.value, the value.
// only in console: $(`p`): show the first element that matches. 
//$$(`p`): all the elements that match.


// ------------------------- Breakpoints-----------------------
// with "debugger" on the code, or making a breakpoint with the "sources" or "elements"tags;
/*
people.forEach((person, index) => {
  debugger; // this will stop the execution of the code, and we can see it step by step.
  console.log(person.name);
}); */

// Scope

// -----Network Requests-------
//in the browser.

// --------------Break On Attribute---------
// in the browser.

// Some Setup Code

function doctorize(name) {
  return `Dr. ${name}`;
}

function greet(name) {
  doesntExist();
  return `Hello ${name}`;
}

function go() {
  const Dname = doctorize(greet('Wes'));
  console.log(Dname);
}

// ------------------Callstack------------------------
// if we call:
go(); // it will cause an error =>
/*
Uncaught ReferenceError: doesntExist is not defined
    at greet (debugging.js:60)//were doesntExist is not defined
    at go (debugging.js:65)//were we call greet()
    at debugging.js:71 */ //were we call go()


const button = document.querySelector('.bigger');
button.addEventListener('click', function(e) {
  const newFontSize =
    parseFloat(getComputedStyle(e.currentTarget).fontSize) + 1;
  e.currentTarget.style.fontSize = `${newFontSize}px`;
});

// A Dad joke fetch
async function fetchDadJoke() {
  const res = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'text/plain',
    },
  });
  const joke = await res.text();
  console.log(joke);
  return joke;
}
