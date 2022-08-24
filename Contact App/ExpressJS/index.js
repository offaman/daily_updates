const http = require('http')
const fs = require('fs')

const port = 8000;

function requesHandler(req,res){
    res.writeHead(200, {'content-type' : 'text/html'})
    
    let filepath;
    switch(req.url){
        case '/':
            filepath =  './index.html'
            break;
        case '/profile':
            filepath = './profile.html'
            break;
        default:
            filepath = './404.html'
    }
    fs.readFile(filepath,(err,data)=>{
        if(err){
            console.log(err);
            return res.end('<h1>Error!</h1>')
        }
        return res.end(data)
    })

}

const server = http.createServer(requesHandler)
server.listen(port,function(err){
    if(err){
        console.log(err);
        return;
    }
})

