const sum = require('./es6/sum')
import _ from '../node_modules/lodash'

window._ = _

const total = sum(25, 5)

console.log('Hiiiiiiiiiii')

console.log('total', total)
