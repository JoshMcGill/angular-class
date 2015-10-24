function stringCreator(word){
    var firstchar = '';
    for(var i = 0; i <= word.length; i++){
        firstchar += word.slice(0, i);
    }
    console.log(firstchar);
}

stringCreator("hello");