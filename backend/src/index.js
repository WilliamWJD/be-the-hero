const express = require('express')
const routes = require('./routes')
const cors = require('cors')
const { errors } = require('celebrate')

require('dotenv').config()

const app = express()

const port = process.env.PORT_SERVER || 3333

app.use(cors())
app.use(express.json())
app.use(routes)
app.use(errors())

app.listen(port, ()=>{
    console.log(`Servidor online`)
})