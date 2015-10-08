var numb1 = prompt("The first number to use:");
var numb2 = prompt("The second number to use:");

function addNumber(num1, num2){
   var result = parseInt(num1) + parseInt(num2);
    return result;
}

function minusNumber(num1, num2){
   var result = parseInt(num1) - parseInt(num2);
    return result;
}

function multiplyNumber(num1, num2){
   var result = parseInt(num1) * parseInt(num2);
    return result;
}

function divideNumber(num1, num2){
    if(num1 > 0 && num2 > 0){
        
        var result = parseInt(num1) / parseInt(num2);
        return result;
        
    } else {
        console.log("You cannot divide by 0!");   
    }
}

document.getElementById("add").addEventListener('click', function(){
    var x = addNumber(numb1, numb2);
    console.log("The answer is " + x);
});

document.getElementById("minus").addEventListener('click', function(){
    var x = minusNumber(numb1, numb2);
    console.log("The answer is " + x);
});

document.getElementById("multiply").addEventListener('click', function(){
    var x = multiplyNumber(numb1, numb2);
    console.log("The answer is " + x);
});

document.getElementById("divide").addEventListener('click', function(){
    var x = divideNumber(numb1, numb2);
    console.log("The answer is " + x);
});