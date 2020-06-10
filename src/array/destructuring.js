let integer = [10, 20, 30, 40, 50];

let [a, b] = integer;

console.log(a);
// expected output: 10

[a, b, ...rest] = integer;

console.log(rest);
// expected output: Array [30,40,50]

//Skipping Items in an Array

let [a, , , e] = integer;

console.log(e); //40
