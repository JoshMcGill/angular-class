var app = angular.module("DinoPets");

app.controller("SignupController", ["$location", "$scope", "UserService", function($location, $scope, UserService) {
    $scope.passwordMessage = "";
    
    $scope.signup = function (user) {
        
        if ($scope.user.password !== $scope.passwordRepeat) {
            $scope.passwordMessage = "Passwords do not match"
        } else {
            // perform the signup through another service
            UserService.signup(user).then(function (response) {
                $location.path("/login");
            }, function(response) {
                alert("There was a problem signing up");
            });
        }
    }
}]);