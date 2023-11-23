let greet: Function;

greet = () => {
  console.log("no hello");
};

const add = (a: number, b: number, c: number | string = 10): void => {
  console.log(a + b);
};

add(5, 10);

const minus = (a: number, b: number): number => {
  return a - b;
};

let result = minus(20, 10);
