var app = angular.module("MyApp", []);

app.controller("DirectiveController", ["$scope", function ($scope) {

    $scope.addressBook = [
        {
            name: "Joe Schmoe",
            phone: 8015555555,
            email: "joeschmoe@website.com"
        },
        {
            name: "Jane Schmoe",
            phone: 8015554444,
            email: "janeschmoe@website.com"
        },
        {
            name: "Jimmy Schmoe",
            phone: 8015553333,
            email: "jimmyschmoe@website.com"
        },
        {
            name: "Ron Schmoe",
            phone: 8015552222,
            email: "ronschmoe@website.com"
        }
    ]

}]);

app.directive('contactCard', function () {

    return {
        restrict: "EA",
        templateUrl: 'templates/contact-card.html'
    }

});