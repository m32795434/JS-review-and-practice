// Make a div
const div = document.createElement('div');
// Add a class of wrapper to it
div.classList.add('wrapper');
// Append the div to the body
document.body.appendChild(div);

// make an unorder list
const ul = `
<ul>
<li> one </li>
<li> two </li>
<li> three </li>
</ul>`;
// put the list inside the div
div.innerHTML = ul;

// create an image
const img = document.createElement('img');
// set the source
img.src = 'https://picsum.photos/500';
// set the width and height to 250
img.width = 250;
img.height = 250;
img.classList.add('cut');
img.alt = 'cut pup!';
// append the image to the div
div.appendChild(img);
// make a div with two p
const myHTML = `
<div class="myDiv">
<p> this is the first p </p>
<p> this is the second p </p>
</div>`;
// put this div before the unorder list
div.insertAdjacentHTML('beforebegin', myHTML); // WE DON'T HAVE AN ELEMENT!
const myDiv = document.querySelector('.myDiv');
// add a class to the second p and delete the first p
myDiv.children[1].classList.add('warning');
myDiv.firstElementChild.remove();
// create a function called generatePlayerCard that takes in three arguments: name, age, and height
// I did the same
function generatePlayerCard(name, age, height) {
  return `
      <div class="playerCard">
          <h2>${name} — ${age}</h2>
          <p>Their height is ${height} and is ${age} years old. In Dog years this person would be ${
    age * 7
  }. 
          That would be a tall dog!</p>
          <button class="delete" type= "button">&times DELETE</button> 
        </div>
  `;
}
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards
const cards = document.createElement('div');
cards.classList.add('cards');
// make 4 player cards using generatePlayerCard
const cardsHTML =
  generatePlayerCard('John', 23, 1.8) +
  generatePlayerCard('Jane', 20, 1.6) +
  generatePlayerCard('Jim', 22, 1.9) +
  generatePlayerCard('Bob', 25, 1.7);
/* or!
cardsHTML += generatePlayerCard('Mary', 30, 1.5);
cardsHTML += generatePlayerCard('Bob', 20, 1.9);
cardsHTML += generatePlayerCard('Sam', 45, 1.7);
*/
cards.innerHTML = cardsHTML;
div.insertAdjacentElement('beforebegin', cards);
// select all the buttons!
const buttons = document.querySelectorAll('.delete');
// make out delete function
function deleteCard(event) {
  const buttonClicked = event.currentTarget;
  // all of these works!
  // buttonClicked.parentNode.remove();
  // buttonClicked.parentElement.remove();
  buttonClicked.closest('.playerCard').remove();
}
// loop over them and add a listener
buttons.forEach((button) => button.addEventListener('click', deleteCard));
