var myApp = angular.module('nameBadge', []);

myApp.controller('MainController', function($scope){
    
    $scope.badge = {
        firstName: "First Name",
        lastName: "Last Name",
        email: "Email Address",
        birthPlace: "Birth Place",
        phone: "Phone Number",
        food: "Favorite Food",
        about: "Tell us about you"
    };
    
    $scope.createBadge = function(){
        $scope.badgeName = $scope.badge.firstName;
        $scope.badgeLast = $scope.badge.lastName;
        $scope.badgeEmail = $scope.badge.email;
        $scope.badgeBirth = $scope.badge.birthPlace;
        $scope.badgePhone = $scope.badge.phone;
        $scope.badgeFood = $scope.badge.food;
        $scope.badgeAbout = $scope.badge.about;
    }
    
});