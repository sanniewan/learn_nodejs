fs = require('fs');

const callback = function (err, html) {
    if (err) {
        throw err; 
    }

    html_str = String.fromCharCode(...html)
    console.log(html_str)
}

fs.readFile('script/1.txt', callback);