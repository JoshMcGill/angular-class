var app = angular.module('WinterBreak');

app.controller('HomeController', ['$timeout', '$location', '$scope', 'UserService', 'SummonerService', function ($timeout, $location, $scope, UserService, SummonerService) {
    $scope.summonerName = localStorage['summonerName'];
    var summonerId = localStorage['summonerId'];

    SummonerService.getPlayerStats(summonerId).then(function (response) {
        $scope.playerStats = response.data.playerStatSummaries
    })

    SummonerService.getRecentGames(summonerId).then(function (response) {
        $scope.gameList = response.data.games;
        $scope.gameListImages = []

        for (var i = 0; i < $scope.gameList.length; i++) {
            SummonerService.getChampionImg($scope.gameList[i].championId).then(function (response) {
                $scope.gameListImages.push(response);
            })

        }

        $timeout(function () {
            console.log($scope.gameList)
            for (var i = 0; i < $scope.gameList.length; i++) {
                for (var y = 0; y < $scope.gameList.length; y++) {
                    if ($scope.gameList[i].championId === $scope.gameListImages[y].id) {
                        $scope.gameList[i].image = $scope.gameListImages[y].image.full;
                    }
                }

            }
        }, 1000);

    })

    SummonerService.getSummonerInfo(summonerId).then(function (response) {
        $scope.summonerInfo = response.data[summonerId];

    })

    SummonerService.getRanked(summonerId).then(function (response) {
        $scope.rankedInfo = response.data[summonerId];

    })

    $scope.set_color = function (win) {
        if (win === true) {
            return {
                backgroundColor: "#4d8e27"
            }
        } else {
            return {
                backgroundColor: '#e03900'
            }
        }
    }

}])