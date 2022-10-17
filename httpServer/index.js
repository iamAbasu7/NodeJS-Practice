const http = require('http');

const server = http.createServer((req,res) => {
    if(req.url ==  '/'){
        res.end("Hello from home");
    }
    else if(req.url == '/about'){
        res.end("Hello from about us");
    }
    else if(req.url == '/contact'){
        res.end("Hello from contact us");
    }
    else{
        res.writeHead(404,{"Content-type":"text/html"});
        res.end("<h1>404 error page</h>");
    }
    // res.end("Hello From Other side");
});

server.listen(8000,"127.0.0.1", ()=>{
    console.log("Listening to port 8000")
})