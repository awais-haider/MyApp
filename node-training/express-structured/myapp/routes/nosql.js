
var express = require('express');
var router = express.Router();
var nosql = require('mongoose');




//mysql connections
router.use('/', function (req, res, next) {

    console.log("Request " + req.url);
    nosql.connect('mongodb://localhost:27017/local');


    var db = nosql.connection;

    // Get Mongoose to use the global promise library
    db.Promise = global.Promise;

//Bind connection to error event (to get notification of connection errors)
    db.on('error', console.error.bind(console, 'MongoDB connection error:'));

    db.on('connected', console.error.bind(console, 'MongoDB connection success:'));


    var Schema = nosql.Schema;


    var Test= new Schema({

        username: String,
        age: String

    });



    var TestData = nosql.model('Test', Test);

    var testData1 = new TestData({
        username: 'awais',
        age: '25'
    });

    testData1.save(function (err){

        console.log('Here s');

    });



    //console.log(test.findOne());




    next();


});

module.exports = router;


