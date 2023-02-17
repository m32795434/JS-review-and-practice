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

// found in the internet
/*
function inViewport( element ){
  
  // Get the elements position relative to the viewport

  var bb = element.getBoundingClientRect();
  
  // Check if the element is outside the viewport
  // Then invert the returned value because you want to know the opposite

  return !(bb.top > innerHeight || bb.bottom < 0);
  
}

var myElement = document.querySelector( 'div' );

// Listen for the scroll event

document.addEventListener( 'scroll', event => {
 
  // Check the viewport status

  if( inViewport( myElement ) ){
    
    myElement.style.background = 'red';
    
  } else {
    
    myElement.style.background = '';
    
  }
  
})
body {
  
  height: 400vh;
  
}

div {
  
  width: 50vw;
  height: 50vh;
  position: absolute;
  top: 125vh;
  left: 25vw;
  transition: background 4s;
  border: 1px solid red;
  
}
<p>Scroll Down</p>
<div></div> */
