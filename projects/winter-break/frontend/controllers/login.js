var app = angular.module('WinterBreak');

app.controller('LoginController', ['$location', '$scope', 'UserService', function ($location, $scope, UserService) {
    $scope.logout = UserService.logout;

    $scope.login = function (user) {
        UserService.login(user).then(function (response) {
            localStorage['summonerName'] = response.data.user.summonerName;
            localStorage['summonerId'] = response.data.user.summonerId;
            $location.path('/');
        }, function (response) {
            alert('There was a problem logging in');
        })
    }
}])