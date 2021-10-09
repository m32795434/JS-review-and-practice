// Make a div
const container = document.createElement('div');
// add a class of wrapper to it
container.classList.add('wrapper');
// put it into the body
document.body.appendChild(container);
// make an unordered list
// add three list items with the words "one, two, three" in them
// put that list into the above wrapper

// create an image
// set the source to an image
// set the width to 250
// add a class of cute
// add an alt of Cute Puppy

// Append that image to the wrapper
const listImgHtml = `
<ul>
    <li>one</li>
    <li>two</li>
    <li>three</li>
</ul>
<img src="https://source.unsplash.com/random/300x300" width="250" class="cute" alt="Cute Puppy" >
`;
container.innerHTML = listImgHtml;
// with HTML string, make a div, with two paragraphs inside of it
const div2 = document.createElement('div');
const Parag = `
<div>
    <p>lorem ipsum*500 </p>
    <p>lorem ipsum*100 </p>
</div>`;
div2.innerHTML = Parag;
// put this div before the unordered list from above
container.insertAdjacentElement('afterbegin', div2);
// add a class to the second paragraph called warning
const p = document.querySelector('p');
const secondP = p.nextElementSibling;
secondP.classList.add('warning');
// remove the first paragraph
p.remove();
// create a function called generatePlayerCard that takes in three arguments: name, age, and height
function generatePlayerCard(name, age, height) {
  return `
    <div class="playerCard">
        <h2>${name} — ${age}</h2>
        <p>Their height is ${height} and is ${age} years old. In Dog years this person would be ${
    age * 7
  }. 
        That would be a tall dog!</p>
        <button class="delete" type="button">DELETE</button>
    </div>
`;
}
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards
const divCards = document.createElement('div');
divCards.classList.add('cards');
// make 4 player cards using generatePlayerCard
const player1 = generatePlayerCard('John', 23, 1.8);
const player2 = generatePlayerCard('Mary', 30, 1.5);
const player3 = generatePlayerCard('Bob', 20, 1.9);
const player4 = generatePlayerCard('Sam', 45, 1.7);
// append those cards to the div
divCards.innerHTML = player1 + player2 + player3 + player4;
// put the div into the DOM just before the wrapper element
container.insertAdjacentElement('beforebegin', divCards);
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

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
