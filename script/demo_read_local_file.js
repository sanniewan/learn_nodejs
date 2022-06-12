fs = require('fs');

fs.readFile('script/1.txt', function (err, html) {
    if (err) {
        throw err; 
    }
  
    html_str = String.fromCharCode(...html)
    console.log(html_str)
  });