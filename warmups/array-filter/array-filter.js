Array.prototype.myFilter = function (callback) {
    var array = this;
    var arrFinal = [];
    for (var i in array) {
        if (callback(array[i])) {
            arrFinal.push(array[i]);
        }
    }
    return arrFinal;
};

var numericArray = [8, 3, 4, 32, 1, 9, 3, 5, 42, 56];

var noLargeNumbers = numericArray.myFilter(function (element) {
    return element <= 5;
});

console.log(noLargeNumbers);