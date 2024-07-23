require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const authRouter = require('../src/routes/auth')
const passport = require('../src/controllers/passportConfig')

mongoose.set('strictQuery', false);
const mongoDB = process.env.MONGODB_URI;

async function main() {
    await mongoose
      .connect(mongoDB)
      .catch((e) => {
        console.log(e);
        process.exit(0);
      })
  }
main();


const app = express()
app.use(express.json())
app.use(cors())
app.use(passport.initialize())

app.use('/user', authRouter)
app.use('/', (req, res) => res.send('backend server hosting api endpoints'))

app.listen(4000)

module.exports = app;