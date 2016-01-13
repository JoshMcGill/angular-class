var express = require("express");
var app = express();

var mongoose = require("mongoose");
var morgan = require("morgan");
var bodyParser = require("body-parser");

var port = process.env.PORT || 8000;

var db = mongoose.connect("mongodb://localhost/todos");
var Todo = require("./models/todo");

app.use(morgan("dev"));
app.use(bodyParser.json());


var todo = new Todo({title: "Garbage", price: 0});
todo.save();


app.get("/", function (req, res) {

    res.send("its working");

})


app.listen(port, function () {
    console.log("Server is running on port " + port);
});