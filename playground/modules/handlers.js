export async function handleButtonClick(event) {
  // TO IMPORT ON DEMAND. YOU HAVE TO IMPORT ALL THE MODULE(is like an object)
  const { localCurrency, default: currency } = await import('./currencies.js');
  console.log(localCurrency, currency);
}
