var people = ["Jon", "Jacob", "Jingle", "Heimer", "Smith"];
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var newArray = [];

for(var person = 0; person < people.length; person++){
    newArray.push(people[person]);
    for(var number = 0; number < alphabet.length; number++){
        newArray.push(alphabet[number].toUpperCase());
    }
}

console.log(newArray);
