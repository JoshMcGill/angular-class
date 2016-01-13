function toRoman(n) {
    var r = '',
        decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
        roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    for (var i = 0; i < decimals.length; i++) {
        while (n >= decimals[i]) {
            r += roman[i];
            n -= decimals[i];
        }
    }
    return r;
}

console.log(toRoman(5));
console.log(toRoman(3));
console.log(toRoman(10));
console.log(toRoman(20));
console.log(toRoman(3999));
console.log(toRoman(100));
console.log(toRoman(150));
console.log(toRoman(20000));