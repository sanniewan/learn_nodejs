// const http = require('http');
fs = require('fs');

// request = input
// response = output
// const requestListener = function (request, response) {
//   response.writeHead(200);
//   response.write("<p> aaaaaa Sannie goes to Stanford for a day.</p>")
//   response.write("<p> Sannie sings for a living. </p>")
//   response.end('Hello, Sannie!');
// }

// const server = http.createServer(requestListener);
// server.listen(8081);

console.log('http://localhost:8000')

// x = function (err, html) {
//   if (err) {
//     throw err
//   }
//   http.createServer(function (request, response) {
//     response.writeHeader(200, { "Content-Type": "text/html" });
//     response.write(html);
//     response.end();
//   }).listen(8080);
// }


// fs.readFile('javascript/hello.html', x);

const http = require('node:http');

// Create a local server to receive data from
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    data: 'Hello World!'
  }));
});

server.listen(8000);
