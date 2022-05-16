import wait from 'waait';
import faker from '@faker-js/faker';
import { formatDistance, format } from 'date-fns';
import axios from 'axios';
import { intersection, isEqual } from 'lodash';
import to from 'await-to-js';

const fakesName = Array.from({ length: 10 }, faker.name.firstName);
async function go() {
  console.log('start');
  await wait(1000);
  console.log('end');
} // remember months start at 0.
const difHr = formatDistance(new Date(1987, 3, 30, 0, 0, 0), new Date(), {
  addSuffix: true,
});
console.log(difHr); // about 35 years ago ...( at 05/14/2022)
const dateFormated = format(new Date(2014, 1, 11), 'MM/dd/yyyy');
console.log(dateFormated); // 02/11/2014

const date = new Date();
// show the actual date like this: May the 15th 2022
const formated = format(date, "LLLL 'the' do y");
console.log(formated);

async function getJoke() {
  const { data } = await axios.get('https://icanhazdadjoke.com/', {
    headers: { Accept: 'application/json' },
  });
  console.log(data.joke);
}
getJoke();

const intersec = intersection([2, 1], [2, 3]);
console.log(intersec); // [2]

const person1 = { name: 'Manuel' };
const person2 = { name: 'Manuel' };
// deep comparison
console.log(isEqual(person1, person2)); // true

function checkIfNameIsCool(firstName) {
  return new Promise((resolve, reject) => {
    if (firstName === 'Manuel') {
      return resolve('cool Name');
    }
    reject(new Error('not cool'));
  });
}
async function checkName() {
  // await to(),  returns an array where the first element is the error, and the second the result
  // we can check first if we have an error. If not, we continue with the code.
  const [err, successValue] = await to(checkIfNameIsCool('Manu'));
  if (err) {
    console.log(err);
  }
  console.log(successValue); // undefined
}
checkName();
