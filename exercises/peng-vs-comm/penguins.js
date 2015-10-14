var Party = function(population, name){
    this.population = population;
    this.name = name;
}

var penguins = new Party(1000000, "Penguins");
var commies = new Party(1000000, "Communists");

function coinTossNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function coin(){
    var randomNum = coinTossNumber(1,2)
    if (randomNum === 1){
        return penguinLaunch(); 
    }
    else{
        return commLaunch();  
    }
}

function sendNukeCom(party, onHit, onMiss){
    var comPop = party.population;
    var destruction = coinTossNumber(1, comPop)
    console.log("The Penguins have sent a bomb killing " + destruction + " Communists!");
    party.population -=  destruction;
    console.log("Communist Population is now: " + party.population);
    if(party.population <= 0){
        console.log("The Penguins have won!");
    }else{
        commLaunch();
    }
}

function sendNukePen(party, onHit, onMiss){
    var penPop = party.population;
    var destruction = coinTossNumber(1, penPop)
    console.log("The Communists have sent a bomb killing " + destruction + " Penguins!");
    party.population -=  destruction;
    console.log("Penguin Population is now : " + party.population);
    if(party.population <= 0){
        console.log("The communists have won!");
    }else{
        penguinLaunch();
    }
}

function penguinLaunch(){
    var onHitCheck = coinTossNumber(1, 2);
    if(onHitCheck === 1){
        var onHit = true;
        var miss = false;
    }else if (onHitCheck === 2){
        var onHit = false;
        var miss = true;
    }
    sendNukeCom(commies, onHit, miss);   
}

function commLaunch(){
    var onHitCheck = coinTossNumber(1, 2);
    if(onHitCheck === 1){
        var onHit = true;
        var miss = false;
    }else if (onHitCheck === 2){
        var onHit = false;
        var miss = true;
    }
    sendNukePen(penguins, onHit, miss);   
}

//function onHit(){
//    var checkHit = coinTossNumber(1, 2);
//    if(checkHit === 1){
//        var hit = true;
//    }else{
//        var hit = false;   
//    }
//    return hit;
//}

function onMiss(){
    console.log("The nuke missed the target and landed in the ocean");
}

coin();

