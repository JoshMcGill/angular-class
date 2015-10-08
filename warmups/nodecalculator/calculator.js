var readlineSync = require('readline-sync');

var firstNum = readlineSync.question('What is your first number? :');

var secondNum = readlineSync.question('What is your second number?');

console.log("You entered: " + firstNum + " and: " + secondNum);

var action = readlineSync.question('What do you want to do (sum, multiply, divide, subtract);');

firstNum = parseInt(firstNum);
secondNum = parseInt(secondNum);

if (action == 'sum'){
    var result = firstNum + secondNum;
    console.log('Sum: ' + result);
} else if (action == 'subtract'){
    var result = firstNum - secondNum;
    console.log('Sum: ' + result);
} else if (action == 'multiply'){
    var result = firstNum * secondNum;
    console.log('Sum: ' + result);
} else if (action == 'divide'){
    var result = firstNum / secondNum;
    console.log('Sum: ' + result);
} else {
    console.log('Invalid Choice');   
}