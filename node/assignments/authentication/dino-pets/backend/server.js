var express = require('express');
var app = express();
var Dino = require('./models/dinos.js');
var dinoRoute = require("./routes/dinoRoutes");

var mongoose = require('mongoose');
var morgan = require('morgan');
var cors = require('cors');
var bodyParser = require('body-parser');
var expressJwt = require('express-jwt');
var config = require('./config');
var db = mongoose.connect('mongodb://localhost/dinoPets');

var port = process.env.PORT || 9000;

app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use('/api', expressJwt({secret: config.secret}));
app.use("/api/dino", dinoRoute);
app.use('/auth', require('./routes/authRoutes'));


app.listen(port, function (){
    console.log("You got served on port " + port + "!")
});