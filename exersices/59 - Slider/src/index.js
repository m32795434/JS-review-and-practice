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
    console.log(current);
  }

  startSlider();
}
const mySlider = Slider(document.querySelector('.slider'));
const dogSlider = Slider(document.querySelector('.dog-slider'));
