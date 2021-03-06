function Slider(slider) {
  if (!slider || !(slider instanceof Element)) {
    throw new Error('Sldier not found or not an Element');
  }
  // set properties to the instance to access them later
  this.slider = slider;
  this.slides = slider.querySelector('.slides');
  // this two are not accessed from outside
  const prevButton = slider.querySelector('.goToPrev');
  const nextButton = slider.querySelector('.goToNext');

  // bind our methods to the instance if we need them
  this.move = this.move.bind(this);

  this.startSlider();
  this.applyClasses();
  // console.log({ current, prev, next });
  // EVENT LISTENERS
  prevButton.addEventListener('click', () => this.move('back'));
  nextButton.addEventListener('click', this.move);
  window.addEventListener('keyup', (e) => {
    if (e.key === 'ArrowRight') {
      this.move();
    }
    if (e.key === 'ArrowLeft') {
      this.move('back');
    }
  });
}

Slider.prototype.startSlider = function () {
  this.current =
    this.slider.querySelector('.current') || this.slides.firstElementChild;
  this.prev =
    this.current.previousElementSibling || this.slides.lastElementChild;
  this.next = this.current.nextElementSibling || this.slides.firstElementChild;
  // console.log({ current, prev, next });
};
Slider.prototype.applyClasses = function () {
  this.current.classList.add('current');
  this.prev.classList.add('prev');
  this.next.classList.add('next');
};
Slider.prototype.move = function (direction) {
  console.log(this);
  // first strip all the classes off from the currennt slides
  const classesToRemove = ['current', 'prev', 'next'];
  [this.current, this.prev, this.next].forEach((el) => {
    el.classList.remove(...classesToRemove);
  });
  // then add the new classes depending on the direction
  if (direction === 'back') {
    // using destructuring, we ensure first, is done the array at the left, and them, we
    // update the value of the variables that we make reference with the variables inside the array.
    // this is SWAPPING the values of the variables. WE don't need to assign the values to temporaly variables
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
};

const mySlider = new Slider(document.querySelector('.slider'));
const dogSlider = new Slider(document.querySelector('.dog-slider'));
console.log(mySlider, dogSlider);

window.dogSlider = dogSlider; // so we can access it from the console, because we are using PARCEL
/*
// we can give others in the team the job to code the window.eventListeners
// or we can do this for every instance individually
window.addEventListener('keyup', (e) => {
  if (e.key === 'ArrowRight') {
    dogSlider.move();
  }
  if (e.key === 'ArrowLeft') {
    dogSlider.move('back');
  }
});
*/
