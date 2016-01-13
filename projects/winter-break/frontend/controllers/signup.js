var app = angular.module('WinterBreak');

app.controller('SignupController', ['$scope', '$location', 'UserService', function ($scope, $location, UserService) {

    $scope.errorMessage = '';

    var changeSummonerName = function (summonerName) {
        summonerName = summonerName.replace(/\s+/g, '').toLowerCase();
        return summonerName;
    }


    $scope.signup = function (user) {
        if ($scope.user.password === $scope.reEnter) {
            $scope.errorMessage = 'Matching!'

            var newSummonerName = changeSummonerName(user.summonerName)

            UserService.getSummonerId(newSummonerName).then(function (response) {
                user.summonerId = response.data[newSummonerName].id;

                UserService.signup(user).then(function (reponse) {
                    $location.path('/login');
                }, function (response) {
                    alert('There was a problem signing you up, please try again!');
                });
            })
        } else {
            $scope.errorMessage = 'Passwords do NOT match! Retry!'
        }
    }
}])