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
*/
//------------------------------------------------------
// BOOLEAN!!!!!!!
//------------------------------------------------------
