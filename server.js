const express = require('express')
const app = express()

var PORT = process.env.PORT || 3001;

app.get("/", function(req, res) {
    res.json(path.join(__dirname, "public/index.html"));
  });
  
 
app.listen(PORT, function(){


})