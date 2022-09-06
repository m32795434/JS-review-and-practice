const shoppingForm = document.querySelector('.shopping');
const list = document.querySelector('.list');

let items = [];

function displayItems() {
  const html = items
    .map(
      (item) => `
  <li class="shopping-item">
  <input 
  value="${item.id}"
  type="checkbox" 
  ${item.complete && 'checked'}>
  <span class="itemName">${item.name}</span>
  <button aria-label="Remove ${item.name}"
  value="${item.id}">
  &times;
  </button>
  </li>
  `
    )
    .join('');
  list.innerHTML = html;
}

function handleSubmit(e) {
  e.preventDefault();
  const name = e.currentTarget.item.value;
  const i = items.findIndex((item) => item.name === name);
  if (!(i === -1)) {
    e.currentTarget.reset();
    return;
  }
  const obj = {
    name,
    id: Date.now(),
    complete: false,
  };
  items.push(obj);
  e.currentTarget.reset();
  list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

function mirrorToLocalStorage() {
  localStorage.setItem('items', JSON.stringify(items));
}
function restoreFromLocalStorage() {
  items = JSON.parse(localStorage.items);
  displayItems();
}
function markAsComplete(value) {
  const itemRef = items.find((item) => item.id === parseInt(value));
  itemRef.complete = !itemRef.complete;
  mirrorToLocalStorage();
}

function deleteItem(value) {
  items = items.filter((item) => item.id !== parseInt(value));
  list.dispatchEvent(new CustomEvent('itemsUpdated'));
}
shoppingForm.addEventListener('submit', handleSubmit);
list.addEventListener('itemsUpdated', displayItems);
list.addEventListener('itemsUpdated', mirrorToLocalStorage);

list.addEventListener('click', (e) => {
  const { value } = e.target;
  if (e.target.matches('button')) {
    deleteItem(value);
  }
  if (e.target.matches('input[type="checkbox"]')) {
    markAsComplete(value);
  }
});

// restoreFromLocalStorage();
