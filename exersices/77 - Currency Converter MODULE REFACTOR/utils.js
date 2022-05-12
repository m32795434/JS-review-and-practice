import { fetchRates } from './lib.js';

export let ratesByBase = {};

export function generateOptions(options) {
  return Object.entries(options)
    .map(
      ([currencyCode, currencyName]) =>
        `<option value="${currencyCode}">${currencyCode} - ${currencyName}</option>`
    )
    .join('');
}
export function formatCurrency(amount, currency) {
  return Intl.NumberFormat('es-ar', { style: 'currency', currency }).format(
    amount
  );
}
export function mirrorToLocalStorage(object) {
  localStorage.setItem('exchangeRates', JSON.stringify(object));
}

export function restoreFromLocalStorage() {
  const exchangeRates = localStorage.getItem('exchangeRates');
  if (exchangeRates) {
    ratesByBase = JSON.parse(exchangeRates);
    return;
  }
  fetchRates();
}
