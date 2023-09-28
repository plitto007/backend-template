import express from 'express'
import fetch from 'node-fetch'

import os from 'os'
const app = express()
const port = 3000
app.get('/', (req, res) => {
    res.send(' Hello World! from '+os.hostname())
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})