import moment from 'moment'
import dayjs from 'dayjs'
window.moment = moment
window.dayjs = dayjs

///Local react native  project without Chrome debugging: Invalid date
// Local react native  project with Chrome debugging: correct date

//Just replace the space in the middle of the date with a T

let newDate = new Date('2020-05-21 00:43:38'.replace(' ', 'T'))

// OR

console.log('cureent Date>>>>>>>>>', moment().format('YYYY-MM-DDTHH:mm:ss'))

// there are plenty of alternatives out there:

/* 

Day.js
Luxon
Date-Fns
JS-Joda
Native Date


 */
