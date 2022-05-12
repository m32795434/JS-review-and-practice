import {
  formatCurrency,
  ratesByBase,
  mirrorToLocalStorage,
  restoreFromLocalStorage,
} from './utils.js';
import { fromCurrecy, toCurrency } from './money.js';

const endPoint = 'https://api.apilayer.com/exchangerates_data';
const fromAmount = document.querySelector('[name="from_amount"]');
const toAmount = document.querySelector('.to_amount');

export async function fetchRates(base = 'USD') {
  const res = await fetch(`${endPoint}/latest?base=${base}`, {
    headers: { apikey: 'YOUR API KEY👌' },
  });
  const ratesByBaseLib = (await res.json()).rates;
  mirrorToLocalStorage(ratesByBaseLib);
  restoreFromLocalStorage();
}
export function convert() {
  const amount = fromAmount.value;
  const from = fromCurrecy.value;
  const to = toCurrency.value;
  const calcAmount = (amount * ratesByBase[to]) / ratesByBase[from];
  toAmount.textContent = formatCurrency(calcAmount, to);
}
