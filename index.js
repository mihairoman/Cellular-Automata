var express = require('express'),
    morgan = require('morgan');

var port = Number(process.env.PORT || 3000);

app = express();
app.use(morgan('dev'));

app.all("/", function(req, res, next) {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    res.end("Hello World!!!");
});

app.listen(port);   
