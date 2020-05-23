let arrayFirst = ['1', '2', '3', '4', '5']
let arraySecond = ['7', '8', '9', '2']

// by using  ES6 Set
let diff1 = arrayFirst
	.filter((x) => !arraySecond.includes(x))
	.concat(arraySecond.filter((x) => !arrayFirst.includes(x)))

// by using Plain vanilla js
function symmetricDifference(a1, a2) {
	var result = []
	for (var i = 0; i < a1.length; i++) {
		if (a2.indexOf(a1[i]) === -1) {
			result.push(a1[i])
		}
	}
	for (i = 0; i < a2.length; i++) {
		if (a1.indexOf(a2[i]) === -1) {
			result.push(a2[i])
		}
	}
	return result
}

console.log('diff2', symmetricDifference(arrayFirst, arraySecond))

//Above all have Output:["1", "3", "4", "5", "7", "8", "9"]
