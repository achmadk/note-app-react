const note = require('./../models/note'),
      dummy = require('./../../dummy-data/notes.json'),
addDummyData = () => {
  note.find({}, (err, notes) => {
    if (notes.length == 0) {
      note.create(dummy.data, (err, notes) => {
        console.log(notes)
      })
    } else console.log('notes has data')
  })
}

module.exports = addDummyData
