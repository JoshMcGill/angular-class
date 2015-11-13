var app = angular.module('PokeProfile');

app.service('PokeService', ['$http', function ($http) {

    this.currentPokemon = {};

    this.getPokemon = function (pokemonNum) {

        return $http.get("http://pokeapi.co/api/v1/pokemon/" + pokemonNum).then(function (response) {
            var pokemon = response.data;
            this.currentPokemon = {
                name: pokemon.name,
                attack: pokemon.attack,
                ability: pokemon.abilities[0]
            };
        }, function (response) {
            console.log("Could not grab data");
        });
    }

}]);
