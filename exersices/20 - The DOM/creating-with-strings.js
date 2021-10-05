const item = document.querySelector('.items');
console.log(item);
const width = 500;
const desc = 'Cute Pup!';
const src = `https://source.unsplash.com/random/${width}x${width}`;
const myHtml = `
<div class="wrapper">
<img src="${src}" alt="${desc}">
</div>
`;

// -----------------------------WITH innerHTML--------------------
/*
item.innerHTML = myHtml; // will replace the innerHTML of the element with the string.
console.log(item.innerHTML);
console.log(typeof myHtml); // STRING
// myHtml will become an element, when it is inserted into the DOM.
// myHtml.classList.add('clear'); // WE CAN'T DO THIS.
// WE HAVE TO DO THIS TO ADD CLASS TO THE ELEMENT.
const itemImg = document.querySelector('.wrapper img'); // when it's loaded.
itemImg.classList.add('round');
function toggleRound() {
  itemImg.classList.toggle('round');
}
itemImg.addEventListener('click', toggleRound);
*/

// --------- WITH createRange().createContextualFragment()----------------
const myFragment = document.createRange().createContextualFragment(myHtml);
// myFragment is a DOCUMENT FRAGMENT, in spite of myHtml wich is a string.
// document.body.insertAdjacentElement('afterbegin', myFragment);WE CAN'T DO THIS.
// BUT we can use insertAdjacentElement inside the fragment, managing it's elements.
const spa = document.createElement('span');
myFragment.firstElementChild.insertAdjacentElement('afterbegin', spa);
// IS NOT AN ELEMENT NODE.It stores a segment of a document structure comprised of nodes
// just like a standard document.
const img1 = myFragment.querySelector('.wrapper img');
img1.classList.add('round'); // BEFORE IT'S LOADED TO THE DOM!
document.body.appendChild(myFragment); // after the last child node in the body.
