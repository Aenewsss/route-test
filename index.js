require('dotenv').config()

const express = require('express')

const app = express()

app.use(express.json())
app.set('view engine', 'ejs')
app.set('views', 'src/views')

app.get('/', (req, res) => {
    res.send('hello')
})

const github = []

app.post('/rapeize', (req, res) => {
    const { url, number, state, title, body, created_at, updated_at } = req.body.pull_request

    const user = req.body.pull_request.user.login
    const branch_head = req.body.pull_request.head.ref
    const branch_base = req.body.pull_request.base.ref
    const commits = req.body.pull_request._links.commits
    
    const [name, language, default_branch]  = req.body.repository.name

    const user_repo = req.body.repository.owner.login
    const organization = req.body.organization.login

    github.push({
        url: url,
        number: number,
        state: state,
        title: title,
        user: user,
        body: body,
        created_at: created_at,
        updated_at: updated_at,
        branch_head: branch_head,
        branch_base: branch_base,
        commits: commits,
        name: name,
        user_repo: user_repo,
        language: language,
        default_branch: default_branch,
        organization: organization,
    })

    console.log(github)

    res.status(200).json({
        url: url,
        number: number,
        state: state,
        title: title,
        user: user,
        body: body,
        created_at: created_at,
        updated_at: updated_at,
        branch_head: branch_head,
        branch_base: branch_base,
        commits: commits,
        name: name,
        user_repo: user_repo,
        language: language,
        default_branch: default_branch,
        organization: organization,
    })
})

app.get('/rapeize', (req, res) => {
    res.render("github", { github: github })
})

app.listen(process.env.PORT || 8000, () => console.log('Server at port 8000'))