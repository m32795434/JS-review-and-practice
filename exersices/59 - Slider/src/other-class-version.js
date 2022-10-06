class Slider {
  constructor(slider) {
    if (!slider || !(slider instanceof Element)) {
      throw new Error('Sldier not found or not an Element');
    }
    /*eslint-disable*/
    this.slider = slider;
    this.slides = this.slider.querySelector('.slides');
    this.play = this.slider.querySelector('.play');
    const prevButton = this.slider.querySelector('.goToPrev');
    const nextButton = this.slider.querySelector('.goToNext');
    this.current =
    (this.slider.querySelector('.current') || this.slides.firstElementChild);
    this.next =
    (this.current.nextElementSibling || this.slides.firstElementChild);
    this.prev =
    (this.current.previousElementSibling || this.slides.lastElementChild);
    /* eslint-enable */
    // bindings
    this.move = this.move.bind(this);
    this.playPauseFunction = this.playPauseFunction.bind(this);

    prevButton.addEventListener('click', () => this.move('back'));
    nextButton.addEventListener('click', this.move);
    this.play.addEventListener('click', this.playPauseFunction);

    this.applyClasses();
  }

  applyClasses() {
    this.current.classList.add('current');
    this.prev.classList.add('prev');
    this.next.classList.add('next');
  }

  move(direction = '') {
    const classesToRemove = ['current', 'prev', 'next'];
    [this.current, this.prev, this.next].forEach((el) => {
      el.classList.remove(...classesToRemove);
    });
    if (direction === 'back') {
      [this.prev, this.current, this.next] = [
        this.prev.previousElementSibling || this.slides.lastElementChild,
        this.prev,
        this.current,
      ];
    } else {
      [this.prev, this.current, this.next] = [
        this.current,
        this.next,
        this.next.nextElementSibling || this.slides.firstElementChild,
      ];
    }
    this.applyClasses();
  }

  playPauseFunction(e) {
    const t = e.target;
    t.classList.toggle('open');
    if (e.target.matches('.open')) {
      t.innerHTML = '&#9612&#9612';
      this.running = setInterval(() => {
        this.move();
      }, 2000);
    } else {
      t.innerHTML = '&#x25B6';
      clearInterval(this.running);
    }
  }
}
const mySlider = new Slider(document.querySelector('.slider'));
const dogSlider = new Slider(document.querySelector('.dog-slider'));
