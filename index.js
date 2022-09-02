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
app.post('/rapeize', (req, res) => {
    console.log(req.body.action)
    console.log(req.body.pull_request.url)
    console.log(req.body.pull_request.number)
    console.log(req.body.pull_request.state)
    console.log(req.body.pull_request.title)
    console.log(req.body.pull_request.user.login)
    console.log(req.body.pull_request.body)
    console.log(req.body.pull_request.created_at)
    console.log(req.body.pull_request.updated_at)
    console.log(req.body.pull_request.head.ref)
    console.log(req.body.pull_request.base.ref)
    console.log(req.body.pull_request._links.commits)
    console.log(req.body.repository.name)
    console.log(req.body.repository.owner.login)
    console.log(req.body.repository.language)
    console.log(req.body.repository.default_branch)
    console.log(req.body.organization.login)
    res.status(200).json({devJunior: ['Davi, Ale'], estag: 'Aenã'})
})

app.listen(process.env.PORT || 8000, () => console.log('Server at port 8000'))