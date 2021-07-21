const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
  const notes = loadNotes()
  const duplicateNote = notes.find((note) => note.title === title)

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body
    })

    saveNotes(notes)
    console.log('New note added.')
  } else {
    console.log('Note title taken.')
  }
}

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes)
  fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
  } catch (e) {
    return []
  }
}

const removeNote = (title) => {
  const notes = loadNotes()
  const notesToKeep = notes.filter((note) => note.title !== title)

  if (notesToKeep.length !== notes.length) {
    saveNotes(notesToKeep)
    console.log(chalk.green.inverse('Note removed!'))
  } else {
    console.log(chalk.red.inverse('No note found!'))
  }
}

const listNotes = () => {
  const notes = loadNotes()
  console.log(chalk.blue.bold("Your notes"))
  notes.forEach((note) => console.log(note.title))
}

const readNote = (title) => {
  const notes = loadNotes()
  const note = notes.find((note) => note.title === title)

  if (note) {
    console.log(chalk.magenta.bold(note.title))
    console.log(note.body)
  } else {
    console.log(chalk.red.inverse("Couldn't find a note with this title"))
  }
}

module.exports = {
  addNote,
  removeNote,
  listNotes,
  readNote
}