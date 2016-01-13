// PRIME NUMBS
//function prime(n) {
//    var divisor = 2;
//    var factors = [];
//
//    while (n > divisor) {
//        if (n % divisor === 0) {
//            factors.push(divisor);
//            divisor++;
//        } else {
//            divisor++;
//        }
//    }
//    return factors;
//}
//
//console.log(prime(69));
//console.log(prime(237));

// FIBONACCI
//
//function fibonacci(n){
//    var fibo = [0, 1];
//    
//    if (n <= 2){
//        return 1   
//    }
//    
//    for (var i = 2; i <= n; i++){
//        fibo[i] = fibo[i - 1] + fibo[i - 2];
//    }
//    
//    return fibo[n];
//}
//
//
//
//function fibonacci(n){
//  if(n<=1)
//    return n;
//  else
//    return fibonacci(n-1) + fibonacci (n-2);  
//}
//
//console.log(fibonacci(12));

//function greatestCommonDivisor(a, b){
// 
//    var divisor = 2;
//    var greatest = 1;
//    
//    if(a < 2 || b < 2){
//        return 1;   
//    }
//    
//    while(a >= divisor && b >= divisor){
//        if(a % divisor === 0 && b % divisor === 0){
//            greatest = divisor;   
//        }else{
//            divisor++;   
//        }
//    }
//    return greatest;
//    
//}

// Filter Same
//
//function removeDouble(arr){
//    var exists = {};
//    var finalArray = [];
//    
//    for(var i = 0; i < arr.length; i++){
//        var elm = arr[i];
//        if(!exists[elm]){
//            finalArray.push(elm)
//            exists[elm] = true;
//        }
//    }
//    console.log(finalArray)
//    
//}
//
//removeDouble([1,3,3,3,1,5,6,7,8,1]);



