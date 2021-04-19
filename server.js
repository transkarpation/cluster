const express = require('express')
const routes = require('./routes')
const db = require('./db')()

const app = express()

app.use(routes)

app.listen(3000, () => {
    console.log('Listening 3000')
})