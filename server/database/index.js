const mongoose = require('mongoose'),
addDummyData = require('./queries/add-dummy-data')
initDatabase = () => {
  mongoose.Promise = global.Promise
  mongoose.connect('mongodb://127.0.0.1/note-app-react', {
    useMongoClient: true
  }).then(() => {
      console.log('connection to database succesful')
      addDummyData()
    })
    .catch(err => console.error(err))
}

module.exports = initDatabase
