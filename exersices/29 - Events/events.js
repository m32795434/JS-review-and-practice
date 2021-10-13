console.log('hey!');
const butts = document.querySelector('.butts');
const coolButts = document.querySelector('.cool');

function handleClick() {
  console.log('clicked');
}
const horray = () => {
  console.log('horray');
};
// The addEventListener() method attaches an event handler to the specified element.
butts.addEventListener('click', handleClick);
coolButts.addEventListener('click', horray);
coolButts.removeEventListener('click', horray); // REMOVE THE EVENTLISTENER FOR THIS FUNCTION
// LISTEN ON MULTIPLE ITEMS
const buyButtons = document.querySelectorAll('button.buy');
/*
function buyItem() { //the event handler(I think!)
  console.log('Item purchased!');
}
function loopOverEachButton(buyButton) {
  buyButton.addEventListener('click', buyItem);
}
buyButtons.forEach(loopOverEachButton);
*/

// OR... ALL IN ONE!
/*
buyButtons.forEach((buyButton) => {
  buyButton.addEventListener('click', () => {
    // we can use here the "(event)"
    console.log('Item Purchased!');
  });
});
*/

function handleBuyButtonClick(event) {
  console.log('you clicked a button!');
  // console.log(event);
  console.log(event.target); // identifies the element on which the event occurred
  console.log(event.currentTarget);
  /* It always refers to the element to which the event handler has been attached
  (here, each button), as opposed to Event.target, which identifies the element on 
  which the event occurred and which may be its descendant. */
  console.log(event.target === event.currentTarget);
  // console.log(button.textContent);
  // console.log(parseFloat(event.target.dataset.price));
  // STOP BUBBLING UP - STOP PROPAGATION!
  // event.stopPropagation(); // STOP IN THIS PHASE.
}

buyButtons.forEach((buyButton) => {
  buyButton.addEventListener('click', handleBuyButtonClick);
});

/* if we have .stopPropagation() in other function, in the bubbling 
phase, the next won't work */
window.addEventListener(
  'click',
  (event) => {
    // event.stopPropagation(); // STOP IN THIS PHASE.
    console.log('window clicked!');
    console.log(event.target);
    console.log(event.type); // click
    console.log(event.bubbles); // if it allowed to bubble up the event.
  },
  { capture: true } // will start in the capture order!, in the capture phase! Without this, we start in the bubbling phase.
);
/* eslint-disable*/
const photoEl = document.querySelector('.photo');
photoEl.addEventListener('mouseenter', function(e) {
  console.log(e.currentTarget);
  console.log(this); // this is the element on which the event handler has been attached, if we are in a "regular" function.
});
