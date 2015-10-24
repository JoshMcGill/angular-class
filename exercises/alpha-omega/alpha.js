var omega = '\u03A9';
var alpha = '\u03B1';

var finalArr = [];
for (var column = 0; column < 10; column++) {
    finalArr[column] = []
    for (var row = 0; row < 10; row++) {
        if (row % 2 === 0) {
            finalArr[column][row] = alpha;
        }else{
            finalArr[column][row] = omega;   
        }
    }
}

console.log(finalArr);