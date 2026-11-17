const express = require('express')
const proxy = require('express-http-proxy')

const app = express()
const port = 8000

app.use('/api', proxy('http://localhost:3000'))
app.use('/', proxy('http://localhost:5173'))

app.listen(port, () => {
    console.log(`Web server app listen port: ${port}`)
})