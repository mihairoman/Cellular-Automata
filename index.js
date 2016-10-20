var express = require('express'),
    morgan = require('morgan');

var port = Number(process.env.PORT || 3000);

app = express();
app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));

app.get("/", function(req, res, next) {
    res.sendFile("index.html"); //contains all the logic for generating the cells
});

app.listen(port);
