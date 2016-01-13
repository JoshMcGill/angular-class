//Objective: Receive a number given as a word (like 1-800-contacts) and change that number back into the digits on a phone.

// function that takes a letter argument and returns the corresponding dialpad number.

function findNum(char) {
    if (typeof char === "string") {
        char = char.toLowerCase();
    }

    switch (char) {

    case 'a':
    case 'b':
    case 'c':
        return 2;
        break;
    case 'd':
    case 'e':
    case 'f':
        return 3;
        break;
    case 'g':
    case 'h':
    case 'i':
        return 4;
        break;
    case 'j':
    case 'k':
    case 'l':
        return 5;
        break;
    case 'm':
    case 'n':
    case 'o':
        return 6;
        break;
    case 'p':
    case 'q':
    case 'r':
    case 's':
        return 7;
        break;
    case 't':
    case 'u':
    case 'v':
        return 8;
        break;
    case 'w':
    case 'x':
    case 'y':
    case 'z':
        return 9;
        break;
    default:
        return char;
        break;

    }

}

// function that iterates through the phone number and returns the numeric version
function changeNumber(number) {
    var finalNumber = '';
    for (var index in number) {
        var num = findNum(number[index]);
        finalNumber += num;
    }
    
    return finalNumber;
}