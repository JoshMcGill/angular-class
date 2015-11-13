// Callback

function doesStuff(a, b, callback) {    
    console.log("callback being called");    
    var c = a + b;

        
    callback(c);
}

var result;

doesStuff(1, 2, function (sum) {    
    result = sum;
});

console.log(result); // 3


// More concrete

function myCallBackFunction(sum) {    
    console.log("called back! " + sum);
}
doesStuff(2, 3, myCallBackFunction);