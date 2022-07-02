/* eslint-disable */
//Math
Math.floor()

// Checking type of Elements
typeof myHtml; // STRING


// DOM Manipulation
document.querySelector('') // AND document.querySelectorAll('')
document.createElement('span');
const myFragment = document.createRange().createContextualFragment(myHtml); // from a string
let myfragment1 = new DocumentFragment();// empty document fragment
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
myFragment.firstElementChild.insertAdjacentElement('afterbegin', spa)
document.body.appendChild(myFragment)//Node.appendChild()
myUl.append(myLi4, myLi5, myLi3)//append more than one element and DOMstring
myDiv.firstElementChild.remove();
buttonClicked.closest('.playerCard').remove();
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
element.classList.add('class');// or .remove()
itemImg.classList.toggle('round');
myImage.src = 'https://source.unsplash.com/random/400x400';// setting attributes
pic.setAttribute('alt', 'random2'); // onother way. Even for non-standard attributes.
pic.getAttribute('alt')
pic.removeAttribute('alt');
tab.ariaSelected = false; //Camel case method for "aria-selected". I prefer setAttribute();

//Event Listeners
itemImg.addEventListener('click', toggleRound, { capture: true, once: true })//capture this first!and continue
event.type //load, click, mouseover, mouseout, mousemove, mouseenter, mouseleave, mousedown, mouseup, keydown, keyup, keypress, focus, blur, change, input, submit, reset, scroll, resize,animationstart, animationend, animationiteration
coolButts.removeEventListener('click', horray)
event.stopPropagation(); // STOP IN THIS Element.
event.preventDefault();


//working with Strings and Integers
String.prototype.repeat(numberOfTimes)// 'x'.repeat(3) = 'xxx'
Number.parseFloat(string)// returns a floating point number
parseInt(string, radix)// part of the JavaScript's standard, built-in objects
String.prototype.includes()// same as for Arrays
Math.floor(Math.random())
imgSrc.replace('200','400');
String.prototype.toUpperCase()


//working with Arrays
Array.isArray(value) //method determines whether the passed value is an Array.
Array.prototype.fill() // The fill() method changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). It returns the modified array.
Array(number) // creates an array of the specified length.
Array.prototype.join('a separator') //method creates and returns a new string by concatenating all of the elements
Array.prototype.push() // adds one or more elements to the end of an array and returns the new length of the array.
Array.prototype.slice(start, end) //start, end are optional. Shallow copy. for strings too
Array.prototype.splice(start, deleteCount, item1, item2, itemN)
Array.prototype.map() // The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
Array.prototype.forEach() // same as for Map and NodeList
Array.prototype.includes()
Array.from("a nodeList for example");
Array.prototype.find(callback(element[, index[, array]])[, thisArg]);
Array.prototype.findIndex(callback( element[, index[, array]] )[, thisArg])
Array.prototype.indexOf(searchElement[, fromIndex])


//working with Objects


//working with Dates
//https://epoch.vercel.app/
//https://www.npmjs.com/package/date-fns
new Date(dateString)// These formats are IETF-compliant RFC 2822 timestamps, and also strings in a version of ISO8601
new Date(year, month, day, hours, minutes, seconds, milliseconds)
new Date().getTime() // returns the number of milliseconds since 1 January 1970 00:00:00 UTC.
//the same as above
Date.now()


// Alerts, console. and more
alert(), console.log, table, dir, count
confirm('this website might be malicious!. Proced?')//true or false

console.groupCollapsed(`name: ${person.name}`);
console.log(`country: ${person.country}`);
console.log(`cool: ${person.cool}`);
console.log(`DONE!`);
console.groupEnd(`name: ${person.name}`);


// HOT-TIPS
window.location = event.currentTarget.href;
const { width, height } = canvas; // ES6 destructuring
function draw({ key }){}//destructuring all the properties of an object as parameters
const desc = card.dataset.description;//getting dataset attributes
const isOutside = !event.target.closest('.modal-inner');
