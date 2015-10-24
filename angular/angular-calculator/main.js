var myApp = angular.module('calculator', []);

myApp.controller("mainController", function($scope){

    $scope.number = {
        number1: 0,
        number2: 0
    }
    
    $scope.sumTotal = 0;
    
    $scope.sum = function(num1, num2){
        
        $scope.sumTotal = parseInt(num1) + parseInt(num2);
    }
    
});

myApp.controller("secondController", function($scope){

    $scope.number = {
        number1: 0,
        number2: 0
    }
    
    $scope.sumTotal = 0;
    
    $scope.sum = function(num1, num2){
        
        $scope.sumTotal = parseInt(num1) * parseInt(num2);
    }
    
});