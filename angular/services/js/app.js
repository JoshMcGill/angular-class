var app = angular.module("Services", []);

var Person = function(name, age) {
    this.name = name;
    this.age = age;
}

var bob = new Person("Bob", 30);

app.controller("MainController", ["$scope", "NameService", function($scope, NameService) {

    $scope.displayName = NameService.name;

    $scope.updateNameService = function(name) {
        NameService.updateName(name);
        $scope.displayName = NameService.name;
    }


}]);