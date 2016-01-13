function reverse(string){
    var final = '';
    for(var i = string.length -1; i >= 0; i--){
        final += string[i];   
    }
    console.log(final);
}

reverse('hello');