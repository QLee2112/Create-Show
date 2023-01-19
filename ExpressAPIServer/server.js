const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const db = require('./config/db')
const PORT = 3001

mongoose.set('strictQuery', true)

mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(cors({ origin: `http://127.0.0.1:3001`}))

const app = express()

app.use(express.json())

//Server will need to know abt the router, use app.use



app.listen(PORT, () => {
    console.log('Listening to Port ' + PORT)
})

module.exports = app