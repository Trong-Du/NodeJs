var http = require("http");

http.createServer((req, res) => { // request, response
    res.writeHead(200,{'Content-Type': 'text/html'})
    res.write("a<sup>2</sup> + bx + c = 0");
    res.end();
}).listen(8080);