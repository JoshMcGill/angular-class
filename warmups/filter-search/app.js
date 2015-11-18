var app = angular.module('SearchApp', []);

app.controller('MainController', ['$scope', function ($scope) {

            $scope.search = null;

            $scope.words = ["cat", "car", "dog", "rack", "zebra", "zoo", "cape", "door", "rad", "sea", "see", "to", "two"]

            $scope.filterSearch = function (search) {
                var newArr = []
                var length = $scope.search.length;
                
                for (var i in $scope.words) {
                    if ($scope.search.substring(0, length) === $scope.words[i].substring(0, length)) {
                            newArr.push($scope.words[i]);
                        }
                    }
                console.log(newArr.toString())
                }
            }]);
