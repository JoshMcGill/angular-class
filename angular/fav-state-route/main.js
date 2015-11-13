var app = angular.module('FavState', ['ngRoute']);

app.config(function ($routeProvider) {

    $routeProvider.when("/", {
        templateUrl: "home.html",
        controller: "MainController"
    }).when("/about", {
        templateUrl: "about.html",
        controller: "MainController"
    }).when("/why", {
        templateUrl: "why.html",
        controller: "MainController"
    })

    $routeProvider.otherwise("/", {
        templateUrl: "home.html",
        controller: "MainController"
    })

});

app.controller('MainController', ['$scope', function ($scope) {

    $scope.state = "Utah";

}]);