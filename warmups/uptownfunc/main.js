function song(lyrics){
    var x = lyrics.join(' ');
    console.log(x);
}

function backwardsSong(lyrics){
    lyrics.reverse();
    console.log(lyrics.join(' '));
}

function everyOtherWord(lyrics){
    var everyOtherArray = [];
    for (i = 0; i < lyrics.length; i++){
        if (i % 2 == 0){
            everyOtherArray.push(lyrics[i]);   
        }
    }
    
    console.log(everyOtherArray.reverse().join(' '));
    
}

var uptownlyrics = ["This","hit","that","ice","cold","Michelle","Pfeiffer","that","white","gold","This","one","for","them","hood","girls","Them","good","girls","straight","masterpieces","Stylin","whilen","livin","it","up","in","the","city","Got","Chucks","on","with","Saint","Laurent","Got","kiss","myself","Im","so","pretty"]; 

song(uptownlyrics);
backwardsSong(uptownlyrics);
everyOtherWord(uptownlyrics);