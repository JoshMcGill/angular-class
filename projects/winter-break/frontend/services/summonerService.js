var app = angular.module('WinterBreak');

app.service('SummonerService', ['$http', function ($http) {
    this.getPlayerStats = function (summonerId) {
        return $http.post('http://localhost:5000/api/summoner/stats/' + summonerId).then(function (response) {
            return response;
        })
    }

    this.getRecentGames = function (summonerId) {
        return $http.post('http://localhost:5000/api/summoner/match-history/' + summonerId).then(function (response) {
            return response;
        })
    }

    this.getSummonerInfo = function (summonerId) {
        return $http.post('http://localhost:5000/api/summoner/basic/' + summonerId).then(function (response) {
            return response;
        })
    }
    
    this.getRanked = function (summonerId) {
        return $http.post('http://localhost:5000/api/summoner/ranked/' + summonerId).then(function (response) {
            return response;
        })
    }
    
    this.getChampionImg = function(champId){
        return $http.post('http://localhost:5000/api/summoner/champion-image/' + champId).then(function(response){
            return response.data;   
        })  
    }    
    
    this.getSummonerId = function(summonerName){
        return $http.post('http://localhost:5000/api/summoner/' + summonerName).then(function(response){
            return response;   
        })  
    }
}]);