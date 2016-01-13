var express = require('express');
var dinoRoute = express.Router();
var mongoose = require('mongoose');
var Dino = require('../models/dinos');

dinoRoute.route('/')
    .get(function (req, res) {
        Dino.find({owner: req.user._id}, function (err, dinos) {
            if (err) res.status(500).send(err);
            res.send(dinos);
        })
    })
    .post(function (req, res) {
        var dino = new Dino(req.body);
        dino.owner = req.user;
        dino.save(function (err) {
            if (err) res.status(500).send(err);
            res.send(dino);
        })
    })


dinoRoute.route('/:dinoId')
    .get(function (req, res) {
        Dino.findOne({id: req.params.dinoId, owner: req.user._id}, function (err, dino) {
            if (err) res.status(500).send(err);
            res.send(dino);
        });
    })
    .put(function (req, res){
        Dino.findOneAndUpdate({id: req.params.dinoId, owner: req.user._id}, req.body, {new: true}, function(err, dino){
            if (err) res.status(500).send(err);
            res.send(dino);
        })
})
    .delete(function (req, res){
        Dino.findOneAndRemove({id: req.params.dinoId, owner: req.user._id}, function(err, dino){
            if (err) res.status(500).send(err);
            res.send(dino);
        })
})

module.exports = dinoRoute;