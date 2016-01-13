var express = require("express");
var authRouter = express.Router();
var User = require("../models/user");
var jwt = require("jsonwebtoken");
var config = require("../config")

// Login endpoint
authRouter.post("/login", function(req, res){
    User.findOne({username: req.body.username}, function(err, user){
        if (err) res.status(500).send(err);
        if (!user) res.status(404).send("That username does not exist");
        else if (user) {
            if(user.password !== req.body.password){
                res.status(401).send("Incorrect Password");   
            }else {
                var token = jwt.sign(user, config.secret);
                res.send(token);
            }
        }
    });
});

// Signup endpoint
authRouter.post("/signup", function(req, res){
    var user = new User(req.body);
    user.save(function(err, newUser){
        if(err) res.status(500).send(err);
        res.send(newUser);
    })
})

module.exports = authRouter;