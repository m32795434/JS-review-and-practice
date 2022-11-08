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
      <label>${options.question}</label>
      <input type="text" name="formInput" autocomplete="off"/>
      <button type="submit">Submit</button>
      </fildset>`
    );
    console.log(popUp);
    // check if we need a cancel button
    if ('cancel' in options) {
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
    popUp.addEventListener(
      'submit',
      (e) => {
        e.preventDefault();
        console.log('submited!!');
        resolve(e.target.formInput.value);
        destroyPopUp(popUp);
      },
      { once: true }
    );

    document.body.appendChild(popUp);
    await wait(0); // stop ejecuting the block, send to the web api, wait the web api to finish, send to the callback queue, event loop, run the resolve.
    popUp.classList.add('open');
  });
}

// select all buttons that have questions
const buttons = document.querySelectorAll('[data-question]');
buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    ask(e.currentTarget.dataset);
  });
});

const questions = [
  { question: '¿whats your name?' },
  { question: '¿whats your age?', cancel: true },
  { question: '¿whats your dog name?' },
];

const results = []; // this is the only way we can take out of the async function the results.
async function asyncMap(array) {
  for (const item of array) {
    results.push(await ask(item));
  }
  console.log(results);
  return results; // to have the PromiseResult defined.
}
asyncMap(questions);
