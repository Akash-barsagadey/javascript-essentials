import { difference } from 'lodash'

let arrayFirst = ['1', '2', '3', '4', '5']
let arraySecond = ['7', '8', '9', '2']

//by using indexOf
let difference1 = arrayFirst.filter((x) => arraySecond.indexOf(x) === -1)

// by using ES7 includes method
let difference2 = arrayFirst.filter((x) => !arraySecond.includes(x))

// by using  ES6 Set
let temp = new Set(arraySecond)
let difference3 = [...arrayFirst].filter((x) => !temp.has(x))

let difference4 = arrayFirst.filter((x) => !arraySecond.some((y) => y === x))

// by lodash
let difference5 = difference(arrayFirst, arraySecond)

console.log('difference4', difference5)

//Above all have Output: ["1", "3", "4", "5"]
