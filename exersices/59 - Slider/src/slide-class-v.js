class Slider {
  constructor(slider) {
    if (!(slider instanceof Element)) throw new Error('no slider detected!!');
    this.slider = slider;
    this.slides = slider.querySelector('.slides');
    this.slidesArray = Array.from(this.slider.querySelectorAll('.slide'));
    this.prevButton = this.slider.querySelector('.goToPrev');
    this.nextButton = this.slider.querySelector('.goToNext');
    this.play = this.slider.querySelector('.play');

    // initialize//
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
    this.showPrev = this.showPrev.bind(this);
    this.playPauseFunction = this.playPauseFunction.bind(this);

    // eventsListeners
    this.nextButton.addEventListener('click', this.showNext);
    this.prevButton.addEventListener('click', this.showPrev);
    this.play.addEventListener('click', this.playPauseFunction);
  }
/*eslint-disable*/
  showNext() {
    console.log('showing next');
    if(this.previousSlide.matches('.prev')) this.previousSlide.classList.remove('prev');
    (this.previousSlide = (this.previousSlide.nextElementSibling || this.slides.firstElementChild))&& this.previousSlide.classList.replace('current', 'prev');
    (this.currentSlide = (this.currentSlide.nextElementSibling || this.slides.firstElementChild))&& this.currentSlide.classList.replace('next', 'current');
    (this.nextSlide = (this.nextSlide.nextElementSibling|| this.slides.firstElementChild))&& this.nextSlide.classList.add('next');
  }

  /* eslint-enable */
  showPrev() {
    console.log('showing prev..');
    /*eslint-disable*/
    if(this.nextSlide.matches('.next')) this.nextSlide.classList.remove('next');
    (this.previousSlide= (this.previousSlide.previousElementSibling || this.slides.lastElementChild)) && this.previousSlide.classList.add('prev');
    (this.currentSlide = (this.currentSlide.previousElementSibling || this.slides.lastElementChild)) && this.currentSlide.classList.replace('prev', 'current');
    (this.nextSlide = (this.nextSlide.previousElementSibling || this.slides.lastElementChild)) && this.nextSlide.classList.replace('current', 'next');
    /* eslint-enable */
  }

  playPauseFunction(e) {
    const t = e.target;
    t.classList.toggle('open');
    if (e.target.matches('.open')) {
      t.innerHTML = '&#9612&#9612';
      this.running = setInterval(() => {
        this.showNext();
      }, 2000);
    } else {
      t.innerHTML = '&#x25B6';
      clearInterval(this.running);
    }
  }
}

const slider1 = new Slider(document.querySelector('.slider'));
const slider2 = new Slider(document.querySelector('.dog-slider'));
