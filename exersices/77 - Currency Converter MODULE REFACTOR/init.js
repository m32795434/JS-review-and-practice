import currencies from './currencies.js';
import { refresh, form, fromCurrecy, toCurrency } from './elements.js';
import { generateOptions } from './utils.js';
import { fetchRates, convert, restoreFromLocalStorage } from './lib.js';

export function init() {
  refresh.addEventListener('click', () => {
    fetchRates();
  });
  form.addEventListener('input', convert);

  const optionsHTML = generateOptions(currencies);

  // populate the options elements
  fromCurrecy.innerHTML = optionsHTML;
  toCurrency.innerHTML = optionsHTML;

  restoreFromLocalStorage();
}
