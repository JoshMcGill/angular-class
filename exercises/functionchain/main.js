function function1(iteration){
    console.log("something funny"); 
    function2();
}

function function2(iteration){
    console.log("something that is also funny");
    function3();
}

function function3(iteration){
    console.log("something even more funny");
    function4();
}

function function4(iteration){
    console.log("something that is also more funny");
    function5();
}

function function5(iteration){
    console.log("the most funny thing of all" + iteration);
    function1();
    iteration++
}

function5(1);