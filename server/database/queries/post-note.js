const note = require('./../../database/models/note'),
postNote = ({body}, res) => {
  note.create(body, (error, data) => {
    if (!error) {
      res.status(200).json({data})
    } else res.status(406).json({error})
  })
}

module.exports = postNote
