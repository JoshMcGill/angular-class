var app = angular.module('ToDoList', []);

app.controller('MainController', ['$scope', '$http', function ($scope, $http) {

    $scope.newToDo = {
        title: "Title here", // this one is the only thing that is actually required
        description: "Description here",
        price: 20, // Must be a number of some kind (integer or float)
        imgUrl: "http://www.example.com/some-link-to-a-cool-photo",
        completed: false // must be a boolean (true or false)
    };

    $scope.postNewToDo = function () {
        $http.post("http://mean.codingcamp.us/todo/joshmcgill", $scope.newToDo).then(function (response) {
            $scope.toDoList.push(response.data);
        }, function (response) {
            console.log("Problem sending data");
        });
    }

    $scope.deleteToDo = function (id) {

        $http.delete("http://mean.codingcamp.us/todo/joshmcgill/" + id).then(function (response) {
            console.log("Deletion was completed");
        }, function (response) {
            console.log(response.responseText + " " + response.responseType);
            
        });

    }

    $scope.updateToDo = function (id, title, description, price, imgUrl, completed) {

        var todoData = {
            title: title, // this one is the only thing that is actually required
            description: description,
            price: price, // Must be a number of some kind (integer or float)
            imgUrl: imgUrl,
            completed: completed // must be a boolean (true or false)

        }

        $http.put("http://mean.codingcamp.us/todo/joshmcgill/" + id, todoData).then(function (response) {
            console.log("Update Successful");
        }, function (response) {
            console.log(response.responseText + " " + response.responseType);
        });


    }

    $http.get("http://mean.codingcamp.us/todo/joshmcgill").then(function (response) {
        $scope.toDoList = response.data;
    }, function (response) {
        console.log("Could not retrieve DATA" + " " + response.responseText);
    });



}]);