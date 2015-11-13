var app = angular.module("MyApp", ['ngRoute']);

app.config(function ($routeProvider) {

    $routeProvider.when("/", {
        templateUrl: "pages/main.html",
        controller: "MainController"
    }).when("/main", {
        templateUrl: "pages/main.html",
        controller: "MainController"
    }).when("/second", {
        templateUrl: "pages/second.html",
        controller: "MainController"
    })

    $routeProvider.otherwise("/", {
        templateUrl: "pages/main.html",
        controller: "MainController"
    })

});

app.controller("MainController", ["$scope", function ($scope) {

    $scope.mainList = [
        {
            name: "Iphone 6s",
            picture: "https://www.att.com/catalog/en/skus/images/apple-iphone%206%20plus%20-%2016gb-space%20gray-450x350.png?01AD=3R8dZLeBGzWVc-ZdiqMfEPy0V6a63JGXH6gwQG_NV9-xb6UsTKwnqpw&01RI=0D01CD7E33E4EBE&01NA=",
            price: 600
        },
        {
            name: "Custom Desktop",
            picture: "http://static1.1.sqspcdn.com/static/f/1037034/14585885/1318370684747/CTU-Custom-Built-PC.jpg?token=pjQ5%2BqfOrIgAYe4o26j8vft9wBI%3D",
            price: 1000
        },
    ]
    
    $scope.secondList = [
        {
            name: "Halo 5",
            picture: "http://www.geekwire.com/wp-content/uploads/2015/04/Halo5_KeyArt_Horiz_Final.jpg",
            price: 60
        },
        {
            name: "Black Ops 3",
            picture: "http://charlieintel.com/wp-content/uploads/2015/04/WtolZw1.jpg",
            price: 60
        },
        {
            name: "Taylor Acoustic Guitar",
            picture: "https://www.taylorguitars.com/sites/default/files/guitars/acoustic/models/Media%20browser/412ce-front-taylor-guitars-large.jpg",
            price: 500
        }
        
    ]
    
    $scope.mainListTotal = $scope.mainList[1].price + $scope.mainList[0].price;
    $scope.secondListTotal = $scope.secondList[0].price + $scope.secondList[1].price + $scope.secondList[2].price;

}]);

app.directive('wantItem', function () {

    return {
        restrict: "EA",
        templateUrl: 'templates/want-item.html'
    }

});