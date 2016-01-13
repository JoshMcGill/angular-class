var express = require('express');
var app = express();

var mongoose = require('mongoose');
var cors = require('cors');
var bodyParser = require('body-parser');
var expressJwt = require('express-jwt');
var config = require('./config')
var db = mongoose.connect(config.connection);
var requestify = require('requestify');

var port = process.env.PORT || 5000;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/api', expressJwt({
    secret: config.secret
}));
app.use('/auth', require('./routes/authRoutes'));
app.use('/api/user', require('./routes/userRoutes'));
app.use('/api/summoner', require('./routes/summonerRoutes'));


app.listen(port, function () {
    console.log('This feature pesentation now prepared for you on port ' + port + '!')
})