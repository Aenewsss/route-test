require('dotenv').config()

const express = require('express')

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send("<h1>Hello World!</h1>")
})
app.get('/rapeize', (req, res) => {
    console.log(req)
    res.status(200).json({devJunior: ['Davi, Ale'], estag: 'Aenã'})
})

app.listen(process.env.PORT || 8000, () => console.log('Server at port 8000'))