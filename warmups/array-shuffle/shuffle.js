var array = [1,2,3,4,5,6,7,8,9]

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffleArray(array){
    var newArray = []
    for(var i = 0; i < array; i++){
        if(getRandomInt(0,1) === 0){
            var y = array.length;
            newArray.push(pop);
            array.reverse;
        }else{
            var x = array[0];  
        }
    }
    console.log(newArray);
}

shuffleArray(array);
