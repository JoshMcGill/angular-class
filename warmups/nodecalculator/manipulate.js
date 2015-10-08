var readlineSync = require('readline-sync');

// string.substring(1, 4)

console.log("Hello! My name is computer, help me get to know you! ");

var name = readlineSync.question('What is your first name? ');
var lastName = readlineSync.question('What is your last name? ');

console.log('Cool, nice to meet you ' + name.toUpperCase() + ".");

var age = readlineSync.question('I\'m a billion years old. What"s your age? ');

console.log('Awesome. So far, I know that your name is ' + name + ' ' + lastName + ' and you\'re ' + age + ' years old.'); 

var background = readlineSync.question('Give me a short background about you, and I"ll repeat back what I remember: ');

console.log("So, the info you gave me is " + background.length + " long.");
console.log("This was the last half:");

//var backgroundhalf = background.length / 2;

var backgroundhalff = background.substring(background.length / 2);

console.log(backgroundhalff);

var startsomewhereelse = readlineSync.question('Would you like me to start from somewhere else in your info? Choose a number in the range [0-' + background.length + ']: ');

console.log('Here you go: ');

var startSomewhere = background.substring(startsomewhereelse, background.length);

console.log(startSomewhere);

            
