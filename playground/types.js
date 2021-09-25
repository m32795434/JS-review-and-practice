// SNOBN'U'S
// String
// Number
// Object
// Boolean
// Null
// Undefined
// Symbol
//------------------------------------------------------
/* STRINGS!!!!!!!
//------------------------------------------------------
const age = 40;

const age2 = 0;

console.log(age, age2);
const name = 'Manuel';
const middleName = 'Augusto';
const lastName = 'Bravard';
const am = 'so cool';
// scape caracter '\'
console.log(`I'm ${am}`);
// backtick `` and inerpolation
const completeName = `${name} ${middleName} ${lastName}`;
// concatenation
// const completeName2 = name + ' ' + middleName + ' ' + lastName;
console.log(completeName);
console.log(`this is
multiple
lines
`);
const html = `
<div>
<h2>Age</h2>
<p>${age}</p>
</div>
`;
document.body.innerHTML = html;
*/
//------------------------------------------------------
// NUMBERS!!!!!!!
//------------------------------------------------------
/*
const age = 40;
const type = typeof age;
const inner = `
<div>
<p>${age}</p><p> is a${type}</p>
</div>
`;
document.body.innerHTML = inner;
console.log(`el redondeo de 20.7 es:`, Math.round(20.7));
console.log(`el piso de 20.7 es:`, Math.floor(20.7));
console.log(`el techo de 20.7 es:`, Math.ceil(20.7));
console.log(`esta es la parte entera de 20.7:`, Math.trunc(20.7));
console.log(`esto es un numero random entre 0 y 1: `, Math.random());
console.log(`si tengo 1 piza de 8 porciones y somos 5, 
todos comemos ${Math.trunc(
  8 / 5
)} porciones y el que parte y reparte se lleva adicional ${8 % 5} unidades XD`);
// if I store monetary values, it is advisable to do so in cents, and avoid some degree of inaccuracy.
// 10 ** 2 = 10 * 10 = 100;
// Nan= not a number.
parse.Float('10.5') returns 10.5 as a number
parse.Int('10.5') returns 10 as a number, but only the integer part of the number.
*/
//------------------------------------------------------
// OBJECTS!!!!!!!
//------------------------------------------------------
/*
const person = {
  name: 'Manuel',
  age: 40,
  isCool: true,
};
console.log(
  `${person.name} is ${person.age} years old, an it's ${person.isCool} he is Cool`
);
*/
//------------------------------------------------------
// UNDEFINED!!!!!!!
//------------------------------------------------------
/*
let dog; I build the variable, but I don't assign a value to it.
console.log(dog);
*/
//------------------------------------------------------
// NULL!!!!!!!
//------------------------------------------------------
/*
const someThingNull = null; I explicilly say that the variable is null. That's it's value.
*/
//------------------------------------------------------
// BOOLEAN!!!!!!!
//------------------------------------------------------
/*
const isDrawing = true;
let age = 40; // asign
const ofAge = age > 30;
console.log(`isDrawing: ${isDrawing}`);
console.log(`ofAge: ${ofAge}`);
age = 50; // update
const bool = '10' === 10; // false
const bool2 = '10' == 10; // true --> strict equality, tyoe and value
console.log(bool, bool2);
*/
