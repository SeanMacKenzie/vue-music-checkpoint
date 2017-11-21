var express = require('express')
var cors = require('cors')
var server = express()
var bp = require('body-parser')
var DBConnect = require('./config/mlab/mlab-config')
var port = 3000

//route variables

//Middleware
server.use(cors({}))
server.use(bp.json())




server.listen(port, function() {
    console.log('Trying to get it done on port: ', port)
})


//getMyTunes (GET)

//addSongtoList (POST)

//updateRank (PUT)

//deleteTrack (DELETE)