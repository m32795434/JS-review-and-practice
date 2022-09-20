/*eslint-disable*/
class Gallery {
  constructor(gallery){
    this.gallery = gallery;
    if (!this.gallery) {
      throw new Error('There is no gallery!');
    }
    this.modal = document.querySelector('.modal');
    this.images = Array.from(this.gallery.querySelectorAll('img'));
    this.prevButton = document.querySelector('.prev');
    this.nextButton = document.querySelector('.next');
    this.currentImg;

    this.images.forEach((img) => {
      img.addEventListener('click', (e) => {
        this.showImage(e.currentTarget);
      });
      img.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          this.showImage(e.currentTarget);
        }
      });
    });
    //bindings
    this.handleClickEvents = this.handleClickEvents.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);

  }

  openModal() {
    this.modal.classList.add('open');
    this.modal.addEventListener('click', this.handleClickEvents);
    window.addEventListener('keyup', this.handleKeyUp);
  }

  closeModal() {
    this.modal.classList.remove('open');
    this.modal.removeEventListener('click', this.handleClickEvents);
    window.removeEventListener('keyup', this.handleKeyUp);
  }

  showImage(el) {
    if (!el) {
      console.info('no image!');
      return;
    }
    // show iamge / update modal
    this.modal.querySelector('img').src = el.src;
    this.modal.querySelector('h2').textContent = el.title;
    this.modal.querySelector('p').textContent = el.dataset.description;
    this.currentImg = el;
    console.log(el, this.currentImg);

    if (!this.modal.classList.contains('open')) {
      this.openModal();
    }
  }
  showNextImg() {
    if (this.currentImg) {
      const next = this.currentImg.nextElementSibling || this.gallery.firstElementChild;
      this.showImage(next);
    }
  }
  showPrevImg() {
    if (this.currentImg) {
      const previous =
        this.currentImg.previousElementSibling || this.gallery.lastElementChild;
      this.showImage(previous);
    }
  }

  // handleEvents

  handleClickEvents(e) {
    console.log(this);
    const { target } = e;
    switch (target) {
      case this.modal:
        this.closeModal();
        break;
      case this.prevButton:
        this.showPrevImg();
        break;
      case this.nextButton:
        this.showNextImg();
        break;
      default:
        break;
    }
  }

  handleKeyUp(e) {
    console.log(this)
    const { key } = e;
    console.log(key);
    switch (key) {
      case 'Escape':
        this.closeModal();
        break;
      case 'ArrowRight':
        this.showNextImg();
        break;
      case 'ArrowLeft':
        this.showPrevImg();
        break;
      default:
        break;
    }
  }
}

// Ejecution
const gallery1 = new Gallery(document.querySelector('.gallery1'));
const gallery2 = new Gallery(document.querySelector('.gallery2'));
