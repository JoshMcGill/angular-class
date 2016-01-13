function checkPal(string) {
    string = string.replace(/[, ]+/g, " ").replace(/\s+/g, '');
    reversed = string.split("").reverse().join("");
    if (string.toLowerCase() === reversed.toLowerCase()) {
        return console.log("TRUE");
    } else {
        return console.log("FALSE");
    }
}

checkPal("A but tuba");
checkPal("A car, a man, a maraca");
checkPal("RaCeCaR");
checkPal("A new order began, a more Roman age bred Rowena");
checkPal("A nut for a jar of tuna");
checkPal("I am not a palindrome");