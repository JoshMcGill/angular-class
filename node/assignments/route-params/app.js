var express = require("express")
var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(function (req, res, next) {
    console.log("1st middle");
    next();

});

app.get("/", function (req, res) {
    console.log("inside '/' middleware")
    res.send("HELLO WORLD");
})

app.listen(process.env.PORT || 9000);