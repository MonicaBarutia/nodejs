const fs = require('fs');

fs.writeFileSync('notes.txt', 'My name is Monica.')
fs.appendFileSync('notes.txt', 'This message should append at the end of file.')
