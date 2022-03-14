const shoppingForm = document.querySelector('.shopping');
const list = document.querySelector('.list');

// we need an array to hold our state
let items = [];

function handleSubmit(e) {
  e.preventDefault();
  const name = e.currentTarget.item.value;
  if (!name) return;
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

  // fire off a custom event that will tell anyone else who cares that the items have been updated!
  list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

function displayItems() {
  console.log(items);
  /* eslint-disable*/
  const html = items.map(item => `<li class="shopping-item">
  <input 
  value="${item.id}"
  type="checkbox"
  ${item.complete && 'checked'}>
  <span class="itemName">${item.name}</span>
  <button 
  aria-label="Remove ${item.name}"
  value="${item.id}"
  >&times;</button>
    </li>`).join('');
  /* eslint-enable */

  list.innerHTML = html;
}
function mirrorToLocalStorage() {
  console.log('saving items');
  localStorage.setItem('items', JSON.stringify(items));
}
function restoreFromLocalStorage() {
  console.log('restoring from local storage');
  // pull the items from local storage
  const lsItems = JSON.parse(localStorage.getItem('items'));
  if (lsItems.length) {
    items.push(...lsItems);
    /* another way to do this:
    1) items = lsItems
    2) lsItems.forEach(item => items.push(item)); */
    list.dispatchEvent(new CustomEvent('itemsUpdated'));
  }
}
function deleteItem(id) {
  console.log(`deleting item with id ${id}`);
  items = items.filter((item) => item.id !== id);
  list.dispatchEvent(new CustomEvent('itemsUpdated'));
}
function markAsComplete(id) {
  console.log('marking as complete', id);
  const itemRef = items.find((item) => item.id === id);
  itemRef.complete = !itemRef.complete;
  list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

shoppingForm.addEventListener('submit', handleSubmit);
list.addEventListener('itemsUpdated', displayItems);
list.addEventListener('itemsUpdated', mirrorToLocalStorage);
// AN EVENT DELEGATION!
list.addEventListener('click', (event) => {
  const id = parseInt(event.target.value);
  if (event.target.matches('button')) {
    deleteItem(id);
  }
  if (event.target.matches('input[type="checkbox"]')) {
    markAsComplete(id);
  }
});

restoreFromLocalStorage();
