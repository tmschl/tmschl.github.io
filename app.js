var express = require('express'),
    compression = require('compression'),
    app = express();

app.use(compression());

app.use(express.static(__dirname + '/build/'));

var port = process.env.PORT || 8000;
app.listen(port, function(){
    console.log('listening on', port);
});
