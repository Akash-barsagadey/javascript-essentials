let person = { name: 'Akash', country: 'India', job: 'Developer' };

let { name, country, job } = person;

console.log(name); //"Akash"

//Variables declared before being assigned

let name, country, job;
({ name, country, job } = person);

console.log(job); //"Developer"

//We can also set default values when we assign values to a new variable:

let { name: foo = 'Name', friend: bar = 'Saurabh' } = person;

console.log(foo); //"Akash"
console.log(bar); //"Saurabh"
