const express = require('express')

const app = express()

const port = 3333

app.get('/', (req,res)=>{
    return res.json({message: 'Hello Word'})
})

app.listen(port, ()=>{
    console.log(`Servidor online na porta: ${port}`)
})