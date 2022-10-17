const  fs  = require('fs');
const http = require('http');

const server = http.createServer((req, res)=>{
    if(req.url == '/')
    {
        res.writeHead(200, {"Content-type": 'text/plain'})
        res.end("Welcome Home");
    }
    else if(req.url == '/about')
    {
        res.writeHead(200, {"Content-type": 'text/plain'})
        res.end("This is all about us");
    }
    else if(req.url = "/userapi")
    {
        res.writeHead(200, {"Content-type": 'application/json'})
        fs.readFile(`${__dirname}/example.json`, 'utf-8', (err,data)=>{
            console.log(data);
            
            // const obj = JSON.parse(data);
            // res.end(obj);
            
        })
        
    }
    else
    {
        res.writeHead(404, {"Content-type": 'text/html'})
        res.end("<h3>404 Not Found</h3>");
    }

});

server.listen(8000, "127.0.0.1", ()=>{
    console.log("Listening to the port no 8000");
})