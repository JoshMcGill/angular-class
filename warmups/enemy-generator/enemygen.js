// Enemy Generator

var Enemy = function(enemyType, enemyHitPoints, enemyDefense) {
    this.type = enemyType;
    this.hitPoints = enemyHitPoints;
    this.defense = enemyDefense;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var enemies = [];

    
function  getType() { 
    var randomNumberType = getRandomInt(0, 2);
    if (randomNumberType === 0){
        var type = "Dragon";   
    } else if (randomNumberType === 1) {
        var type = "Prowler";   
    } else if (randomNumberType ===2){
        var type = "Grunt";   
    }
    return type;
}

function getHP(type){
    if (type === "Dragon"){
        var hp = getRandomInt(80, 100);   
    } else if (type === "Prowler"){
        var hp = getRandomInt(50, 79);
    } else if (type === "Grunt"){
        var hp = getRandomInt(20, 49);   
    }
    
    return hp;
}

function getDefense(hp){
    var defense = hp * 3;
    return defense;
}

for (var i = 0; i < 100; i++){
    var enemyType = getType();
    var enemyHP = getHP(enemyType);
    var defense = getDefense(enemyHP);
    
    var randomEnemy = new Enemy(enemyType, enemyHP, defense);
    
    enemies.push(randomEnemy);
}


console.log("Enemy #60: " + JSON.stringify(enemies[60]));

    
