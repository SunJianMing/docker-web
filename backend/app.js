const express = require('express')
const app = new express()

app.get('/',(req,res)=>{
    res.send('hello pm2 ----- node')
})

app.get('/api/list',(req,res)=>{
    res.json({
        data:[1,2,3,'s','j','m',4,5]
    })
})

app.listen(3000,()=>{
    console.log('express pm2  start 3000')
})