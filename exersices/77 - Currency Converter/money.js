// JSON.stringify(): converts a JavaScript object or value to a JSON string
// JSON.parse(): parses a JSON string, constructing the JavaScript value or
// object described by the string.
// Response.json(): method of the Response interface takes a Response stream and reads it to completion.
// It returns a promise which resolves with the result of parsing the body text as JSON.
const fromCurrecy = document.querySelector('[name="from_currency"]');
const toCurrency = document.querySelector('[name="to_currency"]');
const form = document.querySelector('.app form');
const fromAmount = document.querySelector('[name="from_amount"]');
const toAmount = document.querySelector('.to_amount');
const refresh = document.querySelector('[name="refresh_rates"]');

const endPoint = 'https://api.apilayer.com/exchangerates_data';
let ratesByBase = {};

const currencies = {
  USD: 'United States Dollar',
  AUD: 'Australian Dollar',
  BGN: 'Bulgarian Lev',
  BRL: 'Brazilian Real',
  CAD: 'Canadian Dollar',
  CHF: 'Swiss Franc',
  CNY: 'Chinese Yuan',
  CZK: 'Czech Republic Koruna',
  DKK: 'Danish Krone',
  GBP: 'British Pound Sterling',
  HKD: 'Hong Kong Dollar',
  HRK: 'Croatian Kuna',
  HUF: 'Hungarian Forint',
  IDR: 'Indonesian Rupiah',
  ILS: 'Israeli New Sheqel',
  INR: 'Indian Rupee',
  JPY: 'Japanese Yen',
  KRW: 'South Korean Won',
  MXN: 'Mexican Peso',
  MYR: 'Malaysian Ringgit',
  NOK: 'Norwegian Krone',
  NZD: 'New Zealand Dollar',
  PHP: 'Philippine Peso',
  PLN: 'Polish Zloty',
  RON: 'Romanian Leu',
  RUB: 'Russian Ruble',
  SEK: 'Swedish Krona',
  SGD: 'Singapore Dollar',
  THB: 'Thai Baht',
  TRY: 'Turkish Lira',
  ZAR: 'South African Rand',
  EUR: 'Euro',
};
function generateOptions(options) {
  return Object.entries(options)
    .map(
      ([currencyCode, currencyName]) =>
        `<option value="${currencyCode}">${currencyCode} - ${currencyName}</option>`
    )
    .join('');
}
function mirrorToLocalStorage(object) {
  localStorage.setItem('exchangeRates', JSON.stringify(object));
}
async function fetchRates(base = 'USD') {
  const res = await fetch(`${endPoint}/latest?base=${base}`, {
    headers: { apikey: 'YOUR API KEY👌' },
  });
  ratesByBase = (await res.json()).rates;
  mirrorToLocalStorage(ratesByBase);
}
function restoreFromLocalStorage() {
  const exchangeRates = localStorage.getItem('exchangeRates');
  if (exchangeRates) {
    ratesByBase = JSON.parse(exchangeRates);
    return;
  }
  fetchRates();
}
function formatCurrency(amount, currency) {
  return Intl.NumberFormat('es-ar', { style: 'currency', currency }).format(
    amount
  );
}
function convert() {
  const amount = fromAmount.value;
  const from = fromCurrecy.value;
  const to = toCurrency.value;
  const calcAmount = (amount * ratesByBase[to]) / ratesByBase[from];
  toAmount.textContent = formatCurrency(calcAmount, to);
}
refresh.addEventListener('click', (e) => {
  fetchRates();
});
form.addEventListener('input', convert);
/*
async function convert(amount, from, to) {
  if (!ratesByBase[from]) {
    console.log(
      `we don't have ${from} rate to convert to ${to}, so lets go and get it!`
    );
    ratesByBase[from] = (await fetchRates(from)).rates;
    mirrorToLocalStorage(ratesByBase);
  }
} */
const optionsHTML = generateOptions(currencies);

// populate the options elements
fromCurrecy.innerHTML = optionsHTML;
toCurrency.innerHTML = optionsHTML;

restoreFromLocalStorage();

/* alternative of code taken from the documentation, to fech the rates:
var myHeaders = new Headers();
myHeaders.append("apikey", "w9wIbPShWqGzYav4UqqKDPAKJV9nI7u9");

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

fetch("https://api.apilayer.com/exchangerates_data/latest?symbols=symbols&base=base", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
*/
// 15.54
