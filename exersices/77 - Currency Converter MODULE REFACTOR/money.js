import { init } from './init.js';

const form = document.querySelector('.app form');

form.addEventListener('mouseenter', init, { once: true });
