import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import morgan from 'morgan'

import Game from './app/models/game'
import { getGames, getGame, postGame, deleteGame } from './app/routes/game'

const app = express()
const port = process.env.PORT || 3001

const options = {
    server: { socketOptions : { keepAlive: 1, connectTimeoutMS: 30000 } },
    replser: { socketOptions : { keepAlive: 1, connectTimeoutMS: 30000 } }
}

mongoose.Promise = global.Promise

mongoose.connect('mongodb://localhost/dbName', options)

const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'))

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(morgan('dev'))

app.use(express.static(__dirname + '/client/dist'))

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods", "GET,POST,DELETE")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
})


app.route('/games')
    .post(postGame)
    .get(getGames)
app.route('/games/:id')
    .get(getGame)
    .delete(deleteGame)

app.route("*").get((req, res) => {
    console.log("something is happening Harry..")
    res.sendFile('client/dist/index.html', { root: __dirname })
})

app.listen(port)

console.log(`listening on port ${port}`)
