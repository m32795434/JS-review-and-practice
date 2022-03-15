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

  function showImage(el) {
    if (!el) {
      console.info('no image to show');
      return;
    }
    // update the modal with this info
    console.log(el);
  }
  function handleImageClick(event) {
    showImage(event.currentTarget);
  }
  images.forEach((image) => image.addEventListener('click', handleImageClick));
}
// use it on the page
const gallery1 = Gallery(document.querySelector('.gallery1'));
const gallery2 = Gallery(document.querySelector('.gallery2'));
