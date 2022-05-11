const last = 'Bravard';
const last2 = 'Gonzalez';
const hairColor = 'black';
// NAMED-EXPORTS - AS MANY AS YOU WANT
export function returnHi(name) {
  return `hi ${name} ${last}`;
}
export function returnHello(name, last) {
  return `hello ${name} ${last}`;
}
export function returnWhatsUp(name, last2) {
  return `Whatsup! ${name} ${last2}`;
}

// NAMED exports
export { last2 };
export default hairColor;
