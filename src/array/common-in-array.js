let arrayFirst = ['1', '2', '3', '4', '5']
let arraySecond = ['7', '8', '9', '2']

let intersection = arrayFirst.filter((x) => arraySecond.includes(x))

var common = new Set(arrayFirst).intersection(arraySecond).keys()

function common(arr1, arr2) {
	var newArr = []
	newArr = arr1.filter(function (v) {
		return arr2.indexOf(v) >= 0
	})
	newArr.concat(
		arr2.filter(function (v) {
			return newArr.indexOf(v) >= 0
		})
	)

	return newArr
}

var common = arrayFirst.filter((y) => arraySecond.some((x) => y === x))

console.log('intersection', intersection)

//Above all have Output: ['2']
