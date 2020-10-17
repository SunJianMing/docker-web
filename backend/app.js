const express = require('express')
const app = new express()

app.get('/',(req,res)=>{
    res.send('hello pm2 ----- node')
})

app.get('/api/list',(req,res)=>{
    res.json({
        data:['a','b','c']
    })
})

app.listen(3000,()=>{
    console.log('express pm2  start 3000')
})