// ------------WITH KEYWORD "FUNCTION"-------------
// all functions with keyword "function" are hoisted in the top.
// Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function).
// so you can run the function before you declare it.

// console.log(doctorize(`Raul`));

/* function doctorize(name) {
  return `Dr. ${name}`;
} */

// ------------------ANONYMOUS FUNCTION!! (without a name)------------------
/* function (name) {
  return `Dr. ${name}`;
} */

// function expression. In this case, it's an anonymous function inside a variable. We can call it later, as doctorize(`name`). It's available.
const doctorize = function (name) {
  return `Dr. ${name}`;
};

// ----------------------ARROW FUNCTION!!.-----------------------

/*eslint-disable */
// an anonymous function with a single expression. We can call it later as inchToCm();
//const inchToCm = (inches) => inches * 2.54;

/* eslint-enable */
// const add = (a, b = 3) => a + b;

function makeABaby(first, last) {
  const baby = {
    name: `${first} ${last}`,
    age: 0,
  };
  return baby;
}

/*eslint-disable */
const makeABaby1 = (first, last) => {
  const baby = {
    name: `${first} ${last}`,
    age: 0,
  };
  return baby;
}

const makeABaby3 = (first, last) => {
  return {
    name: `${first} ${last}`,
    age: 0,
  };
}

const makeABaby2 = (first, last) => baby = {
    name: `${first} ${last}`,
    age: 0
  };
// with () we can return an object.
const makeABaby4 = (first, last) => ({name: `${first} ${last}`, age: 0});

// -------------------------IIFE!!-------------------------
// Immediately Invoked Function Expression.
// It's a function that runs as soon as it's defined.

(function(age) {
  console.log('running the Anon function');
  return `you are cool and your age is ${age}`;
})(10);

//-----------------------METHODS!!-------------------------
// methods are functions that are attached to objects.
// They are functions that are stored as properties of objects.

const person = {
  name: `Manuel`,
  // method!
  sayHi: function() {
  console.log(`hey ${this.name}`);
  },
  // short hand method!
  sayHi2() {
    console.log(`hey ${this.name}`);
  },
  // arrow function
  sayHi3: () => {
    // we can't use "this" here.
    console.log(`hey Manuel Augusto!`);
  }
};

// --------------------------CALLBACK FUNCTIONS!!-------------------------
// Callback functions are functions that are passed into other functions as parameters.
// They are used to execute code after another piece of code has finished executing.

const button = document.querySelector(`.clickMe`);
//console.log(button);
function handleClick() {
  console.log(`good click!`);
}
button.addEventListener(`click`, handleClick);
button.addEventListener('click', person.sayHi3);
button.addEventListener(`click`, function() 
{console.log(`Nice Job!!`)});

//--------------------TIMER CALLBACK!!-------------------------------
setTimeout(function() {console.log(`timer is done!`)}, 2000);
setTimeout(() => {console.log(`timer is done!`)}, 2000);
