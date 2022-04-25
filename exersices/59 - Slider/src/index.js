function Slider(slider) {
  if (!slider || !(slider instanceof Element)) {
    throw new Error('Sldier not found or not an Element');
  }
  let current;
  let next;
  let prev;
  const slides = slider.querySelector('.slides');
  console.log(slides);
  const prevButton = slider.querySelector('.goToPrev');
  const nextButton = slider.querySelector('.goToNext');

  function startSlider() {
    current = slider.querySelector('.current') || slides.firstElementChild;
    prev = current.previousElementSibling || slides.lastElementChild;
    next = current.nextElementSibling || slides.firstElementChild;
    // console.log({ current, prev, next });
  }
  function applyClasses() {
    current.classList.add('current');
    prev.classList.add('prev');
    next.classList.add('next');
  }
  function move(direction) {
    // first strip all the classes off from the currennt slides
    const classesToRemove = ['current', 'prev', 'next'];
    [current, prev, next].forEach((el) => {
      el.classList.remove(...classesToRemove);
    });
    // then add the new classes depending on the direction
    if (direction === 'back') {
      // using destructuring, we ensure first, is done the array at the left, and them, we
      // update the value of the variables that we make reference with the variables inside the array.
      // this is SWAPPING the values of the variables. WE don't need to assign the values to temporaly variables
      [prev, current, next] = [
        prev.previousElementSibling || slides.lastElementChild,
        prev,
        current,
      ];
    } else {
      [prev, current, next] = [
        current,
        next,
        next.nextElementSibling || slides.firstElementChild,
      ];
    }
    applyClasses();
  }

  startSlider();
  applyClasses();
  // console.log({ current, prev, next });
  // EVENT LISTENERS
  prevButton.addEventListener('click', () => move('back'));
  nextButton.addEventListener('click', move);
}
const mySlider = Slider(document.querySelector('.slider'));
const dogSlider = Slider(document.querySelector('.dog-slider'));
