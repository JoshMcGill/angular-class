var app = angular.module('Cartoon');

app.service("CartoonService", function(){
    
    this.cartoons = [];
    
    this.addCartoon = function(object){
        
        this.cartoons.push(object);
        
        console.log(this.cartoons);
           
    }
});