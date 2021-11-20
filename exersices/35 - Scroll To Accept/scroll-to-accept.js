const terms = document.querySelector('.terms-and-conditions');
const watch = document.querySelector('.watch');
const btn = document.querySelector('.accept');

function obCallback(payload) {
  if (payload[0].intersectionRatio === 1) {
    btn.disabled = false;
    console.log('removing disabled!');
    ob.unobserve(terms.lastElementChild); // scape
  }
  /* else {
    btn.disabled = true;
    console.log('disabled!');
  } */
}
const ob = new IntersectionObserver(obCallback, { root: terms, threshold: 1 });
ob.observe(terms.lastElementChild);

// ob.observe(watch);
/*
terms.addEventListener('scroll', (e) => {
  console.log(e.currentTarget.scrollTop); whats it reach scrolling
  console.log(e.currentTarget.scrollHeight); whats the height
});
*/
// min 12
