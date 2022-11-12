export async function handleButtonClick(event) {
  // we import all the Module Object. default as "currency"
  const { localCurrency, default: currency } = await import('./currencies.js');
  console.log(localCurrency, currency);
}
