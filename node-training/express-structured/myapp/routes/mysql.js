var express = require('express');
var router = express.Router();
var mysql = require('mysql');




//mysql connections
router.use('/', function (req, res, next) {

    console.log("Request " + req.url);

    var connection = mysql.createConnection({
       host: '127.0.0.1',
       user: 'awais',
       password: 'awais',
       database: 'awais'

    });

    connection.query('select * from user', function (err, rows) {

        if(err) throw err;
        console.log("from mysql "+ rows[0].username);


    });

next();

    
});

module.exports = router;


