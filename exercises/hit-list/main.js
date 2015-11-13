var app = angular.module('HitList', []);

app.controller('MainController', ["$scope", "$http", function ($scope, $http) {

    $http.get("http://mean.codingcamp.us:6543/hitlist.json").then(function(response){
        $scope.hitList = response.data;   
    }, function (response){
        alert("This could not be loaded. Error: " + response.status + " " + response.statusText);   
    });
    
}]);