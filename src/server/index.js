import render from './render'

let express = require('express')
let app = express()
app.use(express.static('public'))
app.get('*', (req, res) => {
    render(req, res)
})

app.listen(3000, () => {
    console.log('server start')
})