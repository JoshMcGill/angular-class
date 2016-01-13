describe('CharNum', function () {
    describe('findNum Function', function () {
        it('should change a letter to a number', function () {
            expect(findNum('Z')).toBe(9);
            expect(findNum('x')).toBe(9);
        });

        it('should return a number if the character is already a number', function () {
            expect(findNum(3)).toBe(3);
        });
    });
    
    describe('changeNumber Function', function(){
        it('should change the letters in the phone number to the numbers of a dialpad', function(){
            expect(changeNumber('1-800-CONTACTS')).toBe('1-800-26682287');
            expect(changeNumber('1800CONTACTS')).toBe('180026682287')
        })   
    })

})