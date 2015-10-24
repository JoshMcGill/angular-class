var myApp = angular.module('MightyClicker', []);

myApp.service('BlueService', function () {
    this.count = 10;

    this.reset = function () {
        this.count = 10;
    };
});

myApp.service('RedService', function () {
    this.count = 10;

    this.reset = function () {
        this.count = 10;

    };
});

myApp.controller('MainController', ['$scope', 'BlueService', 'RedService', function ($scope, BlueService, RedService) {
    $scope.redCount = RedService.count;
    $scope.blueCount = BlueService.count;

    $scope.reduceRed = function (count) {
        RedService.count += +1;
        BlueService.count += -1;

        $scope.redCount = RedService.count;
        $scope.blueCount = BlueService.count;

        if ($scope.redCount === 0 || $scope.blueCount === 0) {
            BlueService.reset();
            RedService.reset();
            $scope.redCount = RedService.count;
            $scope.blueCount = BlueService.count;
        }

    };

    $scope.reduceBlue = function (count) {
        RedService.count += -1;
        BlueService.count += +1;

        $scope.redCount = RedService.count;
        $scope.blueCount = BlueService.count;


        if ($scope.redCount === 0 || $scope.blueCount === 0) {
            BlueService.reset();
            RedService.reset();
            $scope.redCount = RedService.count;
            $scope.blueCount = BlueService.count;
        }
    };
}]);