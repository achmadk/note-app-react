const note = require('./../../database/models/note'),
deleteNote = (req, res) => {
  console.log(req.params.id)
  note.findByIdAndRemove(req.params.id, (error, data) => {
    if (!error) {
      res.status(202).json({data})
    } else res.status(406).json({error})
  })
}

module.exports = deleteNote
