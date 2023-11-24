"use strict";
// let greet: Function;
const logDetails = (uid, item) => {
    console.log(`${item} with id: ${uid}`);
};
let greet;
let calc;
calc = (numOne, numTwo, action) => {
    if (action === "add") {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
greet = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
const greetAgain = (user) => {
    console.log(`${user.name} is ${user.age} years old`);
};
let logIn;
logIn = (ninja) => {
    console.log(`${ninja.name} is ${ninja.age} years old.`);
};
