var express = require('express');
var summonerRouter = express.Router();
var mongoose = require('mongoose');
var requestify = require('requestify');

summonerRouter.route('/stats/:summonerId')
    .post(function (req, res) {
        requestify.get('https://na.api.pvp.net/api/lol/na/v1.3/stats/by-summoner/' + req.params.summonerId + '/summary?season=SEASON2015&api_key=0f90b0a5-ba07-4f30-8091-76d274e2e959')
            .then(function (response) {
                // Get the response body (JSON parsed or jQuery object for XMLs)
                response.getBody();
                res.send(response.body);
            });
    });
summonerRouter.route('/match-history/:summonerId')
    .post(function (req, res) {
        requestify.get('https://na.api.pvp.net/api/lol/na/v1.3/game/by-summoner/' + req.params.summonerId + '/recent?api_key=0f90b0a5-ba07-4f30-8091-76d274e2e959')
            .then(function (response) {
                response.getBody();
                res.send(response.body);
            });
    });
summonerRouter.route('/basic/:summonerId')
    .post(function (req, res) {
        requestify.get('https://na.api.pvp.net/api/lol/na/v1.4/summoner/' + req.params.summonerId + '?api_key=0f90b0a5-ba07-4f30-8091-76d274e2e959')
            .then(function (response) {
                response.getBody();
                res.send(response.body);
            });
    });
summonerRouter.route('/ranked/:summonerId')
    .post(function (req, res) {
        requestify.get('https://na.api.pvp.net/api/lol/na/v2.5/league/by-summoner/' + req.params.summonerId + '/entry?api_key=0f90b0a5-ba07-4f30-8091-76d274e2e959')
            .then(function (response) {
                response.getBody();
                res.send(response.body);
            });
    });
summonerRouter.route('/champion-image/:champId')
    .post(function (req, res) {
        requestify.get('https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion/' + req.params.champId + '?champData=image&api_key=0f90b0a5-ba07-4f30-8091-76d274e2e959')
            .then(function (response) {
                response.getBody();
                res.send(response.body);
            });
    });
summonerRouter.route('/:summonerName')
    .post(function (req, res) {
        requestify.get('https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/' + req.params.summonerName + '?api_key=0f90b0a5-ba07-4f30-8091-76d274e2e959')
            .then(function (response) {
                response.getBody();
                res.send(response.body);
            });
    });

module.exports = summonerRouter;