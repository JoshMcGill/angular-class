var DayOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

function runSprinklers(currentDayOfWeek, currentHour){
    run = null;
    if(currentDayOfWeek === 'Saturday' || currentDayOfWeek === 'Sunday' && currentHour >= 9 && currentHour <= 11){
        run = true;
    }else if(currentDayOfWeek === 'Monday' || currentDayOfWeek === 'Tuesday' || currentDayOfWeek === 'Wednesday' || currentDayOfWeek === 'Thursday'){
        if(currentHour <= 8 && currentHour >= 6){
            run = true;
        }else{
            run = false;
        }
    }else{
        run = false;  
    }
    
    console.log(run);
    return run;   
}

runSprinklers(DayOfWeek[0], 3); //false
runSprinklers(DayOfWeek[0], 6); //true
runSprinklers(DayOfWeek[0], 8); //true
runSprinklers(DayOfWeek[0], 12); //false
runSprinklers(DayOfWeek[0], 11); //false