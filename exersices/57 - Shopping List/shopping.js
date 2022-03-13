const shoppingForm = document.querySelector('.shopping');
const list = document.querySelector('.list');

// we need an array to hold our state
const items = [];

function handleSubmit(e) {
  e.preventDefault();
  console.log('submitedd!!');
  const name = e.currentTarget.item.value;
  const item = {
    name,
    id: Date.now(),
    complete: false,
  };
  // push the item into our state
  items.push(item);
  console.log(`there are now ${items.length} items in the list`);
  // clear the input
  //   e.currentTarget.item.value = '';
  // clear all the inputs of our form
  e.target.reset();
  displayItems();
}

function displayItems() {
  console.log(items);
  /* eslint-disable*/
  const html = items.map(item => `<li>${item.name}</li>`).join('');
  /* eslint-enable */

  console.log(html);
}

shoppingForm.addEventListener('submit', handleSubmit);
