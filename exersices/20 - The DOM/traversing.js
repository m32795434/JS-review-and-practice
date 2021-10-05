const wes = document.querySelector('.wes');
/*
console.log(wes.children); // child elements.
console.log(wes.firstElementChild);
console.log(wes.lastElementChild);
console.log(wes.previousElementSibling); //previous element in the same level.
console.log(wes.nextElementSibling);
console.log(wes.parentElement);
*/
/*
console.log(wes.childNodes);
// FOR NODES!:

el.childNodes
el.firstChild
el.lastChild
el.previousSibling
el.nextSibling
el.parentNode
*/

const p = document.createElement('p');
p.textContent = 'I wil be removed';
document.body.appendChild(p);

p.remove(); // it's removed from the DOM tree.
console.log(p); // the variable is still allive.
