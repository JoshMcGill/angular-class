var app = angular.module('WinterBreakAuth', []);

app.service('TokenService', [function () {
    var userToken = 'token';

    //Save Token
    this.saveToken = function (token) {
            localStorage[userToken] = token;
        }
        //Get Token
    this.getToken = function () {
            return localStorage[userToken];
        }
        //Remove Token
    this.removeToken = function () {
        localStorage.removeItem(userToken);
    }
}])

app.service('UserService', ['$http', 'TokenService', '$location', function ($http, TokenService, $location) {
    var baseUrl = "http://localhost:5000/auth"

    // Signup
    this.signup = function (user) {
        return $http.post(baseUrl + '/signup', user);

    }

    // Login
    this.login = function (user) {
            return $http.post(baseUrl + '/login', user).then(function (response) {
                TokenService.saveToken(response.data.token);
                return response;
            })
        }
        // Logout
    this.logout = function () {
        TokenService.removeToken();
        localStorage.removeItem('summonerName');
        localStorage.removeItem('summonerId');
    }

    this.getSummonerId = function (summonerName) {
        return $http.get('https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/' + summonerName + '?api_key=0f90b0a5-ba07-4f30-8091-76d274e2e959').then(function (response) {
            return response;
        })
    }

    this.isAuthenticated = function () {
        return !!TokenService.getToken();
    }


    this.userName = null;
}])

app.factory("AuthInterceptor", ["$q", "$location", "TokenService", function ($q, $location, TokenService) {
    var interceptor = {
        request: function (config) {
            var token = TokenService.getToken();
            if (token) {
                config.headers = config.headers || {};
                config.headers.Authorization = "Bearer " + token;
            }

            return config;
        },
        responseError: function (response) {
            if (response.status === 401) {
                TokenService.removeToken();
                $location.path("/login");
            }
            $q.reject(response);
        }
    }

    return interceptor;
}]);

app.factory('timeoutHttpIntercept', function ($rootScope, $q) {
    return {
        'request': function (config) {
            config.timeout = 10000;
            return config;
        }
    };
});

app.config(['$httpProvider', function ($httpProvider) {
    $httpProvider.interceptors.push('AuthInterceptor')
    $httpProvider.interceptors.push('timeoutHttpIntercept')
}]);