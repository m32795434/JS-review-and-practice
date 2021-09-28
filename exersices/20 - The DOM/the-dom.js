/* The Document Object Model (DOM) is a cross-platform and language-independent 
interface that treats an XML or HTML document as a tree structure wherein each node 
is an object representing a part of the document. */

const p = document.querySelectorAll('p'); // a node list;
console.log(p);
const subDivH2 = document.querySelector('.sub-div-h2');
console.log(subDivH2);
const itemsImg = document.querySelector('.items img');
console.log(itemsImg);
const itemsDiv = document.querySelector('.items');
const itemsSubDiv = itemsDiv.querySelector('div');
console.log(itemsSubDiv);
const firstP = document.querySelector('#first-p');
console.log(firstP);
// its the same as:
const firstP2 = document.getElementById('first-p');
console.log(firstP2);
