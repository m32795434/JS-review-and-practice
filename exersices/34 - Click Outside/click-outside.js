const cardButtons = document.querySelectorAll('.card button');
const modalOuter = document.querySelector('.modal-outer');
const modalInner = document.querySelector('.modal-inner');
function handleCardButtonClick(event) {
  const button = event.currentTarget;
  const card = button.closest('.card');
  // grab the img source
  const imgSrc = card.querySelector('img').src;
  const desc = card.dataset.description;
  const name = card.querySelector('h2').textContent;
  // populate the modal with the new info
  modalInner.innerHTML = `
<img width="400" height="400" src="${imgSrc.replace(
    '200',
    '400'
  )}" alt="${name}"/>
<p>${desc}</p>
`;
  // show the modal
  modalOuter.classList.add('open');
}
cardButtons.forEach((button) =>
  button.addEventListener('click', handleCardButtonClick)
);
function closeModal() {
  modalOuter.classList.remove('open');
}

modalOuter.addEventListener('click', (event) => {
  // we ensure, we clicked something else than the modalInner
  const isOutside = !event.target.closest('.modal-inner');
  if (isOutside) {
    closeModal();
  }
});
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal();
  }
});
