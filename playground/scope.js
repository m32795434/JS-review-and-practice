/* eslint-disable */
//------------------------GLOBAL SCOPE-----------------
//we can access them from others javascript code running in this file, in the html script, browser console..
// In the browser the global scope is the window object
window.iAmGlobal = `Soy una varibale global`;
const first = `Manuel`; // it's not attached to the window object.
let second = `Augusto`; // it's not attached to the window object

var third = `Bravard`; //IT IS ATTACHED TO THE WINDOW OBJECT
//"window.sayHi()" will it works!..functions declared as global are attached to the window object.
function sayHi() {
    console.log(`hi!`);
}

//-------------------------FUNCTION SCOPE-----------------
//Variables declared with "var" are function scope, so they doesn't live outside the function.
/* eslint-disable */
function hairColor() {
//const first = `Raul`;// it's not a good practice.So Rename the variable.
const hair = `green`;
console.log(first, second, third); // look up scope
var hairRed = `red`;
return hair;
}
// console.log(hairRed);// undefined even been a "var". 
// console.log(hair);// undefined

// -------------------------BLOCK SCOPE -------------------
// when we have curly brackets {}
//var are function scoped, and let and const are block scoped.
if(1 === 1) {
    const age = 30;
}
//console.log(age); //undefined

function isCool(name){
    let cool1; // so we can use it in the if statement and call it from the console.log
    if (name ===`Vico`){
        cool1 = true;
    }
    if (name ===`Manuel`) {
        const cool = true;
    }
    //console.log(cool); //cool undefined
    if (name ===`Manuel`) {
        var cool2 = true;// the console.log will work because "var" Is FUNCTION SCOPE.
    }
    console.log(cool1, cool2); 
    return cool; //cool is not defined.
}
/*
for (var i = 0; i < 5; i++) {
    console.log(i);
} var, will liked outside the "for" loop.*/

for (let i = 0; i < 5; i++) {
    console.log(i);
}// let it's ok.

// --------------------LITTLE MORE ABOUT LOOK UP SCOPE-----------------
const dog = `snickers`;
function logDog() {//here we define.
    console.log(dog);
}
function go() {
    const dog = `sunny`;
    logDog();//here we run
}
go(); //to run the last one.
//it will display 'snickers' because javascrip is a lexical scope language.
//scope look up, takes care were the function is defined, not were it's called.

//SOOO
function logDog1(dog) {//here we define.
    console.log(dog);
}
function go1() {
    const dog = `sunny`;
    logDog1(`RUFUS`);//here we run
}
go1();
//it will display 'RUFUS', because we are sending a value as an argument, 
//and logDog1 will create a local variable with the parameter's value.