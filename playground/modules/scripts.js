// NAMED IMPORTS
import { returnHi, returnHello, last2, returnWhatsUp } from './utils.js';

const last = 'Bravard de la Riviere';
const name = 'Manuel';

console.log(returnHi(name)); // 'hi MAnuel Bravard' / Bravard comes from utils.js, because this function doesn't have the parameter'last'
console.log(returnHello(name, last)); // 'hello Manuel Bravard de la Riviere'
console.log(returnWhatsUp(name, last2)); // 'last2' is defined here by the import statement
