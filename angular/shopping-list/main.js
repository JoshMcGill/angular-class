var myApp = angular.module('shoppingApp', []);

myApp.controller('MainController', function($scope){
    $scope.list = [];
    $scope.currentItem = "Write here";
    
    $scope.addListItem = function(){
        $scope.list.push($scope.currentItem);
        console.log($scope.list);
    }

    $scope.removeItem = function(item){
        var index = $scope.list.indexOf(item);
        $scope.list.splice(index, 1);
    }
});