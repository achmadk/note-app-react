const note = require('./../../database/models/note'),
all = (req, res) => {
  note.find((error, data) => {
    if (!error) {
      res.status(200).json({data})
    } else res.status(406).json({error})
  })
},
byId = (req, res) => {
  note.findById(req.params.id, (err, data) => {
    if (data) {
      res.status(200).json({data})
    } else res.status(404).json(err)
  })
}

module.exports = {
  all,
  byId
}
