// let greet: Function;

// greet = () => {
//   console.log("no hello");
// };

// const add = (a: number, b: number, c: number | string = 10): void => {
//   console.log(a + b);
// };

// add(5, 10);

// const minus = (a: number, b: number): number => {
//   return a - b;
// };

// let result = minus(20, 10);

type stringORNumber = string | number;
type userWithObject = {
  name: string;
  age: number;
};

const logDetails = (uid: stringORNumber, item: string) => {
  console.log(`${item} with id: ${uid}`);
};

const greetAgain = (user: userWithObject) => {
  console.log(`${user.name} is ${user.age} years old`);
};
