var express = require('express');
var app = express();

var PORT = process.env.PORT || 3000;

app.use(express.static(__dirname));

app.listen(PORT, function() {
    console.log('Server listening on ' + PORT);
});

var blogs = [{id:1, content: 'Blog text ...1'}, {id:2, content: 'Blog text ...2'}]

app.get('/blogs', function(req, res){
  res.send({blogs:blogs})
});
