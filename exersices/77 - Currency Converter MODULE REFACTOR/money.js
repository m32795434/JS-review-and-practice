import currencies from './currencies.js';
import { generateOptions, restoreFromLocalStorage } from './utils.js';
import { fetchRates, convert } from './lib.js';

export const fromCurrecy = document.querySelector('[name="from_currency"]');
export const toCurrency = document.querySelector('[name="to_currency"]');
const form = document.querySelector('.app form');
const refresh = document.querySelector('[name="refresh_rates"]');

refresh.addEventListener('click', () => {
  fetchRates();
});
form.addEventListener('input', convert);

const optionsHTML = generateOptions(currencies);

// populate the options elements
fromCurrecy.innerHTML = optionsHTML;
toCurrency.innerHTML = optionsHTML;

restoreFromLocalStorage();
