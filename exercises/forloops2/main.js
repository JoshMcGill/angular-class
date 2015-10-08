//var addOrMultiplayNumbers = function(num1, num2, operation) {
//    if (operation === "add"){
//        return num1 + num2   
//    } else if (operation === "multiply") {
//        return num1 * num2;
//    }
//}
//
//var result1 = addOrMultiplayNumbers(2, 3, 'add');
//var result2 = addOrMultiplayNumbers(2, 3, 'multiply');
//
//console.log(result1);
//console.log(result2);

function function1() {
    console.log("im inside function1");   
    function2();
}

function function2() {
    console.log("im inside function2");   
}

function1();