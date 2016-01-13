var express = require("express");
var mongoose = require('mongoose')
var app = express();
var Person = require("./models/person.js");
var Car = require("./models/cars.js");

app.get("/cars", function(req, res){
    res.send("hello");
})

app.listen(8000);