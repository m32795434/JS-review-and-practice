const fromSelect = document.querySelector('[name="from_currency"]');
const toSelect = document.querySelector('[name="to_currency"]');
const endPoint = 'https://api.apilayer.com/exchangerates_data';
const ratesByBase = {};

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
async function fetchRates(base = 'USD') {
  const res = await fetch(`${endPoint}/latest?base=${base}`, {
    headers: { apikey: 'DOYOUBELIVEIWILLGIVEYOMYAPIKEY?🤣' },
  });
  const rates = await res.json();
  return rates;
}
async function convert(amount, from, to) {
  if (!ratesByBase[from]) {
    console.log(
      `we don't have ${from} rate to convert to ${to}, so lets go and get it!`
    );
    ratesByBase[from] = (await fetchRates(from)).rates;
  }
}
const optionsHTML = generateOptions(currencies);
// fetchRates();

// populate the options elements
fromSelect.innerHTML = optionsHTML;
toSelect.innerHTML = optionsHTML;

/* alternative of code taken from the documentation:
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
