const port = 3000,
      spdy = require('spdy'),
      express = require('express'),
      path = require('path'),
      axios = require('axios'),
      fs = require('fs'),
      responseTime = require('response-time'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      options = {
        key: fs.readFileSync(__dirname + '/server.key'),
        cert: fs.readFileSync(__dirname + '/server.crt')
      },
      initDatabase = require('./database/index')
      notesRouter = require('./routers/notes')

app = express()

app.use(responseTime())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false, limit: '20mb' }))
app.use(cors())
// app.get('*', (req, res) => {
// 	getDataAsync(res)
// })

initDatabase()

app.use('/notes', notesRouter)

function getDataAsync(res) {
	getWeatherData()
	.then(response => {
        res.send(response.data)
    }).catch(err => {
        console.log(err)
        if (err.status === 404) res.send('website http://data.bmkg.go.id/propinsi_00_1.xml was not found')
		else res.send(err)
    })
}

spdy.createServer(options, app)
  .listen(port, (error) => {
    if (error) {
      console.error(error)
      return process.exit(1)
    } else console.log('Listening on port: ' + port + '.')
  })
