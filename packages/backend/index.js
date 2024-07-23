const express = require('express')

app.use(express.json())
app.use(cors());

app.use('/', (req, res) => res.send('this is up at least') )
app.listen(4000, () => console.log('running on 4k'))

module.exports = app;