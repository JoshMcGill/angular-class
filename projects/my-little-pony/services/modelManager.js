var app = angular.module('Brony');

app.service('ModelManager', ['$http', 'ModelService', function ($http, ModelService) {

//    this.prePonies = ModelService.ponies;
//    this.favoritePonies = ModelService.favoritePonies;
    
    //grabs the pre created ponies from the ModelService
    this.getPrePonies = function(){
        var x = ModelService.ponies;
        return x;
    }    
    
    //grabs the favorite ponies list from modelservice
    this.getFavoritePonies = function(){
        var x = ModelService.favoritePonies;
        return x;
    }
    
    //deletes ponies from the favorite ponies list in modelservice
    this.deleteFavoritePony = function (number) {
        ModelService.favoritePonies.splice(number, 1);
        console.log(ModelService.favoritePonies);

    }
    
    //creates a new pony for the favorite ponies list in modelservice
    this.addFavoritePony = function (name, url, user, youtube) {

        var newPony = {}
        
        newPony.ponyName = name;
        newPony.imgUrl = url;
        newPony.userName = user;
        newPony.youtube = youtube;

        ponyValidator(newPony);

    }
    
    //validates the pony object before passing it to the modelservice favorites list.
    function ponyValidator(pony){
        if(typeof pony.ponyName === 'string' && pony.ponyName.length > 3 && pony.imgUrl.length > 0 && pony.userName.length > 0 && pony.youtube.length > 0){
            ModelService.favoritePonies.push(pony);
            console.log(ModelService.favoritePonies);
        }else{
            console.log("Object was not in correct form.");   
        }
    }

}]);