var app = angular.module('Portfolio', ['ngRoute']);

app.config(function ($routeProvider) {

    $routeProvider.when("/", {
        templateUrl: "pages/home.html",
        controller: "MainController"
    }).when("/home", {
        templateUrl: "pages/home.html",
        controller: "MainController"
    }).when("/projects", {
        templateUrl: "pages/projects.html",
        controller: "MainController"
    }).when("/about", {
        templateUrl: "pages/about.html",
        controller: "MainController"
    }).when("/resume", {
        templateUrl: "pages/resume.html",
        controller: "MainController"
    }).when("/contact", {
        templateUrl: "pages/contact.html",
        controller: "MainController"
    }).otherwise({
        redirectTo: "/"
    });

});

app.directive('prettyp', function () {
        return function (scope, element, attrs) {
            $("[rel^='prettyPhoto']").prettyPhoto({
                deeplinking: false
            });
        }
    })

    app.controller('MainController', ['$scope', function ($scope) {

}])