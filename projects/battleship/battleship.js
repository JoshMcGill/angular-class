var readlineSync = require('readline-sync');

var Location = function (ship, hit, display) {
    this.ship = ship;
    this.hit = hit;
    this.display = display;
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var myGrid = [];
for (var column = 0; column < 10; column++) {
    myGrid[column] = []
    for (var row = 0; row < 10; row++) {
        var ship = false;
        var hit = false;
        var display = "~";
        if (getRandomNumber(1, 5) === 1) {
            ship = true;
        }
        myGrid[column][row] = new Location(ship, hit, display);
    }
}

showCurrentGrid();

function showCurrentGrid() {
    var currentGrid = []
    for (var column = 0; column < 10; column++) {
        currentGrid[column] = [];
        for (var row = 0; row < 10; row++) {
            currentGrid[column][row] = myGrid[column][row].display;
        }
    }
    console.log(currentGrid);
}

function fireAway(loc1, loc2) {
    if (loc1 === undefined || loc2 === undefined) {

        console.log("Those locations are not valid");

    } else if (myGrid[loc1][loc2].ship === true) {
        myGrid[loc1][loc2].hit = true;
        myGrid[loc1][loc2].display = "X";
        console.log("You have hit a ship!");
        console.log("");
    } else {
        myGrid[loc1][loc2].display = "M";
        console.log("You have missed!");
        console.log("");
    }

    showCurrentGrid();

}

console.log("This is Battleship!");
console.log(" ");

while (true) {

    console.log("Please choose your locations!");

    var location1 = readlineSync.question("What is your first location? Type any number between 0-9: ");
    var location2 = readlineSync.question("What is your second location? Type any number between 0-9: ");
    console.log("");
    fireAway(location1, location2);
}