function Gallery(gallery) {
  if (!gallery) {
    // return;
    throw new Error('Gallery is not found!!!!');
  }
  // select the elements we need
  const images = Array.from(gallery.querySelectorAll('img'));
  const modal = document.querySelector('.modal');
  const prevButton = modal.querySelector('.prev');
  const nextButton = modal.querySelector('.next');
  let currentImage;

  function closeModal() {
    modal.classList.remove('open');
    // EVENT LISTENERS TO BE REMOVED WHEN WE CLOSE THE MODAL
    window.removeEventListener('keyup', handleKeyUp);
    prevButton.removeEventListener('click', showPrevImage);
    nextButton.removeEventListener('click', showNextImage);
  }
  function handleClickOutside(e) {
    // have we clicked the modal?
    if (e.target === modal) {
      closeModal();
    }
  }
  function handleKeyUp(e) {
    if (e.key === 'Escape') return closeModal();
    if (e.key === 'ArrowRight') return showNextImage();
    if (e.key === 'ArrowLeft') return showPrevImage();
  }
  function openModal() {
    console.info('opening modal...');
    // check if the modal is open
    if (modal.matches('.open')) {
      console.info('modal already open');
      return;
    }
    modal.classList.add('open');
    // EVENT LISTENERS TO BE BOUND WHEN WE OPEN THE MODAL
    window.addEventListener('keyup', handleKeyUp);
    nextButton.addEventListener('click', showNextImage);
    prevButton.addEventListener('click', showPrevImage);
    modal.addEventListener('click', handleClickOutside);
  }
  function showImage(el) {
    if (!el) {
      console.info('no image to show');
      return;
    }
    // update the modal with this info
    console.log(el);
    modal.querySelector('img').src = el.src;
    modal.querySelector('h2').textContent = el.title;
    modal.querySelector('figure p').textContent = el.dataset.description;
    currentImage = el;
    openModal();
  }
  function showNextImage() {
    // || gallery.firstElementChild
    showImage(currentImage.nextElementSibling || images[0]);
  }
  function showPrevImage() {
    // || gallery.lastElementChild
    showImage(currentImage.previousElementSibling || images[images.length - 1]);
  }

  // EVENT LISTENERS
  images.forEach((image) => {
    image.addEventListener('click', (e) => {
      showImage(e.currentTarget);
    });
    image.addEventListener('keyup', (e) => {
      if (e.key === 'Enter') showImage(e.currentTarget);
    });
  });
  // modal.addEventListener('click', handleClickOutside); lo inserté arriba en openModal
}

// use it on the page
const gallery1 = Gallery(document.querySelector('.gallery1'));
const gallery2 = Gallery(document.querySelector('.gallery2'));
