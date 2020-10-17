const http = require('http')
const webhookHandler = require('github-webhook-handler')
const handler = webhookHandler({
    path:"/webhooks",
    secret:'mrSunjianming'
})
const {spawn} = require('child_process')

function run_cmd(cmd,args,callback){
    const child = spawn(cmd,args)
    let resp = ''
    child.stdout.on('data',chunk=>{
        resp += chunk.toString()
    })
    child.stdout.on('end',()=>{
        callback(resp)
    })
}

http.createServer((req,res)=>{
    handler(req,res,err=>{
        res.statusCode = 404
        res.end('no such location')
    })
}).listen(7777,()=>{
    console.log('webhook listen 7777')
})
handler.on('error',err=>{
    console.error('Error',err.message)
})

handler.on('push',event=>{
    console.log('Receive *',event.payload.ref)
    run_cmd('sh',['./deploy-dev.sh'],function(res){
        console.log(res)
    })
})