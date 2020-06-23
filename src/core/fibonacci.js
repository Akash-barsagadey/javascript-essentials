function* fiboGen(len, current = 0, next = 1) {
  if (len === 0) {
    return current;
  }
  yield current;
  yield* fiboGen(len - 1, next, current + next);
}

const fibo = [...fiboGen(10)];

console.log(fibo);

//[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
