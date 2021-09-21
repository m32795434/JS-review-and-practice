// String
// Number
// Object
// Boolean
// Null
// Undefined
// Symbol

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
