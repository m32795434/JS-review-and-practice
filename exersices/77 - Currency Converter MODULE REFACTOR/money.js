import { init } from './init.js';
import { form } from './elements.js';

form.addEventListener('mouseenter', init, { once: true });
