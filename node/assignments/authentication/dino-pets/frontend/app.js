var app = angular.module("DinoPets", ["ngRoute", "DinoPetsAuth"]);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "home/home.html"
        })
        .when("/signup", {
            templateUrl: "auth/signup.html",
            controller: "SignupController"
        })
        .when("/login", {
            templateUrl: "auth/login.html",
            controller: "LoginController"
        });
});