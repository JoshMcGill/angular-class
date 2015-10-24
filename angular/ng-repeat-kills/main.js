var myApp = angular.module('killApp', []);

myApp.controller("MainController", function($scope){
    
    $scope.player = {  
      kills: [
          {
              handle:"jk400",
              rank: 14932,
              clan: ["hpburner200","sputnik","sololobo21"]
          }
      ]
    };
    
});