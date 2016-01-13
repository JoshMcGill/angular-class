var express = require("express");
var app = express();

var morgan = require("morgan");
var mongoose = require("mongoose");
var cors = require("cors");
var bodyParser = require("body-parser");
var config = require("./config");
var expressJwt = require("express-jwt")

var port = process.env.PORT || 5050;

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

mongoose.connect(config.database);

app.use("/api", expressJwt({secret: config.secret}));
app.use("/api/present", require("./routes/presentRoutes"));
app.use("/auth", require("./routes/authRoutes"));

app.listen(port, function () {
    console.log("App is running on port " + port);
});