var app = angular.module("Services")

app.service("NameService", function() {

    this.name = "Bob Ziroll";
    this.age = 30;

    this.updateName = function(name) {
        this.name = name;
    }

});