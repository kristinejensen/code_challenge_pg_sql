var express = require('express');
var router = express.Router();
var pg = require('pg');
var config = {
  database: 'phi',
  host: 'localhost',
  port: 5432,
  max: 10,
  idleTimeoutMillis: 30000
};

var pool = new pg.Pool(config);

router.get('/', function(req, res){
  pool.connect(function(errorConnectingToDatabase, client, done){
    if(errorConnectingToDatabase){
      console.log('Error connecting to database: ', errorConnectingToDatabase);
      res.sendStatus(500);
    } else {
      client.query('SELECT * FROM treats;', function(errorMakingQuery, result){
        done();
        if(errorMakingQuery){
          console.log('Error making the database query: ', errorMakingQuery);
          res.sendStatus(500);
        } else {
          res.send(result.rows);
        }
      });
    }
  });
});//end of router.get

router.post('/new', function(req, res){
  var newTreat = req.body;
  pool.connect(function(errorConnectingToDatabase, client, done){
    if(errorConnectingToDatabase){
      console.log('Error connecting to database: ', errorConnectingToDatabase);
      res.sendStatus(500);
    } else {
      client.query('INSERT INTO treats (name, description, pic) VALUES ($1, $2, $3);',
      [newTreat.name, newTreat.description, newTreat.url],
      function(errorMakingQuery, result){
        done();
        if(errorMakingQuery){
          console.log('Error making the database query: ', errorMakingQuery);
          res.sendStatus(500);
        } else {
          res.sendStatus(200);
        }
      });
    }
  });
}); // end of router.post

























module.exports = router;
