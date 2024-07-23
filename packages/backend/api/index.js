require('dotenv').config()
const express = require('express')
const authRouter = require('../src/routes/auth')

const app = express()
app.use(express.json())

app.use('/user', authRouter)
app.use('/', (req, res) => res.send('this is up at least'))

app.listen(4000, () => console.log('running on 4k'))

module.exports = app;