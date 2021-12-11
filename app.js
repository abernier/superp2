const express = require('express')

const app = express()

app.get('/', function (req, res, next) {
    res.send('Bonjour')
})

app.listen(3000)