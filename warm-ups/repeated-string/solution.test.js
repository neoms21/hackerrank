var solution = require('./solution');

var assert = require('assert');

describe('repeated string tests', () => {
    it('should return count', () => {
        assert.equal(solution('aba', 10), 7);
        assert.equal(solution('a', 1000000000000), 1000000000000);
        assert.equal(solution('fargo', 50), 10);
        assert.equal(solution('jdiacikk', 899491), 112436);
        assert.equal(solution('yasuya', 458939), 152979);
        assert.equal(solution('aaaaa', 458939), 458939);
        assert.equal(solution('x', 970707), 0);
    });
});
//7546
