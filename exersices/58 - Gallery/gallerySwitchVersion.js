function Gallery(gallery) {
  if (!gallery) {
    throw new Error('There is no gallery!');
  }
  const images = Array.from(gallery.querySelectorAll('img'));
  const modal = document.querySelector('.modal');
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');
  let currentImg;

  function openModal() {
    modal.classList.add('open');
    modal.addEventListener('click', handleClickEvents);
    window.addEventListener('keyup', handleKeyUp);
  }

  function closeModal() {
    modal.classList.remove('open');
    modal.removeEventListener('click', handleClickEvents);
    window.removeEventListener('keyup', handleKeyUp);
  }

  function showImage(el) {
    if (!el) {
      console.info('no image!');
      return;
    }
    // show iamge / update modal
    modal.querySelector('img').src = el.src;
    modal.querySelector('h2').textContent = el.title;
    modal.querySelector('p').textContent = el.dataset.description;
    currentImg = el;

    if (!modal.classList.contains('open')) {
      openModal();
    }
  }
  function showNextImg() {
    if (currentImg) {
      const next = currentImg.nextElementSibling || gallery.firstElementChild;
      showImage(next);
    }
  }
  function showPrevImg() {
    if (currentImg) {
      const previous =
        currentImg.previousElementSibling || gallery.lastElementChild;
      showImage(previous);
    }
  }

  // handleEvents

  function handleClickEvents(e) {
    const { target } = e;
    switch (target) {
      case modal:
        closeModal();
        break;
      case prevButton:
        showPrevImg();
        break;
      case nextButton:
        showNextImg();
        break;
      default:
        break;
    }
  }

  function handleKeyUp(e) {
    const { key } = e;
    console.log(key);
    switch (key) {
      case 'Escape':
        closeModal();
        break;
      case 'ArrowRight':
        showNextImg();
        break;
      case 'ArrowLeft':
        showPrevImg();
        break;
      default:
        break;
    }
  }

  // images event Listeners
  images.forEach((img) => {
    img.addEventListener('click', (e) => {
      showImage(e.currentTarget);
    });
    img.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        showImage(e.currentTarget);
      }
    });
  });
}

// Ejecution
const gallery1 = Gallery(document.querySelector('.gallery1'));
const gallery2 = Gallery(document.querySelector('.gallery2'));
