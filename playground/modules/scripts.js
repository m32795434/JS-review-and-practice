// A DEFAULT IMPORT AND MANY {NAMED IMPORTS}
import colorDePelo, {
  returnHi as sayHi,
  returnHello,
  last2,
  returnWhatsUp,
} from './utils.js';
import { handleButtonClick } from './handlers.js';
import * as everything from './currencies.js';

const last = 'Bravard de la Riviere';
const name = 'Manuel';
console.log(colorDePelo);

console.log(sayHi(name)); // 'hi MAnuel Bravard' / Bravard comes from utils.js, because this function doesn't have the parameter'last'
console.log(returnHello(name, last)); // 'hello Manuel Bravard de la Riviere'
console.log(returnWhatsUp(name, last2)); // 'last2' is defined here by the import statement
console.log(everything); // Module Object
//-------------------------------------------------------------------

const button = document.querySelector('button');

button.addEventListener('click', handleButtonClick);
