const fs = require('fs')

console.log('http://localhost:8080')

a_func = function (err, file_content_just_read) {
  if (err) {
    throw err
  }
  http.createServer(function (request, response) {
    // read file depends on request
    response.writeHeader(200, { "Content-Type": "text/html" })
    response.write(file_content_just_read)
    response.end()
  }).listen(8080)
}

// open local file and read its contents
// I/O operation, interact with OS, async, when it finished, it calls x (callback function) 
fs.readFile('html/hello.html', a_func)
