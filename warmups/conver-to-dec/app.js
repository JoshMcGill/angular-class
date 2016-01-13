function decToBHO(number, type) {
    type1 = type.toUpperCase();
    
    if (type1 === "B") {

        console.log(number.toString(2));

    } else if (type1 === "H") {

        console.log(number.toString(16));

    } else if (type1 === "O") {

        console.log(number.toString(8));

    }

}

decToBHO(654321, 'b');
decToBHO(654321,'h');
decToBHO(654321,'o');