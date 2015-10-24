var readline = require('readline-sync');

var dictionary = {};

function addNewWordToDictionary(word, definition) {
    var word = readline.question("Please type the word you want to use ");
    var definition = readline.question("Please type the definition of the word you used ");
    dictionary[word] = definition;
    console.log("Your word has been added");
}

function displayWordDefinition(word) {
    console.log(word + ": " + dictionary[word]);
}

function runUserChoice (choice){
    if (choice === "1"){
        var checkWord = readline.question("Which word would you like to look up? ")
        console.log("");
        displayWordDefinition(checkWord);
        
    }else if (choice === "2"){
        addNewWordToDictionary();
        
    }else if (choice === "3"){
        
    }else {
        console.log("You must type either 1, 2, or 3!");
    }
    console.log("");
}


console.log("* Welcome to your dictionary! *");

while (true){
    if(choice === "3"){
     break;   
    }
    console.log("What would you like to do? ");
    console.log("");
    console.log("[1]: Lookup a word");
    console.log("[2]: Add a new word");
    console.log("[3]: Quit the program (and loose all the words you added!)");
    var choice = readline.question("Please type 1, 2, 3: ");
    runUserChoice(choice);
}