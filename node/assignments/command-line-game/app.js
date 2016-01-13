var board = require("./build-board");
var readlineSync = require('readline-sync');


console.log(board[0][0], board[0][1], board[0][2]);
console.log(board[1][0], board[1][1], board[1][2]);
console.log(board[2][0], board[2][1], board[2][2]);

function playerTurn(location, location2, player) {
    playerType = " " + player.toUpperCase() + " ";

    board[location][location2] = playerType;

    console.log(board[0][0], board[0][1], board[0][2]);
    console.log(board[1][0], board[1][1], board[1][2]);
    console.log(board[2][0], board[2][1], board[2][2]);
}

function checkWinX(board){
    if (board[0][0] === " X " && board[0][1] === " X " && board[0][2] === " X "){
        console.log("X has won!")   
    }else if (board[0][0] === " X " && board[1][0] === " X " && board[2][0] === " X "){
        console.log("X has won!")   
    }else if (board[0][1] === " X " && board[1][1] === " X " && board[2][1] === " X "){
        console.log("X has won!")
    }else if (board[0][2] === " X " && board[1][2] === " X " && board[2][2] === " X "){
        console.log("X has won!")
    }else if (board[0][0] === " X " && board[0][1] === " X " && board[0][2] === " X "){
        console.log("X has won!")
    }else if (board[1][0] === " X " && board[1][1] === " X " && board[1][2] === " X "){
        console.log("X has won!")
    }else if (board[2][0] === " X " && board[2][1] === " X " && board[2][2] === " X "){
        console.log("X has won!")
    }else if (board[0][2] === " X " && board[1][1] === " X " && board[2][0] === " X "){
        console.log("X has won!")
    }
}

function checkWinO(board){
    if (board[0][0] === " O " && board[0][1] === " O " && board[0][2] === " O "){
        console.log("O has won!")   
    }else if (board[0][0] === " O " && board[1][0] === " O " && board[2][0] === " O "){
        console.log("O has won!")   
    }else if (board[0][1] === " O " && board[1][1] === " O " && board[2][1] === " O"){
        console.log("O has won!")
    }else if (board[0][2] === " O " && board[1][2] === " O " && board[2][2] === " O "){
        console.log("O has won!")
    }else if (board[0][0] === " O " && board[0][1] === " O " && board[0][2] === " O "){
        console.log("O has won!")
    }else if (board[1][0] === " O " && board[1][1] === " O " && board[1][2] === " O "){
        console.log("O has won!")
    }else if (board[2][0] === " O " && board[2][1] === " O " && board[2][2] === " O "){
        console.log("O has won!")
    }else if (board[0][2] === " O " && board[1][1] === " O " && board[2][0] === " O "){
        console.log("O has won!")
    }
}

for (var i = 0; i < 9; i++) {
    var x = readlineSync.question("choose first location: ");
    var y = readlineSync.question("choose second location: ");
    var z = readlineSync.question("are you X's or O's?: ");

    playerTurn(x, y, z);
    
    checkWinO(board);
    checkWinX(board);
}