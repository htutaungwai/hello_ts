let char: string;
let age: number;
let isLoggedIn: boolean;

age = 34;

let ninjas: string[];

ninjas = ["luigi", "mario"];
ninjas.push("3");

let mixedArray: (string | number)[] = [];

mixedArray.push("hello");
mixedArray.push(22);

const circ = (diameter: number) => {
  return diameter * Math.PI;
};

console.log(circ(3));

let names = ["luigi", "mario", "yoshi"];
names.push("toad");

let numbers = [10, 20, 30, 40, 50];
numbers.push(60);

// numbers.push("60") ERROR

let mixed = ["ken", 5, "toad", 78];
mixed.push("princess");
mixed.push(50);

// mixed.push(true); ERROR

// OBJECTS
let ninja = {
  name: "mario",
  belt: "black",
  age: 40,
};

ninja.age = 40;
ninja.name = "htut";
// ninja.belt = 44; ERROR

// let students: string[]; ---variable `students` gets defined, but it has no assigned value - it is defined but unassigned

let students: string[] = [];
students.push("shaun");

// UNIONS

let mixedUnion: (string | number | boolean)[] = [];

mixedUnion.push("hello");
mixedUnion.push(300);
mixedUnion.push(false);

let uid: string | number;

uid = "2fjojfoafjS";
uid = 2343324;

let ninjaOne: object;
ninjaOne = { name: "yoshi", age: 23, married: false };

let ninjaTwo: {
  name: string;
  age: number;
  married: boolean;
};

ninjaTwo = {
  name: "aung",
  age: 33,
  married: true,
};

let age2: any = 25;
age2 = "string";

let mixed2: any[] = [];
mixed2.push(5);
mixed2.push("mario");
mixed2.push(false);

interface Mixed {
  name: string;
  age: number;
  active: boolean;
}

let mixed3: Mixed;

mixed3 = {
  name: "ok",
  age: 34,
  active: true,
};
