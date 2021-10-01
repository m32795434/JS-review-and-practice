// ------------------------CREATING HTML!!-------------
const myParagraph = document.createElement('p');
myParagraph.classList.add('special');
myParagraph.textContent = 'This is a paragraph';
console.log(myParagraph);

const myImage = document.createElement('img');
myImage.src = 'https://source.unsplash.com/random/400x400';
myImage.alt = 'Nice Pic!';
console.log(myImage);

const myDiv = document.createElement('div');
myDiv.classList.add('wrapper');
console.log(myDiv);
// this first, to avoid some reflow.
myDiv.appendChild(myParagraph);
myDiv.appendChild(myImage);
document.body.appendChild(myDiv); // at the end.

const heading = document.createElement('h2');
heading.textContent = 'Cool things!!';

myDiv.insertAdjacentElement('beforebegin', heading);

// EXCERCISE:
const p = document.createElement('p');
p.textContent = 'This is my Unorder List';
const myUl = document.createElement('ul');
const myLi1 = document.createElement('li');
myLi1.textContent = 'First item';
const myLi2 = document.createElement('li');
myLi2.textContent = 'Second item';
const myLi3 = document.createElement('li');
myLi3.textContent = 'Third item';
const myLi4 = myLi3.cloneNode(true); // clone the node. True: deep clone (all the data, properties).
myLi4.textContent = 'Fourth item';
const myLi5 = myLi3.cloneNode(true);
myLi5.textContent = 'Fifth item';

myUl.appendChild(myLi1);
myUl.appendChild(myLi2); // only one item.
myUl.append('I am only a node text, not an item'); // allow to add a DOMString
myUl.append(myLi4, myLi5); // .append() allows you to add more than one element.
document.body.insertAdjacentElement('afterbegin', myUl);
myUl.insertAdjacentElement('beforebegin', p);
// we have prepend(), after(), before(), replaceWith() too.
