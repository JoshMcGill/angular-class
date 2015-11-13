function squirrelPlay(temp, summer){
    playing = null;
    if(temp <= 90 && temp >= 60 && summer === false){
        playing = true;
    }else if(temp >= 60 && temp <= 100 && summer === true){
        playing = true;
    }else{
        playing = false;   
    }
    
    console.log(playing);
}

squirrelPlay(50, true);  // false
squirrelPlay(50, false);  // false
squirrelPlay(60, true);  // true
squirrelPlay(60, false);  // true
squirrelPlay(75, true);  // true
squirrelPlay(75, false);  // true
squirrelPlay(90, true);  // true
squirrelPlay(90, false);  // true
squirrelPlay(95, true);  // true
squirrelPlay(95, false);  // false
squirrelPlay(100, true);  // true
squirrelPlay(100, false);  // false
squirrelPlay(110, true);  // false
squirrelPlay(110, false);  // false