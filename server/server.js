'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var mongoose = require("mongoose");
// var mongodb = config.mongo_db_address;

// mongoose.connect(mongodb, {useNewUrlParser: true});

var app = express();

app.use(express.static(__dirname));

app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.get('/', (req, res) => {
    res.send('Welcome to New Greenwood!')
});
  
app.listen(3003, () => {
    console.log('Example app listening on port 3003!')
});

