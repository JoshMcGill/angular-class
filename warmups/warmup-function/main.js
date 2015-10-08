function sumOfTwo(num1, num2){
    var sum = num1 = num2;
    return sum;
}

function largestOfNumbers(num1, num2, num3){
    var largest = [num1, num2, num3];
    return Math.max.apply(null, largest);
}

function oddOrEven(num1){
    if(num1 % 2 == 0){
        console.log(num1 + " Is an even number!");   
    }
    else {
        console.log(num1 + " Is an odd number!");   
    }
}

function stringReturn(string){
    if (string.length <= 20){
        console.log(string + string);   
    } else if (string.length > 20){
        console.log(string);   
    }
}

console.log(sumOfTwo(4, 6));

console.log(largestOfNumbers(4, 6, 8));

oddOrEven(7);

stringReturn(" Check if this is longer than twenty characters!");