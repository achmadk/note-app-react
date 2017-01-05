const mongoose = require('mongoose')
      noteSchema = new mongoose.Schema({
        title: String,
        content: String,
        date_created: String,
        location: String,
        tag: String,
        category: String,
        image: String
      })

module.exports = mongoose.model('Note', noteSchema)
