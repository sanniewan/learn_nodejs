// Create a web server, readFile depends on "request.url".
//
// https://www.w3schools.com/js/default.asp
// https://nodejs.dev/learn/the-nodejs-http-module
// https://www.w3schools.com/nodejs/nodejs_http.asp

//https://www.geeksforgeeks.org/how-to-fetch-images-from-node-js-server/ 

const fs = require('fs')
const http = require('http')

console.log('http://localhost:8080')


http.createServer(function (request, response) {
    // read file depends on request: either plain text or an image I took in yellowstone
    // for now, can only access the image in its jpg format, image from 2.html doesnt work for some reason
    let file_path
    let content_type

    switch(request.url){
        case ("/hello"):
            file_path = "html/1.html"
            content_type = "text/html"
            break

        case ("/spring"):
            file_path = "html/ys_grand_prismatic.jpg"
            content_type = "image/jpg"
            break
        default:
            file_path = "html/error.html"
            content_type = "text/html"
    }
    response.writeHeader(200, { "Content-Type": content_type })

    fs.readFile(file_path, function(err, content){
        response.end(content)
    })

}).listen(8080)