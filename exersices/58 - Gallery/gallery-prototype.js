function Gallery(gallery) {
  if (!gallery) {
    // return;
    throw new Error('Gallery is not found!!!!');
  }
  this.gallery = gallery;
  // select the elements we need
  this.images = Array.from(gallery.querySelectorAll('img'));
  this.modal = document.querySelector('.modal');
  this.prevButton = this.modal.querySelector('.prev');
  this.nextButton = this.modal.querySelector('.next');

  // bind our methods to the instance if we need them
  this.showNextImage = this.showNextImage.bind(this);
  this.showPrevImage = this.showPrevImage.bind(this);
  this.handleClickOutside = this.handleClickOutside.bind(this);
  this.handleKeyUp = this.handleKeyUp.bind(this);

  // EVENT LISTENERS
  this.images.forEach((image) => {
    image.addEventListener('click', (e) => {
      this.showImage(e.currentTarget);
    });
    image.addEventListener('keyup', (e) => {
      if (e.key === 'Enter') this.showImage(e.currentTarget);
    });
  });
  // modal.addEventListener('click', handleClickOutside); lo inserté arriba en openModal
}

Gallery.prototype.closeModal = function () {
  this.modal.classList.remove('open');
  // EVENT LISTENERS TO BE REMOVED WHEN WE CLOSE THE MODAL
  window.removeEventListener('keyup', this.handleKeyUp);
  this.prevButton.removeEventListener('click', this.showPrevImage);
  this.nextButton.removeEventListener('click', this.showNextImage);
};
Gallery.prototype.handleClickOutside = function (e) {
  // this was the modal, now is the gallery
  // have we clicked the modal?
  if (e.target === this.modal) {
    this.closeModal();
  }
};
Gallery.prototype.handleKeyUp = function (e) {
  console.log(this);
  if (e.key === 'Escape') return this.closeModal();
  if (e.key === 'ArrowRight') return this.showNextImage();
  if (e.key === 'ArrowLeft') return this.showPrevImage();
};
Gallery.prototype.openModal = function () {
  // "this" is the gallery
  console.info('opening modal...');
  // check if the modal is open
  if (this.modal.matches('.open')) {
    console.info('modal already open');
    return;
  }
  this.modal.classList.add('open');
  // EVENT LISTENERS TO BE BOUND WHEN WE OPEN THE MODAL
  window.addEventListener('keyup', this.handleKeyUp);
  this.nextButton.addEventListener('click', this.showNextImage);
  this.prevButton.addEventListener('click', this.showPrevImage);
  this.modal.addEventListener('click', this.handleClickOutside);
};
Gallery.prototype.showImage = function (el) {
  if (!el) {
    console.info('no image to show');
    return;
  }
  // update the modal with this info
  console.log(el);
  this.modal.querySelector('img').src = el.src;
  this.modal.querySelector('h2').textContent = el.title;
  this.modal.querySelector('figure p').textContent = el.dataset.description;
  this.currentImage = el;
  this.openModal();
};
Gallery.prototype.showNextImage = function () {
  // this was the button, now is the gallery
  // || gallery.firstElementChild
  this.showImage(this.currentImage.nextElementSibling || this.images[0]);
};
Gallery.prototype.showPrevImage = function () {
  // || gallery.lastElementChild
  this.showImage(
    this.currentImage.previousElementSibling ||
      this.images[this.images.length - 1]
  );
};

// use it on the page
const gallery1 = new Gallery(document.querySelector('.gallery1'));
const gallery2 = new Gallery(document.querySelector('.gallery2'));
console.log(gallery1, gallery2);
