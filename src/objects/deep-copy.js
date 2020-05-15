let userDetails = { name: 'Akash', age: 25, Profession: 'Software Engineer' }

function cloneObject(obj) {
	var clone = {}
	for (var i in obj) {
		if (obj[i] != null && typeof obj[i] == 'object') clone[i] = cloneObject(obj[i])
		else clone[i] = obj[i]
	}
	return clone
}

let userDetailsDuplicate = cloneObject(userDetails)

//    Using JSON.parse(JSON.stringify(object));

let userDetailsNew = JSON.parse(JSON.stringify(userDetails))

userDetailsDuplicate.name = 'Akash Barsagadey'

console.log('userDetailsDuplicate', userDetailsDuplicate)

console.log('userDetails', userDetails)
