export function randomItemFromArray(arr, not) {
  const item = arr[Math.floor(Math.random() * arr.length)];
  if (item === not) {
    console.log(`repeted item!:${not}`);
    return randomItemFromArray(arr, not);
  }
  return item;
}
