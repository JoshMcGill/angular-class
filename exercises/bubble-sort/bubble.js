function bubbleSort(a){
    for(var i = 1; i < a.length; i++){
        for(var j = 0; j < a.length -1; j++){
            if(a[j] > a[j + 1]){
                
                var tempA = a[j];
                var tempB = a[j+1];
                
                a[j] = tempB;
                a[j+1] = tempA;
            
            }
        }
    }
}