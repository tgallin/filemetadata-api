var express = require('express');
var multer = require('multer');

var app = express();
var upload = multer().single('inputFile');

app.set('views', './views');
app.set('view engine', 'pug');

app.use(express.static('public'));

app.post('/get-file-size', function(req, res) {
    upload(req, res, function(err) {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.json({
                size: req.file.size
            });
        }
    });
});

app.get('/', function(req, res) {
    res.render('index', {
        title: 'File Metadata Microservice',
        message: 'File Metadata Microservice'
    });
});

var port = process.env.PORT || 8080;

app.listen(port, function() {
    console.log('app listening on port ' + port);
});
