function findPrimeNumbers(num) {
    var listOfPrimeNumbers = [1, 2, 3];
    for (var i = 3; i < num; i++) {
        var tempList = [];
        for (var x = 2; x <= i; x++) {
            if (i % x > 0) {
                tempList.push(x);
            }
            if (tempList.length === (i - 2)) {
                listOfPrimeNumbers.push(i);
                tempList = [];
            }

        }
    }
    return listOfPrimeNumbers.join(", ")
};

console.log(findPrimeNumbers(100));