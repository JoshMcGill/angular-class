//setTimeout(function(){} 2000);
var names = ["Bob", "Braden", "Joshaa", "Jori", "Kayson", "Tyrel", "Trevin", "Cameron", "Jason", "Brennen"];

function attemptCall(name, dontCall, call, sendText){
    var aCount = 0;
    
    for(var i = 0; i < name.length; i++){
        if (name[i].toLowerCase() === 'a'){
            aCount++;
            console.log(aCount);
        }
    }
    
    console.log("Contacting " + name + "...");
    
    var person = name;
    
    if (name.length % 2 === 0){
        
        setTimeout(function(){
            call(name);
        }, 2000);
        
    } else if (aCount === 1){
        
        setTimeout(function(){
            sendText(name);
        }, 2000);
        
    }else{
        
        setTimeout(function(){
            dontCall(name);
        }, 2000); 
        
    }
    
    
}

function call(name){
        console.log("You have called " + name);
}

function dontCall(name){
        console.log("You didn't call " + name);
}

function sendText(name){
        console.log("Message has sent to " + name);
}

for(var i = 0; i < names.length; i++){
   attemptCall(names[i], dontCall, call, sendText);
}


