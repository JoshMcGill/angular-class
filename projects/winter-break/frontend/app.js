var app = angular.module('WinterBreak', ['ngRoute', 'WinterBreakAuth']);

app.config(function ($routeProvider, $httpProvider) {
    $routeProvider.when('/', {
        templateUrl: 'pages/home.html',
        controller: 'HomeController'
    }).when('/login', {
        templateUrl: 'pages/login.html',
        controller: 'LoginController'
    }).when('/signup', {
        templateUrl: 'pages/signup.html',
        controller: 'SignupController'
    }).when('/search', {
        templateUrl: 'pages/search.html',
        controller: 'SearchController'
    });

})

