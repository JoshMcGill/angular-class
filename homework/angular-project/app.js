var app = angular.module('PokeSearch', ['ngRoute', 'ui.bootstrap']);

//app.config(function ($httpProvider) {
//  $httpProvider.useApplyAsync(true);
//});

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
    }).when("/games", {
        templateUrl: "pages/games.html",
        controller: "GameController"
    }).when("/abilities", {
        templateUrl: "pages/abilities.html",
        controller: "AbilityController"
    })

    //    $routeProvider.otherwise("/", {
    //        templateUrl: "pages/home.html",
    //        controller: "MainController"
    //    })

});

app.controller('MainController', ['$scope', '$http', '$anchorScroll', '$location', function ($scope, $http, $anchorScroll, $location) {

    // Scroll to move after clicking
    $scope.scrollTo = function (id) {
        $location.hash(id);
        $anchorScroll();
    }

    $scope.allPokeNames = []

    // Grab list of pokemons/resources
    // Push all pokemon names to list of names "$scope.allPokeNames"
    $http.get("http://pokeapi.co/api/v1/pokedex/1/").then(function (response) {
        $scope.pokedexPokemon = response.data.pokemon;

        for (var i = 0; i < $scope.pokedexPokemon.length; i++) {
            $scope.allPokeNames.push($scope.pokedexPokemon[i].name);
        }
        //        console.log($scope.allPokeNames);


        //        console.log($scope.pokedexPokemon);
        for (var i = 0; i < $scope.pokedexPokemon.length; i++) {
            $scope.pokedexPokemon[i] = {
                name: $scope.pokedexPokemon[i].name,
                resource_uri: $scope.pokedexPokemon[i].resource_uri,
                pokedexNum: i + 1
            };
        }
    })

    $scope.searchingPokemon = null;


    // grab name in search bar and send out get request.
    // use response to fill in $scope.currentPokemon
    // grab sprites from resource of currentPokemon
    $scope.searchPokemon = function (name) {


        $scope.currentPokemon = null;
        for (i = 0; i < $scope.pokedexPokemon.length; i++) {
            if ($scope.pokedexPokemon[i].name === name.toLowerCase()) {
                $scope.currentPokemon = $scope.pokedexPokemon[i];
                //                console.log($scope.currentPokemon);
            }
        }

        $http.get("http://pokeapi.co/" + $scope.currentPokemon.resource_uri).then(function (response) {
            $scope.currentPokemon = response.data;
            //            console.log($scope.currentPokemon.attack);

            $http.get("http://pokeapi.co/" + $scope.currentPokemon.sprites[0].resource_uri).then(function (response) {
                $scope.currentPokemonSprite = response.data;
                //                console.log($scope.currentPokemonSprite);
                $scope.currentPokemonSpriteImg = "http://pokeapi.co" + $scope.currentPokemonSprite.image
            })
        })
    }

    $scope.currentMove = [];

    $scope.getMove = function (move) {
        $http.get("http://pokeapi.co/" + move.resource_uri).then(function (response) {
            $scope.thisMove = response.data;
            $scope.currentMove = {
                name: $scope.thisMove.name,
                accuracy: $scope.thisMove.accuracy,
                power: $scope.thisMove.power,
                pp: $scope.thisMove.pp,
                description: $scope.thisMove.description
            }
        })
    }

}]);


app.controller('TypeController', ['$scope', '$http', function ($scope, $http) {

    $scope.types = [];

    function getType(type, counter) {
        $http.get("http://pokeapi.co/api/v1/type/" + type).then(function (response) {
            $scope.currentType = response.data;
            //            console.log(type);

            $scope.types[counter] = {
                name: $scope.currentType.name,
                ineffective: $scope.currentType.ineffective,
                no_effect: $scope.currentType.no_effect,
                resistance: $scope.currentType.resistance,
                super_effective: $scope.currentType.super_effective,
                weakness: $scope.currentType.weakness
            };
        })
    }

    for (var i = 1; i <= 18; i++) {
        var counter = i - 1;
        getType(i, counter);
    }

}]);

app.controller('MoveController', ['$scope', '$http', '$anchorScroll', '$location', function ($scope, $http, $anchorScroll, $location) {
    $scope.scrollTo = function (id) {
        $location.hash(id);
        $anchorScroll();
    }

    $scope.searchingMoves = null;

    $scope.allMoveNames = [];

    for (i = 0; i < moveNames.length; i++) {
        $scope.allMoveNames[i] = moveNames[i].name;
    }

    $scope.searchMoves = function (searchingMoves) {
//        console.log(moveNames[0].resource_uri);
        for (var i = 0; i < moveNames.length; i++) {
            if (searchingMoves === moveNames[i].name) {
                $http.get("http://pokeapi.co" + moveNames[i].resource_uri).then(function (response) {
                    var myMove = response.data;
                    console.log(myMove);
                    $scope.currentMove = {
                        name: myMove.name,
                        description: myMove.description,
                        accuracy: myMove.accuracy,
                        pp: myMove.pp,
                        power: myMove.power
                    }
                })
            }
        }
    };

    $scope.currentMove = [];

//
//    function getMove(type, counter) {
//        $http.get("http://pokeapi.co/api/v1/move/" + type).then(function (response) {
//            $scope.thisMove = response.data;
//            //            console.log(type);
//
//            $scope.moves[counter] = {
//                name: $scope.thisMove.name,
//                resource_uri: $scope.thisMove.resource_uri
//            };
//            console.log($scope.moves[counter])
//        })
//    }
//
//    for (var i = 1; i <= 1; i++) {
//        var counter = i - 1;
//        getMove(i, counter);
//    }

}]);

app.controller('AbilityController', ['$scope', '$http', '$anchorScroll', '$location', function ($scope, $http, $anchorScroll, $location) {
    $scope.scrollTo = function (id) {
        $location.hash(id);
        $anchorScroll();
    }

    $scope.currentMove = [];

    $scope.moves = [];

    $scope.setCurrentMove = function (move) {
        $scope.currentMove = {
            name: move.name,
            description: move.description,
            accuracy: move.accuracy,
            pp: move.pp,
            power: move.power
        }
    }

    function getMove(type, counter) {
        $http.get("http://pokeapi.co/api/v1/ability/" + type).then(function (response) {
            $scope.thisMove = response.data;
            //            console.log(type);

            $scope.moves[counter] = {
                name: $scope.thisMove.name,
                description: $scope.thisMove.description,
            };
        })
    }

    for (var i = 1; i <= 248; i++) {
        var counter = i - 1;
        getMove(i, counter);
    }

}]);

app.controller('GameController', ['$scope', '$http', function ($scope, $http) {

    $scope.games = [];

    function getGame(type, counter) {
        $http.get("http://pokeapi.co/api/v1/game/" + type).then(function (response) {
            $scope.currentType = response.data;
            //            console.log(type);

            $scope.games[counter] = {
                name: $scope.currentType.name,
                generation: $scope.currentType.generation,
                release_year: $scope.currentType.release_year,
            };
        })
    }

    for (var i = 1; i <= 25; i++) {
        var counter = i - 1;
        getGame(i, counter);
    }

}]);