import { fromAmount, toAmount, fromCurrecy, toCurrency } from './elements.js';
import { formatCurrency } from './utils.js';

let ratesByBase = {};
const endPoint = 'https://api.apilayer.com/exchangerates_data';

function mirrorToLocalStorage(object) {
  localStorage.setItem('exchangeRates', JSON.stringify(object));
}

export async function fetchRates(base = 'USD') {
  console.log('fetching rates....');
  const res = await fetch(`${endPoint}/latest?base=${base}`, {
    headers: { apikey: 'Yor Api key!😀' },
  });
  ratesByBase = (await res.json()).rates;
  console.log('rates recived:', ratesByBase);
  mirrorToLocalStorage(ratesByBase);
}
export function restoreFromLocalStorage() {
  const exchangeRates = localStorage.getItem('exchangeRates');
  if (exchangeRates) {
    ratesByBase = JSON.parse(exchangeRates);
    return;
  }
  fetchRates();
}

export function convert() {
  const amount = fromAmount.value;
  const from = fromCurrecy.value;
  const to = toCurrency.value;
  const calcAmount = (amount * ratesByBase[to]) / ratesByBase[from];
  toAmount.textContent = formatCurrency(calcAmount, to);
}
