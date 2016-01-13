var myApp = angular.module('uglyThings', []);

myApp.controller("MainController", function($scope){
    
    $scope.uglything = {
        title: "Title",
        url: "IMG url",
        description: "Description"
    }
    
    $scope.yourUglyThing = [
//        {
//            title: "What",
//            description: "Is that?",
//            url: "http://29.media.tumblr.com/tumblr_kvzvnzkpYd1qazwpgo1_400.jpg"
//            
//        }
//    
    ]
    
    
    $scope.createUglyThing = function(){
        
        var newUglyThing = {
            title: $scope.uglything.title,
            description: $scope.uglything.description,
            url: $scope.uglything.url
        }
        
        $scope.yourUglyThing.push(newUglyThing);
        console.log(yourUglyThing);
    }

});