const express = require('express')
const router = require('./route')
const app = express()
const host = '0.0.0.0';
const port = process.env.PORT || 3000

app.use(express.json())
app.use(router)
app.listen(port,host, () => {
    console.log('Server is up on port ' + port)
})