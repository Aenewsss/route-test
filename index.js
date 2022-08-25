require('dotenv').config()

const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.status(200).json({message: 'puta que pariu'})
})
app.get('/rapeize', (req, res) => {
    res.status(200).json({devJunior: ['Davi, Ale'], estag: 'Aenã'})
})

app.listen(8000 || process.env.PORT)