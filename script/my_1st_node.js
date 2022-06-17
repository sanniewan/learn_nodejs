const http = require('http');
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

console.log('http://localhost:8080')

// a_func = function (err, file_content_just_read) {
//   if (err) {
//     throw err
//   }
//   http.createServer(function (request, response) {
//     // read file depends on request
//     response.writeHeader(200, { "Content-Type": "text/html" });
//     response.write(file_content_just_read);
//     response.end();
//   }).listen(8080);
// }

//open local file and read its contents
// I/O operation, interact with OS, async, when it finished, it calls x (callback function) 
// fs.readFile('html/hello.html', a_func);


// var http = require('http');

//visit-triggered
http.createServer(function (request, response) {
  console.log('Output:')
  console.log(request.url)

  response.writeHead(200, {'Content-Type': 'text/html'});

  // JS define a string
  // https://www.w3schools.com/js/js_strings.asp
  //if request.url is _ then do this
  response.write(`
  <html>
    ${request}
  </html>
  `)
  response.end('');
}).listen(8080);