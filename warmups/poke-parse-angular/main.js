var app = angular.module('PokeParser', []);

app.controller('PokeController', ['$scope', '$http', function ($scope, $http) {

    $http.get('http://pokeapi.co/api/v1/pokedex').then(function (response) {
            $scope.pokemon = response.data.objects[0].pokemon;
        },
        function (response) {
            alert("It didn't work! Error: " + response.status + " " + response.statusText);
        });

}]);