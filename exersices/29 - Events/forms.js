const wes = document.querySelector('.wes');
/*
wes.addEventListener('click', (event) => {
  const shouldChangePage = confirm('this website might be malicious!. Proced?');
  if (shouldChangePage === false) {
    event.preventDefault();
  }

  console.log(shouldChangePage); // boolean
  console.log(event.currentTarget.href);
  console.log(event);
}); */
// OR!!
wes.addEventListener('click', (event) => {
  event.preventDefault();
  const shouldChangePage = confirm('do you want to proceed??');
  if (shouldChangePage) {
    // if true
    window.location = event.currentTarget.href;
  }
});

const signUpForm = document.querySelector('[name = "signup"]');
signUpForm.addEventListener('submit', (e) => {
  /*
  console.log(e.currentTarget.name.value);
  console.log(e.currentTarget.email.value);
  console.log(e.currentTarget.agree.checked);
*/
  const nameF = e.currentTarget.name.value;
  if (nameF.includes('hang')) {
    // NOW IS case sensitive!!
    alert('Hang is not allowed');
    e.preventDefault();
  }
});

function logEvent(event) {
  console.log(event.type);
}
signUpForm.name.addEventListener('keyup', logEvent); // leave
signUpForm.name.addEventListener('keyup', (k) => {
  if (k.key === '!') {
    alert(`no se permite este caracter: ${k.key}`);
  }
}); // leave
// signUpForm.name.addEventListener('keydown', logEvent); // press in
// signUpForm.name.addEventListener('focus', logEvent);
// signUpForm.name.addEventListener('blur', logEvent);// leave the focus
