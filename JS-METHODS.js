/* eslint-disable */

// Checking type of Elements
typeof myHtml; // STRING


// DOM Manipulation
Element.matches('.clase')
Element.closest('h1');//the h1 ancestor if it exists
document.querySelector('[name:"filter"]:checked') // AND document.querySelectorAll('')
document.createElement('span');
Element.children //children[index] too
Element.firstElementChild
Element.lastElementChild
Element.previousElementSibling
Element.nextElementSibling
Element.parentElement
Element.parentNode
Element.childNodes //childNodes[index] too
Element.nextSibling
Element.previousSibling
Element.firstChild
Element.lastChild
const myFragment = document.createRange().createContextualFragment(myHtml); // from a string
let myfragment1 = new DocumentFragment();// empty document fragment
myFragment.firstElementChild.insertAdjacentElement('afterbegin', spa)
document.body.appendChild(myFragment)//Node.appendChild()
myUl.append(myLi4, myLi5, myLi3)//append more than one element and DOMstring
myDiv.firstElementChild.remove();
div.insertAdjacentHTML('beforebegin', myHTML); // myHTML is a string
Element.outerHTML //includes the own tag
item.innerHTML = myHtml //myHtml is a string
HTMLElement.innerText
Node.textContent//has better performance because its value is 
//not parsed as HTML. Moreover, you can prevent XSS attacks.
Element.SetHTML() //to sanitize the text before it is inserted into the DOM.
Element.insertAdjacentText()
const myLi4 = myLi3.cloneNode(true)//clone deep true


//Adding  and Removing Classes / Attributes
Element.classList.replace('una', 'otra');
[itemsToRemoveClasses].forEach((item)=>item.classList.remove(...arraysWithClasses))// or .remove()
itemImg.classList.toggle('round');
myImage.src = 'https://source.unsplash.com/random/400x400';// setting attributes
pic.setAttribute('alt', 'random2'); // onother way. Even for non-standard attributes.
pic.getAttribute('alt')
pic.removeAttribute('alt');
tab.ariaSelected = false; //Camel case method for "aria-selected". I prefer setAttribute();
// DOMTokenList(a classLsit for example)
classList.contains('modal');

//Event Listeners
itemImg.addEventListener('click', toggleRound, { capture: true, once: true })//capture this first!and continue
event.type //DOMContentLoaded, load, click, mouseover, mouseout, mousemove, mouseenter, mouseleave, mousedown, mouseup, keydown, keyup, keypress, focus, blur, change, input, submit, reset, scroll, resize,animationstart, animationend, animationiteration
coolButts.removeEventListener('click', horray)
event.stopPropagation(); // STOP IN THIS Element.
event.preventDefault();


//working with Strings and Integers
String.prototype.split('separator');//returns an array
String.prototype.repeat(numberOfTimes)// 'x'.repeat(3) = 'xxx'
String.prototype.includes()// same as for Arrays
imgSrc.replace('200','400');
String.prototype.toUpperCase()
Element.replaceWith()
Number.parseFloat(string)// returns a floating point number
parseInt(string, radix)// part of the JavaScript's standard, built-in objects
string.sort()//sort alfabetically
'string'.substring(0,5);//'strin'

//Math
Math.floor(Math.random());
Math.abs();Math.ceil();Math.round();Math.max();Math.pow();

//working with Arrays
Array.isArray(value) //method determines whether the passed value is an Array.
Array.prototype.fill() // The fill() method changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). It returns the modified array.
Array(number) // creates an array of the specified length.
Array.prototype.join('a separator') //method creates and returns a new string by concatenating all of the elements
Array.prototype.push() // adds one or more elements to the end of an array and returns the new length of the array.
Array.prototype.pop()//delete the last element
Array.prototype.shift()//delete the first element
Array.prototype.unshift()
Array.prototype.slice(start, end) //start, end are optional. Shallow copy. for strings too
Array.prototype.splice(start, deleteCount, item1, item2, itemN)
Array.prototype.map() // The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
Array.prototype.forEach() // same as for Map and NodeList
Array.prototype.includes()//we have some() and every() too
Array.of(1, 2, 3); // [1, 2, 3]//...OR SPREAD AN ITERABLE
// Array.from() an ITERABLE like a NodeList, or a string!
//Will allow us to select one or more tags, with a callbackFn
Array.from([1, 2, 3], x => x + x)// Array.from({ length: 10},(item, index) => index + 1)
array.find(function(element, index, array) { /* ... */ }, thisArg)//the first that satisfies the function
array.filter(function(element, index, array) { /* ... */ }, thisArg)
array.findIndex(function(element, index, array) { /* ... */ }, thisArg)//the index of the first that satisfies the function
array.indexOf(searchElement, fromIndex)//returns the first index at which a given element can be found in the array, or -1 if it is not present.
array.lastIndexOf()
array.reverse()//reverses the order of the elements in the array
array.sort((a,b)=>{return a-b})//sort by number
array.forEach()//forEach is a method that executes a provided function once for each array element.
array.reduce(callbackFn, initialValue)


//working with Objects
"propertyNN" in Object;//returns true if the specified property is in the specified object or its prototype chain.
Object.hasOwn(object1, 'prop')//true if isn't inherited
Object.entries(meats)// returns an array. we have .keys() and .values() too
Object.fromEntries()//creates an object from an array of [key, value] pairs.




//working with Dates
//https://epoch.vercel.app/
//https://www.npmjs.com/package/date-fns
new Date(dateString)// These formats are IETF-compliant RFC 2822 timestamps, and also strings in a version of ISO8601
new Date(year, month, day, hours, minutes, seconds, milliseconds)
new Date().getTime() // returns the number of milliseconds since 1 January 1970 00:00:00 UTC.
//getFullYear(), getMonth() too

//date have to be a Date object
date.toLocaleDateString('es-AR', options)//returns the date in a string with a "regional" format.
//When formatting large numbers of dates, it is better to create an Intl.DateTimeFormat object and use its format() method.
// date can be a timeStamp or date Object
new Intl.DateTimeFormat('es-AR', options).format(date);



// Alerts, console. and more
alert(), console.log, table, dir, count, error
confirm('this website might be malicious!. Proced?')//true or false

console.groupCollapsed(`name: ${person.name}`);
console.log(`country: ${person.country}`);
console.log(`cool: ${person.cool}`);
console.log(`DONE!`);
console.groupEnd(`name: ${person.name}`);

// Promise
Promise.allSettled([])//more info individually for every result(resolve or reject)
Promise.all([])
Promise.race([])
try{}catch(){} // for the async await

//TIMERS
setTimeout(callbackFn, ms);
setInterval(callbackFn, ms);
clearInterval(reference), clearTimeout(reference);


// HOT-TIPS
window.location = event.currentTarget.href;
const { width, height } = canvas; // Declaring 2 variables at once.ES6 destructuring
function draw({ key }){}//destructuring "key" property as parameter from an {}
Object.entries(meats).forEach(([item, qty]) => console.log(item, qty));//destructuring from an []
[prev, current, next] = [current, next, current];//[1 2 3]=[2 3 2]!!don't run individually-SWAPPING VARIABLES CONTENT
//data-type-min --> dataset.typeMin
const desc = card.dataset.description; //getting dataset attributes
const isOutside = !event.target.closest('.modal-inner');
buttonClicked.closest('.playerCard').remove();
const calculator = utilities.calc.call(localTaxes, 0.15, 21)//localTaxes:the object binded. bind and apply too. bind needs an array as an argument;

// MODULES - LIBRARIES

// Servers
// servers and bundlers = ["parcel", "live-server","browser-sync", "pika", "webpack", "rollup" ]

// modules 
// CommonJs
var format = require('date-fns/format')
// ES 2015
import format from 'date-fns/format'
// ESM
import { format } from 'date-fns'
import colorDePelo,  {returnHi as sayHi} from './utils.js';//one "default", and one "renamed" (as) import