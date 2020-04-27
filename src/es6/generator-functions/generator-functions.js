
// generator function can return (“yield”) multiple values, one after another, on-demand.
function* generator(x) {
    yield x;
    yield x + 'Barsagadey';
}

const gen = generator('Akash ');

console.log(gen.next().value);
// expected output: Akash

console.log(gen.next().value);
// expected output: Akash Barsagadey