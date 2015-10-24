function anticaps(string){
        var fixedString = "";
    for(var x = 0; x <= string.length; x++){
        if(string[x] === string[x].toUpperCase()){
            fixedString += string[x].toLowerCase();
        }
        else{
            fixedString += string[x].toUpperCase();   
        }
    }
    console.log(fixedString);
}

anticaps("HelloWorld");