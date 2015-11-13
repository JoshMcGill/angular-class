var app = angular.module('MovieApp', []);

app.controller('MainController', ['$scope', '$http', function ($scope, $http) {
    $scope.searchResults = [];
    var url = "http://www.omdbapi.com/";

    $scope.search = function () {
        $http.get(url, {
            params: {
                "s": $scope.titleSearch,
                "y": $scope.yearSearch, // will only return films from 1986. Normally you don't hard-code this in.
                "type": $scope.typeSearch
            },
            timeout: 5000
        }).then(function (response) {
            $scope.searchResults = response.data.Search;
            console.log($scope.searchResults);
        }, function (response) {
            console.log("There was an error!");
        })
    }
}]);