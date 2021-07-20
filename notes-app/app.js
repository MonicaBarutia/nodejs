const utils = require('./utils')
const getNotes = require('./notes');

console.log(utils.name)
const sum = utils.add(4, -2);
console.log(sum);

const msg = getNotes();
console.log(msg);
