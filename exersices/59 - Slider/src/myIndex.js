class Slider {
  constructor(slider) {
    this.slider = slider;
    this.slides = slider.querySelector('.slides');
    this.slidesArray = Array.from(this.slider.querySelectorAll('.slide'));
    this.prevButton = this.slider.querySelector('.goToPrev');
    this.nextButton = this.slider.querySelector('.goToNext');
    // initialize
    this.currentSlide = this.slidesArray.find((slide) =>
      slide.matches('.current')
    );/*eslint-disable*/
    (this.nextSlide =
      (this.currentSlide.nextElementSibling || this.slides.firstElementChild)) &&
      this.nextSlide.classList.add('next');
    (this.previousSlide =
      (this.currentSlide.previousElementSibling ||
      this.slides.lastElementChild)) && this.previousSlide.classList.add('prev');
    /* eslint-enable */
    // bindings?
    this.showNext = this.showNext.bind(this);

    // eventsListeners
    /*eslint-disable*/
    this.nextButton.addEventListener('click', this.showNext);
    this.prevButton.addEventListener('click', this.showPrev);
    /* eslint-enable */
  }
/*eslint-disable*/
  showNext(e) {
    console.log('showing next');
    (this.previousSlide = (this.previousSlide.nextElementSibling || this.slides.firstElementChild))&& this.previousSlide.classList.replace('current', 'prev');
    (this.currentSlide = (this.currentSlide.nextElementSibling || this.slides.firstElementChild))&& this.currentSlide.classList.replace('next', 'current');
    (this.nextSlide = (this.nextSlide.nextElementSibling|| this.slides.firstElementChild))&& this.nextSlide.classList.add('next');
  }

  /* eslint-enable */
  showPrev(e) {
    console.log(e);
  }
}

const slider1 = new Slider(document.querySelector('.slider'));
const slider2 = new Slider(document.querySelector('.dog-slider'));
