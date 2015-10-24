var myApp = angular.module('WorldEnd', []);

myApp.controller('MainController', ['$scope', function ($scope) {
    $scope.test = 20;
    var incrementTime = function () {
        intervalHandler = setInterval(function () {
            $scope.test -= .01;
        }, 10)
    }
    if ($scope.test === 0) {
        clearInterval(intervalHandler);
    }
    
    incrementTime();
}])