/* The DOM is an API that represents a document with a logical tree. Each branch of the tree 
ends in a node, and each node contains objects. DOM methods allow programmatic 
access to the tree. With them, you can change the document's structure, style, 
or content.
node: e.g: the document, an element, text like "string",a comment like <!--  -->, etc.
object: e.g: Document, Element, and DocumentFragment
element: those set by tags e.g: <div>, <p>, <span>, <h1>, etc. => tag= <element-name>
https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType

The DOM Node interface is an abstract base class upon which many other DOM API 
objects are based, thus letting those object types to be used similarly and often 
interchangeably.  All objects that implement Node functionality are based on one 
of its subclasses. Most notable are Document, Element, and DocumentFragment.

All of the properties, methods, and events available for manipulating and creating 
web pages are organized into objects. For example, the document object that represents
the document itself, or any table objects that implement the "HTMLTableElement DOM 
interface" for accessing HTML tables, and so forth, are all objects.

Element is the most general base class from which all element objects (i.e. objects
that represent elements) in a Document inherit.
For example, the "HTMLElement" interface is the base interface for HTML elements.
Element inherits properties from its parent interface, Node, and by extension that 
interface's parent, "EventTarget"

NodeList objects are collections of nodes, usually returned by properties such as 
Node.childNodes and methods such as document.querySelectorAll(). It's not an array.
*/
/*
 
document: DOM interface. is the root node of the DOM tree.
querySelectorAll(): method.
textContent: property.



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
console.log(firstP2); */
/*
const heading = document.querySelector('h1');
// console.dir(heading); // show all the object properties
console.log(
  heading.textContent
); /* show all the text content, including the text 
inside script and style the tags. Will show even hidden items */
// OR:
// const heading2 = document.querySelector('h1').textContent;
/*
console.log(heading.innerText); // does't include the script or style elements(tags).
heading.textContent = 'Hello World'; // change the content(remove other elements).
console.log(heading.textContent);
const itemsDiv = document.querySelector('.items');
console.log(`the innerHTML${itemsDiv.innerHTML}`); // show all the elements inside the div
console.log(`the outer ${itemsDiv.outerHTML}`); // include the tag
const firstP2 = document.querySelector('#first-p');
// firstP2.textContent = `${firstP2.textContent} 👧`; this render slower than what's next one...
firstP2.insertAdjacentText('beforeend', '🍕');
*/
