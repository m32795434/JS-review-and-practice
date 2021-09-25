function calculateBill(billAmount, taxRate = 0.13, tipRate = 0.15) {
  const total = billAmount * tipRate + taxRate * billAmount + billAmount; // tipRate is not over (billAmount+taxRate)
  return total;
}
const billAmountExt = 100;
const taxRateExt = 0.13;
const myTotal1 = calculateBill(billAmountExt, taxRateExt);
const myTotal2 = calculateBill(250, 0.13);
// console.log(`your total is $${calculateBill()}`); it's valid. A function in a console.log
// console.log(`total 1 $${myTotal1}`);
// console.log(`total 2 $${myTotal2}`);
// console.log(calculateBill(500));

// we pass an expression as an argument
const myTotal3 = calculateBill(25 + 25 + 25 + 50, 0.13);
// console.log(`total 3 $${myTotal3}`);

const firstNameExt = `Manu`;
function sayHiTo(firstName) {
  return `hello ${firstName}`;
}
// we pass the value inside a variable.
const greeting = sayHiTo(firstNameExt);
// console.log(greeting);

// with a default value
function doctorize(name = `manu`) {
  return `Dr. ${name}`;
}
function yell(nameDoctorized) {
  // return `HEY ${nameDoctorized}`;
  return `HEY ${nameDoctorized.toUpperCase()}`; // IN UPPERCASE
}
// WE PASS A FUNCTION AS AN ARGUMENT
// console.log(yell(doctorize(`Manuel`)));

// console.log(yell(doctorize())); it does'n matters, we set a default value
