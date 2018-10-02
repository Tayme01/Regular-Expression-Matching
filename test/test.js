let expect = require('chai').expect;
let isMatch = require('../solution');

describe('isMatch()', function (){
    it('should return false when string is "ss" and pattern is "a".', function (){
        let result = isMatch('ss', 'a');
        expect(result).to.be.equal(false);
    }),

    it('should return true when string is "aa" and pattern is "a*".', function (){
        let result = isMatch('aa', 'a*');
        expect(result).to.be.equal(true);
    }),

    it('should return true when string is "ab" and pattern is ".*".', function (){
        let result = isMatch('ab', '.*');
        expect(result).to.be.equal(true);
    }),

    it('should return true when string is "aab" and pattern is "c*a*b".', function (){
        let result = isMatch('aab', 'c*a*b');
        expect(result).to.be.equal(true);
    }),

    it('should return false when string is "mississippi" and pattern is "mis*is*p*.".', function (){
        let result = isMatch('mississippi', 'mis*is*p*.');
        expect(result).to.be.equal(false);
    });
});