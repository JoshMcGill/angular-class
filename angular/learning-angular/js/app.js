var myApp = angular.module('learningAngular', [])

myApp.controller('MainController', function($scope){
    
    $scope.person = {
        name: "Josh",
        age: 21,
        siblings: 3
    }
    
    $scope.changeName = function() {
        $scope.person.name = "Josh McGill";    
    }
    
});