var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var treats = require('./routes/treats');
var port = process.env.PORT || 3000;

// Get static files
app.use(express.static('./server/public'));

app.use(bodyParser.urlencoded({extended: true}));

// Get index.html
app.get('/', function(req, res) {
  res.sendFile(path.resolve('./server/public/views/index.html'));
});

app.use('/treats', treats);

app.listen(port, function() {
  console.log('Server running on port: ', port);
});
