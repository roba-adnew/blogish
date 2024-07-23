const express = require('express')
const router = express.Router()

router.get('/', (req, res) => res.send('come on please'))

module.exports = router