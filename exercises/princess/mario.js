var player = {
    name: "Mario",
    totalCoins: 0,
    status: "Small",
    star: true,
    
    setName: function(namePicked){
        var name = namePicked;
        return name;
    },
    
    gotHit: function(){
        if (this.status === "Big"){
            this.status = "Small";
        } else if (this.status === "Powered Up") {
            this.status = "Small";
        } else if (this.status === "Small") {
            this.status = "Dead";
        } else if (this.status === "Dead") {
            this.gameActive = false;   
        }
    },
    
    gameActive: true,
    
    gotPowerup: function(){
        this.status = "Powered Up";   
    },
    
    addCoin: function(){
        this.totalCoins += 1;   
    },
    
    print: function(){
        console.log(this.name);   
        console.log("Coins: " + this.totalCoins); 
        console.log("Status: " + this.status);
        if (this.star = true){
            console.log("You have a star!");
        } else {
            console.log("You do not have a star.");   
        }
    }
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function playGame(){
    for(var i = 0; i < 3; i++){
        var number = randomNumber(0, 2);
        if (number === 0){
            player.gotHit();   
        } else if (number === 1){
            player.gotPowerup();
        } else if (number === 2){
            player.addCoin();   
        }
        player.print();
        console.log(" ");
    }
}

playGame();