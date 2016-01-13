var myApp = angular.module('ngModule', []);

myApp.controller('MainController', function ($scope, $http) {

    $scope.bounties = [];

    $scope.firstName = null;
    $scope.lastName = null;
    $scope.living = null;
    $scope.reward = null;
    $scope.alliance = null;
    
    $scope.copyBounty = function(first, last, living, reward, alliance){
        $scope.firstName = first;
        $scope.lastName = last;
        $scope.living = living;
        $scope.reward = reward;
        $scope.alliance = alliance;
    }

    $http.get("http://localhost:5000/bounty").then(function (response) {
        console.log(response);
        $scope.bounties = response.data;
    }, function (response) {
        console.log(response);
    })

    $scope.addBounty = function () {

        var bounty = {
            name: $scope.firstName,
            lastName: $scope.lastName,
            living: $scope.living,
            bountyAmt: $scope.reward,
            type: $scope.alliance
        }
        console.log(bounty);

        $http.post("http://localhost:5000/bounty", bounty).then(function (response) {
            $http.get("http://localhost:5000/bounty").then(function (response) {
                console.log(response);
                $scope.bounties = response.data;
            })
        })

    }

    $scope.editBounty = function (id) {

        var bounty = {
            name: $scope.firstName,
            lastName: $scope.lastName,
            living: $scope.living,
            bountyAmt: $scope.reward,
            type: $scope.alliance
        }

        $http.put("http://localhost:5000/bounty/" + id, bounty).then(function (response) {
            $scope.bounties = response.data;
        })


    }

    $scope.deleteBounty = function (id) {
        $http.delete("http://localhost:5000/bounty/" + id).then(function (response) {
            $scope.bounties = response.data;
        })
    }

//    $scope.$watch('bounties', function () {
//        $scope.bounties = $scope.bounties;
//    });

});