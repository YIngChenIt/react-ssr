let express = require('express')
let cors = require('cors')
let app = express()
app.use(cors({
    origin:'http://localhost:3000'
}))
let users = [
    {
        id: 1,
        name: 'chenying'
    },
    {
        id: 2,
        name: 'qianduan'
    }
]
app.get('/api/users', (req, res) => {
    res.json(users)
})
app.listen(4000)