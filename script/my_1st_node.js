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


// var http = require('http');

//visit-triggered
http.createServer(function (request, response) {
  console.log('Output:')
  console.log(request.url)

  response.writeHead(200, {'Content-Type': 'text/html'});

  // JS define a string
  // https://www.w3schools.com/js/js_strings.asp
  //if request.url is _ then do this
  switch(request.url){
    case "/anything": 
      response.write("hol")
      break;
    case "/hol":
      response.write("anything")
      break;
    case "/yellowstonefals":
      response.writeHeader(200, { "Content-Type": "image/jpg" });
      response.write(file_content_just_read);
      break;
    default:
      response.write("ERROR 404: Page Not Found")
    }

  response.write(`
  <html>
    ${request.url}
  </html>
  `)

  response.end('');

}).listen(8080);