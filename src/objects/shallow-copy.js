var userDetails = { name: 'Akash', age: 25, Profession: 'Software Engineer' }

var userDetailsDuplicate = userDetails //Shallow copy!

//Using Object.assign() method

let clone = Object.assign({}, userDetails)
