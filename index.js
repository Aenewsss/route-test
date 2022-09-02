require('dotenv').config()

const express = require('express')

const app = express()

app.use(express.json())
app.set('view engine', 'ejs')
app.set('views', 'src/views')

app.get('/', (req, res) => {
    res.send('hello')
})

app.get('/rapeize', (req, res) => {
    res.status(200).json({devJunior: ['Davi, Ale'], estag: 'Aenã'})
})

const git = []

app.post('/rapeize', (req, res) => {
    const [ url, number, state, title, body, created_at, updated_at ] = pull_request

    const user = pull_request.user.login
    const branch_head = pull_request.head.ref
    const branch_base = pull_request.base.ref
    const commits = pull_request._links.commits
    
    const [name, language, default_branch]  = repository.name

    const user_repo = repository.owner.login
    const organization = organization.login

    git.push({
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

    res.render("github", {
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

app.listen(process.env.PORT || 8000, () => console.log('Server at port 8000'))