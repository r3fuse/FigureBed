const express  = require('express')
const cors = require('cors')
const app = express()
const uuid = require('node-uuid')
const bodyParser = require('body-parser')
const fs  = require('fs')
const path = require('path')
const port = 9999
app.use(express.static('public'))
app.use(cors())

app.use(bodyParser.text({
    type:'text/plain',
    limit:'10MB'
}))
app.listen(port,()=>{
    console.log('server is running!');
})

let uuidd;

app.post('/api/upload',(req,res)=>{
    const {fileType,imgBase64} = JSON.parse(req.body)
    const imgUrl = base64ToImage(imgBase64)
    res.send(uuidd+'.'+fileType)
})



const base64ToImage = (url)=>{
    uuidd = uuid.v4()
    const base64Data = url.replace(/^data:image\/\w+;base64,/, '')
    const imgBuffer = Buffer.from(base64Data,'base64')
    const outputFilePath = path.join(__dirname,`./public/${uuidd}.png`)
    fs.writeFile(outputFilePath,imgBuffer,(err)=>{
        if(err){
            console.log("失败",err);
            
        }else{
            console.log("成功",uuidd);
            return uuidd
        }
    })
}