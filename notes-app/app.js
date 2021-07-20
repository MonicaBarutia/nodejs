const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./notes');

// create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'Note body/content',
      demandOption: true,
      type: 'string',
    }
  },
  handler: function (argv) {
    console.log('Title: ' + argv.title + '\n Body: ' + argv.body)
  }
})

// create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  handler: function () {
    console.log('Removing the note!')
  }
})

// create list command
yargs.command({
  command: 'list',
  describe: 'List all the notes',
  handler: function () {
    console.log('Listing the notes!')
  }
})

// create read command
yargs.command({
  command: 'read',
  describe: 'Read a note',
  handler: function () {
    console.log('Reading the note!')
  }
})

yargs.parse();