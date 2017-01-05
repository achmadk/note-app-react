const note = require('./../../database/models/note'),
updateNote = (req, res) => {
  console.log(req.params.id, req.body)
  note.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true } , (error, data) => {
    if (!error) {
      res.status(202).json({data})
    } else res.status(406).json({error})
  })
}

module.exports = updateNote
