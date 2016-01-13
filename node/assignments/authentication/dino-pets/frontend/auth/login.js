var app = angular.module("DinoPets");

app.controller("LoginController", ["$location", "$scope", "UserService", function($location, $scope, UserService) {
    
    $scope.login = function (user) {
        // perform the login through another service
        UserService.login(user).then(function (response) {
            $location.path("/");
        }, function (response) {
            alert("There was a problem logging in");
        });
    }
    
}]);