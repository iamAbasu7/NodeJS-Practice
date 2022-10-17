const http = require('http');
const fs = require('fs');


const hostname = '127.0.0.1';
const port = 3000;
const home = fs.readFileSync('index.html');
const product = fs.readFileSync('product.html');
const store = fs.readFileSync('store.html');
const about = fs.readFileSync('about.html');
const contactUs= fs.readFileSync('contactUs.html');

const server = http.createServer((req, res) => {
  console.log(req.url)  
  res.statusCode = 200;
  url = req.url;
  res.setHeader('Content-Type', 'text/html');
  if(url == '/index.html')
  {
    res.end(home);
  }
  else if(url=='/product.html')
  {
    res.end(product);
  }
  else if(url=='/store.html')
  {
    res.end(store);
  }
  else if(url == '/about.html')
  {
    res.end(about);
  }
  else if(url == '/contactUs.html')
  {
    res.end(contactUs);
  }
  else
  {
      res.statusCode = 404;
      res.end("<h1>404 Not Found</h1>");
  }
  
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});