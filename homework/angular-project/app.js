var app = angular.module('PokeSearch', ['ngRoute', 'ui.bootstrap']);

app.config(function ($routeProvider) {

    $routeProvider.when("/", {
        templateUrl: "pages/home.html",
        controller: "MainController"
    }).when("/home", {
        templateUrl: "pages/home.html",
        controller: "MainController"
    }).when("/pokedex", {
        templateUrl: "pages/pokedex.html",
        controller: "MainController"
    }).when("/moves", {
        templateUrl: "pages/moves.html",
        controller: "MoveController"
    }).when("/types", {
        templateUrl: "pages/types.html",
        controller: "TypeController"
    })

    $routeProvider.otherwise("/", {
        templateUrl: "pages/home.html",
        controller: "MainController"
    })

});

app.controller('MainController', ['$scope', '$http', function ($scope, $http) {
    
    $scope.allPokeNames = []
    
    $http.get("http://pokeapi.co/api/v1/pokedex/1/").then(function (response) {
        $scope.pokedexPokemon = response.data.pokemon;
        
        for(var i = 0; i < $scope.pokedexPokemon.length;i++){
            $scope.allPokeNames.push($scope.pokedexPokemon[i].name);   
        }
        console.log($scope.allPokeNames);

        
        console.log($scope.pokedexPokemon);
        for (var i = 0; i < $scope.pokedexPokemon.length; i++) {
            $scope.pokedexPokemon[i] = {
                name: $scope.pokedexPokemon[i].name,
                resource_uri: $scope.pokedexPokemon[i].resource_uri,
                pokedexNum: i + 1
            };
        }
    })

    $scope.searchingPokemon = null;

    $scope.searchPokemon = function (name) {
        
        
        $scope.currentPokemon = null;
        for (i = 0; i < $scope.pokedexPokemon.length; i++) {
            if ($scope.pokedexPokemon[i].name === name.toLowerCase()) {
                $scope.currentPokemon = $scope.pokedexPokemon[i];
                console.log($scope.currentPokemon);
            }
        }

        $http.get("http://pokeapi.co/" + $scope.currentPokemon.resource_uri).then(function (response) {
            $scope.currentPokemon = response.data;
            console.log($scope.currentPokemon.attack);
            
            $http.get("http://pokeapi.co/" + $scope.currentPokemon.sprites[0].resource_uri).then(function (response) {
                $scope.currentPokemonSprite = response.data;
                console.log($scope.currentPokemonSprite);
                $scope.currentPokemonSpriteImg = "http://pokeapi.co" + $scope.currentPokemonSprite.image
            })
        })
    }

}]);


app.controller('TypeController', ['$scope', '$http', function ($scope, $http) {

    $scope.types = []

    $http.get("http://pokeapi.co/api/v1/type/1/").then(function (response) {
        $scope.type1 = response.data;
        $scope.types[0] = {
            name: $scope.type1.name,
            ineffective: $scope.type1.ineffective,
            no_effect: $scope.type1.no_effect,
            resistance: $scope.type1.resistance,
            super_effective: $scope.type1.super_effective,
            weakness: $scope.type1.weakness
        };
        console.log($scope.types[0]);
    })

    $http.get("http://pokeapi.co/api/v1/type/2/").then(function (response) {
        $scope.type2 = response.data;
        $scope.types[1] = {
            name: $scope.type2.name,
            ineffective: $scope.type2.ineffective,
            no_effect: $scope.type2.no_effect,
            resistance: $scope.type2.resistance,
            super_effective: $scope.type2.super_effective,
            weakness: $scope.type2.weakness
        };
        console.log($scope.types[1]);
    })

    $http.get("http://pokeapi.co/api/v1/type/3/").then(function (response) {
        $scope.type3 = response.data;
        $scope.types[2] = {
            name: $scope.type3.name,
            ineffective: $scope.type3.ineffective,
            no_effect: $scope.type3.no_effect,
            resistance: $scope.type3.resistance,
            super_effective: $scope.type3.super_effective,
            weakness: $scope.type3.weakness
        };
        console.log($scope.types[2]);
    })

    $http.get("http://pokeapi.co/api/v1/type/4/").then(function (response) {
        $scope.type4 = response.data;
        $scope.types[3] = {
            name: $scope.type4.name,
            ineffective: $scope.type4.ineffective,
            no_effect: $scope.type4.no_effect,
            resistance: $scope.type4.resistance,
            super_effective: $scope.type4.super_effective,
            weakness: $scope.type4.weakness
        };
    })

    $http.get("http://pokeapi.co/api/v1/type/5/").then(function (response) {
        $scope.type5 = response.data;
        $scope.types[4] = {
            name: $scope.type5.name,
            ineffective: $scope.type5.ineffective,
            no_effect: $scope.type5.no_effect,
            resistance: $scope.type5.resistance,
            super_effective: $scope.type5.super_effective,
            weakness: $scope.type5.weakness
        };
    })

    $http.get("http://pokeapi.co/api/v1/type/6/").then(function (response) {
        $scope.type6 = response.data;
        $scope.types[5] = {
            name: $scope.type6.name,
            ineffective: $scope.type6.ineffective,
            no_effect: $scope.type6.no_effect,
            resistance: $scope.type6.resistance,
            super_effective: $scope.type6.super_effective,
            weakness: $scope.type6.weakness
        };
    })

    $http.get("http://pokeapi.co/api/v1/type/7/").then(function (response) {
        $scope.type7 = response.data;
        $scope.types[6] = {
            name: $scope.type7.name,
            ineffective: $scope.type7.ineffective,
            no_effect: $scope.type7.no_effect,
            resistance: $scope.type7.resistance,
            super_effective: $scope.type7.super_effective,
            weakness: $scope.type7.weakness
        };
    })

    $http.get("http://pokeapi.co/api/v1/type/8/").then(function (response) {
        $scope.type8 = response.data;
        $scope.types[7] = {
            name: $scope.type8.name,
            ineffective: $scope.type8.ineffective,
            no_effect: $scope.type8.no_effect,
            resistance: $scope.type8.resistance,
            super_effective: $scope.type8.super_effective,
            weakness: $scope.type8.weakness
        };
    })

    $http.get("http://pokeapi.co/api/v1/type/9/").then(function (response) {
        $scope.type9 = response.data;
        $scope.types[8] = {
            name: $scope.type9.name,
            ineffective: $scope.type9.ineffective,
            no_effect: $scope.type9.no_effect,
            resistance: $scope.type9.resistance,
            super_effective: $scope.type9.super_effective,
            weakness: $scope.type9.weakness
        };
    })

    $http.get("http://pokeapi.co/api/v1/type/10/").then(function (response) {
        $scope.type10 = response.data;
        $scope.types[9] = {
            name: $scope.type10.name,
            ineffective: $scope.type10.ineffective,
            no_effect: $scope.type10.no_effect,
            resistance: $scope.type10.resistance,
            super_effective: $scope.type10.super_effective,
            weakness: $scope.type10.weakness
        };
    })

    $http.get("http://pokeapi.co/api/v1/type/11/").then(function (response) {
        $scope.type11 = response.data;
        $scope.types[10] = {
            name: $scope.type11.name,
            ineffective: $scope.type11.ineffective,
            no_effect: $scope.type11.no_effect,
            resistance: $scope.type11.resistance,
            super_effective: $scope.type11.super_effective,
            weakness: $scope.type11.weakness
        };
    })

    $http.get("http://pokeapi.co/api/v1/type/12/").then(function (response) {
        $scope.type12 = response.data;
        $scope.types[11] = {
            name: $scope.type12.name,
            ineffective: $scope.type12.ineffective,
            no_effect: $scope.type12.no_effect,
            resistance: $scope.type12.resistance,
            super_effective: $scope.type12.super_effective,
            weakness: $scope.type12.weakness
        };
    })

    $http.get("http://pokeapi.co/api/v1/type/13/").then(function (response) {
        $scope.type13 = response.data;
        $scope.types[12] = {
            name: $scope.type13.name,
            ineffective: $scope.type13.ineffective,
            no_effect: $scope.type13.no_effect,
            resistance: $scope.type13.resistance,
            super_effective: $scope.type13.super_effective,
            weakness: $scope.type13.weakness
        };
    })

    $http.get("http://pokeapi.co/api/v1/type/14/").then(function (response) {
        $scope.type14 = response.data;
        $scope.types[13] = {
            name: $scope.type14.name,
            ineffective: $scope.type14.ineffective,
            no_effect: $scope.type14.no_effect,
            resistance: $scope.type14.resistance,
            super_effective: $scope.type14.super_effective,
            weakness: $scope.type14.weakness
        };
    })

    $http.get("http://pokeapi.co/api/v1/type/15/").then(function (response) {
        $scope.type15 = response.data;
        $scope.types[14] = {
            name: $scope.type15.name,
            ineffective: $scope.type15.ineffective,
            no_effect: $scope.type15.no_effect,
            resistance: $scope.type15.resistance,
            super_effective: $scope.type15.super_effective,
            weakness: $scope.type15.weakness
        };
    })

    $http.get("http://pokeapi.co/api/v1/type/16/").then(function (response) {
        $scope.type16 = response.data;
        $scope.types[15] = {
            name: $scope.type16.name,
            ineffective: $scope.type16.ineffective,
            no_effect: $scope.type16.no_effect,
            resistance: $scope.type16.resistance,
            super_effective: $scope.type16.super_effective,
            weakness: $scope.type16.weakness
        };
    })

    $http.get("http://pokeapi.co/api/v1/type/17/").then(function (response) {
        $scope.type17 = response.data;
        $scope.types[16] = {
            name: $scope.type17.name,
            ineffective: $scope.type17.ineffective,
            no_effect: $scope.type17.no_effect,
            resistance: $scope.type17.resistance,
            super_effective: $scope.type17.super_effective,
            weakness: $scope.type17.weakness
        };
    })

    $http.get("http://pokeapi.co/api/v1/type/18/").then(function (response) {
        $scope.type18 = response.data;
        $scope.types[17] = {
            name: $scope.type18.name,
            ineffective: $scope.type18.ineffective,
            no_effect: $scope.type18.no_effect,
            resistance: $scope.type18.resistance,
            super_effective: $scope.type18.super_effective,
            weakness: $scope.type18.weakness
        };
    })

}]);

app.controller('MoveController', ['$scope', '$http', function ($scope, $http) {

}]);