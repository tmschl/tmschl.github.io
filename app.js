var express = require('express');
var app = express();
var compression = require('compression');
var oneDay = 86400000;

app.use(compression());

app.use(express.static(__dirname + '/build/', { maxAge: oneDay }));

var port = process.env.PORT || 8000;
app.listen(port, function(){
    console.log('listening on', port);
});
