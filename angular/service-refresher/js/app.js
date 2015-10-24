var app = angular.module('Cartoon', []);


app.controller('MainController', ["$scope", "CartoonService", function ($scope, CartoonService) {

    $scope.title = "Title";
    $scope.description = "Description";
    $scope.url = "Img URL"
    
    $scope.cartoonArray = CartoonService.cartoons;

    $scope.createCartoon = function () {

        var newCartoon = {
            title: $scope.title,
            description: $scope.description,
            url: $scope.url
        };

        CartoonService.addCartoon(newCartoon);

    }
}])