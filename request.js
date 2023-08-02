const http=require('http');

http.createServer((req,resp)=>{
    resp.write("<h1>Hii....This is node</h1>");
    resp.end();
}).listen(4500);


// ..........