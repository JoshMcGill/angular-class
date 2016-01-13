var app = angular.module('RockTheVote', ['ngRoute']);

app.config(function ($routeProvider) {

    $routeProvider.when("/", {
        templateUrl: "pages/home.html",
        controller: "MainController"
    }).when("/home", {
        templateUrl: "pages/home.html",
        controller: "MainController"
    }).when("/login", {
        templateUrl: "pages/login.html",
        controller: "MainController"
    });

    $routeProvider.otherwise("/", {
        templateUrl: "pages/home.html",
        controller: "MainController"
    })

});

app.controller('MainController', ['$scope', '$http', function ($scope, $http) {

    $scope.issues = [];

    $scope.name = null;
    $scope.message = null;

    $http.get("http://localhost:9000/vote").then(function (response) {
        $scope.issues = response.data;
    })

    $scope.sendIssue = function () {

        var data = {

            name: $scope.name,
            message: $scope.message

        }

        console.log(data);

        $http.post("http://localhost:9000/vote", data).then(function (response) {
            console.log(response);
            $scope.issues = response.data;
        })

    }

    $scope.addComment = function (commentId, name, message) {


        $scope.cName = null;
        $scope.cMessage = null;

        var comment = {

            name: name,
            message: message,
            id: commentId
        }

        console.log(commentId)

        $http.post("http://localhost:9000/comment", comment).then(function (response) {
            $scope.issues = response.data;
            console.log($scope.issues);

        })

    }

    $scope.upvote = function (id) {
        $http.put("http://localhost:9000/upvote/" + id).then(function (response) {
            $scope.issues = response.data;
        })
    }

    $scope.downvote = function (id) {
        $http.put("http://localhost:9000/downvote/" + id).then(function (response) {
            $scope.issues = response.data;
        })
    }

    $scope.commentDownvote = function (pid, id) {
        console.log(id + " | " + pid);
        $http.put("http://localhost:9000/commentDownvote/" + pid + "/" + id).then(function (response) {
            $scope.issues = response.data;
        })
    }

    $scope.commentUpvote = function (pid, id) {
        console.log(id + " | " + pid);
        $http.put("http://localhost:9000/commentUpvote/" + pid + "/" + id).then(function (response) {
            $scope.issues = response.data;
        })
    }


}]);