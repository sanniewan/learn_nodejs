const http = require('http');

const requestListener = function (req, res) {
  res.writeHead(200);
  res.write("<p> Sannie goes to Stanford for a day.</p>")
  res.write("<p> Sannie sings for a living. </p>")
  res.end('Hello, Sannie!');
}

const server = http.createServer(requestListener);
server.listen(8080);