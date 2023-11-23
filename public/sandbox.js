"use strict";
let greet;
greet = () => {
    console.log("no hello");
};
const add = (a, b, c = 10) => {
    console.log(a + b);
};
add(5, 10);
const minus = (a, b) => {
    return a - b;
};
let result = minus(20, 10);
