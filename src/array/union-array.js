let arrayFirst = ['1', '2', '3', '4', '5']
let arraySecond = ['7', '8', '9', '2']

let union1 = [...arrayFirst, ...arraySecond]

// Sets give only distinct elements
let union2 = [...new Set([...arrayFirst, ...arraySecond])]
