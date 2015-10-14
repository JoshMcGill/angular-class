var myApp = angular.module("myModule", [])

myApp.controller('MainController', function($scope){
    
    $scope.person = {
        name: "Josh",
        age: 21,
        siblings: 3
    }
    
});