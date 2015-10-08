var currentTime = 0

var incrementTime = function () {
    intervalHandler = setInterval(function (){
        currentTime += .01;
        updateTime();
    }, 10)
}

var updateTime = function () {
    document.getElementById('current-time').innerHTML = currentTime.toFixed(2);    
}

document.getElementById('start').addEventListener('click', function (){
   incrementTime();

})

document.getElementById('stop').addEventListener('click', function (){
    clearInterval(intervalHandler); 
})

document.getElementById('reset').addEventListener('click', function (){
    currentTime = 0;
    updateTime();
})