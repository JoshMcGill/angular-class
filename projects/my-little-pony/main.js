var app = angular.module('Brony', ['youtube-embed']);

app.controller('MainController', ['$scope', '$http', 'ModelManager', function ($scope, $http, ModelManager) {

    //List of Pre Listed Ponies
    $scope.prePonies = ModelManager.getPrePonies();

    //List of Favorite Ponies
    $scope.favoritePonies = ModelManager.getFavoritePonies();

    console.log($scope.prePonies);
    console.log($scope.favoritePonies);

    //Delete from Favorite Ponies
    $scope.delete = function (pony) {

        ModelManager.deleteFavoritePony(pony);
        $scope.favoritePonies = ModelManager.getFavoritePonies();
        console.log($scope.favoritePonies);

    };
    
    $scope.changeVideo = function(video){
        $scope.theBestVideo = video; 
    }
    
    $scope.theBestVideo = 'GHy0xktlsSI';

    $scope.name = "Pony Name";
    $scope.image = "Image URL";
    $scope.userName = "Your User Name";
    $scope.youtube = "7BW2GJtVojU";

    //Add a pony to the list of favorite ponies
    $scope.addFavoritePony = function (name, img, user, youtube) {

        ModelManager.addFavoritePony(name, img, user, youtube);
        $scope.favoritePonies = ModelManager.getFavoritePonies();
        console.log($scope.favoritePonies);

    }

    $scope.getIframeSrc = function (src) {
        return src
    };

    //Hides add pony menu
    $scope.addPonyOnOff = true;

}]);

app.config(function ($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([
    'self',
    'https://www.youtube.com/**'
  ]);
});