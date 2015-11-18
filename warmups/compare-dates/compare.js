function compareDates(date, date2) {
    if (Date.parse(date) > Date.parse(date2)) {
        console.log(date + ' is later than ' + date2);
    } else {
        console.log(date2 + " is later than " + date)   
    }
}


compareDates('01/20/1994', '01/20/1998');
compareDates('01/20/1996', '01/20/1996');
compareDates('01/20/1998', '01/20/1994');