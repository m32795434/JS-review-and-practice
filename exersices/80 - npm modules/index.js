import wait from 'waait';
import faker from '@faker-js/faker';
import { formatDistance, format } from 'date-fns';

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
