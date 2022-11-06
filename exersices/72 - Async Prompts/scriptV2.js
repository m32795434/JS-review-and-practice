function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function destroyPopUp(popUp) {
  popUp.classList.remove('open');
  await wait(1000); // bring it a litle of time so it can fade out
  popUp.remove();
  popUp = null; // erase from memory the value
}

function ask(options) {
  return new Promise(async (resolve) => {
    // first we need to create a popup with all the fields in it
    const popUp = document.createElement('form');
    popUp.classList.add('popup');
    popUp.insertAdjacentHTML(
      'afterbegin',
      `<fieldset>
      <label>${options.title}</label>
      <input type="text" name="formInput" autocomplete="off"/>
      <button type="submit">Submit</button>
      </fildset>`
    );
    console.log(popUp);
    // check if we need a cancel button
    if (options.cancel) {
      const skipButton = document.createElement('button');
      skipButton.type = 'button';
      skipButton.textContent = 'Cancel';
      popUp.firstElementChild.appendChild(skipButton);
      // TODO: listen for a click on the cancel button
      skipButton.addEventListener(
        'click',
        () => {
          resolve(null);
          destroyPopUp(popUp);
        },
        { once: true }
      );
    }
    // listen for the submit event on the inputs
    popUp.addEventListener(
      'submit',
      (e) => {
        e.preventDefault();
        console.log('submited!!');
        // when someone submit, resolve the data that was in the input box
        resolve(e.target.formInput.value);
        // remove the popup
        destroyPopUp(popUp);
      },
      { once: true }
    );

    // insert that popup into the DOM
    document.body.appendChild(popUp);
    // a small delay before we add the class on it
    await wait(0); // stop ejecuting the block, send to the web api, wait the web api to finish, send to the callback queue, event loop, run the resolve.
    popUp.classList.add('open');
  });
}

async function askQuestion(e) {
  const button = e.currentTarget;
  const cancel = 'cancel' in button.dataset; // is there a "cancel" property inside the object??
  // const cancel = button.hasAttribute('data-cancel');
  const answer = await ask({ title: button.dataset.question, cancel });
  console.log(answer);
}

// select all buttons that have questions
const buttons = document.querySelectorAll('[data-question]');
buttons.forEach((button) => {
  button.addEventListener('click', askQuestion);
});

const questions = [
  { title: '¿whats your name?' },
  { title: '¿whats your age?', cancel: true },
  { title: '¿whats your dog name?' },
];

// A GENERIC TOOL - ASINCHRONOUS .MAP() - the await it's returning the resolve
async function asyncMap(array, callBack) {
  const results = [];
  for (const item of array) {
    results.push(await callBack(item));
  }
  return results;
}

async function go() {
  const questionsResults = await asyncMap(questions, ask);
  console.log(questionsResults);
}
go();
