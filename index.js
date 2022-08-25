require('dotenv').config()

const express = require('express')

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send("<h1>Hello World!</h1>")
})
app.get('/rapeize', (req, res) => {
    res.status(200).json({devJunior: ['Davi, Ale'], estag: 'Aenã'})
})

app.listen(8000 || process.env.PORT)