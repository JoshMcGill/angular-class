var characters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',' ','1','2','3','4','5','6','7','8','9','!','@','#','$','%','&','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generatePassword(pwLength){
    var password = "";
    for(i = 0; i < pwLength; i++){
        var x = getRandomInt(1, characters.length - 1)
        var character = characters[x];
        password += character;
    }
    return password;
}

console.log(generatePassword(30));
