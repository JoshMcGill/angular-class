var app = angular.module('WinterBreak');

app.directive('navbar', ['UserService', function (UserService) {
    return {
        templateUrl: 'navbar/navbar.html',
        link: function (scope) {
            scope.$watch(function () {
                return UserService.isAuthenticated();
            }, function () {
                scope.isAuthenticated = UserService.isAuthenticated();
            });
        }
    }

}])