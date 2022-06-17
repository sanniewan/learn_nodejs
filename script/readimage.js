const fs = require('fs')
const http = require('http')

console.log('http://localhost:8080')


http.createServer(function (request, response) {
 
    response.writeHeader(200, { "Content-Type": "image/jpg" })

    fs.readFile("html/ys_grand_prismatic.jpg", function(err, content){
        response.end(content)
    })

}).listen(8080)