require('dotenv').config()

const express = require('express')

const app = express()

app.get('/rapeize', (req, res) => {
    res.status(200).json({devJunior: ['Davi, Ale'], estag: 'Aenã'})
})

app.listen(8000 || proccess.env.PORT)