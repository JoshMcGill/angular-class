function createEvenArray(highestNum){
    var evenArray = [];
    for(i = 1; i <= highestNum; i++)  {
        if(i % 2 === 0){
            evenArray.push(i);
        }
    }
        console.log(evenArray);
        return evenArray;
}

function addOdds(evensArray){
    var oddArray = [];
        for(var i = 0; i < evensArray; i++){
            oddArray.push(evensArray[i]+1);
        }
        var sortArray = evensArray.concat(oddArray);
        return sortArray;
}

function sortNums(numbersArray){
    return numberArray.sort(function(a, b) {
        return a-b 
    });
}

console.log(sortNums(addOdds(createEvenArray(20))));