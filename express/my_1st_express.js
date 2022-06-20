const Express = require('express');
const path = require('path');

const app = Express()

const x = function(req, res){
    res.sendFile("html/1.html")
}
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname +'/index.html'));
    //__dirname : It will resolve to your project folder.
  });

  
//post vs get?
app.post('/', (req, res) => {
    res.send('POST request to the homepage')
  })

app.listen(8080)