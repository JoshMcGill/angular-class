function gcd(a, b) {

    if (b === 0) {

        return a;

    } else {

        return gcd(b, a % b);

    }

}

function gcdd(a, b, c) {
    b = gcd(b, c);

    if (b === 0) {

        return a;

    } else {

        return gcd(b, a % b);

    }

}


console.log(gcdd(5, 15, 30));
console.log(gcdd(24, 6, 18));
console.log(gcdd(8, 2, 1));
console.log(gcdd(3, 5, 6));
console.log(gcdd(8, 25, 4));
console.log(gcdd(2, 4, 6));
console.log(gcdd(3,15,27));  