fs = require('fs');

const callback = function (err, html) {
    if (err) {
        throw err; 
    }

    html_str = String.fromCharCode(...html)
    console.log(html_str)
}

fs.readFile('script/1.txt', callback);

// example of fromCharCode
arr = [72, 69, 76, 76, 79]
let text = String.fromCharCode(...arr);
console.log(text)
console.log(String.fromCharCode(90)) // Z

let a = 4
b = 3
a = b
console.log(a)